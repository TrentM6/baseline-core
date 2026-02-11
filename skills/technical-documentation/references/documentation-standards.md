# Documentation Standards

> Standards, conventions, and best practices for technical documentation.

**Part of:** [Technical Documentation](technical-documentation/technical-documentation-skill.md)

---

## The Divio Documentation System

A framework for organizing documentation into four distinct types:

### Tutorials (Learning-Oriented)

**Purpose:** Teach a beginner how to get started
**Analogy:** Teaching a child to cook

**Characteristics:**
- Learning by doing
- Getting the user started
- Shows them what they can accomplish
- Teaches through a series of steps

**Key principles:**
- You are the teacher, they are the student
- Help the learner achieve something meaningful
- Focus on concrete steps, not explanations
- Work from general to specific
- Ensure the tutorial works (test it!)
- Inspire confidence

**Example:** "Getting Started with [Product]" tutorial

### How-To Guides (Task-Oriented)

**Purpose:** Help accomplish a specific task
**Analogy:** A recipe in a cookbook

**Characteristics:**
- Assumes some basic knowledge
- Focused on achieving a specific result
- Series of steps to follow
- Addresses a real-world task

**Key principles:**
- Focus on the goal, not the journey
- Assume competence (they know the basics)
- Keep it practical
- Solve a real problem
- Title as "How to [accomplish X]"

**Example:** "How to configure SSO integration"

### Reference (Information-Oriented)

**Purpose:** Describe the machinery
**Analogy:** Encyclopedia article

**Characteristics:**
- Structured around the code/product
- Accurate and complete
- Purely descriptive
- No instructions or opinion

**Key principles:**
- Structure around the code
- Be consistent (same format throughout)
- Accurate above all
- Complete — include everything
- Keep it terse (for lookup, not reading)

**Example:** API reference, configuration options

### Explanation (Understanding-Oriented)

**Purpose:** Explain background and context
**Analogy:** Article in a history book

**Characteristics:**
- Understanding-oriented
- Discusses alternatives and opinions
- Provides context
- Can be discursive

**Key principles:**
- Provide context
- Discuss alternatives
- Connect to broader concepts
- Can express opinion
- Titles like "About [topic]" or "Understanding [concept]"

**Example:** "Understanding authentication flows"

---

## Style Guide Standards

### Microsoft Style Guide Highlights

**Voice:**
- Friendly but professional
- Direct and concise
- Helpful without being condescending

**Point of view:**
- Use second person ("you") for instructions
- Use first person plural ("we") sparingly for company

**Tense:**
- Present tense for actions: "This command creates..."
- Future for what will happen: "The file will be saved..."

**Active vs. Passive:**
- Prefer active: "Click the button" not "The button should be clicked"
- Passive okay when actor is unknown or irrelevant

### Google Developer Documentation Style Guide Highlights

**Clarity:**
- Use simple words
- Write short sentences
- Be direct

**Accessibility:**
- Write for international audiences
- Avoid idioms and cultural references
- Use gender-neutral language

**Formatting:**
- Use sentence case for headings
- Code font for code, commands, filenames
- Bold for UI elements

---

## Formatting Standards

### Headings

**Hierarchy:**
```
# Page Title (H1) — one per page
## Major Section (H2)
### Subsection (H3)
#### Minor Section (H4) — use sparingly
```

**Rules:**
- Only one H1 per page
- Don't skip levels (H1 → H3)
- Make headings descriptive
- Sentence case (not Title Case)

### Lists

**Numbered lists:** For sequential steps
```
1. First step
2. Second step
3. Third step
```

**Bulleted lists:** For non-sequential items
```
- Item one
- Item two
- Item three
```

**Rules:**
- Parallel structure (all start with verb, or all are nouns)
- Consistent punctuation
- Keep items concise

### Code

**Inline code:** For commands, filenames, values
```
Use the `config.yaml` file to set the `timeout` parameter.
```

**Code blocks:** For multi-line code
```python
def hello():
    print("Hello, world!")
```

**Rules:**
- Use appropriate syntax highlighting
- Include only relevant code
- Test all code samples
- Add comments for clarity

### Tables

**Use for:**
- Parameters with multiple attributes
- Comparison of options
- Structured data

**Format:**
```
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data | Data | Data |
```

### Callouts / Admonitions

**Types:**
- **Note:** Additional information
- **Tip:** Helpful suggestions
- **Warning:** Something could go wrong
- **Caution/Danger:** Risk of data loss or security issue

**Format (varies by platform):**
```
> **Note:** Additional helpful information.

> **Warning:** This action cannot be undone.
```

---

## Content Standards

### Prerequisites

Always state what users need before starting:
- Software versions
- Access or permissions
- Prior knowledge
- Required materials

### Procedures

**Step format:**
1. Start with a verb
2. Be specific about where to click/type
3. One action per step
4. Include expected results when helpful

**Good:**
```
1. Click **Settings** in the top navigation.
2. Select **Security** from the sidebar.
3. Toggle **Two-factor authentication** to **On**.
   The confirmation dialog appears.
4. Click **Enable**.
```

**Bad:**
```
1. Go to settings and security and turn on 2FA.
```

### Examples

**Include:**
- Working, tested code
- Realistic data (not foo/bar)
- Expected output where helpful
- Comments explaining key parts

**Format:**
```
// Example: Creating a new user
const user = createUser({
  name: "Jane Smith",
  email: "jane@example.com"
});

// Output:
// { id: "usr_123", name: "Jane Smith", email: "jane@example.com" }
```

### Screenshots

**When to include:**
- Complex or unfamiliar UI
- Orientation (where to find something)
- Verification (what success looks like)

**Standards:**
- Crop to relevant area
- Consistent size/quality
- Add annotations for focus
- Include alt text
- Update when UI changes

### Error Messages

**Document:**
- Exact error text
- What it means
- Common causes
- How to resolve

**Format:**
```
### Error: Connection refused

**Message:** `ECONNREFUSED: Connection refused to localhost:5432`

**Cause:** The database server is not running or not accessible.

**Solution:**
1. Verify the database server is running.
2. Check the connection settings in `config.yaml`.
3. Ensure firewall allows connections on port 5432.
```

---

## API Documentation Standards

### Endpoint Documentation

**Include for each endpoint:**
- HTTP method and path
- Description of purpose
- Authentication requirements
- Request parameters (path, query, body)
- Request example
- Response format
- Response example
- Error responses
- Rate limits if applicable

### Parameter Documentation

| Attribute | Description |
|-----------|-------------|
| Name | Exact name |
| Type | Data type |
| Required | Yes/No |
| Description | What it does |
| Default | Default value if optional |
| Example | Example value |
| Constraints | Min/max, format, etc. |

### Authentication

Document:
- Authentication methods supported
- How to obtain credentials
- How to include in requests
- Token expiration and refresh

### Errors

Document standard error format and codes:
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email"
  }
}
```

---

## Accessibility Standards

### Text

- **Reading level:** Write for 8th-grade level when possible
- **Sentence length:** Average 15-20 words
- **Paragraph length:** 3-5 sentences max
- **Line length:** 80-100 characters

### Structure

- **Headings:** Descriptive, in logical order
- **Lists:** Break up complex information
- **Tables:** Use for structured data, include headers
- **Links:** Descriptive text ("View the API docs" not "click here")

### Images

- **Alt text:** Describe the image content
- **Don't rely on images alone:** Key info should be in text too
- **Color:** Don't use color as only indicator

### Code

- **Syntax highlighting:** Improves readability
- **Copy buttons:** Help users get code easily
- **Screen reader friendly:** Use proper code markup

---

## Maintenance Standards

### Update Triggers

- Product releases
- API changes
- User feedback/support tickets
- Scheduled reviews (quarterly)

### Review Checklist

- [ ] Technical accuracy verified
- [ ] All links working
- [ ] Screenshots current
- [ ] Code samples tested
- [ ] Consistent formatting
- [ ] Grammar and spelling checked

### Version Control

- Track changes in version control
- Meaningful commit messages
- Review process for changes
- Changelog for major updates

### Deprecation

When deprecating features:
1. Mark as deprecated in docs
2. Provide migration path
3. State removal timeline
4. Keep docs until fully removed
5. Redirect old URLs

---

## Common Mistakes to Avoid

### Content Mistakes

| Mistake | Fix |
|---------|-----|
| Outdated information | Regular review schedule |
| Untested code | Test all samples |
| Assumed knowledge | State prerequisites |
| Too much jargon | Define terms or simplify |
| Missing steps | Walk through yourself |

### Structure Mistakes

| Mistake | Fix |
|---------|-----|
| Wall of text | Use formatting, break up |
| No navigation | Add TOC, headings |
| Dead links | Regular link checking |
| Inconsistent formatting | Use templates |
| Deep nesting | Flatten structure |

### Process Mistakes

| Mistake | Fix |
|---------|-----|
| No review process | Require peer review |
| Not updating with releases | Integrate with release process |
| Ignoring user feedback | Track and act on feedback |
| Writing in isolation | Involve SMEs and users |
