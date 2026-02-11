---
name: technical-documentation
description: Create clear, accurate product documentation. Use for user guides, help center content, feature documentation, onboarding guides, release notes, and knowledge bases.
---

# Technical Documentation

Product documentation helps users understand, use, and troubleshoot products. Good documentation is clear, accurate, findable, and maintained. It reduces support burden and improves user success.

---

## Core Principles

1. **Write for the reader, not yourself.** Documentation serves users. What do they need to know? What are they trying to do?

2. **Accuracy is non-negotiable.** Wrong documentation is worse than no documentation. Verify everything.

3. **Show, don't just tell.** Examples, screenshots, and code samples make abstract concepts concrete.

4. **Scannable first, readable second.** Users scan for answers. Make structure obvious. They'll read when they find the right section.

5. **Maintenance is half the work.** Outdated docs erode trust. Build in processes to keep docs current.

6. **Link, don't repeat.** Single source of truth. Link to authoritative content rather than duplicating.

7. **Progressive disclosure.** Start simple, go deep. Quick start first, advanced topics later.

### Industry Principles

8. **Task-oriented structure.** Organize around what users want to do, not how the product is built.

9. **Consistent terminology.** Use the same words for the same things. Create a glossary if needed.

10. **Accessible language.** Clear, simple language. Avoid jargon unless defining it.

11. **Visual hierarchy.** Headers, lists, code blocks, callouts — structure helps navigation.

12. **Test with real users.** Can they complete tasks using your docs? If not, revise.

---

## Workflow

> Follow the [Workflow Orchestration Pattern](../../_FRAMEWORKS/workflow-orchestration.md) for the universal workflow approach. Below are the documentation-specific details for each step.

### 1. Clarify Before Starting

Before writing documentation, understand:

- **Who is the audience?** New user, power user, admin?
- **What's the purpose?** Learn a concept, complete a task, troubleshoot?
- **What's the scope?** Single feature, entire product, quick start?
- **What format?** Tutorial, reference, how-to, explanation?
- **What exists already?** Building on existing docs or starting fresh?
- **Who maintains it?** What's the update process?

### 2. Load Relevant Context

**Core context (always load):**
- `core/identity.md` — Product terminology, positioning
- `core/voice.md` — Voice and tone guidelines

**Extended context (load for documentation):**
- `extended/formatting.md` — Document structure, headers, lists, tables
- Existing documentation style guide (if it exists)

**Load when needed:**
- [Documentation Standards](references/documentation-standards.md) — Style guide standards, formatting conventions
- Similar existing docs (for pattern consistency)
- Product specifications (for accuracy)

### 3. Choose the Right Format

**The Divio Documentation System:**

| Type | Purpose | Focus |
|------|---------|-------|
| **Tutorial** | Learn by doing | Teaching, step-by-step to completion |
| **How-to** | Accomplish a task | Problem-solving, goal-oriented steps |
| **Reference** | Look up details | Information, comprehensive, accurate |
| **Explanation** | Understand concepts | Discussion, background, why |

**Match format to need:**
- New user? → Tutorial
- Specific task? → How-to
- Looking up settings/options? → Reference
- Understanding how something works? → Explanation

### 4. Writing Process

**Outline First:**
1. List all topics to cover
2. Organize by user task or logical flow
3. Identify gaps or dependencies
4. Get outline reviewed before drafting

**Draft:**
1. Write quickly, don't over-edit
2. Focus on accuracy and completeness
3. Add placeholders for examples/screenshots
4. Note questions or uncertainties

**Revise:**
1. Check technical accuracy
2. Simplify language
3. Add examples and visuals
4. Ensure consistent formatting
5. Test procedures by following them

**Review:**
1. Technical review (is it accurate?)
2. Editorial review (is it clear?)
3. User review if possible (can they use it?)

---

## Documentation Types

### Quick Start Guide

**Purpose:** Get users to first success fast
**Length:** 1-2 pages
**Audience:** New users

**Structure:**
1. What you'll achieve (outcome)
2. Prerequisites (what you need)
3. Steps (minimal to first success)
4. Next steps (where to go from here)

### How-To Guide

**Purpose:** Help users accomplish specific task
**Audience:** Users with a goal

**Structure:**
1. Goal statement (what you'll accomplish)
2. Prerequisites
3. Steps (clear, numbered)
4. Verification (how to know it worked)
5. Troubleshooting (common issues)

### Reference Documentation

**Purpose:** Look up detailed information
**Audience:** Users who know what they're looking for

**Structure:**
- Organized logically (alphabetical, by category)
- Consistent format for each entry
- Complete information (all options, settings)
- Cross-references to related items

### Feature Documentation

**Purpose:** Explain what a feature does and how to use it
**Audience:** Users exploring capabilities

**Structure:**
1. What it does (outcome, not mechanics)
2. When to use it (use cases)
3. How to use it (steps)
4. Settings/options (if applicable)
5. Tips and best practices

### Release Notes

**Structure:**
- Version number and date
- Summary (1-2 sentences)
- New features
- Improvements
- Bug fixes
- Breaking changes / migration notes
- Known issues

---

## Writing Style

### Language Guidelines

**Use:**
- Active voice ("Click the button" not "The button should be clicked")
- Present tense ("This opens the menu" not "This will open the menu")
- Second person ("You can configure..." not "Users can configure...")
- Simple words (use "start" not "initiate")

**Avoid:**
- Jargon (unless defined)
- Ambiguous pronouns ("it" — what is "it"?)
- Double negatives
- Unnecessarily complex sentences

### Formatting Conventions

**Bold:** UI elements, important terms
**Code:** Commands, file names, code, values
*Italic:* Emphasis, introducing terms

**Use:**
- Code blocks for multi-line code
- Tables for structured information
- Numbered lists for steps
- Bulleted lists for items
- Callouts for warnings/tips

---

## Quality Checks

### Accuracy Quality

- [ ] All technical information verified?
- [ ] Code samples tested and working?
- [ ] Screenshots current?
- [ ] Version numbers correct?

### Clarity Quality

- [ ] Can a new user understand this?
- [ ] Jargon defined or avoided?
- [ ] Instructions unambiguous?
- [ ] Examples included where helpful?

### Structure Quality

- [ ] Easy to scan and navigate?
- [ ] Headers are descriptive?
- [ ] Consistent formatting?
- [ ] Related topics linked?

### Completeness Quality

- [ ] All user tasks covered?
- [ ] Prerequisites stated?
- [ ] Edge cases addressed?
- [ ] Troubleshooting included?

---

## Anti-Patterns

| Anti-Pattern | Problem | Instead |
|--------------|---------|---------|
| **Outdated information** | Erodes trust, causes errors | Process to update with product |
| **Untested code samples** | Frustration, support burden | Test every sample |
| **Wall of text** | Users can't find info | Headers, lists, structure |
| **Writing for experts** | Excludes new users | Layer: simple → advanced |
| **Burying important info** | Users miss critical steps | Lead with the important stuff |
| **Duplicating content** | Maintenance nightmare | Link to single source of truth |
| **Ignoring feedback** | Docs stay broken | Track and address user issues |

---

## When to Use This Skill vs. Others

| If you need to... | Use this skill | Not... |
|-------------------|----------------|--------|
| Write user guides | Technical Documentation | Marketing (helping vs. selling) |
| Write help center content | Technical Documentation | Marketing (task-focused) |
| Write feature documentation | Technical Documentation | Marketing (explaining vs. promoting) |
| Write release notes | Technical Documentation | Marketing (informing vs. selling) |
| Write onboarding guides | Technical Documentation | UX Design (docs vs. interface) |
| Write marketing copy | Marketing | Technical Documentation (different goal) |
| Write research findings | Research & Synthesis | Technical Documentation (different format) |

---

## Output Expectations

**Quick start:** Gets user to first success in under 10 minutes

**How-to guide:** Complete, accurate steps that actually work

**Feature docs:** Clear explanation, use cases, steps to use

**Reference:** Comprehensive, accurate, well-organized

**Release notes:** Clear, scannable, user-focused

---

## When to Escalate

Flag for review when:

- Technical accuracy you can't verify
- Security or compliance-sensitive content
- Changes to official product terminology
- Content that might confuse or mislead users
- Major restructuring of documentation
- Feature changes affecting existing user workflows
