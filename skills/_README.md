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
| **Scripts** | Delivery to external tools after skill produces output | `../scripts/` |

**The Baseline System = Skills + Context + Frameworks + Scripts.** Skills create output. Context makes it specific to your business. Frameworks provide reusable methodology. Scripts deliver to external tools.

**Learn more:**
- [System Overview](../README.md) — How the four components work together
- [Available Frameworks](../frameworks/_README.md) — See what patterns skills can reference
- [Using Scripts](../scripts/_README.md) — Deliver output to external tools

---

## Available Skills

| Skill | Purpose |
|-------|---------|
| [Strategic Advisory](strategic-advisory/strategic-advisory-skill.md) | Prioritization, roadmaps, decision support, advisory sessions |
| [Research & Synthesis](research-synthesis/research-synthesis-skill.md) | Discovery interviews, validation, competitive analysis, research reports |
| [Product Communications](product-communications/product-communications-skill.md) | PRDs, product briefs, feature specs, launch briefs, stakeholder updates |
| [UX Design](ux-design/ux-design-skill.md) | User research, journey maps, wireframes, UI copy, design systems |
| [Product Analytics](product-analytics/product-analytics-skill.md) | KPIs, success metrics, dashboards, A/B tests, funnel analysis |
| [Prototyping](prototyping/prototyping-skill.md) | Coded prototypes, clickable demos, POCs, feasibility testing |
| [Project Management](project-management/project-management-skill.md) | Planning, tracking, status updates, sprint facilitation |
| [Technical Documentation](technical-documentation/technical-documentation-skill.md) | User guides, help center, feature docs, release notes |
| [Brand Design](brand-design/brand-design-skill.md) | Presentations, social graphics, diagrams, brand assets |
| [Marketing](marketing/marketing-skill.md) | LinkedIn content, website copy, case studies, email campaigns |
| [Sales](sales/sales-skill.md) | Outreach, discovery calls, proposals, pipeline management |
| [Skill Building](skill-building/skill-building-skill.md) | Creating new AI skills, prompt engineering |

---

## Skill Selection Guide

| If you need to... | Use |
|-------------------|-----|
| Make strategic decisions | [Strategic Advisory](strategic-advisory/strategic-advisory-skill.md) |
| Research users (qualitative) | [Research & Synthesis](research-synthesis/research-synthesis-skill.md) |
| Write PRDs and specs | [Product Communications](product-communications/product-communications-skill.md) |
| Design interfaces and flows | [UX Design](ux-design/ux-design-skill.md) |
| Define and analyze metrics | [Product Analytics](product-analytics/product-analytics-skill.md) |
| Build interactive prototypes | [Prototyping](prototyping/prototyping-skill.md) |
| Plan and track projects | [Project Management](project-management/project-management-skill.md) |
| Write user documentation | [Technical Documentation](technical-documentation/technical-documentation-skill.md) |
| Create visual assets | [Brand Design](brand-design/brand-design-skill.md) |
| Create content and copy | [Marketing](marketing/marketing-skill.md) |
| Sell and close deals | [Sales](sales/sales-skill.md) |
| Build new skills | [Skill Building](skill-building/skill-building-skill.md) |

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

## Scripts for Each Skill

Scripts push outputs directly to external tools after a skill produces content. Every major AI tool supports this through MCP.

| Skill | Available Scripts |
|-------|-------------------|
| **Strategic Advisory** | FigJam diagrams, monday.com roadmaps, Canva presentations |
| **Research & Synthesis** | FigJam diagrams, Confluence pages, Google Docs |
| **Product Communications** | Confluence pages, Google Docs, Slack posts |
| **UX Design** | FigJam diagrams, wireframe specs |
| **Product Analytics** | Amplitude metrics, Google Sheets |
| **Prototyping** | Wireframe specs, Jira epics |
| **Project Management** | Asana projects/sprints, Jira epics, monday.com roadmaps |
| **Technical Documentation** | Confluence pages, Google Docs, markdown files |
| **Brand Design** | Canva presentations, FigJam diagrams |
| **Marketing** | Canva presentations, Slack posts, email drafts |
| **Sales** | Canva presentations, email drafts, Google Docs |
| **Skill Building** | — |

See [Scripts](../scripts/_README.md) for the full list and setup requirements.

---

## Related

- [Frameworks](../frameworks/_README.md) — Methodologies referenced by skills
- [Scripts](../scripts/_README.md) — Push outputs directly to external tools
- [System Overview](../README.md) — How the whole system works
