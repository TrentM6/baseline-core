# Gap-Filling Questions

> Reference for the Setup skill. Loaded when asking gap-filling questions — either after doc ingestion (for what the docs didn't cover) or as the full guided questionnaire path.

This file curates the most load-bearing question per context file, organized for `AskUserQuestion`-style use: each question has options where they make sense, and a free-text fallback otherwise.

**Cap:** ask ~3 questions per context file in a single setup pass. Don't ask everything in [context-prompts.yaml](../../../context-prompts.yaml) — that file is for `npx baseline context`, the full structured CLI pass. This is the lightweight version for getting a system usable fast.

**Priority tiers** (drive Quick vs. Full path):
- **`essential`** — always ask in Quick and Full paths
- **`recommended`** — ask in Full path only
- **`optional`** — ask in Full path only if relevant to the user's stage / business

---

## How to use this file

1. **Walk files in this order**, skipping any that are already populated from doc ingestion:
   identity → voice → co-founder → product → users → icp → competitive → pricing → technical → visual-identity → formatting → proof-points

2. **For each file, ask the questions tagged for the active scope** (Quick = `essential` only; Full = `essential` + `recommended` + `optional` filtered by stage).

3. **Use `AskUserQuestion`** when options are listed. Always offer free-text via "Other / write your own."

4. **Use prose questions** when no options are listed. Keep prose questions short and ask one at a time.

5. **After all questions for a file**, summarize answers as a markdown draft and confirm before writing.

---

## core/identity.md (priority: essential)

### Q1 (essential): What does your company do, in one sentence?

- **Format:** prose
- **Why:** The single highest-leverage answer. Drives identity, positioning, and how every skill frames output.
- **Example follow-up:** if the answer is jargon-heavy ("we leverage AI to optimize..."), ask for a plain-English version.

### Q2 (essential): What stage are you at?

- **Format:** options
- **Options:**
  - Pre-launch (no product yet, or product not in market)
  - Early (product in market, <100 customers or <$1M ARR)
  - Growth (scaling, $1M–$10M ARR)
  - Mature ($10M+ ARR or established for 5+ years)
  - Other / write your own
- **Why:** Drives which extended files matter and how questions are framed.

### Q3 (essential): What makes you different — your top differentiator?

- **Format:** prose
- **Why:** Identity without differentiation is generic. Even if the user only has one differentiator clear, capture it.
- **Follow-up if vague:** "Can you give me an example of a competitor or alternative, and what specifically you do better?"

### Q4 (recommended): Who are your primary customers?

- **Format:** prose
- **Why:** Customer definition shapes voice, examples, and prioritization. Skip if `icp.md` will be filled — that file covers it in depth.

### Q5 (recommended): What is your company NOT? (common misconceptions)

- **Format:** prose
- **Why:** Helps the system avoid framing you as something you aren't (e.g., "we're not an agency").

---

## core/voice.md (priority: essential — but use sample-based extraction first)

**Before asking these questions, run the voice subroutine.** See [voice-elicitation.md](voice-elicitation.md). Ask for samples first; only fall back to these questions if no samples are available.

### Q1 (essential): Pick 3-5 words that describe your voice.

- **Format:** options (multi-select)
- **Options:** confident, direct, warm, technical, playful, formal, casual, witty, sincere, irreverent, authoritative, humble, blunt, polished, conversational, urgent, calm, optimistic, pragmatic, bold, nuanced, contrarian, helpful, candid + Other / write your own
- **Why:** Voice attributes anchor every other voice rule.

### Q2 (essential): What's one thing your brand should NEVER do or say?

- **Format:** prose
- **Why:** Negative examples are sharper signals than positive ones. Common answers: "no jargon," "no emoji," "no exclamation points," "never sound corporate."

### Q3 (essential): Write a sentence that sounds nothing like your brand.

- **Format:** prose
- **Why:** A single anti-example is more useful than ten "what we sound like" descriptions. The system steers away from this.

### Q4 (recommended): What's one always-rule? (e.g., "use 'I' not 'we'", "active voice", "short sentences")

- **Format:** prose

### Q5 (recommended): Where does your voice shift? (e.g., website vs. LinkedIn vs. cold outreach)

- **Format:** prose
- **Skip if:** user is pre-launch and hasn't established channels yet.

---

## extended/co-founder.md (priority: essential)

This file powers Co-Founder Mode — the system's strategic thinking partner. Without it, brainstorm sessions are generic.

### Q1 (essential): What kind of strategic partner do you want this to be?

- **Format:** options
- **Options:**
  - Product-focused (user research, feature prioritization, design instincts)
  - Technical (architecture, build-vs-buy, technical risk)
  - Business / commercial (revenue, pricing, GTM, deals)
  - Operations (process, hiring, team scaling)
  - Generalist (a bit of everything)
  - Other / write your own

### Q2 (essential): What are 2-3 of your core strategic principles? (the beliefs that guide your decisions)

- **Format:** prose
- **Examples:** "ship before perfect," "users tell us, we don't tell them," "be early to a small market, not late to a big one."

### Q3 (essential): What do you always challenge — what assumptions make you push back?

- **Format:** prose
- **Examples:** "I challenge any plan that requires hiring more than 2 people to make work." "I push back on 'we should build for enterprise' before we have any enterprise customers."

### Q4 (recommended): Describe your decision-making philosophy in 1-2 sentences.

- **Format:** prose

---

## extended/product.md (priority: recommended)

Skip if `pre-launch` and the product isn't defined yet. Ask the user.

### Q1 (recommended): What is your core product or service?

- **Format:** prose
- **Skip if:** doc ingestion already populated this from a one-pager or product spec.

### Q2 (recommended): What does your product NOT do? What's explicitly out of scope?

- **Format:** prose
- **Why:** Out-of-scope is as load-bearing as in-scope for downstream skills.

### Q3 (optional): What is the 'aha moment' — when does a customer first realize the value?

- **Format:** prose
- **Skip if:** pre-launch.

---

## extended/users.md (priority: recommended)

### Q1 (recommended): Who are your primary user personas? (title or role)

- **Format:** prose
- **Example:** "Heads of Engineering at Series A–C SaaS companies; secondary persona is platform engineers."

### Q2 (recommended): What's their main pain point?

- **Format:** prose

### Q3 (optional): How do users typically discover your product?

- **Format:** options
- **Options:** Word-of-mouth / referral, content / SEO, paid ads, outbound sales, partnerships, community / Slack groups, conferences / events, Other / write your own

---

## extended/icp.md (priority: optional — depends on stage)

Skip if pre-launch or if `users.md` already covers the buyer.

### Q1 (optional): Describe your ideal customer's company. (Stage, size, team structure)

- **Format:** prose

### Q2 (optional): Who's the primary buyer? (Title and role)

- **Format:** prose

### Q3 (optional): What triggers them to start looking for a solution like yours?

- **Format:** prose

---

## extended/competitive.md (priority: recommended)

### Q1 (recommended): Who are your top 2-3 competitors or alternatives?

- **Format:** prose
- **Note:** include the "do nothing" alternative if relevant ("most prospects just keep using spreadsheets").

### Q2 (recommended): What's your primary differentiator — the one thing that's hardest to copy?

- **Format:** prose
- **Skip if:** identity.md already captured this.

### Q3 (optional): What do customers typically compare you against before choosing?

- **Format:** prose

---

## extended/pricing.md (priority: optional — skip if pre-launch)

### Q1 (optional): What's your pricing model?

- **Format:** options
- **Options:** Per-seat, Usage-based, Flat / fixed price, Tiered (multiple plans), Value-based / custom, Free / freemium, Not yet decided, Other / write your own

### Q2 (optional): What are your tiers and price points? (rough is fine)

- **Format:** prose

### Q3 (optional): What's your most common pricing objection?

- **Format:** prose
- **Skip if:** early stage and not yet selling.

---

## extended/technical.md (priority: optional — context-dependent)

Skip unless the user does technical work (engineering, infra, dev tools) or builds technical content.

### Q1 (optional): What's your tech stack? (Frontend, backend, infra)

- **Format:** prose

### Q2 (optional): What are your key integrations?

- **Format:** prose

---

## extended/visual-identity.md (priority: optional)

Skip if user is pre-launch and brand isn't designed yet, or if a brand guide was ingested.

### Q1 (optional): What are your brand colors? (hex codes if you know them)

- **Format:** prose

### Q2 (optional): What's your visual style in a few words?

- **Format:** options (multi-select)
- **Options:** clean, modern, minimal, dark, premium, playful, technical, retro, hand-drawn, illustrative, photographic, geometric, Other / write your own

---

## extended/formatting.md (priority: optional)

Skip in Quick path. Most users don't have formal formatting rules.

### Q1 (optional): What document format do you prefer for output?

- **Format:** options
- **Options:** Markdown, Google Docs, Notion, Plain text, Other / write your own

### Q2 (optional): Any formatting rules to follow? (e.g., "no em dashes," "use H2 for sections")

- **Format:** prose

---

## extended/proof-points.md (priority: optional — skip if pre-launch)

Skip if pre-launch or if proof-points were captured from a pitch deck / case study during ingestion.

### Q1 (optional): What's your strongest metric or outcome you can cite?

- **Format:** prose
- **Example:** "Customers reduce time-to-resolution by 60% on average."

### Q2 (optional): Any notable customers you can name publicly?

- **Format:** prose

### Q3 (optional): Any awards, press mentions, partnerships, or certifications?

- **Format:** prose

---

## Path summaries

### Quick path (~10 minutes target)

Asks essential-tier questions only across:
- identity.md (Q1, Q2, Q3 — 3 questions)
- voice.md (after sample-based extraction; if no samples, Q1, Q2, Q3 — 3 questions)
- co-founder.md (Q1, Q2, Q3 — 3 questions)

**Total: ~9 questions** plus the initial doc availability + scope + stage in the Plan phase. Skips all extended/* files except co-founder.

### Full path

Walks every file in priority order, asking essential + recommended questions for each, plus optional questions where stage and user-answers indicate relevance. Skips files the user opts out of.

**Total: ~25-35 questions** depending on stage and what's already populated from docs.

---

## Anti-patterns

| Anti-pattern | Problem | Instead |
|---|---|---|
| **Asking all questions in [context-prompts.yaml](../../../context-prompts.yaml)** | That's the CLI pass, not setup | Cap at the questions in this file; user can run `npx baseline context` later for depth |
| **Asking voice questions cold without samples** | Useless answers | Run voice subroutine first; questions are fallback only |
| **Asking pricing questions of pre-launch users** | They don't know yet | Skip the section; flag in summary |
| **Treating optional questions as required** | Recreates the wall of questions setup is replacing | Honor the priority tiers; honor user skips |
| **Asking the same question twice (once during ingestion, once in gap-fill)** | User loses trust | Always check existing populated content before asking |
