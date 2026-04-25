# Skills

> Universal domain expertise that works with any AI tool (ChatGPT, Gemini, Claude, etc.).

---

## What Skills Are

Skills are structured prompts that give AI tools domain expertise. They define methodology, quality criteria, and workflow patterns for specific types of work.

**Key principle:** Skills are universal. The same skill works with any AI tool. Context files make output specific to your business.

### Anatomy of a Skill

Each skill consists of these files:

| Component | What It Does | Location |
|-----------|-------------|----------|
| **Manifest** | Lists every file this skill needs | `[skill-name]/manifest.yaml` |
| **Skill File** | Methodology, workflow, quality checks | `[skill-name]/[skill-name]-skill.md` |
| **References** | Domain-specific guidelines and templates | `[skill-name]/references/` |

### What Skills Use from the System

Skills draw on the other components of the Baseline System:

| System Component | What It Provides | Location |
|-----------------|------------------|----------|
| **Context** | Your business knowledge (identity, voice, users, product) | `../context/` |
| **Frameworks** | Reusable patterns that skills reference | `../frameworks/` |
| **Examples** | Approved output samples that define the quality bar | `../context/examples/` or `[skill-name]/examples/` |

**The Baseline System = Skills + Context + Frameworks.** Skills create output. Context makes it specific to your business. Frameworks provide reusable methodology.

**Learn more:**
- [System Overview](../README.md) — How the three components work together
- [Available Frameworks](../frameworks/_README.md) — See what patterns skills can reference

---

## Start here

**First time?** Run the **Setup** skill. It asks for any docs you already have (pitch deck, brand guide, one-pager, product spec, etc.), parses them into your context files, and asks gap-filling questions only for what's missing. The fastest way to get from a fresh `npx init` to a fully personalized system.

To run it: open this folder in your AI tool and say *"run the setup skill."*

---

## Available Skills

**Run once to set up:**

| Skill | Purpose |
|-------|---------|
| [Setup](setup/setup-skill.md) | Guided context setup — ingest existing docs, parse them into context files, ask gap-filling questions for what's missing |

**Run as needed for daily work:**

| Skill | Purpose |
|-------|---------|
| [Strategic Advisory](strategic-advisory/strategic-advisory-skill.md) | Strategic decisions, roadmaps, prioritization, OKRs, alignment |
| [Research & Synthesis](research-synthesis/research-synthesis-skill.md) | User research, interviews, competitive analysis, synthesis |
| [Product Communications](product-communications/product-communications-skill.md) | PRDs, feature specs, product briefs, stakeholder updates, decision docs |
| [UX Design](ux-design/ux-design-skill.md) | Interface design, wireframes, user flows, UI copy, design systems, accessibility |
| [Product Analytics](product-analytics/product-analytics-skill.md) | Metrics, dashboards, funnel analysis, A/B tests, segmentation |
| [Prototyping](prototyping/prototyping-skill.md) | Coded prototypes, clickable demos, POCs, technical feasibility |
| [Project Management](project-management/project-management-skill.md) | Planning, tracking, sprints, status updates, risk management |
| [Technical Documentation](technical-documentation/technical-documentation-skill.md) | User guides, help center, API docs, release notes, how-to guides |
| [Visual Communication](visual-communication/visual-communication-skill.md) | Presentations, diagrams, decision visualization, data storytelling, narrative decks |
| [Product Marketing](product-marketing/product-marketing-skill.md) | Positioning, messaging frameworks, launch briefs, competitive messaging, case studies |
| [Go-to-Market Planning](go-to-market-planning/go-to-market-planning-skill.md) | Pricing strategy, launch planning, channel strategy, competitive positioning |
| [Skill Building](skill-building/skill-building-skill.md) | Creating new skills, documenting expertise, building reference files |

---

## Skill Selection Guide

| If you need to... | Use |
|-------------------|-----|
| Fill in your business context after a fresh `npx init` | [Setup](setup/setup-skill.md) |
| Make strategic decisions, prioritize roadmap | [Strategic Advisory](strategic-advisory/strategic-advisory-skill.md) |
| Research users, run competitive analysis | [Research & Synthesis](research-synthesis/research-synthesis-skill.md) |
| Write PRDs, specs, or decision docs | [Product Communications](product-communications/product-communications-skill.md) |
| Design interfaces, flows, or design systems | [UX Design](ux-design/ux-design-skill.md) |
| Define metrics, run A/B tests, analyze funnels | [Product Analytics](product-analytics/product-analytics-skill.md) |
| Build interactive prototypes or POCs | [Prototyping](prototyping/prototyping-skill.md) |
| Plan sprints, track progress, manage risks | [Project Management](project-management/project-management-skill.md) |
| Write user guides, API docs, help content | [Technical Documentation](technical-documentation/technical-documentation-skill.md) |
| Create presentations, diagrams, data stories | [Visual Communication](visual-communication/visual-communication-skill.md) |
| Position products, write case studies | [Product Marketing](product-marketing/product-marketing-skill.md) |
| Plan pricing, launches, channel strategy | [Go-to-Market Planning](go-to-market-planning/go-to-market-planning-skill.md) |
| Build new skills for your team | [Skill Building](skill-building/skill-building-skill.md) |

---

## Common Skill Overlaps

Some skills have similar names or adjacent responsibilities. Here's how to choose:

| Overlap | Distinction |
|---------|-------------|
| **Research vs Analytics** | Research answers "why" (qualitative interviews, synthesis). Analytics answers "what/how much" (quantitative metrics, dashboards). |
| **UX Design vs Prototyping** | UX designs solutions (flows, wireframes, copy). Prototyping makes them interactive and testable (coded demos, POCs). |
| **Product Communications vs Technical Documentation** | Product comms is internal (PRDs, specs for stakeholders). Tech docs is user-facing (help guides, release notes). |
| **Strategy vs Project Management** | Strategy decides what to build and why. PM executes how to build it (planning, tracking, sprints). |

---

## How to Use a Skill

### AI Coding Tools (Claude Code, Codex, Cursor, Windsurf, Copilot, JetBrains AI)

Just say which skill to use (e.g., "use my marketing skill to write a LinkedIn post"). These tools auto-read `AGENTS.md`, which reads the skill's `manifest.yaml` and loads every dependency automatically. No manual file loading required.

### Chat Tools (ChatGPT, Gemini, etc.)

Chat tools can't auto-read project files, so you need to load files manually. Each skill has a `manifest.yaml` that lists exactly which files it needs. Check it for the complete list, then load the files into your conversation:

1. **Load the skill file** and its framework — from `always_load` in the manifest
2. **Load your context** — from `context` in the manifest (files in `context/`)
3. **Load references** — from `references` in the manifest (if the task needs detailed guidance)
4. **State your request** — the skill guides you through clarification → execution → validation

All skills follow the [Workflow Orchestration](../frameworks/workflow-orchestration.md) pattern for consistent execution.

---

## How to Create New Skills

Use the [Skill Building](skill-building/skill-building-skill.md) skill and its references:

| Resource | Purpose |
|----------|---------|
| [Skill Building Skill](skill-building/skill-building-skill.md) | Complete workflow for creating skills |
| [Skill Architecture](skill-building/references/skill-architecture.md) | Structure and components of a skill |

**Key requirements for new skills:**
- Reference [workflow-orchestration.md](../frameworks/workflow-orchestration.md) for meta-workflow patterns
- Include domain-specific quality criteria
- Define what context files are needed
- Keep universal (no Claude-specific features in the skill itself)

**Related:** See [Workflow Orchestration](../frameworks/workflow-orchestration.md) for the meta-framework all skills follow.

---

## Related

- [Frameworks](../frameworks/_README.md) — Methodologies referenced by skills
- [System Overview](../README.md) — How the whole system works
