# Strategy Frameworks

> Comprehensive strategy and prioritization frameworks. Reference when helping with strategic decisions.

**Part of:** [Strategic Advisory](strategic-advisory/strategic-advisory-skill.md)

---

## Goal-Setting Frameworks

### OKRs (Objectives and Key Results)

**Structure:**
- **Objective:** Qualitative, inspiring goal (what you want to achieve)
- **Key Results:** Quantitative measures (how you'll know you achieved it)

**Rules:**
- 3-5 objectives per cycle
- 2-4 key results per objective
- Key results are measurable, not tasks
- Aim for 70% achievement (stretch goals)

**Example:**
```
Objective: Become the go-to solution for Series A product teams

Key Results:
- KR1: Close 5 new Research & Validation engagements
- KR2: Achieve 9/10 average client satisfaction score
- KR3: Generate 10 qualified inbound leads from content
```

**Common Mistakes:**
- Making key results into tasks
- Too many objectives (lose focus)
- Not ambitious enough (not stretching)
- Too ambitious (demoralizing)

### North Star Metric

**Concept:** One metric that captures the core value you deliver

**Characteristics:**
- Measures value to customer
- Leads to revenue (not is revenue)
- Is measurable
- Is actionable

**Examples:**
| Company | North Star |
|---------|------------|
| Airbnb | Nights booked |
| Spotify | Time listening |
| Slack | Messages sent |
| Baseline | Engagements delivering clear ROI |

**Usage:**
- Aligns teams around one number
- Guides prioritization decisions
- Measures true progress

### SMART Goals

**S** – Specific: Clear, well-defined
**M** – Measurable: Quantifiable
**A** – Achievable: Realistic
**R** – Relevant: Aligned with strategy
**T** – Time-bound: Has a deadline

**Example:**
- Not SMART: "Improve product"
- SMART: "Increase activation rate from 30% to 45% by end of Q2"

---

## Prioritization Frameworks (Detailed)

### RICE Scoring

**R – Reach:** How many people will this impact per quarter?
- Estimate number of users/customers affected
- Be specific (not "many" but "2,000 users")

**I – Impact:** How much will it impact them?
- 3 = Massive impact
- 2 = High impact
- 1 = Medium impact
- 0.5 = Low impact
- 0.25 = Minimal impact

**C – Confidence:** How sure are we?
- 100% = High confidence (data-backed)
- 80% = Medium confidence (educated guess)
- 50% = Low confidence (speculation)

**E – Effort:** How much work? (person-weeks)
- Estimate total work across all roles
- Include design, development, QA, etc.

**Formula:** RICE = (Reach × Impact × Confidence) / Effort

**Example:**
| Feature | Reach | Impact | Confidence | Effort | RICE |
|---------|-------|--------|------------|--------|------|
| Feature A | 2000 | 2 | 80% | 4 | 800 |
| Feature B | 500 | 3 | 100% | 2 | 750 |
| Feature C | 5000 | 0.5 | 50% | 1 | 1250 |

### ICE Scoring

Simpler than RICE:

**I – Impact:** 1-10 scale
**C – Confidence:** 1-10 scale
**E – Ease:** 1-10 scale (inverse of effort)

**Formula:** ICE = Impact × Confidence × Ease

**When to use:** Quick prioritization, less rigor needed

### Value vs. Effort Matrix

**2x2 Grid:**

```
                    High Value
                        │
        Big Bets        │       Quick Wins
     (Plan carefully)   │       (Do first)
                        │
   ─────────────────────┼─────────────────────
                        │
        Money Pits      │       Fill-ins
       (Don't do)       │      (Do if time)
                        │
                    Low Value

        High Effort ←───┼───→ Low Effort
```

**Process:**
1. List all items
2. Score each on value (1-10)
3. Score each on effort (1-10)
4. Plot on matrix
5. Discuss and adjust
6. Prioritize by quadrant

### Weighted Scoring

**Process:**
1. Define criteria (e.g., impact, alignment, feasibility)
2. Assign weights to each criterion (must total 100%)
3. Score each option on each criterion (1-5 or 1-10)
4. Calculate weighted score
5. Rank by total score

**Example:**
| Option | Impact (40%) | Alignment (30%) | Feasibility (30%) | Total |
|--------|--------------|-----------------|-------------------|-------|
| A | 4 (1.6) | 5 (1.5) | 3 (0.9) | 4.0 |
| B | 5 (2.0) | 3 (0.9) | 4 (1.2) | 4.1 |
| C | 3 (1.2) | 4 (1.2) | 5 (1.5) | 3.9 |

### Kano Model (Detailed)

**Categories:**

**Must-Haves (Basic):**
- Expected functionality
- Absence = dissatisfaction
- Presence = neutral (not delight)
- Example: Login works, page loads

**Performance (Linear):**
- More is better
- Direct relationship with satisfaction
- Example: Speed, capacity, features

**Delighters (Attractive):**
- Unexpected positive
- Absence = neutral
- Presence = delight
- Example: Surprise features, exceptional UX

**Indifferent:**
- Users don't care either way
- Don't invest here

**Reverse:**
- Some users want, some don't
- Be careful with these

**Application:**
1. Identify which category each feature falls into
2. Prioritize: Must-haves first, then Performance, then Delighters
3. Use Delighters strategically for differentiation

---

## Strategy Development Frameworks

### Porter's Generic Strategies

**Three options:**

1. **Cost Leadership:** Win by being cheapest
   - Scale, efficiency, low margins
   - Example: Walmart, Ryanair

2. **Differentiation:** Win by being different/better
   - Unique value, premium pricing
   - Example: Apple, Baseline

3. **Focus:** Win by serving a niche deeply
   - Narrow market, deep expertise
   - Example: Specialized SaaS tools

**Trap:** Stuck in the middle (neither cheapest nor most differentiated)

### Jobs to Be Done (JTBD)

**Core Concept:** People "hire" products to do jobs for them

**Job Statement Format:**
"When I [situation], I want to [motivation], so I can [expected outcome]."

**Example:**
"When I'm planning my product roadmap, I want to know what users actually need, so I can build the right things and not waste engineering time."

**Uncovering Jobs:**
- Interview users about recent "purchases" (choosing your product)
- Ask: "What were you trying to accomplish?"
- Dig into the situation, not just preferences

**Application:**
- Define your product by the job it does, not features
- Compete against other solutions to the same job
- Improve by doing the job better

### Opportunity Solution Trees

**Structure:**
```
                    Outcome
                       │
          ┌────────────┼────────────┐
          │            │            │
    Opportunity   Opportunity   Opportunity
          │            │            │
     ┌────┴────┐  ┌────┴────┐  ┌────┴────┐
     │         │  │         │  │         │
  Solution  Solution  Solution  Solution ...
     │         │
  ┌──┴──┐   ┌──┴──┐
  │     │   │     │
Experiment Experiment
```

**Process:**
1. Start with desired outcome (business goal)
2. Identify opportunities (user needs/problems that could drive outcome)
3. Generate solutions for each opportunity
4. Design experiments to test solutions
5. Iterate based on learnings

**Benefits:**
- Connects solutions to outcomes
- Generates multiple options
- Builds in validation

### Strategy Canvas (Blue Ocean)

**Concept:** Visualize your competitive position

**Process:**
1. List key factors the industry competes on
2. Plot competitors' investment in each factor
3. Plot your current position
4. Design your strategic move (raise, reduce, eliminate, create)

**Four Actions:**
- **Eliminate:** What factors can you eliminate that the industry takes for granted?
- **Reduce:** What factors can you reduce below the industry standard?
- **Raise:** What factors can you raise above the industry standard?
- **Create:** What factors can you create that the industry has never offered?

---

## Decision-Making Frameworks

### RAPID Decision Model

Clarify roles for decisions:

**R – Recommend:** Proposes the decision
**A – Agree:** Must agree for decision to proceed (can block)
**P – Perform:** Executes the decision
**I – Input:** Provides input, consulted
**D – Decide:** Makes the final call

**Usage:**
- Assign roles before decision process
- Clarifies who does what
- Prevents decision paralysis

### Reversibility Assessment

**Two types of decisions:**

**Type 1 (Irreversible):**
- Hard or impossible to undo
- High stakes
- Process: Move slowly, gather data, wide input

**Type 2 (Reversible):**
- Easy to undo or change
- Lower stakes
- Process: Move fast, experiment, small group decides

**Rule:** Don't treat Type 2 decisions like Type 1

### Pre-mortem Analysis

**Process:**
1. Imagine it's one year from now
2. The project failed completely
3. Write down why it failed
4. Work backwards to prevent those failures

**Benefits:**
- Surfaces hidden concerns
- Permission to voice doubts
- Proactive risk mitigation

### Decision Journal

**For each significant decision, record:**
- Date
- Decision made
- Reasoning
- Key assumptions
- Expected outcomes
- Confidence level

**Review periodically:**
- Were you right?
- What did you miss?
- How can you decide better?

---

## Product Strategy Frameworks

### Product-Market Fit Assessment

**Sean Ellis Test:**
"How would you feel if you could no longer use [product]?"
- Very disappointed: 40%+ = PMF
- Somewhat disappointed
- Not disappointed

**Other PMF Indicators:**
- Organic growth / word of mouth
- Low churn
- Users do the job without prompting
- Demand exceeds supply

### Growth Model

**Acquisition:** How users find you
**Activation:** How users first experience value
**Retention:** How users keep coming back
**Revenue:** How you make money
**Referral:** How users bring others

**Usage:**
- Map your funnel
- Identify weakest link
- Focus improvement there

### Roadmap Confidence Levels

**Now (High Confidence):**
- Committed work
- Well-defined
- 0-3 months

**Next (Medium Confidence):**
- Planned work
- Somewhat defined
- 3-6 months

**Later (Low Confidence):**
- Possible work
- Loosely defined
- 6+ months

**Benefits:**
- Sets expectations
- Allows flexibility
- Communicates uncertainty honestly

---

## Competitive Analysis Frameworks

### Competitive Positioning Map

**Process:**
1. Choose two key dimensions (e.g., price vs. features, ease vs. power)
2. Plot competitors on the map
3. Identify gaps or clusters
4. Decide where you want to position

### Porter's Five Forces

Analyze industry attractiveness:

1. **Rivalry:** How intense is competition?
2. **New Entrants:** How easy to enter the market?
3. **Substitutes:** What else could solve this problem?
4. **Buyer Power:** How much leverage do customers have?
5. **Supplier Power:** How much leverage do suppliers have?

### SWOT Analysis

| Internal | External |
|----------|----------|
| **Strengths** (leverage) | **Opportunities** (pursue) |
| **Weaknesses** (address) | **Threats** (mitigate) |

**Usage:**
- Brainstorm each quadrant
- Connect: Use strengths to capture opportunities
- Address: Weaknesses that expose you to threats

---

## Execution Frameworks

### Agile/Scrum Basics

**Sprint:** Fixed time period (usually 2 weeks)
**Backlog:** Prioritized list of work
**Sprint Planning:** Select work for sprint
**Daily Standup:** Brief sync (what I did, what I'll do, blockers)
**Retrospective:** What went well, what to improve

### Now/Next/Later Roadmap

**Now:**
- Currently working on
- Highly defined
- Committed

**Next:**
- Coming up
- Moderately defined
- Planned

**Later:**
- On the horizon
- Loosely defined
- Possible

### Hypothesis-Driven Development

**Format:**
"We believe [action] will result in [outcome] because [rationale]. We will know we are right when we see [measurable signal]."

**Example:**
"We believe adding a quick-start guide will increase activation by 20% because new users are currently confused. We will know we are right when we see activation rate increase within 30 days."

**Process:**
1. State hypothesis
2. Define experiment
3. Set success criteria
4. Run experiment
5. Evaluate results
6. Decide: Continue, pivot, or stop
