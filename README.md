# The Baseline System

> A complete AI system for product teams. Skills provide methodology. Context makes it yours. Frameworks give structure. Scripts deliver to your tools.

---

## What This Is

The Baseline System is an AI-powered workflow system that helps product teams do research, strategy, design, communication, and delivery — faster and at a higher quality than working without it.

It works with Claude Code (and other AI tools) by giving them structured knowledge about how to do product work and specific knowledge about your business.

**Four components:**

| Component | What It Does | Location |
|-----------|-------------|----------|
| **Skills** | Domain expertise modules that teach AI how to execute specific work | `skills/` |
| **Context** | Your business-specific knowledge — identity, voice, customers, product | `context/` |
| **Frameworks** | Reusable methodologies that skills reference — prioritization, research, decision-making | `frameworks/` |
| **Scripts** | Delivery instructions that push outputs to external tools — Figma, Asana, Confluence, etc. | `scripts/` |

Skills are universal. Context is yours. When you run a skill, it loads both — producing output that follows proven methodology and sounds like your brand.

---

## How It Works

### Running a Skill

Every skill follows the same workflow:

1. **You describe a task** — "Write a PRD for the new onboarding flow" or "Help me prioritize Q2 roadmap"
2. **The system identifies the skill** — PRDs map to `product-communications`, prioritization maps to `strategic-advisory`
3. **The skill loads its files** — The skill's `manifest.yaml` lists what to load: the skill file, frameworks, and your context
4. **The system executes** — Plan, clarify, execute, validate

The `CLAUDE.md` file in your repo root tells Claude Code how to do this automatically. You don't need to manage it — just describe what you need.

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

See `skills/_README.md` for detailed documentation on each skill.

### Context Files

Context is what makes the system yours. Without context, skills produce generic output. With context, they produce output that sounds like your brand, references your customers, and follows your rules.

**Core context** (loaded by every skill):
- `context/core/identity.md` — Who you are, what you do, positioning, differentiators
- `context/core/voice.md` — How you sound, language rules, tone by channel

**Extended context** (loaded by relevant skills):
- `context/extended/product.md` — Product details, features, workflow
- `context/extended/users.md` — User personas, goals, pain points
- `context/extended/icp.md` — Ideal customer profile, buyer psychology
- `context/extended/competitive.md` — Competitors, positioning, alternatives
- `context/extended/pricing.md` — Pricing tiers, objection handling, philosophy
- `context/extended/technical.md` — Tech stack, integrations, constraints
- `context/extended/visual-identity.md` — Colors, fonts, visual style
- `context/extended/formatting.md` — Document structure, heading rules, spacing
- `context/extended/proof-points.md` — Metrics, case studies, credibility

The `context/context.yaml` file maps which extended context files are used by which skills. You can edit this to add custom context files or change which skills use what.

### Frameworks

Frameworks are reusable methodologies that skills reference. You don't interact with them directly — they're loaded automatically when a skill needs them.

See `frameworks/_README.md` for the full list.

### Scripts

Scripts push outputs to external tools. After a skill produces something (a PRD, a sprint plan, a LinkedIn post), a script can deliver it to Confluence, Asana, Figma, or wherever it needs to go.

Scripts require MCP (Model Context Protocol) connections to work. See `scripts/MCP-SETUP.md` for setup instructions.

See `scripts/_README.md` for the full list of available scripts.

---

## Getting Started

### Prerequisites

- **Claude Code** (or another AI tool that reads project files)
- **Node.js** (v18+ for the CLI)
- **Git** (for updates)

### Initial Setup

If your system was set up via `baseline init`, you're ready to go. Open the repo in Claude Code and start describing tasks.

If you received the system as a folder:

1. Make sure `CLAUDE.md` is in your repo root
2. Make sure your context files in `context/` are populated with your business details
3. Open the repo in Claude Code
4. Start working — describe a task and the system handles the rest

### Populating Context

The most important thing you can do is fill out your context files thoroughly. The system's output quality is directly proportional to the quality of your context.

**Start with core:**
1. `context/core/identity.md` — This is the foundation. Be specific about positioning, services, differentiators, and terminology.
2. `context/core/voice.md` — Include real examples of good and bad copy. List specific words to use and avoid.

**Then extended:**
3. Fill out whichever extended files are relevant to your work. If you do a lot of sales, prioritize `icp.md` and `pricing.md`. If you're focused on product, prioritize `product.md` and `users.md`.

You can always add more detail later. Run `baseline context` to update existing files or `baseline context add <name>` to create new ones.

---

## Staying Updated

The Baseline System improves over time. Skills get refined, new frameworks are added, scripts expand to more tools.

### Check for Updates

```
baseline status
```

Shows your current version and whether an update is available.

### Pull Updates

```
baseline update
```

Updates `skills/`, `frameworks/`, and `scripts/` to the latest version. **Your context files are never touched.** The system will tell you if new skills expect context files you haven't created yet.

---

## CLI Reference

The Baseline CLI manages your system. Run it from your repo root.

| Command | What It Does |
|---------|-------------|
| `baseline status` | Show current version, check for updates |
| `baseline update` | Pull latest skills, frameworks, and scripts |
| `baseline init` | Set up a new system from scratch (interactive) |
| `baseline context` | Re-run context prompts to update existing files |
| `baseline context add <name>` | Create a new context file and wire it to skills |

### Running the CLI

If the CLI was installed as a dependency:
```
npx baseline status
```

If running directly:
```
node /path/to/baseline-core/cli/dist/index.js status
```

---

## File Structure

```
your-system/
├── CLAUDE.md                    # Instructions for Claude Code (don't edit)
├── baseline.config.json         # Version tracking and config
├── skills/                      # 12 domain expertise modules
│   ├── strategic-advisory/
│   │   ├── manifest.yaml        # What this skill loads
│   │   ├── strategic-advisory-skill.md
│   │   └── references/
│   ├── research-synthesis/
│   ├── ... (10 more skills)
│   └── _README.md
├── context/                     # YOUR business knowledge (you own this)
│   ├── context.yaml             # Maps context files to skills
│   ├── core/
│   │   ├── identity.md
│   │   └── voice.md
│   └── extended/
│       ├── product.md
│       ├── users.md
│       └── ... (more context files)
├── frameworks/                  # Reusable methodologies
│   └── _README.md
└── scripts/                     # Delivery to external tools
    └── _README.md
```

**You own `context/`.** Everything else is managed by the system and updated via `baseline update`.

---

## FAQ

**Can I edit skill files?**
You can, but your changes will be overwritten on the next `baseline update`. If you need custom behavior, put it in context files instead. If you need a new skill, use the `skill-building` skill to create one, then ask to have it added to the core system.

**What if I don't have all the context files filled out?**
Skills work with whatever context is available. Missing context means more generic output, but nothing breaks. Fill out files incrementally as you need them.

**Can I add my own context files?**
Yes. Run `baseline context add <name>` to create a new file and wire it to the skills that should use it. Or create the file manually and update `context/context.yaml`.

**Do I need all 12 skills?**
They're all included automatically. You only use the ones relevant to your work. Unused skills take up negligible space.

**What AI tools does this work with?**
The system is optimized for Claude Code but works with any AI tool that can read project files. The `CLAUDE.md` enforcement layer and scripts are Claude Code-specific, but the skills, context, and frameworks are plain markdown that any tool can use.

**How do I get help?**
Contact your Baseline Studio representative or email hello@baselinestudio.design.
