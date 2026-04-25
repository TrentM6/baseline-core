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
exports.init = init;
exports.buildSkillTable = buildSkillTable;
exports.generateAgentsMd = generateAgentsMd;
exports.generateClaudeMdPointer = generateClaudeMdPointer;
exports.generateCopilotInstructions = generateCopilotInstructions;
exports.generateReadme = generateReadme;
const readline_1 = require("readline");
const fs_1 = require("fs");
const path_1 = require("path");
const os_1 = require("os");
const js_yaml_1 = require("js-yaml");
const git_js_1 = require("../git.js");
const child_process_1 = require("child_process");
const ui = __importStar(require("../ui.js"));
const SYNC_DIRS = ["skills", "frameworks", "cli"];
let rlClosed = false;
function ask(rl, question) {
    if (rlClosed)
        return Promise.resolve("");
    return new Promise((resolveFn) => {
        try {
            rl.question(question, resolveFn);
        }
        catch {
            resolveFn("");
        }
    });
}
/** Sanitize a user-provided client name into a safe folder name.
 *  Falls back to "baseline-system" if sanitization yields an empty string. */
function sanitizeForPath(name) {
    const cleaned = name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    return cleaned || "baseline-system";
}
/** Turn a user-typed path (or empty string) into an absolute path.
 *  - Empty input → use the default
 *  - Leading `~` is expanded to the user's home directory
 *  - Relative paths are resolved against the current working directory */
function resolveScaffoldPath(input, defaultPath) {
    if (!input)
        return defaultPath;
    let expanded = input;
    if (expanded.startsWith("~/") || expanded === "~") {
        expanded = expanded.replace(/^~/, (0, os_1.homedir)());
    }
    return (0, path_1.isAbsolute)(expanded) ? expanded : (0, path_1.resolve)(expanded);
}
async function init() {
    const rl = (0, readline_1.createInterface)({ input: process.stdin, output: process.stdout });
    rl.on("close", () => { rlClosed = true; });
    // 1. Banner and gather basic info
    ui.banner("New Client Setup");
    const clientName = await ask(rl, ui.formatPrompt("What's your company or project name?"));
    const repo = "TrentM6/baseline-core";
    // Default the scaffold to ~/Desktop/<sanitized-name>/ so init never clobbers
    // whatever directory the user happened to be in (running init from $HOME or
    // an existing project folder used to scaffold there silently — see v2.10.0).
    const defaultPath = (0, path_1.join)((0, os_1.homedir)(), "Desktop", sanitizeForPath(clientName));
    console.log();
    console.log(`  ${ui.dim("Your system will be created at:")} ${ui.accent(defaultPath)}`);
    const pathAnswer = await ask(rl, ui.formatPrompt("Press Enter to use this path, or type a different one:"));
    const destDir = resolveScaffoldPath(pathAnswer.trim(), defaultPath);
    // Refuse to scaffold into an existing non-empty directory. Creating into a
    // populated folder used to overwrite README.md / package.json / .gitignore
    // and run `git init` over the user's existing files.
    if ((0, fs_1.existsSync)(destDir)) {
        const contents = (0, fs_1.readdirSync)(destDir).filter((f) => f !== ".DS_Store");
        if (contents.length > 0) {
            console.log();
            ui.error(`Directory exists and isn't empty: ${destDir}`);
            ui.info("Choose an empty directory or remove existing contents and try again.");
            console.log();
            rl.close();
            process.exit(1);
        }
    }
    else {
        (0, fs_1.mkdirSync)(destDir, { recursive: true });
    }
    // 2. Fetch latest from core
    console.log();
    const spin1 = ui.spinner("Fetching latest version...");
    const latest = (0, git_js_1.getLatestTag)(repo);
    if (!latest) {
        spin1.stop();
        ui.error("Could not determine latest version.");
        console.log();
        rl.close();
        process.exit(1);
    }
    spin1.stop(`Using v${latest}`);
    const spin2 = ui.spinner("Downloading system files...");
    const tmpDir = (0, git_js_1.cloneAtTag)(repo, latest);
    spin2.stop("System files downloaded");
    // 3. Create folder structure
    (0, fs_1.mkdirSync)((0, path_1.join)(destDir, "context", "core"), { recursive: true });
    (0, fs_1.mkdirSync)((0, path_1.join)(destDir, "context", "extended"), { recursive: true });
    // 4. Copy skills, frameworks, cli
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
    // 6. Load context-prompts.yaml for context-file titles
    const fullPromptsPath = (0, path_1.join)(tmpDir, "context-prompts.yaml");
    let fullPrompts = {};
    if ((0, fs_1.existsSync)(fullPromptsPath)) {
        fullPrompts = (0, js_yaml_1.load)((0, fs_1.readFileSync)(fullPromptsPath, "utf-8"));
    }
    // 7. Create placeholder context files. Identity gets the company name
    // pre-filled so the setup skill (or `npx baseline context`) doesn't have
    // to re-ask. Every other file is pure placeholder; the setup skill fills
    // them in conversationally on first use.
    for (const ctxFile of contextFiles) {
        const fullPath = (0, path_1.join)(destDir, "context", ctxFile);
        if ((0, fs_1.existsSync)(fullPath))
            continue; // Don't overwrite
        (0, fs_1.mkdirSync)((0, path_1.dirname)(fullPath), { recursive: true });
        const title = fullPrompts[ctxFile]?.title || ctxFile;
        if (ctxFile === "core/identity.md") {
            (0, fs_1.writeFileSync)(fullPath, `# ${title}\n\n**What is your company name?**\n${clientName}\n\n<!-- Add your content here -->\n`);
        }
        else {
            (0, fs_1.writeFileSync)(fullPath, `# ${title}\n\n<!-- Add your content here -->\n`);
        }
    }
    // 9. Create context.yaml
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
    // 10. Create AI instruction files
    // 10a. AGENTS.md — canonical instructions for all AI tools
    const clientSkillsDir = (0, path_1.join)(destDir, "skills");
    const agentsTemplatePath = (0, path_1.join)(tmpDir, "agents-template.md");
    if ((0, fs_1.existsSync)(agentsTemplatePath)) {
        let template = (0, fs_1.readFileSync)(agentsTemplatePath, "utf-8");
        template = template.replace(/\{client_name\}/g, clientName);
        const dynamicTable = buildSkillTable(clientSkillsDir);
        template = template.replace(/\{skill_table\}/g, dynamicTable);
        (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "AGENTS.md"), template);
    }
    else {
        (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "AGENTS.md"), generateAgentsMd(clientName, clientSkillsDir));
    }
    // 10b. CLAUDE.md — pointer for Claude Code
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "CLAUDE.md"), generateClaudeMdPointer(clientSkillsDir));
    // 10c. .github/copilot-instructions.md — pointer for GitHub Copilot Chat
    (0, fs_1.mkdirSync)((0, path_1.join)(destDir, ".github"), { recursive: true });
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, ".github", "copilot-instructions.md"), generateCopilotInstructions());
    // 10d. README.md — system documentation
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, "README.md"), generateReadme(clientName));
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
    const spin3 = ui.spinner("Installing CLI...");
    (0, child_process_1.execSync)("npm install --silent", { cwd: destDir, stdio: "pipe" });
    spin3.stop("CLI installed");
    // 13. Create .gitignore
    (0, fs_1.writeFileSync)((0, path_1.join)(destDir, ".gitignore"), "node_modules/\n.DS_Store\n");
    // 14. Initialize git repo
    const spin4 = ui.spinner("Initializing repository...");
    (0, child_process_1.execSync)("git init", { cwd: destDir, stdio: "pipe" });
    (0, child_process_1.execSync)("git add -A", { cwd: destDir, stdio: "pipe" });
    (0, child_process_1.execSync)(`git commit -m "Initialize ${clientName} Baseline System (v${latest})"`, { cwd: destDir, stdio: "pipe" });
    spin4.stop("Repository initialized");
    // Clean up
    (0, fs_1.rmSync)(tmpDir, { recursive: true });
    rl.close();
    const skillCount = (0, fs_1.existsSync)((0, path_1.join)(destDir, "skills")) ? (0, fs_1.readdirSync)((0, path_1.join)(destDir, "skills")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;
    const frameworkCount = (0, fs_1.existsSync)((0, path_1.join)(destDir, "frameworks")) ? (0, fs_1.readdirSync)((0, path_1.join)(destDir, "frameworks")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;
    ui.summary(`${clientName} system ready!`, [
        ["Version:", `v${latest}`],
        ["Skills:", `${skillCount}`],
        ["Frameworks:", `${frameworkCount}`],
        ["Location:", destDir],
    ]);
    // What's next — show the path and point at the setup skill
    console.log();
    console.log(`  ${ui.bold("Your system is here:")}`);
    console.log(`  ${ui.accent(destDir)}`);
    console.log();
    console.log(`  ${ui.bold("What's next:")}`);
    console.log();
    console.log(`  ${ui.brand("→")} Open this folder in your AI tool, then say ${ui.accent('"run the setup skill"')}.`);
    console.log();
    console.log(`     ${ui.dim("Quick start for Claude Code:")}`);
    console.log(`     ${ui.accent(`cd "${destDir}" && claude`)}`);
    console.log();
    console.log(`     ${ui.dim("Setup walks you through filling in your business context.")}`);
    console.log(`     ${ui.dim("Bring any docs you have — pitch deck, one-pager, brand guide.")}`);
    console.log(`     ${ui.dim("It'll parse them into your context files and ask only for gaps.")}`);
    console.log();
    console.log(`  ${ui.dim("Prefer the terminal?")} Run ${ui.accent("npx baseline context")} ${ui.dim("from inside the folder.")}`);
    console.log();
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
    // Always include co-founder context (used by Co-Founder Mode, not a skill)
    paths.add("extended/co-founder.md");
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
    yaml += "  co-founder.md:\n";
    yaml += "    - co-founder-mode  # loaded by Co-Founder Mode (not a skill)\n";
    for (const [file, skills] of [...extendedMap.entries()].sort()) {
        yaml += `  ${file}:\n`;
        for (const s of skills.sort()) {
            yaml += `    - ${s}\n`;
        }
    }
    return yaml;
}
/** Build a markdown skill table from manifest files in a skills directory.
 *  Falls back to a hardcoded table if no manifests are found. */
function buildSkillTable(skillsDir) {
    const FALLBACK_TABLE = `| Task | Skill |
|------|-------|
| Strategic decisions, roadmaps, prioritization | \`strategic-advisory\` |
| User research, interviews, synthesis | \`research-synthesis\` |
| PRDs, specs, briefs, stakeholder updates | \`product-communications\` |
| Interface design, wireframes, UI copy | \`ux-design\` |
| Metrics, dashboards, A/B tests | \`product-analytics\` |
| Coded prototypes, demos, POCs | \`prototyping\` |
| Planning, tracking, sprints | \`project-management\` |
| User guides, help center, release notes | \`technical-documentation\` |
| Presentations, diagrams, decision visualization | \`visual-communication\` |
| Positioning, messaging, launch briefs | \`product-marketing\` |
| Pricing strategy, launch planning, channels | \`go-to-market-planning\` |
| Creating new skills | \`skill-building\` |`;
    if (!(0, fs_1.existsSync)(skillsDir))
        return FALLBACK_TABLE;
    const rows = [];
    for (const entry of (0, fs_1.readdirSync)(skillsDir)) {
        if (entry.startsWith(".") || entry.startsWith("_"))
            continue;
        const entryPath = (0, path_1.join)(skillsDir, entry);
        if (!(0, fs_1.statSync)(entryPath).isDirectory())
            continue;
        const manifestPath = (0, path_1.join)(entryPath, "manifest.yaml");
        if (!(0, fs_1.existsSync)(manifestPath))
            continue;
        try {
            const manifest = (0, js_yaml_1.load)((0, fs_1.readFileSync)(manifestPath, "utf-8"));
            const skill = manifest?.skill || entry;
            const description = manifest?.description || skill;
            rows.push({ description, skill });
        }
        catch {
            // Skip unparseable manifests
        }
    }
    if (rows.length === 0)
        return FALLBACK_TABLE;
    // Sort alphabetically by skill name
    rows.sort((a, b) => a.skill.localeCompare(b.skill));
    let table = "| Task | Skill |\n|------|-------|\n";
    for (const row of rows) {
        table += `| ${row.description} | \`${row.skill}\` |\n`;
    }
    return table.trimEnd();
}
/** Generate AGENTS.md — canonical AI instructions for all tools */
function generateAgentsMd(clientName, skillsDir) {
    return `# ${clientName} — Baseline System

> This file provides instructions for AI coding agents. It enforces consistent skill execution across all AI tools.

---

## What This Project Is

The Baseline System is a complete AI system for product work with three components:

1. **Skills** (\`skills/\`) — Domain expertise modules
2. **Context** (\`context/\`) — Business-specific knowledge
3. **Frameworks** (\`frameworks/\`) — Reusable methodologies

Skills provide methodology. Context personalizes output. Frameworks provide reusable patterns.

---

## Skill Execution Protocol

When a user invokes any skill — by name, by file path, or by describing a task that maps to a skill — you MUST follow this exact sequence. Do not skip steps.

### Step 1: Identify the Skill

Match the user's request to a skill using this table:

${skillsDir ? buildSkillTable(skillsDir) : buildSkillTable("")}

**First-run hint:** If the user's first request is ambiguous (e.g., "what can you do?", "how does this work?", "let's start") and most context files in \`context/{client}/\` contain only \`<!-- Add your content here -->\`, suggest the \`setup\` skill before proceeding. Output quality scales with context completeness, and \`setup\` is designed to fill context conversationally — including ingesting docs the user already has.

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

---

## Co-Founder Mode

When the user wants to brainstorm, strategize, or think through problems without invoking a specific skill, activate co-founder mode.

### When to Activate

Activate when the user:
- Asks to "brainstorm" or "strategize" without naming a skill
- Wants to "talk through" a problem or decision
- Asks for strategic advice or a thinking partner
- Phrases requests as open-ended questions about direction or approach

**Do NOT activate when:**
- The user invokes a specific skill by name or task mapping
- The user asks for a specific deliverable (PRD, wireframe, content, etc.)
- The request maps clearly to a skill in the table above

### How to Use

1. **Load context files:**
   \`\`\`
   context/core/identity.md
   context/core/voice.md
   context/extended/co-founder.md
   \`\`\`
   If \`co-founder.md\` does not exist, load only core context and proceed without the persona.

2. **Adopt the persona.** Use the co-founder file to guide your thinking style, questions, and decision-making approach.

3. **No workflow structure.** This is NOT a skill. No Plan/Clarify/Execute/Validate steps. No deliverables. No quality checks. Just strategic thinking partnership.

4. **Ask probing questions.** Use the Default Questions and Assumptions to Challenge from the co-founder file to surface blind spots.

5. **Reference principles when relevant.** When the conversation touches on strategic decisions, reference the Strategic Principles and Non-Negotiables from the co-founder file.

### When to Exit

If the conversation shifts to executing a specific deliverable (e.g., "now write a PRD for this"), switch to the appropriate skill and follow the Skill Execution Protocol above.

---

## Session Management

- Scope each session to one major task. Multi-task sessions degrade output quality.
- After completing a major deliverable, recommend starting a fresh session.
- If the conversation has gone through 3+ revision cycles, proactively suggest a session break.
- For work that spans multiple sessions, use the Session Planning Framework (\`frameworks/session-planning.md\`) to generate a project plan. The project plan is a standalone markdown file the user brings into each new session — it specifies what to do, what context to load, and what was decided in prior sessions.

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
/** Generate CLAUDE.md — pointer to AGENTS.md for Claude Code */
function generateClaudeMdPointer(_skillsDir) {
    // CLAUDE.md tells Claude Code to read AGENTS.md, which is the single source
    // of truth for the skill table and execution protocol. We intentionally do NOT
    // duplicate the skill table here — doing so caused clients to see every skill
    // listed twice (once in CLAUDE.md, once in AGENTS.md), which the AI interprets
    // as duplicates.
    return `# Baseline System

Read AGENTS.md in this directory. That is the canonical source of truth for this system.

**IMPORTANT — you MUST read AGENTS.md NOW, before responding to the user.**

AGENTS.md contains:
- The Skill Execution Protocol (how to identify, load, and execute skills)
- The complete skill mapping table (which tasks map to which skills)
- Co-Founder Mode instructions (for brainstorming and strategic thinking)
- Session management guidelines

Do not respond to the user until you have read AGENTS.md in full.
`;
}
/** Generate .github/copilot-instructions.md — thin pointer to AGENTS.md for GitHub Copilot */
function generateCopilotInstructions() {
    return `# Baseline System

Read and follow all instructions in AGENTS.md at the repository root. That file contains the Skill Execution Protocol, skill mapping table, Co-Founder Mode instructions, and session management guidelines for this project.
`;
}
/** Generate README.md for client systems */
function generateReadme(clientName) {
    return `# ${clientName} — Baseline System

> A complete AI system for product teams. Skills provide methodology. Context makes it yours. Frameworks give structure.

## Getting Started

**First time?** Open this folder in your AI tool (Claude Code, Cursor, Codex, etc.) and run the **Setup** skill — say *"run the setup skill."* It walks you through filling in your business context. Bring any docs you have (pitch deck, brand guide, one-pager) — Setup parses them into your context files and asks short follow-ups for what's missing.

**Existing system?**

\`\`\`bash
npx baseline status    # Check for updates
npx baseline update    # Pull latest version
\`\`\`

---

## What This Is

The Baseline System is an AI-powered workflow system that helps product teams do research, strategy, design, communication, and delivery — faster and at a higher quality than working without it.

It works with any AI coding tool by giving it structured knowledge about how to do product work and specific knowledge about your business.

**Three components:**

| Component | What It Does | Details |
|-----------|-------------|---------|
| **Skills** | Domain expertise modules that teach AI how to execute specific work | [\`skills/_README.md\`](skills/_README.md) |
| **Context** | Your business-specific knowledge — identity, voice, customers, product | \`context/\` |
| **Frameworks** | Reusable methodologies — prioritization, research, decision-making | [\`frameworks/_README.md\`](frameworks/_README.md) |

Skills are universal. Context is yours. When you run a skill, it loads both — producing output that follows proven methodology and sounds like your brand.

---

## How It Works

1. **You describe a task** — "Write a PRD for the new onboarding flow" or "Help me prioritize Q2 roadmap"
2. **The system identifies the skill** — PRDs map to \`product-communications\`, prioritization maps to \`strategic-advisory\`
3. **The skill loads its files** — The skill's \`manifest.yaml\` lists what to load: the skill file, frameworks, and your context
4. **The system executes** — Plan, clarify, execute, validate

In AI coding tools, this is fully automated via the \`AGENTS.md\` file. Just describe what you need.

### The Skills

**Run once to set up:**

| Skill | What It Does |
|-------|-------------|
| **Setup** | Guided context setup — parse your existing docs into context files, ask gap-filling questions for what's missing |

**Run as needed for daily work:**

| Skill | What It Does |
|-------|-------------|
| **Strategic Advisory** | Roadmaps, prioritization, OKRs, strategic decisions |
| **Research Synthesis** | User interviews, research reports, validation testing |
| **Product Communications** | PRDs, specs, briefs, stakeholder updates |
| **UX Design** | Wireframes, user flows, UI copy, design critique |
| **Product Analytics** | Metrics frameworks, dashboards, A/B test plans |
| **Prototyping** | Coded prototypes, demos, proof-of-concepts |
| **Project Management** | Sprint planning, tracking, retrospectives |
| **Technical Documentation** | User guides, API docs, release notes, help content |
| **Visual Communication** | Presentations, diagrams, decision visualization, data storytelling |
| **Product Marketing** | Positioning, messaging frameworks, launch briefs, competitive messaging |
| **Go-to-Market Planning** | Pricing strategy, launch planning, channel strategy, distribution |
| **Skill Building** | Create new custom skills for your team |

See [\`skills/_README.md\`](skills/_README.md) for detailed documentation on each skill.

---

## Using the System

### AI Coding Tools (Automated)

\`AGENTS.md\` is the canonical instruction file. It tells AI tools how to find skills, load manifests, read context, and execute workflows. Here's how each tool picks it up:

| Tool | How It Works |
|------|-------------|
| **Codex, Cursor, Windsurf, JetBrains AI** | Reads \`AGENTS.md\` directly |
| **Claude Code** | Reads \`CLAUDE.md\`, which points to \`AGENTS.md\` |
| **GitHub Copilot Chat** | Reads \`.github/copilot-instructions.md\`, which points to \`AGENTS.md\` |

1. Open this folder in your AI coding tool
2. Describe what you need
3. Done — the tool reads \`AGENTS.md\` (directly or via pointer) and handles the rest

### ChatGPT / Gemini / Other Chat Tools

Chat tools can't auto-read project files. Upload or paste the files listed in the skill's \`manifest.yaml\` into your conversation, then describe your task.

---

## Context

Context is what makes the system yours. The system's output quality is directly proportional to the quality of your context.

**The fastest way to fill it in:** run the **Setup** skill in your AI tool. It asks for any docs you have (pitch deck, brand guide, etc.), parses them into your context files, then asks short follow-ups for whatever's missing.

**Core context** (loaded by every skill):
- \`context/core/identity.md\` — Who you are, what you do, positioning, differentiators
- \`context/core/voice.md\` — How you sound, language rules, tone by channel

**Extended context** (loaded by relevant skills):
- \`context/extended/product.md\` — Product details, features, workflow
- \`context/extended/users.md\` — User personas, goals, pain points
- \`context/extended/icp.md\` — Ideal customer profile, buyer psychology
- \`context/extended/competitive.md\` — Competitors, positioning, alternatives
- \`context/extended/pricing.md\` — Pricing tiers, objection handling
- \`context/extended/technical.md\` — Tech stack, integrations, constraints
- \`context/extended/visual-identity.md\` — Colors, fonts, visual style
- \`context/extended/formatting.md\` — Document structure, heading rules
- \`context/extended/proof-points.md\` — Metrics, case studies, market research, validation data

Skills work with whatever context is available — missing context produces more generic output, not broken output. **Prefer the terminal?** Run \`npx baseline context\` for a guided CLI questionnaire (alternative to the Setup skill). Use \`npx baseline context add <name>\` to create a new context file.

---

## CLI Reference

| Command | What It Does |
|---------|-------------|
| \`npx baseline status\` | Show current version, check for updates |
| \`npx baseline update\` | Pull latest skills, frameworks, and CLI |
| \`npx baseline context\` | Terminal questionnaire for filling context (alternative to the Setup skill) |
| \`npx baseline context add <name>\` | Create a new context file and wire it to skills |

---

## File Structure

\`\`\`
${clientName.toLowerCase().replace(/\\s+/g, "-")}-system/
├── AGENTS.md                    # AI instructions for all coding tools (don't edit)
├── CLAUDE.md                    # Claude Code pointer to AGENTS.md
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot pointer to AGENTS.md
├── baseline.config.json         # Version tracking and config
├── skills/                      # 13 domain expertise modules (Setup + 12 daily-work skills)
├── context/                     # YOUR business knowledge (you own this)
│   ├── core/                    # Identity and voice (loaded by every skill)
│   └── extended/                # Product, users, pricing, etc.
├── frameworks/                  # Reusable methodologies
└── cli/                         # Bundled CLI for daily use
\`\`\`

**You own \`context/\`.** Core skills and frameworks are managed by the system and updated via \`npx baseline update\`. Custom skills and frameworks you add are preserved during updates.

---

## FAQ

**Can I add custom skills?**
Yes. Create a new folder in \`skills/\` with a \`manifest.yaml\`. Custom skills survive updates automatically — only core skills are replaced on \`baseline update\`. Your custom skills will appear in the AI skill mapping table after the next update.

**Can I edit core skill files?**
You can, but edits to core skills are overwritten on \`baseline update\`. Put custom behavior in context files or create a custom skill instead.

**What if I don't have all the context files filled out?**
Skills work with whatever context is available. Missing context means more generic output, but nothing breaks.

**Can I add my own context files?**
Yes. Run \`npx baseline context add <name>\` to create a new file and wire it to skills.

**Where do outputs go?**
If an output becomes reference material for future work (examples, templates, approved messaging), put it in \`context/extended/\`. Otherwise, save outputs wherever your team works — Google Docs, Notion, your codebase, etc. The system is a methodology engine, not a document repository.

**What AI tools does this work with?**
Any AI tool. The \`AGENTS.md\` file is automatically read by Claude Code, Codex, Cursor, Windsurf, GitHub Copilot, JetBrains AI, and others. Chat tools like ChatGPT work when you upload skill and context files.

**How do I get help?**
Email trent@baselinestudio.design.
`;
}
