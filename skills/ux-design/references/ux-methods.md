# UX Methods

> Research methodologies, synthesis techniques, personas, journey mapping, and usability testing frameworks.

**Part of:** [UX Design](ux-design/ux-design-skill.md)

---

## User Research Methods

### Discovery Research

**Purpose:** Understand the user's world before designing anything

**User Interviews**

When to use: Starting a project, exploring a problem space, understanding context

Interview structure:
1. **Warm-up (2-3 min):** Build rapport, explain the process
2. **Context (5-10 min):** Understand their role, environment, typical day
3. **Core questions (20-30 min):** Explore behaviors, pain points, goals
4. **Wrap-up (5 min):** Ask for anything missed, thank them

Question types:
- **Behavioral:** "Walk me through the last time you..." (what they actually do)
- **Contextual:** "Tell me about your typical day when..." (environment and constraints)
- **Motivational:** "What were you hoping to accomplish?" (underlying goals)
- **Pain points:** "What's frustrating about...?" (problems to solve)

Interview principles:
- Ask about past behavior, not future predictions
- Follow the energy — dig deeper when they light up
- Silence is okay — let them think
- Don't lead ("Do you find X difficult?" → "Tell me about X")
- Don't validate ("That's a great idea!" → "Tell me more")

**Contextual Inquiry**

When to use: When you need to observe real behavior in context

Process:
1. Go to where the work happens
2. Observe without interrupting
3. Ask questions as they work
4. Document the environment, tools, workarounds

What to capture:
- Physical environment
- Tools and artifacts used
- Interruptions and context switches
- Workarounds and hacks
- Collaboration patterns
- Pain points visible in behavior

**Diary Studies**

When to use: When behavior happens over time or sporadically

Setup:
1. Define what participants should log
2. Provide simple logging method (app, messages, photos)
3. Set clear prompts and timing
4. Run for 1-2 weeks typically
5. Follow up with interviews

Log prompts:
- When did this happen?
- What were you trying to do?
- What actually happened?
- How did you feel?
- What would have helped?

---

### Evaluative Research

**Usability Testing**

When to use: Validating designs, finding problems, comparing options

Test types:
- **Moderated:** Facilitator guides, real-time observation
- **Unmoderated:** Participant alone, recorded for later
- **Guerrilla:** Quick, informal testing in public spaces

Sample size: 5-7 users per round (finds ~85% of issues)

Test structure:
1. **Welcome (3 min):** Explain process, get consent
2. **Background (5 min):** Understand their context
3. **Tasks (30-45 min):** Watch them use the design
4. **Debrief (5 min):** Overall impressions, questions

Writing task scenarios:
- Describe situation, not steps
- Use realistic context
- Avoid giving away the answer
- Include specific goals

Bad: "Click on the Settings icon and change your notification preferences"
Good: "You're getting too many email notifications. How would you reduce them?"

Observation tips:
- Note behavior, not just success/failure
- Watch for hesitation, confusion, recovery
- Record quotes and emotional reactions
- Don't help (even when it's hard)

Post-test questions:
- What was easy? What was difficult?
- What did you expect to happen when...?
- How does this compare to what you use now?

**A/B Testing**

When to use: Comparing two variants with significant traffic

Requirements:
- Enough traffic for statistical significance
- Clear success metric
- Meaningful difference between variants
- Time to run until significance

What to test:
- Headlines and copy
- CTA text and placement
- Page layouts
- Form designs
- Pricing presentation

---

## Research Synthesis

### Affinity Mapping

Process:
1. Write each observation on a sticky note
2. Cluster similar notes together
3. Name each cluster (the insight, not the category)
4. Look for patterns across clusters
5. Identify key themes and insights

Tips:
- One observation per note
- Include participant identifier
- Group by meaning, not by topic
- Insight names should be actionable

### Insight Extraction

Good insight formula:
**[User group] needs [need] because [underlying reason]**

Example:
"Power users need keyboard shortcuts because clicking through menus interrupts their flow state."

Insight quality checklist:
- [ ] Grounded in observed behavior?
- [ ] Reveals underlying motivation?
- [ ] Actionable for design?
- [ ] Specific enough to act on?
- [ ] Supported by multiple data points?

### Research Report Structure

1. **Executive summary** — Key findings in 30 seconds
2. **Research goals** — What we set out to learn
3. **Methodology** — How we gathered data
4. **Key findings** — Major insights with evidence
5. **Detailed findings** — Supporting details
6. **Recommendations** — What to do next
7. **Appendix** — Full data, screener, guide

---

## Personas

### What Makes a Good Persona

**Behavioral, not demographic:** Based on what users do, not who they are

**Research-based:** Grounded in real user data, not assumptions

**Actionable:** Helps make design decisions

**Focused:** Captures key differences that matter

### Persona Structure

```
[Name] — [Archetype title]

Photo + 1-sentence summary of key behavior

## Context
- Role/situation
- Goals
- Environment

## Behaviors
- How they approach tasks
- Tools they use
- Patterns observed

## Needs
- What they're trying to accomplish
- What frustrates them
- What would help

## Quote
"[Real quote that captures their perspective]"
```

### Persona Anti-Patterns

- **Demographic-focused:** Age, income, education that doesn't affect behavior
- **Aspirational:** What users say vs. what they do
- **Too many:** More than 3-4 becomes unusable
- **Not based on research:** Personas from imagination, not data
- **Never referenced:** Created then ignored

---

## Journey Mapping

### Journey Map Structure

**Horizontal axis:** Time/stages in the experience

**Vertical rows:**
1. **Stages:** Major phases of the experience
2. **Actions:** What the user does
3. **Touchpoints:** Where they interact with you
4. **Thoughts:** What they're thinking
5. **Emotions:** How they feel (visualize as wave)
6. **Pain points:** Where it breaks down
7. **Opportunities:** Where to improve

### Journey Map Types

**Current state:** How things work today
- Based on research
- Shows real pain points
- Identifies opportunities

**Future state:** How things could work
- Based on current state insights
- Shows improved experience
- Guides design direction

**Service blueprint:** Behind-the-scenes view
- Includes frontstage (visible to user)
- Includes backstage (internal processes)
- Shows support systems

### Journey Mapping Process

1. Define scope (what journey? which user?)
2. Gather research (interviews, observation, analytics)
3. Identify stages and key moments
4. Map actions, thoughts, emotions
5. Identify pain points and opportunities
6. Validate with users
7. Prioritize opportunities

### Journey Map Tips

- Include before and after your product
- Show the low points — that's where opportunities are
- Use real quotes and observations
- Make emotions visible (graphs help)
- Keep it focused — one journey, one persona
- Make it collaborative — workshop format works well

---

## Jobs to Be Done (JTBD)

### Core Concept

Users "hire" products to do a job. Understanding the job helps design better solutions.

**Job statement formula:**
When [situation], I want to [motivation], so I can [outcome].

Example:
"When I'm preparing for a client meeting, I want to quickly find relevant past projects, so I can appear knowledgeable and build credibility."

### JTBD Interview Approach

Timeline interview structure:
1. **First thought:** When did you first think about solving this?
2. **Passive looking:** How did you gather information?
3. **Active looking:** When did you start seriously searching?
4. **Decision:** What made you decide on this solution?
5. **Consumption:** What was first use like?
6. **Ongoing:** How has it worked since?

Questions to uncover jobs:
- What were you trying to accomplish?
- What would success look like?
- What alternatives did you consider?
- What pushed you to finally act?
- What pulled you toward this solution?
- What anxieties did you have?

### Forces of Progress

**Push:** Frustration with current situation (push away from status quo)
**Pull:** Attraction to new solution (pull toward change)
**Anxiety:** Concerns about new solution (holds back)
**Habit:** Comfort with current way (holds back)

For change to happen: Push + Pull > Anxiety + Habit

---

## Usability Heuristic Evaluation

### Nielsen's 10 Heuristics (Detailed)

**1. Visibility of system status**
- Show current state (where am I?)
- Show progress (how long will this take?)
- Show results (did it work?)
- Examples: Progress bars, confirmations, breadcrumbs

**2. Match between system and real world**
- Use user's language, not system jargon
- Follow real-world conventions
- Information appears in natural order
- Examples: Calendar metaphor, shopping cart

**3. User control and freedom**
- Clear exit from unwanted states
- Undo and redo available
- Users can cancel ongoing operations
- Examples: Undo button, cancel links, back navigation

**4. Consistency and standards**
- Same words mean same things
- Same actions have same results
- Follow platform conventions
- Examples: Consistent icons, standard shortcuts

**5. Error prevention**
- Eliminate error-prone conditions
- Check before confirming destructive actions
- Good defaults prevent mistakes
- Examples: Constraints, confirmations, smart defaults

**6. Recognition rather than recall**
- Make options visible
- Show recently used items
- Provide contextual help
- Examples: Recent files, autofill, visible menus

**7. Flexibility and efficiency of use**
- Shortcuts for experts
- Customization options
- Frequent actions easy to access
- Examples: Keyboard shortcuts, favorites, presets

**8. Aesthetic and minimalist design**
- No irrelevant information
- Visual hierarchy guides attention
- Whitespace aids comprehension
- Examples: Clean layouts, progressive disclosure

**9. Help users recognize, diagnose, recover from errors**
- Plain language (no codes)
- Precisely indicate problem
- Constructively suggest solution
- Examples: Inline validation, helpful error messages

**10. Help and documentation**
- Easy to search
- Focused on user tasks
- Lists concrete steps
- Examples: Contextual help, searchable docs

### Severity Rating Scale

| Rating | Meaning | Fix Priority |
|--------|---------|--------------|
| 0 | Not a usability problem | Don't fix |
| 1 | Cosmetic only | Fix if extra time |
| 2 | Minor — small delays | Low priority |
| 3 | Major — significant difficulty | High priority |
| 4 | Catastrophic — can't complete task | Fix before launch |

### Evaluation Process

1. Each evaluator reviews independently
2. Go through each screen/flow
3. Check each heuristic for violations
4. Rate severity of each issue
5. Combine findings across evaluators
6. Prioritize by severity and frequency

---

## Card Sorting

### When to Use

- Designing information architecture
- Creating navigation structure
- Organizing content categories
- Understanding mental models

### Types

**Open sort:** Participants create their own categories
- Use when: Exploring how users think
- Output: Category suggestions

**Closed sort:** Participants sort into predefined categories
- Use when: Validating existing structure
- Output: Validation of categories

**Hybrid:** Mix of both
- Use when: Testing categories but open to suggestions
- Output: Validation plus new ideas

### Running a Card Sort

1. **Prepare cards:** 30-60 items typical
2. **Recruit participants:** 15-30 for reliable patterns
3. **Provide instructions:** Clear but not leading
4. **Observe or collect remotely:** Note reasoning
5. **Analyze results:** Look for agreement patterns

### Analysis

- **Agreement:** How often items are grouped together
- **Standardization:** Consistency of category labels
- **Similarity matrix:** Visual of grouping patterns
- **Dendrogram:** Hierarchical clustering view

---

## Tree Testing

### When to Use

- Validating navigation structure
- Testing information architecture
- Before visual design (tests structure alone)

### Process

1. Create tree (navigation structure)
2. Write task scenarios
3. Participants find items in tree
4. Measure success and paths taken

### Metrics

- **Success rate:** Did they find it?
- **Directness:** Did they go straight there or backtrack?
- **Time:** How long did it take?
- **First click:** Where did they start?

### Task Writing

Same as usability testing:
- Describe situation, not path
- Use user language
- Don't give away the answer

---

## Research Planning

### Research Plan Template

```
## Research Goals
What questions are we trying to answer?

## Methodology
- Method choice and rationale
- Sample size and criteria
- Timeline

## Participant Criteria
- Must have: [requirements]
- Nice to have: [preferences]
- Exclude: [disqualifiers]

## Screener Questions
[Questions to recruit right participants]

## Discussion Guide / Test Plan
[Core questions or tasks]

## Analysis Approach
How will we synthesize findings?

## Deliverables
What will we produce?

## Timeline
- Recruiting: [dates]
- Sessions: [dates]
- Analysis: [dates]
- Readout: [date]
```

### Sample Sizes by Method

| Method | Typical Sample | Rationale |
|--------|---------------|-----------|
| User interviews | 5-8 | Themes emerge by ~6 |
| Usability testing | 5-7 per round | Finds ~85% of issues |
| Card sorting | 15-30 | Statistical patterns need volume |
| Surveys | 100+ | Statistical significance |
| A/B testing | Depends on traffic | Calculate for significance |

---

## Research Ethics

### Informed Consent

Always include:
- Purpose of research
- What participation involves
- How data will be used
- Right to withdraw
- Confidentiality approach
- Who to contact with questions

### Recording and Privacy

- Get explicit permission to record
- Explain how recordings will be used
- Offer option to participate without recording
- Secure storage of recordings
- Delete when no longer needed

### Protecting Participants

- Don't share identifying information
- Anonymize quotes and data
- Be mindful of sensitive topics
- Stop if participant is uncomfortable
- Don't pressure to continue
