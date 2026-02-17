# Communication Dynamics

> How to tailor communication to audiences, structure written communication, and manage difficult conversations.

**Part of:** [Product Communications](../product-communications-skill.md)

---

## Audience Adaptation Matrix

### Adapting by Audience

| Audience | What They Care About | Depth | Format | Framing |
|----------|---------------------|-------|--------|---------|
| **Executives** | Business impact, risk, strategic alignment | Summary — 3-5 points max | One-pager, 5-slide deck | Dollars, growth, competitive position |
| **Engineering** | Technical details, feasibility, tradeoffs | Deep — architecture, edge cases | RFC, wiki doc, working session | System impact, performance, maintenance cost |
| **Design** | User experience, consistency, craft | Moderate — context and principles | Critique session, Figma comments | User needs, design system, interaction patterns |
| **Sales/GTM** | Revenue impact, customer story, timeline | Moderate — story-driven | Slides, battle cards, enablement doc | Win rate, deal size, competitive angle |
| **Customers** | Their problems, their outcomes | Concise — benefits over features | Email, help doc, changelog | Value delivered, what changed for them |
| **Board/Investors** | Growth metrics, market position, risk | High-level — strategic narrative | Board deck, memo | Market size, trajectory, unit economics |

### Adaptation Rules

1. **Depth scales inversely with seniority.** Executives get the summary. ICs get the details.
2. **Frame in their language.** Engineering thinks in systems. Sales thinks in deals. Executives think in strategy.
3. **Answer their unasked question.** Execs ask "what's the status?" but mean "should I worry?" Sales asks "when does it ship?" but means "can I sell it now?"
4. **Match the medium to the message.** Complex decisions need documents. Quick updates need messages. Emotional topics need face-to-face.

---

## The Pyramid Principle

### Structure

Developed by Barbara Minto at McKinsey:

1. **Lead with the answer** — State your recommendation or conclusion first
2. **Group supporting arguments** — 3-5 supporting points, logically grouped
3. **Support with evidence** — Data, examples, analysis under each argument

### Why It Works

- Busy readers get the point immediately
- If they stop reading, they still got the key message
- Supporting logic is available for those who want to dig deeper
- Forces the writer to clarify their thinking

### Example

**Pyramid:**
> We should invest in mobile checkout optimization this quarter. Mobile traffic is 60% of total but converts at half the rate of desktop. Fixing the payment step alone could recover $48K/month based on drop-off analysis. The engineering effort is estimated at 1 sprint.

**Anti-pyramid (common but wrong):**
> We analyzed traffic data for Q3. Mobile represented 60% of visits. We then looked at conversion rates by device. Desktop converts at 4.8% while mobile converts at 2.1%. We examined the funnel and found... [three paragraphs later] ...so we should invest in mobile checkout.

---

## BLUF Method (Bottom Line Up Front)

### When to Use

- Status updates
- Email to busy stakeholders
- Slack messages that need action
- Anywhere the reader needs to know the point before the context

### Format

```
BOTTOM LINE: [The key message in 1-2 sentences]

CONTEXT: [Background that supports the bottom line]

ACTION NEEDED: [What you need from the reader]
```

### Example

```
BOTTOM LINE: The launch date needs to move from March 15 to April 1 due to
a critical API dependency that won't be ready until March 25.

CONTEXT: The payment provider notified us yesterday that their v3 API
(required for the new checkout flow) will ship March 25, not March 10
as originally committed. We've explored alternatives — the only viable
option is a 2-week delay.

ACTION NEEDED: Please confirm you're okay with the April 1 date so we can
update the GTM timeline and notify partner teams.
```

---

## Writing Executive Summaries

### Structure

1. **Situation** (1-2 sentences): Where things stand right now
2. **Key finding or change** (1-2 sentences): What's new or what matters
3. **Impact** (1-2 sentences): What this means for the business
4. **Recommendation** (1-2 sentences): What should happen next
5. **Ask** (1 sentence): What you need from the reader

### Rules

- Maximum one page (ideally half a page)
- No jargon that requires context the reader doesn't have
- Numbers over adjectives: "revenue grew 23%" not "revenue grew significantly"
- Front-load the most important information
- Write it last, after you've done the detailed work

### What to Include vs. Exclude

| Include | Exclude |
|---------|---------|
| Key metrics with context | Methodology details |
| Business impact | Technical implementation |
| Recommendation | All the options you considered |
| Timeline/next steps | Historical background (unless essential) |
| What you need from them | Your analysis process |

---

## Presentation Structure by Forum

### All-Hands / Company Meeting

- **Purpose:** Alignment, morale, transparency
- **Tone:** Energizing, honest, inclusive
- **Structure:** Wins → learnings → what's next → ask for help
- **Duration:** 5-10 minutes per presenter
- **Visuals:** Large text, photos, demos — no dense slides

### 1:1 with Stakeholder

- **Purpose:** Alignment, decision-making, relationship
- **Tone:** Direct, collaborative
- **Structure:** BLUF → context → discussion → next steps
- **Duration:** Fits within the meeting (prepare 50% content, 50% discussion)
- **Visuals:** Optional — doc or brief slides if needed

### Board Review

- **Purpose:** Governance, strategic oversight
- **Tone:** Confident, data-driven, strategic
- **Structure:** Performance → insights → strategy → ask
- **Duration:** 15-30 minutes with Q&A
- **Visuals:** Clean board deck — metrics, charts, strategic frameworks

### Sprint Review / Demo

- **Purpose:** Show progress, get feedback
- **Tone:** Honest, collaborative, grounded
- **Structure:** Sprint goal → what shipped → demo → what we learned → what's next
- **Duration:** 30-60 minutes
- **Visuals:** Live product, screenshots, before/after

### Design Critique

- **Purpose:** Improve the work through structured feedback
- **Tone:** Respectful, specific, principle-grounded
- **Structure:** Context → design decisions → what feedback you want → discussion
- **Duration:** 30-60 minutes
- **Visuals:** Figma prototypes, flow diagrams

---

## Managing Difficult Communications

### Killing a Feature

**Structure:**
1. Acknowledge the investment: "The team put significant work into [feature]"
2. Share the evidence: "Here's what we learned from [data/testing/feedback]"
3. State the decision: "We're discontinuing [feature]"
4. Explain the reasoning: "The data shows [specific evidence]"
5. Redirect energy: "Here's what we're doing instead"

**Rules:**
- Don't bury the news or soften it into ambiguity
- Credit the team's effort regardless of the outcome
- Have data ready — this decision will be challenged
- Announce the decision, don't open it for debate (the decision is made)

### Missed Deadline

**Structure:**
1. State the miss: "We won't hit the [date] deadline"
2. Explain why (without excuses): "The primary cause was [specific reason]"
3. State the new date: "The revised date is [date]"
4. Show what's changed: "To prevent recurrence, we've [action]"
5. Own it: "I should have flagged this earlier" (if true)

**Rules:**
- Communicate early — don't wait until the deadline passes
- Come with a new plan, not just bad news
- One miss is forgivable; repeated misses require process change

### Delivering Bad News

**Principles:**
- Fast and direct beats slow and softened
- Never deliver bad news by email if you can do it face-to-face
- Separate the news from the person's emotions about the news
- Be prepared for silence — don't fill it with more talking
- Follow up in writing after the conversation

### Pivoting Strategy

**Structure:**
1. Acknowledge the current direction: "We've been pursuing [strategy]"
2. Share what changed: "New evidence suggests [insight]"
3. Present the new direction: "We're shifting to [new strategy]"
4. Bridge the work: "Here's what carries forward vs. what changes"
5. Get buy-in: "What questions do you have?"

---

## Async vs. Sync Communication

### When to Write (Async)

- Status updates and progress reports
- FYI information that doesn't need discussion
- Detailed analysis that benefits from careful reading
- Decisions that are made and need to be communicated
- Documentation for future reference
- Cross-timezone communication

### When to Meet (Sync)

- Sensitive or emotional topics (bad news, conflict, feedback)
- Complex decisions requiring real-time discussion
- Brainstorming and creative work
- Relationship building and alignment
- When async is going in circles (3+ back-and-forth messages = schedule a call)

### Making Async Communication Work

**For messages:**
- Lead with the purpose: "FYI" / "Decision needed by [date]" / "Feedback requested"
- One topic per message/thread
- Use formatting (bullets, bold, sections) for scannability
- Specify what response you need and by when

**For documents:**
- State the purpose and audience at the top
- Use headings aggressively — people scan before they read
- Bold the key takeaways
- End with clear next steps or a specific ask
- Set a comment deadline: "Please leave feedback by [date]"

### Making Sync Communication Work

**For meetings:**
- Send agenda 24+ hours in advance
- State the objective: "By the end of this meeting, we will [decision/alignment]"
- Start with context, then open discussion, then close with decisions
- Send notes and action items within 24 hours
- If the meeting could have been an email, next time make it one
