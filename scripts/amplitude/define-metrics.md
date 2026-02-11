# Define Metrics in Amplitude

> Set up KPIs, events, and dashboards in Amplitude for product analytics.

## Works With Skills

- Product Analytics (KPI setup, dashboard creation, metrics tracking)

## When to Use

- After defining success metrics that need to be tracked
- When setting up analytics for a new feature or product
- After completing a metrics framework that needs implementation
- When creating dashboards for stakeholder reporting

## Prerequisites

**Required connection:** Amplitude (via Connector or Amplitude MCP)

- User has Amplitude account with admin/editor access
- User has permission to create events and charts

**If not connected:**
- Claude cannot create metrics automatically
- Alternative: Claude can format metrics as a specification document for manual setup
- Alternative: Use [export-to-sheets.md](../google/export-to-sheets.md) to create a metrics tracking spreadsheet

## Instructions

1. **Verify MCP connection:**
   - Check if Amplitude MCP is available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Gather metrics details:**
   - "What metrics/KPIs are we tracking?"
   - "Which Amplitude project should these go in?"
   - "Should I create a dashboard for these metrics?"
   - "What time period should be the default view?"

3. **Structure the metrics:**
   - Primary metrics (north star, key outcomes)
   - Secondary metrics (leading indicators)
   - Event definitions
   - User properties needed
   - Segment definitions

4. **Create in Amplitude:**
   - Define/verify events exist
   - Create charts for each metric
   - Set up dashboard with charts
   - Configure default time ranges
   - Add annotations/descriptions

5. **Confirm with user:**
   - "Created metrics dashboard '[Name]' in Amplitude"
   - Provide link to the dashboard
   - List metrics added

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| metrics | List of metrics to track | Yes |
| events | Event definitions | Yes |
| project | Amplitude project | Yes |
| dashboard_name | Name for the dashboard | No |
| time_range | Default time period | No (default: 30 days) |

## Metrics Structure

**For each metric, define:**

```
Metric: [Name]
├── Type: [Count, Unique users, Conversion, Retention, etc.]
├── Event(s): [Which events to track]
├── Filters: [Any segment filters]
├── Formula: [If calculated metric]
├── Target: [Goal/threshold if known]
└── Chart type: [Line, Bar, Funnel, etc.]
```

**Common metric types:**
- **Activation**: Users completing key action within X days
- **Engagement**: Frequency/depth of feature usage
- **Retention**: Users returning within time window
- **Conversion**: Users completing funnel steps
- **Performance**: Latency, error rates

## Example

**Scenario:** User completed metrics definition for onboarding

**User:** "Set up these onboarding metrics in Amplitude"

**Claude:**
1. Verifies Amplitude MCP is connected
2. Asks: "I'll create an 'Onboarding Metrics' dashboard. Which Amplitude project?"
3. User: "Production project"
4. Creates:
   - **Activation Rate**: Users completing setup within 7 days
   - **Step Completion**: Funnel chart for onboarding steps
   - **Time to Activate**: Average time to first key action
   - **Drop-off Points**: Where users abandon onboarding
   - Dashboard with all charts arranged logically
5. Returns: "Created 'Onboarding Metrics' dashboard with 4 charts. [Link]"

## Error Handling

**MCP not connected:**
- "The Amplitude MCP is not connected. I can't create metrics automatically."
- Offer alternatives: "I can format these metrics as a specification document for your analytics team to implement."

**Authentication failed:**
- "Amplitude authentication failed. Please reconnect the Amplitude MCP and try again."

**Project not found:**
- "I can't find the Amplitude project '[name]'. Can you check the project name or ID?"

**Permission denied:**
- "I don't have permission to create charts in that project. Please check the Amplitude integration permissions."

**Event not found:**
- "The event '[event_name]' doesn't exist in Amplitude yet. Should I proceed with creating the chart anyway (it will populate once the event is tracked), or would you like to define the event first?"

**Invalid metric definition:**
- "I couldn't parse the metric '[name]'. Can you clarify what event(s) and calculation should be used?"
