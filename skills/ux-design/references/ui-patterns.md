# UI Patterns Library

> Common interface patterns and when to use them.

**Part of:** [UX Design](ux-design/ux-design-skill.md)

---

## Navigation Patterns

### Global Navigation

**Header Navigation**
- Best for: Web apps, marketing sites
- Contents: Logo, main nav (5-7 items max), user menu, primary CTA
- Mobile: Hamburger or bottom nav

**Side Navigation**
- Best for: Complex apps, many sections
- Contents: Collapsible groups, icons + labels, current state indicator
- Can be: Always visible, collapsible, or hidden with hamburger

**Bottom Navigation (Mobile)**
- Best for: Mobile apps, 3-5 primary destinations
- Contents: Icon + label for each item
- Rules: 3-5 items only, highlight current, consistent across screens

### Local Navigation

**Tabs**
- Best for: Same-level content views (2-5 tabs)
- Behavior: Content switches without page load
- Rules: Current tab clearly indicated, consistent position

**Breadcrumbs**
- Best for: Deep hierarchies, e-commerce
- Shows: Path from home to current page
- Rules: Clickable levels, current page not a link

**Segmented Control**
- Best for: Filtering views of same content
- Behavior: Toggle between related options
- Rules: 2-5 options, one always selected

---

## Input Patterns

### Form Fields

**Text Input**
- Label: Above or floating
- Placeholder: Example text (not instructions)
- Help text: Below for additional guidance
- Error state: Red border, clear error message

**Text Area**
- For: Multi-line text (comments, descriptions)
- Consider: Character count if limited
- Behavior: Resizable or auto-growing

**Select/Dropdown**
- For: Choosing from predefined options
- When to use: 5+ options (fewer = radio buttons)
- Consider: Searchable for long lists

**Checkbox**
- For: Multiple selections, or single opt-in
- States: Unchecked, checked, indeterminate
- Label: Always clickable

**Radio Buttons**
- For: Single selection from 2-5 options
- Rules: One always selected (or explicit "none")
- Layout: Vertical for clarity

**Toggle Switch**
- For: Binary on/off settings
- Rules: Immediate effect (no save button needed)
- Labels: Should work without "on/off" text

**Date Picker**
- For: Date selection
- Consider: Calendar view vs. dropdowns
- Accessibility: Keyboard navigable

### Input Validation

**When to validate:**
- On blur: Low-stakes fields
- On submit: Most forms
- Real-time: Only if helpful (password strength)

**What to show:**
- What's wrong (specific)
- How to fix it
- Don't blame the user

**Visual treatment:**
- Red border for errors
- Icon + message
- Don't remove user's input

---

## Action Patterns

### Buttons

**Primary Button**
- Use: Main action per screen (1 per view)
- Style: Most prominent (filled, brand color)
- Example: "Save changes," "Create account"

**Secondary Button**
- Use: Alternative actions
- Style: Less prominent (outlined or muted)
- Example: "Cancel," "Learn more"

**Tertiary/Ghost Button**
- Use: Low-priority actions
- Style: Text only, minimal visual weight
- Example: "Skip," "Maybe later"

**Destructive Button**
- Use: Delete, remove, or destructive actions
- Style: Red or warning color
- Rules: Require confirmation for irreversible actions

**Button States:**
- Default, Hover, Active, Disabled, Loading
- All states should be designed

### Links

**Text Links**
- Style: Underlined or colored (follow conventions)
- Use: Navigation, external links
- Don't: Use for actions (that's what buttons are for)

**Inline Links**
- Style: Distinguishable from surrounding text
- Accessibility: Don't say "click here"

---

## Content Patterns

### Cards

**Use for:**
- Collections of related content
- Previews that link to detail
- Dashboards and galleries

**Contains:**
- Image (optional)
- Title
- Description/preview
- Action(s)
- Metadata

**Rules:**
- Consistent structure across a set
- Clear click target (whole card or specific element)
- Sufficient visual separation

### Lists

**Simple List**
- Use: Linear content
- Contains: Text items, maybe icons

**Detail List**
- Use: Showing multiple attributes
- Contains: Label + value pairs

**Interactive List**
- Use: Selectable items
- Contains: Select indicator, item content

**Infinite Scroll vs. Pagination**
- Infinite: Good for browsing, social feeds
- Pagination: Good for search results, finding specific items

### Tables

**When to use:**
- Comparing multiple items
- Scanning specific values
- Data that benefits from alignment

**Best practices:**
- Sortable columns
- Fixed headers for long tables
- Actions at row end
- Responsive: card view on mobile

**Don't:**
- Use for layout
- Cram too many columns
- Hide important data

### Empty States

**First-time/No content:**
- Explain what would be here
- Action to create first item
- Welcoming tone

**No results:**
- Acknowledge the search
- Suggest alternatives
- Clear filter/try again

**Error:**
- What went wrong
- How to fix
- Contact support if needed

---

## Feedback Patterns

### Loading States

**Skeleton Screens**
- Use: Page loads, content loading
- Show: Approximate layout of incoming content
- Better than spinners for content areas

**Spinners**
- Use: Discrete actions, button loading
- Show: Something is happening
- Add text for longer waits

**Progress Bars**
- Use: Known duration, file uploads
- Show: Percentage complete
- Consider: Indeterminate for unknown duration

### Notifications

**Toast/Snackbar**
- Use: Non-critical feedback (saved, sent)
- Duration: Auto-dismiss (3-5 seconds)
- Position: Bottom or top, consistent

**Banner**
- Use: Persistent system messages
- Position: Top of page
- Dismissible or permanent

**Inline Feedback**
- Use: Form validation, field-specific messages
- Position: Near the relevant element

### Modals/Dialogs

**Confirmation Dialog**
- Use: Before destructive actions
- Contains: Clear question, cancel + confirm buttons
- Rules: Easy to dismiss, clear consequences

**Information Modal**
- Use: Additional info that doesn't need new page
- Contains: Content, close button
- Rules: Shouldn't be required for main flow

**Form Modal**
- Use: Quick input without leaving context
- Contains: Form, submit + cancel
- Rules: Keep simple, complex forms deserve their own page

**When NOT to use modals:**
- Critical path actions
- Long or complex content
- Mobile (consider full screen or new page)

---

## Search Patterns

### Search Input

**Basic search:**
- Clear placeholder ("Search...")
- Search icon
- Clear/X button when populated
- Submit on enter or click

**Advanced search:**
- Expandable filters
- Search suggestions
- Recent searches
- Saved searches

### Search Results

**Display options:**
- List view: Good for scanning, details
- Grid view: Good for visual content
- Let users choose

**Result components:**
- Clear title/headline
- Preview/snippet with query highlighted
- Metadata (date, type, etc.)
- Actions

**No results:**
- Confirm what was searched
- Suggest spelling corrections
- Offer alternatives
- Link to popular content

### Filtering and Sorting

**Filters:**
- Show active filter count
- Easy to clear individual or all
- Update results immediately (or with "Apply")
- Show filtered result count

**Sorting:**
- Clear sort options
- Show current sort
- Consider: Relevance for search, date for content

---

## Onboarding Patterns

### First-Time User Experience

**Welcome screen:**
- Brief value proposition
- Get started CTA
- Option to skip/later

**Product tour:**
- Highlight key features
- Keep it short (3-5 steps)
- Allow skip at any time
- Show progress

**Tooltips/Coach marks:**
- Point to specific UI elements
- Appear in context
- Dismiss on interaction
- Don't overwhelm

### Progressive Onboarding

**Just-in-time guidance:**
- Show tips when relevant
- Explain on first use of feature
- Disappear after first use

**Checklist pattern:**
- Show setup progress
- Clear next step
- Celebrate completion
- Make it dismissible

**Empty state education:**
- Use empty states to teach
- Show what will appear
- Encourage first action

### Account Setup

**Minimize required fields:**
- Get minimum to start
- Ask for more later, in context
- Explain why you need information

**Social login:**
- Reduce friction
- Still allow email/password
- Explain what you'll access

**Email verification:**
- Allow use before verification (when possible)
- Clear resend option
- Explain why it matters

---

## Settings & Preferences

### Settings Organization

**Grouping:**
- Account (profile, password, email)
- Preferences (notifications, display, language)
- Privacy & security
- Billing (if applicable)
- Integrations

**Navigation:**
- Side nav for many settings
- Vertical list for fewer
- Searchable for complex settings

### Setting Types

**Toggles:**
- Immediate effect
- Clear on/off state
- Label describes "on" state

**Dropdowns:**
- For selecting from options
- Show current selection
- Preview effect if possible

**Sliders:**
- For ranges (volume, frequency)
- Show current value
- Consider stepped vs. continuous

**Text inputs:**
- For custom values
- Validate appropriately
- Save explicitly (or auto-save with feedback)

### Defaults and Recommendations

**Smart defaults:**
- Most common choice selected
- Reduces decisions for users
- Clearly reversible

**Recommendations:**
- Suggest optimal settings
- Explain why
- Don't force

---

## Mobile-Specific Patterns

### Gestures

**Tap:** Primary action
**Swipe:** Delete, reveal actions, navigate
**Long press:** Context menu, selection mode
**Pinch:** Zoom
**Pull down:** Refresh

**Rules:**
- Gestures should be discoverable
- Provide alternatives (visible buttons)
- Don't rely on gestures alone

### Mobile Navigation

**Bottom Nav:**
- 3-5 destinations
- Icons + labels
- Current state indicated

**Hamburger Menu:**
- Hides nav behind icon
- Use sparingly (out of sight = out of mind)
- Good for secondary navigation

**Tab Bar:**
- Similar to bottom nav
- Good for content sections

### Mobile Forms

- Larger touch targets
- Appropriate keyboard types (email, phone, number)
- Minimize typing (use selection when possible)
- Show password option
- Persist data (don't lose progress)

### Bottom Sheets

**Use for:**
- Actions and options
- Quick input
- Confirmations

**Behavior:**
- Swipe to dismiss
- Multiple heights (peek, half, full)
- Don't block critical content

---

## Progressive Disclosure

### Principle
Show only what's needed, when it's needed. Reveal complexity gradually.

### Patterns

**Accordion**
- Use: Expandable sections
- Show: Headers visible, content hidden
- Interaction: Click to expand/collapse

**Show/Hide**
- Use: Optional details
- Trigger: "Show more" link
- Don't: Hide critical information

**Wizard/Steps**
- Use: Complex processes
- Show: One step at a time
- Provide: Progress indicator, back button

**Popover/Tooltip**
- Use: Additional context
- Trigger: Hover or tap
- Don't: Put critical info in tooltips

---

## Data Entry Patterns

### Auto-complete
- Use: Helping users enter known values
- Shows: Suggestions as user types
- Behavior: Highlight match, allow keyboard navigation

### Type-ahead Search
- Use: Searching large datasets
- Shows: Results preview while typing
- Consider: Debounce to reduce API calls

### Inline Editing
- Use: Quick edits without mode change
- Show: Editable on hover/focus
- Confirm: Save automatically or with explicit action

### Drag and Drop
- Use: Reordering, organizing
- Feedback: Clear visual feedback during drag
- Accessibility: Provide keyboard alternative

### Multi-select
- Use: Selecting multiple items from a list
- Show: Selection count, clear all option
- Consider: Select all, bulk actions

---

## Error Handling Patterns

### Form Errors

**Display:**
- Highlight field
- Show message near field
- Scroll to first error

**Message content:**
- What's wrong
- How to fix
- Example if helpful

### Page Errors

**404 Not Found:**
- Friendly message
- Search or navigation options
- Link to home

**500 Server Error:**
- Apologize
- Suggest trying again
- Contact info for support

**No Connection:**
- Explain the issue
- Offer offline functionality if available
- Retry option

### Error Prevention

**Inline validation:**
- Check as user types (when helpful)
- Don't validate too aggressively

**Constraints:**
- Limit input to valid values
- Use appropriate input types
- Prevent invalid states

**Confirmation:**
- Confirm before destructive actions
- Show what will happen
- Easy to cancel

### Handling Edge Cases

- Anticipate what could go wrong
- Design for empty, error, and loading states
- Don't just design the happy path

---

## Micro-interactions

### Feedback Animations

**Button feedback:**
- Press state on click
- Loading state if async
- Success/error feedback

**State transitions:**
- Smooth transitions between states
- Show cause and effect
- Keep short (150-300ms)

**Attention grabbers:**
- Subtle pulse or shake
- Use sparingly
- For important changes only

### Delightful Details

**Success moments:**
- Celebrate completed actions
- Confetti, checkmarks, animations
- Don't overdo it

**Personality:**
- Loading illustrations
- Empty state graphics
- Error page humor (when appropriate)

### Principles

**Purpose over polish:**
- Animation should communicate
- Not just decoration
- Remove if it slows things down

**Performance:**
- 60fps target
- Don't animate heavy elements
- Consider reduced motion preferences
