# Create Confluence Page

> Create a documentation page in Confluence for PRDs, specs, or wikis.

## Works With Skills

- Product Communications (PRDs, specs, product briefs)
- Research & Synthesis (research reports, synthesis documentation)
- Technical Documentation (wiki pages, knowledge base articles)

## When to Use

- After completing a PRD or product spec that needs to be shared
- When creating documentation for a wiki or knowledge base
- After research or analysis that needs to be published
- When stakeholders need access to structured documentation

## Prerequisites

**Required connection:** Atlassian — Confluence (via Connector or Atlassian MCP)

- User has Confluence account with edit access
- User has permission to create pages in the target space

**If not connected:**
- Claude cannot create the page automatically
- Alternative: Use [create-doc.md](../google/create-doc.md) for Google Docs
- Alternative: Use [create-notion-page.md](../project-tools/create-notion-page.md) for Notion
- Alternative: Claude can format for manual copy/paste

## Instructions

1. **Verify MCP connection:**
   - Check if Atlassian MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather page details:**
   - "What's the page title?"
   - "Which Confluence space should this go in?"
   - "Is there a parent page this should be under?"
   - "Any specific template to use?"

3. **Format the content:**
   - Convert to Confluence-compatible format
   - Use proper heading hierarchy
   - Add table of contents for long docs
   - Include info panels, tables as needed
   - Add labels for discoverability

4. **Create in Confluence:**
   - Create page in the specified space
   - Set parent page if applicable
   - Add formatted content
   - Apply labels
   - Set any page restrictions if needed

5. **Confirm with user:**
   - "Created '[Page Title]' in Confluence"
   - Provide link to the page
   - Note any labels applied

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| title | Page title | Yes |
| content | Page body content | Yes |
| space | Confluence space key | Yes |
| parent_page | Parent page ID (optional) | No |
| labels | Labels to apply | No |
| template | Template to use | No |

## Page Structure

**For PRDs/Specs:**
```
# [Feature Name] PRD

{info}
Status: [Draft/In Review/Approved]
Author: [Name]
Last Updated: [Date]
{info}

## Overview
[Executive summary]

## Problem Statement
[What problem we're solving]

## Goals & Success Metrics
[Objectives and how we'll measure]

## User Stories
[User stories with acceptance criteria]

## Requirements
### Functional Requirements
### Non-Functional Requirements

## Design
[Links to designs/wireframes]

## Technical Considerations
[Architecture, dependencies, risks]

## Timeline
[Milestones and dates]

## Open Questions
[Unresolved decisions]
```

**For Documentation:**
```
# [Topic]

{toc}

## Overview
[What this document covers]

## [Section 1]
[Content]

## [Section 2]
[Content]

## Related Pages
[Links to related documentation]
```

## Example

**Scenario:** User completed a PRD and needs to publish it

**User:** "Create a Confluence page for this PRD"

**Claude:**
1. Verifies Atlassian MCP is connected
2. Asks: "I'll create 'Onboarding Flow Redesign PRD'. Which Confluence space?"
3. User: "PROD space, under the PRDs parent page"
4. Creates page with:
   - Formatted PRD structure
   - Info panel with metadata
   - Table of contents
   - Tables for requirements
   - Labels: prd, onboarding, q1-2026
5. Returns: "Created 'Onboarding Flow Redesign PRD' in PROD space. [Link]"

## Error Handling

**MCP not connected:**
- "The Atlassian MCP is not connected. I can't create the Confluence page automatically."
- Offer alternatives: "I can create this in Google Docs or Notion instead, or format it for manual copy/paste."

**Authentication failed:**
- "Confluence authentication failed. Please reconnect the Atlassian MCP and try again."

**Space not found:**
- "I can't find the Confluence space '[key]'. Can you check the space key or provide the full space name?"

**Permission denied:**
- "I don't have permission to create pages in that space. Please check the Atlassian integration permissions."

**Parent page not found:**
- "I can't find the parent page '[name]'. Should I create this as a top-level page in the space instead?"

**Content too large:**
- "This content is very large for a single Confluence page. Should I split it into multiple linked pages?"
