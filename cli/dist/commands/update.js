"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = update;
const fs_1 = require("fs");
const path_1 = require("path");
const config_js_1 = require("../config.js");
const git_js_1 = require("../git.js");
const init_js_1 = require("./init.js");
const js_yaml_1 = require("js-yaml");
const child_process_1 = require("child_process");
const ui = __importStar(require("../ui.js"));
// Sync skills, frameworks, scripts first — cli/ is replaced LAST
// so the currently running process doesn't lose its own files mid-execution.
const CONTENT_DIRS = ["skills", "frameworks", "scripts"];
function update() {
    const config = (0, config_js_1.readConfig)();
    const cwd = process.cwd();
    console.log();
    const spin1 = ui.spinner("Checking for updates...");
    const latest = (0, git_js_1.getLatestTag)(config.coreRepo);
    if (!latest) {
        spin1.stop();
        ui.error("Could not determine latest version.");
        console.log();
        return;
    }
    if (!(0, git_js_1.isNewer)(latest, config.version)) {
        spin1.stop(`Already up to date (v${config.version})`);
        console.log();
        return;
    }
    spin1.stop(`Update available: v${config.version} ${ui.accent("→")} v${latest}`);
    console.log();
    // Clone the latest tag to a temp directory
    const spin2 = ui.spinner("Downloading...");
    const tmpDir = (0, git_js_1.cloneAtTag)(config.coreRepo, latest);
    spin2.stop("Downloaded");
    // Sync content directories first (skills, frameworks, scripts)
    const stats = { skills: 0, frameworks: 0, scripts: 0 };
    for (const dir of CONTENT_DIRS) {
        const srcDir = (0, path_1.join)(tmpDir, dir);
        const destDir = (0, path_1.join)(cwd, dir);
        if (!(0, fs_1.existsSync)(srcDir))
            continue;
        // Count items for summary
        if (dir === "skills") {
            stats.skills = (0, fs_1.readdirSync)(srcDir).filter((f) => (0, fs_1.statSync)((0, path_1.join)(srcDir, f)).isDirectory()).length;
        }
        else {
            stats[dir] = (0, fs_1.readdirSync)(srcDir).filter((f) => f.endsWith(".md") || (0, fs_1.statSync)((0, path_1.join)(srcDir, f)).isDirectory()).length;
        }
        // Full replace
        if ((0, fs_1.existsSync)(destDir)) {
            (0, fs_1.rmSync)(destDir, { recursive: true });
        }
        (0, fs_1.cpSync)(srcDir, destDir, { recursive: true });
        ui.success(`${dir.charAt(0).toUpperCase() + dir.slice(1)} updated (${stats[dir]})`);
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
    (0, fs_1.writeFileSync)((0, path_1.join)(cwd, "README.md"), (0, init_js_1.generateReadme)(clientName));
    ui.success("AI instructions regenerated");
    // Check for missing context files
    const contextPath = config.client.contextPath || "./context";
    checkMissingContext(tmpDir, (0, path_1.join)(cwd, contextPath));
    // Update config version BEFORE replacing cli/ — if the cli/ swap
    // causes the process to error, the version is already recorded so
    // a re-run won't re-download and re-apply the same update.
    config.version = latest;
    config.lastUpdated = new Date().toISOString();
    (0, config_js_1.writeConfig)(config);
    // Replace cli/ LAST — this is the currently running code, so anything
    // after this point may fail if Node can't resolve replaced modules.
    // IMPORTANT: Overwrite in-place instead of delete-then-copy. The client's
    // node_modules/baseline-cli is a symlink to cli/, so deleting cli/ first
    // would break the symlink and leave dist/index.js missing if anything fails.
    const cliSrc = (0, path_1.join)(tmpDir, "cli");
    const cliDest = (0, path_1.join)(cwd, "cli");
    if ((0, fs_1.existsSync)(cliSrc)) {
        (0, fs_1.cpSync)(cliSrc, cliDest, { recursive: true, force: true });
        // Remove CLI source files (clients only need bin/, dist/, package.json)
        const cliCleanup = ["src", "tsconfig.json", "package-lock.json"];
        for (const item of cliCleanup) {
            const p = (0, path_1.join)(cwd, "cli", item);
            if ((0, fs_1.existsSync)(p))
                (0, fs_1.rmSync)(p, { recursive: true });
        }
    }
    ui.success("CLI updated");
    // Re-install CLI dependencies after update
    if ((0, fs_1.existsSync)((0, path_1.join)(cwd, "package.json"))) {
        const spin3 = ui.spinner("Installing dependencies...");
        try {
            (0, child_process_1.execSync)("npm install --silent", { cwd, stdio: "pipe" });
            spin3.stop("Dependencies installed");
        }
        catch {
            spin3.stop("Dependencies (using previous install)");
        }
    }
    // Clean up temp dir
    (0, fs_1.rmSync)(tmpDir, { recursive: true });
    ui.summary(`Updated to v${latest}`, [
        ["Skills:", `${stats.skills}`],
        ["Frameworks:", `${stats.frameworks}`],
        ["Scripts:", `${stats.scripts}`],
    ]);
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
        console.log();
        ui.warn("Missing context files:");
        for (const [file, skills] of missingMap) {
            console.log(`    ${ui.dim("→")} ${file} ${ui.dim(`(used by ${skills.join(", ")})`)}`);
        }
        ui.info("Create these files to get the most out of these skills.");
    }
}
