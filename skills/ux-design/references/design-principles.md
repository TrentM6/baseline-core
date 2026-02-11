# Design Principles

> Foundational design principles for UX work. Reference when making design decisions.

**Part of:** [UX Design](ux-design/ux-design-skill.md)

---

## Dieter Rams' 10 Principles of Good Design

The foundation of functional, user-centered design.

### 1. Good design is innovative
Innovation isn't novelty for its own sake. It's finding new solutions to real problems. Don't innovate where conventions work.

### 2. Good design makes a product useful
Design serves function. A product that looks good but doesn't work isn't good design.

### 3. Good design is aesthetic
Visual quality matters. But aesthetics serve function, not the other way around.

### 4. Good design makes a product understandable
The design itself explains how to use the product. If it needs a manual, it could be clearer.

### 5. Good design is unobtrusive
Products are tools. They shouldn't demand attention; they should fade into use.

### 6. Good design is honest
Don't make products appear more capable, innovative, or valuable than they are.

### 7. Good design is long-lasting
Good design avoids being fashionable. It endures.

### 8. Good design is thorough down to the last detail
Nothing is arbitrary. Precision and care in every element.

### 9. Good design is environmentally friendly
Design considers resources, waste, and impact.

### 10. Good design is as little design as possible
Less, but better. Only the essential aspects.

---

## Cognitive Psychology Foundations

Understanding how users think helps design better experiences.

### Attention

**Selective attention:** Users can only focus on one thing at a time. Don't make them split attention.

**Change blindness:** Users miss changes outside their focus. Draw attention to important changes.

**Inattentional blindness:** When focused on a task, users miss unexpected elements. Don't hide critical info.

**Banner blindness:** Users ignore anything that looks like an ad. Make important content not look like ads.

### Memory

**Working memory is limited:** 7±2 items max. Chunk information and provide external memory aids.

**Recognition beats recall:** Showing options is easier than remembering them. Use menus, autocomplete, recent items.

**Long-term memory is contextual:** Users remember better in the same context they learned. Keep interactions consistent.

**Schemas and mental models:** Users apply existing knowledge to new situations. Match expectations.

### Decision Making

**Satisficing:** Users pick "good enough," not optimal. Support quick decisions with clear recommendations.

**Decision fatigue:** Too many choices depletes willpower. Reduce decisions, provide defaults.

**Analysis paralysis:** Too many options = no choice. Limit options or guide the decision.

**Loss aversion:** Losing feels worse than gaining feels good. Frame choices carefully.

### Perception

**Gestalt principles:** Proximity, similarity, closure, continuity — our brains organize visual information automatically. Use this to create clear structure.

**Visual processing is fast:** We see before we read. Make structure visually scannable.

**Pattern recognition:** We look for and expect patterns. Consistent design trains expectations.

---

## Mental Models

### What Are Mental Models?

Users have internal representations of how things work based on past experience. Good design aligns with these models.

**Match expectations:** If users expect a shopping cart icon to show cart contents, it should.

**Build on existing knowledge:** Don't make users learn new conventions when familiar ones work.

**Bridge the gap:** When your model differs from users' model, help them understand.

### Mental Model Mismatches

Signs of a mismatch:
- Users look for features in the wrong place
- Users try interactions that don't work
- Users don't discover features that exist
- Users express surprise at system behavior

Fixing mismatches:
- Research to understand user's mental model
- Redesign to match their expectations
- Or educate if there's a strong reason for the difference

---

## UX Laws

Psychological principles that govern user behavior.

### Hick's Law
**The time it takes to make a decision increases with the number and complexity of choices.**

*Application:*
- Reduce the number of options
- Group related choices
- Progressive disclosure for complex decisions
- Default to the most common choice

### Fitts's Law
**The time to reach a target depends on the distance to it and its size.**

*Application:*
- Make important elements larger
- Put related actions close together
- Position key actions in easy-to-reach areas (thumb zones on mobile)
- Increase target size for touch interfaces

### Jakob's Law
**Users spend most of their time on other sites. They expect your site to work the same way.**

*Application:*
- Use familiar patterns (standard navigation, common icons)
- Don't innovate for innovation's sake
- Meet user expectations from their experience elsewhere
- When you break conventions, make it obvious why

### Miller's Law
**The average person can hold 7 (±2) items in working memory.**

*Application:*
- Chunk information into groups of 5-9
- Don't overwhelm with too many options at once
- Use progressive disclosure
- Help users maintain context

### The Law of Proximity
**Objects that are near each other are perceived as a group.**

*Application:*
- Group related elements together
- Separate unrelated elements with whitespace
- Create visual groupings without explicit borders
- Consistent spacing creates implicit relationships

### The Law of Similarity
**Objects that look similar are perceived as more related.**

*Application:*
- Style related items consistently
- Use visual difference to indicate different functions
- Color, shape, and size all signal relationship
- Consistency across states (buttons, links, etc.)

### The Peak-End Rule
**People judge experiences largely based on the peak moment and the end.**

*Application:*
- Design memorable peak moments
- End flows on a positive note
- Confirmation and success states matter
- First and last impressions are disproportionately important

### The Serial Position Effect
**Users tend to remember the first and last items in a series best.**

*Application:*
- Put the most important items first or last
- Navigation: key items at start and end
- Lists: don't bury important items in the middle
- Onboarding: start and end strong

### The Von Restorff Effect
**When multiple similar objects are present, the one that differs is most likely to be remembered.**

*Application:*
- Make key actions visually distinct
- Use contrast for important elements
- Don't make everything stand out (nothing will)
- Visual hierarchy through differentiation

### Tesler's Law (Law of Conservation of Complexity)
**Every application has inherent complexity that cannot be removed or hidden — only moved.**

*Application:*
- Decide who bears the complexity: user or system?
- Prefer system complexity over user complexity
- Some complexity must exist; make it manageable
- Simple ≠ easy. Simple often requires more design work.

### Postel's Law (Robustness Principle)
**Be conservative in what you do, be liberal in what you accept from others.**

*Application:*
- Accept varied input formats (dates, phone numbers)
- Format output consistently
- Don't punish users for minor mistakes
- Help users succeed with flexible input

### Doherty Threshold
**Productivity soars when interactions feel instantaneous (<400ms).**

*Application:*
- Response under 100ms feels instant
- 100-300ms feels like normal cause/effect
- Over 1 second requires progress indicator
- Optimize for speed; show loading for anything slow

---

## Visual Hierarchy Principles

### Size
Larger elements draw more attention. Use size to indicate importance.

**Application:**
- Headlines largest, body text medium, captions smallest
- Primary CTAs larger than secondary
- Important data points emphasized by size

### Color & Contrast
High contrast draws attention. Color creates emphasis and meaning.

**Application:**
- Reserve bright colors for primary actions
- Use color consistently (error = red, success = green)
- High contrast for important elements
- Low contrast for secondary information

### Position
In Western cultures, reading patterns follow F-pattern or Z-pattern.

**Application:**
- Place key information top-left
- CTAs in natural reading flow endpoints
- Important content "above the fold"
- Secondary content lower/right

### Whitespace
Space around elements creates importance and separation.

**Application:**
- More whitespace = more importance
- Group with proximity
- Don't cram — let elements breathe
- Whitespace is an active design element

### Typography
Type weight, style, and treatment indicate hierarchy.

**Application:**
- Bold for emphasis
- Consistent heading hierarchy (H1 > H2 > H3)
- Limit type styles per page (2-3 levels)
- Cap text for labels, not prose

### Repetition
Consistent patterns help users predict and understand.

**Application:**
- Repeated elements signal similar function
- Create and follow patterns
- Break patterns deliberately for emphasis
- Consistency builds intuition

---

## Information Architecture

### Core Concepts

**Ontology:** What things exist and how they're defined
**Taxonomy:** How things are categorized and classified
**Choreography:** How things flow and interact over time

### Organization Schemes

**Exact schemes (objective, unambiguous):**
- Alphabetical
- Chronological
- Geographical

**Ambiguous schemes (subjective, require thought):**
- By topic
- By task
- By audience
- By metaphor

### Navigation Structures

**Hierarchical:** Parent-child relationships (most common)
- Clear, predictable
- Can become too deep
- Best for most products

**Hub and spoke:** Central hub with connected destinations
- Good for task-focused apps
- Each spoke independent
- Clear mental model

**Nested doll:** Linear sequence, going deeper
- Good for focused flows
- Easy to understand
- Limited flexibility

**Bento box:** Dashboard with modules
- Good for showing multiple types
- Can become overwhelming
- Requires clear visual hierarchy

### Navigation Principles

**Discoverability:** Can users find what they need?
**Predictability:** Do users know what will happen?
**Feedback:** Do users know where they are?
**Efficiency:** Can users get there quickly?

**3-click rule (modified):** Users should reach any page without confusion, not necessarily in 3 clicks

**Clear labeling:** Labels should be obvious and specific, not clever

**Location awareness:** Users should always know where they are

**Escape hatches:** Always a way back home

### Content Strategy Basics

**Useful:** Does the content serve a user need?
**Usable:** Can users find and understand it?
**Desirable:** Does it create value beyond function?
**Findable:** Can users navigate to it?
**Accessible:** Can all users access it?
**Credible:** Do users trust it?

---

## Interaction Design

### Feedback Principles

**Immediate feedback:** Response within 100ms
**Progress indication:** For anything over 1 second
**State changes:** Clearly show when something has changed
**Confirmation:** Acknowledge completed actions

### Timing Guidelines

| Threshold | Experience | Design Response |
|-----------|------------|-----------------|
| < 100ms | Instantaneous | No feedback needed |
| 100-300ms | Slight delay | Subtle feedback |
| 300ms-1s | Noticeable | Show change happening |
| 1-10s | Waiting | Progress indicator |
| > 10s | Long wait | Background process + notification |

### Affordance

Design elements should indicate how they're used.
- Buttons look clickable
- Text fields look fillable
- Links look tappable
- Drag handles look draggable

### Signifiers

Explicit signals of how to interact:
- Icons with labels
- Instructional text
- Visual cues (arrows, hints)
- Cursor changes

### Reversibility

**Undo:** Let users reverse actions
**Safe exploration:** Exploration shouldn't be punishing
**Forgiveness:** Design for mistakes
**Clear escape:** Always a way out

### Consistency

**Internal consistency:** Same patterns within the product
**External consistency:** Follow platform conventions
**Predictability:** Users can anticipate behavior
**Standards:** Follow established design patterns

---

## Mobile-First Principles

### Touch Considerations

- **Minimum touch target:** 44x44 pixels
- **Thumb zones:** Place key actions in easy reach
- **Spacing:** Enough room to avoid mis-taps
- **Gestures:** Discoverable and reversible

### Thumb Zone Map

```
 ┌─────────────────────┐
 │  Hard  │  OK  │Hard │
 │────────┼──────┼─────│
 │  Easy  │ Easy │ OK  │
 │────────┼──────┼─────│
 │Natural │ Easy │ OK  │
 └─────────────────────┘
   (Right-handed)
```

Key actions should be in "Natural" and "Easy" zones.

### Content Prioritization

- **Essential first:** Most important content visible first
- **Progressive disclosure:** Details on demand
- **Single-column:** Optimize for narrow screens
- **Scannable:** Short paragraphs, clear headings

### Performance

- **Speed is a feature:** Optimize for fast loading
- **Offline capability:** Handle connectivity gracefully
- **Battery consideration:** Avoid resource drain
- **Data usage:** Respect user's bandwidth

---

## Accessibility Principles

### POUR Framework

**Perceivable:**
- Can users perceive the content? (See, hear, or otherwise access it)

**Operable:**
- Can users operate the interface? (Navigate, interact, complete tasks)

**Understandable:**
- Can users understand the content and interface?

**Robust:**
- Does it work across different technologies and devices?

### Practical Guidelines

**Color:**
- Don't rely on color alone
- 4.5:1 contrast for text
- 3:1 contrast for large text/UI elements

**Text:**
- Resizable up to 200%
- Sufficient line spacing
- Clear, readable fonts

**Navigation:**
- Keyboard accessible
- Skip links for main content
- Logical tab order
- Focus states visible

**Forms:**
- Labels for all inputs
- Error identification
- Clear instructions
- Sufficient time limits

### Accessibility Personas

Consider these users in your designs:
- **Low vision:** Needs high contrast, large text, screen magnification
- **Blind:** Uses screen reader, keyboard-only
- **Motor impaired:** Needs large targets, keyboard access, voice control
- **Deaf/hard of hearing:** Needs captions, visual feedback
- **Cognitive:** Needs clear language, consistent patterns, extra time

---

## Design Ethics

### Respect Users

- **Honest patterns:** No dark patterns or manipulation
- **Privacy:** Collect only what's needed, explain why
- **Autonomy:** Let users control their experience
- **Time respect:** Don't waste user attention

### Dark Patterns to Avoid

**Confirmshaming:** Guilting users into opting in
**Trick questions:** Confusing wording to get unintended consent
**Roach motel:** Easy to get in, hard to get out
**Hidden costs:** Revealing charges late in the process
**Misdirection:** Distracting from important information
**Forced continuity:** Making it hard to cancel
**Friend spam:** Tricking users into spamming contacts

### Consider Impact

- **Inclusion:** Design for diverse users
- **Accessibility:** Enable everyone
- **Sustainability:** Consider environmental impact
- **Consequences:** Think about downstream effects

### Professional Responsibility

- **User advocacy:** Represent user needs
- **Honest communication:** Don't oversell
- **Continuous learning:** Stay current
- **Humility:** Test assumptions, admit mistakes
