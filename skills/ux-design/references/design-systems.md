# Design Systems Reference

Deep guidance on building and maintaining design systems.

---

## Token Architecture

Tokens are the foundation — primitive values that everything else builds on.

### Token Layers

```
┌─────────────────────────────────────────┐
│  Component Tokens (most specific)       │
│  button-background-primary              │
├─────────────────────────────────────────┤
│  Semantic Tokens                        │
│  color-action-primary                   │
├─────────────────────────────────────────┤
│  Primitive Tokens (most generic)        │
│  blue-500                               │
└─────────────────────────────────────────┘
```

**Primitive tokens:** Raw values, color-agnostic names
```
blue-500: #3B82F6
gray-100: #F3F4F6
spacing-4: 16px
```

**Semantic tokens:** Purpose-based, reference primitives
```
color-action-primary: {blue-500}
color-background-surface: {gray-100}
spacing-component-gap: {spacing-4}
```

**Component tokens:** Specific to components, reference semantic
```
button-background-primary: {color-action-primary}
card-padding: {spacing-component-gap}
```

### Why Layered Tokens?

- **Theme support:** Change `color-action-primary` once, all buttons update
- **Dark mode:** Swap semantic layer, primitives stay the same
- **Maintainability:** Rename a primitive without breaking components

### Color Tokens

**Structure:**
```
color-[category]-[variant]-[state]

Categories: action, background, text, border, feedback
Variants: primary, secondary, tertiary, inverse
States: default, hover, active, disabled
```

**Examples:**
```
color-action-primary-default
color-action-primary-hover
color-background-surface
color-text-primary
color-text-secondary
color-border-default
color-feedback-error
color-feedback-success
```

### Spacing Tokens

**Base unit approach (recommended):**
```
Base: 4px

spacing-1: 4px   (0.25rem)
spacing-2: 8px   (0.5rem)
spacing-3: 12px  (0.75rem)
spacing-4: 16px  (1rem)
spacing-6: 24px  (1.5rem)
spacing-8: 32px  (2rem)
spacing-12: 48px (3rem)
spacing-16: 64px (4rem)
```

**Semantic spacing:**
```
spacing-component-padding: {spacing-4}
spacing-component-gap: {spacing-3}
spacing-section-gap: {spacing-8}
spacing-page-margin: {spacing-6}
```

### Typography Tokens

**Font scale:**
```
font-size-xs: 12px
font-size-sm: 14px
font-size-base: 16px
font-size-lg: 18px
font-size-xl: 20px
font-size-2xl: 24px
font-size-3xl: 30px
font-size-4xl: 36px
```

**Semantic typography:**
```
typography-heading-1: {
  font-size: {font-size-4xl}
  font-weight: 700
  line-height: 1.2
}

typography-body: {
  font-size: {font-size-base}
  font-weight: 400
  line-height: 1.5
}
```

---

## Component Design

### Component Anatomy

Every component should define:

1. **Variants:** Visual variations (primary, secondary, ghost)
2. **Sizes:** Scale options (sm, md, lg)
3. **States:** Interactive states (default, hover, active, focus, disabled)
4. **Props:** Configurable options (icon, loading, full-width)

### Component Documentation Template

```markdown
## Button

### Description
Triggers an action or event.

### Variants
| Variant | Use Case |
|---------|----------|
| Primary | Main action, one per view |
| Secondary | Supporting actions |
| Ghost | Tertiary actions, low emphasis |
| Destructive | Irreversible actions |

### Sizes
| Size | Height | Use Case |
|------|--------|----------|
| sm | 32px | Dense UI, tables |
| md | 40px | Default |
| lg | 48px | Marketing, emphasis |

### States
- Default
- Hover
- Active (pressed)
- Focus (keyboard)
- Disabled
- Loading

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual style |
| size | string | 'md' | Button size |
| disabled | boolean | false | Disable interaction |
| loading | boolean | false | Show loading state |
| icon | ReactNode | - | Optional icon |
| fullWidth | boolean | false | Span container width |

### Accessibility
- Use `<button>` element (not div)
- Include `aria-label` if icon-only
- Minimum touch target: 44x44px
- Visible focus state

### Do / Don't
✓ Use primary for the main action
✗ Don't use multiple primary buttons in one view

✓ Use verb + noun labels ("Save changes")
✗ Don't use vague labels ("Submit", "OK")
```

### State Design Checklist

For every interactive component:

- [ ] **Default:** Resting state
- [ ] **Hover:** Mouse over (desktop)
- [ ] **Active:** Being pressed
- [ ] **Focus:** Keyboard navigation (visible ring)
- [ ] **Disabled:** Cannot interact
- [ ] **Loading:** Action in progress
- [ ] **Error:** Invalid state (inputs)
- [ ] **Success:** Validated state (inputs)

---

## Pattern Library

Patterns combine components into reusable solutions.

### Common Patterns

**Forms:**
- Single-column layout (preferred)
- Labels above inputs
- Required field indicators
- Inline validation
- Clear error messages
- Logical tab order

**Navigation:**
- Primary nav (top or side)
- Breadcrumbs for deep hierarchy
- Mobile: bottom nav or hamburger
- Active state indication

**Data Display:**
- Tables for comparison
- Cards for browsing
- Lists for sequential items
- Pagination vs. infinite scroll

**Feedback:**
- Toast for transient messages
- Modal for confirmations
- Inline for form errors
- Progress for long operations

### Pattern Documentation

```markdown
## Form Pattern

### When to Use
- Collecting user input
- Multi-step processes
- Settings and configuration

### Structure
1. Form header (title, description)
2. Input groups (related fields together)
3. Form actions (primary right, secondary left)

### Layout
- Single column for simplicity
- Multi-column only for related short fields (city/state/zip)
- 600px max-width for readability

### Validation
- Validate on blur (not on every keystroke)
- Show errors inline below field
- Summarize errors at top for long forms
- Don't clear fields on error

### Example
[Include annotated screenshot or Figma link]
```

---

## Governance

### Contribution Process

1. **Propose:** Open issue describing need
2. **Review:** Design review for consistency
3. **Build:** Create in design tool + code
4. **Document:** Add to pattern library
5. **Release:** Version and announce

### Versioning

**Semantic versioning:**
- **Major (2.0):** Breaking changes
- **Minor (1.1):** New components, non-breaking
- **Patch (1.0.1):** Bug fixes

**Breaking changes include:**
- Removing a component
- Changing prop names
- Changing default behavior
- Removing a variant

### Deprecation

1. Mark as deprecated in docs
2. Add console warning in code
3. Provide migration path
4. Remove after 2 major versions

### Adoption Metrics

Track system health:
- Component usage (which are used most?)
- Custom overrides (where is system failing?)
- Design debt (how many one-offs exist?)
- Contribution rate (is team engaged?)

---

## Tools & Handoff

### Design Tool Setup (Figma)

**File structure:**
```
📁 Design System
├── 📄 Tokens (colors, typography, spacing)
├── 📄 Components (all component variants)
├── 📄 Patterns (common compositions)
└── 📄 Templates (page layouts)
```

**Component organization:**
- Use variants and properties
- Name consistently (`Button/Primary/Medium/Default`)
- Include all states
- Auto-layout everything

### Engineering Handoff

**What engineers need:**
- Token values (or token export)
- Component API (props, types)
- State behaviors
- Responsive breakpoints
- Accessibility requirements
- Animation timing

**Handoff checklist:**
- [ ] All states designed?
- [ ] Responsive behavior defined?
- [ ] Interaction specs clear?
- [ ] Tokens mapped to code?
- [ ] Edge cases documented?

---

## Common Mistakes

| Mistake | Problem | Instead |
|---------|---------|---------|
| **Too many tokens** | Overwhelming, inconsistent | Start minimal, add as needed |
| **Non-semantic naming** | `blue-button` breaks with theme changes | `button-primary` |
| **Missing states** | Engineers guess, inconsistent | Design all states upfront |
| **No documentation** | Tribal knowledge, inconsistent usage | Document everything |
| **Perfect before used** | System never ships | Ship minimal, iterate |
| **No governance** | System fragments | Clear contribution process |
| **Design-only system** | Engineers build differently | Include engineering from start |
