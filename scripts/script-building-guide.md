# Script Building Guide

> How to create Claude-specific execution scripts that extend skills with automation.

---

## Critical Concept: MCP Dependency

**Scripts are instructions. MCPs are execution.**

A script tells Claude *how* to do something. An MCP tool *actually does it*. Without the MCP connected, the script is just text that can't be executed.

```
Script alone:     "Here's how to post to Slack"     → Nothing happens
Script + MCP:     "Here's how to post to Slack"     → Message posted
               +  [Slack MCP connected]
```

**When building scripts:**
1. Always document which MCP is required
2. Include error handling for when the MCP isn't available
3. Suggest alternatives when possible

---

## What Is a Script?

A script is a markdown file containing instructions for Claude to automate output delivery using MCP tools. Scripts are:

- **Claude-specific** — They only work with Claude and MCP tools
- **MCP-dependent** — They require specific MCP connections to function
- **Separate from skills** — Skills are universal; scripts are the Claude execution layer
- **Focused on delivery** — They move output from Claude to external systems

---

## Script Structure

Every script follows this pattern:

```markdown
# [Script Name]

> [One-line description of what this script does]

## When to Use

[When this script is useful — which skills, which outputs, which situations]

## Prerequisites

**Required connection:** [Service name] (via Connector or [Service] MCP)

[Additional requirements — user access, permissions, etc.]

## Instructions

[Step-by-step instructions Claude follows to execute the script]

## Parameters

[Variables that need to be provided — output content, destination, etc.]

## Error Handling

[What to do when the connection isn't available or execution fails]

## Example

[A concrete example of the script in action]
```

---

## The Prerequisites Section

**This is the most important section.** Every script MUST clearly state:

```markdown
## Prerequisites

**Required connection:** [Service name] (via Connector or [Service] MCP)

- [Additional requirement 1]
- [Additional requirement 2]

**If not connected:**
- Claude cannot execute this script
- Alternative: [suggest another script or manual process]
```

### Good Prerequisites Example

```markdown
## Prerequisites

**Required connection:** Google Sheets (via Connector or Google Workspace MCP)

- User must have Google account access
- User must have permission to create spreadsheets

**If not connected:**
- Claude cannot create the spreadsheet automatically
- Alternative: Claude can format the data as a table, and you can copy/paste it into Sheets manually
- Alternative: Use [write-markdown.md](file-system/write-markdown.md) to save as a local file instead
```

### Bad Prerequisites Example

```markdown
## Prerequisites

- Google Sheets access
```

This is bad because it doesn't specify the connection requirement or provide alternatives.

---

## Error Handling Section

Every script should include instructions for common failures:

```markdown
## Error Handling

**MCP not connected:**
- Inform the user: "The [Tool] MCP is not connected. I can't automatically [action]."
- Offer alternatives:
  - "I can format this content for you to copy/paste manually"
  - "I can use [alternative script] instead if you have [other MCP] connected"

**Authentication failed:**
- Guide the user to reconnect the MCP integration
- Don't retry automatically — wait for user confirmation

**Permission denied:**
- Explain what permission is needed
- Suggest the user check their account settings

**Content too large:**
- Offer to split the content
- Suggest a different format or destination
```

---

## Writing Good Instructions

### Be Explicit

Tell Claude exactly what to do, step by step:

**Good:**
```markdown
1. Take the PRD content provided by the user
2. Open Google Sheets using the MCP sheets tool
3. Create a new spreadsheet named "[Feature Name] - PRD"
4. Format the content with headers in row 1
5. Confirm completion with the user
```

**Bad:**
```markdown
Export the PRD to Sheets.
```

### Check MCP Availability First

Always verify the tool is available before attempting to use it:

```markdown
## Instructions

1. **Verify MCP connection:**
   - Check if the Google Sheets MCP tool is available
   - If not available, inform user and stop (see Error Handling)

2. **Gather requirements:**
   - Ask user for spreadsheet name
   - Confirm which content to export

3. **Execute:**
   - Create the spreadsheet using the MCP tool
   ...
```

### Confirm Before Acting

For irreversible actions, always confirm:

```markdown
Before creating the file, confirm with the user:
- Filename: [proposed name]
- Location: [proposed path]
- Content preview: [first 100 characters]

Proceed only after user confirms.
```

---

## Script Categories

### Google Integrations (`google/`)

For Google Workspace — Sheets, Docs, Drive, Slides.

**Required connection:** Google Workspace (via Connector or Google Workspace MCP)

**Common scripts:**
- [export-to-sheets.md](google/export-to-sheets.md) — Structured data to spreadsheets
- [create-doc.md](google/create-doc.md) — Long-form content to Google Docs
- `upload-to-drive.md` — Files to Google Drive (not yet created)

### Communication (`communication/`)

For messaging and email — Slack, Gmail, Teams.

**Required connections:** Slack, Gmail, etc. (via Connectors or respective MCPs)

**Common scripts:**
- [post-to-slack.md](communication/post-to-slack.md) — Updates to Slack channels
- [draft-email.md](communication/draft-email.md) — Compose emails in Gmail

### File System (`file-system/`)

For local file operations.

**Required:** File system access (usually available by default in Claude desktop/CLI)

**Common scripts:**
- [write-markdown.md](file-system/write-markdown.md) — Save output as .md files
- [create-folder-structure.md](file-system/create-folder-structure.md) — Create project directories

### Project Tools (`project-tools/`)

For project management — Notion, Linear, Jira, Asana.

**Required connections:** Notion, Linear, etc. (via Connectors or respective MCPs)

**Common scripts:**
- [create-notion-page.md](project-tools/create-notion-page.md) — Add pages to Notion databases
- [create-linear-issue.md](project-tools/create-linear-issue.md) — Create Linear tasks

---

## Example Script (Complete)

```markdown
# Export to Google Sheets

> Export structured content (tables, lists, data) to a Google Sheets spreadsheet.

## When to Use

- After generating a PRD with requirements tables
- After creating a competitive analysis matrix
- After producing any structured data that benefits from spreadsheet format

## Prerequisites

**Required connection:** Google Sheets (via Connector or Google Workspace MCP)

- User must have Google account with Sheets access
- User must have permission to create new spreadsheets

**If not connected:**
- Claude cannot create the spreadsheet automatically
- Alternative: Use [write-markdown.md](file-system/write-markdown.md) to save as a local CSV file
- Alternative: Claude can format as a markdown table for manual copy/paste

## Instructions

1. **Verify MCP connection:**
   - Check if Google Sheets MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Identify structured content:**
   - Tables in the output
   - Lists that could be tabular
   - Data with consistent fields

3. **Gather spreadsheet details from user:**
   - Spreadsheet name (suggest: "[Project] - [Content Type]")
   - Which data to include
   - Any formatting preferences

4. **Create the spreadsheet:**
   - Use Google Sheets MCP to create new spreadsheet
   - Add headers in row 1 (bold)
   - Populate data starting from row 2
   - Auto-resize columns to fit content

5. **Confirm completion:**
   - Share the spreadsheet link
   - Report: "Created: [Name], Rows: [count], Link: [URL]"

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | The structured content to export | Yes |
| spreadsheet_name | Name for the new spreadsheet | Yes |
| sheet_name | Name for the sheet tab | No (default: "Sheet1") |

## Error Handling

**MCP not connected:**
- "The Google Sheets MCP is not connected. I can't create the spreadsheet automatically."
- Offer: "I can format this as a markdown table or CSV for you to copy/paste, or save it locally using the file system."

**Authentication failed:**
- "Google Sheets authentication failed. Please reconnect the Google MCP and try again."

**Rate limited:**
- "Google API rate limit reached. Please wait a few minutes and try again."

## Example

**Input:** A PRD with a requirements table
**Output:** A Google Sheet with requirements in tabular format

User: "Export this requirements table to Sheets"

Claude:
1. Verifies Google Sheets MCP is connected
2. Extracts the requirements table from the PRD
3. Asks: "I'll create 'Feature X - Requirements'. Sound good?"
4. Creates spreadsheet with columns: ID, Requirement, Priority, Status
5. Returns: "Created 'Feature X - Requirements' with 15 rows. [Link]"
```

---

## Testing Scripts

Before including a script in the library:

1. **Test with MCP connected** — Verify it actually works
2. **Test without MCP** — Verify error handling works gracefully
3. **Test with real output** — Use actual skill output, not placeholder content
4. **Test edge cases** — Large content, special characters, missing parameters
5. **Confirm user experience** — Is the interaction smooth?

---

## Adding Scripts to This Library

1. Create the script file in the appropriate category folder
2. Follow the standard structure (especially Prerequisites and Error Handling)
3. Clearly document the required MCP
4. Include alternatives for when the MCP isn't available
5. Include at least one concrete example
6. Test with Claude before committing

---

## Maintenance

- Update scripts when MCP tools change their APIs
- Add new scripts as new MCPs become available
- Remove scripts for deprecated MCPs
- Keep error handling current with actual MCP behavior
- Verify prerequisites stay accurate
