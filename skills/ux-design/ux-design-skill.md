---
name: ux-design
description: Design user experiences and interfaces for digital products. Use for user research, journey mapping, wireframes, prototypes, usability testing, interaction design, and UI copy.
---

# UX Design

UX design is the discipline of understanding users deeply and crafting experiences that serve their needs with clarity and intention. It spans research, strategy, and execution — from discovering what users actually need to designing interfaces that make complex tasks feel effortless.

---

## Core Principles

1. **Research before pixels.** Don't start designing until you understand the user's world. The best interfaces are built on insights, not assumptions.

2. **Clarity is kindness.** Every moment of confusion is a failure. When users have to think about how to use something, the design has failed them.

3. **Design for the worst case.** The real user is distracted, tired, on bad wifi, and interrupted. Design for them, not for ideal conditions.

4. **Constraints unlock creativity.** Technical limits, business requirements, and time pressure aren't obstacles — they're the parameters that force better solutions.

5. **Test early, test ugly.** A sketch tested with users beats a polished mockup that's never validated. Get designs in front of real people before you fall in love with them.

6. **Ship to learn.** Perfection is the enemy of insight. Real usage teaches things research never can.

7. **Advocate, but collaborate.** Fight for user needs, but understand business realities. The best solutions serve both.

### Industry Principles

8. **User goals drive decisions.** Every design choice should connect to something the user is trying to accomplish. No element exists for its own sake.

9. **Hierarchy guides attention.** Size, color, position, and whitespace direct where users look and in what order. Make the important things unmissable.

10. **Accessibility is non-negotiable.** Design for everyone. Color contrast, touch targets, screen readers — these aren't extras. They're the baseline.

11. **Consistency enables speed.** Users learn patterns. When your product is internally consistent, they only learn once.

12. **Reduce cognitive load.** Every decision costs mental energy. Remove unnecessary choices. Provide smart defaults. Make the right path obvious.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the UX design-specific details for each step.

### 1. Clarify Before Starting

Before any UX work, answer:

- **What problem are we solving?** User's goal, pain point, job to be done
- **Who is the user?** Context, mental model, technical comfort, constraints
- **What do we already know?** Existing research, analytics, support tickets
- **What's the scope?** Single interaction, flow, feature, or system
- **What constraints exist?** Technical, time, brand, accessibility requirements
- **What does success look like?** How will we measure if this works?
- **What fidelity is needed?** Sketch, wireframe, prototype, or production-ready

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Product, users, terminology
- `core/voice.md` — Tone, language rules for any copy in designs

**Extended context (load for UX/UI):**
- `extended/visual-identity.md` — Colors, typography, components
- Design system or brand guidelines (if they exist)

**Load when needed:**
- [UX Methods](references/ux-methods.md) — Research methodologies, personas, journey mapping
- [Design Principles](references/design-principles.md) — Foundational principles, UX laws
- [UI Patterns](references/ui-patterns.md) — Interface patterns and when to use them
- [Design Systems](references/design-systems.md) — Token architecture, component design, governance

### 3. Understand Users

**Before designing, understand:**

| Method | When to Use | Output |
|--------|-------------|--------|
| User interviews | Discovery, understanding context | Quotes, pain points, mental models |
| Contextual inquiry | Observing real behavior | Workflows, workarounds, insights |
| Analytics review | Understanding current usage | Behavioral patterns, drop-off points |
| Support ticket analysis | Finding pain points | Common issues, confusion areas |
| Competitor analysis | Understanding expectations | Patterns, gaps, opportunities |

**Synthesis deliverables:**
- Personas (behavioral, not demographic)
- Journey maps (current state)
- Jobs to be done
- Key insights and opportunities

### 4. Design the Experience

**Information Architecture:**
1. Define content structure and relationships
2. Map user flows for key tasks
3. Create navigation model
4. Validate with card sorting or tree testing if needed

**Interaction Design:**
1. Define key interactions for each screen/state
2. Consider all states: default, loading, empty, error, success
3. Define transitions and feedback
4. Document edge cases

**Visual Design:**
1. Apply brand guidelines and design system
2. Create visual hierarchy
3. Ensure accessibility (contrast, sizing, labels)
4. Refine details and polish

### 5. Test and Validate

**Test early and often:**

| Test Type | What It Tests | When |
|-----------|---------------|------|
| Concept testing | Does this solve the right problem? | Early |
| Usability testing | Can users accomplish tasks? | Throughout |
| A/B testing | Which option performs better? | After launch |

**Test protocol:**
1. Define what you're testing
2. Create scenarios and tasks
3. Recruit appropriate participants
4. Observe without leading
5. Synthesize findings
6. Iterate on design

---

## Design Deliverables

### User Flows

**Purpose:** Map the path users take through a task
**Include:**
- Entry points (how they get here)
- Decision points (where paths diverge)
- Actions (what they do at each step)
- Destinations (where they end up)

### Wireframes

**Purpose:** Structure and layout without visual polish
**Use for:** Early exploration, stakeholder alignment, developer hand-off

**Levels:**
- Low-fi: Structure only, no detail
- Mid-fi: Layout with real content
- High-fi: Near-final with styling (often just called mockups)

### Prototypes

**Purpose:** Simulate interactivity for testing or presentation
**Fidelity spectrum:**
- Paper prototypes: Fastest, for early exploration
- Clickable wireframes: For flow testing
- Interactive prototypes: For usability testing
- Coded prototypes: For complex interactions

### Design Specifications

**Include:**
- Spacing and sizing (use design system tokens)
- Colors and typography
- Component states
- Interaction behavior
- Accessibility requirements

### UI Copy

UI copy guides users through tasks. Clarity beats cleverness — always.

**Buttons:**
- Action verb + object: "Save changes," "Create account," "Start trial"
- Be specific: "Submit" < "Send message" < "Send to John"
- Match user intent: What do they think will happen?

**Form Labels:**
- Clear, simple labels
- Placeholder text = examples, not instructions
- Help text for complex fields

**Empty States:**
- Explain what would be here
- Guide them to create/add content
- Encouraging, not blaming

**Error Messages:**
- Say what went wrong
- Say how to fix it
- Don't blame the user
- Specific: "Password must be 8+ characters" not "Invalid password"

**Microcopy principles:**
- One idea per element
- Action-oriented language
- Match the user's mental model
- Consistent terminology throughout

---

## Design Systems

Design systems create consistency, speed, and scalability. They're the shared language between design and engineering — a single source of truth for how the product looks and behaves.

### When to Work on Design Systems

- **Create:** New product needs foundation, or existing product has inconsistent UI
- **Audit:** System exists but is outdated, incomplete, or poorly adopted
- **Extend:** Adding new patterns or components to existing system
- **Document:** System exists in Figma but lacks documentation for engineers

### Design System Components

| Layer | What It Contains | Example |
|-------|------------------|---------|
| **Tokens** | Primitive values | Colors, spacing, typography, shadows |
| **Components** | Reusable UI elements | Buttons, inputs, cards, modals |
| **Patterns** | Component combinations | Forms, navigation, data tables |
| **Guidelines** | Usage rules | When to use which button, accessibility requirements |

### Design System Process

**1. Audit existing UI:**
- Screenshot every unique component
- Group similar patterns
- Identify inconsistencies
- Note what's working vs. broken

**2. Define tokens:**
- Color palette (semantic naming: `color-action-primary`, not `blue-500`)
- Typography scale (limited set of sizes)
- Spacing scale (4px or 8px base)
- Elevation/shadows
- Border radii

**3. Build components:**
- Start with most-used (buttons, inputs, cards)
- Define all states (default, hover, active, disabled, error)
- Document props/variants
- Include accessibility requirements

**4. Create patterns:**
- Combine components into common layouts
- Document when to use each pattern
- Show good and bad examples

**5. Document and govern:**
- Usage guidelines for each component
- Contribution process
- Version control
- Deprecation policy

### Design System Principles

1. **Start with what exists.** Don't redesign everything. Codify current patterns first, then improve.

2. **Constraints enable creativity.** A good system doesn't limit design — it frees designers from reinventing basics.

3. **Name semantically.** `button-primary` not `button-blue`. Names should describe purpose, not appearance.

4. **Design for handoff.** If engineers can't implement it consistently, it's not a system.

5. **Adoption over perfection.** A simple system that's used beats a perfect system that's ignored.

6. **Document decisions.** Why this spacing scale? Why these colors? Future maintainers need context.

### Design System Quality Checks

- [ ] Tokens are semantic (purpose-based naming)?
- [ ] All component states documented?
- [ ] Accessibility requirements included?
- [ ] Guidelines explain when to use (not just how)?
- [ ] Engineers can implement from documentation?
- [ ] Versioning and change process defined?

For deeper guidance on tokens, component architecture, and governance, see [Design Systems Reference](references/design-systems.md).

---

## Quality Checks

### Usability Quality

- [ ] Can users complete key tasks?
- [ ] Is the hierarchy clear?
- [ ] Are all states designed (default, loading, empty, error, success)?
- [ ] Is feedback immediate and clear?
- [ ] Are errors helpful and recoverable?

### Accessibility Quality

- [ ] Color contrast meets WCAG AA (4.5:1 for text)?
- [ ] Touch targets are 44x44px minimum?
- [ ] Focus states are visible?
- [ ] Labels on all form fields?
- [ ] Content works without color alone?
- [ ] Keyboard navigation works?

### Consistency Quality

- [ ] Follows design system patterns?
- [ ] Consistent with other parts of the product?
- [ ] Uses standard platform conventions?
- [ ] Terminology is consistent?

### Technical Quality

- [ ] Responsive/works on target devices?
- [ ] Edge cases handled?
- [ ] Feasible to build?
- [ ] Performance considerations addressed?

### UI Copy Quality

- [ ] Every button/action is clear?
- [ ] Error messages are helpful (what + how to fix)?
- [ ] Empty states guide users forward?
- [ ] Terminology is consistent throughout?
- [ ] Copy is action-oriented, not passive?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Skipping research** | Designing for yourself, not users | Research first, even lightweight |
| **Designing for happy path only** | Users hit errors, empty states | Design all states |
| **Innovation for its own sake** | Confusion, learning curve | Familiar patterns unless better reason |
| **Ignoring accessibility** | Excludes users, legal risk | Accessibility from the start |
| **Over-designing** | Delayed shipping, wasted effort | Design to the appropriate fidelity |
| **Not testing** | Ship broken experiences | Test early, test often |
| **Copy as afterthought** | Unclear, inconsistent UI | Design with real content |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Design interfaces | UX Design | Visual Communication (interaction, not static) |
| Create user flows | UX Design | Project Management (user experience focus) |
| Write UI copy | UX Design | Product Marketing (interface copy, not marketing copy) |
| Conduct user research | UX Design or Research & Synthesis | Research for discovery, UX for design validation |
| Create presentations | Visual Communication | UX Design (different deliverable) |
| Document features | Technical Documentation | UX Design (user-facing docs) |

---

## Output Expectations

**User flow:** Clear path through task, all branches shown, entry/exit points defined

**Wireframe:** Structure clear, real content, appropriate fidelity for purpose

**Prototype:** Interactive for testing, clear scope, supports scenarios

**Mockup:** Pixel-perfect, all states, matches design system

**UI copy:** Crystal clear, action-oriented, helpful error messages, consistent terminology

**Usability test:** Clear findings, actionable recommendations, evidence-based

---

## When to Escalate

Flag for review when:

- Design requires significant deviation from design system
- Accessibility requirements unclear or in conflict
- Technical feasibility uncertain
- Business requirements conflict with user needs
- High-risk or high-visibility features
- Research findings contradict stakeholder expectations
