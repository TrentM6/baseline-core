---
name: setup
description: Guided context setup for a fresh Baseline System. Use after `npx @baseline-studio/cli init` to fill the user's context files — ingesting any docs they already have (pitch deck, brand guide, product spec, etc.) and asking targeted gap-filling questions for what's missing.
---

# Setup

Setup is how a freshly-scaffolded Baseline System learns who the user is. It runs once per system. Every other skill produces better output because of what setup captures.

The default path is **doc-first**: most users have written collateral already (pitch deck, one-pager, brand guide, product spec). Have them drop those in chat, parse what fits each context file, confirm with the user, write to disk. Then ask short gap-filling questions only for what the docs didn't cover. Users with no docs run a guided questionnaire instead — but with multiple-choice options where they make sense, not 80 cold open prompts.

---

## Core Principles

1. **Use what the user already has.** A pitch deck answers half the identity questions for free. Don't ask a user to retype what they can paste.

2. **Show drafts, don't just write.** Before saving any context file, show the user the draft you extracted or composed and ask for confirmation. Edits are cheap when proposed; expensive when discovered later.

3. **Ask fewer, sharper questions.** A multiple-choice "what stage are you?" beats an open "describe your company stage." Always offer free-text fallback.

4. **Voice is special — get a sample first.** Asking "what's your voice?" cold produces useless answers. Ask for 2-3 samples of the user's existing writing and infer voice rules from them. See [voice-elicitation.md](references/voice-elicitation.md).

5. **Never block on missing context.** If the user can't or won't answer something, write what you have and move on. Empty context produces more generic output, not broken output.

6. **Stage-aware.** A pre-launch company can't answer "what's your typical deal size." A growth-stage company doesn't need to redo positioning. Ask the user's stage first; skip questions that don't apply.

7. **One pass per file.** Don't loop back to identity.md after moving to product.md. If the user wants to revise, they can re-run setup or edit the file directly.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../frameworks/workflow-orchestration.md) for the universal workflow approach. Below are the setup-specific details for each step.

### 1. Plan Before Executing

Present a brief plan to the user before doing any work. The plan covers:

1. **Detect state.** Read every context file in the manifest. Note which ones are placeholder (`<!-- Add your content here -->` or empty) vs. populated.
2. **Ask the doc-availability question** (use `AskUserQuestion` if available; prose with explicit options otherwise):
   > Do you already have business or project docs you can share? (pitch deck, one-pager, brand guide, product spec, ICP doc, anything like that)
   - **Yes, I have docs** → Doc Ingestion path (default)
   - **Some, but not all** → Doc Ingestion path; gaps trigger questions
   - **No, start from scratch** → Guided Questionnaire path
3. **Ask scope** (also via `AskUserQuestion` if available):
   - **Quick (~10 min):** identity + voice + co-founder. Enough to start using the system meaningfully.
   - **Full (~depends on docs):** all 10 context files.
4. **Confirm the plan** and wait for approval before continuing.

### 2. Clarify Before Starting

Before executing, gather:

- **Stage:** pre-launch / early / growth / mature. Drives which questions and which context files are relevant.
- **Doc list (if doc path):** ask the user to drop the docs they have. Accept any format Claude can read — pasted text, attached files, URLs to fetch. Tell them to dump everything relevant in one message; you'll sort.
- **Anything they explicitly want to skip.** Some users will say "don't bother with pricing — I'm pre-launch" or "skip visual-identity, I haven't designed the brand yet." Honor it.

### 3. Load Relevant Context

Per the manifest. The files exist (init scaffolds them) but most are placeholder. Read each one to detect state — populated files get skipped or offered for revision.

**Always load:**
- [frameworks/workflow-orchestration.md](../../frameworks/workflow-orchestration.md) — the universal workflow
- This skill file

**Load when needed:**
- [Doc Ingestion Guide](references/doc-ingestion-guide.md) — when on the doc-first path; covers doc-type → context-file mapping, extraction methodology, output format specs
- [Gap-Filling Questions](references/gap-filling-questions.md) — when asking gap questions, doc-first or full-questionnaire
- [Voice Elicitation](references/voice-elicitation.md) — always consult before writing voice.md

### 4. Execute — Path A: Doc Ingestion

For each doc the user provides:

1. **Identify what it informs.** Use the mapping in [doc-ingestion-guide.md](references/doc-ingestion-guide.md):
   - Pitch deck / one-pager → identity, product, competitive, proof-points
   - Brand guide → voice, visual-identity, formatting
   - Product spec / PRD → product, technical, users
   - ICP doc / persona doc → users, icp
   - Pricing page / sales deck → pricing, proof-points
   - Recent emails / blog posts / web copy → voice (sample-based)

   Announce what you're doing: *"This pitch deck informs identity.md, product.md, and competitive.md. I'll work through them in that order."*

2. **For each informed context file, extract and draft.** Use the format spec in [doc-ingestion-guide.md](references/doc-ingestion-guide.md) — typically a `# {Title}` header followed by `**Question**\nAnswer` blocks matching [context-prompts.yaml](../../context-prompts.yaml). Quote or paraphrase from the doc; don't invent content.

3. **Show the draft inline. Confirm before writing.**
   > *"From your pitch deck, here's what I pulled for `identity.md`:"*
   > ```markdown
   > # Company Identity
   >
   > **What does your company do in one sentence?**
   > [extracted answer]
   > ...
   > ```
   > *"Does this look right?"*

   Use `AskUserQuestion` if available with options:
   - **Looks good — write it**
   - **Edit before writing** (user provides corrections inline; redraft and re-confirm)
   - **Skip this file** (move on; it stays placeholder)

4. **Write the confirmed draft** to the context file, replacing the placeholder content.

5. **Tally what's left.** After all docs are processed, list which context files are now populated and which are still placeholder. Move to the gap-filling questionnaire scoped to whatever's still empty (and in scope per the user's Quick/Full choice and stage).

### 4. Execute — Path B: Guided Questionnaire (also runs for gaps after ingestion)

Walk remaining context files one at a time, in priority order:
1. core/identity.md
2. core/voice.md (special — see Voice subroutine below)
3. extended/co-founder.md (Quick path stops here)
4. extended/product.md
5. extended/users.md
6. extended/icp.md
7. extended/competitive.md
8. extended/pricing.md
9. extended/technical.md
10. extended/visual-identity.md
11. extended/formatting.md
12. extended/proof-points.md

For each file in scope:

1. **Read the question set** from [gap-filling-questions.md](references/gap-filling-questions.md). Each question has a question text, optional multiple-choice options, and a free-text fallback flag.

2. **Ask via `AskUserQuestion`** when options exist (e.g., stage, pricing model, voice tone words). Always include "Other / write your own."

3. **Ask via prose** when the answer is genuinely open (e.g., "describe your typical user's day-to-day"). Keep it short — 1 question per turn, not a wall.

4. **Cap at ~3 questions per file** for a single pass. The goal is "good enough to use the system," not "exhaustive." Users who want depth can re-run setup or run `npx baseline context` later.

5. **Summarize back as a markdown draft.** Show the file you're about to write. Ask "does this capture it?" Allow edit / approve / skip.

6. **Write to file.** Move on.

### 4. Voice subroutine (special handling)

Voice is the hardest context file to fill via direct questions. Default to sample-based extraction.

1. **Ask for samples first:**
   > *"For voice, the best signal is examples of your existing writing. Can you paste 2-3 samples — recent emails to clients, blog posts, LinkedIn posts, web copy? Anything that sounds like you at your best."*

2. **If user provides samples:** read them, infer voice attributes (3-5 words), language always-rules, language never-rules, and a "sounds like" / "doesn't sound like" example. Show the inferred draft. Confirm. Write.

3. **If user has no samples:** fall back to multiple-choice tone words from [voice-elicitation.md](references/voice-elicitation.md) and a short list of common always/never rules. Confirm. Write.

4. **Always include a `Write a sentence that sounds nothing like your brand` example.** This is the single most useful voice signal — it gives the system a concrete anti-example to steer away from.

See [voice-elicitation.md](references/voice-elicitation.md) for the full extraction methodology and tone-word lists.

### 5. Validate

When all in-scope files are written:

1. **Show a completion summary** — a table of context files: `Filled (from docs)`, `Filled (from questions)`, `Still placeholder`. Make it clear what was captured and what's still empty.

2. **Quality check.** Run the checks in the Quality Checks section below. Flag any thin file (e.g., identity.md missing differentiator; voice.md with fewer than 3 voice words).

3. **Suggest next steps:**
   > *"Try Co-Founder Mode now — say 'let's brainstorm.' It'll load your identity, voice, and co-founder context and act as your strategic thinking partner. Or run any skill — your context is loaded automatically."*

4. **Don't loop.** If the user wants to add more later, they can re-run setup or run `npx baseline context` for the full structured pass.

---

## Detecting placeholder vs. populated context

A context file is **placeholder** if any of the following are true:
- It contains the literal string `<!-- Add your content here -->`
- It is empty (zero bytes)
- It contains only the title heading (`# Title`) followed by whitespace

Otherwise, treat it as **populated** — even if thin. Don't overwrite populated content silently. If the user re-runs setup on a populated file, ask:
- **Revise this file** (read existing content, propose changes, confirm)
- **Add to this file** (preserve existing content, append new sections)
- **Skip** (leave as-is, move on)

---

## Quality Checks

### Per-file checks

**identity.md:**
- [ ] Answers "what does your company do in one sentence?"
- [ ] Names primary customers
- [ ] Names at least one differentiator
- [ ] Captures stage (pre-launch / early / growth / mature)

**voice.md:**
- [ ] Lists 3-5 voice attribute words
- [ ] Has at least 1 always-rule
- [ ] Has at least 1 never-rule
- [ ] Includes a "sounds nothing like our brand" anti-example

**Other extended files:**
- [ ] Title header present
- [ ] At least one populated question/answer block
- [ ] No `<!-- Add your content here -->` markers remaining (if file was in-scope)

### Process checks

- [ ] Every draft was shown to the user before writing
- [ ] User explicitly confirmed (or edited then confirmed) every file written
- [ ] Files the user asked to skip are still placeholder (not partially filled)
- [ ] Voice was extracted from samples if any were provided (not asked cold)
- [ ] Stage was confirmed before asking stage-dependent questions

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|---|---|---|
| **Asking 80 questions in a row** | The exact thing setup replaces | Doc-first; cap at ~3 questions per file in gap-filling |
| **Writing files without showing the draft** | User loses control; bad drafts get committed | Always show the draft, always confirm |
| **Asking voice questions cold** | Produces meaningless answers | Ask for samples first; only fall back to questions if none exist |
| **Ignoring stage** | Pre-launch users get pricing-objection questions | Always confirm stage in Clarify; skip irrelevant sections |
| **Inventing content not in the docs** | Fabricated context propagates downstream | Quote or paraphrase only; if a doc doesn't cover it, ask |
| **Looping back to revise** | Setup never ends; user fatigues | One pass; user can re-run if they want |
| **Skipping the validation summary** | User doesn't know what was captured | Always show the completion summary |
| **Treating co-founder.md as optional** | Co-Founder Mode falls flat without it | Quick path always covers identity + voice + co-founder |

---

## When to Escalate

Stop and ask the user when:

- **A doc contains conflicting info** (e.g., two pitch deck versions with different positioning). Ask which is current.
- **The user's stated voice contradicts their samples** (e.g., they say "we're casual" but samples are formal). Surface the gap; ask which to follow.
- **The user provides docs in a language you can't reliably parse.** Ask if they want to translate first or proceed in the original language.
- **The user wants to skip everything.** Confirm — this is fine; the system will produce more generic output and they can re-run setup later. Don't push through.

---

## Output Expectations

After a successful setup run:

- **Quick path:** identity.md, voice.md, and co-founder.md are populated. Other extended files remain placeholder. The user can run any skill and get reasonable output that sounds like them.
- **Full path:** every in-scope context file is populated to a quality-check-passing standard. The user is fully set up.
- **Either path:** the completion summary clearly shows what was filled and what's still empty. The user knows their next move.

---

## When to Use This Skill vs. Others

| If you need to... | Use | Not |
|---|---|---|
| First-time setup of a fresh system | Setup | npx baseline context (CLI alternative; valid but doesn't ingest docs) |
| Re-fill all context with deeper questions | npx baseline context | Setup (setup is one-pass, not exhaustive) |
| Add a single new context file | npx baseline context add `<name>` | Setup |
| Brainstorm strategy after setup is done | Co-Founder Mode | Setup (setup is for filling context, not using it) |
| Update one specific context file | Edit the file directly, or `npx baseline context` | Setup |
