# Workflow Orchestration

> The universal pattern for how all skills work. Load this once, apply it everywhere.

All Baseline System skills follow this workflow pattern. Skills contain domain-specific expertise. This document contains the meta-workflow — how to think about executing any skill effectively.

---

## System Principles

These principles apply to all work, regardless of which skill you're using.

### 1. Simplicity First

Make every solution as simple as possible. Before accepting an approach, ask: "Is there a simpler way that solves the same problem?"

- Simple solutions are easier to maintain, explain, and extend
- Complexity should be justified, not defaulted to
- If you can cut it, cut it

### 2. Root Cause Focus

Understand deeply before solving. Don't fix symptoms — find and address the underlying cause.

- Ask "why" until you reach the real problem
- Challenge assumptions about what the problem actually is
- A correct diagnosis matters more than a fast solution

### 3. Demand Elegance

For non-trivial work, pause and ask: "Is there a more elegant way?" Challenge hacky solutions.

- If a solution feels forced, explore alternatives
- The right framing often makes the solution obvious
- Don't accept the first approach without considering others

### 4. Verification Before Done

Never mark work complete without proving it works. "I think it's done" is not done.

- Test your output against quality checks
- Demonstrate correctness, don't just assert it
- If you can't verify it, it's not finished

---

## The 5-Step Workflow Pattern

Every skill implements this pattern. The steps are the same; only the domain-specific content changes.

### Step 0: Plan Before Executing

**Purpose:** Align on approach before doing any work.

**This step is mandatory for every skill invocation.** Before executing any skill, present a plan to the user for approval:

1. State your understanding of the task
2. Outline the approach you intend to take
3. Identify what context you'll need to load
4. Note any open questions or decisions
5. Wait for explicit user approval before proceeding

**Why this is non-negotiable:** Planning prevents wasted effort. It's faster to course-correct a plan than to rebuild finished work. If the user and AI aren't aligned on approach before execution begins, the output will miss — and recovery costs more than planning.

**If using a tool with plan mode** (e.g., Claude Code), enter plan mode. If the tool doesn't have a formal plan mode, present the plan in conversation and wait for approval before proceeding.

**Multi-session check:** If the task requires multiple distinct deliverables each needing their own skill invocation, involves sequential skill dependencies, or exceeds what can be completed in a single focused session — load `frameworks/session-planning.md` and generate a project plan before proceeding. For single-session tasks, proceed normally.

### Step 1: Clarify Before Starting

**Purpose:** Gather essential information before proceeding.

Before doing any work, ensure you have clear answers to the clarifying questions defined by your skill. These questions are domain-specific, but the approach is universal:

- If any answers are missing or ambiguous, ask directly
- Do not assume or proceed with incomplete information
- An expert gathers what they need to do excellent work

### Step 2: Load Relevant Context

**Purpose:** Ground your work in organizational knowledge.

Before starting, load the context files specified by your skill:

**Core context (always load):**
- `context/[folder]/core/identity.md` — Product/company knowledge, terminology
- `context/[folder]/core/voice.md` — Tone, language rules, writing style

**Extended context:** Load skill-specific files as directed (users, product, technical, competitive, icp, pricing, formatting, visual-identity)

**References and frameworks:** Load as needed for specific tasks

**Location:** Use `context/baseline/` for Baseline work, or `context/[client-name]/` for client work.

### Step 3: Execute Domain-Specific Work

**Purpose:** Do the actual work using the skill's methodology.

This step is entirely domain-specific. Your skill defines:
- What approaches are available
- When to use each approach
- How to execute the chosen approach
- What deliverables to create

Follow the skill's guidance for this step.

### Step 4: Quality Checks

**Purpose:** Validate that work meets standards before considering it done.

Quality checks follow this format across all skills:
- Organized by category (what quality dimensions matter in this domain)
- Phrased as assertions to verify (not vague questions)
- Use checkbox format `- [ ]` for easy tracking
- Binary pass/fail — if it doesn't pass, it's not done

**After running quality checks:**
- If all pass → work is ready for delivery
- If any fail → apply error recovery (see below)

---

## Error Recovery

When quality checks fail or work isn't meeting standards, follow this pattern:

### 1. Identify the Failure

What specifically isn't working? Name the gap between current output and expected quality.

### 2. Diagnose the Cause

Why did this fail? Common causes:
- **Unclear requirements** → Go back to Clarify, ask more questions
- **Missing context** → Load additional context files
- **Wrong approach** → Revisit the skill's methodology, try a different path
- **Insufficient depth** → Load reference files for more detail
- **Scope creep** → Redefine boundaries, split into smaller pieces

### 3. Apply Recovery

| Failure Type | Recovery Action |
|--------------|-----------------|
| Output is unclear | Restructure — lead with the main point, cut unnecessary content |
| Output is incomplete | Identify gaps, add missing elements, verify against scope |
| Output doesn't match voice/tone | Reload voice.md, revise with specific attention to guidelines |
| Output has wrong level of detail | Adjust for audience — more technical or more summary |
| Approach isn't working | Try alternative method from the skill's options |
| Requirements are conflicting | Escalate — surface the conflict to the user |

### 4. Re-run Quality Checks

After applying recovery, run quality checks again. Repeat until all pass or escalate if stuck.

### 5. Escalate When Needed

If recovery attempts don't resolve the issue, escalate. Don't spin endlessly. Flag when:
- Multiple recovery attempts haven't worked
- Requirements are unclear or conflicting
- The issue is outside your domain expertise
- Stakes are high and confidence is low

---

## Parallel Execution

For complex work with multiple independent components, use parallel execution to work efficiently.

### When to Parallelize

- Task has multiple independent sub-tasks
- Sub-tasks don't depend on each other's output
- Time is a constraint

### How to Parallelize

1. **Identify parallel streams** — What can be done independently?
2. **Define dependencies** — What must complete before what?
3. **Sequence appropriately:**
   - Independent tasks → run in parallel
   - Dependent tasks → run sequentially
4. **Synthesize at the end** — Combine outputs, resolve conflicts

### Example

For a product launch:
- **Parallel:** Write docs, prepare product marketing, update help center
- **Sequential:** Finalize feature → then write docs about it
- **Synthesis:** Review all materials together for consistency

---

## Capture Learnings

After completing work, especially when corrections were needed, capture what you learned.

### When to Capture

- Quality checks failed and you had to recover
- User provided corrections or feedback
- You discovered something unexpected about the domain
- A pattern emerged that could help future work

### What to Capture

| Question | Purpose |
|----------|---------|
| What was the goal? | Context for the learning |
| What happened? | What went wrong or was unexpected |
| What did you learn? | The insight or pattern |
| What would you do differently? | Actionable change for next time |

### Where to Capture

Learnings should inform:
- Future applications of this skill
- Updates to context files if business knowledge changed
- Potential updates to the skill itself (flag for skill owner)

---

## Universal Escalation Principles

These apply across all skills. Domain-specific escalation triggers are in each skill.

**Escalate when:**

1. **Uncertainty is high but stakes are high** — Don't guess on important decisions
2. **Domain expertise conflicts with business needs** — Surface the tension
3. **Departing from established patterns** — Get approval before breaking conventions
4. **Results suggest significant change** — Major pivots need human review
5. **Information gaps prevent confident work** — Ask rather than assume
6. **Recovery attempts aren't working** — Don't spin endlessly

**How to escalate:**
- State what you're stuck on
- Explain what you've tried
- Offer options if you have them
- Ask a specific question

---

## Anti-Patterns (Universal)

These failures apply across all skills:

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Skipping plan mode** | Misaligned approach, wasted effort, rebuilds | Always plan and get approval before executing |
| **Proceeding without clarity** | Assumptions lead to rework | Ask clarifying questions first |
| **Skipping context loading** | Output misses voice, terminology, positioning | Always load relevant context |
| **Accepting first solution** | Miss simpler or better approaches | Consider alternatives, demand elegance |
| **Ignoring quality checks** | Ship subpar work | Run every check, every time |
| **Spinning without escalating** | Waste time on unsolvable problems | Escalate after 2-3 recovery attempts |
| **Not capturing learnings** | Repeat the same mistakes | Document what you learn |
| **Overloading a session** | Context degrades, output quality drops silently | One major task per session, start fresh after milestones |

---

## Session Management

Context quality degrades before it runs out. Long, dense conversations lead to less precise output, forgotten decisions, and repeated mistakes — often without obvious warning. Manage sessions proactively.

### At the Start of Every Session

Remind the user:

> **For best results, scope each session to one major task.** Multi-task sessions or extended iteration cycles degrade output quality. If you have multiple tasks, complete one and start a fresh session for the next.

### During a Session

After completing a major milestone (e.g., a full deliverable, a significant iteration cycle, or a pivot in direction), recommend starting a fresh session:

> **This is a good point to start a new session** if you have additional tasks. We've covered a lot of ground, and a fresh context will give you better results for the next piece of work.

### Signs to Watch For

If any of the following occur, proactively suggest a session break:

- The conversation has gone through 3+ major revision cycles on the same deliverable
- The user has pivoted direction significantly (the original plan no longer applies)
- Multiple complex tasks have been completed in the same session
- Output quality appears to be declining (repetition, inconsistency, losing track of earlier decisions)

**Don't push through it — start fresh.** A new session with clear context will outperform a fatigued session every time.

### For Multi-Session Work

When work spans multiple sessions, use the [Session Planning Framework](session-planning.md) to generate a project plan. This creates a standalone document the user brings into each new session for continuity. See the framework for trigger criteria and the project plan template.

---

## Applying This Pattern

When using any skill:

1. **Read this document once** to understand the meta-workflow
2. **Load the skill** for domain-specific guidance
3. **Follow the 5-step pattern** (Plan → Clarify → Context → Execute → Quality Check)
4. **Use error recovery** when quality checks fail
5. **Escalate** when stuck
6. **Capture learnings** when you discover something useful
7. **Manage sessions** — one major task per session, start fresh after milestones

The skill teaches you WHAT to do in this domain. This document teaches you HOW to work effectively regardless of domain.

