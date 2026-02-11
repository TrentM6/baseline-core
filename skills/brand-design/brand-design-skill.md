---
name: brand-design
description: Create visual brand elements including presentations, graphics, diagrams, and brand assets. Use for slide decks, social graphics, diagrams, infographics, and brand-consistent visual work.
---

# Brand Design

Brand design creates visual consistency and recognition. Every visual touchpoint — from presentations to social graphics to diagrams — should reinforce the brand identity and communicate clearly.

---

## Core Principles

1. **Consistency is the foundation.** Every visual should feel like it came from the same source. Consistency builds recognition and trust.

2. **Design serves communication.** Graphics, presentations, and diagrams exist to communicate ideas. If the design obscures the message, it's failed.

3. **Restraint is sophisticated.** Premium brands don't scream for attention. They command it through restraint and intentionality.

4. **Templates enable speed.** Well-built templates let you move fast without sacrificing quality. Invest in systems.

5. **Know the context.** A LinkedIn graphic has different requirements than a board presentation. Design for where it will live.

6. **Less, better.** Fewer elements, more impact. Remove until it breaks, then add one thing back.

### Industry Principles

7. **Visual hierarchy guides attention.** Size, color, and position direct where people look and in what order.

8. **White space is active.** Empty space isn't wasted space. It creates focus and breathing room.

9. **Consistent color builds recognition.** Use brand colors consistently. Don't introduce new colors without reason.

10. **Typography carries voice.** Font choices and treatment communicate tone. Match type to message.

11. **Accessibility matters.** Sufficient contrast, readable sizes, and colorblind-safe palettes make design inclusive.

12. **File formats serve purpose.** PNG for transparency, JPG for photos, SVG for icons, PDF for documents.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the brand design-specific details for each step.

### 1. Clarify Before Starting

Before any brand design work, answer:

- **What's the deliverable?** Presentation, graphic, diagram, icon?
- **Where will this live?** LinkedIn, Notion, email, print, presentation?
- **What's the message?** Core idea to communicate
- **Who's the audience?** What do they need to understand?
- **What brand assets exist?** Logo, colors, fonts, templates
- **What are the specs?** Size, format, resolution requirements

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Brand positioning, terminology
- `core/voice.md` — Tone, language rules

**Extended context (load for brand design):**
- `extended/visual-identity.md` — Colors, fonts, typography, components
- Brand guidelines if they exist (logo usage, additional assets)

**Load when needed:**
- [Visual Design Fundamentals](references/visual-design-fundamentals.md) — Design principles, color theory
- Existing brand materials (for pattern consistency)
- Templates for the deliverable type

### 3. Choose the Right Approach

| Deliverable | Key Considerations |
|-------------|-------------------|
| Presentation | Story flow, one idea per slide, visual hierarchy |
| Social graphic | Attention-grabbing, works at small size, single message |
| Diagram | Clarity over decoration, logical flow, labeled elements |
| Infographic | Data accuracy, scannable, visual interest |
| Brand asset | Versatility, scalability, consistent with system |
| Document | Readability, professional, consistent formatting |

### 4. Design Process

**For Presentations:**
1. Outline story structure first
2. One idea per slide
3. Visual hierarchy — make the point obvious
4. Speaker talks, slides support
5. Use master slides for consistency
6. Review for consistency and flow

**For Graphics:**
1. Start with the message (what's the one thing?)
2. Sketch the concept before tools
3. Work at final dimensions
4. Apply brand elements consistently
5. Check at smaller sizes (mobile, feed)
6. Export in correct format

**For Diagrams:**
1. Understand what you're explaining
2. Identify elements and relationships
3. Choose the right type (flowchart, process, etc.)
4. Prioritize clarity over decoration
5. Label everything
6. Test: can someone understand this without explanation?

---

## Design Types

### Presentations

**Structure:**
- Opening: Title, context, agenda
- Body: One idea per slide, logical build
- Closing: Summary, next steps, contact

**Slide Principles:**
- Title at top (consistent position)
- Headlines, not paragraphs (6 words max guideline)
- No more than 6 lines per slide
- Visual hierarchy guides the eye
- Full-bleed images when impactful

**Slide Types:**
- Title slide: Topic, context, date
- Section divider: Section name, visual break
- Content slide: Title + supporting content
- Quote slide: Quote large, attribution small
- Data slide: Chart + key takeaway headline
- Image slide: Full/large image, minimal text

### Social Graphics

**Dimensions:**
- LinkedIn: 1200x627px
- Twitter/X: 1200x675px
- Instagram square: 1080x1080px
- Instagram story: 1080x1920px

**Principles:**
- Design at final dimensions
- Test at smaller preview sizes
- One clear message
- Text readable at feed size
- Brand colors/elements consistent

### Diagrams

**Types:**
- Flowchart: Process flow, decision trees
- Org chart: Hierarchy, structure
- Process diagram: Steps in sequence
- Concept map: Relationships between ideas
- Timeline: Events over time
- Venn diagram: Overlapping categories

**Principles:**
- Clarity first — could someone understand without explanation?
- Labels on everything
- Consistent shapes for same types
- Color used purposefully (not decoratively)
- White space aids comprehension

---

## Visual Elements

### Color Usage

**Primary colors:** Main elements, CTAs, emphasis
**Secondary colors:** Support, variety without clashing
**Neutral colors:** Backgrounds, text, dividers
**Accent colors:** Sparingly, for highlight

### Typography

**Hierarchy:**
- Display/Title: Largest, boldest
- Heading: Clear section markers
- Body: Readable at length
- Caption: Smallest, supporting

### File Management

**Naming:** `[project]-[type]-[description]-[version].[ext]`

Example: `client-presentation-quarterly-review-v2.pptx`

**Export Formats:**
| Format | Use For |
|--------|---------|
| PNG | Graphics with transparency |
| JPG | Photos, complex images |
| SVG | Icons, simple graphics, scalable |
| PDF | Documents, presentations for sharing |
| PPT/PPTX | Editable presentations |

**PDF from HTML/CSS:** If the deliverable was authored as styled HTML/CSS (whitepapers, branded documents, reports), use the [html-to-pdf](../../scripts/file-system/html-to-pdf.md) script to convert to PDF with full CSS fidelity.

---

## Quality Checks

### Brand Consistency

- [ ] Uses correct brand colors?
- [ ] Uses correct brand fonts?
- [ ] Follows established visual patterns?
- [ ] Logo used correctly (if applicable)?

### Communication Quality

- [ ] Main message immediately clear?
- [ ] Visual hierarchy guides the eye correctly?
- [ ] Not too cluttered or busy?
- [ ] Text readable at intended size?

### Technical Quality

- [ ] Correct dimensions for intended use?
- [ ] Sufficient resolution/quality?
- [ ] Exported in appropriate format?
- [ ] File size reasonable?

### Accessibility Quality

- [ ] Color contrast sufficient (4.5:1 for text)?
- [ ] Text large enough to read?
- [ ] Doesn't rely solely on color to convey meaning?
- [ ] Alt text provided for images (if applicable)?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Off-brand colors** | Inconsistency, confusion | Use brand palette only |
| **Too much text** | Slides aren't documents | Headlines, not paragraphs |
| **Decorative elements** | Distract from message | Every element has a job |
| **Inconsistent styling** | Looks amateur | Use templates, match patterns |
| **Wrong dimensions** | Gets cropped or distorted | Design at final size |
| **Low resolution** | Looks unprofessional | Export at correct quality |
| **Gratuitous animations** | Annoying, distracting | Purposeful transitions only |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Create presentations | Brand Design | Copywriting (visuals, not just words) |
| Design social graphics | Brand Design | Marketing (visual execution) |
| Create diagrams | Brand Design | Technical Documentation (visual, not text) |
| Write website copy | Marketing or Copywriting | Brand Design (words, not visuals) |
| Design interfaces | UX Design | Brand Design (interaction, not static) |
| Create brand guidelines | Brand Design | Marketing (visual standards) |

---

## Output Expectations

**Presentation:** Consistent template, one idea per slide, clear visual hierarchy, professional polish

**Social graphic:** Correct dimensions, readable at feed size, clear message, brand-consistent

**Diagram:** Immediately understandable, properly labeled, logical flow, clean design

**Brand asset:** Versatile, scalable, consistent with brand system, properly formatted

---

## When to Escalate

Flag for review when:

- New brand elements not covered by guidelines
- High-visibility materials (investor decks, major announcements)
- Significant departures from established visual patterns
- Client work where brand guidelines are unclear
- Print materials (different considerations than digital)
- Legal or compliance-sensitive content
