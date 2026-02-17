# Prototyping Methods

> Methodology for prototype fidelity selection, testing, scope management, and production handoff.

**Part of:** [Prototyping](../prototyping-skill.md)

---

## Fidelity Selection Framework

### Fidelity Levels

| Level | What It Is | Tools | Time to Build | Best For |
|-------|-----------|-------|---------------|----------|
| **Paper / Sketch** | Hand-drawn screens, sticky notes | Paper, whiteboard, markers | Minutes to hours | Early exploration, team alignment, rapid ideation |
| **Wireframe** | Grayscale layouts, no real content | Figma, Balsamiq, FigJam | Hours to 1 day | Information architecture, flow validation, stakeholder review |
| **Clickable mockup** | Visual design with linked screens | Figma prototyping, InVision | 1-3 days | Usability testing, stakeholder buy-in, design critique |
| **High-fidelity prototype** | Pixel-perfect, animations, real content | Figma, Framer, Principle | 3-7 days | User testing, developer handoff, executive presentations |
| **Coded prototype** | Functional code, real interactions | HTML/CSS/JS, React, SwiftUI | 1-3 weeks | Technical feasibility, API integration, production prep |

### Decision Guide

**Use lower fidelity when:**
- You're exploring multiple concepts
- The idea is unvalidated
- Speed matters more than polish
- The audience understands rough work

**Use higher fidelity when:**
- You're validating a specific solution
- Stakeholders need to "see" it to understand
- Testing requires realistic interaction
- You're close to development

---

## Progressive Fidelity Approach

### The Principle

Start at the lowest fidelity that lets you answer your question. Increase fidelity only as confidence grows.

### Typical Progression

```
Idea → Paper sketch → Wireframe → Clickable mockup → Coded prototype → Production
         ↓              ↓              ↓                  ↓
      Kill bad      Validate       Test with          Validate
      ideas fast    structure      real users         feasibility
```

### When to Increase Fidelity

Move up when:
- You've validated the concept at the current level
- Your next question requires more realistic interaction
- Stakeholders can't evaluate without higher fidelity
- Development is approaching and you need specifics

### When to Decrease Fidelity

Move down when:
- Feedback suggests a fundamental direction change
- You're exploring adjacent ideas triggered by testing
- The team is over-investing in polish for an unvalidated concept

---

## Prototype Testing Methods

### Think-Aloud Testing

**What:** Users narrate their thoughts while interacting with the prototype.

**Setup:**
1. Define 3-5 tasks the prototype supports
2. Brief the user: "Think out loud — tell me what you're looking at, what you expect, what confuses you"
3. Observe without guiding
4. Ask clarifying questions after each task

**Best for:** Uncovering usability issues, understanding mental models
**Sample size:** 5-8 users reveals ~80% of issues
**Fidelity required:** Wireframe or higher

### Task-Based Testing

**What:** Users attempt specific tasks; you measure success.

**Setup:**
1. Write clear task scenarios (not instructions): "You want to find your most recent order and check its status"
2. Define success criteria: completed, completed with difficulty, failed
3. Time each task (optional but useful)
4. Note where users hesitate, backtrack, or express confusion

**Metrics to capture:**
- Task completion rate
- Time on task
- Error count
- Satisfaction rating (post-task)

**Best for:** Validating that a specific flow works
**Fidelity required:** Clickable mockup or higher

### A/B Prototype Comparison

**What:** Show users two approaches and gather preference and usability data.

**Setup:**
1. Build two variants of the same flow
2. Randomize which users see first (counterbalancing)
3. Have users complete the same tasks on both
4. Ask for preference and reasoning after

**Best for:** Choosing between design directions when both seem viable
**Watch out for:** Recency bias (they prefer whichever they saw last). Counter-balance the order.

### Guerrilla Testing

**What:** Quick, informal testing with available people (not recruited participants).

**When to use:**
- You need fast feedback and can't wait for recruitment
- The question is straightforward (navigation, labeling, basic flow)
- You're testing with a general audience (not specialized users)

**Rules:**
- Keep it under 10 minutes
- One flow, 2-3 tasks maximum
- Take notes immediately — you won't remember later
- Don't use for specialized domains (medical, finance, enterprise)

---

## Prototype Scope Management

### What to Fake vs. Build Real

| Build Real | Fake It |
|-----------|---------|
| Core flow being tested | Secondary navigation |
| Key interactions (the thing you're validating) | Settings and account pages |
| Realistic content (real copy, real data density) | Actual backend/database |
| Error states for the tested flow | Edge cases outside the test scope |
| Critical animations that affect understanding | Micro-animations and polish |

### Setting Scope Boundaries

Before building, define:

1. **The question:** What are we trying to learn?
2. **The flow:** Which screens and interactions does the user need?
3. **The depth:** How many paths through the flow do we support?
4. **The edges:** What happens if the user goes off-script?

### Handling Off-Script Behavior

In testing, users will click things you didn't build. Options:

- **"Coming soon" screen:** A polite dead-end that redirects them back
- **Wizard of Oz:** Moderator simulates the system response behind the scenes
- **Pre-brief:** Tell users "this prototype focuses on [flow] — other areas aren't built yet"
- **Hot zones:** Only clickable areas are interactive; non-interactive areas do nothing

---

## Technical Feasibility Assessment

### Checklist

Before building a coded prototype, assess:

**APIs and Data:**
- [ ] Are the required APIs available?
- [ ] Is the data in the right format?
- [ ] What's the API response time?
- [ ] Are there rate limits or authentication requirements?
- [ ] Do we need mock data or can we use production APIs?

**Performance:**
- [ ] Can this run at acceptable speed?
- [ ] Are there heavy computations (AI, rendering, large datasets)?
- [ ] What devices/browsers must it support?

**Platform:**
- [ ] Web, native mobile, or desktop?
- [ ] Any platform-specific constraints?
- [ ] Offline requirements?

**Integrations:**
- [ ] Third-party services needed (payment, auth, maps)?
- [ ] Can we use sandbox/test environments?
- [ ] License or cost implications?

**Security:**
- [ ] Does the prototype handle real user data?
- [ ] Do we need authentication?
- [ ] Any compliance requirements (HIPAA, GDPR)?

### Feasibility Rating

| Rating | Meaning | Action |
|--------|---------|--------|
| **Green** | Can be built with known tools and skills | Proceed to prototype |
| **Yellow** | Achievable but needs investigation or new tools | Spike first, then prototype |
| **Red** | Major technical barriers | Redesign the approach or involve engineering early |

---

## Prototype-to-Production Handoff

### What Transfers

| Transfers Directly | Gets Rebuilt |
|-------------------|-------------|
| Design intent and specifications | Code architecture |
| User flow and interaction patterns | Backend integration |
| Copy and content decisions | Performance optimization |
| Animation timing and behavior | Security and authentication |
| User testing insights | Error handling (comprehensive) |
| Layout and spacing decisions | Accessibility (full compliance) |

### Handoff Documentation

When handing a prototype to engineering:

1. **Prototype link** with walkthrough recording
2. **Flow map** showing all screens and transitions
3. **Interaction specs** for non-obvious behaviors (hover states, loading, error)
4. **Content inventory** of all copy in the prototype
5. **User testing results** summarizing what was validated
6. **Known limitations** what the prototype fakes that engineering needs to build for real
7. **Priority guidance** which interactions are essential vs. nice-to-have

### Anti-Pattern: "Just Match the Prototype"

Prototypes cut corners intentionally. Engineering shouldn't replicate those corners. The handoff conversation should cover:
- What was deliberately simplified that needs proper implementation
- Where the prototype's architecture diverges from production patterns
- Which user flows weren't tested and need engineering-side design decisions

---

## Common Prototyping Mistakes

### Over-Building

**Symptom:** Spending 2 weeks on a prototype when the question could be answered in 2 hours.

**Fix:** Ask "what's the minimum fidelity to get an answer?" before starting. Paper prototypes answer more questions than people expect.

### Testing the Wrong Thing

**Symptom:** Beautiful prototype, but the test doesn't answer the real question.

**Fix:** Write your research question before building. Build only what's needed to answer it. Review with a teammate: "Will this prototype let us learn [X]?"

### Premature Fidelity

**Symptom:** High-fidelity mockup for an idea that hasn't been validated conceptually.

**Fix:** Follow the progressive fidelity approach. If you're not sure the concept is right, don't polish it — sketch it and test the concept first.

### Anchoring on the Prototype

**Symptom:** Team becomes emotionally attached to the prototype. "We already built it, let's just ship it."

**Fix:** Remind the team that prototypes are disposable. They exist to learn, not to ship. Frame prototype work as "research" not "development."

### Ignoring Technical Constraints

**Symptom:** Prototype promises interactions that are technically impossible or prohibitively expensive.

**Fix:** Involve engineering in prototype review. Run the feasibility checklist. Better to learn constraints early than after stakeholder buy-in.

### Skipping Testing

**Symptom:** Prototype goes straight to stakeholder review without user validation.

**Fix:** Always test with 3-5 real users before the stakeholder demo. User feedback gives you evidence; stakeholder feedback gives you opinions.
