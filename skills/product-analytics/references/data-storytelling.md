# Data Storytelling

> Communicating data findings effectively — chart selection, narrative structure, and audience adaptation.

**Part of:** [Product Analytics](../product-analytics-skill.md)

---

## Chart Selection Guide

### Choose by Relationship

| Data Relationship | Best Chart Type | Avoid |
|-------------------|----------------|-------|
| **Trend over time** | Line chart | Pie chart, bar chart for many periods |
| **Comparison** | Bar chart (horizontal for many categories) | Pie chart with 6+ slices |
| **Part-to-whole** | Stacked bar, pie (2-5 segments), treemap | Pie chart with too many slices |
| **Distribution** | Histogram, box plot | Line chart |
| **Correlation** | Scatter plot | Bar chart |
| **Ranking** | Horizontal bar (sorted) | Vertical bar (unsorted) |
| **Geographic** | Map (choropleth, dot map) | Table with location names |
| **Flow/Funnel** | Funnel chart, Sankey diagram | Pie chart |
| **Single value** | Big number with context | Any chart at all |

### Rules of Thumb

- Line charts need a continuous x-axis (usually time)
- Bar charts are for categorical comparisons
- Pie charts: only 2-5 slices, only if they sum to 100%
- Tables are better than charts when users need exact values
- Dual-axis charts confuse people — use two separate charts instead

---

## Annotation Best Practices

### What to Annotate

- **Key events:** Product launches, outages, campaigns, seasonality
- **Inflection points:** Where the trend changed and why
- **Goals/targets:** Reference line showing the target
- **Anomalies:** Spikes or drops that need explanation

### How to Annotate

- Place labels close to the data point, not in a legend far away
- Use concise text (5-10 words max per annotation)
- Don't annotate everything — highlight what's surprising or important
- Use consistent visual treatment (same font, line style, color)

### Making Charts Self-Explanatory

Every chart should answer these without requiring explanation:
1. **What am I looking at?** → Clear, descriptive title
2. **What's the takeaway?** → Subtitle with the insight
3. **What do the values mean?** → Labeled axes, units specified
4. **What's the context?** → Annotations for key events, reference lines for targets

**Example title structure:**
- Descriptive: "Monthly Active Users, Jan 2024 – Dec 2024"
- Insight-driven: "Monthly Active Users grew 34% after onboarding redesign"
- The second format is almost always better for stakeholder presentations

---

## Dashboard Design Principles

### Information Hierarchy

**Top level:** The 3-5 numbers that answer "how are we doing?"
**Second level:** Trend lines and breakdowns that explain the top-level numbers
**Third level:** Detail tables and drill-downs for investigation

### Layout Principles

- Most important metrics in the top-left (where eyes go first)
- Group related metrics together
- Consistent time periods across all charts on a dashboard
- Limit to 6-8 charts per view — more than that, use tabs or pages

### Progressive Disclosure

- Start with summary → click to expand details
- Filters let users explore without cluttering the default view
- Tooltips for additional context on hover
- Link to deeper analysis from dashboard cards

### Dashboard Anti-Patterns

- **Data dump:** Every metric available, none highlighted
- **No context:** Numbers without goals, benchmarks, or trends
- **Stale data:** Dashboard shows last month when you need yesterday
- **Vanity metrics:** Big numbers that look impressive but don't drive decisions

---

## Narrative Structure for Data Presentations

### Situation → Complication → Resolution

**Situation:** "Here's where we are" — Establish the baseline with data.

**Complication:** "Here's what changed or what's concerning" — Show the gap, trend, or problem.

**Resolution:** "Here's what we should do" — Recommend action with evidence.

**Example:**
1. **Situation:** "Our signup-to-activation rate has been steady at 35% for 6 months."
2. **Complication:** "In the last 4 weeks, it dropped to 28%. The drop correlates with the new onboarding flow launched on March 1."
3. **Resolution:** "We should A/B test the original flow against the new one. If the old flow wins, revert. The cost of the current drop is ~$45K/month in lost revenue."

### The Pyramid Principle

Lead with the conclusion, then support it:

1. **Answer first:** "We should invest in mobile — it's our fastest-growing and most profitable channel."
2. **Supporting arguments:** Traffic growth, conversion rates, revenue per user
3. **Evidence:** Charts, data points, trends

Don't make stakeholders wait for the punchline. They should know your recommendation by slide 2.

### Storytelling Arc for Longer Presentations

1. **Hook** — Start with a surprising data point or question
2. **Context** — Set the scene with relevant background data
3. **Findings** — Walk through what the data shows (3-5 key points)
4. **So what** — Interpret the findings: what does this mean?
5. **Now what** — Recommend specific actions
6. **Ask** — State what you need from the audience (decision, resources, alignment)

---

## Presenting to Different Audiences

### Executive / C-Suite

- **Lead with:** Business impact (revenue, growth, risk)
- **Depth:** Summary only — 3-5 key metrics, one recommendation
- **Format:** One-pager or 5-slide deck maximum
- **Language:** Dollars, percentages, market position
- **What they care about:** "Should I worry?" and "What should we do?"
- **Avoid:** Methodology details, statistical terms, too many charts

### Product Managers

- **Lead with:** User behavior and product metrics
- **Depth:** Moderate — show trends, segments, experiment results
- **Format:** 10-15 slide deck with appendix for details
- **Language:** Feature names, user segments, funnels
- **What they care about:** "What should we build/change?" and "What did users do?"
- **Avoid:** Raw SQL, implementation details

### Engineering Teams

- **Lead with:** What needs to change and why
- **Depth:** Detailed — include data methodology, edge cases
- **Format:** Working doc or wiki, linked from ticket
- **Language:** Technical metrics (latency, error rates, query performance)
- **What they care about:** "What's broken?" and "Is the fix working?"
- **Avoid:** Business jargon without context

### Marketing / Growth

- **Lead with:** Channel performance, campaign impact, audience insights
- **Depth:** Moderate — focus on segments, attribution, trends
- **Format:** Slide deck with visual emphasis
- **Language:** CAC, conversion rates, channel names, audience segments
- **What they care about:** "What's working?" and "Where should we spend?"
- **Avoid:** Product-specific metrics without marketing context

---

## Common Data Presentation Mistakes

### Mistake 1: Data Without Interpretation

Showing a chart and saying "here's the data" without telling the audience what it means. Every chart needs a "so what."

**Fix:** Add an insight headline to every chart: "Conversion dropped 15% after the redesign — concentrated in mobile."

### Mistake 2: Too Much Data

Showing every data point you looked at instead of the ones that matter.

**Fix:** Curate ruthlessly. Ask: "Does this chart advance my argument?" If not, move it to the appendix.

### Mistake 3: Misleading Scales

Truncated y-axes, inconsistent date ranges, or cherry-picked time periods.

**Fix:** Start y-axis at zero for bar charts. Use consistent time ranges. If you zoom in, label it clearly.

### Mistake 4: No Comparison Point

A metric without context is meaningless. "We had 10,000 signups" — is that good?

**Fix:** Always provide comparison: vs. last period, vs. target, vs. benchmark, vs. cohort.

### Mistake 5: Correlation Presented as Causation

"Users who complete onboarding have higher retention" doesn't mean onboarding causes retention.

**Fix:** Be precise about language. "Correlated with" not "caused by." Mention confounders. Use experiments to establish causation.

---

## Data-to-Decision Bridge

### The Framework

Data → Insight → Implication → Recommendation → Decision

| Step | Question | Example |
|------|----------|---------|
| **Data** | What does the data show? | "Mobile conversion is 2.1% vs. 4.8% desktop" |
| **Insight** | Why does this matter? | "Mobile users want to buy but the experience is losing them" |
| **Implication** | What does this mean for us? | "We're leaving ~$120K/month on the table from mobile" |
| **Recommendation** | What should we do? | "Invest 1 sprint in mobile checkout optimization" |
| **Decision** | What are we deciding? | "Do we prioritize mobile checkout this quarter?" |

### Making Recommendations Actionable

Every recommendation should specify:
- **What** to do (specific action)
- **Why** (linked to data)
- **How much** effort (rough sizing)
- **Expected impact** (projected improvement, even if rough)
- **How to measure** success (what metric, what target)

Bad: "We should improve mobile."
Good: "Optimize mobile checkout flow (est. 1 sprint). Based on funnel analysis, fixing the payment step alone could recover 40% of mobile drop-off, worth ~$48K/month."
