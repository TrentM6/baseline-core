"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = update;
const fs_1 = require("fs");
const path_1 = require("path");
const config_js_1 = require("../config.js");
const git_js_1 = require("../git.js");
const init_js_1 = require("./init.js");
const js_yaml_1 = require("js-yaml");
const child_process_1 = require("child_process");
const SYNC_DIRS = ["skills", "frameworks", "scripts", "cli"];
function update() {
    const config = (0, config_js_1.readConfig)();
    const cwd = process.cwd();
    console.log(`\n  Checking for updates...`);
    const latest = (0, git_js_1.getLatestTag)(config.coreRepo);
    if (!latest) {
        console.log(`  Could not determine latest version.\n`);
        return;
    }
    if (!(0, git_js_1.isNewer)(latest, config.version)) {
        console.log(`  Already up to date (v${config.version}).\n`);
        return;
    }
    console.log(`  Updating v${config.version} → v${latest}...`);
    // Clone the latest tag to a temp directory
    const tmpDir = (0, git_js_1.cloneAtTag)(config.coreRepo, latest);
    // Sync each directory: full replace
    const stats = { skills: 0, frameworks: 0, scripts: 0 };
    for (const dir of SYNC_DIRS) {
        const srcDir = (0, path_1.join)(tmpDir, dir);
        const destDir = (0, path_1.join)(cwd, dir);
        if (!(0, fs_1.existsSync)(srcDir))
            continue;
        // Count items for summary (skip cli in counts)
        if (dir === "skills") {
            stats.skills = (0, fs_1.readdirSync)(srcDir).filter((f) => (0, fs_1.statSync)((0, path_1.join)(srcDir, f)).isDirectory()).length;
        }
        else if (dir !== "cli") {
            stats[dir] = (0, fs_1.readdirSync)(srcDir).filter((f) => f.endsWith(".md") || (0, fs_1.statSync)((0, path_1.join)(srcDir, f)).isDirectory()).length;
        }
        // Full replace
        if ((0, fs_1.existsSync)(destDir)) {
            (0, fs_1.rmSync)(destDir, { recursive: true });
        }
        (0, fs_1.cpSync)(srcDir, destDir, { recursive: true });
    }
    // Remove CLI source files (clients only need bin/, dist/, package.json)
    const cliCleanup = ["src", "tsconfig.json", "package-lock.json"];
    for (const item of cliCleanup) {
        const p = (0, path_1.join)(cwd, "cli", item);
        if ((0, fs_1.existsSync)(p))
            (0, fs_1.rmSync)(p, { recursive: true });
    }
    // Re-install CLI dependencies after update
    if ((0, fs_1.existsSync)((0, path_1.join)(cwd, "package.json"))) {
        try {
            (0, child_process_1.execSync)("npm install --silent", { cwd, stdio: "pipe" });
        }
        catch {
            // Non-fatal — CLI still works from previous install
        }
    }
    // Regenerate AI instruction files
    const clientName = config.client.name;
    const agentsTemplatePath = (0, path_1.join)(tmpDir, "agents-template.md");
    if ((0, fs_1.existsSync)(agentsTemplatePath)) {
        let template = (0, fs_1.readFileSync)(agentsTemplatePath, "utf-8");
        template = template.replace(/\{client_name\}/g, clientName);
        (0, fs_1.writeFileSync)((0, path_1.join)(cwd, "AGENTS.md"), template);
    }
    else {
        (0, fs_1.writeFileSync)((0, path_1.join)(cwd, "AGENTS.md"), (0, init_js_1.generateAgentsMd)(clientName));
    }
    (0, fs_1.writeFileSync)((0, path_1.join)(cwd, "CLAUDE.md"), (0, init_js_1.generateClaudeMdPointer)());
    (0, fs_1.mkdirSync)((0, path_1.join)(cwd, ".github"), { recursive: true });
    (0, fs_1.writeFileSync)((0, path_1.join)(cwd, ".github", "copilot-instructions.md"), (0, init_js_1.generateCopilotInstructions)());
    // Check for missing context files
    const contextPath = config.client.contextPath || "./context";
    checkMissingContext(tmpDir, (0, path_1.join)(cwd, contextPath));
    // Clean up temp dir
    (0, fs_1.rmSync)(tmpDir, { recursive: true });
    // Update config
    config.version = latest;
    config.lastUpdated = new Date().toISOString();
    (0, config_js_1.writeConfig)(config);
    console.log(`\n  Updated v${config.version} successfully.`);
    console.log(`  Skills: ${stats.skills} | Frameworks: ${stats.frameworks} | Scripts: ${stats.scripts}`);
    console.log();
}
function checkMissingContext(coreDir, contextDir) {
    const skillsDir = (0, path_1.join)(coreDir, "skills");
    if (!(0, fs_1.existsSync)(skillsDir))
        return;
    const missingMap = new Map();
    for (const skill of (0, fs_1.readdirSync)(skillsDir)) {
        const manifestPath = (0, path_1.join)(skillsDir, skill, "manifest.yaml");
        if (!(0, fs_1.existsSync)(manifestPath))
            continue;
        try {
            const manifest = (0, js_yaml_1.load)((0, fs_1.readFileSync)(manifestPath, "utf-8"));
            if (!manifest?.context?.extended)
                continue;
            for (const ctxPath of manifest.context.extended) {
                const match = ctxPath.match(/context\/\{client\}\/(.+)/);
                if (!match)
                    continue;
                const relPath = match[1];
                const fullPath = (0, path_1.join)(contextDir, relPath);
                if (!(0, fs_1.existsSync)(fullPath)) {
                    if (!missingMap.has(relPath))
                        missingMap.set(relPath, []);
                    missingMap.get(relPath).push(skill);
                }
            }
        }
        catch {
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
