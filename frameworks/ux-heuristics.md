# UX Heuristics & Accessibility

> Universal usability principles and accessibility standards. Works for any digital product.

---

## Nielsen's 10 Usability Heuristics

Use for expert evaluation and design critique.

### 1. Visibility of System Status

The design should always keep users informed about what is going on through appropriate feedback within a reasonable amount of time.

**Examples:**
- Progress indicators during uploads
- "Saving..." and "Saved" states
- Loading spinners
- Current step in a multi-step process

**Violations:**
- Button clicked but nothing happens
- Form submitted with no confirmation
- Long processes with no progress indication

### 2. Match Between System and Real World

The design should speak the users' language. Use words, phrases, and concepts familiar to the user rather than internal jargon.

**Examples:**
- "Shopping cart" not "order queue"
- "Settings" not "preferences panel"
- Icons that match real-world objects

**Violations:**
- Technical error codes shown to users
- Internal terminology in UI
- Unfamiliar metaphors

### 3. User Control and Freedom

Users often perform actions by mistake. They need a clearly marked "emergency exit" to leave the unwanted state.

**Examples:**
- Undo/Redo
- Cancel buttons
- Back navigation
- Easy escape from modals
- Draft autosaving

**Violations:**
- No way to undo destructive actions
- Modal dialogs that can't be dismissed
- Forced sequences with no exit

### 4. Consistency and Standards

Users should not have to wonder whether different words, situations, or actions mean the same thing.

**Examples:**
- Same icons mean same things throughout
- Consistent button styles
- Following platform conventions
- Predictable navigation patterns

**Violations:**
- Different terms for same action
- Inconsistent visual treatment
- Breaking platform conventions without reason

### 5. Error Prevention

Good design prevents problems from occurring in the first place. Either eliminate error-prone conditions or check for them.

**Examples:**
- Confirmation dialogs for destructive actions
- Inline validation before submission
- Constraints that prevent invalid input
- Smart defaults
- Disable unavailable options

**Violations:**
- Easy to accidentally delete without confirmation
- Form rejects input after long completion
- Buttons that shouldn't be clickable are clickable

### 6. Recognition Rather Than Recall

Minimize the user's memory load by making elements, actions, and options visible. Users shouldn't have to remember information.

**Examples:**
- Visible navigation
- Autocomplete/suggestions
- Recently used items
- Labels on icons
- Context-sensitive help

**Violations:**
- Unlabeled icons
- Hidden navigation
- Requiring users to remember codes
- Information needed on one page only shown on another

### 7. Flexibility and Efficiency of Use

Shortcuts — hidden from novice users — can speed up interaction for experts.

**Examples:**
- Keyboard shortcuts
- Gestures
- Customizable toolbars
- Batch operations
- Recent/favorites for quick access

**Violations:**
- No keyboard navigation
- Forcing all users through same slow process
- No way to personalize workflows

### 8. Aesthetic and Minimalist Design

Interfaces should not contain irrelevant or rarely needed information. Every extra unit of information competes with relevant units.

**Examples:**
- Clean, focused interfaces
- Progressive disclosure
- White space
- Content hierarchy
- Minimal decoration

**Violations:**
- Cluttered screens
- Decorative elements that distract
- Information overload
- Irrelevant content competing for attention

### 9. Help Users Recognize, Diagnose, and Recover from Errors

Error messages should be expressed in plain language, precisely indicate the problem, and constructively suggest a solution.

**Good error message:**
- "Password must be at least 8 characters. You entered 6."

**Bad error message:**
- "Invalid password"
- "Error code 500"
- "Something went wrong"

**Elements of good errors:**
- What happened (plain language)
- Why it happened (if helpful)
- How to fix it (specific action)

### 10. Help and Documentation

Even though it's better if the system can be used without documentation, it may be necessary. Help should be easy to search, focused on the user's task, and list concrete steps.

**Examples:**
- Contextual help (tooltips, inline hints)
- Searchable help center
- Task-focused documentation
- Tutorials and onboarding

**Violations:**
- No help available
- Help that's hard to find
- Generic help not related to current task

---

## Heuristic Evaluation Process

### Setup

1. Select 3-5 evaluators (more perspectives = more findings)
2. Give evaluators the heuristics list
3. Define scope (which screens/flows to evaluate)
4. Prepare scenarios if helpful

### Evaluation

For each screen/flow:

1. Go through each of the 10 heuristics
2. Note violations with:
   - Which heuristic violated
   - Description of the issue
   - Screenshot/location
   - Severity rating (0-4)

### Severity Ratings

| Rating | Description | Action |
|--------|-------------|--------|
| 0 | Not a usability problem | None |
| 1 | Cosmetic only | Fix if time |
| 2 | Minor | Low priority fix |
| 3 | Major | High priority fix |
| 4 | Catastrophic | Must fix before release |

### Consolidation

1. Combine findings from all evaluators
2. Remove duplicates
3. Prioritize by severity and frequency
4. Group by theme or area
5. Create action plan

---

## WCAG Accessibility Guidelines

Web Content Accessibility Guidelines (WCAG) AA is the standard target.

### Four Principles: POUR

**Perceivable:** Users must be able to perceive the content
**Operable:** Users must be able to operate the interface
**Understandable:** Users must be able to understand the content
**Robust:** Content must work with assistive technologies

### Perceivable Requirements

**Color Contrast:**
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI components: 3:1 minimum

**Don't rely on color alone:**
- Use icons, text, or patterns in addition to color
- Error states need more than red color
- Links need more than color difference

**Text alternatives:**
- All images need alt text
- Decorative images: empty alt=""
- Complex images: longer descriptions

**Media:**
- Videos need captions
- Audio needs transcripts
- No auto-playing media with sound

### Operable Requirements

**Keyboard accessible:**
- All functionality via keyboard
- No keyboard traps (can always tab out)
- Visible focus indicators
- Logical tab order

**Enough time:**
- Users can extend time limits
- Users can pause moving content
- No time-based interactions without alternatives

**Navigation:**
- Skip links to main content
- Page titles that describe content
- Clear headings and labels
- Multiple ways to find content

**Input:**
- Touch targets: 44x44px minimum
- Pointer gestures have alternatives
- No motion-based inputs as only option

### Understandable Requirements

**Readable:**
- Language of page identified
- Unusual words defined
- Abbreviations expanded

**Predictable:**
- Consistent navigation
- Consistent identification
- No unexpected context changes

**Input assistance:**
- Labels for all form fields
- Error identification
- Error suggestions
- Error prevention for important actions

### Robust Requirements

**Parsing:**
- Valid HTML
- Unique IDs
- Proper nesting

**Name, role, value:**
- All UI components have accessible names
- Roles are appropriate
- States are communicated to assistive tech

---

## Accessibility Quick Checklist

### Visual

- [ ] Color contrast meets 4.5:1 for text
- [ ] Don't rely on color alone
- [ ] Text can resize to 200% without breaking
- [ ] Focus states are visible
- [ ] Images have alt text

### Motor

- [ ] All functions work with keyboard
- [ ] No keyboard traps
- [ ] Touch targets are 44x44px+
- [ ] Sufficient time for interactions

### Cognitive

- [ ] Clear headings structure
- [ ] Simple, clear language
- [ ] Consistent navigation
- [ ] Errors explained in plain language

### Technical

- [ ] Semantic HTML used
- [ ] ARIA labels where needed
- [ ] Works with screen readers
- [ ] Valid markup

---

## Cognitive Load Principles

Reduce mental effort required to use the interface.

### Miller's Law

People can hold ~7 (±2) items in working memory. Chunk information accordingly.

**Application:**
- Group related items
- Limit menu items
- Use progressive disclosure
- Don't require memorization

### Hick's Law

Decision time increases with number and complexity of choices.

**Application:**
- Reduce options when possible
- Group and categorize choices
- Highlight recommended option
- Progressive disclosure for advanced options

### Jakob's Law

Users spend most time on other sites. They expect yours to work similarly.

**Application:**
- Follow platform conventions
- Use familiar patterns
- Innovate only where it adds value
- Don't make users relearn basics

### Fitts's Law

Time to reach a target depends on distance and size.

**Application:**
- Important actions should be large
- Related actions should be near each other
- Edge/corner positions are faster to reach
- Touch targets need adequate size

### Aesthetic-Usability Effect

Users perceive attractive designs as more usable.

**Application:**
- Visual design matters
- Polish increases trust
- But don't sacrifice usability for aesthetics

---

## Common Accessibility Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Low color contrast | Can't read text | Use contrast checker, meet 4.5:1 |
| No alt text | Screen readers can't describe images | Add meaningful alt text |
| No focus styles | Can't see keyboard navigation | Design visible focus states |
| Small touch targets | Hard to tap on mobile | 44x44px minimum |
| Auto-playing video | Disorienting, uses data | Muted default or no autoplay |
| Unlabeled form fields | Screen readers can't identify | Always use labels |
| Missing skip links | Keyboard users must tab through everything | Add skip to main content |
| Color-only indicators | Colorblind users miss information | Add icons or text |

---

## Used By Skills

This framework is referenced by:
- [UX Design](../skills/ux-design/ux-design-skill.md) — Usability evaluation and accessibility
- [Brand Design](../skills/brand-design/brand-design-skill.md) — Accessible visual design
- [Technical Documentation](../skills/technical-documentation/technical-documentation-skill.md) — Accessible documentation

---

## Related Frameworks

- [Research Framework](research.md) — Usability testing methods
- [Decision Making Framework](decision-making.md) — UX design decisions
