# Skill Architecture Guide

> Detailed guidance on skill structure, design decisions, and best practices.

**Part of:** [Skill Building](../skill-building-skill.md)

---

## Architecture Overview

The Baseline System uses a **centralized architecture**:

```
┌─────────────────────────────────────────────────────────────────┐
│                  frameworks/workflow-orchestration.md          │
│                  (Meta-workflow patterns — single source)       │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ reference
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                         skills/                                │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│   │  marketing  │  │    sales    │  │  research   │  ...      │
│   │   skill.md  │  │   skill.md  │  │   skill.md  │           │
│   │ (domain     │  │ (domain     │  │ (domain     │           │
│   │  expertise) │  │  expertise) │  │  expertise) │           │
│   └─────────────┘  └─────────────┘  └─────────────┘           │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ load
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                         context/                               │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  [client]/                                               │ │
│   │  ├── core/identity.md    ← Who they are                 │ │
│   │  ├── core/voice.md       ← How they sound               │ │
│   │  └── extended/           ← Skill-specific context       │ │
│   └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Why centralized?** One place to update workflow patterns → all skills benefit. Skills stay lean (domain expertise only).

---

## Skill Anatomy

### The Complete Structure

```
skill-name/
├── manifest.yaml                 # Lists every file this skill needs
├── SKILL.md                      # Core skill (270-550 lines)
└── references/                   # Supporting materials
    ├── [domain]-guidelines.md    # Domain-specific standards
    ├── [type]-templates.md       # Output templates
    ├── frameworks.md             # Methodologies
    └── examples/                 # Example outputs
        └── [example-1].md
```

**manifest.yaml** is the dependency declaration for the skill. It lists every file the skill needs to run — the skill file itself, frameworks, context files, and references. Claude Code reads this automatically to load all dependencies. On other platforms (ChatGPT, Gemini, etc.), use it as a reference for which files to load manually. When creating a new skill, always create a manifest alongside it.

### SKILL.md Structure

Every SKILL.md follows this template:

```markdown
---
name: skill-name
description: [What this skill does]. Use when [specific triggers].
---

# [Skill Name]

[One-line positioning statement]

---

## Core Principles

### [Owner]'s Principles
[Personal standards, judgment rules, quality thresholds]

### Industry Principles
[Best practices everyone should follow]

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the [skill]-specific details for each step.

### 1. Clarify Before Starting
[Domain-specific questions to answer]

### 2. Load Relevant Context
[Which files to load and when]

### 3. [Domain-Specific Steps]
[The actual process]

### 4. Quality Check
[Specific checkboxes for each output type]

---

## Anti-Patterns
[Specific failures to avoid]

---

## Output Expectations
[What good output looks like for each type]

---

## When to Escalate
[When to flag for human review]
```

### Key Change: Orchestration Reference

Skills now reference the central workflow orchestration document instead of repeating workflow boilerplate:

```markdown
## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the [skill]-specific details for each step.
```

This keeps skills lean and ensures consistent workflow patterns across all skills.

---

## What Goes Where

### In workflow-orchestration.md (central)

- System principles (simplicity, root cause, elegance, verification)
- The 4-step workflow pattern
- Error recovery paths
- Parallel execution guidance
- Capture learnings template
- Planning triggers (3+ steps)
- Universal escalation principles

### In SKILL.md (domain-specific)

- Domain principles and judgment rules
- Domain-specific clarifying questions
- Context files to load for this domain
- Domain methodology and process
- Domain-specific quality checks
- Domain-specific anti-patterns
- Domain-specific escalation criteria

### Rule of Thumb

If it's the same across all skills → orchestration document
If it varies by domain → skill file

---

## Reference File Types

**Guidelines Files:**
- Domain-specific rules and standards
- Quality criteria
- Voice and tone guidelines
- Do's and don'ts

**Framework Files:**
- Methodologies (AIDA, RICE, etc.)
- Decision frameworks
- Process structures
- Mental models

**Template Files:**
- Output templates
- Document structures
- Reusable formats

**Example Files:**
- Good examples (what to aim for)
- Bad examples (what to avoid)
- Annotated examples (why it works/doesn't)

---

## Design Decisions

### What Goes in SKILL.md vs. References

**In SKILL.md (always loaded):**
- Core principles (always relevant)
- Workflow overview (always needed)
- Quality checks (always applied)
- Anti-patterns (always avoided)
- Escalation criteria (always checked)

**In References (loaded when needed):**
- Detailed frameworks (only for relevant tasks)
- Templates (only when creating that output)
- Deep terminology (only for that context)
- Extended examples (only when struggling)

**Rule of thumb:** If it's needed for every use of the skill, it's in SKILL.md. If it's needed for specific situations, it's in references.

### Line Count Guidelines

| File Type | Target Lines | Rationale |
|-----------|--------------|-----------|
| SKILL.md | 270-550 | Core context without token waste |
| Guidelines | 150-400 | Deep enough to be useful |
| Frameworks | 200-600 | Complete methodology |
| Templates | 100-300 | Structure + examples |
| Examples | 50-200 | Annotated outputs |

**Under target:** Might be missing important content
**Over target:** Consider splitting or moving to references

### Progressive Disclosure

Layer information from simple to complex:

**Level 1 (SKILL.md core):**
- High-level principles
- Basic workflow
- Essential quality checks

**Level 2 (SKILL.md detail):**
- Workflow variations
- Anti-patterns
- Escalation criteria

**Level 3 (References):**
- Deep frameworks
- Extensive examples
- Edge cases

Users should be able to do basic work with just SKILL.md core, but have deeper content available when needed.

---

## Principles Design

### Owner's Principles

These are the personal standards and judgment rules that make the difference between mediocre and excellent work.

**Characteristics:**
- Based on real experience
- Opinionated (this is how we do it)
- Judgment-focused (when to do what)
- Outcome-oriented (why this matters)

**Example:**
```
1. **Sound like a peer, not a marketer.** Content should feel like advice
   from a senior operator, not a pitch from a vendor.
```

**Not:**
```
1. Write good marketing copy that resonates with the target audience.
```

### Industry Principles

These are widely accepted best practices that anyone in the domain would agree with.

**Characteristics:**
- Non-controversial
- Foundational
- Widely applicable
- Established practices

**Example:**
```
8. **Know your audience deeply.** Series A founders, Heads of Product, CEOs.
   What are they reading? What keeps them up at night?
```

### Principle Count

**Target:** 10-15 principles total
- 5-8 owner's principles
- 4-7 industry principles

**Under 10:** Might be missing important guidance
**Over 15:** Probably too granular, combine related principles

---

## Workflow Design

### The Universal Pattern

All skills follow this pattern from workflow-orchestration.md:

```
1. Clarify (understand what's needed)
2. Load (gather relevant context)
3. Execute (do the actual work)
4. Validate (check quality)
```

Skills add domain-specific content to each step but don't repeat the universal guidance.

### Clarify Section

**Purpose:** Ensure understanding before starting

**Include domain-specific:**
- Questions to answer
- Information to gather
- Ambiguities to resolve

**Format:**
```markdown
### 1. Clarify Before Starting

Before [task], answer:

- **[Category 1]:** [Question]
- **[Category 2]:** [Question]
```

### Load Section

**Purpose:** Pull in relevant context

**Include domain-specific:**
- Which files to reference
- When to load each
- What to look for

**Format:**
```markdown
### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — [What it provides]
- `core/voice.md` — [What it provides]

**Extended context (load when needed):**
- `extended/[file].md` — [When to load]
```

### Execute Section

**Purpose:** The actual work process

**Include domain-specific:**
- Steps for each major task type
- Decision points
- Variations and options

### Validate Section

**Purpose:** Quality assurance before delivery

**Include domain-specific:**
- Checklists for each output type
- Specific, measurable criteria
- What to check and how

---

## Quality Check Design

### What Makes a Good Quality Check

**Specific:** Not "Is it good?" but "Does the main point land in 5 seconds?"

**Measurable:** Can be answered yes/no or with specific criteria

**Actionable:** If no, user knows what to fix

**Comprehensive:** Covers all dimensions of quality

### Quality Check Categories

**Content Quality:**
- Accuracy
- Completeness
- Relevance
- Clarity

**Style Quality:**
- Voice match
- Tone appropriateness
- Formatting consistency
- Language quality

**Technical Quality:**
- Specifications met
- Constraints satisfied
- Standards followed

---

## Context Integration

### How Skills Use Context

Skills reference context files for business-specific knowledge:

```markdown
### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Business positioning, services, terminology
- `core/voice.md` — Tone, language rules, writing style

**Extended context (load when needed):**
- `extended/formatting.md` — Document structure (for documentation skills)
- `extended/visual-identity.md` — Colors, typography (for design skills)
- `extended/pricing.md` — Service tiers, pricing (for sales skills)
- `extended/icp.md` — Ideal client profile (for sales/marketing skills)
```

### Context vs. Skill

| Context Contains | Skill Contains |
|------------------|----------------|
| What we know about the business | How to do the work |
| Terminology to use | When to use each term |
| Audiences and personas | How to adapt for audiences |
| Brand voice guidelines | How to apply voice |
| Proof points and claims | When/how to use proof |

**Rule:** Context is knowledge. Skill is methodology.

### Context Swapping

Same skill works with different contexts:

```
marketing/SKILL.md + context/baseline/ = Baseline marketing
marketing/SKILL.md + context/client-x/ = Client X marketing
```

The skill's workflow stays the same. The context provides business-specific information.

---

## Testing Skills

### Test Protocol

1. **Representative task:** Choose a real task the skill should handle
2. **Run the skill:** Follow the workflow exactly
3. **Evaluate output:** Against quality checks
4. **Compare:** To known-good examples
5. **Identify gaps:** What didn't work?
6. **Iterate:** Refine and retest

### Test Questions

- Does following the workflow produce good output?
- Are all quality checks answerable?
- Would a new user understand what to do?
- Are edge cases handled?
- Is escalation clear?

---

## Maintenance Considerations

### Design for Maintenance

**Modularity:** Changes to one part don't break others
**Clear ownership:** Someone knows to update it
**Documentation:** Decisions are recorded
**Examples:** Can be updated as standards evolve

### Update Triggers

- Process changes
- Quality bar changes
- New task types needed
- User feedback
- Context changes

### Centralized vs Distributed Updates

**Workflow patterns changed?** → Update workflow-orchestration.md (affects all skills)
**Domain expertise changed?** → Update specific skill file only
**Quality standards changed?** → May need both depending on scope
