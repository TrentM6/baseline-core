# Export to Google Sheets

> Export structured content (tables, lists, data) to a Google Sheets spreadsheet.

## Works With Skills

- Product Analytics (metrics tables, KPI tracking, data exports)

## When to Use

- After generating a PRD with requirements tables
- After creating a competitive analysis matrix
- After producing metrics definitions or KPI lists
- After any output that contains structured, tabular data

## Prerequisites

**Required connection:** Google Sheets (via Connector or Google Workspace MCP)

- User has Google account access
- User has permission to create new spreadsheets

**If not connected:**
- Claude cannot create the spreadsheet automatically
- Alternative: Use [write-markdown.md](../file-system/write-markdown.md) to save as a local CSV or markdown table
- Alternative: Claude can format as a markdown table for manual copy/paste into Sheets

## Instructions

1. **Identify structured content** in the output:
   - Tables (markdown tables, requirement lists)
   - Lists that could be tabular (features with attributes)
   - Data with consistent fields (user personas, competitor analysis)

2. **Confirm with the user:**
   - "I can export this to Google Sheets. What would you like to name the spreadsheet?"
   - Suggest: "[Project/Feature Name] - [Content Type]"
   - Ask which sections to include if multiple tables exist

3. **Create the spreadsheet** using Google Sheets MCP:
   - Create new spreadsheet with the confirmed name
   - Add headers in row 1 (format as bold)
   - Populate data starting from row 2
   - Apply auto-resize to columns

4. **Format for readability:**
   - Freeze header row
   - Add alternating row colors if data is dense
   - Adjust column widths to content

5. **Return to user:**
   - Share the spreadsheet link
   - Confirm: "Created [Name] with [X] rows"
   - Ask if they want to add more data or make changes

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | Structured content to export | Yes |
| spreadsheet_name | Name for the spreadsheet | Yes |
| sheet_name | Tab name (default: "Sheet1") | No |

## Example

**Scenario:** User just completed a PRD with a requirements table

**User:** "Export the requirements to Sheets"

**Claude:**
1. Identifies the requirements table in the PRD
2. Asks: "I'll create 'Feature X - Requirements'. Sound good?"
3. User confirms
4. Creates spreadsheet with columns: ID, Requirement, Priority, Status, Notes
5. Returns: "Created 'Feature X - Requirements' with 15 requirements. [Link]"

## Error Handling

**MCP not connected:**
- "The Google Sheets MCP is not connected. I can't create the spreadsheet automatically."
- Offer alternatives: "I can format this as a markdown table for you to copy/paste, or save it as a local file."

**Authentication failed:**
- "Google Sheets authentication failed. Please reconnect the Google MCP in your Claude settings and try again."

**Permission denied:**
- "I don't have permission to create spreadsheets in your Google account. Please check your MCP permissions."

**Content too large:**
- "This content is very large. I can split it across multiple sheets, or export the most important sections first. Which would you prefer?"
