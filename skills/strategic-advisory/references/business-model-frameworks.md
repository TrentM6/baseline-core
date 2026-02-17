# Business Model Frameworks

> Connecting product strategy to business viability — canvases, unit economics, and revenue model patterns.

**Part of:** [Strategic Advisory](../strategic-advisory-skill.md)

---

## Business Model Canvas

### The 9 Building Blocks

| Block | Question | Example |
|-------|----------|---------|
| **Customer Segments** | Who are we creating value for? | Enterprise product teams, Series A startups |
| **Value Propositions** | What value do we deliver? | Save 40 hours/month on product workflows |
| **Channels** | How do we reach customers? | Content marketing, partner referrals, conferences |
| **Customer Relationships** | How do we interact with customers? | Self-serve with premium support tier |
| **Revenue Streams** | How do we make money? | Monthly subscription, enterprise contracts |
| **Key Resources** | What do we need to deliver? | AI models, product expertise, platform |
| **Key Activities** | What must we do well? | Skill development, customer onboarding, support |
| **Key Partnerships** | Who helps us deliver? | AI providers, tool integrations, agencies |
| **Cost Structure** | What does it cost to operate? | Engineering, AI compute, sales, marketing |

### How to Use It

1. **Fill it out roughly first** — Don't overthink the first pass
2. **Highlight assumptions** — Which blocks are validated vs. guesses?
3. **Test the riskiest assumptions** — Run experiments on the least certain blocks
4. **Revisit quarterly** — Business models evolve. Update as you learn.

### When to Use

- Starting a new product or business line
- Evaluating whether to enter a new market
- Assessing a competitor's business model
- Communicating strategy to new team members or investors

---

## Lean Canvas

### Adaptation for Startups

The Lean Canvas replaces some BMC blocks with startup-specific ones:

| Lean Canvas Block | Replaces BMC Block | Why |
|-------------------|-------------------|-----|
| **Problem** | (new) | Startups need to validate the problem first |
| **Solution** | Value Proposition | More specific, testable |
| **Key Metrics** | (new) | Focus on what to measure |
| **Unfair Advantage** | Key Resources | What can't be easily copied |

### Template

```
┌─────────────┬─────────────┬─────────────┐
│ PROBLEM      │ SOLUTION     │ UNIQUE VALUE │
│ Top 3        │ Top 3        │ PROPOSITION  │
│ problems     │ features     │ Single clear │
│              │              │ message      │
├─────────────┤              ├─────────────┤
│ EXISTING     │              │ HIGH-LEVEL   │
│ ALTERNATIVES │              │ CONCEPT      │
│ How solved   │              │ X for Y      │
│ today        │              │ analogy      │
├─────────────┼─────────────┼─────────────┤
│ KEY METRICS  │ COST         │ REVENUE      │
│ Key numbers  │ STRUCTURE    │ STREAMS      │
│ to track     │ Fixed and    │ Revenue      │
│              │ variable     │ model        │
├─────────────┤              ├─────────────┤
│ CHANNELS     │              │ UNFAIR       │
│ Path to      │              │ ADVANTAGE    │
│ customers    │              │ Can't be     │
│              │              │ easily copied│
└─────────────┴─────────────┴─────────────┘
```

### Key Differences from BMC

- Lean Canvas is hypothesis-driven — everything is an assumption to test
- Focuses on problem-solution fit before product-market fit
- Designed to be updated weekly/monthly as you learn
- Better for early-stage; BMC is better for established businesses

---

## Unit Economics

### Core Metrics

**Customer Acquisition Cost (CAC):**
```
CAC = Total Sales & Marketing Spend / Number of New Customers
```

Include: salaries, ad spend, tools, content production, events
Segment by channel: organic CAC vs. paid CAC tell very different stories

**Lifetime Value (LTV):**
```
LTV = Average Revenue Per User × Gross Margin × Average Customer Lifespan
```

Or simplified:
```
LTV = ARPU × Gross Margin / Churn Rate
```

**LTV:CAC Ratio:**

| Ratio | Interpretation |
|-------|---------------|
| < 1:1 | Losing money on every customer. Urgent problem. |
| 1:1 – 3:1 | Unprofitable or barely profitable. Improve retention or reduce CAC. |
| 3:1 | Healthy benchmark for sustainable growth. |
| 5:1+ | Very healthy — or possibly under-investing in growth. |

**Payback Period:**
```
Payback Period = CAC / (ARPU × Gross Margin)
```

Measures how many months until you recover the acquisition cost. Under 12 months is good. Under 6 is excellent.

### Margin Analysis

**Gross Margin:**
```
Gross Margin = (Revenue - COGS) / Revenue
```

SaaS benchmarks: 70-85% is healthy. Below 60% signals a problem (hosting costs, manual services, infrastructure).

**Contribution Margin:**
```
Contribution Margin = Revenue - Variable Costs
```

Answers: "How much does each additional customer contribute to covering fixed costs?"

### Unit Economics by Stage

| Stage | Focus | Acceptable LTV:CAC |
|-------|-------|-------------------|
| Pre-PMF | Finding product-market fit | Not yet meaningful — focus on engagement |
| Early growth | Proving unit economics work | > 1:1 and improving monthly |
| Growth | Scaling profitably | > 3:1 |
| Mature | Optimizing efficiency | > 3:1 with decreasing CAC |

---

## Revenue Model Patterns

### Model Comparison

| Model | How It Works | Best For | Watch Out For |
|-------|-------------|----------|--------------|
| **Subscription** | Recurring fee (monthly/annual) | SaaS, media, communities | Churn, pricing pressure |
| **Usage-based** | Pay per unit consumed | API, cloud, data | Revenue unpredictability |
| **Marketplace** | Take a cut of each transaction | Two-sided platforms | Chicken-and-egg, disintermediation |
| **Freemium** | Free tier + paid upgrades | High-volume products | Low conversion rate, free-rider cost |
| **Licensing** | One-time or annual license fee | Enterprise software, IP | Long sales cycles, lumpy revenue |
| **Transaction fee** | Fee per transaction processed | Payments, e-commerce | Volume dependent, margin thin |

### Subscription Pricing Structures

**Flat rate:** One price, all features. Simple but limits revenue growth.

**Tiered:** Multiple plans (e.g., Starter, Pro, Enterprise). Captures different willingness to pay.

**Per-seat:** Price per user. Scales with adoption but creates friction around adding users.

**Per-usage:** Price scales with consumption. Aligns cost with value but hard to predict revenue.

**Hybrid:** Base subscription + usage charges. Combines predictability with upside.

### Choosing the Right Model

**Questions to ask:**
1. How do customers experience value? (Per use, ongoing access, per outcome?)
2. What's the buying pattern? (One-time decision, ongoing budget, usage-variable?)
3. What do competitors charge? (Don't ignore market expectations)
4. What's the perceived value ceiling? (How much would a customer pay at maximum?)
5. What's the cost to serve? (High COGS requires higher margins)

---

## Cost Structure Analysis

### Fixed vs. Variable Costs

**Fixed costs** (don't change with volume):
- Salaries, office, insurance
- Core infrastructure (base hosting, tools)
- R&D investment

**Variable costs** (scale with customers/usage):
- Cloud computing (per-user or per-request)
- Customer support (more customers = more tickets)
- Payment processing fees
- Third-party API costs

### Scaling Economics

**Favorable scaling:** Revenue grows faster than costs.
- Software with high gross margins
- Network effects (each user makes the product more valuable)
- Content that can be consumed by unlimited users

**Unfavorable scaling:** Costs grow proportionally (or faster) with revenue.
- Services businesses (revenue requires more headcount)
- Hardware with physical COGS
- Heavy support or implementation requirements

**Key question:** "If we 10x customers, do costs 10x too?" If yes, you have a scaling problem.

---

## Business Model Validation

### Testing Assumptions

Every business model rests on assumptions. The riskiest assumptions should be tested first.

| Assumption Type | Example | How to Test |
|----------------|---------|------------|
| **Problem exists** | "Teams waste 10+ hrs/week on workflows" | Interviews, surveys |
| **Willingness to pay** | "Teams will pay $500/month" | Pricing page test, letter of intent |
| **Acquisition channel works** | "Content will drive organic leads" | Content experiment, paid ad test |
| **Retention** | "Users will stay 18+ months" | Cohort analysis, engagement metrics |
| **Unit economics** | "LTV:CAC will exceed 3:1" | Track actuals monthly |

### Key Metrics by Model Type

| Revenue Model | Primary Metric | Secondary Metrics |
|--------------|---------------|------------------|
| **Subscription** | MRR, Churn rate | Net revenue retention, expansion revenue |
| **Usage-based** | Revenue per user, usage growth | Gross margin, usage frequency |
| **Marketplace** | GMV, take rate | Liquidity, repeat transaction rate |
| **Freemium** | Free-to-paid conversion | Activation rate, time-to-convert |
| **Enterprise** | ACV, deal velocity | Win rate, pipeline coverage |

---

## Business Model and Product Strategy

### When Business Model Informs Product

- **Pricing model shapes feature design:** Per-seat pricing means features that encourage adding users. Usage-based means features that drive consumption.
- **Free tier decisions shape the funnel:** What's free determines who you attract and what conversion paths exist.
- **Margin requirements constrain options:** Low-margin models can't afford high-touch onboarding.

### When Product Strategy Informs Business Model

- **New use cases enable new models:** Adding team features enables per-seat pricing.
- **Platform expansion enables marketplace:** Once you have users and integrations, a marketplace becomes viable.
- **Data or AI features enable usage pricing:** If the product generates more value with more use, usage-based pricing captures that.

### Common Mistakes

- **Under-pricing:** Charging less than the value you deliver because you're afraid to ask. Test higher prices.
- **Over-complicating:** Too many tiers, add-ons, and options. Customers get confused and don't buy.
- **Ignoring COGS:** Pricing for revenue without accounting for cost to serve. Margin matters more than revenue.
- **Copying competitors:** Their pricing reflects their cost structure, audience, and strategy — not yours.
- **Not revisiting:** The model that worked at 10 customers might not work at 1,000. Revisit business model fit as you scale.
