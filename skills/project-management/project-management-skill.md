---
name: project-management
description: Manage projects, track progress, and coordinate stakeholders. Use for project planning, status updates, risk management, timeline tracking, and stakeholder communication.
---

# Project Management

Project management is about turning plans into reality. It's the discipline of defining scope, tracking progress, managing risks, and keeping stakeholders aligned so work actually ships.

---

## Core Principles

1. **Clarity prevents chaos.** Ambiguous scope, unclear owners, vague timelines — these kill projects. Be explicit about everything.

2. **Track to unblock, not to micromanage.** The point of tracking isn't surveillance. It's surfacing blockers early so they can be resolved.

3. **Communication is the job.** Half of project management is keeping everyone informed. No surprises. Over-communicate.

4. **Scope is negotiable, quality isn't.** When timelines slip, reduce scope before reducing quality.

5. **Ship something small first.** Break big projects into smaller deliverables. Build momentum with early wins.

6. **Plans change — that's okay.** The initial plan is a starting point. Adapt as you learn. What matters is the outcome.

7. **Document decisions.** Why did we choose this? What did we deprioritize? Capture it or lose it.

### Industry Principles

8. **Define done.** What does complete look like? If you can't describe it, you'll never reach it.

9. **One owner per deliverable.** Shared ownership is no ownership. Someone owns each thing.

10. **Surface risks early.** A risk caught early is manageable. A risk caught late is a crisis.

11. **Build in buffer.** Things always take longer. Plan for it.

12. **Retrospect and improve.** After each project or phase, ask: What worked? What didn't? How do we get better?

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the project management-specific details for each step.

### 1. Clarify Before Starting

Before any project management work, understand:

- **What's the goal?** What does success look like?
- **What's the scope?** What's in and what's out?
- **Who's involved?** Stakeholders, team, decision-makers
- **What are the constraints?** Timeline, budget, resources
- **What are the dependencies?** What blocks what?
- **What are the risks?** What could go wrong?

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Business context, terminology
- `core/voice.md` — Tone, language rules
- Project scope and objectives (if defined)
- Stakeholder map and communication preferences

**Load when needed:**
- [Project Management Framework](../../frameworks/project-management.md) — RACI, Risk Matrix, Estimation
- Client context folder (their situation, team, constraints)

### 3. Choose the Right Approach

**By Project Type:**

| Type | Approach |
|------|----------|
| Fixed scope, clear timeline | Milestone-based planning |
| Evolving scope, iterative | Agile/Sprint approach |
| Client engagement | Milestone-based with check-ins |
| Internal initiative | Flexible, outcome-focused |

### 4. Project Kickoff

1. **Define objectives:** What are we trying to achieve?
2. **Scope the work:** What's included, what's not?
3. **Identify stakeholders:** Who needs to be involved?
4. **Create timeline:** Major milestones and deadlines
5. **Assign ownership:** Who owns each deliverable?
6. **Identify risks:** What could go wrong?
7. **Agree on communication:** How and when will we sync?

### 5. Ongoing Management

1. **Track progress:** Are we on track?
2. **Surface blockers:** What's stuck?
3. **Manage risks:** Are any materializing?
4. **Communicate status:** Keep stakeholders informed
5. **Adjust as needed:** Replan when necessary
6. **Document decisions:** Capture what changed and why

### 6. Project Closeout

1. **Confirm completion:** Is everything done?
2. **Deliver artifacts:** Hand off all deliverables
3. **Document learnings:** What worked, what didn't?
4. **Get feedback:** How did stakeholders experience it?
5. **Celebrate:** Acknowledge the work

---

## Key Activities

### Scope Definition

**Document:**
- **In scope:** Specific deliverables
- **Out of scope:** Explicit exclusions
- **Assumptions:** What we're assuming to be true
- **Dependencies:** External factors we rely on

### Timeline Planning

**Process:**
1. List all deliverables
2. Estimate effort for each
3. Identify dependencies
4. Sequence the work
5. Add buffer (15-25%)
6. Identify milestones
7. Work backwards from deadline if fixed

### Status Updates

**Structure:**
```
## Project Status: [Date]

### Overall: [Green/Yellow/Red]

### Summary
[2-3 sentences on where things stand]

### Completed
- [Item]

### In Progress
- [Item] — [Status]

### Blockers
- [Blocker] — [Owner] — [Resolution plan]

### Upcoming
- [Milestone] — [Date]

### Risks
- [Risk] — [Likelihood] — [Mitigation]
```

### Risk Management

**For each risk:**
1. Describe the risk
2. Assess probability (High/Medium/Low)
3. Assess impact (High/Medium/Low)
4. Define mitigation plan
5. Assign owner
6. Monitor regularly

### Stakeholder Communication

**Plan communication:**

| Audience | What | Frequency | Channel |
|----------|------|-----------|---------|
| Decision-maker | Status summary | Weekly | Email |
| Core team | Detailed status | Daily/weekly | Meeting |
| Broader stakeholders | Milestones | As reached | Newsletter |

### Client Communication

For client engagements, follow these communication patterns.

**Onboarding communication:**
- Welcome email within 24 hours of signed contract
- Kickoff recap within 24 hours of kickoff call
- Confirm scope, timeline, and communication rhythm

**Ongoing communication:**
- Weekly status updates (completed, in progress, blocked, next steps)
- Same-day response to async messages during business hours
- Proactive communication of blockers (don't wait to be asked)
- Share progress, not just problems

**Difficult conversations:**

| Situation | Approach |
|-----------|----------|
| **Scope creep** | "That's outside our current scope. I can add it via change order with cost/timeline impact." |
| **Delays (your side)** | Communicate immediately. Propose adjusted timeline. Don't hide it. |
| **Delays (their side)** | Document it. Note impact on timeline. Follow up, but don't nag. |
| **Client goes dark** | 7 days: formal check-in. 14 days: engagement paused. |
| **Quality disagreement** | Walk through your methodology. Stand by findings. Document. |

**What to never do:**
- Surprise the client with bad news at the last minute
- Go dark yourself when things get difficult
- Over-promise to avoid a hard conversation

---

## Sprint & Agile Facilitation

For iterative projects using Agile/Scrum methodology, these ceremonies and practices help teams maintain rhythm and continuous improvement.

### Sprint Cadence

| Ceremony | Purpose | Duration | Frequency |
|----------|---------|----------|-----------|
| **Sprint Planning** | Decide what to build | 1-2 hours | Start of sprint |
| **Daily Standup** | Sync and unblock | 15 min | Daily |
| **Sprint Review** | Demo what was built | 30-60 min | End of sprint |
| **Retrospective** | Improve how we work | 30-60 min | End of sprint |
| **Backlog Refinement** | Prepare future work | 1 hour | Mid-sprint |

### Sprint Planning

**Purpose:** Commit to what the team will deliver this sprint.

**Process:**
1. Review sprint goal (what outcome are we targeting?)
2. Review prioritized backlog
3. Team selects stories they can complete
4. Break down into tasks if needed
5. Confirm capacity and commitment

**Outputs:**
- Sprint goal (one sentence)
- Sprint backlog (committed stories)
- Initial task breakdown

**Facilitation tips:**
- Keep focus on "what" not "how" (implementation details come later)
- Don't over-commit — sustainable pace matters
- Ensure stories are well-defined before committing

### Daily Standup

**Purpose:** Sync the team, surface blockers, maintain momentum.

**Format (per person):**
1. What did I complete yesterday?
2. What will I work on today?
3. What's blocking me?

**Facilitation tips:**
- Keep it to 15 minutes max
- Standing helps keep it short
- Park detailed discussions for after
- Focus on blockers — resolve them same-day

**Anti-patterns to avoid:**
- Status reports to the manager (it's peer-to-peer)
- Problem-solving in standup (take it offline)
- Going long (timebox ruthlessly)

### Sprint Review (Demo)

**Purpose:** Show stakeholders what was built, get feedback.

**Process:**
1. Recap sprint goal
2. Demo completed work (working software, not slides)
3. Discuss what wasn't completed and why
4. Gather feedback
5. Update backlog based on feedback

**Facilitation tips:**
- Demo real working software
- Let team members demo their own work
- Invite stakeholders who can give meaningful feedback
- Keep it interactive, not a presentation

### Retrospective

**Purpose:** Continuous improvement — how do we work better?

**Classic format (Start/Stop/Continue):**
- **Start:** What should we begin doing?
- **Stop:** What should we stop doing?
- **Continue:** What's working that we should keep?

**Alternative formats:**
- **4Ls:** Liked, Learned, Lacked, Longed for
- **Sailboat:** Wind (helps), Anchor (slows), Rocks (risks)
- **Mad/Sad/Glad:** Emotional state about the sprint

**Process:**
1. Set the stage (safety check)
2. Gather data (what happened?)
3. Generate insights (why did it happen?)
4. Decide actions (what will we change?)
5. Close (how do we feel about this retro?)

**Facilitation tips:**
- Create psychological safety — no blame
- Focus on systems, not individuals
- Limit action items to 1-2 (actually do them)
- Vary the format to keep it fresh

### Backlog Refinement

**Purpose:** Prepare stories for future sprints so planning goes smoothly.

**Process:**
1. Review upcoming stories
2. Clarify requirements and acceptance criteria
3. Break down large stories
4. Estimate effort (story points, t-shirt sizes)
5. Identify dependencies and risks

**"Ready" criteria for stories:**
- [ ] Clear description of what and why
- [ ] Acceptance criteria defined
- [ ] Dependencies identified
- [ ] Estimated by team
- [ ] Small enough to complete in sprint

### Writing Good User Stories

**Format:**
```
As a [user type],
I want to [action],
So that [outcome/benefit].
```

**Acceptance criteria:**
```
Given [context],
When [action],
Then [expected result].
```

**INVEST criteria:**
- **I**ndependent — can be developed separately
- **N**egotiable — details can be discussed
- **V**aluable — delivers user/business value
- **E**stimable — team can estimate effort
- **S**mall — fits in a sprint
- **T**estable — clear definition of done

### Sprint Facilitation Principles

1. **Protect the team's focus.** Sprint commitment is a contract. Resist mid-sprint changes.
2. **Sustainable pace.** Sprints are marathons, not sprints (ironically). Don't burn out.
3. **Inspect and adapt.** Every retro should produce at least one improvement.
4. **Working software over documentation.** Demo real things, not presentations.
5. **Team autonomy.** The team decides how to do the work. Facilitate, don't dictate.

---

## Quality Checks

### Planning Quality

- [ ] Goals are clear and measurable?
- [ ] Scope is documented and agreed?
- [ ] Timeline is realistic with buffer?
- [ ] Owners assigned to all deliverables?
- [ ] Risks identified and mitigated?

### Execution Quality

- [ ] Progress is tracked and visible?
- [ ] Blockers are surfaced and resolved quickly?
- [ ] Stakeholders are informed regularly?
- [ ] Decisions are documented?
- [ ] Changes are communicated?

### Delivery Quality

- [ ] All deliverables complete?
- [ ] Quality standards met?
- [ ] Stakeholders satisfied?
- [ ] Learnings captured?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **No clear scope** | Scope creep, missed expectations | Document in/out of scope upfront |
| **Optimistic estimates** | Always late, lose trust | Add buffer, track actuals |
| **Skipping risk assessment** | Surprised by problems | Identify risks early |
| **Infrequent communication** | Stakeholders surprised | Over-communicate status |
| **Not tracking progress** | Discover problems too late | Regular check-ins and tracking |
| **No documentation** | Forget decisions and context | Document as you go |
| **Letting blockers linger** | Delays cascade | Escalate quickly |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Plan project timeline | Project Management | Strategic Advisory (tactical, not strategic) |
| Track deliverables | Project Management | Technical Documentation (tracking, not writing) |
| Communicate status | Project Management | Marketing (internal, not external) |
| Define product strategy | Strategic Advisory | Project Management (strategy, not execution) |
| Prioritize roadmap | Strategic Advisory | Project Management (strategic prioritization) |
| Facilitate decisions | Project Management or Strategic Advisory | Depends on scope |

---

## Output Expectations

**Project plan:** Clear scope, realistic timeline, identified risks, assigned owners

**Status update:** Honest assessment, clear blockers, actionable information

**Kickoff:** Aligned on scope, timeline, owners, and communication

**Closeout:** Deliverables complete, learnings captured, stakeholders satisfied

---

## When to Escalate

Flag for attention when:

- Blockers that can't be resolved at current level
- Risks that are materializing
- Scope changes that affect timeline or budget
- Stakeholder conflicts
- Resource constraints
- Quality concerns that might require scope adjustment
