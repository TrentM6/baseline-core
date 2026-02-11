# MCP setup guide

> One-time setup to connect scripts to external tools.

---

## What this guide covers

Scripts need connections to external tools like Figma, Asana, and Slack. How you set up those connections depends on your AI tool.

**Before you start:** You need an active account for each service you want to connect.

---

## Claude users: check Connectors first

If you're using Claude (Code, Desktop, or claude.ai), many services are available as **Connectors** — built-in integrations you toggle on in **Settings > Connectors**. No command line or config files needed.

**How to check:** Open your Claude app, go to Settings > Connectors, and see which services are available. If a service you need is listed there, just toggle it on and you're done for that service.

**When you still need this guide:**
- A service you need isn't available as a Connector yet
- You're using Cursor, Windsurf, or another non-Claude editor
- You want project-scoped config via `.mcp.json` that your team can share

For anything not covered by Connectors, continue with the MCP setup below.

---

## Quick reference

| Service | Scripts | Setup Method | Time |
|---------|---------|-------------|------|
| **Figma** | 2 | [Remote MCP server](#figma) | 2 min |
| **Notion** | 1 | [Remote MCP server](#notion) | 2 min |
| **Linear** | 1 | [Remote MCP server](#linear) | 2 min |
| **Asana** | 2 | [Remote MCP server](#asana) | 2 min |
| **Atlassian** (Jira + Confluence) | 2 | [Remote MCP server](#atlassian-jira--confluence) | 2 min |
| **Amplitude** | 1 | [Remote MCP server](#amplitude) | 2 min |
| **Canva** | 1 | [Claude integration](#canva) | 2 min |
| **monday.com** | 1 | [Claude integration](#mondaycom) | 3 min |
| **Slack** | 1 | [Claude integration](#slack) | 2 min |
| **Gmail** | 1 | [Claude integration](#gmail) | 2 min |
| **Google Docs + Sheets** | 2 | [Google Workspace MCP](#google-docs--sheets) | 5 min |
| **File system** | 2 | Already works | 0 min |

**Total: 11 services, 17 scripts, about 25 minutes of one-time setup.**

---

## Setup by AI tool

MCP setup differs depending on which AI tool you use.

### Claude (Code, Desktop, claude.ai)

**Start with Connectors** (Settings > Connectors). For any service not available as a Connector, use MCP:

- **`claude mcp add` command** for remote servers
- **`.mcp.json` file** in your project root for project-scoped servers
- **`/mcp`** command in a conversation to authenticate servers

Claude Desktop uses `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS for MCP config.

### Cursor, Windsurf, and other editors

These tools don't have built-in Connectors, so all services require MCP setup. Most MCP-compatible editors use a similar JSON config. Check your editor's MCP documentation for the config file location, then use the server URLs listed below.

---

## Method 1: Remote MCP servers

These services have official hosted MCP endpoints. You add the server URL, then complete an OAuth login in your browser when prompted. No API keys to generate.

### Figma

**Connects:** [create-figjam-diagram](figma/create-figjam-diagram.md), [create-wireframe-spec](figma/create-wireframe-spec.md)

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Then run `/mcp` in a Claude Code conversation, select `figma`, and click **Authenticate**. A browser window opens for you to log into Figma and authorize access.

**Requires:** Figma account with FigJam access and edit permissions.

**Docs:** [Figma MCP server setup](https://help.figma.com/hc/en-us/articles/35281350665623)

---

### Notion

**Connects:** [create-notion-page](project-tools/create-notion-page.md)

```bash
claude mcp add --transport http notion https://mcp.notion.com/mcp
```

Then `/mcp` > `notion` > **Authenticate** > authorize in browser.

**Requires:** Notion workspace access with edit permissions.

**Docs:** [Notion MCP](https://mcp.notion.com)

---

### Linear

**Connects:** [create-linear-issue](project-tools/create-linear-issue.md)

```bash
claude mcp add --transport http linear https://mcp.linear.app/mcp
```

Then `/mcp` > `linear` > **Authenticate** > authorize in browser.

**Requires:** Linear workspace access.

**Docs:** [Linear MCP server](https://linear.app/docs/mcp)

---

### Asana

**Connects:** [create-project](asana/create-project.md), [create-sprint](asana/create-sprint.md)

```bash
claude mcp add --transport sse asana https://mcp.asana.com/sse
```

Then `/mcp` > `asana` > **Authenticate** > authorize in browser.

**Requires:** Asana account with project creation permissions.

**Docs:** [Asana MCP server](https://developers.asana.com/docs/using-asanas-mcp-server)

> **Note:** This SSE endpoint is deprecated and shuts down 05/11/2026. Asana is migrating to a V2 server. Check their docs for the updated URL when available.

---

### Atlassian (Jira + Confluence)

**Connects:** [create-jira-epic](atlassian/create-jira-epic.md), [create-confluence-page](atlassian/create-confluence-page.md)

```bash
claude mcp add --transport sse atlassian https://mcp.atlassian.com/v1/sse
```

Then `/mcp` > `atlassian` > **Authenticate** > authorize in browser.

A single connection covers both Jira and Confluence.

**Requires:** Atlassian account with create permissions in target Jira project and Confluence space.

**Docs:** [Atlassian remote MCP server](https://www.atlassian.com/platform/remote-mcp-server)

---

### Amplitude

**Connects:** [define-metrics](amplitude/define-metrics.md)

```bash
claude mcp add --transport http amplitude https://mcp.amplitude.com/mcp
```

Then `/mcp` > `amplitude` > **Authenticate** > authorize in browser.

**Requires:** Amplitude account with admin or editor access.

**Docs:** [Amplitude MCP server](https://amplitude.com/docs/amplitude-ai/amplitude-mcp)

---

## Method 2: Claude Connectors / native integrations

**Claude users:** These services may already be available in your **Settings > Connectors** panel. If so, just toggle them on — no further setup needed. The steps below are for cases where the service doesn't appear in Connectors, or you're setting up through the older Integrations path.

**Non-Claude users:** These services require their own MCP servers. Check each service's docs for MCP server URLs compatible with your editor.

### Canva

**Connects:** [create-presentation](canva/create-presentation.md)

1. Open Claude (desktop or claude.ai)
2. Go to **Settings > Integrations**
3. Find **Canva** and click **Connect**
4. Authorize in the browser popup

**Requires:** Canva account (Pro recommended for brand kit access).

**Docs:** [Canva MCP setup](https://www.canva.com/help/mcp-agent-setup/)

---

### monday.com

**Connects:** [create-roadmap](monday/create-roadmap.md)

1. Your workspace admin installs the free **monday MCP** app from the monday.com marketplace
2. Open Claude > **Settings > Integrations**
3. Find **monday.com** and click **Connect**
4. Authorize in the browser popup

**Requires:** monday.com account with board creation permissions. Admin must install the marketplace app first.

**Docs:** [monday.com MCP setup](https://support.monday.com/hc/en-us/articles/28515718817426)

---

### Slack

**Connects:** [post-to-slack](communication/post-to-slack.md)

1. Open Claude > **Settings > Integrations**
2. Find **Slack** and click **Connect**
3. Authorize in the browser popup
4. Select the workspace and channels to grant access

**Requires:** Slack workspace access with posting permissions to target channels.

---

### Gmail

**Connects:** [draft-email](communication/draft-email.md)

1. Open Claude > **Settings > Integrations**
2. Find **Google** and click **Connect**
3. Authorize with your Google account

This may also provide access to Google Docs and Sheets. If it does, the Google Workspace MCP setup below is not needed.

**Requires:** Google account.

---

## Method 3: Google Workspace MCP

Google Docs and Sheets do not have a simple hosted MCP URL like the services above. There are two paths depending on what the native Google integration (Method 2) covers.

### Option A: Check the native integration first

After connecting Google via Claude Settings > Integrations (the Gmail step above), test whether Google Docs and Sheets are included:
- Ask Claude to list your recent Google Docs
- Ask Claude to create a test spreadsheet

If both work, you are done. Skip Option B.

### Option B: Google Workspace MCP server

If the native integration only covers Gmail and Calendar, set up a dedicated Google Workspace MCP server.

**Connects:** [create-doc](google/create-doc.md), [export-to-sheets](google/export-to-sheets.md)

**Setup:**

1. Create a Google Cloud project at [console.cloud.google.com](https://console.cloud.google.com)
2. Enable the **Google Docs API**, **Google Sheets API**, and **Google Drive API**
3. Create OAuth 2.0 credentials (Desktop application type)
4. Download the credentials JSON file

Then add to your `.mcp.json` or Claude Desktop config:

```json
{
  "mcpServers": {
    "google-workspace": {
      "command": "npx",
      "args": ["-y", "@presto-ai/google-workspace-mcp"],
      "env": {
        "GOOGLE_CLIENT_ID": "your-client-id.apps.googleusercontent.com",
        "GOOGLE_CLIENT_SECRET": "your-client-secret"
      }
    }
  }
}
```

On first use, the server will open a browser window for OAuth authorization.

**Requires:** Google account, Google Cloud project with APIs enabled.

**Docs:** [Google Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp)

---

## File system scripts (no setup needed)

The file system scripts ([write-markdown](file-system/write-markdown.md), [create-folder-structure](file-system/create-folder-structure.md)) use your AI tool's native file access. No MCP setup required.

---

## Using .mcp.json for project-scoped setup

Instead of running `claude mcp add` for each server, you can create a single `.mcp.json` file at the root of your project. This is useful for sharing MCP configuration with a team.

```json
{
  "mcpServers": {
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    },
    "notion": {
      "type": "http",
      "url": "https://mcp.notion.com/mcp"
    },
    "linear": {
      "type": "http",
      "url": "https://mcp.linear.app/mcp"
    },
    "asana": {
      "type": "sse",
      "url": "https://mcp.asana.com/sse"
    },
    "atlassian": {
      "type": "sse",
      "url": "https://mcp.atlassian.com/v1/sse"
    },
    "amplitude": {
      "type": "http",
      "url": "https://mcp.amplitude.com/mcp"
    }
  }
}
```

After creating this file, restart your Claude Code session. The servers will appear when you run `/mcp`, and you can authenticate each one.

**Note:** Claude Connectors (Canva, monday.com, Slack, Gmail, and others available in Settings > Connectors) are set up through the Claude UI separately and are not included in `.mcp.json`.

---

## Verifying connections

After setup, test each connection with a simple operation:

| Service | Test |
|---------|------|
| Figma | "List my recent Figma files" |
| Notion | "List my Notion databases" |
| Linear | "List my Linear teams" |
| Asana | "List my Asana workspaces" |
| Atlassian | "List my Jira projects" |
| Amplitude | "List my Amplitude charts" |
| Canva | "List my recent Canva designs" |
| monday.com | "List my monday.com boards" |
| Slack | "List my Slack channels" |
| Gmail | "List my recent emails" |
| Google Docs | "List my recent Google Docs" |
| Google Sheets | "List my recent spreadsheets" |

If a connection fails, your AI tool will tell you. Common issues:
- **"MCP not connected"** means the server was not added or not authenticated
- **"Authentication failed"** means you need to re-authorize via `/mcp` or Settings
- **"Permission denied"** means your account lacks the required permissions in that service

---

## Troubleshooting

### Server not appearing after adding it

Restart your Claude Code session. MCP server changes require a session restart to take effect.

### OAuth popup does not open

Try running `/mcp` in Claude Code, selecting the server, and clicking **Authenticate** again. If using `.mcp.json`, verify the JSON is valid (no trailing commas, correct URL).

### Authentication expires

Some OAuth tokens expire. Re-authenticate by running `/mcp`, selecting the server, and clicking **Authenticate**.

### Script says MCP is not connected but it is

The script may reference a specific MCP name that does not match your server name. Check the script's Prerequisites section for the exact MCP name expected and verify it matches your configuration.

### Need to remove a server

```bash
claude mcp remove <server-name>
```

Or delete the entry from `.mcp.json` and restart your session.

---

## Related

- [Scripts overview](_README.md) — What scripts are and how they work
- [Script building guide](script-building-guide.md) — How to create new scripts
- [Getting started](../GETTING_STARTED.md#using-scripts) — How scripts fit with skills
