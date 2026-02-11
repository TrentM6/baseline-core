# Scripts

> Push skill outputs directly to external tools — Figma, Confluence, Asana, Slack, and more.

---

## What Scripts Are

Scripts are the delivery layer of the Baseline System. After a skill produces output, scripts push that output directly to external tools. No copy-paste, no context switching.

Scripts work with any AI tool that supports MCP — which now includes every major platform: Claude, ChatGPT, Gemini, Cursor, Windsurf, and more.

**What is MCP?** Model Context Protocol is a standard that allows AI tools to connect to external services like Figma, Asana, and Slack.

**Learn more:**
- [MCP Setup Guide](MCP-SETUP.md) — Connect scripts to external tools (one-time setup)
- [The Baseline System](../GETTING_STARTED.md#the-baseline-system) — How scripts fit with skills, context, and frameworks
- [Browse Skills](../_SKILLS/_README.md) — See which scripts work with which skills

---

## Setup

Each script requires a connection to its external tool (e.g., Figma for Figma scripts, Asana for Asana scripts). This is a one-time configuration per tool — either through your AI tool's built-in Connectors or via MCP.

**See [MCP Setup Guide](MCP-SETUP.md) for step-by-step connection instructions for all 11 services.**

**Before using a script:** Verify the required service is connected. If it's not:
1. Connect via Connector or MCP ([setup guide](MCP-SETUP.md))
2. Use an alternative script for a tool you have
3. Deliver output manually

---

## How Scripts Work

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Skill Output  │ --> │     Script      │ --> │   MCP Tool      │
│   (content)     │     │  (instructions) │     │   (execution)   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │  External Tool  │
                                               │ (Figma, Asana,  │
                                               │  Amplitude...)  │
                                               └─────────────────┘
```

1. **Skills produce output** — A skill generates content (PRD, research, roadmap)
2. **Scripts provide instructions** — A script tells the AI tool how to deliver that output
3. **MCP tools execute** — The MCP connection actually performs the action
4. **External tools receive** — The output lands in Figma, Asana, Amplitude, etc.

**If step 3 is missing (no connection), the chain breaks.**

---

## Available Scripts

### Design & Visualization (`figma/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [create-figjam-diagram.md](figma/create-figjam-diagram.md) | Figma | User flows, journey maps, opportunity trees |
| [create-wireframe-spec.md](figma/create-wireframe-spec.md) | Figma | Wireframe specifications for design handoff |

### Project Management (`asana/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [create-project.md](asana/create-project.md) | Asana | Projects with tasks, milestones, timeline |
| [create-sprint.md](asana/create-sprint.md) | Asana | Sprint setup with stories and tasks |

### Analytics (`amplitude/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [define-metrics.md](amplitude/define-metrics.md) | Amplitude | KPIs, events, dashboards |

### Presentations (`canva/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [create-presentation.md](canva/create-presentation.md) | Canva | Client decks, pitch presentations |

### Roadmaps (`monday/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [create-roadmap.md](monday/create-roadmap.md) | monday.com | Visual product roadmaps |

### Documentation & Issues (`atlassian/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [create-confluence-page.md](atlassian/create-confluence-page.md) | Atlassian | PRDs, specs, wiki documentation |
| [create-jira-epic.md](atlassian/create-jira-epic.md) | Atlassian | Epics with stories and tasks |

### Google Workspace (`google/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [export-to-sheets.md](google/export-to-sheets.md) | Google Sheets | Structured data to spreadsheets |
| [create-doc.md](google/create-doc.md) | Google Docs | Long-form documents |

### Communication (`communication/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [post-to-slack.md](communication/post-to-slack.md) | Slack | Status updates, announcements |
| [draft-email.md](communication/draft-email.md) | Gmail | Email drafts |

### File System (`file-system/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [write-markdown.md](file-system/write-markdown.md) | File system access | Save as local .md files |
| [create-folder-structure.md](file-system/create-folder-structure.md) | File system access | Create project directories |
| [html-to-pdf.md](file-system/html-to-pdf.md) | Node.js + file system | Convert styled HTML/CSS to PDF |

### Project Tools (`project-tools/`)

| Script | Connection | Use Case |
|--------|------------|----------|
| [create-notion-page.md](project-tools/create-notion-page.md) | Notion | Pages in Notion |
| [create-linear-issue.md](project-tools/create-linear-issue.md) | Linear | Issues in Linear |

---

## Scripts by Skill Alignment

| Skill | Relevant Scripts |
|-------|-----------------|
| **Strategic Advisory** | [create-figjam-diagram](figma/create-figjam-diagram.md), [create-roadmap](monday/create-roadmap.md), [create-presentation](canva/create-presentation.md) |
| **Research & Synthesis** | [create-figjam-diagram](figma/create-figjam-diagram.md), [create-confluence-page](atlassian/create-confluence-page.md), [create-doc](google/create-doc.md) |
| **Product Communications** | [create-confluence-page](atlassian/create-confluence-page.md), [create-doc](google/create-doc.md), [post-to-slack](communication/post-to-slack.md), [html-to-pdf](file-system/html-to-pdf.md) |
| **UX Design** | [create-figjam-diagram](figma/create-figjam-diagram.md), [create-wireframe-spec](figma/create-wireframe-spec.md) |
| **Product Analytics** | [define-metrics](amplitude/define-metrics.md), [export-to-sheets](google/export-to-sheets.md) |
| **Prototyping** | [create-wireframe-spec](figma/create-wireframe-spec.md), [create-jira-epic](atlassian/create-jira-epic.md) |
| **Project Management** | [create-project](asana/create-project.md), [create-sprint](asana/create-sprint.md), [create-jira-epic](atlassian/create-jira-epic.md), [create-roadmap](monday/create-roadmap.md) |
| **Technical Documentation** | [create-confluence-page](atlassian/create-confluence-page.md), [create-doc](google/create-doc.md), [write-markdown](file-system/write-markdown.md), [html-to-pdf](file-system/html-to-pdf.md) |
| **Brand Design** | [create-presentation](canva/create-presentation.md), [create-figjam-diagram](figma/create-figjam-diagram.md), [html-to-pdf](file-system/html-to-pdf.md) |
| **Marketing** | [create-presentation](canva/create-presentation.md), [post-to-slack](communication/post-to-slack.md), [draft-email](communication/draft-email.md), [html-to-pdf](file-system/html-to-pdf.md) |
| **Sales** | [create-presentation](canva/create-presentation.md), [draft-email](communication/draft-email.md), [create-doc](google/create-doc.md) |

---

## Folder Structure

```
_SCRIPTS/
├── _README.md                    # This file
├── MCP-SETUP.md                  # How to connect MCP services
├── script-building-guide.md      # How to create new scripts
│
├── figma/                        # Design & visualization
│   ├── create-figjam-diagram.md
│   └── create-wireframe-spec.md
│
├── asana/                        # Project management
│   ├── create-project.md
│   └── create-sprint.md
│
├── amplitude/                    # Analytics
│   └── define-metrics.md
│
├── canva/                        # Presentations
│   └── create-presentation.md
│
├── monday/                       # Roadmaps
│   └── create-roadmap.md
│
├── atlassian/                    # Jira & Confluence
│   ├── create-confluence-page.md
│   └── create-jira-epic.md
│
├── google/                       # Google Workspace
│   ├── export-to-sheets.md
│   └── create-doc.md
│
├── communication/                # Messaging
│   ├── post-to-slack.md
│   └── draft-email.md
│
├── file-system/                  # Local files
│   ├── write-markdown.md
│   ├── create-folder-structure.md
│   └── html-to-pdf.md
│
└── project-tools/                # Other project tools
    ├── create-notion-page.md
    └── create-linear-issue.md
```

---

## Using Scripts

### Before You Start

1. **Complete the skill first** — Scripts deliver output; skills create it
2. **Check your connections** — Each script requires a specific service connection
3. **Match the script to your tools** — Use scripts for tools your team actually uses

### Workflow

1. Complete the skill's workflow and generate output
2. Load the relevant script
3. Follow the script's instructions to deliver the output

### If a Service Isn't Connected

Your AI tool will let you know. Your options:
- Connect via Connector or MCP ([setup guide](MCP-SETUP.md))
- Use a different script for a tool you do have
- Manually copy the output to your destination

---

## For Plugin Builders

When building Claude Cowork plugins:
1. Only include scripts for services your client actually has connected
2. Document which connections are required
3. Provide fallback instructions for missing connections

**Learn more:**
- [What Plugins Are](../_PLUGIN/_README.md) — Overview of the Cowork plugin
- [Plugin Building Guide](../_PLUGIN/plugin-building-guide.md) — Complete build instructions

---

## Creating New Scripts

See [Script Building Guide](script-building-guide.md) for how to create scripts for new tools.

**Key requirements:**
- Every script must document which connection it requires
- Include alternatives for when the service isn't available
- Add an Error Handling section for common failures

**Related:**
- [Script Building Guide](script-building-guide.md) — Detailed instructions for creating new scripts
- [Getting Started](../GETTING_STARTED.md#using-scripts) — How to use scripts with skills
