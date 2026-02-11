# Frameworks

> Universal methodologies and mental models referenced by skills.

---

## What Frameworks Are

Frameworks are reusable patterns and methodologies that skills draw upon. They're not standalone tools — skills reference them when specific methodology is needed.

```
Skill says "prioritize features"  →  Loads prioritization.md  →  Applies RICE/ICE/MoSCoW
```

**Key principle:** Frameworks are universal. They work with any AI tool and aren't tied to specific skills.

**Learn more:**
- [System Overview](../README.md) — How frameworks fit with skills, context, and scripts
- [Browse Skills](../skills/_README.md) — See which skills reference which frameworks

---

## Available Frameworks

| Framework | Contents | Referenced By |
|-----------|----------|---------------|
| [Workflow Orchestration](workflow-orchestration.md) | Meta-workflow patterns, error recovery, parallel execution | All skills |
| [Prioritization](prioritization.md) | RICE, ICE, MoSCoW, Value/Effort Matrix | Strategic Advisory, PM |
| [Decision Making](decision-making.md) | Pre-mortem, Reversibility Test, RAPID | Strategic Advisory |
| [Messaging](messaging.md) | AIDA, PAS, 4Cs, Hook→Value→CTA | Marketing, Sales, Product Comms |
| [Research](research.md) | Discovery interviews, validation, synthesis | Research & Synthesis |
| [Strategy](strategy.md) | OKRs, JTBD, Opportunity Solution Trees | Strategic Advisory |
| [Pace Layering](pace-layering.md) | Systems change at different speeds, timeline setting | Strategic Advisory, PM |
| [UX Heuristics](ux-heuristics.md) | Nielsen's Heuristics, WCAG, Cognitive Load | UX Design |
| [Project Management](project-management.md) | RACI, Risk Matrix, Estimation | Project Management |
| [Session Planning](session-planning.md) | Multi-session decomposition, project plan generation | All skills (via Workflow Orchestration) |

---

## Special: Workflow Orchestration

[workflow-orchestration.md](workflow-orchestration.md) is the meta-framework that all skills reference. It defines:

- **4-step workflow pattern:** Clarify → Load Context → Execute → Validate
- **Error recovery paths:** What to do when quality checks fail
- **Parallel execution strategy:** When to use subagents
- **System principles:** Simplicity, root cause, verification, elegance

Skills don't repeat this content — they reference it and add domain-specific details.

---

## When Frameworks Are Used

Frameworks are loaded **during skill execution**, not standalone. Each skill's `manifest.yaml` lists the framework files it needs. In Claude Code, these are loaded automatically. On other platforms, check the manifest to know which frameworks to load.

**Example workflow:**
1. You use the Strategic Advisory skill
2. Claude Code reads its `manifest.yaml` and loads `workflow-orchestration.md` automatically
3. Skill asks you to prioritize features and applies RICE scoring from its references
4. Output uses the framework's methodology

You typically don't load frameworks directly — skills handle it (automatically in Claude Code, or via the manifest on other platforms).

---

## How to Add New Frameworks

**When to create a framework:**
- Methodology is reusable across multiple skills
- Pattern is universal (not specific to one domain)
- Framework has established industry acceptance

**Framework structure:**

```markdown
# Framework Name

> One-line description

---

## When to Use

[Situations where this framework applies]

---

## The Framework

[Core methodology, steps, or mental model]

---

## Application Examples

[How to apply in practice]

---

## Common Pitfalls

[What to avoid]
```

**Naming:** Use lowercase with hyphens (`my-framework.md`)

---

## Related

- [Skills](../skills/_README.md) — Domain expertise that references frameworks
- [Workflow Orchestration](workflow-orchestration.md) — The meta-framework that all skills follow
- [System Overview](../README.md) — How to use the Baseline System
