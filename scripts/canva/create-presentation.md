# Create Canva Presentation

> Create a presentation deck in Canva with branded slides.

## Works With Skills

- Strategic Advisory (strategy presentations, roadmap decks)
- Brand Design (branded presentations, visual decks)
- Marketing (pitch decks, campaign presentations)
- Sales (proposals, client presentations)

## When to Use

- After creating content that needs to be presented to stakeholders
- When preparing client deliverables that need polished visuals
- After completing strategy work that needs a presentation format
- When creating pitch decks, project updates, or proposals

## Prerequisites

**Required connection:** Canva (via Connector or Canva MCP)

- User has Canva account (Pro recommended for brand kit access)
- User has permission to create designs

**If not connected:**
- Claude cannot create the presentation automatically
- Alternative: Claude can format content as a presentation outline for manual creation
- Alternative: Use [create-doc.md](../google/create-doc.md) for a document-based deliverable

## Instructions

1. **Verify MCP connection:**
   - Check if Canva MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather presentation details:**
   - "What's the presentation title?"
   - "Who's the audience?"
   - "How many slides approximately?"
   - "Should I use your brand kit (if available)?"
   - "Any specific template preference?"

3. **Structure the presentation:**
   - Title slide
   - Agenda/overview
   - Content sections
   - Key takeaways
   - Next steps / CTA
   - Closing slide

4. **Create in Canva:**
   - Select or create presentation
   - Apply brand kit or template
   - Create slides with content
   - Add visuals, charts, icons as appropriate
   - Ensure consistent formatting

5. **Confirm with user:**
   - "Created presentation '[Name]' in Canva"
   - Provide link to edit
   - Note: "Review branding and visuals before presenting"

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | Presentation content by slide | Yes |
| title | Presentation title | Yes |
| audience | Target audience | No |
| template | Template ID or style preference | No |
| brand_kit | Use brand kit (true/false) | No (default: true if available) |

## Presentation Structure

**Standard deck outline:**

```
1. Title Slide
   - Presentation title
   - Subtitle/date
   - Presenter name (optional)

2. Agenda
   - 3-5 topics to cover
   - Set expectations

3-N. Content Slides
   - One main idea per slide
   - Supporting points as bullets
   - Visual when possible

N+1. Key Takeaways
   - 3-5 main points
   - What to remember

N+2. Next Steps
   - Clear actions
   - Who does what by when

N+3. Closing
   - Thank you / Q&A
   - Contact information
```

**Slide content guidelines:**
- Max 6 bullet points per slide
- Max 6 words per bullet
- One key message per slide
- Visuals > text when possible

## Example

**Scenario:** User completed a strategy engagement and needs a client presentation

**User:** "Create a presentation for the roadmap recommendations"

**Claude:**
1. Verifies Canva MCP is connected
2. Asks: "I'll create 'Q2 Product Roadmap Recommendations'. Should I use your brand kit?"
3. User: "Yes, use the brand kit"
4. Creates 12-slide deck:
   - Title: Q2 Product Roadmap Recommendations
   - Agenda
   - Executive Summary (key recommendations)
   - Market Context (2 slides)
   - Roadmap Overview
   - Priority 1, 2, 3 details (3 slides)
   - Resource Requirements
   - Timeline
   - Next Steps
   - Closing
5. Returns: "Created 'Q2 Product Roadmap Recommendations' (12 slides) in Canva. Review and customize visuals before presenting. [Link]"

## Error Handling

**MCP not connected:**
- "The Canva MCP is not connected. I can't create the presentation automatically."
- Offer alternatives: "I can provide a detailed slide-by-slide outline for you to create in Canva or another tool."

**Authentication failed:**
- "Canva authentication failed. Please reconnect the Canva MCP and try again."

**Brand kit not found:**
- "I couldn't find a brand kit in your Canva account. Should I proceed with a standard template, or would you like to set up your brand kit first?"

**Template not found:**
- "I can't find the template '[name]'. Should I use a default presentation template instead?"

**Permission denied:**
- "I don't have permission to create designs in your Canva account. Please check the integration permissions."

**Content too long:**
- "This content would create a very long presentation ([X] slides). Should I proceed, or would you like to break it into multiple decks?"
