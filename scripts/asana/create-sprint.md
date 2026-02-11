# Create Asana Sprint

> Set up a sprint in Asana with user stories, tasks, and sprint goals.

## Works With Skills

- Project Management (sprint setup, agile workflows)

## When to Use

- When starting a new sprint that needs to be tracked in Asana
- After sprint planning sessions with defined commitments
- When setting up agile workflows in Asana
- After backlog refinement to move items into a sprint

## Prerequisites

**Required connection:** Asana (via Connector or Asana MCP)

- User has Asana account access
- User has permission to create/edit projects in the target workspace

**If not connected:**
- Claude cannot create the sprint automatically
- Alternative: Claude can format the sprint plan as a document
- Alternative: Use [create-linear-issue.md](../project-tools/create-linear-issue.md) if using Linear for sprints

## Instructions

1. **Verify MCP connection:**
   - Check if Asana MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather sprint details:**
   - "What sprint number/name is this?"
   - "What are the sprint dates?"
   - "What's the sprint goal?"
   - "Which project should this sprint be in?"

3. **Structure the sprint:**
   - Sprint goal at the top
   - User stories / features
   - Tasks within each story
   - Story point estimates (if using)
   - Assignees

4. **Create in Asana:**
   - Create sprint section in the project (or new project)
   - Add sprint goal as a milestone or header task
   - Create stories as parent tasks
   - Add subtasks for implementation items
   - Set due dates within sprint window
   - Assign team members

5. **Confirm with user:**
   - "Created Sprint [X] in Asana"
   - Provide link
   - Summary: X stories, Y tasks, Z points (if applicable)

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| sprint_name | Sprint identifier (e.g., "Sprint 14") | Yes |
| sprint_dates | Start and end dates | Yes |
| sprint_goal | One-sentence sprint objective | Yes |
| stories | User stories with tasks | Yes |
| project | Asana project to add sprint to | Yes |
| capacity | Team capacity in points (optional) | No |

## Sprint Structure

**Recommended organization:**

```
Sprint [Number]: [Date Range]
├── 🎯 Sprint Goal: [Goal statement]
│
├── Story: [User story 1] (X pts)
│   ├── Task: [Implementation task]
│   ├── Task: [Implementation task]
│   └── Task: [Testing/review]
│
├── Story: [User story 2] (X pts)
│   ├── Task: [Implementation task]
│   └── Task: [Implementation task]
│
├── Bug: [Bug fix] (X pts)
│   └── Task: [Fix and verify]
│
└── ⬥ Sprint Complete
```

**Story format:**
```
As a [user type],
I want to [action],
So that [benefit].

Acceptance Criteria:
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
```

## Example

**Scenario:** User completed sprint planning and needs to set up Sprint 14

**User:** "Set up Sprint 14 in Asana from our planning notes"

**Claude:**
1. Verifies Asana MCP is connected
2. Confirms: "I'll create Sprint 14 (Feb 3-14) with goal 'Complete onboarding flow redesign'. Adding to 'Product Development' project?"
3. User confirms
4. Creates sprint:
   - Sprint section with goal
   - 5 user stories as parent tasks
   - 18 subtasks across stories
   - Story points added to task names
   - Due dates set within sprint window
   - Team members assigned
5. Returns: "Created Sprint 14 with 5 stories (34 points) and 18 tasks. [Link]"

## Error Handling

**MCP not connected:**
- "The Asana MCP is not connected. I can't create the sprint automatically."
- Offer alternatives: "I can format this sprint plan as a document, or set it up in Linear if you have that connected."

**Authentication failed:**
- "Asana authentication failed. Please reconnect the Asana MCP and try again."

**Project not found:**
- "I can't find the project '[name]'. Should I create a new project for this sprint, or can you provide the correct project name?"

**Permission denied:**
- "I don't have permission to add tasks to that project. Please check the Asana integration permissions."

**Capacity exceeded:**
- "This sprint has [X] points, which exceeds the team capacity of [Y] points. Should I proceed anyway, or would you like to adjust the scope?"
