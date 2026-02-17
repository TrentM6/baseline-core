# Presentation Patterns

> Slide design, deck structure, data visualization in slides, and presentation delivery guidance.

**Part of:** [Visual Communication](../visual-communication-skill.md)

---

## Slide Design Patterns

### McKinsey-Style Exhibits

**Structure:**
- **Action title** at top (the takeaway, not a label)
- **Visual evidence** in the body (chart, diagram, framework)
- **Source line** at bottom

**Action title examples:**
- Bad: "Revenue by Segment" (label — says what, not so what)
- Good: "Enterprise segment drives 68% of revenue growth" (insight — says so what)

**Rules:**
- One point per slide
- Title should work as a standalone summary
- Body provides evidence for the title
- If someone reads only the titles, they should get the full story

### Data-Heavy Slides

**When the data IS the point:**
- Large chart occupying 70% of the slide
- Insight headline describing what the data shows
- Annotations on the chart pointing to key data points
- Minimal surrounding text

**When data supports a point:**
- Smaller chart (40-50% of slide)
- Key number called out in large type
- Brief supporting text explaining the implication
- The number/insight is the hero, not the chart

### Narrative Slides

**For story-driven moments:**
- Large text with one quote or key statement
- Minimal visual decoration
- Full-bleed image with text overlay (ensure contrast)
- Used sparingly — 1-2 per deck for emphasis

### Comparison Slides

**Side-by-side:**
```
┌─────────────────┬─────────────────┐
│ Current State    │ Future State     │
│                  │                  │
│ [Problem visual] │ [Solution visual]│
│                  │                  │
│ Key pain points  │ Key improvements │
└─────────────────┴─────────────────┘
```

**Before/After:**
- Left: screenshot or metric showing the problem
- Right: screenshot or metric showing the improvement
- Clear visual distinction (red/green, old/new)

---

## Deck Structures by Audience

### Board / Investor Deck

**Slide count:** 10-15
**Tone:** Strategic, data-driven, forward-looking

1. Title + one-sentence positioning
2. Market opportunity (size, trends)
3. Problem (specific, quantified)
4. Solution (your approach, differentiation)
5. Traction (metrics, growth, milestones)
6. Business model (unit economics, revenue)
7. Competitive landscape (positioning map)
8. Team (key people, relevant experience)
9. Financial projections (3-year view)
10. The ask (funding, partnership, decision)

### Executive Review

**Slide count:** 5-10
**Tone:** Concise, decision-oriented

1. Executive summary (everything on one slide)
2. Performance against goals (dashboard-style)
3. Key insight or finding (the one thing they need to know)
4. Options or recommendation (with tradeoffs)
5. Next steps and ask

### Team / Sprint Review

**Slide count:** 5-8
**Tone:** Collaborative, honest, grounded

1. Sprint goal recap
2. What shipped (demos or screenshots)
3. Key metrics (if measurable)
4. What we learned
5. What's next
6. Open questions for the team

### Customer-Facing / Sales

**Slide count:** 10-15
**Tone:** Customer-centric, outcomes-focused

See [Sales Enablement](../../go-to-market-planning/references/sales-enablement.md) for the full narrative structure.

---

## Slide Layouts That Work

### Title + Body

```
┌──────────────────────────────────┐
│ Action Title (Takeaway)          │
│                                  │
│ • Body content                   │
│ • Supporting points              │
│ • Evidence or detail             │
│                                  │
└──────────────────────────────────┘
```

**Best for:** Most content slides. Keep body to 3-5 points maximum.

### Title + Visual

```
┌──────────────────────────────────┐
│ Action Title (Takeaway)          │
│                                  │
│       ┌──────────────┐           │
│       │              │           │
│       │   Chart /    │           │
│       │   Diagram    │           │
│       │              │           │
│       └──────────────┘           │
└──────────────────────────────────┘
```

**Best for:** Data slides, frameworks, process diagrams.

### Full-Bleed Image

```
┌──────────────────────────────────┐
│                                  │
│   [Photo/Image fills the slide]  │
│                                  │
│         Text Overlay             │
│                                  │
└──────────────────────────────────┘
```

**Best for:** Section dividers, emotional moments, quotes. Ensure text contrast.

### Data + Takeaway

```
┌──────────────────────────────────┐
│ Insight Headline                 │
│                                  │
│ ┌────────────┐  Key number: 34% │
│ │            │                   │
│ │   Chart    │  Brief text       │
│ │            │  explaining the   │
│ │            │  implication       │
│ └────────────┘                   │
└──────────────────────────────────┘
```

**Best for:** When you need to show the data AND explain what it means.

---

## Data Slide Design

### Chart + Headline Insight

Every data slide needs:
1. **Insight headline** that states what the chart shows (not what the chart is)
2. **Clean chart** with minimal gridlines, no 3D effects, clear labels
3. **Annotation** on the most important data point
4. **Source** if the data comes from external research

### Simplification Rules

- Remove gridlines (use light lines only if necessary)
- Remove chart borders
- Reduce colors to 2-3 (highlight the important series, gray out the rest)
- Remove legends if you can label directly on the chart
- Round numbers (say "~35%" not "34.7%")
- Remove decimal points unless precision matters

### Annotation Guide

**Annotate:**
- The data point your title references
- Inflection points (where trends change)
- Events that caused changes (launches, outages, campaigns)
- Goals or targets (reference line with label)

**Don't annotate:**
- Every data point (the chart does that)
- Obvious trends (the visual is clear)
- Information that belongs in the narrative, not the chart

---

## Animation and Transition Guidance

### When to Use Animation

**Progressive disclosure:**
- Revealing a complex framework one piece at a time
- Building a story through sequential data points
- Controlling the audience's attention during a live presentation

**Transition between sections:**
- Subtle fade or slide to mark a new topic
- Keep consistent throughout the deck

### When NOT to Use Animation

- Printed or shared decks (animations don't work in PDF)
- Decks that will be read async (the reader controls the pace)
- When the content is straightforward and doesn't benefit from sequencing
- For decoration — if the animation doesn't serve communication, remove it

### Animation Rules

- One animation style per deck (all fades, all appears, etc.)
- Fast duration (0.3-0.5 seconds) — never slow builds
- Click-to-advance, not auto-timed
- Test on the actual presentation equipment before presenting

---

## Slide Master / Template Design

### Consistency Elements

- **Font:** One typeface family for the entire deck. Two max (heading + body).
- **Colors:** Brand palette + 1-2 data colors + gray for de-emphasis.
- **Grid:** Consistent margins and alignment. Most elements should snap to the same grid.
- **Spacing:** Consistent padding between sections and elements.

### Master Slide Set (Minimum Viable)

1. **Title slide** — Project/presentation name, date, audience
2. **Section divider** — Section name, optional subtitle
3. **Content slide** — Title + body text area
4. **Visual slide** — Title + large visual/chart area
5. **Two-column** — Title + side-by-side content
6. **Data slide** — Title + chart + insight callout
7. **Quote slide** — Large text with attribution
8. **Closing slide** — Summary, next steps, contact

### Brand Application

- Logo on title and closing slides only (not every slide)
- Brand colors used for emphasis, not decoration
- Template should feel clean and professional, not branded to the point of distraction
- Consistent footer: date, page number, confidentiality if needed

---

## Presentation Delivery

### Speaker Notes

- Write notes as prompts, not scripts
- Include the key points to hit (not the exact words to say)
- Note transitions: "After this slide, pause and ask the audience..."
- Include timing targets for key sections

### Pacing

| Deck Length | Presentation Time | Slides per Minute |
|-------------|------------------|-------------------|
| 5 slides | 10-15 min | ~2-3 min/slide |
| 10 slides | 20-30 min | ~2-3 min/slide |
| 15 slides | 30-45 min | ~2-3 min/slide |
| 20+ slides | Budget 45-60 min | Some slides go fast, key slides take 3-5 min |

**Rule of thumb:** 2-3 minutes per content slide. Section dividers and title slides take seconds.

### Q&A Preparation

- Anticipate the 5 hardest questions and prepare answers
- "I don't have that data, but I'll follow up" is fine — better than guessing
- If a question takes you off-topic, offer to address it after
- End Q&A with a summary, not with the last question

---

## Common Presentation Anti-Patterns

### The Wall of Text

**Problem:** Slides with full paragraphs that the presenter reads aloud.
**Fix:** One point per slide. If you need detail, put it in a leave-behind document.

### Death by Bullet Points

**Problem:** Every slide is a bulleted list.
**Fix:** Mix layouts — charts, visuals, quotes, frameworks. Bullets are fine for some slides, not all.

### The Data Dump

**Problem:** Chart after chart with no narrative connecting them.
**Fix:** Each data slide needs an insight headline. The sequence should tell a story.

### Inconsistent Design

**Problem:** Different fonts, colors, layouts from slide to slide (often from merging decks).
**Fix:** Use a template. Before presenting, do a full pass for visual consistency.

### No Clear Ask

**Problem:** Presentation ends with "any questions?" instead of a clear next step.
**Fix:** End with a specific ask: "We need your decision on [X] by [date]" or "Our recommendation is [Y] — do we have alignment?"

### Trying to Cover Everything

**Problem:** 40-slide deck for a 30-minute meeting.
**Fix:** Ruthlessly cut to essential slides. Move detail to appendix. Your job is to communicate, not to demonstrate thoroughness.
