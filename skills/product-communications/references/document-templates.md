# Document Templates Reference

Copy-paste templates for common product documents.

---

## Product Brief Template

```markdown
## Product Brief: [Feature/Initiative Name]

**Author:** [Name]
**Date:** [Date]
**Status:** Draft / In Review / Approved

---

### Summary

[2-3 sentences: what is this, why does it matter]

---

### Problem

**What problem are we solving?**
[Clear problem statement]

**Who has this problem?**
[User segment, persona, or customer type]

**Evidence:**
- [Research finding, data point, or customer quote]
- [Additional evidence]

---

### Opportunity

**Why now?**
[Market timing, competitive pressure, strategic alignment]

**What's the potential impact?**
[Business value, user value, strategic value]

---

### Proposed Direction

[High-level approach — NOT detailed solution]

**Key assumptions:**
- [Assumption 1]
- [Assumption 2]

---

### Success Criteria

| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| [Metric] | [Baseline] | [Goal] | [When] |

---

### Risks & Open Questions

**Risks:**
- [Risk] — [Mitigation]

**Open questions:**
- [Question] — [Owner] — [Due]

---

### Ask

[What decision or resources are you requesting?]

---

### Timeline

| Phase | Description | Timeline |
|-------|-------------|----------|
| Discovery | [Activities] | [Dates] |
| Design | [Activities] | [Dates] |
| Build | [Activities] | [Dates] |
| Launch | [Activities] | [Dates] |
```

---

## PRD Template

```markdown
## PRD: [Feature Name]

**Author:** [Name]
**Date:** [Date]
**Status:** Draft / In Review / Approved
**Last Updated:** [Date]

---

### Overview

[What is this feature? 2-3 sentences]

---

### Problem Statement

**Problem:**
[What problem does this solve?]

**Who:**
[For whom?]

**Evidence:**
[Research, data, customer feedback supporting this]

---

### Goals & Success Metrics

**Goals:**
1. [Goal 1]
2. [Goal 2]

**Success Metrics:**

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| [Metric] | [Current] | [Goal] | [How measured] |

---

### User Stories

- As a [user type], I want to [action] so that [outcome]
- As a [user type], I want to [action] so that [outcome]

---

### Scope

**In Scope:**
- [Feature/capability]
- [Feature/capability]

**Out of Scope:**
- [Explicitly excluded]
- [Explicitly excluded]

---

### Requirements

**Functional Requirements:**

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-1 | [Requirement] | Must have |
| FR-2 | [Requirement] | Should have |

**Non-Functional Requirements:**

| Category | Requirement |
|----------|-------------|
| Performance | [Requirement] |
| Security | [Requirement] |
| Accessibility | [Requirement] |

---

### Design

[Link to Figma/designs]

**Key interactions:**
- [Interaction note]

---

### Technical Considerations

**Dependencies:**
- [Dependency]

**Constraints:**
- [Constraint]

**Open technical questions:**
- [Question] — [Owner]

---

### Edge Cases & Error States

| Scenario | Expected Behavior |
|----------|-------------------|
| [Edge case] | [Handling] |
| [Error state] | [Message/behavior] |

---

### Launch Plan

**Rollout strategy:** [Beta → Phased → Full]

**Dependencies:**
- [Team/dependency] — [Item] — [Date]

---

### Open Questions

| Question | Owner | Due | Status |
|----------|-------|-----|--------|
| [Question] | [Name] | [Date] | Open/Resolved |

---

### Appendix

[Links to research, competitive analysis, supporting docs]
```

---

## Stakeholder Update Template

```markdown
## [Project Name] Update — [Date]

### Status: 🟢 Green / 🟡 Yellow / 🔴 Red

---

### Summary

[2-3 sentences: where things stand]

---

### Progress Since Last Update

- ✅ [Completed item]
- ✅ [Completed item]

---

### In Progress

- 🔄 [Item] — [Status/ETA]
- 🔄 [Item] — [Status/ETA]

---

### Blockers / Risks

| Issue | Owner | Resolution | ETA |
|-------|-------|------------|-----|
| [Blocker] | [Name] | [Plan] | [Date] |

---

### Decisions Made

- **[Decision]:** [Brief rationale]

---

### Upcoming

| Milestone | Date |
|-----------|------|
| [Milestone] | [Date] |

---

### Needs from You

- [ ] [Specific ask] — [Owner]
```

---

## Launch Brief Template

```markdown
## Launch Brief: [Feature/Product Name]

**Launch Date:** [Date]
**Author:** [Name]
**Last Updated:** [Date]

---

### What's Launching

[Clear description of the feature/change]

**Who it affects:**
- [User segment]

**What's changing:**
- [Change 1]
- [Change 2]

---

### Key Messaging

**One-liner:**
[How to describe this in one sentence]

**Key benefits:**
1. [Benefit — user-focused, not feature-focused]
2. [Benefit]

**What this is NOT:**
- [Clarification to prevent misunderstanding]

---

### Rollout Plan

| Phase | Audience | Date |
|-------|----------|------|
| Beta | [Who] | [Date] |
| Limited | [Who] | [Date] |
| General | [Who] | [Date] |

---

### Team Responsibilities

| Team | Deliverable | Owner | Due |
|------|-------------|-------|-----|
| Engineering | Deploy to production | [Name] | [Date] |
| Design | Final assets | [Name] | [Date] |
| Marketing | Blog post, social | [Name] | [Date] |
| Support | Help docs, training | [Name] | [Date] |
| Sales | Enablement materials | [Name] | [Date] |

---

### Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| [Metric] | [Target] | [How/when measured] |

---

### Risk & Contingency

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| [Risk] | High/Med/Low | [Plan] |

**Rollback plan:**
[How we revert if needed]

---

### Communication Plan

**Internal:**
- [Channel] — [Date] — [Owner]

**External:**
- [Channel] — [Date] — [Owner]
```

---

## Decision Doc Template

```markdown
## Decision: [Clear statement of what was decided]

**Date:** [Date]
**Decision Makers:** [Names]
**Status:** Proposed / Decided / Implemented

---

### Context

[Why this decision was needed — 2-3 sentences]

---

### Options Considered

**Option A: [Name]**
- Description: [What this option entails]
- Pros: [Benefits]
- Cons: [Drawbacks]

**Option B: [Name]**
- Description: [What this option entails]
- Pros: [Benefits]
- Cons: [Drawbacks]

**Option C: [Name]**
- Description: [What this option entails]
- Pros: [Benefits]
- Cons: [Drawbacks]

---

### Decision

We chose **[Option X]**.

---

### Rationale

[Why this option over others — be specific about the deciding factors]

**Trade-offs accepted:**
- [Trade-off we're accepting]

---

### Implications

**What changes:**
- [Change]

**Who needs to act:**
- [Person/team] — [Action]

---

### Revisit Criteria

We will reconsider this decision if:
- [Condition]
- [Condition]
```
