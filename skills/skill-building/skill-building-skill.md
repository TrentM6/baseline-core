---
name: skill-building
description: Create AI skills for clients. Use when delivering AI Workflows engagements — designing, building, documenting, and training teams on skills that enable faster work.
---

# Skill Building

Skill building is the core methodology for AI Workflows engagements. It's the process of capturing expertise, codifying it into repeatable skills, and enabling client teams to use AI effectively for their specific work.

---

## Core Principles

1. **Curation is the architecture.** A library's value is not the number of skills in it. Every skill added makes picking the right one harder, so the default answer to "should this be a skill?" is no until the evidence says otherwise.

2. **Mine, don't import.** Skills worth having come from your own corrections, rewrites, and repeated explanations. Someone else's library encodes their judgment about their work — the transferable part is the format, not the value.

3. **Skills encode judgment, not just procedures.** A skill shouldn't just say "do X, Y, Z." It should teach how to think about the domain — principles, trade-offs, when to escalate.

4. **Portable across contexts.** A good skill works with different business contexts. The skill stays the same; the context swaps (Baseline vs. client, client A vs. client B).

5. **Lean core, deep references.** SKILL.md should be 270-550 lines — the essential workflow. Deep content (frameworks, terminology, examples) lives in reference files that load on demand.

6. **Progressive disclosure.** Don't overwhelm. Core principles first, detailed methodology when needed, reference material for specific situations.

7. **Quality checks are measurable.** "Is it good?" isn't a quality check. "Does the main point land in 5 seconds?" is.

8. **Anti-patterns come from real mistakes.** Don't invent theoretical failures. Document what actually goes wrong.

9. **Skills must be maintainable.** If the client can't update and extend the skill after handoff, it will decay. Design for maintenance.

### Industry Principles

10. **User-centered design.** Who will use this skill? What are they trying to accomplish? Design for them.

11. **Test before delivery.** Run the skill through real tasks. Does it produce quality output?

12. **Documentation is part of the deliverable.** A skill without clear documentation is incomplete.

13. **Train the team.** Skills alone aren't enough. Teams need training on how and when to use them.

14. **Iterate based on usage.** First version is never perfect. Build in feedback loops.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the skill building-specific details for each step.

### 0. Curate: Decide Whether the Skill Should Exist

Most requests for a new skill shouldn't produce one. Run this before any discovery work.

**Find the candidate in your own work.** The strongest sources, in order:

1. **Repeated corrections** — you fixed the same thing in AI output twice this week. The correction is the skill content.
2. **Redone outputs** — you rewrote AI output before shipping. The diff between what it produced and what you shipped is the skill.
3. **Prompts you keep retyping** — anything pasted from a notes app weekly.
4. **Explanations you repeat** — what you tell every new person doing this work.
5. **Post-mortems** — "we should have checked X" is an anti-pattern and a quality check, already written.

**Then apply the gate.** Do not build a skill when:

| Signal | Do this instead |
|--------|-----------------|
| The model already does it well unprompted | Nothing, or a one-line prompt |
| You've done the task once | Wait for the third time |
| It's facts about the business, not method | `context/extended/[topic].md` |
| It's a step inside an existing skill's workflow | Extend that skill |
| Its triggers overlap an existing skill by ~80% | Add a section + trigger words to that skill |
| It's a checklist with no judgment calls | A template in `references/` or a `frameworks/` file |
| It's someone else's skill that looked good | Mine your own equivalent |

**Rule of three:** don't create a skill until the work has been done three times, or a second person needs to do it your way. **Improve in place:** extending the skill that already owns the domain beats adding a neighbour to it.

**Then make it routable.** `AGENTS.md` is generated from every skill's `manifest.yaml` — the `description` field is the only text the AI matches a request against, so write it as the artifacts a user would ask for ("PRDs, feature specs, decision docs"), not as a mission statement, and don't share task words with another skill.

**Deliverable:** a one-paragraph case — the artifacts the candidate was mined from, the three instances, why no existing skill owns it, and the draft manifest `description`.

> Detail, including the extraction protocol, the routing mechanism, and how custom skills survive `npx baseline update`: [Skill Discovery & Curation](references/skill-discovery.md).

### 1. Discovery: Understand the Process

Before building any skill, deeply understand the work it will automate.

**Questions to answer:**
- What is the process/task this skill will help with?
- Who does this work today? What's their expertise level?
- What does "good" look like? What does "bad" look like?
- What decisions require judgment? Where do people get stuck?
- What are the inputs and expected outputs?
- How will we know the skill is working?

**Methods:**
- Interview the people who do this work
- Observe the process in action
- Review past examples of good and bad outputs
- Document the current workflow step by step

**Deliverable:** Process documentation capturing how the work is done today, pain points, and quality standards.

### 2. Design: Architect the Skill

Design the skill structure before writing content.

**Decisions to make:**
- **Scope:** What does this skill do and not do?
- **Structure:** What sections belong in SKILL.md vs. references?
- **Context requirements:** What business knowledge does this skill need?
- **Triggers:** When should someone use this skill?
- **Quality criteria:** How will outputs be evaluated?

**Skill Structure:**
```
skill-name/
├── SKILL.md                 # Core principles, workflow, quality checks
└── references/
    ├── [domain]-guidelines.md    # Domain-specific standards
    ├── [type]-templates.md       # Output templates
    └── [topic]-reference.md      # Detailed reference material
```

**SKILL.md Sections:**
1. YAML header (name, description)
2. Introduction (what this skill is)
3. Core Principles (owner's + industry)
4. Workflow (clarify → load → execute → check)
5. Quality Checks (categorized, measurable)
6. Anti-patterns (real mistakes to avoid)
7. When to Use This Skill vs. Others
8. Output Expectations
9. When to Escalate

### 3. Build: Write the Skill

**Writing principles:**
- Write like you're teaching a smart person who doesn't know this domain
- Be specific — vague guidance produces vague output
- Include examples that show judgment, not just mechanics
- Quality checks should be binary: yes/no, not "somewhat"

**Context loading pattern:**
```markdown
### 2. Load Relevant Context

**Always load from the appropriate context folder** (`context/baseline/` for Baseline work, or `context/[client-name]/` for client work):

**Core context (always load):**
- `core/identity.md` — Business positioning, services, terminology
- `core/voice.md` — Tone, language rules, writing style

**Extended context (load when needed):**
- `extended/formatting.md` — Document structure (for documentation skills)
- `extended/visual-identity.md` — Colors, typography (for design skills)
- `extended/pricing.md` — Service tiers, pricing (for go-to-market planning skills)
- `extended/icp.md` — Ideal client profile (for product-marketing/go-to-market planning skills)

**Load from frameworks/:**
- `frameworks/[framework].md` — [When to use]

**Load when needed:**
- [Skill Architecture](references/skill-architecture.md) — Detailed skill structure, components, and design patterns
- [Skill Discovery & Curation](references/skill-discovery.md) — Mining candidates, the don't-build gate, routing a growing library
```

### 4. Test: Validate with Real Tasks

**Testing process:**
1. Select 3-5 representative tasks
2. Run the skill against each task
3. Evaluate output quality
4. Note where skill guidance was unclear or missing
5. Iterate on skill content

**Testing checklist:**
- [ ] Does the skill produce acceptable output?
- [ ] Is the workflow clear and followable?
- [ ] Are quality checks catching real issues?
- [ ] Would a new user understand what to do?
- [ ] Are edge cases handled?

### 5. Deliver: Hand Off with Training

**Deliverables:**
- Complete skill files (SKILL.md + references)
- Context files populated with client information
- Documentation on how to use and maintain
- Training session(s) for the team

**Training covers:**
- When to use this skill
- How to trigger and guide the skill
- How to evaluate output quality
- How to update the skill over time

### 6. Support: Enable Adoption

**After handoff:**
- Answer questions as they arise
- Review early outputs and provide feedback
- Help iterate on skill based on real usage
- Document common issues and solutions

---

## Prompt Engineering for Skills

Skills work through prompts. Understanding prompt engineering improves skill quality.

### Prompt Structure

**Effective prompts include:**
1. **Role/Context:** What expertise to bring
2. **Task:** What to do, specifically
3. **Input:** What information to work with
4. **Format:** How to structure output
5. **Constraints:** What to avoid or include

### Prompt Principles

**Be specific:**
- Bad: "Write good copy"
- Good: "Write a LinkedIn post (150-200 words) that opens with a contrarian observation"

**Provide context:**
- Bad: "Help with product marketing"
- Good: "You're helping a B2B consultancy write thought leadership for product leaders"

**Show examples:**
- Include good/bad examples when quality is subjective
- Show format through demonstration, not just description

**Set constraints:**
- Length limits
- What to include/exclude
- Voice and tone requirements
- Quality criteria

### Prompt Patterns for Skills

**Chain of thought:** "First analyze X, then consider Y, then produce Z"

**Few-shot examples:** "Here's a good example: [example]. Now do similar for: [task]"

**Structured output:** "Format your response as: [structure]"

**Quality self-check:** "Before finalizing, verify: [checklist]"

### Common Prompt Issues

| Issue | Symptom | Fix |
|-------|---------|-----|
| Too vague | Generic, unhelpful output | Add specificity, examples |
| Missing context | Output doesn't fit situation | Load relevant context files |
| No constraints | Output is off-target | Add explicit constraints |
| Overwhelming | Confused, partial output | Break into steps, progressive disclosure |
| No examples | Inconsistent quality | Add good/bad examples |

---

## Context Architecture

### Context vs. Skill

**Skills** = How to think about and approach work (methodology)
**Context** = Business-specific knowledge (what to apply methodology to)

This separation makes skills portable — same skill works with different contexts.

### Context Files

**Standard context structure** (use `baseline/` for Baseline, or a client folder name for clients):
```
context/[folder-name]/
├── core/                    # Always loaded
│   ├── identity.md          # Services, positioning, terminology
│   └── voice.md             # Tone, language rules, writing style
├── extended/                # Loaded per skill
│   ├── icp.md               # Ideal client profile (Product Marketing, Go-to-Market Planning)
│   ├── pricing.md           # Pricing structure (Go-to-Market Planning)
│   ├── formatting.md        # Document structure (Tech Docs)
│   └── visual-identity.md   # Colors, typography (Design skills)
└── examples/                # Sample good outputs to reference
```

**Context content:**
- Factual, not procedural
- Specific to the business
- Updated as business evolves
- Loaded by skills as needed

---

## Quality Checks

### Skill Design Quality

- [ ] Mined from at least three real instances of the work (not one, not a hunch)?
- [ ] No existing skill owns this domain, and none of its triggers overlap by ~80%?
- [ ] Manifest `description` lists artifacts a user would ask for, and shares no task words with another skill?
- [ ] Scope is clear and bounded?
- [ ] Principles teach judgment, not just steps?
- [ ] Workflow is complete and followable?
- [ ] Quality checks are measurable (not vague)?
- [ ] Anti-patterns are from real experience?
- [ ] Context loading is specified?

### Skill Output Quality

- [ ] Produces acceptable output on test tasks?
- [ ] Handles edge cases?
- [ ] Errors are caught by quality checks?
- [ ] New users can follow the skill?

### Handoff Quality

- [ ] All files complete and organized?
- [ ] Context populated with client data?
- [ ] Documentation is clear?
- [ ] Team is trained?
- [ ] Support plan in place?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **A skill for every task** | Library bloats, routing gets ambiguous, the wrong skill fires | Rule of three; extend the skill that owns the domain |
| **Importing someone else's library** | Encodes their judgment about their work, not yours | Mine your own corrections and rewrites |
| **Vague manifest description** | It's the routing key — vague means it matches everything or nothing | List the artifacts a user would ask for |
| **Procedure without principles** | Can't handle novel situations | Teach judgment, not just steps |
| **Vague quality checks** | No way to know if output is good | Specific, measurable checks |
| **Too long/comprehensive** | Overwhelming, ignored | Lean core, deep references |
| **Context in skills** | Skills aren't portable | Separate context from methodology |
| **No testing** | Skills don't work in practice | Test with real tasks before delivery |
| **Training as afterthought** | Skills unused | Training is part of delivery |
| **Over-prompting** | Confusing, conflicting guidance | Clear, focused instructions |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Build AI skills for clients | Skill Building | Technical Documentation (different format) |
| Write documentation | Technical Documentation | Skill Building (different purpose) |
| Research user needs | Research & Synthesis | Skill Building (research before building) |
| Train on existing skills | Project Management (delivery) | Skill Building (already built) |

---

## Output Expectations

**Process documentation:** Clear understanding of current workflow, pain points, quality standards

**Skill files:** Complete SKILL.md + references, tested, documented

**Context files:** Populated with client-specific information

**Training:** Team can use and maintain skills independently

---

## When to Escalate

Flag for review when:

- Skill scope expanding beyond original agreement
- Process being automated is unclear or contested
- Quality standards are subjective or undefined
- Technical limitations affect skill design
- Client team has concerns about adoption
- Skill requires capabilities not currently supported
