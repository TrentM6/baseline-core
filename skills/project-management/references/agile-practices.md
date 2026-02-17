# Agile Practices

> Execution-level guidance for agile teams. Covers the mechanics of user stories, estimation, sprint health, and cross-team coordination.

**Part of:** [Project Management](../project-management-skill.md)

---

## User Story Writing

### INVEST Criteria

Every good user story is:

- **I**ndependent — Can be developed without depending on another story
- **N**egotiable — Details can be discussed, not a rigid contract
- **V**aluable — Delivers value to the user or business
- **E**stimable — Team can roughly size it
- **S**mall — Fits in a sprint (if not, split it)
- **T**estable — You can verify when it's done

### Story Format

```
As a [type of user],
I want [goal/action],
So that [benefit/value].
```

**Good example:**
```
As a hiring manager,
I want to filter candidates by experience level,
So that I can quickly find qualified applicants without scrolling through all submissions.
```

**Bad example:**
```
As a user, I want the system to be faster. (Not specific, not testable)
```

### Acceptance Criteria Patterns

**Given/When/Then (Behavior-Driven):**
```
Given I am on the candidate list page
When I select "5+ years experience" from the filter
Then only candidates with 5+ years are shown
And the result count updates
And I can clear the filter to show all candidates again
```

**Checklist style:**
```
- [ ] Filter dropdown appears on candidate list
- [ ] Options: All, 0-2 years, 2-5 years, 5+ years
- [ ] Results update without page reload
- [ ] Clear filter option resets to all
- [ ] Filter persists during the session
```

### Story Splitting Techniques

When a story is too big, split it by:

**1. Workflow steps:**
- "User can create a profile" → Split into: create, edit, delete, view

**2. Data variations:**
- "User can import data" → Split by: CSV import, JSON import, manual entry

**3. Business rules:**
- "User can check out" → Split into: credit card, PayPal, invoice

**4. Happy path vs. edge cases:**
- First story: happy path works
- Second story: error handling, validation, edge cases

**5. CRUD operations:**
- Create, Read, Update, Delete as separate stories

**6. Interface variations:**
- Desktop experience → Mobile experience

**Red flags a story needs splitting:**
- Estimated at 13+ points
- Has the word "and" in the title
- Acceptance criteria exceeds 8 items
- Multiple user types mentioned
- Can't demo it in under 2 minutes

---

## Estimation Techniques

### Story Points

**What they measure:** Relative effort (complexity + uncertainty + work), not time.

**Fibonacci scale:** 1, 2, 3, 5, 8, 13, 21

| Points | Meaning | Example |
|--------|---------|---------|
| 1 | Trivial | Copy change, config update |
| 2 | Simple | Standard CRUD, well-understood |
| 3 | Moderate | Some complexity, clear approach |
| 5 | Complex | Multiple components, some unknowns |
| 8 | Very complex | Significant unknowns, cross-cutting |
| 13 | Huge | Should probably be split |
| 21 | Epic | Definitely split this |

**Calibration:** Pick a well-understood story the team has completed. Call it a "3." Estimate everything relative to that.

### T-Shirt Sizing

Best for: Roadmap-level planning, early estimates, non-engineering teams.

| Size | Relative Effort | Rough Duration |
|------|----------------|----------------|
| XS | Trivial | Hours |
| S | Small | 1-2 days |
| M | Medium | 3-5 days |
| L | Large | 1-2 weeks |
| XL | Very large | 2-4 weeks (split it) |

### Planning Poker

**Process:**
1. Product owner reads the story
2. Team asks clarifying questions
3. Everyone privately selects an estimate
4. All reveal simultaneously
5. Highest and lowest explain their reasoning
6. Discuss until consensus (or take the average)

**Rules:**
- Timeboxed — 5 minutes max per story
- If no consensus after 2 rounds, take the higher estimate
- "?" card = "I don't understand this enough to estimate"
- "∞" card = "This is too big, split it"

### Three-Point Estimation

For items with high uncertainty:

**Expected = (Optimistic + 4 × Most Likely + Pessimistic) / 6**

Example:
- Optimistic: 3 days
- Most likely: 5 days
- Pessimistic: 14 days
- Expected: (3 + 20 + 14) / 6 = **6.2 days**

Use when: The stakes are high and you need to communicate risk to stakeholders.

---

## Backlog Grooming

### Prioritization in Practice

**Stack rank, don't categorize.** "High/Medium/Low" lets everything be "High." Force a strict order: #1 is the most important, #2 is next, and so on.

**Prioritization inputs:**
- Business value (revenue, retention, strategic alignment)
- User impact (how many users, how much pain)
- Effort (smaller effort = faster value)
- Dependencies (what unblocks other work)
- Risk (what happens if we don't do this)
- Learning value (what will we learn)

**When stakeholders disagree on priority:**
1. Make the tradeoff explicit: "If we do X first, Y waits until [date]. Are you okay with that?"
2. Use data if available (usage metrics, customer requests, revenue impact)
3. Escalate to the decision-maker identified in RACI
4. Document the decision and rationale

### Refinement Session Structure

**Frequency:** Weekly or bi-weekly, 60 minutes max
**Attendees:** Product owner, team leads, developers, designer

**Agenda:**
1. **Review upcoming priorities** (5 min) — What's next on the roadmap?
2. **Walk through stories** (40 min) — PO presents, team asks questions, estimates
3. **Identify unknowns** (10 min) — Spikes, research needed, dependencies
4. **Confirm sprint readiness** (5 min) — Are the top items ready to pull?

**Story readiness checklist:**
- [ ] Clear acceptance criteria
- [ ] Dependencies identified
- [ ] Design complete (if needed)
- [ ] Technical approach discussed
- [ ] Estimated by the team
- [ ] Small enough for one sprint

---

## Sprint Health Indicators

### Velocity Trends

**Healthy velocity:**
- Consistent within ±20% sprint-to-sprint
- Gradually increasing over months (team maturing)
- Dips after team changes (expected)

**Warning signs:**
- Velocity halved → Check for scope creep, team capacity, or unclear stories
- Velocity doubled → Stories may be getting smaller/easier or estimation is drifting
- Wild swings → Estimation inconsistency, need recalibration

**Never use velocity for:**
- Comparing teams
- Individual performance measurement
- Commitments to stakeholders (use it for forecasting, not promises)

### Burndown Patterns

**Healthy burndown:** Roughly diagonal from top-left to bottom-right. Some steps and plateaus are normal.

**Flat line early → Cliff at end:** Team isn't closing stories incrementally. Work is too big or DoD happens at the end.

**Scope increase mid-sprint:** Stories being added after planning. Sprint scope isn't being protected.

**Complete early:** Over-commitment buffer or stories estimated too high. Consider pulling stretch goals.

**Never reaches zero:** Consistently overcommitting. Reduce sprint scope by 15-20%.

### Other Health Signals

| Signal | Healthy | Unhealthy |
|--------|---------|-----------|
| Carryover stories | 0-1 per sprint | 3+ consistently |
| Sprint goal achieved | > 80% of sprints | < 60% |
| Escaped defects | Rare | Regular |
| Team morale (retro) | Constructive | Blame/frustration |
| Stakeholder surprises | None | Frequent |

---

## Standup Anti-Patterns and Fixes

### Common Anti-Patterns

**Status report to the manager:**
- Symptom: Everyone faces the PM/scrum master
- Fix: Team faces each other. Question is "what does the team need to know?"

**Mini-meetings breaking out:**
- Symptom: Two people deep-diving while others wait
- Fix: "Let's take that offline" → pair after standup

**No one mentions blockers:**
- Symptom: Issues surface days later
- Fix: Explicitly ask "Is anyone blocked or at risk of being blocked?"

**Going over 15 minutes:**
- Symptom: Discussions, problem-solving, tangents
- Fix: Use a timer. Each person gets 1-2 minutes. Details go to parking lot.

**"I did this, I'll do that":**
- Symptom: Rote recitation of tasks, no real communication
- Fix: Focus on progress toward sprint goal, not task lists

### Better Standup Format

Each person answers:
1. **What moved toward our sprint goal since yesterday?**
2. **What will I focus on next to advance the sprint goal?**
3. **Is anything blocking me or at risk?**

---

## Dependency Management

### Dependency Mapping

**Step 1: Identify dependencies during planning**
For each story/epic, ask:
- Does this need input from another team?
- Does this need an API, service, or system owned by others?
- Is there a hard deadline (regulatory, event, contract)?
- Does another team's work depend on this?

**Step 2: Classify dependencies**

| Type | Example | Risk Level |
|------|---------|-----------|
| Blocking | "Can't start until their API is ready" | High |
| Enabling | "Easier if we have their data model first" | Medium |
| Informational | "Need to know their approach" | Low |

**Step 3: Track and communicate**
- Add dependencies to your project board (linked items, tags, or dependency field)
- Establish a regular sync with dependent teams (weekly, 15 min)
- Escalate blocked dependencies immediately — don't wait for standup

### Cross-Team Coordination Patterns

**Scrum of Scrums:**
- Reps from each team meet 2-3x/week
- Focus: cross-team blockers and dependencies
- Keep it to 15 minutes

**Shared board or integration column:**
- Teams share a view of cross-team items
- Visible status updates without meetings

**Liaison model:**
- One person embedded or allocated to coordination
- Works when integration is complex and ongoing

---

## Escalation Paths

### When to Escalate

- A blocker has persisted for more than 2 business days
- A dependency team has missed their committed date
- Scope change will impact timeline by more than 20%
- A risk has materialized and the mitigation plan isn't working
- Team conflict is affecting delivery
- A stakeholder decision is overdue and blocking work

### How to Escalate

**1. Frame the problem clearly:**
"[What happened] is blocking [what impact]. We've tried [what we did]. We need [specific ask]."

**2. Propose options:**
Don't just bring problems. Bring 2-3 options with tradeoffs.

**3. Name the decision-maker:**
"We need [Name] to decide between [Option A] and [Option B] by [date]."

**4. Follow up in writing:**
After escalation, document the decision and communicate it to affected teams.

### Escalation Ladder

| Level | Who | When |
|-------|-----|------|
| 1 — Team | Scrum master, tech lead | First attempt, within the team |
| 2 — Management | Engineering manager, PM lead | Cross-team, unresolved after 2 days |
| 3 — Leadership | Director, VP | Strategic impact, budget, headcount |
| 4 — Executive | C-suite | Business-critical, contractual, legal |

**Rule:** Always escalate through your chain first. Don't skip levels unless it's genuinely urgent.
