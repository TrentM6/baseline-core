# Information Architecture for Documentation

> How to organize, structure, and scale documentation — content organization, navigation, and taxonomy design.

**Part of:** [Technical Documentation](../technical-documentation-skill.md)

---

## Content Organization Strategies

### Task-Based Organization

**Organize around what users want to DO:**
- "Getting Started"
- "Managing Users"
- "Configuring Integrations"
- "Troubleshooting Errors"

**Best for:** Products where users come with specific tasks. Most SaaS documentation.

**Advantage:** Users find what they need quickly because the structure matches their intent.

### Feature-Based Organization

**Organize around product capabilities:**
- "Dashboard"
- "Reports"
- "API"
- "Admin Settings"

**Best for:** Reference documentation, API docs, admin guides.

**Risk:** Users may not know which feature solves their problem. Combine with task-based for best results.

### Role-Based Organization

**Organize around who the reader is:**
- "For Developers"
- "For Administrators"
- "For End Users"
- "For Managers"

**Best for:** Products with distinct user types who need different information.

**Risk:** Content duplication across roles. Use cross-references to share common information.

### Hybrid Approach (Recommended for Most Products)

Combine strategies:
```
Getting Started (task-based)
├── For Developers
├── For Admins
├── For End Users

Guides (task-based)
├── Managing Users
├── Configuring Integrations
├── Building Reports

Reference (feature-based)
├── API Reference
├── Configuration Options
├── Error Codes

Troubleshooting (task-based)
├── Common Issues
├── Error Messages
├── FAQ
```

---

## Taxonomy Design

### Categories

Group content into 5-8 top-level categories. More than 8 forces users to scan too many options.

**Naming rules:**
- Use user-facing language, not internal jargon
- Be specific: "Manage Team Members" not "Administration"
- Be consistent in grammatical form: all verbs or all nouns
- Test names with users — can they predict what's inside?

### Tags

Use tags for cross-cutting concerns that don't fit the hierarchy:

| Tag Type | Examples |
|----------|---------|
| Feature area | Authentication, Billing, API |
| User role | Developer, Admin, End User |
| Content type | Tutorial, Reference, Troubleshooting |
| Difficulty | Beginner, Intermediate, Advanced |
| Platform | iOS, Android, Web |

**Tagging rules:**
- Controlled vocabulary (predefined list, not freeform)
- 2-4 tags per document (more creates noise)
- Review tags quarterly for relevance and consistency

### Hierarchy Depth

- **3 levels maximum** for navigation. Deeper nesting means users can't find content.
- If you need 4+ levels, consider flattening or splitting into separate doc sites.

```
✅ Good: Category → Section → Page
❌ Bad: Category → Subcategory → Section → Subsection → Page
```

---

## Navigation Patterns

### Sidebar Navigation

- Most common for documentation sites
- Shows the full structure at a glance
- Collapsible sections for complex docs
- Current page should be highlighted
- Consider sticky/fixed sidebar for long pages

**Design rules:**
- Show 2 levels in sidebar; deeper levels on the page itself
- Group related pages with section headers
- Put most-used sections at the top
- Include "Getting Started" as the first item

### Breadcrumbs

- Show path from home to current page
- Essential for deep hierarchies
- Each level is a clickable link except the current page
- Format: `Home > Category > Section > Current Page`

### Search

- Most users search before they browse. Make search prominent.
- Include search suggestions (popular queries, recent searches)
- Search results should show: title, preview snippet, category
- Filter search results by category, tag, or content type

### Progressive Disclosure

- Landing pages show summaries with links to detail
- Expandable sections for optional detail within a page
- "See also" links for related but non-essential content
- "Next steps" at the end of each page guide the reader forward

---

## Search Optimization for Docs

### Titles

- Start with the action or topic: "Configure SSO" not "How to Configure SSO"
- Include the specific feature or term users will search for
- Unique titles — no two pages should have the same title
- Keep under 60 characters for search result display

### Descriptions

- Every page should have a meta description
- Summarize what the reader will learn in 1-2 sentences
- Include key terms users might search for
- Keep under 160 characters

### Headings

- Use H2 and H3 headings liberally — they help both scanners and search
- Headings should be descriptive: "Set Up API Authentication" not "Step 3"
- Include relevant terms in headings naturally

### Internal Links

- Link to related pages from within content (inline links)
- "See also" sections at the bottom of pages
- Link from general pages to specific pages (and back)
- Fix broken links quarterly

---

## Content Auditing

### Inventory

Build a spreadsheet of all documentation with:

| Field | Purpose |
|-------|---------|
| URL | Location |
| Title | Identification |
| Last updated | Freshness |
| Page views (monthly) | Usage |
| Content type | Classification |
| Product area | Coverage mapping |
| Accuracy status | Current / Needs review / Outdated |
| Owner | Accountability |

### Finding Gaps

**Compare docs to product:**
- List every feature → check if documentation exists for each
- List every user workflow → check if a guide exists for each
- List every error message → check if troubleshooting exists for each

**Analyze search data:**
- What are users searching for that returns no results?
- What search terms have high volume but low click-through?
- What support tickets could have been prevented with docs?

### Identifying Redundancy

- Multiple pages covering the same topic with slightly different info
- Outdated pages that duplicate updated content
- Feature-specific pages that overlap with guide pages

**Resolution:** Consolidate into one canonical page, redirect the others.

---

## Doc Site Structure Patterns

### Standard Pattern

```
Landing Page
├── Getting Started
│   ├── Quick Start (5-minute setup)
│   ├── Installation
│   └── First Steps Tutorial
├── Guides
│   ├── [Task-based guides organized by workflow]
│   └── [Each guide is self-contained]
├── Reference
│   ├── API Reference
│   ├── Configuration Reference
│   ├── CLI Reference
│   └── Error Codes
├── Concepts
│   ├── [Architecture / how it works]
│   └── [Key concepts explained]
├── Changelog
│   └── [Release notes by version]
└── Support
    ├── FAQ
    ├── Troubleshooting
    └── Contact
```

### Landing Page Design

The doc site landing page should answer:
1. **What is this?** — One sentence
2. **How do I get started?** — Prominent link to quick start
3. **What can I find here?** — Category cards or links
4. **What's new?** — Recent changes or updates

---

## Cross-Referencing and Linking Strategy

### When to Link vs. Inline

| Situation | Approach |
|-----------|---------|
| Reader needs this info to complete the current task | Inline it on the page |
| Info is useful but not essential to the current task | Link to it with brief context |
| Info is a prerequisite the reader should already know | Link with "Before you begin, make sure you've [completed X]" |
| Same info needed on multiple pages | Create one canonical page, link from all others |

### Linking Best Practices

- Use descriptive link text: "See the [Authentication Guide]" not "See [here]"
- Provide context for why they should click: "For advanced configuration options, see [Configuration Reference]"
- Don't over-link — 3-5 links per section is plenty
- Check for circular links (A links to B, B links back to A with no new value)
- Include "Prerequisites" section at the top of complex guides with links to required setup

---

## Scaling Documentation

### Single Product → Multi-Product

**When you have multiple products sharing a doc site:**
- Top-level navigation separates products
- Shared concepts get their own section (not duplicated)
- Cross-product features link between product sections
- Search should indicate which product a result belongs to

### Versioning

**When to version docs:**
- API with breaking changes between versions
- Self-hosted software where users run different versions
- Major product changes where old workflows still exist

**Versioning patterns:**
- Version selector in navigation
- Default to latest version
- Banner on old versions: "You're viewing docs for v2. See [latest version]."
- Deprecation notices on removed features

### Localization Considerations

**When to localize:**
- Significant user base in non-English markets
- Regulatory requirements in specific regions
- Strategic market expansion

**Localization approach:**
- Start with highest-traffic pages (not everything)
- Use professional translation (not machine translation alone)
- Maintain a glossary for consistent terminology
- Have native speakers review technical accuracy
- Keep localized docs in sync with source language (flag outdated translations)
