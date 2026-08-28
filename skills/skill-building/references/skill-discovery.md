# Skill Discovery & Curation

> How to find the skills worth building, decide which ones don't belong, and keep a growing library routable.

**Part of:** [Skill Building](../skill-building-skill.md)

---

## Curation Is the Architecture

The Baseline System ships 13 skills, not 60. That number is a design decision, not a backlog.

A skill only pays for itself if it fires on the right task and carries judgment the model doesn't already have. Every skill you add also makes picking the right one harder — for the AI and for the person. So the default answer to "should this be a skill?" is **no**, and everything below exists to give you the evidence to overturn it.

Two failure modes, both common:

| Failure | What it looks like | Cost |
|---------|-------------------|------|
| **Bloat** | 40 overlapping skills, several plausible matches per request | The AI routes to the wrong skill, or loads three; nobody trusts the library |
| **Import** | Installing someone else's skill library wholesale | Their skills encode their judgment about their work — the transferable part is the format, not the value |

The part of a skill that makes it worth having is the part that isn't transferable. That's why the method below starts with your own work, not with a search.

---

## Mining Your Own Work

### Where the signal is

Ranked by how much judgment they carry:

1. **Repeated corrections.** You fixed the same thing in AI output twice in a week. The correction *is* the skill content — it's a rule you hold that the model doesn't.
2. **Redone outputs.** You rewrote AI output substantially before shipping it. Diff what the AI produced against what you shipped; the diff is the skill.
3. **Prompts you keep retyping.** Anything living in a notes app because you paste it weekly is a skill that hasn't been written down yet.
4. **Onboarding explanations.** What you explain to every new person doing this work. If you've said it three times to three humans, it's methodology.
5. **Post-mortems.** What went wrong and what "should have been checked" — that sentence is an anti-pattern and a quality check, already written.

### The extraction protocol (30–60 minutes)

1. **Collect 5–10 real artifacts** of one work type — transcripts, drafts, review comments, diffs. Work from artifacts, not memory. Memory produces generic principles ("be clear, know your audience"); artifacts produce specific ones.
2. **Mark every judgment call.** Highlight each point where someone *decided* rather than *executed*. Execution belongs in a template; decisions belong in a skill.
3. **Group them into 3–8 recurring decisions.** Fewer than 3 and there isn't a skill here yet. More than 8 and you're probably looking at two skills.
4. **Write each as a rule with its counter-case** — "do X, unless Y." A rule with no counter-case is a platitude; the counter-case is where the expertise lives.
5. **Find the disagreement.** If a competent practitioner wouldn't argue with your principle, it isn't carrying weight. Sharpen it until someone could, or cut it.
6. **Name the failure each rule prevents.** Trace every anti-pattern back to a specific artifact from step 1. Invented anti-patterns read as filler and get ignored.

### The test

Could a competent stranger produce output at your quality bar using only this document? If yes, you have a skill. If they'd still need you in the room, keep mining — the thing you'd have to tell them is the missing content.

---

## The Gate — When NOT to Add a Skill

| Signal | Why it isn't a skill | Do this instead |
|--------|---------------------|-----------------|
| The model already does it well with no instruction | You'd be encoding what's already free | Nothing, or a one-line prompt |
| You've done the task once | No repeatable judgment observed yet — one instance is an anecdote | Wait for the third time |
| It's facts about your business | Skills are portable; facts are not | `context/extended/[topic].md` |
| It's one step inside an existing skill's workflow | Splitting it fragments routing and duplicates context loading | Extend that skill's workflow |
| Its triggers overlap an existing skill by ~80% | Two plausible matches means unreliable routing | Add a section + trigger words to the existing skill |
| It's a checklist with no judgment calls | Nothing to teach — only steps to follow | A template in `references/`, or a `frameworks/` file |
| Someone else's version looked good | It encodes their judgment about their work | Mine your own equivalent from your own artifacts |

**Rule of three.** Don't create a skill until you've done the work at least three times, or until a second person needs to do it your way.

**Improve in place.** The first move on any gap is to extend the skill that already owns the domain. New skills are for new domains, not new tasks. A domain nobody owns yet is the only clean case for a new folder.

---

## Keeping a Growing Library Findable

Routing is mechanical in this system, and knowing the mechanism tells you exactly what to write.

### How routing actually works

- **`AGENTS.md` is generated, not hand-written.** `buildSkillTable()` in `cli/src/commands/init.ts` walks `skills/`, reads each `manifest.yaml`, and emits one row per skill — `| <manifest description> | <manifest skill> |` — sorted alphabetically by skill name. That table becomes Step 1 of the Skill Execution Protocol.
- **It is regenerated on install and on update.** Both `npx @baseline-studio/cli init` and `npx baseline update` rewrite `AGENTS.md`, `CLAUDE.md`, and `.github/copilot-instructions.md` from whatever is in `skills/` at that moment (`cli/src/commands/update.ts`).
- **Therefore your manifest's `description` is the routing key.** It is the only text the AI matches a user's request against when picking a skill. Everything else in the skill — principles, workflow, quality checks — only gets read *after* that match succeeds.

### Writing a description that routes

```yaml
# Bad — matches everything, so it matches nothing reliably
description: Helps with content and communication

# Good — the artifacts a user would actually ask for
description: Blog posts, newsletters, launch emails, social copy, headlines
```

Four rules:

1. **List artifacts, not the domain.** People ask for a thing ("write release notes"), not a discipline ("technical communication").
2. **Use the user's words, including synonyms.** "Deck" and "presentation" both belong if both get typed.
3. **Keep it under ~15 words.** The table is scanned, not read.
4. **Don't share task words with another skill.** If two descriptions both claim "case studies," pick an owner, delete it from the other, and record the distinction in the Common Skill Overlaps table in `skills/_README.md`.

### What makes a skill invisible

`buildSkillTable()` only emits a row for a directory under `skills/` that:

- does **not** start with `.` or `_`,
- contains a `manifest.yaml`,
- whose YAML parses.

A folder with no manifest — or a manifest with a syntax error — is skipped silently. The skill exists on disk, loads fine if named explicitly, and is invisible to routing. If a skill "never fires on its own," check the manifest before rewriting the skill.

### Why the library stays cheap as it grows

The routing table costs one line per skill. The skill body only loads once it fires, and its references only load when the task needs them. That's the point of the lean-core/deep-references rule: growth costs you routing clarity long before it costs you tokens. **Bloat is a routing problem first.**

---

## Custom Skills Across Updates

| Behavior | What happens | Source |
|----------|--------------|--------|
| **Custom skills are preserved** | Any `skills/` folder not present in the release is treated as custom, saved aside, and restored after core content syncs | `cli/src/commands/update.ts` |
| **Core skill edits are overwritten** | Core directories are removed and re-copied on update — in-place edits to a shipped skill are lost | `cli/src/commands/update.ts` |
| **Name collisions go to core** | If a later release ships a skill with your folder's name, yours is moved to `<name>.custom-backup` and core wins | `cli/src/commands/update.ts` |

**Gotchas:**

- **Namespace your custom skills** (`acme-pricing-review`, not `pricing`) so a future core release can't collide with them.
- **`AGENTS.md` regenerates only on `init` and on a real version update.** `npx baseline update` returns early when you're already on the latest version, so it does not regenerate the routing table. Add a custom skill in between and it won't appear in the table until the next version lands — add its row to `AGENTS.md` by hand, and the next update will rebuild it from your manifest.
- **Never customize by editing a core skill file.** Custom behavior belongs in your own skill folder or in `context/`; that's the only form that survives an update.
