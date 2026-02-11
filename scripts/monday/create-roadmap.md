# Create monday.com Roadmap

> Create a visual product roadmap in monday.com with initiatives and timelines.

## Works With Skills

- Strategic Advisory (roadmap visualization, initiative planning)
- Project Management (timeline management, initiative tracking)

## When to Use

- After completing strategic planning with prioritized initiatives
- When stakeholders need visibility into product direction
- After roadmap discussions that need to be formalized
- When setting up quarterly or annual planning boards

## Prerequisites

**Required connection:** monday.com (via Connector or monday.com MCP)

- User has monday.com account with appropriate permissions
- User has access to create boards in the target workspace

**If not connected:**
- Claude cannot create the roadmap automatically
- Alternative: Claude can format the roadmap as a document or spreadsheet
- Alternative: Use [create-project.md](../asana/create-project.md) for an Asana-based roadmap

## Instructions

1. **Verify MCP connection:**
   - Check if monday.com MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather roadmap details:**
   - "What's the roadmap name/period?" (e.g., "2026 Product Roadmap")
   - "Which workspace should this go in?"
   - "What time horizon?" (quarters, months, weeks)
   - "What are the main themes/pillars?"

3. **Structure the roadmap:**
   - Themes or pillars as groups
   - Initiatives as items
   - Timeline columns for dates
   - Status, owner, priority columns
   - Dependencies if applicable

4. **Create in monday.com:**
   - Create board with roadmap template or custom structure
   - Add groups for themes/pillars
   - Create items for each initiative
   - Set timelines and dates
   - Add status and owner columns
   - Configure timeline view

5. **Confirm with user:**
   - "Created roadmap '[Name]' in monday.com"
   - Provide link to the board
   - Summary: X themes, Y initiatives

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| name | Roadmap name | Yes |
| workspace | monday.com workspace | Yes |
| time_horizon | Time period covered | Yes |
| themes | Roadmap themes/pillars | Yes |
| initiatives | Initiatives with details | Yes |

## Roadmap Structure

**Recommended board setup:**

```
[Roadmap Name] - [Time Period]
│
├── Group: [Theme 1 - e.g., "Growth"]
│   ├── Initiative: [Name] | Q1 | High | @Owner
│   ├── Initiative: [Name] | Q1-Q2 | Medium | @Owner
│   └── Initiative: [Name] | Q2 | High | @Owner
│
├── Group: [Theme 2 - e.g., "Platform"]
│   ├── Initiative: [Name] | Q2 | High | @Owner
│   └── Initiative: [Name] | Q3 | Medium | @Owner
│
├── Group: [Theme 3 - e.g., "Operations"]
│   ├── Initiative: [Name] | Q1-Q4 | Low | @Owner
│   └── Initiative: [Name] | Q3 | Medium | @Owner
│
└── Group: Backlog
    └── Initiative: [Future items]
```

**Columns to include:**
- Initiative name (text)
- Timeline (date range)
- Status (Not started, In progress, Complete)
- Priority (High, Medium, Low)
- Owner (person)
- Quarter (dropdown or label)
- Dependencies (linked items)
- Notes (long text)

## Example

**Scenario:** User completed strategic advisory and has a prioritized roadmap

**User:** "Set up our product roadmap in monday.com"

**Claude:**
1. Verifies monday.com MCP is connected
2. Asks: "I'll create '2026 Product Roadmap'. Which workspace, and what are your main themes?"
3. User: "Product workspace. Themes are Growth, Platform, and Technical Debt"
4. Creates board with:
   - 3 theme groups + Backlog
   - 12 initiatives across themes
   - Timeline view configured by quarter
   - Status, priority, owner columns
   - Dependencies linked
5. Returns: "Created '2026 Product Roadmap' with 3 themes and 12 initiatives. Timeline view is ready. [Link]"

## Error Handling

**MCP not connected:**
- "The monday.com MCP is not connected. I can't create the roadmap automatically."
- Offer alternatives: "I can format this roadmap as a document or spreadsheet, or set it up in Asana if you have that connected."

**Authentication failed:**
- "monday.com authentication failed. Please reconnect the monday.com MCP and try again."

**Workspace not found:**
- "I can't find the workspace '[name]'. Can you check the workspace name or provide the ID?"

**Permission denied:**
- "I don't have permission to create boards in that workspace. Please check the monday.com integration permissions."

**Invalid date format:**
- "I couldn't parse the timeline '[dates]'. Can you provide dates in a format like 'Jan 2026' or 'Q1 2026'?"

**Board limit reached:**
- "Your monday.com workspace has reached its board limit. You may need to archive old boards or upgrade your plan."
