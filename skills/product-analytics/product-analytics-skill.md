---
name: product-analytics
description: Define metrics, analyze product data, and drive data-informed decisions. Use for KPI definition, success metrics, dashboard design, A/B test analysis, funnel analysis, and usage reporting.
---

# Product Analytics

Product analytics is the discipline of measuring what matters and turning data into decisions. Not just tracking everything — defining the right metrics, understanding what the numbers mean, and using data to improve the product. It's the quantitative complement to qualitative research.

---

## Core Principles

1. **Metrics serve decisions.** A metric that doesn't inform a decision is vanity. Every metric should answer a question or trigger an action.

2. **Measure outcomes, not outputs.** "Features shipped" is output. "User problems solved" is outcome. Optimize for what actually matters.

3. **Leading indicators over lagging.** Revenue is lagging — you find out too late. Leading indicators (activation, engagement) let you act sooner.

4. **Fewer metrics, better understood.** A dashboard with 50 metrics means none of them matter. Ruthlessly prioritize.

5. **Correlation is not causation.** Data shows what happened, not why. Pair quantitative analysis with qualitative research for the full picture.

6. **Segment everything.** Averages hide insights. The average user doesn't exist. Break down by user type, cohort, behavior.

7. **Data quality is non-negotiable.** Wrong data is worse than no data. Validate tracking, audit regularly, document definitions.

### Industry Principles

8. **North Star metric matters.** One metric that captures the core value your product delivers. Everything else ladders up.

9. **Funnels reveal friction.** Where do users drop off? Conversion funnels expose the biggest opportunities.

10. **Retention is the ultimate test.** Acquisition is vanity, retention is sanity. If users don't come back, nothing else matters.

11. **A/B tests require rigor.** Statistical significance, sample size, runtime — don't call experiments early or make decisions on noise.

12. **Instrumentation is investment.** Good analytics requires good event tracking. Invest in the foundation.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../_FRAMEWORKS/workflow-orchestration.md) for the universal workflow approach. Below are the analytics-specific details for each step.

### 1. Clarify Before Starting

Before any analytics work, answer:

- **What decision are we trying to make?** Ship/don't ship, prioritize, optimize?
- **What question are we answering?** Specific question, not "how's the product doing?"
- **What data do we have?** Existing tracking, data quality, known gaps
- **Who is the audience?** Executives, PMs, engineers, the whole team?
- **What time frame?** Point in time, trend, cohort?
- **What action will result?** If the number is X, what do we do differently?

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Product, users, terminology
- `core/voice.md` — Tone for reporting

**Load when needed:**
- [Metrics Framework](references/metrics-framework.md) — North Star, HEART, pirate metrics
- [Research & Synthesis Skill](../research-synthesis/research-synthesis-skill.md) — For pairing qual with quant
- [Strategic Advisory Skill](../strategic-advisory/strategic-advisory-skill.md) — For strategic metric decisions
- Existing metrics definitions and dashboards

### 3. Choose the Right Analysis Type

| Question | Analysis Type | Output |
|----------|---------------|--------|
| How is the product performing? | Health metrics | Dashboard, report |
| Where do users drop off? | Funnel analysis | Conversion funnel |
| Are users coming back? | Retention analysis | Retention curves |
| Did this change work? | A/B test analysis | Experiment report |
| Who are our best users? | Segmentation | User segments |
| What predicts success? | Correlation analysis | Success indicators |
| How did this launch go? | Launch analysis | Impact report |

### 4. Define Metrics

**Before measuring, define:**

1. **What exactly are we measuring?** Precise definition
2. **How is it calculated?** Formula, inclusions/exclusions
3. **Where does the data come from?** Source, tracking event
4. **What's the timeframe?** Daily, weekly, monthly, rolling
5. **How is it segmented?** By user type, platform, cohort
6. **What's a good number?** Benchmark, target, threshold

**Document in a metrics dictionary:**
```
Metric: Active Users (DAU)
Definition: Unique users who performed a core action in a 24-hour period
Calculation: COUNT(DISTINCT user_id) WHERE core_action = true AND date = [date]
Source: events.core_actions table
Timeframe: Daily, reported next-day
Segments: Platform (web/iOS/Android), User type (free/paid), Cohort
Benchmark: 10,000 DAU baseline, 15% week-over-week growth target
```

### 5. Build Analysis

**For dashboards:**
1. Start with the questions it should answer
2. Prioritize ruthlessly (3-7 metrics max per view)
3. Add context (benchmarks, trends, not just numbers)
4. Make it actionable (what should viewer do with this info?)

**For reports:**
1. Lead with the insight, not the methodology
2. Show the data that supports the insight
3. Acknowledge limitations and caveats
4. End with recommendations and next steps

**For A/B tests:**
1. State hypothesis before looking at data
2. Check statistical significance (95% confidence minimum)
3. Verify sample size is sufficient
4. Look at guardrail metrics (did we break anything?)
5. Consider segments (did it work for everyone?)

### 6. Present Findings

**Structure:**
1. **Bottom line:** What should they know/do? (first)
2. **Context:** Why does this matter?
3. **Data:** What does the data show?
4. **Caveats:** What are the limitations?
5. **Recommendation:** What action should we take?

**Principles:**
- Insight before data (don't make them hunt)
- Visualize appropriately (chart type matters)
- Provide comparison (vs. benchmark, vs. last period)
- Acknowledge uncertainty (confidence intervals, caveats)

---

## Metric Types

### North Star Metric

**Purpose:** Single metric that captures the core value your product delivers.

**Characteristics:**
- Measures value delivered to customers
- Leading indicator of revenue
- Actionable by the product team
- Understandable across the company

**Examples:**
| Product Type | North Star |
|--------------|------------|
| Marketplace | Transactions completed |
| SaaS | Weekly active users |
| Media | Time spent consuming |
| E-commerce | Purchases |
| Social | Content shared |

### Input Metrics (Leading)

**Purpose:** Metrics that drive the North Star. Actionable levers.

**Common input metrics:**
- Activation rate (new users who reach value)
- Feature adoption (users using key feature)
- Engagement frequency (sessions per week)
- Task completion rate

### Health Metrics (Guardrails)

**Purpose:** Ensure you're not breaking things while optimizing.

**Common health metrics:**
- Error rates
- Page load time
- Support ticket volume
- Unsubscribe rate
- Churn rate

### Pirate Metrics (AARRR)

| Stage | Metric | Question |
|-------|--------|----------|
| **Acquisition** | Sign-ups, visits | How do users find us? |
| **Activation** | Activation rate | Do they have a good first experience? |
| **Retention** | Retention rate, DAU/MAU | Do they come back? |
| **Revenue** | Conversion, ARPU | Do they pay? |
| **Referral** | NPS, viral coefficient | Do they tell others? |

### HEART Framework (UX Metrics)

| Dimension | Example Metrics |
|-----------|-----------------|
| **Happiness** | Satisfaction (CSAT), NPS |
| **Engagement** | Session length, actions per session |
| **Adoption** | New users of feature, % using feature |
| **Retention** | Return rate, churn |
| **Task Success** | Completion rate, time to complete, error rate |

---

## Analysis Types

### Funnel Analysis

**Purpose:** Understand where users drop off in a flow.

**Process:**
1. Define the steps (e.g., Visit → Sign up → Activate → Purchase)
2. Measure conversion at each step
3. Identify biggest drop-offs
4. Segment to find patterns (who drops off?)
5. Prioritize improvements by impact

**Output:**
```
Funnel: Onboarding
Step 1: Landing page → Sign up: 12% conversion
Step 2: Sign up → Complete profile: 68% conversion
Step 3: Complete profile → First action: 45% conversion ← Biggest drop
Step 4: First action → Return D7: 32% conversion

Insight: Profile → First action has the biggest drop (45%).
Users who complete their first action within 24 hours retain 2x better.
Recommendation: Reduce friction to first action, consider guided experience.
```

### Retention Analysis

**Purpose:** Understand if users come back and how often.

**Retention types:**
- **N-day retention:** % of users who return on day N
- **Bounded retention:** % of users who return within N days
- **Rolling retention:** % of users still active after N days

**Cohort analysis:**
- Group users by sign-up week/month
- Track each cohort's retention over time
- Compare cohorts to see if product is improving

**Output:**
```
Cohort: January 2024 sign-ups (n=5,000)
D1 retention: 42%
D7 retention: 28%
D30 retention: 15%

Benchmark: D7 retention for our category is 25%
We're above benchmark, but D30 drop-off is steep.

Insight: Users who activate 2+ features have 3x higher D30 retention.
Recommendation: Focus on driving second feature adoption in first week.
```

### A/B Test Analysis

**Purpose:** Determine if a change improved metrics with statistical confidence.

**Process:**
1. State hypothesis ("Variant B will increase conversion by 10%")
2. Define primary metric and guardrails
3. Calculate required sample size
4. Run test to completion (don't peek and stop early)
5. Analyze results with proper statistics

**Report structure:**
```
Experiment: Simplified checkout flow
Hypothesis: Removing optional fields increases purchase completion
Duration: 14 days
Sample: 25,000 users (12,500 per variant)

Results:
- Control: 3.2% conversion
- Variant: 3.8% conversion
- Lift: +18.7%
- Confidence: 97%
- p-value: 0.023

Guardrails:
- Cart abandonment: No significant change
- Support tickets: No significant change

Recommendation: Ship variant to 100%
```

### Segmentation Analysis

**Purpose:** Understand how different user groups behave differently.

**Common segments:**
- Acquisition source
- User type (free/paid, new/returning)
- Platform (web/mobile/app)
- Geography
- Behavioral cohorts (power users, at-risk)

**Process:**
1. Define segments based on hypothesis
2. Compare key metrics across segments
3. Look for meaningful differences (not just statistically significant)
4. Identify actionable insights

---

## Quality Checks

### Metric Quality

- [ ] Definition is precise and documented?
- [ ] Calculation is correct (spot-checked)?
- [ ] Data source is reliable?
- [ ] Tracking is implemented correctly?
- [ ] Historical data is consistent?

### Analysis Quality

- [ ] Question is clearly stated?
- [ ] Methodology is appropriate?
- [ ] Sample size is sufficient?
- [ ] Statistical significance is verified (where applicable)?
- [ ] Segments are meaningful?
- [ ] Caveats are acknowledged?

### Reporting Quality

- [ ] Insight is clear (not buried)?
- [ ] Data supports the conclusion?
- [ ] Comparisons provide context?
- [ ] Limitations are stated?
- [ ] Recommendations are actionable?
- [ ] Audience-appropriate detail level?

### Data Quality

- [ ] Event tracking validated?
- [ ] No duplicate events?
- [ ] No missing data?
- [ ] Definitions consistent over time?
- [ ] Known issues documented?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Vanity metrics** | Feel good, don't inform decisions | Metrics tied to outcomes and actions |
| **Dashboard overload** | 50 charts, no clarity | Ruthless prioritization, 3-7 key metrics |
| **Peeking at A/B tests** | False positives, wrong decisions | Pre-commit to runtime, use proper stats |
| **Average everything** | Hides segment differences | Segment by user type, behavior, cohort |
| **Data without context** | "We have 10,000 users" — is that good? | Always include benchmark or comparison |
| **Confusing correlation and causation** | "Feature X correlates with retention" ≠ causes | Pair with qual research, run experiments |
| **Ignoring data quality** | Garbage in, garbage out | Validate tracking, audit regularly |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Define success metrics | Product Analytics | Strategic Advisory alone (needs measurement thinking) |
| Understand user behavior | Product Analytics | Research & Synthesis (quant vs. qual) |
| Understand user motivation | Research & Synthesis | Product Analytics (qual for "why") |
| Prioritize roadmap | Strategic Advisory + Product Analytics | May need both |
| Write about metrics | Product Communications | Product Analytics (analysis vs. doc) |
| Design dashboards | Product Analytics | Brand Design (data viz, not aesthetics) |

---

## Output Expectations

**Metrics definition:** Clear definition, calculation, source, benchmark, documented in metrics dictionary

**Dashboard:** Focused (3-7 metrics), contextual (benchmarks, trends), actionable (clear what to do)

**Analysis report:** Insight first, data supporting, caveats acknowledged, recommendations clear

**A/B test report:** Hypothesis, sample size, confidence level, guardrails checked, clear recommendation

**Funnel analysis:** Steps defined, drop-offs quantified, segments examined, priorities identified

---

## When to Escalate

Flag for review when:

- Metrics show significant unexpected movement
- Data quality issues affect analysis reliability
- A/B test results are ambiguous or conflicting
- Metrics definitions need organizational alignment
- Analysis contradicts stakeholder expectations
- Instrumentation gaps prevent answering key questions
- Results suggest major product or strategy change
