# Session Planning

> Break multi-session work into a concrete project plan so continuity survives across Claude Code sessions.

Not every task needs this. Most skill invocations are single-session: one deliverable, one skill, done. But when work is larger — multiple deliverables, sequential dependencies, multi-skill coordination — session planning prevents the two failure modes: cramming too much into one session (quality degrades) or splitting without a plan (continuity breaks).

---

## When to Use

**Trigger session planning when ANY of these are true:**

- Task requires multiple distinct deliverables, each needing its own skill invocation
- Task involves sequential dependencies (output of one skill feeds into another)
- Work exceeds what can be completed in a single focused session
- User explicitly requests a multi-session plan or project plan

**Do NOT use when:**

- Single deliverable, single skill invocation
- Quick iteration on existing work
- Co-founder mode (brainstorming, not executing)

**When in doubt:** If the Plan step (Step 0) reveals more than one major deliverable, trigger session planning.

---

## The Framework

### Step 1: Scope the Project

Before breaking into sessions, define the full picture:

- **Deliverables** — What are all the concrete outputs?
- **Skills needed** — Which skills will be invoked?
- **Dependencies** — Which deliverables depend on which?
- **Shared context** — What client context applies across all sessions?

### Step 2: Map Dependencies

Determine sequencing:

- **Independent deliverables** can be done in any session order
- **Dependent deliverables** must follow their prerequisite (e.g., research synthesis must precede PRD)

Keep it simple — a list of "X must come before Y" is sufficient. Don't over-formalize.

### Step 3: Group Into Sessions

Each session should:

- Produce **one major deliverable** (matches the "one major task per session" principle)
- Be **self-contained** — has a clear objective and definition of done
- Be **sequenced** so dependencies are satisfied

### Step 4: Define Each Session

For every session in the plan, specify:

| Field | Purpose |
|-------|---------|
| **Session number & name** | e.g., "Session 1: Research Synthesis" |
| **Objective** | One sentence — what this session accomplishes |
| **Skill** | Which skill to invoke |
| **Context to load** | Exact file paths — eliminates guesswork in a fresh session |
| **Inputs** | What this session needs from prior sessions (file paths or descriptions) |
| **Deliverable** | The concrete output this session produces |
| **Definition of done** | How to know the session is complete |
| **Handoff notes** | Filled in AFTER the session — decisions made, open questions, context for next session |

### Step 5: Generate the Project Plan

Output the plan as a standalone markdown file using the template below. The user saves this file and brings it into each new session.

---

## Session Sizing

One session = one major deliverable. Use this as a rough guide:

| Session Type | Typical Scope | Example |
|--------------|--------------|---------|
| Research / Discovery | One research report or synthesis | User interview synthesis |
| Document Creation | One major document | PRD, strategy doc, spec |
| Design | One design artifact or flow | Wireframes for checkout flow |
| Content | 2–4 related content pieces | LinkedIn series, one campaign |
| Planning | One plan or roadmap | Sprint plan, product roadmap |

**Rule of thumb:** If you'd tell someone "that's enough for today," it's one session.

---

## The Output: Project Plan Template

Generate this as a standalone markdown file. It must work without any prior context — a fresh session should understand the plan from this document alone.

```markdown
# Project Plan: [Project Name]

> Generated: [Date] | Client: [Client Name] | Status: In Progress

---

## Project Overview

**Objective:** [One sentence — what this project accomplishes]

**Total Sessions:** [N]
**Skills Used:** [List of skills involved]
**Client Context:** `_CONTEXT/[client-name]/`

### Deliverables
1. [Deliverable 1] — Session [N]
2. [Deliverable 2] — Session [N]
3. [Deliverable 3] — Session [N]

---

## Progress

| Session | Status | Deliverable |
|---------|--------|-------------|
| 1. [Name] | [ ] Not Started | [Deliverable] |
| 2. [Name] | [ ] Not Started | [Deliverable] |
| 3. [Name] | [ ] Not Started | [Deliverable] |

**Next Session:** Session 1: [Name]

---

## Session Details

### Session 1: [Name]
**Status:** Not Started
**Skill:** [skill-name]
**Objective:** [What this session accomplishes]

**Context to Load:**
- `_CONTEXT/[client]/core/identity.md`
- `_CONTEXT/[client]/core/voice.md`
- `_CONTEXT/[client]/extended/[relevant].md`

**Inputs:** None (first session)

**Deliverable:** [Concrete output — e.g., "Research synthesis saved to [path]"]

**Definition of Done:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

**Handoff Notes:** _To be filled after session completes._

---

### Session 2: [Name]
**Status:** Not Started
**Skill:** [skill-name]
**Objective:** [What this session accomplishes]

**Context to Load:**
- `_CONTEXT/[client]/core/identity.md`
- `_CONTEXT/[client]/core/voice.md`
- `_CONTEXT/[client]/extended/[relevant].md`

**Inputs:** [File paths or descriptions from Session 1]

**Deliverable:** [Concrete output]

**Definition of Done:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

**Handoff Notes:** _To be filled after session completes._

---

## Decisions & Changes Log

| Date | Decision | Impact |
|------|----------|--------|
| | | |

---

## How to Use This Plan

1. Open a new Claude Code session
2. Share this file at the start of the session
3. Say: "Continue with Session [N] from this project plan"
4. After the session, update the Status, check off Definition of Done items, and fill in Handoff Notes
5. Start a new session for the next session in the plan
```

---

## Adaptation

Plans change as you learn. Handle changes cleanly:

| Change | How to Handle |
|--------|---------------|
| **Scope addition** | Add new sessions to the plan. Update the Progress table. Log in Decisions & Changes. |
| **Scope removal** | Mark the session as "Skipped" (don't delete — preserve history). Log the reason. |
| **Reordering** | Update session numbers if dependencies allow. Note why in the log. |
| **Major pivot** | Consider generating a new project plan. The old plan becomes a learning artifact. |

---

## Common Pitfalls

| Pitfall | Problem | Instead |
|---------|---------|---------|
| Over-planning | Too many sessions with tiny deliverables | Each session should produce meaningful output |
| Under-planning | Sessions too large to complete | One major deliverable per session maximum |
| Missing handoff notes | Next session lacks context on decisions | Always fill in handoff notes before closing a session |
| Rigid plans | Refusing to adapt when new information emerges | Update the plan, log the change, move forward |
| Context overload | Listing every context file for every session | Only list context files the specific skill needs |
| Skipping the plan | Jumping into multi-session work without planning | Generate the plan first — it takes minutes and saves hours |

---

## This vs. Project Management

Session planning and the Project Management skill operate at different levels:

- **Session planning** = How to break work across Claude Code sessions. It's about AI conversation-level decomposition and continuity.
- **Project Management skill** = How to manage a human team project. Sprints, RACI, stakeholder communication, risk registers.

They can work together: use the Project Management skill to plan the overall project, then use session planning to break the execution into Claude Code sessions.

---

## Related Frameworks

- [Workflow Orchestration](workflow-orchestration.md) — The meta-workflow that triggers session planning in Step 0
- [Project Management](project-management.md) — Team-level project planning and tracking
