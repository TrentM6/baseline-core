# @baseline-studio/cli

> CLI for the Baseline System — an AI-powered workflow system for product teams.

## Quick Start

Create a new Baseline System:

```bash
npx @baseline-studio/cli init
```

`init` asks for your company name and scaffolds your system in ~60 seconds — skills, frameworks, context templates, a fresh git repo. Then open the folder in your AI tool (Claude Code, Cursor, Codex, etc.) and run the **Setup** skill to fill in your business context. Bring any docs you have (pitch deck, brand guide, etc.) — Setup parses them into your context files and asks short follow-ups for what's missing.

## Commands

Once you have a Baseline System, the CLI is bundled locally. Run commands from your system's root directory:

| Command | What It Does |
|---------|-------------|
| `npx baseline status` | Show current version and check for updates |
| `npx baseline update` | Pull latest skills, frameworks, and CLI |
| `npx baseline context` | Terminal questionnaire for filling context (alternative to the Setup skill) |
| `npx baseline context add <name>` | Create a new context file and wire it to skills |

## How It Works

There are two copies of the CLI serving different purposes:

- **This npm package** (`@baseline-studio/cli`) is the entry point for first-time setup. It downloads temporarily via `npx`, runs `init`, and scaffolds your system.
- **The bundled CLI** (inside each system at `cli/`) is the daily driver. After init, all commands (`status`, `update`, `context`) run from the local copy — no npm dependency needed.

Updates come from git tags via `npx baseline update`, not from npm.

## What Gets Created

```
your-system/
├── AGENTS.md              # AI instructions for all coding tools (don't edit)
├── CLAUDE.md              # Claude Code instructions (skill mapping, Co-Founder Mode)
├── .github/
│   └── copilot-instructions.md  # GitHub Copilot pointer to AGENTS.md
├── baseline.config.json   # Version tracking
├── skills/                # 13 domain expertise modules (Setup + 12 daily-work skills)
├── context/               # Your business knowledge (you own this)
├── frameworks/            # Reusable methodologies
└── cli/                   # Bundled CLI for daily use
```

## The Skills

**Run once to set up:**

| Skill | What It Does |
|-------|-------------|
| **Setup** | Guided context setup — ingest your existing docs, parse them into context files, ask gap-filling questions for what's missing |

**Run as needed for daily work:**

| Skill | What It Does |
|-------|-------------|
| **Strategic Advisory** | Strategic decisions, roadmaps, prioritization, OKRs, alignment |
| **Research & Synthesis** | User research, interviews, competitive analysis, synthesis |
| **Product Communications** | PRDs, feature specs, product briefs, stakeholder updates, decision docs |
| **UX Design** | Interface design, wireframes, user flows, UI copy, design systems, accessibility |
| **Product Analytics** | Metrics, dashboards, funnel analysis, A/B tests, segmentation |
| **Prototyping** | Coded prototypes, clickable demos, POCs, technical feasibility |
| **Project Management** | Planning, tracking, sprints, status updates, risk management |
| **Technical Documentation** | User guides, help center, API docs, release notes, how-to guides |
| **Visual Communication** | Presentations, diagrams, decision visualization, data storytelling, narrative decks |
| **Product Marketing** | Positioning, messaging frameworks, launch briefs, competitive messaging, case studies |
| **Go-to-Market Planning** | Pricing strategy, launch planning, channel strategy, competitive positioning |
| **Skill Building** | Create new skills, document expertise, build reference files |

## Co-Founder Mode

Say "brainstorm" or "let's strategize" without naming a skill, and the system activates Co-Founder Mode — a strategic thinking partner that loads your business context and asks probing questions.

## Learn More

See the [Baseline System documentation](https://github.com/TrentM6/baseline-core#readme) for the full guide — skills, context, frameworks, and tool-by-tool usage instructions.

## License

MIT
