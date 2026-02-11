# Prototyping Tools Reference

Quick reference for selecting the right prototyping tool based on needs.

---

## Tool Categories

### Design-Based (No Code)

**Figma Prototyping**
- Best for: Clickable wireframes, user testing, team collaboration
- Strengths: Easy to learn, design + prototype in one place, shareable links
- Limitations: Limited interactivity (no real data, basic transitions)
- When to use: Most user testing, stakeholder alignment, early validation

**Framer**
- Best for: High-fidelity interactive prototypes, complex animations
- Strengths: Code-like power without coding, excellent interactions
- Limitations: Learning curve, can get complex
- When to use: When interaction feel matters, design-engineering bridge

**Principle / Protopie**
- Best for: Micro-interactions, animation prototyping
- Strengths: Detailed timing control, sensor inputs
- Limitations: Not for full flows, specialized
- When to use: Testing specific interaction feel

### No-Code Builders

**Webflow**
- Best for: Marketing sites, content-heavy pages, CMS-driven
- Strengths: Real responsive sites, visual development, hosting included
- Limitations: Complex logic, forms beyond basics
- When to use: Landing pages, marketing POCs, simple sites

**Bubble**
- Best for: Data-driven apps, workflows, forms
- Strengths: Database, user auth, integrations built-in
- Limitations: Performance, scalability, lock-in
- When to use: Internal tools, MVPs with data requirements

**Glide / Softr**
- Best for: Simple apps from spreadsheets
- Strengths: Extremely fast, familiar data model
- Limitations: Limited customization, mobile-first
- When to use: Quick internal tools, simple CRUD apps

### Code-Based

**HTML/CSS/JS (Vanilla)**
- Best for: Simple interactions, maximum control, broad compatibility
- Strengths: No dependencies, runs anywhere, full flexibility
- Limitations: Manual work, no component reuse without effort
- When to use: One-off prototypes, simple landing pages

**React / Vue / Svelte**
- Best for: Component-based prototypes, reusable elements
- Strengths: Production patterns, component libraries, ecosystem
- Limitations: Setup overhead, requires JavaScript knowledge
- When to use: Prototypes that might inform production, complex UIs

**Tailwind + Alpine.js**
- Best for: Rapid styled prototypes with simple interactivity
- Strengths: Fast styling, lightweight interactions, no build step needed
- Limitations: Not for complex state management
- When to use: Quick coded prototypes, landing pages with interaction

**Next.js / Remix**
- Best for: Full-stack prototypes, API integration
- Strengths: Real routing, data fetching, production-like
- Limitations: Heavier setup, more to learn
- When to use: POCs requiring backend, integration testing

---

## Decision Matrix

| Need | Recommended Tool |
|------|------------------|
| User testing a flow | Figma Prototyping |
| Complex interaction feel | Framer |
| Marketing landing page | Webflow |
| Data-driven internal tool | Bubble |
| Technical feasibility | Code (match production stack) |
| Investor demo | Figma or Framer (visual polish) |
| Engineering handoff | Code (production stack) |
| Quick internal tool | Glide/Softr + Spreadsheet |
| Animation/micro-interaction | Principle or Framer |

---

## Fidelity vs. Speed Trade-offs

```
                    HIGH FIDELITY
                         │
         Framer          │          Coded (React)
                         │
    ─────────────────────┼─────────────────────
                         │
         Figma           │          HTML/CSS/JS
                         │
                    LOW FIDELITY

    FAST ────────────────┼──────────────── SLOWER
                         │
```

---

## Tool Selection Questions

1. **Who's the audience?**
   - Users → Figma or Framer (realistic but controlled)
   - Stakeholders → Framer or coded (polished, impressive)
   - Engineers → Coded in their stack (handoff-ready)

2. **What's being tested?**
   - Flow/navigation → Figma
   - Interaction feel → Framer or coded
   - Technical feasibility → Coded
   - Visual design → Figma or Framer

3. **What's the timeline?**
   - Hours → Figma
   - Days → Framer or simple code
   - Week+ → Coded prototype

4. **What happens after?**
   - Throw away → Fastest tool
   - Iterate → Framer or Figma (design tools)
   - Hand to engineering → Coded in their stack

---

## Quick Start Recommendations

**Default choice:** Figma Prototyping
- Covers 70% of prototyping needs
- Team already knows it
- Fast iteration, easy sharing

**When to go beyond Figma:**
- Interaction timing matters → Framer
- Need real data → Bubble or coded
- Technical proof needed → Coded
- Marketing page → Webflow
- Engineering wants to build on it → Code in their stack
