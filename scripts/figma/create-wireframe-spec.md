# Create Wireframe Spec

> Generate a wireframe specification document in FigJam for design handoff.

## Works With Skills

- UX Design (wireframe documentation, interaction specs)
- Prototyping (prototype specifications, handoff documentation)

## When to Use

- After completing UX design work that needs to go to visual design
- When documenting wireframe requirements for a design team
- After prototyping work that needs formal specification
- When creating annotated wireframes for stakeholder review

## Prerequisites

**Required connection:** Figma (via Connector or Figma MCP)

- User has Figma account with FigJam access
- User has edit permissions in the target file

**If not connected:**
- Claude cannot create the spec automatically
- Alternative: Claude can format the spec as a markdown document
- Alternative: Use [create-doc.md](../google/create-doc.md) for a Google Doc version

## Instructions

1. **Verify MCP connection:**
   - Check if Figma MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather spec details:**
   - "What screens/flows does this spec cover?"
   - "Should I create a new FigJam file or add to an existing one?"
   - "Are there existing wireframes to annotate, or should I create placeholder frames?"

3. **Structure the specification:**
   - Screen/component inventory
   - Interaction notes for each element
   - Content requirements
   - Edge cases and states
   - Responsive considerations

4. **Create in FigJam:**
   - Create frames for each screen/state
   - Add annotation callouts
   - Number annotations for reference
   - Include interaction notes
   - Add any conditional logic notes

5. **Add specification details:**
   - Element-by-element requirements
   - Copy/content specifications
   - Behavior descriptions
   - Error states and edge cases

6. **Confirm with user:**
   - "Created wireframe spec '[Name]' in FigJam"
   - Provide link to the file
   - List screens/components covered

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| screens | List of screens/components to spec | Yes |
| requirements | Functional requirements for each | Yes |
| title | Name for the spec document | Yes |
| file_id | Existing FigJam file ID | No |

## Spec Structure

**For each screen/component, include:**

```
Screen: [Name]
├── Purpose: [What this screen does]
├── Entry points: [How users get here]
├── Elements:
│   ├── [Element 1]: [Behavior, states, content]
│   ├── [Element 2]: [Behavior, states, content]
│   └── ...
├── Interactions:
│   ├── [Action]: [Result]
│   └── ...
├── Edge cases:
│   ├── [Condition]: [Behavior]
│   └── ...
└── Exit points: [Where users go next]
```

## Example

**Scenario:** User completed wireframes for a checkout flow

**User:** "Create a spec for these checkout wireframes"

**Claude:**
1. Verifies Figma MCP is connected
2. Asks: "I'll create a spec covering Cart, Shipping, Payment, and Confirmation screens. New FigJam file?"
3. User confirms
4. Creates FigJam with:
   - Frame for each screen
   - Numbered annotations on interactive elements
   - Sidebar with detailed specs per annotation
   - Flow arrows showing progression
   - Edge case callouts (empty cart, payment failure, etc.)
5. Returns: "Created 'Checkout Flow Spec' with 4 screens and 23 annotations. [Link]"

## Error Handling

**MCP not connected:**
- "The Figma MCP is not connected. I can't create the spec automatically."
- Offer alternatives: "I can format this as a markdown specification document instead."

**Authentication failed:**
- "Figma authentication failed. Please reconnect the Figma MCP in your Claude settings and try again."

**Permission denied:**
- "I don't have permission to edit that Figma file. Please check that the integration has access."

**Existing wireframes not found:**
- "I can't find wireframes in that file. Should I create placeholder frames, or can you point me to the correct file?"
