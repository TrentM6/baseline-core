# Project Management Frameworks

> Universal frameworks for planning, tracking, and delivering projects. Works across any domain.

---

## When to Use Which Framework

| Situation | Framework |
|-----------|-----------|
| Clarifying accountability | RACI Matrix |
| Assessing project health | Status Levels |
| Identifying risks | Risk Matrix |
| Improving team process | Retrospective |
| Estimating work | Estimation Techniques |
| Structuring meetings | Meeting Frameworks |

---

## RACI Matrix

Clarify roles and responsibilities for each task or decision.

### The Roles

**R – Responsible:** Does the work
- Executes the task
- May be multiple people
- At least one per task

**A – Accountable:** Owns the outcome
- Final decision-maker
- Only one per task
- "The buck stops here"

**C – Consulted:** Provides input
- Two-way communication
- Opinion sought before action
- Subject matter experts

**I – Informed:** Kept in the loop
- One-way communication
- Notified of outcomes
- Doesn't participate in work

### Example RACI

| Task | Product Manager | Engineer | Designer | Exec |
|------|-----------------|----------|----------|------|
| Define requirements | A | C | C | I |
| Design solution | C | C | R, A | I |
| Build feature | C | R, A | C | I |
| Approve launch | A | C | C | I |

### Rules

- Every row must have exactly one A
- Every row must have at least one R
- Too many C's = slow decisions
- Too many I's = exclusion
- A and R can be same person

### When to Use

- Starting new projects
- Recurring confusion about who decides
- Cross-functional work
- Clarifying handoffs

---

## Status Levels

Standard way to communicate project health.

### The Levels

**Green (On Track):**
- Work progressing as planned
- No significant blockers
- Will meet timeline
- No escalation needed

**Yellow (At Risk):**
- Minor issues or delays
- Mitigation plans in place
- Timeline achievable but tight
- Watch closely

**Red (Off Track):**
- Significant issues
- Timeline at risk
- Needs escalation or replanning
- Action required

### What to Include in Status Updates

```
## Project Status: [Date]

### Overall: [Green/Yellow/Red]

### Summary
[2-3 sentences on where things stand]

### Completed
- [Item 1]
- [Item 2]

### In Progress
- [Item 1] — [% complete or key milestone]
- [Item 2] — [% complete or key milestone]

### Blockers
- [Blocker] — [Owner] — [Resolution plan]

### Risks
- [Risk] — [Likelihood] — [Mitigation]

### Upcoming
- [Milestone] — [Date]

### Needs from Stakeholders
- [Request]
```

### Status Meeting Cadence

| Project Type | Frequency | Format |
|--------------|-----------|--------|
| Active sprint | Daily standup | 15 min sync |
| Ongoing project | Weekly | 30 min meeting |
| Strategic initiative | Biweekly | Email + meeting if needed |
| Maintenance | Monthly | Email summary |

---

## Risk Matrix

Assess and prioritize project risks.

### Risk Assessment

**Probability:** How likely is this to happen?
- High: >70%
- Medium: 30-70%
- Low: <30%

**Impact:** How bad would it be?
- High: Project failure or major delay
- Medium: Significant impact but recoverable
- Low: Minor inconvenience

### The Matrix

|  | Low Impact | Medium Impact | High Impact |
|--|------------|---------------|-------------|
| **High Probability** | Medium | High | Critical |
| **Medium Probability** | Low | Medium | High |
| **Low Probability** | Low | Low | Medium |

### Risk Response Strategies

**Avoid:** Eliminate the risk entirely
- Change scope or approach
- Remove the risky element

**Mitigate:** Reduce probability or impact
- Add safeguards
- Create contingency plans
- Build in buffer

**Transfer:** Shift risk to another party
- Insurance
- Contracts
- Outsourcing

**Accept:** Acknowledge and monitor
- Risk is low or cost of mitigation too high
- Have contingency ready
- Track actively

### Risk Register Template

| Risk | Probability | Impact | Score | Response | Owner | Status |
|------|-------------|--------|-------|----------|-------|--------|
| [Description] | H/M/L | H/M/L | H/M/L | [Strategy] | [Name] | [Open/Mitigated] |

---

## Retrospective Formats

Team reflection to improve process.

### Basic Format

**What went well?**
- Celebrate successes
- Identify what to continue

**What didn't go well?**
- Surface problems
- No blame, focus on process

**What will we change?**
- Specific actions
- Assign owners
- Limit to 2-3 changes

### Start/Stop/Continue

**Start:** Things we should begin doing
**Stop:** Things we should stop doing
**Continue:** Things working well, keep doing

### 4 L's

**Liked:** What did we enjoy?
**Learned:** What did we learn?
**Lacked:** What was missing?
**Longed for:** What do we wish we had?

### Sailboat Retrospective

Visual metaphor:
- **Wind (helps):** What pushed us forward?
- **Anchor (hinders):** What held us back?
- **Rocks (risks):** What could sink us?
- **Island (goal):** Where are we heading?

### Retrospective Best Practices

- Timebox strictly (60 min typical)
- Everyone participates
- Document actions with owners
- Follow up on previous action items
- Create psychological safety
- Focus on process, not people

---

## Estimation Techniques

Estimate effort and duration more accurately.

### T-Shirt Sizing

Quick relative sizing without false precision.

| Size | Meaning |
|------|---------|
| XS | Hours of work |
| S | Day or two |
| M | Several days |
| L | Week or more |
| XL | Multiple weeks, should break down |

**When to use:** Early planning, rough scoping

### Story Points

Relative effort measure (not time).

**Fibonacci sequence:** 1, 2, 3, 5, 8, 13, 21

- 1 = Trivial
- 2-3 = Small
- 5 = Medium
- 8 = Large
- 13+ = Break it down

**When to use:** Sprint planning, agile teams

### Three-Point Estimation

Account for uncertainty with ranges.

**O** = Optimistic (best case)
**M** = Most likely (realistic)
**P** = Pessimistic (worst case)

**PERT estimate:** (O + 4M + P) / 6

**Example:**
- Optimistic: 3 days
- Most likely: 5 days
- Pessimistic: 12 days
- PERT: (3 + 20 + 12) / 6 = 5.8 days

### Estimation Tips

- Break large tasks into smaller pieces
- Use historical data when available
- Account for context switching
- Include review and revision time
- Add buffer (15-25%)
- Track actuals vs. estimates to improve

### Common Estimation Mistakes

| Mistake | Fix |
|---------|-----|
| Estimating in "perfect days" | Account for meetings, interruptions |
| Optimism bias | Use three-point or add buffer |
| Ignoring dependencies | Map dependencies before estimating |
| Not breaking down large items | Nothing bigger than 1-2 weeks |
| Forgetting non-dev work | Include design, QA, documentation |

---

## Meeting Frameworks

Structure meetings for effectiveness.

### Standup / Daily Sync

**Purpose:** Surface blockers, coordinate work
**Duration:** 15 minutes max
**Frequency:** Daily

**Each person answers:**
1. What did I complete?
2. What am I working on?
3. What's blocking me?

**Rules:**
- Stand up (keeps it short)
- Same time daily
- Surface blockers, don't solve them
- Take discussions offline

### Kickoff Meeting

**Purpose:** Align on goals, scope, approach
**Duration:** 60-90 minutes
**Frequency:** Project start

**Agenda:**
1. Context and background (10 min)
2. Goals and success criteria (15 min)
3. Scope: in and out (15 min)
4. Roles and responsibilities (10 min)
5. Timeline and milestones (15 min)
6. Risks and concerns (10 min)
7. Questions and next steps (15 min)

### Decision Meeting

**Purpose:** Make a specific decision
**Duration:** 30-60 minutes

**Structure:**
1. State the decision to be made (5 min)
2. Present options with pros/cons (15 min)
3. Discussion (15 min)
4. Decision (5 min)
5. Document and next steps (5 min)

**Requirements:**
- Decision-maker present
- Pre-work distributed in advance
- Leave with clear decision

### Meeting Best Practices

**Before:**
- Clear agenda distributed in advance
- Right people invited (not too many)
- Pre-work completed

**During:**
- Start and end on time
- Follow agenda
- Capture action items with owners
- Parking lot for tangents

**After:**
- Notes distributed within 24 hours
- Action items tracked
- Follow-up scheduled if needed

---

## Definition of Done

Clear criteria for when work is complete.

### Example: Feature Complete

- [ ] Code written and reviewed
- [ ] Tests passing (unit, integration)
- [ ] Documentation updated
- [ ] Accessibility verified
- [ ] Deployed to staging
- [ ] QA approved
- [ ] Product owner approved
- [ ] Ready for production

### Example: Design Complete

- [ ] All states designed (default, loading, error, empty, success)
- [ ] Responsive variations complete
- [ ] Accessibility reviewed
- [ ] Design system compliance checked
- [ ] Handoff materials ready
- [ ] Developer questions answered

### Why Definition of Done Matters

- Prevents scope creep within tasks
- Sets clear expectations
- Avoids "almost done" syndrome
- Enables accurate status reporting
- Creates shared understanding

---

## Scope Management

Control what's in and out of the project.

### Scope Statement Template

```
## Scope

### In Scope
- [Deliverable 1]
- [Deliverable 2]
- [Deliverable 3]

### Out of Scope
- [Exclusion 1]
- [Exclusion 2]

### Assumptions
- [Assumption 1]
- [Assumption 2]

### Dependencies
- [Dependency 1]
- [Dependency 2]

### Constraints
- [Constraint 1]
- [Constraint 2]
```

### Managing Scope Creep

**Prevention:**
- Clear scope document upfront
- Explicit out-of-scope list
- Change request process

**When new requests come:**
1. Document the request
2. Assess impact on timeline/budget
3. Decide: Add to scope (with trade-off) or defer
4. Communicate decision

**Trade-off options:**
- Add time
- Add resources
- Remove something else
- Defer to next phase

---

## Used By Skills

This framework is referenced by:
- [Project Management](../skills/project-management/project-management-skill.md) — Primary project management skill
- [Strategic Advisory](../skills/strategic-advisory/strategic-advisory-skill.md) — Project planning context
- [Skill Building](../skills/skill-building/skill-building-skill.md) — Delivery process management

---

## Related Frameworks

- [Prioritization Framework](prioritization.md) — Prioritizing project work
- [Decision Making Framework](decision-making.md) — Project decisions
