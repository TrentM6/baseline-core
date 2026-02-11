import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync, cpSync, statSync } from "fs";
import { join, basename } from "path";
import { readConfig, writeConfig } from "../config.js";
import { getLatestTag, isNewer, cloneAtTag } from "../git.js";
import { generateAgentsMd, generateClaudeMdPointer, generateCopilotInstructions, generateReadme } from "./init.js";
import { load } from "js-yaml";
import { execSync } from "child_process";

const SYNC_DIRS = ["skills", "frameworks", "scripts", "cli"];

export function update(): void {
  const config = readConfig();
  const cwd = process.cwd();

  console.log(`\n  Checking for updates...`);
  const latest = getLatestTag(config.coreRepo);

  if (!latest) {
    console.log(`  Could not determine latest version.\n`);
    return;
  }

  if (!isNewer(latest, config.version)) {
    console.log(`  Already up to date (v${config.version}).\n`);
    return;
  }

  console.log(`  Updating v${config.version} → v${latest}...`);

  // Clone the latest tag to a temp directory
  const tmpDir = cloneAtTag(config.coreRepo, latest);

  // Sync each directory: full replace
  const stats = { skills: 0, frameworks: 0, scripts: 0 };

  for (const dir of SYNC_DIRS) {
    const srcDir = join(tmpDir, dir);
    const destDir = join(cwd, dir);

    if (!existsSync(srcDir)) continue;

    // Count items for summary (skip cli in counts)
    if (dir === "skills") {
      stats.skills = readdirSync(srcDir).filter((f) =>
        statSync(join(srcDir, f)).isDirectory()
      ).length;
    } else if (dir !== "cli") {
      stats[dir as keyof typeof stats] = readdirSync(srcDir).filter(
        (f) => f.endsWith(".md") || statSync(join(srcDir, f)).isDirectory()
      ).length;
    }

    // Full replace
    if (existsSync(destDir)) {
      rmSync(destDir, { recursive: true });
    }
    cpSync(srcDir, destDir, { recursive: true });
  }

  // Remove CLI source files (clients only need bin/, dist/, package.json)
  const cliCleanup = ["src", "tsconfig.json", "package-lock.json"];
  for (const item of cliCleanup) {
    const p = join(cwd, "cli", item);
    if (existsSync(p)) rmSync(p, { recursive: true });
  }

  // Re-install CLI dependencies after update
  if (existsSync(join(cwd, "package.json"))) {
    try {
      execSync("npm install --silent", { cwd, stdio: "pipe" });
    } catch {
      // Non-fatal — CLI still works from previous install
    }
  }

  // Regenerate AI instruction files
  const clientName = config.client.name;
  const agentsTemplatePath = join(tmpDir, "agents-template.md");
  if (existsSync(agentsTemplatePath)) {
    let template = readFileSync(agentsTemplatePath, "utf-8");
    template = template.replace(/\{client_name\}/g, clientName);
    writeFileSync(join(cwd, "AGENTS.md"), template);
  } else {
    writeFileSync(join(cwd, "AGENTS.md"), generateAgentsMd(clientName));
  }
  writeFileSync(join(cwd, "CLAUDE.md"), generateClaudeMdPointer());
  mkdirSync(join(cwd, ".github"), { recursive: true });
  writeFileSync(join(cwd, ".github", "copilot-instructions.md"), generateCopilotInstructions());
  writeFileSync(join(cwd, "README.md"), generateReadme(clientName));

  // Check for missing context files
  const contextPath = config.client.contextPath || "./context";
  checkMissingContext(tmpDir, join(cwd, contextPath));

  // Clean up temp dir
  rmSync(tmpDir, { recursive: true });

  // Update config
  config.version = latest;
  config.lastUpdated = new Date().toISOString();
  writeConfig(config);

  console.log(`\n  Updated v${config.version} successfully.`);
  console.log(`  Skills: ${stats.skills} | Frameworks: ${stats.frameworks} | Scripts: ${stats.scripts}`);
  console.log();
}

interface ManifestContext {
  core?: string[];
  extended?: string[];
}

interface Manifest {
  context?: ManifestContext;
}

function checkMissingContext(coreDir: string, contextDir: string): void {
  const skillsDir = join(coreDir, "skills");
  if (!existsSync(skillsDir)) return;

  const missingMap = new Map<string, string[]>();

  for (const skill of readdirSync(skillsDir)) {
    const manifestPath = join(skillsDir, skill, "manifest.yaml");
    if (!existsSync(manifestPath)) continue;

    try {
      const manifest = load(readFileSync(manifestPath, "utf-8")) as Manifest;
      if (!manifest?.context?.extended) continue;

      for (const ctxPath of manifest.context.extended) {
        const match = ctxPath.match(/context\/\{client\}\/(.+)/);
        if (!match) continue;

        const relPath = match[1];
        const fullPath = join(contextDir, relPath);
        if (!existsSync(fullPath)) {
          if (!missingMap.has(relPath)) missingMap.set(relPath, []);
          missingMap.get(relPath)!.push(skill);
        }
      }
    } catch {
      // Skip unparseable manifests
    }
  }

  if (missingMap.size > 0) {
    console.log(`\n  Missing context files:`);
    for (const [file, skills] of missingMap) {
      console.log(`    → ${file} (used by ${skills.join(", ")})`);
    }
    console.log(`  Create these files to get the most out of these skills.`);
  }
}
