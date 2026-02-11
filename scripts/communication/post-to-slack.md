# Post to Slack

> Send a message or update to a Slack channel.

## Works With Skills

- Product Communications (stakeholder updates, announcements)
- Marketing (campaign updates, content sharing)

## When to Use

- After completing a status update that should go to a team channel
- After finishing work that stakeholders should know about
- When sharing quick summaries or announcements
- After generating content specifically intended for Slack

## Prerequisites

**Required connection:** Slack (via Connector or Slack MCP)

- User has access to the target Slack workspace
- User has permission to post to the target channel

**If not connected:**
- Claude cannot post to Slack automatically
- Alternative: Claude can format the message with Slack markdown, and you can copy/paste it into Slack manually
- Alternative: Use [draft-email.md](draft-email.md) to send via email instead

## Instructions

1. **Verify MCP connection:**
   - Check if Slack MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Confirm the destination:**
   - "Which Slack channel should I post to?"
   - If user mentions a channel name, confirm it exists
   - Ask about thread (new message or reply to existing)

3. **Format the message:**
   - Keep it concise (Slack favors brevity)
   - Use Slack formatting:
     - *bold* for emphasis
     - `code` for technical terms
     - > for quotes
     - Bullet points for lists
   - Add emoji if appropriate for the team culture

4. **Preview before sending:**
   - Show the user the formatted message
   - "This is what I'll post to #channel-name. Look good?"
   - Make edits if requested

5. **Post the message:**
   - Send to the specified channel
   - Include any attachments or links as appropriate

6. **Confirm completion:**
   - "Posted to #channel-name"
   - Include a link to the message if available

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | Message content to post | Yes |
| channel | Slack channel (with or without #) | Yes |
| thread_ts | Thread timestamp if replying | No |

## Message Formatting Tips

**Status updates:**
```
*Project Update: [Name]*
Status: [Green/Yellow/Red]

Key progress:
• [Item 1]
• [Item 2]

Blockers: [None / List]
```

**Announcements:**
```
[Emoji] *[Headline]*

[1-2 sentence summary]

[Link or call to action]
```

**Sharing deliverables:**
```
*[Document Type] Ready*

[Brief description]

[Link to document]

Let me know if you have questions!
```

## Example

**Scenario:** User just completed a weekly status update

**User:** "Post this status update to #product-team"

**Claude:**
1. Verifies Slack MCP is connected
2. Formats the update for Slack:
   ```
   *Weekly Update: Onboarding Redesign*
   Status: 🟢 On Track

   This week:
   • Completed user research synthesis
   • Finalized wireframes for review
   • Started eng feasibility discussion

   Next week:
   • Design review with stakeholders
   • Begin high-fidelity mockups

   Blockers: None
   ```
3. Shows preview: "This is what I'll post to #product-team. Look good?"
4. User confirms
5. Posts message
6. Returns: "Posted to #product-team. [View message]"

## Error Handling

**MCP not connected:**
- "The Slack MCP is not connected. I can't post to Slack automatically."
- Offer alternatives: "I can format this message with Slack markdown for you to copy/paste, or I can send it via email instead."

**Channel not found:**
- "I can't find #channel-name. Can you check the spelling or try a different channel?"
- List available channels if the MCP supports it

**No permission:**
- "I don't have permission to post in #channel-name. You may need to invite the Slack app to that channel, or try a different channel."

**Rate limited:**
- "Slack rate limit reached. Please wait a moment and try again."

**Message too long:**
- "This message is too long for Slack (limit is 4000 characters). I can split it into multiple messages, or shorten it. Which would you prefer?"
