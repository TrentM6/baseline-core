"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const readline_1 = require("readline");
const fs_1 = require("fs");
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
const git_js_1 = require("../git.js");
const child_process_1 = require("child_process");
const SYNC_DIRS = ["skills", "frameworks", "scripts", "cli"];
let rlClosed = false;
function ask(rl, question) {
    if (rlClosed)
        return Promise.resolve("");
    return new Promise((resolve) => {
        try {
            rl.question(question, resolve);
        }
        catch {
            resolve("");
        }
    });
}
async function init() {
    const rl = (0, readline_1.createInterface)({ input: process.stdin, output: process.stdout });
    rl.on("close", () => { rlClosed = true; });
    console.log(`\n  Baseline System — New Client Setup`);
    console.log(`  ───────────────────────────────────\n`);
    // 1. Gather basic info
    const clientName = await ask(rl, "  What's your company or project name? ");
    const repo = "TrentM6/baseline-core";
    // Use current directory if empty, otherwise create a subfolder
    const cwd = process.cwd();
    const npxArtifacts = new Set(["node_modules", "package-lock.json", "package.json"]);
    const cwdEntries = (0, fs_1.readdirSync)(cwd).filter((f) => !f.startsWith(".") && !npxArtifacts.has(f));
    const destDir = cwdEntries.length === 0
        ? cwd
        : (0, path_1.join)(cwd, `${clientName.toLowerCase().replace(/\s+/g, "-")}-system`);
    if (destDir !== cwd && (0, fs_1.existsSync)(destDir)) {
        console.error(`\n  Error: ${destDir} already exists.\n`);
        rl.close();
        process.exit(1);
    }
    // 2. Fetch latest from core
    console.log(`\n  Fetching latest from ${repo}...`);
    const latest = (0, git_js_1.getLatestTag)(repo);
    if (!latest) {
        console.error("  Could not determine latest version.\n");
        rl.close();
        process.exit(1);
    }
    console.log(`  Using v${latest}\n`);
    const tmpDir = (0, git_js_1.cloneAtTag)(repo, latest);
    // 3. Create folder structure
    (0, fs_1.mkdirSync)((0, path_1.join)(destDir, "context", "core"), { recursive: true });
    (0, fs_1.mkdirSync)((0, path_1.join)(destDir, "context", "extended"), { recursive: true });
    // 4. Copy skills, frameworks, scripts, cli
    for (const dir of SYNC_DIRS) {
        const srcDir = (0, path_1.join)(tmpDir, dir);
        if ((0, fs_1.existsSync)(srcDir)) {
            (0, fs_1.cpSync)(srcDir, (0, path_1.join)(destDir, dir), { recursive: true });
        }
    }
    // Remove CLI source files (clients only need bin/, dist/, package.json)
    const cliCleanup = ["src", "tsconfig.json", "package-lock.json"];
    for (const item of cliCleanup) {
        const p = (0, path_1.join)(destDir, "cli", item);
        if ((0, fs_1.existsSync)(p))
            (0, fs_1.rmSync)(p, { recursive: true });
    }
    // 5. Collect unique context file paths from manifests
    const contextFiles = collectContextPaths(tmpDir);
    // 6. Load context-prompts.yaml from core
    const promptsPath = (0, path_1.join)(tmpDir, "context-prompts.yaml");
    let prompts = {};
    if ((0, fs_1.existsSync)(promptsPath)) {
        prompts = (0, js_yaml_1.load)((0, fs_1.readFileSync)(promptsPath, "utf-8"));
    }
    // 7. Ask questions and write context files
    console.log("  Let's set up your context files.\n");
    console.log("  (Press Enter to skip any question)\n");
    for (const ctxFile of contextFiles) {
        const prompt = prompts[ctxFile];
        if (!prompt) {
            // Create empty template for files without prompts
            const fullPath = (0, path_1.join)(destDir, "context", ctxFile);
            (0, fs_1.mkdirSync)((0, path_1.dirname)(fullPath), { recursive: true });
            (0, fs_1.writeFileSync)(fullPath, `# ${ctxFile}\n\n<!-- Add your content here -->\n`);
            continue;
        }
        console.log(`  ── ${prompt.title} ──\n`);
        const answers = [];
        // Pre-fill company name into identity file
        if (ctxFile === "core/identity.md") {
            answers.push(`**What is your company name?**\n${clientName}`);
        }
        for (const q of prompt.questions) {
            const answer = await ask(rl, `  ${q}\n  > `);
            if (answer.trim()) {
                answers.push(`**${q}**\n${answer.trim()}`);
            }
            console.log();
        }
        const fullPath = (0, path_1.join)(destDir, "context", ctxFile);
        (0, fs_1.mkdirSync)((0, path_1.dirname)(fullPath), { recursive: true });
        if (answers.length > 0) {
            (0, fs_1.writeFileSync)(fullPath, `# ${prompt.title}\n\n${answers.join("\n\n")}\n`);
        }
        else {
            (0, fs_1.writeFileSync)(fullPath, `# ${prompt.title}\n\n<!-- Add your content here -->\n`);
        }
    }
    // 8. Create context.yaml
    const contextYaml = buildContextYaml(tmpDir, contextFiles);
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "context", "context.yaml"), contextYaml);
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
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "baseline.config.json"), JSON.stringify(config, null, 2) + "\n");
    // 10. Create CLAUDE.md
    const templatePath = (0, path_1.join)(tmpDir, "claude-template.md");
    if ((0, fs_1.existsSync)(templatePath)) {
        let template = (0, fs_1.readFileSync)(templatePath, "utf-8");
        template = template.replace(/\{client_name\}/g, clientName);
        (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "CLAUDE.md"), template);
    }
    else {
        (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "CLAUDE.md"), generateClaudeMd(clientName));
    }
    // 11. Create root package.json for local CLI access
    const rootPkg = {
        name: `${clientName.toLowerCase().replace(/\s+/g, "-")}-system`,
        version: "1.0.0",
        private: true,
        description: `${clientName} Baseline System`,
        dependencies: {
            "baseline-cli": "file:cli",
        },
    };
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "package.json"), JSON.stringify(rootPkg, null, 2) + "\n");
    // 12. Install CLI locally so npx baseline works
    console.log(`\n  Installing CLI...`);
    (0, child_process_1.execSync)("npm install --silent", { cwd: destDir, stdio: "pipe" });
    // 13. Create .gitignore
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, ".gitignore"), "node_modules/\n.DS_Store\n");
    // 14. Initialize git repo
    (0, child_process_1.execSync)("git init", { cwd: destDir, stdio: "pipe" });
    (0, child_process_1.execSync)("git add -A", { cwd: destDir, stdio: "pipe" });
    (0, child_process_1.execSync)(`git commit -m "Initialize ${clientName} Baseline System (v${latest})"`, { cwd: destDir, stdio: "pipe" });
    // Clean up
    (0, fs_1.rmSync)(tmpDir, { recursive: true });
    rl.close();
    const displayPath = destDir === cwd ? "." : `./${clientName.toLowerCase().replace(/\s+/g, "-")}-system`;
    const skillCount = (0, fs_1.existsSync)((0, path_1.join)(destDir, "skills")) ? (0, fs_1.readdirSync)((0, path_1.join)(destDir, "skills")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;
    const frameworkCount = (0, fs_1.existsSync)((0, path_1.join)(destDir, "frameworks")) ? (0, fs_1.readdirSync)((0, path_1.join)(destDir, "frameworks")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;
    const scriptCount = (0, fs_1.existsSync)((0, path_1.join)(destDir, "scripts")) ? (0, fs_1.readdirSync)((0, path_1.join)(destDir, "scripts")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;
    console.log(`  ───────────────────────────────────`);
    console.log(`  ${clientName} system created at ${displayPath}`);
    console.log(`  Version: v${latest}`);
    console.log(`  ${skillCount} skills | ${frameworkCount} frameworks | ${scriptCount} scripts`);
    console.log(`\n  Next steps:`);
    if (destDir !== cwd) {
        console.log(`    cd ${clientName.toLowerCase().replace(/\s+/g, "-")}-system`);
    }
    console.log(`    Edit context/ files to add more detail`);
    console.log(`    Run \`npx baseline status\` to check for updates\n`);
}
/** Scan all skill manifests and return unique context file paths (relative to context/) */
function collectContextPaths(coreDir) {
    const skillsDir = (0, path_1.join)(coreDir, "skills");
    if (!(0, fs_1.existsSync)(skillsDir))
        return [];
    const paths = new Set();
    // Always include core files
    paths.add("core/identity.md");
    paths.add("core/voice.md");
    for (const skill of (0, fs_1.readdirSync)(skillsDir)) {
        const manifestPath = (0, path_1.join)(skillsDir, skill, "manifest.yaml");
        if (!(0, fs_1.existsSync)(manifestPath))
            continue;
        try {
            const manifest = (0, js_yaml_1.load)((0, fs_1.readFileSync)(manifestPath, "utf-8"));
            if (!manifest?.context)
                continue;
            for (const section of ["core", "extended"]) {
                const entries = manifest.context[section];
                if (!entries)
                    continue;
                for (const ctxPath of entries) {
                    const match = ctxPath.match(/context\/\{client\}\/(.+)/);
                    if (match)
                        paths.add(match[1]);
                }
            }
        }
        catch {
            // Skip unparseable manifests
        }
    }
    // Sort: core first, then extended
    return [...paths].sort((a, b) => {
        if (a.startsWith("core/") && !b.startsWith("core/"))
            return -1;
        if (!a.startsWith("core/") && b.startsWith("core/"))
            return 1;
        return a.localeCompare(b);
    });
}
/** Build context.yaml mapping context files to skills */
function buildContextYaml(coreDir, contextFiles) {
    const skillsDir = (0, path_1.join)(coreDir, "skills");
    const extendedMap = new Map();
    if ((0, fs_1.existsSync)(skillsDir)) {
        for (const skill of (0, fs_1.readdirSync)(skillsDir)) {
            const manifestPath = (0, path_1.join)(skillsDir, skill, "manifest.yaml");
            if (!(0, fs_1.existsSync)(manifestPath))
                continue;
            try {
                const manifest = (0, js_yaml_1.load)((0, fs_1.readFileSync)(manifestPath, "utf-8"));
                if (!manifest?.context?.extended)
                    continue;
                for (const ctxPath of manifest.context.extended) {
                    const match = ctxPath.match(/context\/\{client\}\/extended\/(.+)/);
                    if (!match)
                        continue;
                    const file = match[1];
                    if (!extendedMap.has(file))
                        extendedMap.set(file, []);
                    extendedMap.get(file).push(skill);
                }
            }
            catch {
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
function generateClaudeMd(clientName) {
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
