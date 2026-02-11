# Metrics Framework Reference

Quick reference for metric frameworks and selection.

---

## North Star Metric

### What It Is

The single metric that best captures the core value your product delivers to customers. Everything else ladders up to it.

### Criteria for a Good North Star

1. **Measures value to customer** — Not revenue (that's value to you)
2. **Leading indicator** — Predicts future success
3. **Actionable** — Product team can influence it
4. **Understandable** — Anyone in the company gets it

### Examples by Product Type

| Product Type | North Star | Why |
|--------------|------------|-----|
| **Streaming (Netflix)** | Hours watched | Time = value delivered |
| **Marketplace (Airbnb)** | Nights booked | Completed transactions |
| **SaaS (Slack)** | Messages sent in channels | Collaboration happening |
| **E-commerce (Amazon)** | Purchases per month | Buying = value |
| **Social (Facebook)** | Daily active users | Engagement = value |
| **Fintech (Robinhood)** | Funded accounts | Ready to invest |

### Finding Your North Star

Ask:
1. What is the core value we deliver?
2. How do we know a user received that value?
3. What action indicates they got value?
4. Can we measure that action?

---

## AARRR (Pirate Metrics)

### The Framework

| Stage | Question | Example Metrics |
|-------|----------|-----------------|
| **Acquisition** | How do users find us? | Visits, sign-ups by channel |
| **Activation** | Do they have a good first experience? | Activation rate, time to value |
| **Retention** | Do they come back? | D7/D30 retention, DAU/MAU |
| **Revenue** | Do they pay? | Conversion rate, ARPU, LTV |
| **Referral** | Do they tell others? | NPS, shares, invites sent |

### When to Use

- Startups defining their first metrics
- Understanding the full user journey
- Finding the biggest opportunity (where's the leak?)

### Key Insight

Optimize in order: Retention → Activation → Acquisition

If users don't retain, acquisition is wasted. If they don't activate, they won't retain.

---

## HEART Framework

### The Framework (from Google)

| Dimension | What It Measures | Example Metrics |
|-----------|------------------|-----------------|
| **Happiness** | User satisfaction | CSAT, NPS, survey scores |
| **Engagement** | Depth of usage | Sessions/week, actions/session |
| **Adoption** | New user/feature uptake | New users, % using feature |
| **Retention** | Users coming back | Retention rate, churn |
| **Task Success** | Can they do the thing? | Completion rate, time on task |

### When to Use

- UX-focused products
- When you need to measure user experience, not just business metrics
- Feature-level measurement

### Goals-Signals-Metrics Process

1. **Goal:** What are you trying to achieve?
2. **Signal:** How would you know if you achieved it?
3. **Metric:** How can you measure that signal?

Example:
- Goal: Users find search useful
- Signal: They click on results
- Metric: Click-through rate on search results

---

## Input vs. Output Metrics

### Output Metrics (Lagging)

Results you care about, but can't directly control:
- Revenue
- Profit
- Market share
- Customer lifetime value

### Input Metrics (Leading)

Actions you can influence that drive outputs:
- Feature usage
- Activation rate
- Engagement frequency
- Task completion

### The Relationship

```
Input Metrics → Output Metrics
(Actionable)    (Results)

Example:
Activation rate → Retention → LTV → Revenue
(Input)          (Input)     (Output) (Output)
```

### Principle

Focus dashboards on input metrics (actionable). Track output metrics for overall health.

---

## Metric Selection Matrix

### By Question Type

| Question | Primary Metric Type |
|----------|-------------------|
| Is the product working? | Health metrics (North Star, retention) |
| Is this feature valuable? | Adoption + engagement |
| Should we ship this? | A/B test primary metric |
| Are users happy? | Satisfaction (CSAT, NPS) |
| Where's the opportunity? | Funnel conversion rates |
| Who are our best users? | Segment analysis |

### By Stakeholder

| Audience | Metrics They Care About |
|----------|------------------------|
| Executives | North Star, revenue, growth |
| Product Managers | Feature adoption, user behavior |
| Engineering | Performance, errors, uptime |
| Marketing | Acquisition, activation, attribution |
| Support | Ticket volume, resolution time, CSAT |

---

## Common Metric Calculations

### Retention Rates

```
D7 Retention = Users active on Day 7 / Users who signed up on Day 0

Example:
1,000 users signed up Jan 1
280 users active on Jan 8
D7 Retention = 28%
```

### DAU/MAU Ratio

```
DAU/MAU = Daily Active Users / Monthly Active Users

Interpretation:
- 50%+ = Very sticky (users come daily)
- 20-50% = Good engagement
- <20% = Occasional use product

Note: Some products are naturally low DAU/MAU (e.g., travel booking)
```

### Conversion Rate

```
Conversion Rate = Users who completed action / Users who could have

Example:
10,000 visitors
500 sign-ups
Conversion Rate = 5%
```

### Churn Rate

```
Monthly Churn = Users lost this month / Users at start of month

Example:
10,000 users on Jan 1
500 churned in January
Churn Rate = 5%

Annualized: 1 - (1 - 0.05)^12 = 46% annual churn
```

### Net Promoter Score (NPS)

```
NPS = % Promoters (9-10) - % Detractors (0-6)

Example:
100 responses
40 Promoters, 40 Passives, 20 Detractors
NPS = 40% - 20% = +20

Scale: -100 to +100
Good: +30 to +50
Excellent: +50+
```

---

## Metric Red Flags

### Signs of Vanity Metrics

- [ ] The number always goes up
- [ ] It doesn't connect to business outcomes
- [ ] No one would change behavior based on it
- [ ] It's easy to game
- [ ] Competitors have bigger numbers and it doesn't matter

### Signs of Metric Gaming

- [ ] Metric improves but user experience worsens
- [ ] Metric improves but business outcomes don't follow
- [ ] Team optimizes specifically for the metric, not the goal
- [ ] Short-term gains, long-term damage

### Signs You Need Better Metrics

- [ ] Dashboard has 20+ charts
- [ ] No one can explain what the metrics mean
- [ ] Metrics don't match how you talk about the business
- [ ] Same data tells contradictory stories
- [ ] Decisions are made on gut despite having "data"

---

## Quick Reference: Good vs. Bad Metrics

| Bad Metric | Better Alternative |
|------------|-------------------|
| Total registered users | Active users (DAU, WAU, MAU) |
| Page views | Engaged sessions, time on site |
| App downloads | Activated users |
| Features shipped | Feature adoption rate |
| Emails sent | Email engagement rate |
| Total revenue | Revenue per user, LTV |
| Number of bugs fixed | Bug escape rate, time to fix |
