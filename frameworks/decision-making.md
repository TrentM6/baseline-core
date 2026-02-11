# Decision-Making Frameworks

> Universal frameworks for making, documenting, and improving decisions. Works across any domain.

---

## When to Use Which Framework

| Situation | Framework |
|-----------|-----------|
| Clarifying who decides | RAPID / RACI |
| Determining how much rigor needed | Reversibility Test |
| Surfacing hidden risks | Pre-mortem |
| Learning from past decisions | Decision Journal |
| Getting team to commit | Disagree and Commit |
| Thinking long-term | Regret Minimization |

---

## Reversibility Test

Determine how much rigor a decision needs.

### Two Types of Decisions

**Type 1 (Irreversible / One-Way Door):**
- Hard or impossible to undo
- High stakes, long-lasting consequences
- Examples: Major hires, acquisitions, architecture changes

**Process for Type 1:**
- Move slowly
- Gather data
- Seek wide input
- Document thoroughly

**Type 2 (Reversible / Two-Way Door):**
- Easy to undo or change
- Lower stakes, can experiment
- Examples: Feature tests, process changes, tool choices

**Process for Type 2:**
- Move fast
- Small group decides
- Experiment and iterate
- Don't over-analyze

### The Rule

Don't treat Type 2 decisions like Type 1. Most decisions are Type 2.

### Questions to Assess

1. What happens if we're wrong?
2. How hard is it to reverse?
3. What's the cost of delay?
4. Do we need more information or just action?

---

## Pre-mortem Analysis

Surface hidden concerns before they become problems.

### Process

1. Imagine it's one year from now
2. The project failed completely
3. Everyone writes down why it failed (individually, silently)
4. Share and discuss all failure scenarios
5. Work backwards to prevent those failures

### Why It Works

- Gives permission to voice doubts
- Surfaces concerns people wouldn't otherwise raise
- More concrete than "what could go wrong?"
- Creates psychological safety

### Template

```
Pre-mortem: [Project Name]
Date: [Date]

Imagine it's [future date] and this project failed badly.

What went wrong?
- [Failure scenario 1]
- [Failure scenario 2]
- [Failure scenario 3]

How do we prevent these?
- [Mitigation 1]
- [Mitigation 2]
- [Mitigation 3]
```

### When to Use

- Starting significant projects
- Before major commitments
- When team seems overconfident
- When stakes are high

---

## Disagree and Commit

Move forward despite disagreement.

### The Principle

- Debate vigorously
- Make a decision
- Everyone commits fully, even dissenters
- No "I told you so" if it fails

### Why It Works

- Prevents endless debate
- Speeds up execution
- Maintains team cohesion
- Allows experimentation

### Ground Rules

1. **Before decision:** All voices heard, genuine debate encouraged
2. **During decision:** Clear decision-maker, clear rationale
3. **After decision:** Full commitment from everyone
4. **If it fails:** No blame, learn together

### When to Use

- Team can't reach consensus
- Decision-maker has conviction
- Further debate won't yield new information
- Speed matters

---

## Regret Minimization

Long-term perspective for major decisions.

### The Framework (Jeff Bezos)

1. Project yourself to age 80
2. Look back on your life
3. Ask: "Which choice would I regret not taking?"
4. Choose the option with minimum regret

### Best For

- Career decisions
- Life decisions
- High-stakes, irreversible choices
- When data can't decide

### Questions to Ask

- Will I regret not trying this?
- In 10 years, will I remember this decision?
- What would I tell my future self?
- Am I choosing safety over growth?

### Limitations

- Less useful for tactical decisions
- Not data-driven
- Can rationalize either way
- Best combined with other frameworks

---

## RAPID Decision Model

Clarify roles to prevent decision paralysis.

### The Roles

**R – Recommend:** Proposes the decision
- Gathers input
- Frames options
- Makes recommendation

**A – Agree:** Must agree for decision to proceed
- Can block the decision
- Usually limited to those with expertise or stake
- Use sparingly (too many = gridlock)

**P – Perform:** Executes the decision
- Does the work
- Implements the choice
- May be multiple people

**I – Input:** Provides input, is consulted
- Shares perspective
- Doesn't have veto
- Should feel heard

**D – Decide:** Makes the final call
- One person only
- Accountable for outcome
- Breaks ties

### How to Use

1. Before starting decision process, assign all roles
2. Document who is R, A, P, I, D
3. Follow the process
4. D makes final call if A's can't agree

### Example

| Role | Person | Responsibility |
|------|--------|----------------|
| R | Product Manager | Propose the approach |
| A | Engineering Lead | Technical viability |
| P | Dev Team | Build it |
| I | Sales, Support | Customer perspective |
| D | VP Product | Final call |

---

## Decision Journal

Learn from past decisions to decide better.

### For Each Significant Decision, Record

**At decision time:**
- Date
- Decision made
- Options considered
- Reasoning / rationale
- Key assumptions
- Expected outcomes
- Confidence level (1-10)
- What would change your mind

**Later (3-12 months):**
- Actual outcome
- Was the decision right?
- What did you miss?
- What would you do differently?

### Template

```
## Decision: [What was decided]

**Date:** [Date]
**Confidence:** [1-10]

### Context
[Why this decision was needed]

### Options Considered
1. [Option A] — [Pros] — [Cons]
2. [Option B] — [Pros] — [Cons]
3. [Option C] — [Pros] — [Cons]

### Decision
We chose [Option X] because [reasoning].

### Key Assumptions
- [Assumption 1]
- [Assumption 2]

### Expected Outcome
[What we think will happen]

### Revisit Trigger
We'll reconsider if [conditions].

---

### Post-Decision Review ([Date])

**Outcome:** [What actually happened]
**Assessment:** [Right/Wrong/Mixed]
**Learnings:** [What we learned]
```

### Benefits

- Improves calibration (match confidence to accuracy)
- Reveals blind spots
- Documents institutional knowledge
- Enables learning from mistakes

---

## Decision Document Template

For important decisions that need documentation.

```
## Decision: [What was decided]

### Status
[Proposed / Decided / Implemented]

### Context
[Why this decision was needed — the problem or opportunity]

### Decision
[The choice that was made]

### Options Considered

**Option A: [Name]**
- Description: [What this option means]
- Pros: [Benefits]
- Cons: [Drawbacks]

**Option B: [Name]**
- Description: [What this option means]
- Pros: [Benefits]
- Cons: [Drawbacks]

**Option C: [Name]**
- Description: [What this option means]
- Pros: [Benefits]
- Cons: [Drawbacks]

### Rationale
[Why we chose this option over others]

### Trade-offs Accepted
[What we're giving up with this choice]

### Stakeholders
- **Decided by:** [Name]
- **Input from:** [Names]
- **Informed:** [Names]

### Next Steps
- [ ] [Action item 1] — [Owner]
- [ ] [Action item 2] — [Owner]

### Revisit Criteria
We'll revisit this decision if:
- [Condition 1]
- [Condition 2]
```

---

## Common Decision-Making Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| Decision by committee | Slowness, diluted accountability | Clear decision-maker (RAPID) |
| Analysis paralysis | Never decide | Timebox, use Reversibility Test |
| Overconfidence | Don't seek disconfirming evidence | Pre-mortem, seek dissent |
| Recency bias | Over-weight recent information | Decision Journal, longer view |
| Sunk cost fallacy | Continue because invested | Evaluate forward-looking only |
| Groupthink | Team agrees too easily | Assign devil's advocate |
| No documentation | Forget rationale, repeat mistakes | Decision Journal, Decision Docs |

---

## Used By Skills

This framework is referenced by:
- [Strategic Advisory](../_SKILLS/strategic-advisory/strategic-advisory-skill.md) — Strategic decision support
- [Project Management](../_SKILLS/project-management/project-management-skill.md) — Project decisions
- [Research Synthesis](../_SKILLS/research-synthesis/research-synthesis-skill.md) — Research-informed decisions

---

## Related Frameworks

- [Prioritization Framework](prioritization.md) — Prioritizing options before deciding
- [Strategy Framework](strategy.md) — Strategic context for decisions
