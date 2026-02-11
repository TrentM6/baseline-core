# The Baseline System

> A complete AI system for product teams. Skills provide methodology. Context makes it yours. Frameworks give structure. Scripts deliver to your tools.

## Quick Start

**New users:**
```bash
npx @baseline-studio/cli init
```

**Existing users:**
```bash
npx baseline status    # Check for updates
npx baseline update    # Pull latest version
```

---

## What This Is

The Baseline System is an AI-powered workflow system that helps product teams do research, strategy, design, communication, and delivery — faster and at a higher quality than working without it.

It works with Claude Code (and other AI tools) by giving them structured knowledge about how to do product work and specific knowledge about your business.

**Four components:**

| Component | What It Does | Details |
|-----------|-------------|---------|
| **Skills** | Domain expertise modules that teach AI how to execute specific work | [`skills/_README.md`](skills/_README.md) |
| **Context** | Your business-specific knowledge — identity, voice, customers, product | `context/` |
| **Frameworks** | Reusable methodologies — prioritization, research, decision-making | [`frameworks/_README.md`](frameworks/_README.md) |
| **Scripts** | Delivery to external tools — Figma, Asana, Confluence, etc. | [`scripts/_README.md`](scripts/_README.md) |

Skills are universal. Context is yours. When you run a skill, it loads both — producing output that follows proven methodology and sounds like your brand.

---

## How It Works

1. **You describe a task** — "Write a PRD for the new onboarding flow" or "Help me prioritize Q2 roadmap"
2. **The system identifies the skill** — PRDs map to `product-communications`, prioritization maps to `strategic-advisory`
3. **The skill loads its files** — The skill's `manifest.yaml` lists what to load: the skill file, frameworks, and your context
4. **The system executes** — Plan, clarify, execute, validate

In Claude Code, this is fully automated via the `CLAUDE.md` file. Just describe what you need.

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

See [`skills/_README.md`](skills/_README.md) for detailed documentation on each skill.

---

## Using the System

### Claude Code (Fully Automated)

Claude Code is the primary supported tool. The `CLAUDE.md` file tells Claude Code exactly how to find skills, load manifests, read context, and execute workflows.

1. Open your system folder in Claude Code
2. Describe what you need
3. Done — Claude Code handles the rest

### Cursor / Windsurf / Other Code Editors

These editors can read project files but don't auto-execute the `CLAUDE.md` protocol. Point the AI to the skill's manifest:

```
Read skills/marketing/manifest.yaml.
Load every file it lists — skill, frameworks, and my context files.
Then help me write a LinkedIn post about our new feature launch.
```

### ChatGPT / Gemini / Other Chat Tools

Upload or paste the files listed in the skill's `manifest.yaml` into your conversation, then describe your task.

---

## Context

Context is what makes the system yours. The system's output quality is directly proportional to the quality of your context.

**Core context** (loaded by every skill):
- `context/core/identity.md` — Who you are, what you do, positioning, differentiators
- `context/core/voice.md` — How you sound, language rules, tone by channel

**Extended context** (loaded by relevant skills):
- `context/extended/product.md` — Product details, features, workflow
- `context/extended/users.md` — User personas, goals, pain points
- `context/extended/icp.md` — Ideal customer profile, buyer psychology
- `context/extended/competitive.md` — Competitors, positioning, alternatives
- `context/extended/pricing.md` — Pricing tiers, objection handling
- `context/extended/technical.md` — Tech stack, integrations, constraints
- `context/extended/visual-identity.md` — Colors, fonts, visual style
- `context/extended/formatting.md` — Document structure, heading rules
- `context/extended/proof-points.md` — Metrics, case studies, credibility

Start with `identity.md` and `voice.md`, then fill out extended files as needed. Run `npx baseline context` to update files or `npx baseline context add <name>` to create new ones.

---

## CLI Reference

See [`cli/README.md`](cli/README.md) for the full CLI documentation.

| Command | What It Does |
|---------|-------------|
| `npx @baseline-studio/cli init` | Create a new Baseline System |
| `npx baseline status` | Show current version, check for updates |
| `npx baseline update` | Pull latest skills, frameworks, scripts, and CLI |
| `npx baseline context` | Re-run context prompts to update existing files |
| `npx baseline context add <name>` | Create a new context file and wire it to skills |

---

## File Structure

```
your-system/
├── CLAUDE.md                    # Instructions for Claude Code (don't edit)
├── baseline.config.json         # Version tracking and config
├── skills/                      # 12 domain expertise modules
├── context/                     # YOUR business knowledge (you own this)
│   ├── core/                    # Identity and voice (loaded by every skill)
│   └── extended/                # Product, users, pricing, etc.
├── frameworks/                  # Reusable methodologies
├── scripts/                     # Delivery to external tools
└── cli/                         # Bundled CLI for daily use
```

**You own `context/`.** Everything else is managed by the system and updated via `npx baseline update`.

---

## FAQ

**Can I edit skill files?**
You can, but changes are overwritten on `baseline update`. Put custom behavior in context files instead.

**What if I don't have all the context files filled out?**
Skills work with whatever context is available. Missing context means more generic output, but nothing breaks.

**Can I add my own context files?**
Yes. Run `npx baseline context add <name>` to create a new file and wire it to skills.

**What AI tools does this work with?**
Any AI tool. Claude Code has full automation. Code editors like Cursor work when pointed to the manifest. Chat tools like ChatGPT work when you upload skill and context files.

**How do I get help?**
Email trent@baselinestudio.design.
