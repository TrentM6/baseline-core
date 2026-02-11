# Create Linear Issue

> Create a new issue in Linear for task tracking and project management.

## Works With Skills

- Project Management (task tracking, issue management)

## When to Use

- After identifying action items that need tracking
- When breaking down projects into tasks
- After meetings or discussions that generate work items
- When bugs or issues are discovered that need resolution

## Prerequisites

**Required connection:** Linear (via Connector or Linear MCP)

- User has access to the target Linear workspace
- Target team and project identified

**If not connected:**
- Claude cannot create the issue automatically
- Alternative: Claude can format the issue with proper title, description, and metadata for you to create manually in Linear
- Alternative: Use [create-notion-page.md](create-notion-page.md) to track in Notion instead

## Instructions

1. **Verify MCP connection:**
   - Check if Linear MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Confirm the destination:**
   - "Which Linear team should this issue go to?"
   - "Is there a specific project this belongs to?"

3. **Gather issue details:**
   - Title (clear, actionable)
   - Description (context, acceptance criteria)
   - Priority (Urgent, High, Medium, Low, No priority)
   - Labels (if applicable)
   - Assignee (if known)
   - Estimate (if using points)

4. **Format the issue:**
   - Write a clear, actionable title
   - Structure description with context and acceptance criteria
   - Use markdown formatting for readability

5. **Create the issue:**
   - Use the Linear MCP tool to create the issue
   - Set all specified properties
   - Link to related issues if applicable

6. **Confirm with user:**
   - "I've created issue '[Title]' in Linear."
   - Provide the issue identifier (e.g., TEAM-123)
   - Provide link to the issue

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| title | Issue title | Yes |
| description | Issue description/body | Yes |
| team | Target team ID or key | Yes |
| project | Project ID (optional) | No |
| priority | 0-4 (0=none, 1=urgent, 4=low) | No |
| labels | Label IDs to apply | No |
| assignee | User ID to assign | No |
| estimate | Story points estimate | No |

## Issue Writing Tips

**Good titles are:**
- Actionable (start with a verb when possible)
- Specific (not vague or overly broad)
- Scannable (understandable at a glance)

**Examples:**
- Good: "Add password reset flow to login page"
- Bad: "Password stuff"
- Good: "Fix: Cart total doesn't update when removing items"
- Bad: "Cart bug"

**Description structure:**
```markdown
## Context
[Why this issue exists, background information]

## Acceptance Criteria
- [ ] [Specific, testable criterion]
- [ ] [Another criterion]
- [ ] [Final criterion]

## Technical Notes
[Any implementation details, constraints, or considerations]

## Related
- [Link to related issues, docs, or designs]
```

## Example

**Scenario:** User identified a bug during testing

**User:** "Create a Linear issue for the checkout bug we found"

**Claude:**
1. Verifies Linear MCP is connected
2. Asks: "Which team should this go to? And what priority — is this blocking users?"
3. User: "Engineering team, high priority"
4. Formats the issue:
   ```
   Title: Fix: Checkout fails when applying discount code

   ## Context
   During testing, we discovered that applying a discount code
   on the checkout page causes a 500 error. This affects all
   users attempting to use promotional codes.

   ## Steps to Reproduce
   1. Add item to cart
   2. Go to checkout
   3. Enter discount code "SAVE20"
   4. Click "Apply"
   5. Page shows error

   ## Acceptance Criteria
   - [ ] Discount codes apply successfully
   - [ ] Cart total updates correctly
   - [ ] No error messages shown

   ## Technical Notes
   Error appears to be in the discount validation API endpoint.
   ```
5. Creates issue with:
   - Team: Engineering
   - Priority: High (2)
   - Labels: "Bug"
6. Returns: "Created ENG-456: 'Fix: Checkout fails when applying discount code' with High priority. [Link]"

## Important Notes

- **Be specific** — Vague issues create confusion and slow down work
- **Include acceptance criteria** — Define what "done" looks like
- **Set appropriate priority** — Not everything is urgent
- **Link related issues** — Help maintain context and avoid duplicates
- **Don't over-assign** — Let the team manage assignment if unsure

## Error Handling

**MCP not connected:**
- "The Linear MCP is not connected. I can't create the issue automatically."
- Offer alternatives: "I can format this issue for you to create manually in Linear, or track it in Notion instead."

**Authentication failed:**
- "Linear authentication failed. Please reconnect the Linear MCP in your Claude settings and try again."

**Team not found:**
- "I can't find the team '[name]'. Can you check the team name or provide the team key?"

**Permission denied:**
- "I don't have permission to create issues for that team. Please check that the Linear integration has the necessary access."

**Invalid priority/labels:**
- "The priority/label '[value]' isn't valid for this team. Available options are: [list]. Which should I use?"

**Issue creation failed:**
- "I couldn't create the issue in Linear. Here's the formatted issue you can create manually: [content]"
