# Create FigJam Diagram

> Create visual diagrams in FigJam — flow charts, journey maps, opportunity trees, and more.

## Works With Skills

- Strategic Advisory (opportunity trees, roadmaps, decision frameworks)
- Research & Synthesis (journey maps, affinity diagrams, synthesis visuals)
- UX Design (user flows, journey maps, wireframe flows)
- Brand Design (process diagrams, visual frameworks)

## When to Use

- After mapping a user journey that needs visualization
- After creating an opportunity solution tree in strategic advisory
- After defining a process flow that stakeholders need to review
- When output would benefit from visual representation over text

## Prerequisites

**Required connection:** Figma (via Connector or Figma MCP)

- User has Figma account with FigJam access
- User has edit permissions in the target FigJam file or can create new files

**If not connected:**
- Claude cannot create the diagram automatically
- Alternative: Claude can output a text-based diagram (ASCII or markdown) for manual recreation
- Alternative: Claude can provide structured content formatted for easy copy/paste into FigJam

## Instructions

1. **Verify MCP connection:**
   - Check if Figma MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Identify the diagram type:**
   - User flow / process flow
   - Journey map
   - Opportunity solution tree
   - Org chart / hierarchy
   - Gantt chart / timeline
   - Mind map / brainstorm

3. **Gather diagram details:**
   - "What should this diagram be called?"
   - "Should I create a new FigJam file or add to an existing one?"
   - Confirm the key elements to include

4. **Structure the content:**
   - Break content into nodes/shapes
   - Define connections/arrows between elements
   - Identify groupings or swimlanes
   - Note any annotations or callouts

5. **Create in FigJam:**
   - Create shapes for each element
   - Add connectors between related elements
   - Apply consistent styling (colors, fonts)
   - Add labels and annotations
   - Organize layout for readability

6. **Confirm with user:**
   - "Created '[Diagram Name]' in FigJam"
   - Provide link to the file
   - Note any elements that may need manual adjustment

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | Structured content for the diagram | Yes |
| diagram_type | Type of diagram (flow, journey, tree, etc.) | Yes |
| title | Name for the diagram/file | Yes |
| file_id | Existing FigJam file ID (if adding to existing) | No |

## Diagram Type Guidelines

**User/Process Flows:**
- Use rectangles for steps/actions
- Use diamonds for decision points
- Use arrows to show direction
- Group related steps in frames

**Journey Maps:**
- Horizontal timeline structure
- Swimlanes for phases
- Emotion indicators (dots or line)
- Touchpoints, pain points, opportunities marked

**Opportunity Solution Trees:**
- Outcome at top
- Opportunities branch down
- Solutions under opportunities
- Experiments under solutions

**Mind Maps:**
- Central concept in middle
- Branches radiate outward
- Related concepts grouped by color

## Example

**Scenario:** User completed a user journey analysis and wants to visualize it

**User:** "Create a journey map from this research"

**Claude:**
1. Verifies Figma MCP is connected
2. Asks: "I'll create a journey map called 'Onboarding Journey Map'. Should I create a new FigJam file?"
3. User confirms
4. Structures the content:
   - 5 phases: Awareness → Sign Up → First Use → Activation → Retention
   - Touchpoints, actions, emotions for each phase
   - Pain points and opportunities highlighted
5. Creates FigJam file with:
   - Phase headers across top
   - Swimlanes for touchpoints, actions, thoughts, emotions
   - Pain points marked in red
   - Opportunities marked in green
6. Returns: "Created 'Onboarding Journey Map' in FigJam. [Link]"

## Error Handling

**MCP not connected:**
- "The Figma MCP is not connected. I can't create the diagram automatically."
- Offer alternatives: "I can provide this as a structured text outline or ASCII diagram for you to recreate in FigJam."

**Authentication failed:**
- "Figma authentication failed. Please reconnect the Figma MCP in your Claude settings and try again."

**Permission denied:**
- "I don't have permission to create or edit in that FigJam file. Please check that the Figma integration has the necessary access."

**File not found:**
- "I can't find the FigJam file '[name/id]'. Would you like me to create a new file instead?"

**Content too complex:**
- "This diagram has a lot of elements. I can create it in sections, or simplify to the most important parts. Which would you prefer?"
