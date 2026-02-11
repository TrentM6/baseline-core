# Create Asana Project

> Create a project in Asana with tasks, milestones, and timeline.

## Works With Skills

- Project Management (project setup, task tracking, milestone planning)

## When to Use

- After completing project planning that needs to be tracked
- When setting up a new initiative with defined deliverables
- After creating a project plan that stakeholders need visibility into
- When breaking down a roadmap into actionable tasks

## Prerequisites

**Required connection:** Asana (via Connector or Asana MCP)

- User has Asana account access
- User has permission to create projects in the target workspace/team

**If not connected:**
- Claude cannot create the project automatically
- Alternative: Claude can format the project plan as a structured document
- Alternative: Use [export-to-sheets.md](../google/export-to-sheets.md) to create a project tracker spreadsheet

## Instructions

1. **Verify MCP connection:**
   - Check if Asana MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather project details:**
   - "What's the project name?"
   - "Which Asana team/workspace should this go in?"
   - "What's the project timeline (start/end dates)?"
   - "Who should be added as project members?"

3. **Structure the project:**
   - Define sections (phases, categories, or workstreams)
   - List tasks within each section
   - Identify milestones
   - Set dependencies where applicable
   - Assign owners and due dates

4. **Create in Asana:**
   - Create the project with settings
   - Add sections
   - Create tasks with details:
     - Title, description
     - Assignee, due date
     - Dependencies
   - Mark milestones
   - Set project timeline/dates

5. **Confirm with user:**
   - "Created project '[Name]' in Asana"
   - Provide link to the project
   - Summary: X sections, Y tasks, Z milestones

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| name | Project name | Yes |
| workspace | Asana workspace/team | Yes |
| sections | Project sections/phases | Yes |
| tasks | Tasks with details | Yes |
| timeline | Start and end dates | No |
| members | Team members to add | No |

## Project Structure

**Recommended section organization:**

```
[Project Name]
├── Section: Planning
│   ├── Task: Define requirements
│   ├── Task: Create timeline
│   └── ⬥ Milestone: Planning complete
├── Section: Execution
│   ├── Task: [Deliverable 1]
│   ├── Task: [Deliverable 2]
│   └── ⬥ Milestone: MVP complete
├── Section: Launch
│   ├── Task: Final review
│   ├── Task: Deploy
│   └── ⬥ Milestone: Launch complete
└── Section: Post-Launch
    ├── Task: Monitor metrics
    └── Task: Gather feedback
```

**Task details to include:**
- Clear, actionable title
- Description with context and acceptance criteria
- Assignee (if known)
- Due date
- Dependencies (blocked by / blocking)

## Example

**Scenario:** User completed a project plan for a feature launch

**User:** "Set up this project plan in Asana"

**Claude:**
1. Verifies Asana MCP is connected
2. Asks: "I'll create 'Q1 Onboarding Redesign' in Asana. Which team should it go under?"
3. User: "Product team"
4. Creates project with:
   - 4 sections: Research, Design, Development, Launch
   - 15 tasks across sections
   - 4 milestones at phase completions
   - Timeline: Jan 15 - Mar 30
   - Dependencies set between phases
5. Returns: "Created 'Q1 Onboarding Redesign' with 4 sections, 15 tasks, and 4 milestones. [Link]"

## Error Handling

**MCP not connected:**
- "The Asana MCP is not connected. I can't create the project automatically."
- Offer alternatives: "I can format this as a project plan document or spreadsheet instead."

**Authentication failed:**
- "Asana authentication failed. Please reconnect the Asana MCP in your Claude settings and try again."

**Workspace not found:**
- "I can't find the workspace/team '[name]'. Can you check the name or select from available options?"

**Permission denied:**
- "I don't have permission to create projects in that workspace. Please check the Asana integration permissions."

**Invalid assignee:**
- "I couldn't find '[name]' as a workspace member. Should I leave that task unassigned, or use a different assignee?"

**Date parsing failed:**
- "I couldn't parse the date '[date]'. Can you provide it in a format like 'Jan 15, 2026' or '2026-01-15'?"
