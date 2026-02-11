---
name: prototyping
description: Build interactive prototypes and proof-of-concepts that demonstrate ideas quickly. Use for clickable demos, coded prototypes, stakeholder presentations, feasibility testing, and rapid validation.
---

# Prototyping

Prototyping is about making ideas tangible fast. Not pixel-perfect production code — working demonstrations that let stakeholders experience a concept, test feasibility, and make decisions. The goal is learning and alignment, not shipping.

---

## Core Principles

1. **Speed over polish.** A prototype that exists today beats a perfect one next month. Get something in front of people fast.

2. **Fake what you can, build what you must.** Hard-code data, mock integrations, skip edge cases. Only build what's needed to answer the question you're testing.

3. **Match fidelity to purpose.** A stakeholder demo needs different fidelity than a technical feasibility test. Know what you're proving and build to that level.

4. **Throwaway mindset.** Prototypes are disposable. Don't get attached. If you're worried about "wasting" the code, you're building too much.

5. **One question per prototype.** "Does this interaction feel right?" is a prototype. "Is the whole product viable?" is not. Scope ruthlessly.

6. **Show, don't describe.** A 30-second demo beats a 30-minute explanation. Build the thing, show the thing.

7. **Context matters.** A prototype shown on a phone feels different than one on a projector. Test in the environment where decisions will be made.

### Industry Principles

8. **Fidelity spectrum awareness.** Paper → Wireframe → Clickable → Coded → Production. Know where you are and why.

9. **Technical feasibility is a valid goal.** Sometimes the prototype answers "can we build this?" not "should we build this?" Both are valuable.

10. **Prototype the risky parts.** Focus on what's uncertain or contentious. Don't prototype things everyone already understands.

11. **Interactivity reveals truths.** Static mockups hide interaction problems. If the value is in the interaction, it must be interactive.

12. **Know when to stop.** A prototype has served its purpose when you can make a decision. More polish doesn't help.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../_FRAMEWORKS/workflow-orchestration.md) for the universal workflow approach. Below are the prototyping-specific details for each step.

### 1. Clarify Before Starting

Before building any prototype, answer:

- **What question are we answering?** "Will users understand this flow?" or "Is this technically feasible?" or "Will stakeholders buy in?"
- **Who is the audience?** Users, stakeholders, engineers, investors?
- **What fidelity is needed?** Paper sketch, clickable mockup, coded prototype, or working POC?
- **What's the scope?** Single interaction, core flow, or end-to-end experience?
- **What's the timeline?** Hours, days, or weeks?
- **What happens after?** Present and discard, iterate further, or hand off to engineering?

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Product, terminology, constraints
- `core/voice.md` — Tone for any copy in the prototype

**Extended context (load when needed):**
- `extended/visual-identity.md` — Colors, typography (if fidelity warrants)
- Design specs or wireframes (if they exist)
- Technical constraints (APIs, platforms, limitations)

**Load when needed:**
- [Prototyping Tools](references/prototyping-tools.md) — Tool selection guidance
- [UX Design Skill](../ux-design/ux-design-skill.md) — For research-informed design decisions

### 3. Choose the Right Fidelity

| Fidelity | Best For | Tools | Time |
|----------|----------|-------|------|
| **Paper/Sketch** | Early exploration, many options | Paper, whiteboard | Minutes |
| **Wireframe** | Structure validation, flow testing | Figma, Balsamiq | Hours |
| **Clickable mockup** | User testing, stakeholder demos | Figma prototypes, Principle | Hours-Days |
| **Coded prototype** | Interaction feel, technical feasibility | HTML/CSS/JS, React, Framer | Days |
| **Working POC** | Integration testing, investor demos | Full stack, real APIs | Days-Weeks |

**Choose based on:**
- What question you're answering
- Who needs to experience it
- How much time you have
- What decisions depend on it

### 4. Prototype Process

**Scope Definition:**
1. Write the question the prototype answers (one sentence)
2. List what MUST be in the prototype
3. List what's explicitly OUT (resist scope creep)
4. Define "done" — what makes this prototype sufficient?

**Build Approach:**
1. Start with the happy path only
2. Fake everything you can (hard-coded data, mock APIs)
3. Focus on the critical interaction or value prop
4. Skip error states, edge cases, and polish
5. Test early — don't wait until it's "ready"

**Technical Shortcuts:**
- Hard-code data instead of building backends
- Use placeholder images and lorem ipsum
- Mock API responses with static JSON
- Skip authentication and user management
- Use existing component libraries
- Copy patterns from production apps

### 5. Present and Gather Feedback

**Before showing:**
- Set expectations ("This is a prototype, not the final product")
- Explain what you're testing ("We want to see if this flow makes sense")
- Clarify what's real vs. faked ("The data is placeholder")

**During demo:**
- Let them experience it (don't over-explain)
- Watch for confusion, hesitation, delight
- Ask what they expected vs. what happened
- Note specific feedback, not just reactions

**After:**
- Summarize what you learned
- Decide: iterate, pivot, or move forward
- Archive the prototype (don't let it rot)

---

## Prototype Types

### Stakeholder Demo

**Purpose:** Get buy-in, secure resources, align on direction
**Fidelity:** Medium-high (needs to feel "real" enough to be credible)
**Focus:** Core value proposition, the "wow" moment

**Principles:**
- Lead with the transformation, not the features
- Make it feel like the future, not a rough draft
- Prepare for "but what about..." questions
- Have a clear ask at the end

### User Testing Prototype

**Purpose:** Validate usability, test comprehension
**Fidelity:** Medium (realistic enough to observe real behavior)
**Focus:** Task completion, not visual polish

**Principles:**
- Realistic enough that users don't adjust for "prototype-ness"
- Include enough context that tasks make sense
- Multiple paths if testing navigation
- Neutral prompts — don't lead the user

### Technical Feasibility POC

**Purpose:** Prove something can be built
**Fidelity:** Variable (functional over beautiful)
**Focus:** The technical challenge, not the UX

**Principles:**
- Isolate the hard problem
- Document assumptions and limitations
- Capture learnings for engineering handoff
- It's okay to be ugly if it works

### Investor/Pitch Demo

**Purpose:** Tell a compelling story, demonstrate vision
**Fidelity:** High visual, can be low functional
**Focus:** The narrative and emotional impact

**Principles:**
- Design for the presentation context (projector, screen share)
- Rehearse the demo path (no improvising)
- Have a backup (screenshots, video)
- The prototype supports the story, not the other way around

---

## Tool Selection

### No-Code / Low-Code

| Tool | Best For | Limitations |
|------|----------|-------------|
| **Figma Prototyping** | Clickable flows, user testing | Limited interactivity |
| **Framer** | High-fidelity, code-like interactions | Learning curve |
| **Webflow** | Marketing pages, content sites | Complex interactions |
| **Bubble** | Data-driven apps, forms | Performance, scalability |

### Coded Prototypes

| Approach | Best For | Trade-offs |
|----------|----------|------------|
| **HTML/CSS/JS** | Simple interactions, broad compatibility | Manual work |
| **React/Vue** | Component-based, reusable | Setup overhead |
| **Tailwind + Alpine** | Rapid styling, simple interactivity | Less structured |
| **Existing framework** | Consistent with production | Heavier |

### Choose Based On:

- **Team skills:** Use what you know
- **Handoff needs:** If engineers will use it, match their stack
- **Interactivity requirements:** More complex = more code
- **Time constraints:** Faster tools for tighter timelines

---

## Quality Checks

### Scope Quality

- [ ] Single question being answered?
- [ ] Scope is minimal (nothing unnecessary)?
- [ ] "Done" is clearly defined?
- [ ] Timeline is realistic for fidelity level?

### Build Quality

- [ ] Happy path works smoothly?
- [ ] Fidelity matches purpose (not over or under-built)?
- [ ] Critical interaction feels right?
- [ ] Can be demoed without explanation?

### Presentation Quality

- [ ] Context is set appropriately?
- [ ] Expectations are managed (it's a prototype)?
- [ ] Demo path is rehearsed?
- [ ] Feedback capture plan exists?

### Learning Quality

- [ ] Original question is answered?
- [ ] Learnings are documented?
- [ ] Next steps are clear?
- [ ] Prototype is archived (not abandoned)?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Over-building** | Wasted time, attachment to throwaway code | Build minimum to answer the question |
| **Polish before validation** | Beautiful prototype, wrong direction | Validate concept before adding fidelity |
| **Prototype-as-spec** | Prototype becomes de facto requirements | Prototypes inform specs, they aren't specs |
| **Demo theater** | Impressive demo, impossible to build | Be honest about what's faked |
| **No clear question** | Build for building's sake | One question per prototype |
| **Scope creep** | "While we're at it..." | Ruthless scoping, explicit out-of-scope list |
| **Abandonment** | Prototype rots, learnings lost | Archive and document after use |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Build interactive demo | Prototyping | UX Design (different output) |
| Test technical feasibility | Prototyping | Engineering (exploration, not production) |
| Create wireframes | UX Design | Prototyping (unless interactive) |
| Design user flows | UX Design | Prototyping (design before prototype) |
| Write feature specs | Product Communications | Prototyping (docs, not demos) |
| Present to stakeholders | Prototyping + Brand Design | May need both for high-stakes |

---

## Output Expectations

**Stakeholder demo:** Credible enough to generate buy-in, focused on value prop, clear ask

**User testing prototype:** Realistic task flow, neutral framing, captures real behavior

**Technical POC:** Proves the hard thing works, documented limitations, handoff-ready

**Pitch demo:** Polished narrative, rehearsed flow, backup plan ready

---

## When to Escalate

Flag for review when:

- Prototype scope is expanding into production work
- Technical feasibility POC reveals significant blockers
- Stakeholder expectations exceed prototype reality
- Prototype requires access to sensitive data or systems
- Feedback contradicts established direction
- Prototype is being treated as final product
