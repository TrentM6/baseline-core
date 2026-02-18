# @baseline-studio/cli

> CLI for the Baseline System — an AI-powered workflow system for product teams.

## Quick Start

Create a new Baseline System:

```bash
npx @baseline-studio/cli init
```

You'll be asked for your company name, then guided through context questions to personalize your system. When it's done, you'll have a complete system with skills, frameworks, and context files — ready to use with Claude Code, Cursor, ChatGPT, or any AI tool.

## Commands

Once you have a Baseline System, the CLI is bundled locally. Run commands from your system's root directory:

| Command | What It Does |
|---------|-------------|
| `npx baseline status` | Show current version and check for updates |
| `npx baseline update` | Pull latest skills, frameworks, and CLI |
| `npx baseline context` | Re-run context prompts to update existing files |
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
├── skills/                # 12 domain expertise modules
├── context/               # Your business knowledge (you own this)
├── frameworks/            # Reusable methodologies
└── cli/                   # Bundled CLI for daily use
```

## The 12 Skills

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
| **Visual Communication** | Presentations, diagrams, decision visualization, data storytelling |
| **Product Marketing** | Positioning, messaging frameworks, launch briefs, competitive messaging |
| **Go-to-Market Planning** | Pricing strategy, launch planning, channel strategy, competitive positioning |
| **Skill Building** | Create new skills, document expertise, build reference files |

## Co-Founder Mode

Say "brainstorm" or "let's strategize" without naming a skill, and the system activates Co-Founder Mode — a strategic thinking partner that loads your business context and asks probing questions.

## Learn More

See the [Baseline System documentation](https://github.com/TrentM6/baseline-core#readme) for the full guide — skills, context, frameworks, and tool-by-tool usage instructions.

## License

MIT
