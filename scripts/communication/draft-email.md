# Draft Email

> Compose an email draft in Gmail ready for review and sending.

## Works With Skills

- Marketing (outreach emails, campaign communications)
- Sales (proposals, follow-ups, outreach)

## When to Use

- After creating content that should be sent via email
- After generating stakeholder updates for email distribution
- When preparing outreach or follow-up emails
- After completing proposals or briefs that need email delivery

## Prerequisites

**Required connection:** Gmail (via Connector or Gmail MCP)

- User has access to the Gmail account

**If not connected:**
- Claude cannot create the draft automatically
- Alternative: Claude can format the email content, and you can copy/paste it into Gmail manually
- Alternative: Claude can format for other email clients if you specify

## Instructions

1. **Verify MCP connection:**
   - Check if Gmail MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather email details:**
   - "Who should I send this to?" (get recipient email addresses)
   - "What's the subject line?" (suggest one based on content)
   - "Anyone to CC?"
   - "Should this be a new email or reply to an existing thread?"

3. **Format the email:**
   - Convert content to email-appropriate format
   - Keep paragraphs short (2-4 sentences)
   - Use simple formatting (bold for emphasis, bullets for lists)
   - Add appropriate greeting and sign-off

4. **Create the draft:**
   - Compose in Gmail as a draft (do NOT send)
   - Include all recipients, CC, subject
   - Attach any files if mentioned

5. **Confirm with user:**
   - "I've created a draft in your Gmail. Review it before sending."
   - Provide link to the draft
   - Note: User must manually send after review

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | Email body content | Yes |
| to | Recipient email address(es) | Yes |
| subject | Email subject line | Yes |
| cc | CC recipients | No |
| reply_to | Thread to reply to | No |

## Email Formatting Tips

**Professional structure:**
```
Hi [Name],

[Opening sentence — context or reference]

[Main content — keep it scannable]

[Clear ask or next step]

Best,
[Sender name]
```

**Keep it short:**
- Lead with the most important information
- One topic per email when possible
- Bold key dates, names, or actions
- End with a clear call to action

## Example

**Scenario:** User completed a proposal and wants to send it to a prospect

**User:** "Email this proposal to sarah@acme.com"

**Claude:**
1. Verifies Gmail MCP is connected
2. Asks: "What subject line? I'd suggest 'Proposal: Product Strategy Engagement'"
3. User confirms
4. Formats content for email:
   ```
   Hi Sarah,

   Great speaking with you yesterday. As discussed, I've put together
   a proposal for the product strategy engagement.

   **Summary:**
   • 4-week engagement
   • Focus on roadmap prioritization and user research
   • Starting March 1

   I've attached the full proposal below. Happy to hop on a call to
   discuss any questions.

   Best,
   [Name]
   ```
5. Creates draft in Gmail
6. Returns: "Created draft to sarah@acme.com with subject 'Proposal: Product Strategy Engagement'. Review and send when ready: [Link to draft]"

## Important Notes

- **Never send automatically** — Always create as draft for user review
- **Verify recipients** — Confirm email addresses before creating draft
- **Sensitive content** — Flag if content might need legal or PR review

## Error Handling

**MCP not connected:**
- "The Gmail MCP is not connected. I can't create the draft automatically."
- Offer alternatives: "I can format this email for you to copy/paste into Gmail or your email client manually."

**Authentication failed:**
- "Gmail authentication failed. Please reconnect the Gmail MCP in your Claude settings and try again."

**Invalid email address:**
- "The email address '[address]' doesn't appear to be valid. Can you double-check it?"

**Attachment failed:**
- "I created the draft but couldn't attach the file. You can add the attachment manually in Gmail: [Link to draft]"

**Draft creation failed:**
- "I couldn't create the draft in Gmail. Here's the formatted email content you can copy/paste manually: [content]"
