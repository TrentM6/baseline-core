# Synthesis Methods

> Techniques for turning raw research data into actionable insights — from affinity mapping to atomic research.

**Part of:** [Research & Synthesis](../research-synthesis-skill.md)

---

## Affinity Mapping

### Process

1. **Extract observations:** One finding per sticky note (physical or digital). Use the participant's own words when possible.
2. **Spread them out:** Put all notes where everyone can see them — wall, Miro board, FigJam.
3. **Silent grouping:** Each person moves notes into clusters based on similarity. No talking — this prevents groupthink.
4. **Review clusters:** Discuss what emerged. Move notes that don't fit. Split clusters that are too broad.
5. **Label clusters:** Write a descriptive label for each group that captures the theme (not a participant quote — a synthesized observation).
6. **Identify themes:** Step back. What are the 3-7 big themes across all clusters?

### Grouping Strategy

- Group by **behavior** ("users compare prices across tabs"), not by topic ("pricing")
- If a note fits in two groups, it might be revealing a connection between themes
- Groups of 1-2 notes might be outliers — keep them visible but don't force them into a group
- Aim for 5-10 groups. Fewer is too high-level; more is too granular.

### Labeling

**Good labels** summarize the theme as a finding:
- "Users create workarounds because the settings page is buried"
- "First-time users don't understand what the product does"

**Bad labels** are topic buckets:
- "Settings" (too vague — what about settings?)
- "Onboarding" (a category, not a finding)

---

## Thematic Analysis

### Step-by-Step Process

**1. Familiarize:** Read through all research notes and transcripts. Note initial impressions but don't code yet.

**2. Generate codes:** Go through the data systematically. Tag each relevant segment with a short code.
- "P3 said 'I always forget where that setting is'" → Code: **navigation-difficulty**
- "P5 opened the help doc before trying the feature" → Code: **low-discoverability**

**3. Search for themes:** Group related codes together. A theme captures something important about the data in relation to the research question.

**4. Review themes:** Check each theme against the coded data. Does the data support this theme? Is anything missing? Merge themes that overlap. Split themes that are too broad.

**5. Define and name themes:** Write a clear definition for each theme. The name should be descriptive and specific.

**6. Report:** Weave themes into a coherent narrative that answers the research questions.

### Coding Tips

- Code generously first, then refine — it's easier to merge than to miss something
- Use in-vivo codes (participant's exact words) when they're particularly vivid
- Track frequency but don't over-rely on it — something said by 1 person can be as important as something said by 5 if it reveals a structural issue
- Maintain a codebook so the team uses consistent codes

---

## Insight Hierarchy

### Levels

```
Observations → Patterns → Insights → Implications
```

**Observations:** What happened (raw data)
- "3 of 5 participants couldn't find the export button"

**Patterns:** What keeps happening (grouped observations)
- "Users consistently struggle with actions that aren't visible on the main screen"

**Insights:** Why it matters (interpretation)
- "Our product buries key actions in menus, creating a discoverability gap that causes task failure"

**Implications:** What to do about it (actionable direction)
- "Surface the top 3 actions (export, share, filter) as persistent buttons on the main screen"

### Quality Test for Insights

A strong insight is:
- **Grounded:** Traceable to specific data points
- **Non-obvious:** Goes beyond what was directly stated
- **Actionable:** Points toward a decision or change
- **Specific:** About this product and these users (not a generic truism)

**Weak insight:** "Users want things to be easier"
**Strong insight:** "Enterprise users need bulk actions because they manage 50+ items daily, but our interface only supports one-at-a-time operations, causing them to spend 30+ minutes on what should be a 2-minute task"

---

## "So What?" Laddering

### The Technique

After any finding, ask "So what?" three times. Each answer moves you from observation to insight to action.

**Example:**

**Finding:** "Users don't read the onboarding tooltips."

**So what?** → Users aren't learning about key features during their first session.

**So what?** → First-week retention is low because users don't discover value fast enough.

**So what?** → We need to redesign first-run experience to demonstrate value through action, not explanation.

### When to Use

- After every research session, before writing the report
- During synthesis when you have patterns but not insights
- When stakeholders ask "what does this mean?"
- When a finding feels important but you can't articulate why

---

## Atomic Research

### The Concept

Atomic research treats research findings as reusable building blocks, not locked inside individual reports.

### Structure

Each research "nugget" has four levels:

1. **Experiment:** The research activity (interview, survey, usability test)
2. **Fact:** A specific observation from the experiment ("P3 took 45 seconds to find the export button")
3. **Insight:** An interpretation that spans multiple facts ("Users can't find secondary actions because they expect them in the toolbar, not the menu")
4. **Recommendation:** An action informed by insights ("Move export, share, and archive to a persistent action bar")

### Building a Research Repository

**Tagging system:**
- By user segment (enterprise, SMB, new user, power user)
- By product area (onboarding, checkout, search, settings)
- By research question (discoverability, value perception, workflow efficiency)
- By evidence strength (single mention, pattern across 3+ users, quantitatively validated)

**Storage:**
- Each nugget is its own entry (not buried in a report)
- Cross-linked to the source study and other related nuggets
- Searchable by tag, keyword, date
- Tools: Notion, Dovetail, Airtable, or a simple structured doc

### Benefits

- New team members can search past research instead of repeating it
- Product decisions can cite multiple studies, not just the latest one
- Patterns across studies become visible
- Research ROI increases because each study contributes to cumulative knowledge

---

## Cross-Study Synthesis

### Triangulation

Combine findings from multiple research methods or studies:

| Source | Finding | Confidence |
|--------|---------|-----------|
| User interviews (N=8) | Users struggle with export | High (consistent theme) |
| Support tickets (Q3) | 47 tickets about export | High (quantitative) |
| Analytics (30-day) | Export button CTR 0.3% | High (behavioral data) |

**Triangulated insight:** Export is a validated pain point across qualitative, support, and behavioral data. Confidence is high.

### Building on Previous Research

Before starting new research:
1. Check the research repository for existing findings on this topic
2. Identify what's already known vs. what's still unknown
3. Design the new study to fill gaps, not repeat what's been learned
4. In the report, cite previous findings and note what this study adds

### Contradiction Resolution

When studies disagree:
- Check methodology differences (different user segments? different tasks?)
- Check timing (has the product changed since the earlier study?)
- Check sample (5 interviews vs. 500 survey responses carry different weight)
- Report the contradiction honestly: "Previous research found X. This study found Y. The difference may be explained by Z."

---

## Communicating Research Findings

### Research Readout Structure

1. **Research question** — What we set out to learn (1-2 sentences)
2. **Method** — How we studied it (1-2 sentences)
3. **Key findings** — The 3-5 most important things we learned (bulk of the readout)
4. **Implications** — What this means for the product/business
5. **Recommendations** — Specific next steps
6. **Open questions** — What we still don't know

### Making Findings Stick

- **Use participant quotes.** Real words are more compelling than summaries.
- **Show video clips.** 30 seconds of a user struggling beats 5 minutes of explanation.
- **Use the "headline + evidence" pattern.** State the insight as a headline, then show the supporting data.
- **Limit to 5 findings.** More than 5 and the audience won't remember any of them.
- **Make recommendations concrete.** "Improve discoverability" is vague. "Add a persistent action bar with export, share, and filter" is actionable.

### Research Walls

For ongoing research, maintain a visible research wall (physical or digital):
- Current themes with supporting evidence
- User quotes and photos (with consent)
- Journey maps showing pain points
- Design implications and open questions
- Update it continuously, not just at report time

---

## Common Synthesis Mistakes

### Confirmation Bias

**What it is:** Unconsciously looking for data that supports what you already believe.

**Signs:** Your findings perfectly match your hypothesis. No surprising or contradictory findings. You ignored outliers.

**Fix:** Actively look for disconfirming evidence. Have someone who wasn't in the research sessions review the data independently. Report findings that challenged your assumptions.

### Premature Theming

**What it is:** Deciding on themes before all data is collected or coded.

**Signs:** You name your themes after the first 2 interviews. Later interviews get "fitted" into existing themes rather than generating new ones.

**Fix:** Wait until all data is collected before formal synthesis. Note initial impressions but hold them loosely. Let themes emerge from the data.

### Losing the Voice of the User

**What it is:** Abstracting findings so far that the human behind the data disappears.

**Signs:** Your report reads like a business document with no quotes, no stories, no specifics. Stakeholders can't picture a real person.

**Fix:** Include direct quotes (attributed to anonymized participants). Tell micro-stories: "P3 is a hiring manager who reviews 40 candidates a week. When we asked her to export a filtered list, she..." Ground every insight in a real moment.

### Over-Generalizing

**What it is:** Treating a finding from 5 users as a universal truth.

**Fix:** State your confidence level. "All 5 participants..." is strong. "2 of 5 mentioned..." is a signal, not a conclusion. Be explicit about sample size and limitations.

### Synthesis by Committee

**What it is:** Having too many people in the synthesis session, diluting rigor.

**Fix:** Core synthesis with 2-3 people who were in the research. Broader team for review and implications, not for generating themes.
