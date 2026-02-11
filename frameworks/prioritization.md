# Prioritization Frameworks

> Universal frameworks for prioritizing options, features, and decisions. Works across any domain.

---

## When to Use Which Framework

| Situation | Framework |
|-----------|-----------|
| Comparing many options with data | RICE Scoring |
| Quick prioritization, less rigor | ICE Scoring |
| Visual discussion with team | Value vs. Effort Matrix |
| Multiple criteria, need transparency | Weighted Scoring |
| Understanding feature importance | Kano Model |
| Simple categorization | MoSCoW |

---

## RICE Scoring

**R** – Reach: How many people will this impact per quarter?
**I** – Impact: How much will it impact them?
**C** – Confidence: How sure are we?
**E** – Effort: How much work is it?

### Scoring Guide

**Reach:**
- Estimate number of users/customers affected
- Be specific (not "many" but "2,000 users")
- Time-bound (per week, per quarter)

**Impact:**
- 3 = Massive impact
- 2 = High impact
- 1 = Medium impact
- 0.5 = Low impact
- 0.25 = Minimal impact

**Confidence:**
- 100% = High confidence (data-backed)
- 80% = Medium confidence (educated guess)
- 50% = Low confidence (speculation)

**Effort:** Person-weeks (include all roles: design, dev, QA)

### Formula

```
RICE = (Reach × Impact × Confidence) / Effort
```

### Example

| Feature | Reach | Impact | Confidence | Effort | RICE |
|---------|-------|--------|------------|--------|------|
| Feature A | 2000 | 2 | 80% | 4 | 800 |
| Feature B | 500 | 3 | 100% | 2 | 750 |
| Feature C | 5000 | 0.5 | 50% | 1 | 1250 |

### When to Use

- Comparing multiple options objectively
- Need to justify decisions to stakeholders
- Have reasonable data on reach and effort

---

## ICE Scoring

Simpler than RICE, good for quick decisions.

**I** – Impact: 1-10 scale
**C** – Confidence: 1-10 scale
**E** – Ease: 1-10 scale (inverse of effort)

### Formula

```
ICE = Impact × Confidence × Ease
```

### When to Use

- Quick prioritization needed
- Less data available
- Early-stage exploration

---

## Value vs. Effort Matrix

Visual 2x2 framework for team discussions.

### The Matrix

```
                    High Value
                        │
        Big Bets        │       Quick Wins
     (Plan carefully)   │       (Do first)
                        │
   ─────────────────────┼─────────────────────
                        │
        Money Pits      │       Fill-ins
       (Don't do)       │      (Do if time)
                        │
                    Low Value

        High Effort ←───┼───→ Low Effort
```

### Process

1. List all options
2. Score each on value (1-10)
3. Score each on effort (1-10)
4. Plot on matrix
5. Discuss and adjust positions
6. Prioritize by quadrant

### Quadrant Actions

- **Quick Wins:** Do these first
- **Big Bets:** Plan carefully, commit resources
- **Fill-ins:** Do if time permits
- **Money Pits:** Avoid unless strategy requires

---

## Weighted Scoring

Transparent scoring when multiple criteria matter.

### Process

1. Define criteria (e.g., impact, alignment, feasibility)
2. Assign weights to each criterion (must total 100%)
3. Score each option on each criterion (1-5 or 1-10)
4. Calculate weighted score
5. Rank by total score

### Example

| Option | Impact (40%) | Alignment (30%) | Feasibility (30%) | Total |
|--------|--------------|-----------------|-------------------|-------|
| A | 4 (1.6) | 5 (1.5) | 3 (0.9) | 4.0 |
| B | 5 (2.0) | 3 (0.9) | 4 (1.2) | 4.1 |
| C | 3 (1.2) | 4 (1.2) | 5 (1.5) | 3.9 |

### When to Use

- Need to explain decision rationale
- Multiple stakeholders with different priorities
- Complex trade-offs

---

## MoSCoW Method

Simple categorization for scope definition.

### Categories

**Must Have:**
- Critical, non-negotiable
- Without this, the release is not viable
- "The project fails without this"

**Should Have:**
- Important but not critical
- Can work around temporarily
- "Painful to leave out but not fatal"

**Could Have:**
- Nice to have
- Include if time/resources allow
- "Would like but okay without"

**Won't Have (this time):**
- Explicitly out of scope
- Maybe later, not now
- "Not doing this release"

### Process

1. List all items
2. Categorize each (get stakeholder input)
3. Validate: Are there too many Must Haves?
4. Set expectations: Won't Have means Won't Have

### When to Use

- Defining MVP scope
- Negotiating with stakeholders
- Managing expectations

---

## Kano Model

Understand how features affect satisfaction.

### Categories

**Must-Haves (Basic):**
- Expected functionality
- Absence = dissatisfaction
- Presence = neutral (not delight)
- Example: Login works, page loads fast enough

**Performance (Linear):**
- More is better
- Direct relationship with satisfaction
- Example: Speed, capacity, number of features

**Delighters (Attractive):**
- Unexpected positive
- Absence = neutral
- Presence = high satisfaction
- Example: Surprise features, exceptional UX

**Indifferent:**
- Users don't care either way
- Don't invest here

**Reverse:**
- Some users want, some don't
- Be careful — can't please everyone

### Kano Survey Method

For each feature, ask two questions:

1. "If this feature is present, how do you feel?"
2. "If this feature is absent, how do you feel?"

Options: Like, Expect, Neutral, Tolerate, Dislike

Map answers to categories using the Kano evaluation table.

### Application

1. Identify which category each feature falls into
2. Prioritize: Must-haves first, then Performance, then Delighters
3. Use Delighters strategically for differentiation
4. Don't waste time on Indifferent features

---

## Choosing the Right Framework

| Need | Recommended Framework |
|------|----------------------|
| Objective comparison with data | RICE |
| Quick gut-check | ICE |
| Team alignment and discussion | Value vs. Effort Matrix |
| Multiple criteria transparency | Weighted Scoring |
| Scope definition | MoSCoW |
| Understanding user expectations | Kano Model |

## Combining Frameworks

Frameworks can work together:

1. **MoSCoW** to define what's in scope
2. **RICE** to prioritize within Must Have
3. **Kano** to inform Impact scores
4. **Value vs. Effort** for team alignment check

---

## Common Prioritization Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| HiPPO (Highest Paid Person's Opinion) | Bias, not data-driven | Use framework, make scores visible |
| Everything is P1 | Nothing is prioritized | Force ranking, limit top tier |
| Analysis paralysis | Never decide | Timebox the process |
| Ignoring effort | Overpromise | Always factor in effort/cost |
| Not revisiting | Stale priorities | Regular reprioritization cadence |

---

## Used By Skills

This framework is referenced by:
- [Strategic Advisory](../_SKILLS/strategic-advisory/strategic-advisory-skill.md) — Roadmap prioritization
- [Project Management](../_SKILLS/project-management/project-management-skill.md) — Backlog prioritization
- [Research Synthesis](../_SKILLS/research-synthesis/research-synthesis-skill.md) — Prioritizing findings

---

## Related Frameworks

- [Decision Making Framework](decision-making.md) — Making the final call
- [Research Framework](research.md) — Gathering data for prioritization
