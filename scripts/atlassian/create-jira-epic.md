# Create Jira Epic

> Create an epic in Jira with linked stories and tasks.

## Works With Skills

- Project Management (epic creation, sprint setup, backlog management)
- Prototyping (development tracking, implementation stories)

## When to Use

- After completing product planning with defined features
- When breaking down a roadmap initiative into trackable work
- After PRD approval when work needs to be scoped
- When setting up a new feature for agile development

## Prerequisites

**Required connection:** Atlassian — Jira (via Connector or Atlassian MCP)

- User has Jira account with create permissions
- User has access to the target project

**If not connected:**
- Claude cannot create the epic automatically
- Alternative: Use [create-linear-issue.md](../project-tools/create-linear-issue.md) for Linear
- Alternative: Use [create-project.md](../asana/create-project.md) for Asana
- Alternative: Claude can format for manual creation

## Instructions

1. **Verify MCP connection:**
   - Check if Atlassian MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather epic details:**
   - "What's the epic name/summary?"
   - "Which Jira project should this go in?"
   - "What's the target release or fix version?"
   - "Who's the epic owner?"

3. **Structure the work:**
   - Epic summary and description
   - User stories within the epic
   - Tasks/subtasks for implementation
   - Acceptance criteria
   - Story point estimates (if using)

4. **Create in Jira:**
   - Create the epic
   - Add stories linked to epic
   - Add tasks/subtasks under stories
   - Set priorities, assignees, estimates
   - Link to related issues if applicable

5. **Confirm with user:**
   - "Created epic '[Name]' in Jira"
   - Provide link to the epic
   - Summary: X stories, Y tasks, Z points

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| summary | Epic name/title | Yes |
| description | Epic description | Yes |
| project | Jira project key | Yes |
| stories | User stories with details | Yes |
| fix_version | Target release | No |
| assignee | Epic owner | No |
| labels | Labels to apply | No |

## Epic Structure

**Recommended hierarchy:**

```
Epic: [Feature Name]
├── Description: [What this epic delivers]
├── Acceptance Criteria: [When is the epic "done"]
│
├── Story: [User story 1] (X pts)
│   ├── Acceptance Criteria
│   ├── Task: [Implementation work]
│   ├── Task: [Implementation work]
│   └── Task: [Testing]
│
├── Story: [User story 2] (X pts)
│   ├── Acceptance Criteria
│   └── Tasks...
│
├── Story: [User story 3] (X pts)
│   └── Tasks...
│
└── Tech Debt / Enabler Stories (if any)
```

**Story format:**
```
Summary: As a [user], I want [action] so that [benefit]

Description:
## Context
[Why this story matters]

## Acceptance Criteria
- [ ] Given [context], when [action], then [result]
- [ ] Given [context], when [action], then [result]

## Design
[Link to designs]

## Notes
[Technical considerations]
```

## Example

**Scenario:** User completed PRD and needs to create the epic

**User:** "Create a Jira epic for the onboarding redesign"

**Claude:**
1. Verifies Atlassian MCP is connected
2. Asks: "I'll create epic 'Onboarding Flow Redesign'. Which Jira project and target version?"
3. User: "PROD project, targeting v2.5"
4. Creates:
   - Epic with full description and acceptance criteria
   - 6 user stories linked to epic
   - 24 tasks across stories
   - Story points estimated
   - Labels: onboarding, q1
   - Fix version: v2.5
5. Returns: "Created epic 'Onboarding Flow Redesign' with 6 stories (34 points) and 24 tasks. [Link]"

## Error Handling

**MCP not connected:**
- "The Atlassian MCP is not connected. I can't create the Jira epic automatically."
- Offer alternatives: "I can set this up in Linear or Asana instead, or format the epic/stories for manual creation."

**Authentication failed:**
- "Jira authentication failed. Please reconnect the Atlassian MCP and try again."

**Project not found:**
- "I can't find the Jira project '[key]'. Can you check the project key?"

**Permission denied:**
- "I don't have permission to create issues in that project. Please check the Atlassian integration permissions."

**Invalid issue type:**
- "This project doesn't have an Epic issue type configured. Should I create these as a different issue type, or can you enable Epics in the project settings?"

**Assignee not found:**
- "I couldn't find '[name]' as a project member. Should I leave the epic unassigned?"

**Version not found:**
- "The fix version '[version]' doesn't exist in this project. Should I create the epic without a version, or would you like to create the version first?"
