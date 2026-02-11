import { createInterface } from "readline";
import {
  existsSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
} from "fs";
import { join, dirname } from "path";
import { load, dump } from "js-yaml";
import { readConfig } from "../config.js";

interface ContextPrompt {
  title: string;
  questions: string[];
}

interface ContextYaml {
  core?: string[];
  extended?: Record<string, string[]>;
}

let rlClosed = false;

function ask(rl: ReturnType<typeof createInterface>, question: string): Promise<string> {
  if (rlClosed) return Promise.resolve("");
  return new Promise((resolve) => {
    try {
      rl.question(question, resolve);
    } catch {
      resolve("");
    }
  });
}

export async function context(name?: string): Promise<void> {
  if (name) {
    await contextAdd(name);
  } else {
    await contextRefresh();
  }
}

/** Re-run context prompts for existing files */
async function contextRefresh(): Promise<void> {
  const config = readConfig();
  const cwd = process.cwd();
  const contextDir = join(cwd, config.client.contextPath || "./context");

  // Load prompts from local skills (they were pulled from core via update)
  const skillsDir = join(cwd, "skills");
  const prompts = loadPromptsFromLocal(cwd);

  if (Object.keys(prompts).length === 0) {
    console.error("  Error: No context prompts found. Run `baseline update` first.\n");
    process.exit(1);
  }

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  rl.on("close", () => { rlClosed = true; });

  console.log(`\n  Baseline Context — Update Context Files`);
  console.log(`  ────────────────────────────────────────\n`);
  console.log(`  Existing answers shown in [brackets]. Press Enter to keep them.\n`);

  let filesUpdated = 0;

  for (const [ctxFile, prompt] of Object.entries(prompts)) {
    const fullPath = join(contextDir, ctxFile);
    const existingContent = existsSync(fullPath) ? readFileSync(fullPath, "utf-8") : "";
    const existingAnswers = parseExistingAnswers(existingContent, prompt.questions);

    console.log(`  ── ${prompt.title} ──\n`);

    const answers: string[] = [];
    for (let i = 0; i < prompt.questions.length; i++) {
      const q = prompt.questions[i];
      const existing = existingAnswers[i] || "";
      const hint = existing ? ` [${truncate(existing, 60)}]` : "";

      const answer = await ask(rl, `  ${q}${hint}\n  > `);
      const final = answer.trim() || existing;
      if (final) {
        answers.push(`**${q}**\n${final}`);
      }
      console.log();
    }

    mkdirSync(dirname(fullPath), { recursive: true });

    if (answers.length > 0) {
      writeFileSync(fullPath, `# ${prompt.title}\n\n${answers.join("\n\n")}\n`);
      filesUpdated++;
    } else if (!existsSync(fullPath)) {
      writeFileSync(fullPath, `# ${prompt.title}\n\n<!-- Add your content here -->\n`);
    }
  }

  rl.close();
  console.log(`  ────────────────────────────────────────`);
  console.log(`  Updated ${filesUpdated} context files.\n`);
}

/** Create a new context file and wire it into context.yaml */
async function contextAdd(name: string): Promise<void> {
  const config = readConfig();
  const cwd = process.cwd();
  const contextDir = join(cwd, config.client.contextPath || "./context");
  const skillsDir = join(cwd, "skills");

  // Normalize name
  const fileName = name.endsWith(".md") ? name : `${name}.md`;
  const filePath = join(contextDir, "extended", fileName);

  if (existsSync(filePath)) {
    console.error(`\n  Error: context/extended/${fileName} already exists.\n`);
    process.exit(1);
  }

  // Get available skills
  const skills: string[] = [];
  if (existsSync(skillsDir)) {
    for (const entry of readdirSync(skillsDir)) {
      const manifestPath = join(skillsDir, entry, "manifest.yaml");
      if (existsSync(manifestPath)) {
        skills.push(entry);
      }
    }
  }
  skills.sort();

  const rl = createInterface({ input: process.stdin, output: process.stdout });
  rl.on("close", () => { rlClosed = true; });

  console.log(`\n  Baseline Context — Add New File`);
  console.log(`  ───────────────────────────────\n`);
  console.log(`  Creating: context/extended/${fileName}\n`);

  // Ask for a title
  const title = await ask(rl, `  Title for this context file: `);
  const fileTitle = title.trim() || name.replace(/\.md$/, "").replace(/-/g, " ");
  console.log();

  // Ask which skills should use this context
  console.log(`  Which skills should use this context file?`);
  console.log(`  Available skills:\n`);

  for (let i = 0; i < skills.length; i++) {
    console.log(`    ${i + 1}. ${skills[i]}`);
  }

  console.log();
  const selection = await ask(
    rl,
    `  Enter skill numbers (comma-separated) or "all":\n  > `
  );

  let selectedSkills: string[];
  if (selection.trim().toLowerCase() === "all") {
    selectedSkills = [...skills];
  } else {
    const indices = selection
      .split(",")
      .map((s) => parseInt(s.trim(), 10) - 1)
      .filter((i) => i >= 0 && i < skills.length);
    selectedSkills = indices.map((i) => skills[i]);
  }

  // Create the file
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `# ${fileTitle}\n\n<!-- Add your content here -->\n`);

  // Update context.yaml
  const contextYamlPath = join(contextDir, "context.yaml");
  let contextYaml: ContextYaml = { core: ["identity.md", "voice.md"], extended: {} };

  if (existsSync(contextYamlPath)) {
    const parsed = load(readFileSync(contextYamlPath, "utf-8")) as ContextYaml;
    if (parsed) contextYaml = parsed;
    if (!contextYaml.extended) contextYaml.extended = {};
  }

  if (selectedSkills.length > 0) {
    contextYaml.extended![fileName] = selectedSkills.sort();
  }

  // Write context.yaml back as formatted YAML
  let yamlOut = "# Maps context files to skills. Merged with skill manifests during execution.\n";
  yamlOut += "core:\n";
  for (const c of contextYaml.core || ["identity.md", "voice.md"]) {
    yamlOut += `  - ${c}\n`;
  }
  yamlOut += "extended:\n";
  const entries = Object.entries(contextYaml.extended || {}).sort(([a], [b]) => a.localeCompare(b));
  for (const [file, skillList] of entries) {
    yamlOut += `  ${file}:\n`;
    for (const s of skillList) {
      yamlOut += `    - ${s}\n`;
    }
  }

  writeFileSync(contextYamlPath, yamlOut);
  rl.close();

  console.log(`\n  ───────────────────────────────`);
  console.log(`  Created context/extended/${fileName}`);
  if (selectedSkills.length > 0) {
    console.log(`  Wired to: ${selectedSkills.join(", ")}`);
  }
  console.log(`  Updated context/context.yaml\n`);
}

/** Load context prompts from the local context-prompts.yaml or skill manifests */
function loadPromptsFromLocal(cwd: string): Record<string, ContextPrompt> {
  // First try context-prompts.yaml bundled with the skills
  // Since we don't bundle context-prompts.yaml in client repos,
  // we fetch it from the core repo via config
  const config = readConfig();
  const { cloneAtTag, getLatestTag } = require("../git.js");

  const latest = getLatestTag(config.coreRepo);
  if (!latest) return {};

  const tmpDir = cloneAtTag(config.coreRepo, latest);
  const promptsPath = join(tmpDir, "context-prompts.yaml");

  let prompts: Record<string, ContextPrompt> = {};
  if (existsSync(promptsPath)) {
    prompts = load(readFileSync(promptsPath, "utf-8")) as Record<string, ContextPrompt>;
  }

  const { rmSync } = require("fs");
  rmSync(tmpDir, { recursive: true });

  return prompts;
}

/** Parse existing answers from a context file */
function parseExistingAnswers(content: string, questions: string[]): string[] {
  const answers: string[] = [];
  for (const q of questions) {
    const marker = `**${q}**`;
    const idx = content.indexOf(marker);
    if (idx === -1) {
      answers.push("");
      continue;
    }

    const afterMarker = content.slice(idx + marker.length).trimStart();
    // Find the next question marker or end of file
    const nextMarkerIdx = afterMarker.indexOf("**");
    const answerText =
      nextMarkerIdx > 0
        ? afterMarker.slice(0, nextMarkerIdx).trim()
        : afterMarker.trim();
    answers.push(answerText);
  }
  return answers;
}

function truncate(str: string, max: number): string {
  const oneLine = str.replace(/\n/g, " ").trim();
  return oneLine.length > max ? oneLine.slice(0, max - 3) + "..." : oneLine;
}
