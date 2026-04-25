# Doc Ingestion Guide

> Reference for the Setup skill. Loaded when the user provides existing docs to parse into context files.

This guide tells the AI:
1. Which doc types map to which context files
2. What to extract from each doc type and what to ignore
3. The format spec for each context file (so output is consistent)
4. How to handle edge cases (conflicting docs, outdated content, multiple languages, etc.)

---

## Doc-type → context-file mapping

Use the user's description of each doc to choose the right mapping. If the user just says "here's some stuff," ask them to label each one (or open the file and infer from content).

| Doc type | Primary context files | Secondary |
|---|---|---|
| Pitch deck | identity, product, competitive | proof-points, users, icp |
| One-pager / executive summary | identity, product | competitive, proof-points |
| Brand guide / style guide | voice, visual-identity, formatting | identity (positioning) |
| Product spec / PRD | product, technical | users |
| ICP doc / persona doc / customer research | users, icp | competitive |
| Pricing page / sales deck | pricing, proof-points | competitive |
| Sales playbook / objection handling | pricing, icp | competitive |
| Recent emails / blog posts / LinkedIn posts | voice (sample-based) | identity (terminology) |
| Web copy (homepage, about page) | identity, voice (sample-based) | product |
| Investor update / board deck | identity, proof-points | product |
| Customer testimonials / case studies | proof-points | users |
| Competitor matrix / battle cards | competitive | pricing, identity |
| Technical architecture doc | technical | product |
| Founder bio / team page | identity | co-founder (founder background informs co-founder persona) |

If a doc doesn't fit any of these (e.g., a personal journal), ask the user what they'd like done with it. Don't force-fit.

---

## What to extract per doc type

### Pitch deck

**Extract:**
- Tagline / one-line description → `identity.md` "What does your company do in one sentence?"
- Problem slide → `identity.md` "What problem do you solve?"
- Solution / product slide → `product.md` "What is your core product?"
- Differentiators / "why us" slide → `identity.md` "What makes you different?"
- Market size / TAM → `proof-points.md` (if numbers cited with sources)
- Competitor slide → `competitive.md` (each competitor; what they do well/poorly per the deck)
- Traction / metrics → `proof-points.md`
- Team slide → ignore (not part of context schema unless the user wants founder info in co-founder.md)
- Roadmap / vision → mostly ignore (vision belongs in identity if material; roadmap is too time-bound to capture as context)
- Use of funds / ask → ignore

**Common pitfalls:**
- Pitch decks often overstate. Quote what the deck says, but if a metric reads inflated (e.g., "10x faster than competitors"), flag for confirmation rather than write it as gospel.
- Old decks have stale positioning. Ask if the deck reflects current direction.

### One-pager / executive summary

**Extract:**
- The headline / value prop → `identity.md` "tagline or positioning statement"
- "What we do" paragraph → `identity.md` and `product.md`
- "Who it's for" paragraph → `users.md` and `icp.md`
- Key benefits / outcomes → `proof-points.md` (if quantified) or `identity.md` (if qualitative)

### Brand guide / style guide

**Extract:**
- Voice attributes (e.g., "confident, direct, human") → `voice.md` "voice words"
- Tone-by-channel guidance → `voice.md` "voice shift by context"
- Always/never language rules → `voice.md` always/never lists
- Headline style examples → `voice.md` "headline style"
- Brand colors with hex codes → `visual-identity.md`
- Fonts / type scale → `visual-identity.md`
- Logo usage → mostly ignore (not in schema; capture as note if material)
- Document structure rules → `formatting.md`

**Common pitfalls:**
- Brand guides often describe the aspirational voice, not what the company actually writes like. If you have access to recent emails or web copy, cross-check before trusting the guide. If they conflict, flag it to the user.

### Product spec / PRD

**Extract:**
- Product description → `product.md` "What is your core product?"
- Workflow / user flow → `product.md` "key workflow"
- Out-of-scope section → `product.md` "What does your product NOT do?"
- User personas mentioned → `users.md` (if not already in a separate ICP doc)
- Tech stack / dependencies → `technical.md`

**Common pitfalls:**
- PRDs are feature-specific and time-bound. Extract product-level info, not feature-level details.

### ICP doc / persona doc

**Extract:**
- Each persona with title, role → `users.md` "primary user personas"
- Goals per persona → `users.md` "main goal when using your product"
- Pain points per persona → `users.md` "biggest pain points"
- Day-to-day descriptions → `users.md`
- Buyer profile (if separate from user) → `icp.md`
- Industry / vertical / company size → `icp.md`
- Trigger events / buying signals → `icp.md` "what triggers them to start looking"

### Pricing page / sales deck

**Extract:**
- Each tier with price → `pricing.md` "pricing tier"
- What's included per tier → `pricing.md`
- Pricing model (per-seat / usage / value-based) → `pricing.md` "pricing philosophy"
- Common objections (if a sales deck) → `pricing.md` "common pricing objections"
- Customer logos / case studies referenced → `proof-points.md` "notable clients"

### Recent emails / blog posts / LinkedIn posts / web copy

**Extract for voice (sample-based):**
- Voice attributes inferred from the writing — don't write what the user *says* their voice is, write what the samples *show*
- Sentence rhythm and length patterns
- Active vs. passive voice tendency
- Use of jargon, idioms, profanity, emoji
- Headline / opening style
- CTA style

**Don't extract** product or identity info from these — they're voice signals, not factual sources. Use the pitch deck or one-pager for facts.

See [voice-elicitation.md](voice-elicitation.md) for the full sample-based voice methodology.

---

## Output format spec per context file

Every context file should follow this format. It mirrors what `npx baseline context` produces, so files written by Setup look identical to files written by the CLI.

```markdown
# {Title from context-prompts.yaml}

**{Question text}**
{Answer — paraphrased or quoted from the doc, in the user's voice}

**{Next question text}**
{Answer}
```

- Use the title and questions exactly as they appear in [context-prompts.yaml](../../../context-prompts.yaml). Do not reword.
- Answer in plain prose. No bullet lists unless the question's answer is naturally a list (e.g., "list 3-5 voice words" → markdown list is fine).
- Quote directly from the doc when the wording is good; paraphrase when the doc is verbose.
- If a question has no answer in the doc, omit it entirely (don't write "N/A" or "TBD"). The gap-filling phase will ask.

**Example — `identity.md` extracted from a pitch deck:**

```markdown
# Company Identity

**What does your company do in one sentence?**
Acme is a developer-first observability platform that turns raw logs into structured insights without manual instrumentation.

**Who are your primary customers?**
Engineering teams at Series A–C SaaS companies (10–200 engineers).

**What makes you different from alternatives? List your top 3-4 differentiators.**
1. Auto-instrumentation — no code changes required.
2. Per-trace pricing instead of per-host (10x cheaper for high-cardinality workloads).
3. Native AI explainer that summarizes incidents in plain English.
```

---

## Edge cases

### Conflicting docs

If two docs contradict each other (e.g., older pitch deck says "B2B SaaS only," newer one-pager says "B2B and B2C"), don't silently pick one. Surface the conflict:

> *"Your 2024 pitch deck describes you as B2B SaaS only, but the one-pager from last month also mentions B2C. Which is current?"*

Use the user's answer; ignore the stale doc for that field.

### Outdated docs

User says "this is old, don't trust the pricing." Honor it — skip the pricing-relevant fields in that doc and ask the user via the gap-filling phase instead.

### Non-English docs

If a doc is in a language you can reliably parse, proceed in that language. Confirm with the user that they want context written in the same language. If it's a language you can't reliably parse (rare), ask the user to provide a summary or translate the relevant sections.

### Very long docs

For docs over ~50 pages or ~50K tokens, ask the user which sections matter. Don't blindly process the whole thing — most of it is probably not context-relevant.

### Multimedia docs

PDFs, images of slides, screenshots: parse what you can. If something is illegible (e.g., low-res slide screenshot), tell the user and ask them to paste the relevant text.

### Sensitive content

If a doc contains obviously sensitive content (employee compensation data, customer PII, NDA-restricted information), flag it and ask if the user really wants it written into context files. Most likely they shared the wrong doc.

---

## Anti-patterns specific to ingestion

| Anti-pattern | Problem | Instead |
|---|---|---|
| **Inventing content the doc doesn't support** | Fabricated facts propagate downstream | Quote or paraphrase only; if it's not in the doc, ask |
| **Force-fitting a doc that doesn't match a context file** | Garbage in, garbage out | If a doc doesn't fit, skip it for context (still useful for voice samples sometimes) |
| **Writing without showing the draft** | User loses control | Always show; always confirm |
| **Treating one doc as authoritative for everything** | Pitch decks are good for identity, not for voice | Match doc → context-file per the mapping table |
| **Mixing facts from multiple docs without noting** | User can't audit what came from where | When a draft pulls from multiple docs, note source per section |
| **Ignoring outdated/conflicting flags** | Wrong info gets canonized | Take the user's word; skip stale fields |
