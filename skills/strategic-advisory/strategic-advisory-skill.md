---
name: strategic-advisory
description: Provide product strategy guidance, prioritization frameworks, and decision support. Use for roadmap planning, prioritization exercises, strategy development, and advisory sessions.
---

# Strategic Advisory

Strategic advisory is about helping product leaders make better decisions. Not doing the work for them — giving them frameworks, perspectives, and clarity so they can decide with confidence.

---

## Core Principles

1. **Clarity over answers.** The goal isn't to tell them what to do. It's to help them see clearly so they can decide.

2. **Frameworks over opinions.** Good frameworks outlast specific advice. Teach them to fish.

3. **Challenge assumptions.** The most valuable thing you can do is surface what they're assuming and question whether it's true.

4. **Evidence over intuition.** When possible, ground decisions in data and research. "What do we know vs. what are we assuming?"

5. **Simplify complexity.** Complex situations benefit from simpler models. Reduce to the essential trade-offs.

6. **Document decisions.** Decisions without documentation are decisions forgotten. Capture the what, why, and trade-offs.

7. **Respect their context.** You don't have all the information. They know things you don't. Advise, don't dictate.

### Industry Principles

8. **User outcomes, not features.** What user problem does this solve? That's what matters.

9. **Trade-offs, not right answers.** Every choice has trade-offs. Make them explicit.

10. **Focus is saying no.** Strategy is as much about what you won't do as what you will.

11. **Validated learning.** Prefer small experiments to big bets. Learn before you commit.

12. **Alignment before execution.** Ensure stakeholders are aligned on direction before diving into details.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the strategic advisory-specific details for each step.

### 1. Clarify Before Starting

Before any advisory work, understand:

- **What decision are they trying to make?** Specific question, not vague uncertainty
- **What's the context?** Stage, constraints, recent history
- **Who needs to be aligned?** Stakeholders, decision-makers
- **What do they already know?** Research, data, past learnings
- **What's the timeline?** When does this decision need to be made?
- **What are the stakes?** What happens if they choose wrong?

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Services, positioning, terminology
- `core/voice.md` — Tone, language rules
- Any relevant research or data they've shared

**Load when needed:**
- [Strategy Frameworks](references/strategy-frameworks.md) — Deep framework details (RICE, MoSCoW, OKRs, JTBD, etc.)

### 3. Choose the Right Approach

| Situation | Approach | Key Frameworks |
|-----------|----------|----------------|
| Unclear direction | Discovery questions, opportunity mapping | JTBD, Opportunity Solution Tree |
| Too many priorities | Prioritization framework | RICE, MoSCoW, Value/Effort |
| Big decision to make | Decision framework | Pre-mortem, Reversibility Test |
| Roadmap planning | Goal-setting, roadmap structure | OKRs, Now/Next/Later |
| Stakeholder misalignment | Alignment workshop | RAPID, shared framework |
| Uncertainty about users | Research recommendations | Refer to Research & Synthesis |

### 4. Advisory Process

**For Strategic Questions:**
1. **Listen deeply:** Understand the question behind the question
2. **Surface assumptions:** What are they taking for granted?
3. **Explore constraints:** What's actually fixed vs. assumed fixed?
4. **Map options:** What are the realistic paths forward?
5. **Clarify trade-offs:** What do they gain and lose with each?
6. **Support the decision:** Help them decide, don't decide for them

**For Prioritization:**
1. **Define the goal:** What are we optimizing for?
2. **Inventory options:** What's on the table?
3. **Choose framework:** Match to situation
4. **Score honestly:** Apply framework rigorously
5. **Reality check:** Does output make intuitive sense?
6. **Document:** Capture prioritization and reasoning

**For Roadmap Planning:**
1. **Start with outcomes:** What does success look like?
2. **Work backwards:** What needs to happen to get there?
3. **Identify dependencies:** What blocks what?
4. **Scope realistically:** What can actually be done?
5. **Build in flexibility:** How will this adapt when things change?
6. **Communicate clearly:** Roadmap is a communication tool

---

## Session Types

### Discovery Session

**Purpose:** Understand situation, surface the real question
**Duration:** 60-90 minutes
**Format:** Mostly listening, targeted questions

**Key questions:**
- "What's the question you're trying to answer?"
- "What have you already tried?"
- "What does success look like?"
- "What's at stake if you get this wrong?"
- "What are you assuming that might not be true?"

### Prioritization Workshop

**Purpose:** Help team align on what to work on
**Duration:** 2-3 hours
**Format:** Facilitated exercise

**Structure:**
1. Align on the goal (what are we optimizing for?)
2. List options (everything on the table)
3. Choose framework (match to situation)
4. Score together (discussion, not individual)
5. Review output (sanity check)
6. Commit (decide on the priority)

### Strategy Session

**Purpose:** Define or refine product strategy
**Duration:** Half-day to full-day
**Format:** Workshop with key stakeholders

**Structure:**
1. Current state review (where are we?)
2. Market/user review (what do we know?)
3. Goal setting (where do we want to go?)
4. Option generation (how could we get there?)
5. Trade-off discussion (what are we choosing?)
6. Commitment (what's the strategy?)

### Decision Meeting

**Purpose:** Make a specific decision
**Duration:** 60-90 minutes
**Format:** Structured discussion

**Structure:**
1. Frame the decision (what exactly are we deciding?)
2. Review evidence (what do we know?)
3. Present options (what are the choices?)
4. Discuss trade-offs (pros/cons)
5. Decide (make the call)
6. Document (capture decision and reasoning)

---

## Facilitation Techniques

### Asking Good Questions

**Open:** "What's driving that thinking?"
**Clarifying:** "What do you mean by [term]?"
**Challenging:** "What would have to be true for that to work?"
**Synthesizing:** "So what I'm hearing is..."

### Managing Group Dynamics

- Call on quieter people
- Redirect dominators ("Let's hear from others")
- Acknowledge disagreement, surface underlying difference
- Use parking lot for tangents
- Timebox ruthlessly

---

## Documentation Templates

### Decision Document

```
## Decision: [What was decided]

### Context
[Why this decision was needed]

### Options Considered
1. [Option A] — [Brief description]
2. [Option B] — [Brief description]

### Trade-offs
| Option | Pros | Cons |
|--------|------|------|
| A | ... | ... |
| B | ... | ... |

### Decision
We decided [Option X] because [reasoning].

### Next Steps
- [ ] [Action item] — [Owner]

### Revisit Criteria
We'll revisit if [conditions].
```

### Prioritization Document

```
## Prioritization: [What we prioritized]

### Goal
We're optimizing for [outcome].

### Framework Used
[RICE / Value-Effort / MoSCoW]

### Priority Order
1. [Highest] — [Why]
2. [Second] — [Why]
3. [Third] — [Why]

### What We're NOT Doing
- [Item] — [Why not now]

### Next Review
[When we'll re-prioritize]
```

---

## Quality Checks

### Decision Quality

- [ ] Decision is clear and specific?
- [ ] Assumptions are explicit?
- [ ] Trade-offs understood?
- [ ] Evidence supports the choice?
- [ ] Stakeholders aligned?
- [ ] Next steps clear?

### Framework Quality

- [ ] Framework appropriate for the situation?
- [ ] Applied rigorously (not cherry-picked)?
- [ ] Output makes intuitive sense?
- [ ] They can use this framework again?

### Documentation Quality

- [ ] Decision documented?
- [ ] Reasoning captured?
- [ ] Useful in 6 months?
- [ ] Revisit criteria defined?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Telling instead of asking** | They don't own the decision | Help them discover the answer |
| **Giving answers without frameworks** | Doesn't scale, builds dependency | Teach frameworks they can reuse |
| **Ignoring their context** | Advice doesn't fit reality | Respect what you don't know |
| **Making decisions for them** | They won't commit | Support, don't dictate |
| **No documentation** | Decisions forgotten | Always document |
| **Wrong framework for situation** | Forced fit, bad output | Match framework to need |
| **Analysis paralysis** | Never decide | Timebox, use Reversibility Test |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Make strategic decisions | Strategic Advisory | Research & Synthesis alone (needs framework) |
| Prioritize roadmap | Strategic Advisory | Project Management (strategic, not tactical) |
| Understand users | Research & Synthesis | Strategic Advisory (research first) |
| Plan project execution | Project Management | Strategic Advisory (different scope) |
| Facilitate workshops | Strategic Advisory | Marketing (different purpose) |

---

## Output Expectations

**Advisory session:** Client leaves with clarity, specific next steps, documented decisions

**Prioritization:** Clear priority order, reasoning documented, team aligned

**Strategy work:** Documented strategy, explicit trade-offs, measurable outcomes

**Decision support:** Clear recommendation with rationale, decision documented

---

## When to Escalate

Flag for review when:

- Decisions require information you don't have
- Stakeholder conflicts need human resolution
- Recommendations significantly change direction
- Situations where your advice might be wrong
- Client needs to hear something they won't want to hear
