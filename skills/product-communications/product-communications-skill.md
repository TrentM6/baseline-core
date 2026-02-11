---
name: product-communications
description: Create internal product documents that align teams and drive decisions. Use for PRDs, product briefs, feature specs, stakeholder updates, launch communications, and engineering handoffs.
---

# Product Communications

Product communications is the discipline of writing documents that move work forward. PRDs, specs, briefs, and updates that align teams, capture decisions, and enable execution. Good product docs reduce meetings, prevent misalignment, and create shared understanding.

---

## Core Principles

1. **Write to decide, not to document.** The best product docs force clarity and drive decisions. If a doc doesn't change anyone's thinking or behavior, it's not worth writing.

2. **Audience determines format.** Engineers need different detail than executives. A launch brief is not a PRD. Match the document to who's reading it and what they need.

3. **Start with the why.** Every doc should answer "why are we doing this?" before "what are we doing?" Context enables good judgment downstream.

4. **Explicit over implicit.** Assumptions, trade-offs, and out-of-scope items belong in the doc. What's not written will be assumed differently by everyone.

5. **Living documents, not artifacts.** Good docs evolve. Date your updates, note what changed, keep it current. Stale docs are worse than no docs.

6. **Brevity is respect.** People are busy. Say what needs to be said in as few words as possible. If you can cut a section, cut it.

7. **Visuals when they help.** A diagram can replace paragraphs. Use wireframes, flows, and tables when they communicate faster than prose.

### Industry Principles

8. **Separate problem from solution.** The "why" and "what problem" should be solid before the "how." Don't let solution details obscure the problem being solved.

9. **Success criteria are non-negotiable.** Every feature needs a definition of success. "How will we know this worked?" must be answered.

10. **Edge cases belong somewhere.** Not every edge case goes in the main doc. But they need to be captured — in appendix, comments, or linked docs.

11. **Async-first.** Write docs that work without you in the room. If it requires your live explanation, it's not done.

12. **Decisions over discussions.** Docs should capture decisions made, not just discussions had. "We decided X because Y" is more useful than meeting notes.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the product communications-specific details for each step.

### 1. Clarify Before Starting

Before writing any product document, answer:

- **What type of document?** PRD, brief, spec, update, announcement?
- **Who is the audience?** Engineering, leadership, cross-functional, external?
- **What decision does this enable?** Build/don't build, prioritization, alignment?
- **What do they already know?** Context level, past discussions, existing docs?
- **What's the timeline?** When do readers need to act on this?
- **What format do they expect?** Template, freeform, presentation?

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Product terminology, positioning
- `core/voice.md` — Tone, writing style

**Extended context (load when needed):**
- `extended/formatting.md` — Document structure conventions
- Existing product docs (for consistency)
- Research or data informing the doc

**Load when needed:**
- [Document Templates](references/document-templates.md) — PRD, brief, spec templates
- [Strategic Advisory Skill](../strategic-advisory/strategic-advisory-skill.md) — For strategy framing
- [Research & Synthesis Skill](../research-synthesis/research-synthesis-skill.md) — For research-backed context

### 3. Choose the Right Document Type

| Document | Purpose | Audience | When |
|----------|---------|----------|------|
| **Product Brief** | Align on opportunity and direction | Leadership, cross-functional | Before deep work |
| **PRD** | Define what to build and why | Engineering, design, QA | Before build |
| **Feature Spec** | Technical detail for implementation | Engineering | During build |
| **Stakeholder Update** | Communicate progress and decisions | Leadership, stakeholders | Ongoing |
| **Launch Brief** | Coordinate go-to-market | Cross-functional | Pre-launch |
| **Decision Doc** | Capture and communicate a decision | Anyone affected | When decided |

### 4. Writing Process

**Structure First:**
1. Choose the right document type
2. Outline sections before writing
3. Identify what's known vs. needs research
4. Get structure reviewed before drafting (for major docs)

**Draft:**
1. Start with context and problem (the "why")
2. Write the core content
3. Add supporting detail
4. Include explicit trade-offs and out-of-scope

**Review:**
1. Read as if you have no context — does it stand alone?
2. Cut ruthlessly — can any section be shorter?
3. Check for ambiguity — could this be misread?
4. Verify accuracy — are facts and figures correct?

**Finalize:**
1. Add version/date
2. Note open questions or pending decisions
3. Specify next steps and owners
4. Share and solicit feedback

---

## Document Types

### Product Brief

**Purpose:** Align leadership and cross-functional teams on an opportunity before investing in detailed work.

**When to use:** New initiative, significant feature, strategic decision

**Structure:**
```
## Product Brief: [Feature/Initiative Name]

### Summary
[2-3 sentences: what is this, why does it matter]

### Problem
[What user/business problem are we solving?]
[Evidence: research, data, customer feedback]

### Opportunity
[Why is this worth doing now?]
[Market context, competitive landscape, strategic fit]

### Proposed Direction
[High-level approach, not detailed solution]
[Key assumptions]

### Success Criteria
[How will we know this worked?]
[Metrics, qualitative signals]

### Risks & Open Questions
[What could go wrong?]
[What do we still need to figure out?]

### Ask
[What decision or resources are you requesting?]

### Timeline
[Rough phases, not detailed schedule]
```

**Length:** 1-2 pages

### PRD (Product Requirements Document)

**Purpose:** Define what to build, why, and how we'll know it's successful. The contract between product, design, and engineering.

**When to use:** Before engineering begins building

**Structure:**
```
## PRD: [Feature Name]

### Overview
[What is this feature? 2-3 sentences]

### Problem Statement
[What problem does this solve? For whom?]
[Evidence supporting this problem exists]

### Goals & Success Metrics
[What does success look like?]
[Specific, measurable outcomes]

### User Stories / Jobs to Be Done
[Who is doing what, and why?]
- As a [user], I want to [action] so that [outcome]

### Scope
**In Scope:**
- [Feature/capability]

**Out of Scope:**
- [Explicitly excluded items]

### Requirements
**Functional Requirements:**
- [What the system must do]

**Non-Functional Requirements:**
- [Performance, security, accessibility, etc.]

### Design
[Link to designs/wireframes]
[Key interaction notes]

### Technical Considerations
[Known constraints, dependencies, integrations]
[Engineering input captured here]

### Edge Cases & Error States
[What happens when things go wrong?]

### Launch Plan
[Rollout strategy: beta, phased, full?]
[Dependencies on other teams]

### Open Questions
[Unresolved items with owners and due dates]

### Appendix
[Supporting research, data, competitive analysis]
```

**Length:** 3-8 pages depending on complexity

### Feature Spec

**Purpose:** Detailed technical specification for engineering implementation.

**When to use:** For complex features requiring detailed technical definition

**Structure:**
```
## Feature Spec: [Feature Name]

### Context
[Link to PRD]
[Brief problem recap]

### Technical Requirements

**Data Model:**
[Entities, relationships, schema changes]

**API:**
[Endpoints, request/response formats]

**Business Logic:**
[Rules, calculations, workflows]

**UI Components:**
[Screens, states, interactions]

### Edge Cases
[Detailed handling of exceptions]

### Security & Privacy
[Data handling, permissions, compliance]

### Testing Requirements
[Test cases, acceptance criteria]

### Migration / Rollout
[Database migrations, feature flags, rollback plan]

### Dependencies
[External services, other teams, timelines]
```

**Length:** Variable based on complexity

### Stakeholder Update

**Purpose:** Keep stakeholders informed of progress, blockers, and decisions.

**When to use:** Regular cadence (weekly/biweekly) or after significant events

**Structure:**
```
## [Project Name] Update — [Date]

### Status: [Green/Yellow/Red]

### Summary
[2-3 sentences: where things stand]

### Progress Since Last Update
- [Completed item]
- [Completed item]

### In Progress
- [Item] — [Status/ETA]

### Blockers / Risks
- [Blocker] — [Owner] — [Resolution plan]

### Decisions Made
- [Decision]: [Rationale]

### Upcoming
- [Milestone] — [Date]

### Needs from You
- [Specific ask with owner]
```

**Length:** 1 page max

### Launch Brief

**Purpose:** Coordinate cross-functional teams for go-to-market.

**When to use:** 2-4 weeks before launch

**Structure:**
```
## Launch Brief: [Feature/Product Name]

### Launch Date
[Date, time if relevant]

### What's Launching
[Clear description of the feature/change]
[Who it affects]

### Key Messaging
[How to describe this externally]
[Key benefits, not features]

### Rollout Plan
[Phased? All at once? Beta first?]

### Team Responsibilities

| Team | Responsibility | Owner | Due |
|------|----------------|-------|-----|
| Engineering | Deploy | [Name] | [Date] |
| Marketing | Blog post | [Name] | [Date] |
| Support | Help docs | [Name] | [Date] |
| Sales | Enablement | [Name] | [Date] |

### Success Metrics
[How we'll measure launch success]

### Risk & Contingency
[What could go wrong, backup plans]

### Communication Plan
[Internal announcement, external announcement, support prep]
```

**Length:** 1-2 pages

### Decision Doc

**Purpose:** Capture and communicate a significant decision with context and rationale.

**When to use:** After making a decision that affects multiple people or has long-term implications

**Structure:**
```
## Decision: [Clear statement of what was decided]

### Date
[When this was decided]

### Decision Makers
[Who made this decision]

### Context
[Why this decision was needed]

### Options Considered
1. [Option A] — [Brief description]
2. [Option B] — [Brief description]
3. [Option C] — [Brief description]

### Decision
We chose [Option X].

### Rationale
[Why this option over others]
[Trade-offs accepted]

### Implications
[What changes as a result]
[Who needs to take action]

### Revisit Criteria
[Under what conditions would we reconsider?]
```

**Length:** 1 page

---

## Quality Checks

### Clarity Quality

- [ ] Can someone with no context understand the key points?
- [ ] Is the "why" clear before the "what"?
- [ ] Are there ambiguous terms that need definition?
- [ ] Does it stand alone without verbal explanation?

### Completeness Quality

- [ ] Success criteria defined?
- [ ] Scope explicitly stated (in and out)?
- [ ] Trade-offs acknowledged?
- [ ] Open questions listed with owners?
- [ ] Next steps clear?

### Audience Quality

- [ ] Right level of detail for the audience?
- [ ] Technical terms appropriate for readers?
- [ ] Format matches expectations?
- [ ] Length is respectful of readers' time?

### Accuracy Quality

- [ ] Facts and figures verified?
- [ ] Links work?
- [ ] Dates and timelines current?
- [ ] Stakeholder names and responsibilities correct?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Docs as CYA** | Writing to protect yourself, not to inform | Write to drive decisions and alignment |
| **Solution-first** | Jumping to "what" without establishing "why" | Problem before solution, always |
| **Kitchen sink** | Every detail in one doc | Right level of detail for the audience |
| **Write once, abandon** | Doc goes stale immediately | Living document with update dates |
| **Verbal culture** | Important info only shared in meetings | Write it down, make it async |
| **Template worship** | Following template even when it doesn't fit | Adapt format to the need |
| **No clear ask** | Doc ends without next steps | Every doc needs "so what now?" |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Write a PRD | Product Communications | Technical Documentation (different audience) |
| Write user-facing docs | Technical Documentation | Product Communications (internal focus) |
| Write marketing copy | Marketing | Product Communications (external vs. internal) |
| Facilitate a decision | Strategic Advisory | Product Communications (may use both) |
| Document research findings | Research & Synthesis | Product Communications (different format) |
| Create a presentation | Brand Design | Product Communications (visual vs. written) |

---

## Output Expectations

**Product Brief:** Clear opportunity, specific ask, 1-2 pages max

**PRD:** Complete requirements, measurable success criteria, engineering can build from it

**Feature Spec:** Technical detail sufficient for implementation without ambiguity

**Stakeholder Update:** Scannable, honest status, clear blockers and asks

**Launch Brief:** All teams know their role, dates, and success criteria

**Decision Doc:** Decision is clear, rationale is documented, future readers can understand why

---

## When to Escalate

Flag for review when:

- Scope is significantly larger or smaller than expected
- Stakeholders have conflicting requirements
- Technical constraints change the product direction
- Success criteria are unclear or contested
- Launch timeline is at risk
- Decision affects multiple teams or has long-term implications
