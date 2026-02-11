import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync, cpSync, statSync } from "fs";
import { join, basename } from "path";
import { readConfig, writeConfig } from "../config.js";
import { getLatestTag, isNewer, cloneAtTag } from "../git.js";
import { generateAgentsMd, generateClaudeMdPointer, generateCopilotInstructions, generateReadme } from "./init.js";
import { load } from "js-yaml";
import { execSync } from "child_process";

// Sync skills, frameworks, scripts first — cli/ is replaced LAST
// so the currently running process doesn't lose its own files mid-execution.
const CONTENT_DIRS = ["skills", "frameworks", "scripts"];

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

  // Sync content directories first (skills, frameworks, scripts)
  const stats = { skills: 0, frameworks: 0, scripts: 0 };

  for (const dir of CONTENT_DIRS) {
    const srcDir = join(tmpDir, dir);
    const destDir = join(cwd, dir);

    if (!existsSync(srcDir)) continue;

    // Count items for summary
    if (dir === "skills") {
      stats.skills = readdirSync(srcDir).filter((f) =>
        statSync(join(srcDir, f)).isDirectory()
      ).length;
    } else {
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

  // Update config version BEFORE replacing cli/ — if the cli/ swap
  // causes the process to error, the version is already recorded so
  // a re-run won't re-download and re-apply the same update.
  config.version = latest;
  config.lastUpdated = new Date().toISOString();
  writeConfig(config);

  // Replace cli/ LAST — this is the currently running code, so anything
  // after this point may fail if Node can't resolve replaced modules.
  // IMPORTANT: Overwrite in-place instead of delete-then-copy. The client's
  // node_modules/baseline-cli is a symlink to cli/, so deleting cli/ first
  // would break the symlink and leave dist/index.js missing if anything fails.
  const cliSrc = join(tmpDir, "cli");
  const cliDest = join(cwd, "cli");
  if (existsSync(cliSrc)) {
    cpSync(cliSrc, cliDest, { recursive: true, force: true });

    // Remove CLI source files (clients only need bin/, dist/, package.json)
    const cliCleanup = ["src", "tsconfig.json", "package-lock.json"];
    for (const item of cliCleanup) {
      const p = join(cwd, "cli", item);
      if (existsSync(p)) rmSync(p, { recursive: true });
    }
  }

  // Re-install CLI dependencies after update
  if (existsSync(join(cwd, "package.json"))) {
    try {
      execSync("npm install --silent", { cwd, stdio: "pipe" });
    } catch {
      // Non-fatal — CLI still works from previous install
    }
  }

  // Clean up temp dir
  rmSync(tmpDir, { recursive: true });

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
