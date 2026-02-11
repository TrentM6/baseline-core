import { createInterface } from "readline";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  cpSync,
  rmSync,
} from "fs";
import { join, dirname } from "path";
import { load } from "js-yaml";
import { cloneAtTag, getLatestTag } from "../git.js";
import { execSync } from "child_process";

const SYNC_DIRS = ["skills", "frameworks", "scripts"];

interface ContextPrompt {
  title: string;
  questions: string[];
}

interface ManifestContext {
  core?: string[];
  extended?: string[];
}

interface Manifest {
  skill?: string;
  context?: ManifestContext;
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

export async function init(): Promise<void> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  rl.on("close", () => { rlClosed = true; });

  console.log(`\n  Baseline System — New Client Setup`);
  console.log(`  ───────────────────────────────────\n`);

  // 1. Gather basic info
  const clientName = await ask(rl, "  Client name: ");
  const folderName = await ask(
    rl,
    `  Folder name (${clientName.toLowerCase().replace(/\s+/g, "-")}-system): `
  );
  const folder =
    folderName.trim() ||
    `${clientName.toLowerCase().replace(/\s+/g, "-")}-system`;
  const coreRepo = await ask(rl, "  Core repo (TrentM6/baseline-core): ");
  const repo = coreRepo.trim() || "TrentM6/baseline-core";

  const destDir = join(process.cwd(), folder);

  if (existsSync(destDir)) {
    console.error(`\n  Error: ${folder} already exists.\n`);
    rl.close();
    process.exit(1);
  }

  // 2. Fetch latest from core
  console.log(`\n  Fetching latest from ${repo}...`);
  const latest = getLatestTag(repo);
  if (!latest) {
    console.error("  Could not determine latest version.\n");
    rl.close();
    process.exit(1);
  }
  console.log(`  Using v${latest}\n`);

  const tmpDir = cloneAtTag(repo, latest);

  // 3. Create folder structure
  mkdirSync(join(destDir, "context", "core"), { recursive: true });
  mkdirSync(join(destDir, "context", "extended"), { recursive: true });

  // 4. Copy skills, frameworks, scripts
  for (const dir of SYNC_DIRS) {
    const srcDir = join(tmpDir, dir);
    if (existsSync(srcDir)) {
      cpSync(srcDir, join(destDir, dir), { recursive: true });
    }
  }

  // 5. Collect unique context file paths from manifests
  const contextFiles = collectContextPaths(tmpDir);

  // 6. Load context-prompts.yaml from core
  const promptsPath = join(tmpDir, "context-prompts.yaml");
  let prompts: Record<string, ContextPrompt> = {};
  if (existsSync(promptsPath)) {
    prompts = load(readFileSync(promptsPath, "utf-8")) as Record<string, ContextPrompt>;
  }

  // 7. Ask questions and write context files
  console.log("  Let's set up your context files.\n");
  console.log("  (Press Enter to skip any question)\n");

  for (const ctxFile of contextFiles) {
    const prompt = prompts[ctxFile];
    if (!prompt) {
      // Create empty template for files without prompts
      const fullPath = join(destDir, "context", ctxFile);
      mkdirSync(dirname(fullPath), { recursive: true });
      writeFileSync(fullPath, `# ${ctxFile}\n\n<!-- Add your content here -->\n`);
      continue;
    }

    console.log(`  ── ${prompt.title} ──\n`);

    const answers: string[] = [];
    for (const q of prompt.questions) {
      const answer = await ask(rl, `  ${q}\n  > `);
      if (answer.trim()) {
        answers.push(`**${q}**\n${answer.trim()}`);
      }
      console.log();
    }

    const fullPath = join(destDir, "context", ctxFile);
    mkdirSync(dirname(fullPath), { recursive: true });

    if (answers.length > 0) {
      writeFileSync(
        fullPath,
        `# ${prompt.title}\n\n${answers.join("\n\n")}\n`
      );
    } else {
      writeFileSync(
        fullPath,
        `# ${prompt.title}\n\n<!-- Add your content here -->\n`
      );
    }
  }

  // 8. Create context.yaml
  const contextYaml = buildContextYaml(tmpDir, contextFiles);
  writeFileSync(join(destDir, "context", "context.yaml"), contextYaml);

  // 9. Create baseline.config.json
  const config = {
    version: latest,
    coreRepo: repo,
    lastUpdated: new Date().toISOString(),
    client: {
      name: clientName,
      contextPath: "./context",
    },
  };
  writeFileSync(
    join(destDir, "baseline.config.json"),
    JSON.stringify(config, null, 2) + "\n"
  );

  // 10. Create CLAUDE.md
  const templatePath = join(tmpDir, "claude-template.md");
  if (existsSync(templatePath)) {
    let template = readFileSync(templatePath, "utf-8");
    template = template.replace(/\{client_name\}/g, clientName);
    writeFileSync(join(destDir, "CLAUDE.md"), template);
  } else {
    writeFileSync(join(destDir, "CLAUDE.md"), generateClaudeMd(clientName));
  }

  // 11. Initialize git repo
  execSync("git init", { cwd: destDir, stdio: "pipe" });
  execSync("git add -A", { cwd: destDir, stdio: "pipe" });
  execSync(
    `git commit -m "Initialize ${clientName} Baseline System (v${latest})"`,
    { cwd: destDir, stdio: "pipe" }
  );

  // Clean up
  rmSync(tmpDir, { recursive: true });
  rl.close();

  console.log(`  ───────────────────────────────────`);
  console.log(`  ${clientName} system created at ./${folder}`);
  console.log(`  Version: v${latest}`);
  console.log(`  Skills: ${SYNC_DIRS.map((d) => existsSync(join(destDir, d)) ? readdirSync(join(destDir, d)).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0).join(" | ")}`);
  console.log(`\n  Next steps:`);
  console.log(`    cd ${folder}`);
  console.log(`    Edit context/ files to add more detail`);
  console.log(`    Run \`baseline status\` to check for updates\n`);
}

/** Scan all skill manifests and return unique context file paths (relative to context/) */
function collectContextPaths(coreDir: string): string[] {
  const skillsDir = join(coreDir, "skills");
  if (!existsSync(skillsDir)) return [];

  const paths = new Set<string>();

  // Always include core files
  paths.add("core/identity.md");
  paths.add("core/voice.md");

  for (const skill of readdirSync(skillsDir)) {
    const manifestPath = join(skillsDir, skill, "manifest.yaml");
    if (!existsSync(manifestPath)) continue;

    try {
      const manifest = load(readFileSync(manifestPath, "utf-8")) as Manifest;
      if (!manifest?.context) continue;

      for (const section of ["core", "extended"] as const) {
        const entries = manifest.context[section];
        if (!entries) continue;
        for (const ctxPath of entries) {
          const match = ctxPath.match(/context\/\{client\}\/(.+)/);
          if (match) paths.add(match[1]);
        }
      }
    } catch {
      // Skip unparseable manifests
    }
  }

  // Sort: core first, then extended
  return [...paths].sort((a, b) => {
    if (a.startsWith("core/") && !b.startsWith("core/")) return -1;
    if (!a.startsWith("core/") && b.startsWith("core/")) return 1;
    return a.localeCompare(b);
  });
}

/** Build context.yaml mapping context files to skills */
function buildContextYaml(coreDir: string, contextFiles: string[]): string {
  const skillsDir = join(coreDir, "skills");
  const extendedMap = new Map<string, string[]>();

  if (existsSync(skillsDir)) {
    for (const skill of readdirSync(skillsDir)) {
      const manifestPath = join(skillsDir, skill, "manifest.yaml");
      if (!existsSync(manifestPath)) continue;

      try {
        const manifest = load(readFileSync(manifestPath, "utf-8")) as Manifest;
        if (!manifest?.context?.extended) continue;

        for (const ctxPath of manifest.context.extended) {
          const match = ctxPath.match(/context\/\{client\}\/extended\/(.+)/);
          if (!match) continue;
          const file = match[1];
          if (!extendedMap.has(file)) extendedMap.set(file, []);
          extendedMap.get(file)!.push(skill);
        }
      } catch {
        // Skip
      }
    }
  }

  let yaml = "# Maps context files to skills. Merged with skill manifests during execution.\n";
  yaml += "core:\n";
  yaml += "  - identity.md       # loaded by all skills\n";
  yaml += "  - voice.md          # loaded by all skills\n";
  yaml += "extended:\n";

  for (const [file, skills] of [...extendedMap.entries()].sort()) {
    yaml += `  ${file}:\n`;
    for (const s of skills.sort()) {
      yaml += `    - ${s}\n`;
    }
  }

  return yaml;
}

/** Generate a CLAUDE.md for the client if no template exists in core */
function generateClaudeMd(clientName: string): string {
  return `# ${clientName} — Baseline System

> This file is automatically loaded at the start of every Claude Code session. It enforces consistent skill execution.

---

## What This Project Is

The Baseline System is a complete AI system for product work with four components:

1. **Skills** (\`skills/\`) — Domain expertise (12 universal skills)
2. **Context** (\`context/\`) — Business-specific knowledge
3. **Frameworks** (\`frameworks/\`) — Reusable methodologies
4. **Scripts** (\`scripts/\`) — Delivery to external tools

Skills provide methodology. Context personalizes output. Frameworks provide reusable patterns. Scripts deliver to tools.

---

## Skill Execution Protocol

When a user invokes any skill — by name, by file path, or by describing a task that maps to a skill — you MUST follow this exact sequence. Do not skip steps.

### Step 1: Identify the Skill

Match the user's request to a skill using this table:

| Task | Skill |
|------|-------|
| Strategic decisions, roadmaps, prioritization | \`strategic-advisory\` |
| User research, interviews, synthesis | \`research-synthesis\` |
| PRDs, specs, briefs, stakeholder updates | \`product-communications\` |
| Interface design, wireframes, UI copy | \`ux-design\` |
| Metrics, dashboards, A/B tests | \`product-analytics\` |
| Coded prototypes, demos, POCs | \`prototyping\` |
| Planning, tracking, sprints | \`project-management\` |
| User guides, help center, release notes | \`technical-documentation\` |
| Presentations, graphics, diagrams | \`brand-design\` |
| LinkedIn content, website copy, campaigns | \`marketing\` |
| Outreach, proposals, discovery calls | \`sales\` |
| Creating new skills | \`skill-building\` |

### Step 2: Read the Manifest

Every skill has a \`manifest.yaml\` in its folder that lists every file the skill needs. Read it:

\`\`\`
skills/[skill-name]/manifest.yaml
\`\`\`

This is the source of truth for what files to load. Do not guess or rely on file paths embedded in markdown prose.

### Step 3: Load All Files Listed in the Manifest

The manifest has three sections. Load them in this order:

1. **\`always_load\`** — Read every file in this list. These are the skill file and framework files. Always load all of them.

2. **\`context\`** — These paths use \`{client}\` as a placeholder. Replace \`{client}\` with the context folder path for this project. Read every file under \`core\` and \`extended\`. If a context file does not exist, skip it and continue — not all context files may be populated.

3. **\`references\`** — These are detailed reference materials. Load them when the task benefits from detailed guidance (e.g., document templates when writing a PRD, content playbooks when creating a campaign). For straightforward tasks, you may skip references.

**Do not skip files.** Do not summarize file names instead of reading them. Treat every path in the manifest as a load instruction.

### Step 4: Execute the Skill's Workflow

After loading all files, follow the workflow defined in the skill file and the workflow orchestration framework:

1. **Plan** — Present your plan to the user. Wait for approval before proceeding.
2. **Clarify** — Ask the skill's clarifying questions. Do not proceed with missing information.
3. **Execute** — Do the domain-specific work using the skill's methodology and loaded context.
4. **Validate** — Run the skill's quality checks. If any fail, apply error recovery and re-validate.

### Step 5: Deliver (If Requested)

If the user wants output delivered to an external tool, read the relevant script from \`scripts/\` and follow its instructions.

---

## Session Management

- Scope each session to one major task. Multi-task sessions degrade output quality.
- After completing a major deliverable, recommend starting a fresh session.
- If the conversation has gone through 3+ revision cycles, proactively suggest a session break.

---

## Anti-Patterns — Do Not

- **Skip reading the manifest** — Always read \`manifest.yaml\` first. It is the source of truth for what files a skill needs.
- **Acknowledge file paths without reading them** — If the manifest lists a file, read it.
- **Skip the Plan step** — Always present a plan and wait for approval.
- **Proceed without clarifying** — Ask the skill's questions before executing.
- **Skip quality checks** — Run every check defined by the skill.
- **Overload the session** — One major task per session. Recommend fresh sessions after milestones.
`;
}
