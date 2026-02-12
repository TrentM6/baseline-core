# Create Google Doc

> Save long-form content to a formatted Google Doc for sharing and collaboration.

## Works With Skills

- Research & Synthesis (research reports, synthesis documents)
- Product Communications (PRDs, product briefs, specs)
- Technical Documentation (user guides, help articles)
- Go-to-Market Planning (GTM strategy documents, pricing analysis)

## When to Use

- After completing a PRD, product brief, or spec
- After writing research reports or synthesis documents
- After creating any document intended for team sharing
- When output needs collaborative editing

## Prerequisites

**Required connection:** Google Docs (via Connector or Google Workspace MCP)

- User has Google account access
- User has permission to create documents

**If not connected:**
- Claude cannot create the document automatically
- Alternative: Use [write-markdown.md](../file-system/write-markdown.md) to save as a local markdown file
- Alternative: Claude can format the content for manual copy/paste into Google Docs

## Instructions

1. **Verify MCP connection:**
   - Check if Google Docs MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Confirm document details:**
   - "I can save this to Google Docs. What would you like to name it?"
   - Suggest: "[Document Type] - [Subject] - [Date]"
   - Ask about sharing preferences (private, specific people, anyone with link)

3. **Create the document** using Google Docs MCP:
   - Create new document with confirmed name
   - Apply the content with proper formatting:
     - H1 for title
     - H2 for main sections
     - H3 for subsections
     - Bullet lists preserved
     - Tables formatted correctly

4. **Apply formatting:**
   - Add table of contents if document is long (5+ sections)
   - Apply consistent heading styles
   - Ensure links are clickable
   - Add page breaks before major sections if appropriate

5. **Set sharing** based on user preference:
   - Private (only owner)
   - Specific people (ask for emails)
   - Anyone with link (view or edit)

6. **Return to user:**
   - Share the document link
   - Confirm sharing settings
   - Note any formatting that may need manual adjustment

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | Document content to save | Yes |
| doc_name | Name for the document | Yes |
| sharing | Sharing preference | No (default: private) |

## Example

**Scenario:** User just completed a product brief

**User:** "Save this brief to Google Docs and share it with the team"

**Claude:**
1. Verifies Google Docs MCP is connected
2. Asks: "I'll create 'Product Brief - User Onboarding - Feb 2024'. Who should I share it with?"
3. User: "Make it viewable by anyone with the link"
4. Creates document with formatted content
5. Sets sharing to "Anyone with link can view"
6. Returns: "Created and shared 'Product Brief - User Onboarding - Feb 2024'. Anyone with this link can view: [Link]"

## Error Handling

**MCP not connected:**
- "The Google Docs MCP is not connected. I can't create the document automatically."
- Offer alternatives: "I can save this as a local markdown file, or format it for you to copy/paste into Google Docs manually."

**Authentication failed:**
- "Google Docs authentication failed. Please reconnect the Google MCP in your Claude settings and try again."

**Permission denied:**
- "I don't have permission to create documents in your Google account. Please check your MCP permissions."

**Sharing failed:**
- "I created the document but couldn't set sharing permissions. You can adjust sharing manually in Google Docs: [Link]"

**Content too large:**
- "This content is very large for a single document. I can split it into multiple documents, or create one document with a table of contents. Which would you prefer?"
