# Design Critique

> Frameworks for giving, receiving, and facilitating structured design feedback.

**Part of:** [UX Design](../ux-design-skill.md)

---

## Design Critique Formats

### Formal Critique

**What:** Scheduled session with a defined group, specific design work to review, and structured facilitation.

**When to use:**
- Major design milestones (concept, wireframes, high-fidelity)
- Cross-functional review needed
- Design decisions need group alignment

**Setup:**
- 4-8 participants (designer + stakeholders + peers)
- 30-60 minutes
- Designer presents context and specific questions
- Facilitator manages time and participation

### Desk Critique

**What:** Informal, 1:1 or small group review at the designer's workspace.

**When to use:**
- Quick gut check on a direction
- Stuck on a specific problem
- Early-stage exploration when formal critique is premature

**Setup:**
- 1-3 people, 10-20 minutes
- Designer walks through the work
- Conversation, not presentation

### Async Review

**What:** Design shared digitally with comments collected over time.

**When to use:**
- Distributed teams
- When you need input from many people
- Low-urgency feedback requests

**Setup:**
- Share in Figma, Notion, or similar tool with commenting
- Provide clear context: "Here's what we're designing, here's the stage, here's what feedback I need"
- Set a deadline for comments (48-72 hours)
- Designer synthesizes feedback and responds

### Design Review Meeting

**What:** Regular recurring meeting where the design team reviews each other's work.

**When to use:**
- Ongoing design quality check
- Team skill development
- Consistency across designers on a team

**Setup:**
- Weekly or bi-weekly, 45-60 minutes
- Rotating presenter
- Team critiques using shared principles

---

## Giving Effective Design Feedback

### The Three Rules

**1. Be specific.**
- Bad: "I don't like the layout"
- Good: "The call-to-action competes with the navigation bar because they have similar visual weight"

**2. Be actionable.**
- Bad: "This could be better"
- Good: "Consider increasing the contrast between the primary and secondary buttons so users can distinguish the main action"

**3. Ground in principles or data.**
- Bad: "I think users will be confused"
- Good: "Based on our usability tests, users expected the search to be in the header. Moving it to the sidebar might create the same findability issue"

### Feedback Starters

| When You Want To... | Say... |
|---------------------|--------|
| Question a decision | "What was the thinking behind [choice]?" |
| Suggest an alternative | "Have you considered [approach]? It might address [specific issue]" |
| Flag a concern | "I'm worried that [scenario] could happen because [reason]" |
| Praise what works | "[Specific element] works well because [reason]" |
| Clarify intent | "Is the goal here to [X] or [Y]?" |

### What NOT to Do

- Don't prescribe solutions as the only option: "You should use a dropdown" → Instead: "This list might get long — how are you thinking about handling scale?"
- Don't make it personal: "I wouldn't have done it this way" → Keep focus on the work, not the designer
- Don't relitigate decisions that are settled: if the strategy is decided, critique the execution
- Don't provide feedback outside your expertise without flagging it: "I'm not a designer, but from a user perspective..."

---

## Receiving Feedback

### Separating Self from Work

- The work is not you. Critique of the design is not critique of you.
- Listen fully before responding. Let the feedback land.
- Take notes — you'll process it better later than in the moment.
- Thank people for feedback, even when it stings.

### Asking Clarifying Questions

When feedback is vague or confusing:
- "Can you tell me more about what you mean by [vague term]?"
- "Is that a concern about [usability / visual design / content / flow]?"
- "Can you show me specifically where that issue occurs?"
- "Is this based on a specific user behavior you've observed?"

### Pattern Recognition

After receiving feedback from multiple reviewers:
- If 3+ people raise the same concern → it's a real issue
- If 1 person raises a concern no one else mentions → investigate but don't over-index
- If feedback conflicts → look for the underlying need both are pointing at
- Track recurring critique themes across projects → these are your growth areas

---

## Structured Critique Methods

### Plus / Delta

**Plus:** What's working well and why
**Delta:** What could be improved and why

Simple, fast, and balanced. Good for quick reviews and teams new to critique.

### "I Like / I Wish / What If"

**I like:** Specific things that are effective
**I wish:** Changes that would improve the work
**What if:** Speculative ideas or alternatives worth exploring

Good for opening up creative thinking, not just evaluating what's there.

### Question-Based Critique

Instead of giving opinions, ask questions:
- "What happens when a user has more than 10 items?"
- "How does this work on mobile?"
- "What's the most common task for this screen?"
- "What are we optimizing for here — speed or comprehension?"

Good for senior feedback (asks the designer to think rather than prescribing answers).

---

## Design Review Checklist

### Usability

- [ ] Primary task is clear and achievable
- [ ] Navigation is intuitive — users can find key features
- [ ] Error states are handled gracefully
- [ ] Loading states are designed (not just the happy path)
- [ ] User can recover from mistakes (undo, back, cancel)

### Accessibility

- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] Interactive elements have visible focus states
- [ ] Text is legible (minimum 16px body, proper line height)
- [ ] Content is not communicated by color alone
- [ ] Screen reader flow makes logical sense

### Consistency

- [ ] Design system components used correctly
- [ ] Spacing and alignment follow the grid
- [ ] Typography hierarchy is consistent
- [ ] Interaction patterns match elsewhere in the product
- [ ] Terminology is consistent with the rest of the product

### Edge Cases

- [ ] Empty states are designed (no content, first-time user)
- [ ] Long text and content overflow are handled
- [ ] Minimum and maximum data are handled
- [ ] Responsive behavior is considered
- [ ] Slow network / offline behavior is considered

### Content

- [ ] Copy is clear and concise
- [ ] Labels and CTAs describe the action accurately
- [ ] Error messages help users fix the problem
- [ ] Help text is available where needed
- [ ] Tone matches the product voice

---

## Running a Design Critique Session

### Setup (Before the Session)

1. **Designer shares context in advance:** What the project is, the user problem, the stage of design, and what feedback they want
2. **Set ground rules:** Critique the work not the person, be specific, ground in principles
3. **Define the scope:** "We're looking for feedback on [flow/visual/content], not [other thing]"
4. **Assign a facilitator:** Someone other than the designer presenting

### Facilitation (During the Session)

**Opening (5 min):**
- Designer presents context, goals, and constraints
- Designer states what feedback they're looking for
- Facilitator confirms the scope

**Silent review (5-10 min):**
- Everyone reviews the designs independently
- Participants write notes/comments (sticky notes or digital comments)
- No discussion yet — this prevents anchoring on the first opinion

**Structured feedback (15-30 min):**
- Go around the room, each person shares their top 2-3 points
- Facilitator captures key themes on a shared surface
- Designer listens and takes notes (not defending — absorbing)

**Discussion (10-15 min):**
- Discuss themes that emerged
- Designer can ask clarifying questions
- Group identifies the most critical issues

**Closing (5 min):**
- Facilitator summarizes key takeaways
- Designer states what they plan to do with the feedback
- Next steps and follow-up timeline

### Common Facilitation Challenges

| Challenge | Fix |
|-----------|-----|
| One person dominates | "Let's hear from others. [Name], what do you think?" |
| Feedback is too vague | "Can you point to a specific part of the design?" |
| Discussion goes off-topic | "Let's park that and come back to the critique scope" |
| Designer is defensive | Reminder: "We're critiquing the work, not the designer. This is how we make the work better." |
| No critical feedback | Ask directly: "What's the one thing that would most improve this?" |

---

## Integrating Feedback into Iteration

### Triage Feedback

Not all feedback needs action. Categorize:

| Category | Action | Criteria |
|----------|--------|----------|
| **Must fix** | Address before moving forward | Usability issue, accessibility failure, broken flow |
| **Should fix** | Address in this iteration | Consistency issue, edge case, improvement with clear benefit |
| **Consider** | Evaluate for future iteration | Nice-to-have, subjective preference, requires more research |
| **Test** | Validate with users | Conflicting feedback, uncertainty about impact |
| **Defer** | Not now | Out of scope, low impact, requires significant effort |

### When to Test vs. Just Decide

**Test it when:**
- Feedback is conflicting (different reviewers say opposite things)
- The change affects a critical flow
- You're not sure if it's a real problem or a preference
- The cost of getting it wrong is high

**Just decide when:**
- The feedback is unanimous and grounded in principles
- It's a minor improvement with low risk
- The fix is obvious (accessibility, consistency, broken pattern)
- Testing would cost more than the change itself
