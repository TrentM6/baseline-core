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
import * as ui from "../ui.js";

const SYNC_DIRS = ["skills", "frameworks", "scripts", "cli"];

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

  // 1. Banner and gather basic info
  ui.banner("New Client Setup");

  const clientName = await ask(rl, ui.formatPrompt("What's your company or project name?"));
  const repo = "TrentM6/baseline-core";

  // Always scaffold in the current directory
  const destDir = process.cwd();

  // 2. Fetch latest from core
  console.log();
  const spin1 = ui.spinner("Fetching latest version...");
  const latest = getLatestTag(repo);
  if (!latest) {
    spin1.stop();
    ui.error("Could not determine latest version.");
    console.log();
    rl.close();
    process.exit(1);
  }
  spin1.stop(`Using v${latest}`);

  const spin2 = ui.spinner("Downloading system files...");
  const tmpDir = cloneAtTag(repo, latest);
  spin2.stop("System files downloaded");

  // 3. Create folder structure
  mkdirSync(join(destDir, "context", "core"), { recursive: true });
  mkdirSync(join(destDir, "context", "extended"), { recursive: true });

  // 4. Copy skills, frameworks, scripts, cli
  for (const dir of SYNC_DIRS) {
    const srcDir = join(tmpDir, dir);
    if (existsSync(srcDir)) {
      cpSync(srcDir, join(destDir, dir), { recursive: true });
    }
  }

  // Remove CLI source files (clients only need bin/, dist/, package.json)
  const cliCleanup = ["src", "tsconfig.json", "package-lock.json"];
  for (const item of cliCleanup) {
    const p = join(destDir, "cli", item);
    if (existsSync(p)) rmSync(p, { recursive: true });
  }

  // 5. Collect unique context file paths from manifests
  const contextFiles = collectContextPaths(tmpDir);

  // 6. Load prompts
  // init-prompts.yaml has the slim essential questions for onboarding
  // context-prompts.yaml has the full question set (used for template titles + fallback)
  const initPromptsPath = join(tmpDir, "init-prompts.yaml");
  const fullPromptsPath = join(tmpDir, "context-prompts.yaml");
  let initPrompts: Record<string, ContextPrompt> = {};
  let fullPrompts: Record<string, ContextPrompt> = {};
  if (existsSync(fullPromptsPath)) {
    fullPrompts = load(readFileSync(fullPromptsPath, "utf-8")) as Record<string, ContextPrompt>;
  }
  if (existsSync(initPromptsPath)) {
    initPrompts = load(readFileSync(initPromptsPath, "utf-8")) as Record<string, ContextPrompt>;
  } else {
    // Fallback: if init-prompts.yaml doesn't exist (older tag), use core
    // sections from the full prompts so init never skips questions entirely
    for (const [key, val] of Object.entries(fullPrompts)) {
      if (key.startsWith("core/")) {
        initPrompts[key] = val;
      }
    }
  }

  // 7. Ask essential questions (slim init)
  console.log();
  ui.info("Let's set up your core context — the essential info that powers every skill.");
  ui.skipHint();

  const initSections = Object.keys(initPrompts);
  let sectionIndex = 0;

  for (const ctxFile of initSections) {
    const prompt = initPrompts[ctxFile];
    if (!prompt) continue;

    sectionIndex++;
    ui.sectionHeader(prompt.title, sectionIndex, initSections.length);

    const answers: string[] = [];
    let answeredCount = 0;

    // Pre-fill company name into identity file
    if (ctxFile === "core/identity.md") {
      answers.push(`**What is your company name?**\n${clientName}`);
    }

    for (let qi = 0; qi < prompt.questions.length; qi++) {
      const q = prompt.questions[qi];
      const answer = await ask(
        rl,
        ui.formatPromptWithProgress(q, qi + 1, prompt.questions.length)
      );
      if (answer.trim()) {
        answers.push(`**${q}**\n${answer.trim()}`);
        answeredCount++;
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

    ui.sectionComplete(prompt.title, answeredCount, prompt.questions.length);
  }

  // 8. Create empty templates for all remaining context files
  for (const ctxFile of contextFiles) {
    if (initPrompts[ctxFile]) continue; // Already handled above
    const fullPath = join(destDir, "context", ctxFile);
    if (existsSync(fullPath)) continue; // Don't overwrite
    mkdirSync(dirname(fullPath), { recursive: true });
    const title = fullPrompts[ctxFile]?.title || ctxFile;
    writeFileSync(fullPath, `# ${title}\n\n<!-- Add your content here -->\n`);
  }

  // 9. Create context.yaml
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

  // 10. Create AI instruction files
  // 10a. AGENTS.md — canonical instructions for all AI tools
  const agentsTemplatePath = join(tmpDir, "agents-template.md");
  if (existsSync(agentsTemplatePath)) {
    let template = readFileSync(agentsTemplatePath, "utf-8");
    template = template.replace(/\{client_name\}/g, clientName);
    writeFileSync(join(destDir, "AGENTS.md"), template);
  } else {
    writeFileSync(join(destDir, "AGENTS.md"), generateAgentsMd(clientName));
  }

  // 10b. CLAUDE.md — pointer for Claude Code
  writeFileSync(join(destDir, "CLAUDE.md"), generateClaudeMdPointer());

  // 10c. .github/copilot-instructions.md — pointer for GitHub Copilot Chat
  mkdirSync(join(destDir, ".github"), { recursive: true });
  writeFileSync(
    join(destDir, ".github", "copilot-instructions.md"),
    generateCopilotInstructions()
  );

  // 10d. README.md — system documentation
  writeFileSync(join(destDir, "README.md"), generateReadme(clientName));

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
  writeFileSync(
    join(destDir, "package.json"),
    JSON.stringify(rootPkg, null, 2) + "\n"
  );

  // 12. Install CLI locally so npx baseline works
  const spin3 = ui.spinner("Installing CLI...");
  execSync("npm install --silent", { cwd: destDir, stdio: "pipe" });
  spin3.stop("CLI installed");

  // 13. Create .gitignore
  writeFileSync(
    join(destDir, ".gitignore"),
    "node_modules/\n.DS_Store\n"
  );

  // 14. Initialize git repo
  const spin4 = ui.spinner("Initializing repository...");
  execSync("git init", { cwd: destDir, stdio: "pipe" });
  execSync("git add -A", { cwd: destDir, stdio: "pipe" });
  execSync(
    `git commit -m "Initialize ${clientName} Baseline System (v${latest})"`,
    { cwd: destDir, stdio: "pipe" }
  );
  spin4.stop("Repository initialized");

  // Clean up
  rmSync(tmpDir, { recursive: true });
  rl.close();

  const skillCount = existsSync(join(destDir, "skills")) ? readdirSync(join(destDir, "skills")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;
  const frameworkCount = existsSync(join(destDir, "frameworks")) ? readdirSync(join(destDir, "frameworks")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;
  const scriptCount = existsSync(join(destDir, "scripts")) ? readdirSync(join(destDir, "scripts")).filter((f) => !f.startsWith(".") && !f.startsWith("_")).length : 0;

  ui.summary(`${clientName} system ready!`, [
    ["Version:", `v${latest}`],
    ["Skills:", `${skillCount}`],
    ["Frameworks:", `${frameworkCount}`],
    ["Scripts:", `${scriptCount}`],
  ]);

  ui.nextSteps([
    `Open ${ui.accent("context/core/")} and review your identity & voice files`,
    `Fill in extended context files — start with ${ui.accent("product")}, ${ui.accent("users")}, ${ui.accent("icp")}`,
    `Run ${ui.accent("npx baseline context")} to update context with guided prompts`,
    `Open this folder in your AI tool and start using skills`,
  ]);
  console.log();
}

/** Scan all skill manifests and return unique context file paths (relative to context/) */
function collectContextPaths(coreDir: string): string[] {
  const skillsDir = join(coreDir, "skills");
  if (!existsSync(skillsDir)) return [];

  const paths = new Set<string>();

  // Always include core files
  paths.add("core/identity.md");
  paths.add("core/voice.md");

  // Always include co-founder context (used by Co-Founder Mode, not a skill)
  paths.add("extended/co-founder.md");

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

/** Generate AGENTS.md — canonical AI instructions for all tools */
export function generateAgentsMd(clientName: string): string {
  return `# ${clientName} — Baseline System

> This file provides instructions for AI coding agents. It enforces consistent skill execution across all AI tools.

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

/** Generate CLAUDE.md — thin pointer to AGENTS.md for Claude Code */
export function generateClaudeMdPointer(): string {
  return `# Baseline System

Read and follow all instructions in AGENTS.md in this directory. That file is the canonical source of truth for how this system works, including the Skill Execution Protocol, skill mapping, Co-Founder Mode, and session management guidelines.
`;
}

/** Generate .github/copilot-instructions.md — thin pointer to AGENTS.md for GitHub Copilot */
export function generateCopilotInstructions(): string {
  return `# Baseline System

Read and follow all instructions in AGENTS.md at the repository root. That file contains the Skill Execution Protocol, skill mapping table, Co-Founder Mode instructions, and session management guidelines for this project.
`;
}

/** Generate README.md for client systems */
export function generateReadme(clientName: string): string {
  return `# ${clientName} — Baseline System

> A complete AI system for product teams. Skills provide methodology. Context makes it yours. Frameworks give structure. Scripts deliver to your tools.

## Getting Started

\`\`\`bash
npx baseline status    # Check for updates
npx baseline update    # Pull latest version
\`\`\`

---

## What This Is

The Baseline System is an AI-powered workflow system that helps product teams do research, strategy, design, communication, and delivery — faster and at a higher quality than working without it.

It works with any AI coding tool by giving it structured knowledge about how to do product work and specific knowledge about your business.

**Four components:**

| Component | What It Does | Details |
|-----------|-------------|---------|
| **Skills** | Domain expertise modules that teach AI how to execute specific work | [\`skills/_README.md\`](skills/_README.md) |
| **Context** | Your business-specific knowledge — identity, voice, customers, product | \`context/\` |
| **Frameworks** | Reusable methodologies — prioritization, research, decision-making | [\`frameworks/_README.md\`](frameworks/_README.md) |
| **Scripts** | Delivery to external tools — Figma, Asana, Confluence, etc. | [\`scripts/_README.md\`](scripts/_README.md) |

Skills are universal. Context is yours. When you run a skill, it loads both — producing output that follows proven methodology and sounds like your brand.

---

## How It Works

1. **You describe a task** — "Write a PRD for the new onboarding flow" or "Help me prioritize Q2 roadmap"
2. **The system identifies the skill** — PRDs map to \`product-communications\`, prioritization maps to \`strategic-advisory\`
3. **The skill loads its files** — The skill's \`manifest.yaml\` lists what to load: the skill file, frameworks, and your context
4. **The system executes** — Plan, clarify, execute, validate

In AI coding tools, this is fully automated via the \`AGENTS.md\` file. Just describe what you need.

### The 12 Skills

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
| **Brand Design** | Presentations, graphics, visual design direction |
| **Marketing** | LinkedIn posts, website copy, campaigns, case studies |
| **Sales** | Outreach emails, proposals, discovery call prep |
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
- \`context/extended/proof-points.md\` — Metrics, case studies, credibility

Start with \`identity.md\` and \`voice.md\`, then fill out extended files as needed. Run \`npx baseline context\` to update files or \`npx baseline context add <name>\` to create new ones.

---

## CLI Reference

| Command | What It Does |
|---------|-------------|
| \`npx baseline status\` | Show current version, check for updates |
| \`npx baseline update\` | Pull latest skills, frameworks, scripts, and CLI |
| \`npx baseline context\` | Re-run context prompts to update existing files |
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
├── skills/                      # 12 domain expertise modules
├── context/                     # YOUR business knowledge (you own this)
│   ├── core/                    # Identity and voice (loaded by every skill)
│   └── extended/                # Product, users, pricing, etc.
├── frameworks/                  # Reusable methodologies
├── scripts/                     # Delivery to external tools
└── cli/                         # Bundled CLI for daily use
\`\`\`

**You own \`context/\`.** Everything else is managed by the system and updated via \`npx baseline update\`.

---

## FAQ

**Can I edit skill files?**
You can, but changes are overwritten on \`baseline update\`. Put custom behavior in context files instead.

**What if I don't have all the context files filled out?**
Skills work with whatever context is available. Missing context means more generic output, but nothing breaks.

**Can I add my own context files?**
Yes. Run \`npx baseline context add <name>\` to create a new file and wire it to skills.

**What AI tools does this work with?**
Any AI tool. The \`AGENTS.md\` file is automatically read by Claude Code, Codex, Cursor, Windsurf, GitHub Copilot, JetBrains AI, and others. Chat tools like ChatGPT work when you upload skill and context files.

**How do I get help?**
Email trent@baselinestudio.design.
`;
}
