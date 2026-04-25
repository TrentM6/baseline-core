# Voice Elicitation

> Reference for the Setup skill. Covers the special handling for `core/voice.md` — sample-based extraction first, multiple-choice fallback, and the full set of voice attributes / always / never rules to draw from.

Voice is the highest-leverage context file and the one users describe worst. Asking "describe your voice" cold produces answers like "professional but human" — useless for steering output. Sample-based extraction always wins. This file is the methodology.

---

## Why sample-based extraction works

- Voice is something writers *do*, not something they accurately describe. Their stated voice and their actual voice often diverge.
- A 200-word sample contains more voice signal than a paragraph of self-description.
- 2-3 samples reveal patterns: sentence rhythm, vocabulary, hedging vs. directness, formality, use of technical terms.
- The user can confirm or correct the inferred voice — much easier than generating it from scratch.

---

## Methodology

### Step 1: Ask for samples

Open with this exact framing (or close to it):

> *"For voice, the best signal is examples of your existing writing. Can you paste 2-3 samples? Recent emails to clients, blog posts, LinkedIn posts, web copy — anything that sounds like you at your best. Around 200-500 words each is plenty."*

Acceptable sample types (in rough order of usefulness):
1. Recent emails — most authentic, least curated
2. LinkedIn / Twitter / blog posts — voice-forward by design
3. Web copy (homepage, about page) — polished but indicative
4. Sales pitches, proposals, PRDs — formal but stylistic
5. Internal docs, design critiques — useful for "internal" voice variants

Avoid:
- Marketing copy written by an agency (not the user's voice)
- Quotes from books or articles the user admires (aspirational, not actual)
- Drafts the user dislikes ("here's an example of bad voice for me")

If the user offers a "bad" sample, ask them to provide a "good" one too — useful as a contrast.

### Step 2: Read and infer

Read each sample and note:

**Rhythm:**
- Average sentence length — short clipped sentences vs. long compound sentences
- Variation — uniform vs. varied
- Use of fragments

**Vocabulary:**
- Common words and phrases that recur
- Technical terms used naturally vs. avoided
- Casual vs. formal word choices ("kind of" vs. "somewhat")
- Idioms, sports/military metaphors, regional language

**Stance:**
- Confident assertions vs. hedged ("it might be," "I think we could")
- Direct vs. indirect ("you should X" vs. "perhaps consider X")
- First-person vs. company-voice ("I think" vs. "we believe")
- Use of "I" vs. "we" vs. omitted subject

**Texture:**
- Use of humor / wit
- Self-deprecation
- Use of em dashes, colons, parentheticals
- Use of emoji, exclamation marks, ALL CAPS for emphasis
- Use of profanity

**Structure:**
- Opening style — straight to point vs. context-setting vs. story
- CTA style — direct ask vs. soft suggestion vs. open question
- Closing style

### Step 3: Draft voice attributes

Based on what you observed across samples, propose:

- **3-5 voice words** that capture the dominant tone (drawn from the list below or the user's own)
- **2-3 always-rules** (specific, not vague — "use 'I' not 'we'" beats "be personal")
- **2-3 never-rules** ("no jargon," "no emoji," etc.)
- **One "sounds nothing like our brand" anti-example** that the user might write to clarify what NOT to produce

### Step 4: Show and confirm

Use this exact pattern:

> *"Based on your samples, here's what I extracted for `voice.md`. Tell me what to change."*
>
> ```markdown
> # Brand Voice
>
> **Voice attributes:** confident, direct, technical, slightly irreverent, sincere
>
> **Always:**
> - Lead with the conclusion. Skip throat-clearing intros.
> - Use "I" not "we" — this is a personal voice, not a corporate one.
> - Short paragraphs. Most paragraphs are 1-2 sentences.
>
> **Never:**
> - No jargon. If a term isn't in [user's industry] vernacular, define or replace.
> - No emoji.
> - No exclamation marks for emphasis.
>
> **Anti-example (sounds nothing like the brand):**
> "We're thrilled to announce our exciting new partnership with industry leaders to deliver world-class solutions! 🚀"
> ```
>
> *"Does this capture how you write?"*

If user approves → write to voice.md. If user wants edits, redraft and re-confirm. One round of edits is normal; don't loop endlessly.

### Step 5: If user has no samples

Fall back to multiple-choice extraction.

> *"No samples? No problem. Let me ask a few questions to capture the voice."*

Use `AskUserQuestion` (or prose with options) for these:

**Q1: Pick 3-5 words that describe your voice.**
- Multi-select from the curated list below.

**Q2: Active or passive voice?**
- Always active
- Mostly active
- Mixed
- Passive when it sounds better

**Q3: Sentence length?**
- Short and punchy
- Medium, varied
- Long, considered

**Q4: Formality?**
- Casual / conversational
- Conversational with technical depth
- Polished but not corporate
- Formal and authoritative

**Q5: One thing your brand should NEVER do or say?** (prose)

**Q6: Write a sentence that sounds nothing like your brand.** (prose — required, even if hard)

Compose voice.md from these answers, show the draft, confirm.

---

## Curated voice attribute list

Use these as options when offering multi-select. Always include "Other / write your own."

**Energy / pace:**
- urgent
- calm
- deliberate
- snappy
- measured

**Stance:**
- confident
- humble
- bold
- careful
- contrarian
- pragmatic

**Texture:**
- direct
- nuanced
- blunt
- diplomatic
- candid

**Warmth:**
- warm
- cool
- friendly
- professional
- intimate
- detached

**Tone:**
- serious
- playful
- witty
- earnest
- ironic
- sincere

**Register:**
- casual
- conversational
- polished
- formal
- technical
- accessible

**Personality:**
- irreverent
- respectful
- bold
- humble
- authoritative
- helpful
- generous

**Texture (writing-specific):**
- spare
- rich
- clinical
- vivid
- minimal
- detailed

---

## Common always/never rules (offer as options, not prescriptions)

### Common always-rules

- Lead with the conclusion
- Use "I" not "we"
- Active voice
- Short sentences (under 20 words)
- Concrete over abstract
- Specific examples, not generalizations
- Numbers when you have them
- Define jargon on first use
- Use "you" to address the reader
- Use the present tense

### Common never-rules

- No jargon
- No emoji
- No exclamation marks (or: only one per piece)
- No em dashes
- No "we're excited to announce"
- No marketing-speak ("synergy," "leverage," "best-in-class")
- No hedging ("just," "really," "actually," "perhaps")
- No filler intros ("In today's fast-paced world...")
- No ALL CAPS for emphasis
- No semicolons

These are common — surface them as suggestions, but the user's actual rules should come from their samples or stated preferences. Never write a rule the user didn't endorse.

---

## Anti-patterns

| Anti-pattern | Problem | Instead |
|---|---|---|
| **Asking "describe your voice" cold** | Generic, useless answers | Ask for samples first, every time |
| **Trusting stated voice over actual writing** | Stated voice and actual voice often diverge | Cross-check stated voice against samples; flag conflicts |
| **Writing voice.md from a brand guide alone** | Brand guides describe aspirational voice | If a brand guide exists, also ask for one or two recent emails or posts to validate |
| **Voice rules without examples** | Abstract rules don't steer output | Always include an anti-example sentence |
| **Generating "sounds like our brand" examples without user input** | The system shouldn't speak for the user | Have the user write the "sounds like" example themselves; you can write the anti-example |
| **Skipping voice.md because it's hard** | The single most consequential context file | Always fill it, even if shallow — 3 voice words + 1 anti-example is enough to start |
