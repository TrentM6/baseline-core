# Experimentation Guide

> A/B testing, statistical foundations, and experimentation methodology for product teams.

**Part of:** [Product Analytics](../product-analytics-skill.md)

---

## A/B Test Design

### Hypothesis Structure

Every test starts with a hypothesis. Use this format:

```
If we [change],
then [metric] will [improve/increase/decrease] by [amount],
because [reason based on evidence or insight].
```

**Good example:**
```
If we simplify the checkout flow from 4 steps to 2,
then checkout completion rate will increase by 10%,
because user research showed 34% of cart abandoners cited "too many steps."
```

**Bad example:**
```
If we redesign the page, it will be better.
(Not specific, not measurable, no rationale)
```

### Control and Variant Design

**Control:** The current experience (unchanged). Every test needs one.

**Variant:** The changed experience. Change exactly one variable at a time.

**Rules:**
- One hypothesis per test
- One variable changed between control and variant
- Both groups experience the test simultaneously
- Random assignment — no self-selection
- Equal split (50/50) unless you have a reason for unequal

**Common variable types:**
- Copy (headlines, CTAs, descriptions)
- Layout (order, placement, spacing)
- Visual (color, size, imagery)
- Flow (steps, gates, optional vs. required)
- Pricing (tiers, anchoring, display)

---

## Statistical Foundations

### P-Values

**What it means:** The probability that the observed difference happened by chance (assuming no real difference exists).

**Threshold:** p < 0.05 means there's less than a 5% chance the result is noise. This is the standard bar.

**Common misconceptions:**
- p = 0.05 does NOT mean "95% sure the variant is better"
- A low p-value doesn't tell you the effect is large, just that it's unlikely to be zero
- p = 0.06 isn't "almost significant" — it didn't pass the bar

### Confidence Intervals

**What they show:** The range where the true effect likely falls.

**Example:** "Variant increased conversion by 5.2% (95% CI: 2.1% — 8.3%)"

This means: We're 95% confident the true lift is between 2.1% and 8.3%.

**How to use them:**
- If the CI doesn't include zero, the result is statistically significant
- Narrow CI = high confidence in the estimate
- Wide CI = more data needed or high variance

### Sample Size

**Rule of thumb:** You need enough data to detect the effect you care about.

**Key inputs for sample size calculation:**
1. **Baseline conversion rate** — Your current metric value
2. **Minimum detectable effect (MDE)** — The smallest change worth detecting
3. **Statistical power** — Usually 80% (the probability of detecting a real effect)
4. **Significance level** — Usually 5% (α = 0.05)

**Rough guidelines:**

| Baseline Rate | MDE | Approximate Sample per Variant |
|--------------|-----|-------------------------------|
| 2% | 20% relative | ~25,000 |
| 5% | 10% relative | ~30,000 |
| 10% | 5% relative | ~30,000 |
| 20% | 5% relative | ~15,000 |
| 50% | 2% relative | ~20,000 |

**Small traffic?** You have three options:
1. Run the test longer
2. Increase MDE (only detect larger effects)
3. Use a different method (qualitative testing, before/after)

---

## Common Testing Pitfalls

### Peeking

**Problem:** Checking results daily and stopping when you see significance.

**Why it's wrong:** Statistical tests assume a fixed sample size. Peeking inflates your false positive rate — you'll declare winners that aren't.

**Fix:**
- Decide sample size before starting
- Set a fixed end date based on traffic projections
- If you must peek, use sequential testing methods (always-valid p-values)

### Multiple Comparisons

**Problem:** Testing multiple metrics and declaring victory on whichever one is significant.

**Why it's wrong:** If you check 20 metrics, one will be "significant" by chance alone (at p < 0.05).

**Fix:**
- Declare one primary metric before the test starts
- Secondary metrics are directional, not conclusive
- If you must test multiple primary metrics, apply Bonferroni correction (divide α by number of tests)

### Novelty Effects

**Problem:** Variant wins initially because it's new and interesting, then the effect fades.

**Fix:**
- Run tests for at least 2 full business cycles (typically 2-4 weeks)
- Segment results by new vs. returning users
- If the effect is only among new users, be cautious

### Selection Bias

**Problem:** The groups aren't actually random.

**Common causes:**
- Assigning based on user ID (odd/even can correlate with signup date)
- Bot traffic concentrated in one variant
- Geographic or device imbalances

**Fix:**
- Verify groups are balanced on key dimensions before analyzing
- Use proper randomization tooling
- Check for sample ratio mismatch (SRM) — if your 50/50 split is 52/48, investigate

### Interaction Effects

**Problem:** Running multiple tests simultaneously that affect each other.

**Fix:**
- Track which tests are live and where they overlap
- Use mutually exclusive test groups for overlapping surfaces
- When in doubt, run sequentially

---

## Multi-Variant Testing

### When to Use

- You have enough traffic for 3+ variants (each needs full sample size)
- You want to test multiple approaches to the same variable
- You want to find the best option, not just "better than current"

### Design Rules

- One control + 2-4 variants maximum
- Each variant still tests one variable
- Sample size per variant is the same as a two-variant test (not split across variants)
- Takes longer — plan for 3-4x the traffic of an A/B test

### Analysis

- Compare each variant to control (not to each other)
- Apply multiple comparisons correction
- Pick the winner based on primary metric, then validate with secondary metrics

---

## Test Analysis Template

### Test Summary

| Field | Value |
|-------|-------|
| **Test name** | [Descriptive name] |
| **Hypothesis** | If [change], then [metric] will [direction] by [amount] because [rationale] |
| **Primary metric** | [Metric name] |
| **Secondary metrics** | [Metric 1, Metric 2] |
| **Traffic split** | [50/50, 80/20, etc.] |
| **Start date** | [Date] |
| **End date** | [Date] |
| **Sample size** | Control: [N] / Variant: [N] |

### Results

| Metric | Control | Variant | Difference | Confidence Interval | P-value | Significant? |
|--------|---------|---------|-----------|---------------------|---------|-------------|
| [Primary] | [X%] | [Y%] | [+/- Z%] | [CI range] | [p] | [Yes/No] |
| [Secondary 1] | | | | | | |
| [Secondary 2] | | | | | | |

### Interpretation

**What happened:** [Plain-language summary of results]

**Why we think this happened:** [Explanation grounded in user behavior or product knowledge]

**Segments:** [Did the effect differ by user type, device, geography?]

### Decision

- [ ] **Ship variant** — Effect is positive and significant
- [ ] **Ship control** — Variant performed worse
- [ ] **Iterate** — Promising direction, needs refinement
- [ ] **Inconclusive** — Insufficient data or no meaningful difference

### Learnings

[What did we learn that applies beyond this test? How does this inform future work?]

---

## Feature Flag / Rollout Strategies

### Progressive Rollout

Instead of all-or-nothing launches:

| Phase | Audience | Duration | Purpose |
|-------|----------|----------|---------|
| Canary | 1-5% of users | 1-3 days | Catch critical bugs |
| Beta | 10-25% | 1-2 weeks | Measure key metrics |
| General availability | 50-100% | Gradual | Full rollout with monitoring |

### Rollout Monitoring Checklist

- [ ] Error rates (crashes, API errors, JS exceptions)
- [ ] Performance metrics (load time, latency)
- [ ] Primary product metric (conversion, engagement)
- [ ] Support ticket volume
- [ ] User feedback channels

### When to Pause or Rollback

- Error rate increases by more than 2x baseline
- Primary metric drops by more than your MDE threshold
- Support tickets spike on a related topic
- Any data integrity issues observed

---

## When NOT to A/B Test

### Skip Testing When:

**The change is obviously needed:**
- Bug fixes, compliance requirements, security patches
- Don't test fixing broken things

**The sample size is impossible:**
- B2B with 50 enterprise accounts — you'll never reach significance
- Instead: qualitative testing, user interviews, phased rollout with monitoring

**The decision is reversible and low-risk:**
- Copy changes with no conversion impact
- Internal tool improvements
- Just ship it and monitor

**The change is a prerequisite:**
- Infrastructure, platform migration, accessibility compliance
- These aren't optional regardless of what a test says

### What to Do Instead

| Situation | Alternative Method |
|-----------|-------------------|
| Low traffic | Qualitative usability testing (5-8 users) |
| Binary decision | Fake door test / painted door test |
| Large redesign | Before/after with holdback group |
| Exploratory | User interviews + prototype testing |
| Internal tools | Dogfooding + feedback surveys |
