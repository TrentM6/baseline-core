# Create Notion Page

> Create a new page in Notion with structured content.

## Works With Skills

- Any skill (documentation, knowledge bases, project wikis)

## When to Use

- After creating deliverables that should be documented in Notion
- When building project documentation or wikis
- After completing research that needs to be shared
- When creating structured notes or knowledge bases

## Prerequisites

**Required connection:** Notion (via Connector or Notion MCP)

- User has access to the target Notion workspace
- Target database or parent page identified

**If not connected:**
- Claude cannot create the page automatically
- Alternative: Claude can format the content with Notion-compatible markdown for you to copy/paste manually
- Alternative: Use [write-markdown.md](../file-system/write-markdown.md) to save locally instead

## Instructions

1. **Verify MCP connection:**
   - Check if Notion MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Confirm the destination:**
   - "Which Notion workspace/database should this go in?"
   - "Is this a new page or should it be added to an existing database?"

3. **Gather page details:**
   - Page title
   - Parent page or database (if applicable)
   - Any database properties to set (status, tags, dates)

4. **Format the content:**
   - Convert content to Notion-compatible format
   - Use headers for structure (H1, H2, H3)
   - Use callouts for important notes
   - Use toggle blocks for detailed sections
   - Add dividers between major sections

5. **Create the page:**
   - Use the Notion MCP tool to create the page
   - Set all specified properties
   - Add the formatted content

6. **Confirm with user:**
   - "I've created the page '[Title]' in your Notion workspace."
   - Provide link to the page if available
   - Note any properties that were set

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| title | Page title | Yes |
| content | Page body content | Yes |
| parent | Parent page or database ID | Yes |
| properties | Database properties (if applicable) | No |
| icon | Page icon (emoji or URL) | No |

## Notion Formatting Tips

**Structure for readability:**
- Use H1 for page title (usually auto-set)
- Use H2 for major sections
- Use H3 for subsections
- Keep paragraphs short

**Use Notion blocks effectively:**
- Callouts for warnings, tips, or highlights
- Toggle blocks for detailed content that can be collapsed
- Code blocks for technical content
- Bulleted/numbered lists for scannable content
- Tables for structured data

**Example page structure:**
```
# [Page Title]

> Brief description or context

## Overview
[Summary content]

## Details
### Subsection 1
[Content]

### Subsection 2
[Content]

## Next Steps
- [ ] Action item 1
- [ ] Action item 2
```

## Example

**Scenario:** User completed a research synthesis and wants to document it in Notion

**User:** "Add this research to our Notion wiki"

**Claude:**
1. Verifies Notion MCP is connected
2. Asks: "Which Notion database or page should this go under?"
3. User: "The Research database"
4. Formats content for Notion:
   - Adds structured headers
   - Creates callouts for key findings
   - Adds toggle blocks for detailed methodology
5. Creates page with properties:
   - Title: "User Research: Onboarding Flow"
   - Status: "Complete"
   - Tags: "Research", "Onboarding"
6. Returns: "Created 'User Research: Onboarding Flow' in your Research database. [Link]"

## Important Notes

- **Verify workspace access** — Confirm the user has edit access to the target location
- **Check for duplicates** — Ask if a similar page already exists that should be updated instead
- **Database properties** — If adding to a database, ensure all required properties are set
- **Large content** — For very long content, consider breaking into multiple pages with links

## Error Handling

**MCP not connected:**
- "The Notion MCP is not connected. I can't create the page automatically."
- Offer alternatives: "I can format this content with Notion-compatible markdown for you to copy/paste, or save it as a local markdown file."

**Authentication failed:**
- "Notion authentication failed. Please reconnect the Notion MCP in your Claude settings and try again."

**Workspace not found:**
- "I can't find that workspace or database. Can you check the name or provide the database ID?"

**Permission denied:**
- "I don't have permission to create pages in that location. Please check that the Notion integration has access to that workspace."

**Database properties missing:**
- "This database requires certain properties that weren't provided. Which values should I use for [property name]?"

**Page creation failed:**
- "I couldn't create the page in Notion. Here's the formatted content you can add manually: [content]"
