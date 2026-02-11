# Create Folder Structure

> Create a project folder structure with nested directories.

## Works With Skills

- Any skill (project setup, client onboarding, deliverable organization)

## When to Use

- Starting a new project that needs organized directories
- Setting up a standard folder structure for deliverables
- Creating context folders for new clients
- Organizing research or documentation files

## Prerequisites

**Required MCP:** File system access (usually available by default in Claude Desktop/CLI)

- Write permissions to target location

**If file system access is not available:**
- Claude cannot create the folders automatically
- Alternative: Claude can provide the folder structure as a list or tree diagram for you to create manually

## Instructions

1. **Verify file system access:**
   - Check if file system tools are available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Understand the need:**
   - "What kind of project is this?"
   - "Where should the root folder be created?"
   - Determine if a standard template applies

3. **Propose the structure:**
   - Show the folder tree before creating
   - Example:
     ```
     project-name/
     ├── docs/
     │   ├── specs/
     │   └── research/
     ├── assets/
     └── deliverables/
     ```
   - Ask for confirmation or modifications

4. **Create the folders:**
   - Create root directory first
   - Create nested directories in order
   - Add placeholder README.md files if requested

5. **Confirm completion:**
   - List all created directories
   - Note any that already existed (skipped)
   - Suggest next steps

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| root_path | Where to create the structure | Yes |
| project_name | Name for the root folder | Yes |
| structure | Folder structure to create | Yes |
| add_readmes | Add README.md placeholders | No (default: false) |

## Common Structures

### Client Context Structure
```
[client-name]/
├── core/
│   ├── identity.md
│   └── voice.md
└── extended/
    ├── users.md
    ├── product.md
    └── competitive.md
```

### Project Documentation Structure
```
[project-name]/
├── research/
├── specs/
├── designs/
└── deliverables/
```

### Plugin Structure
```
[plugin-name]/
├── .claude-plugin/
├── skills/
├── scripts/
├── _CONTEXT/
└── _FRAMEWORKS/
```

## Example

**Scenario:** Starting a new client engagement

**User:** "Set up a context folder structure for Acme Corp"

**Claude:**
1. Verifies file system access is available
2. Proposes:
   ```
   acme-corp/
   ├── core/
   │   ├── identity.md
   │   └── voice.md
   └── extended/
       ├── users.md
       ├── product.md
       ├── competitive.md
       └── icp.md
   ```
3. User confirms
4. Creates all directories
5. Returns: "Created acme-corp/ with 2 core files and 4 extended context files ready to populate"

## Error Handling

**File system access not available:**
- "I don't have file system access in this environment. I can't create the folders automatically."
- Offer alternative: "Here's the folder structure you can create manually: [tree diagram]"

**Root folder already exists:**
- "The folder '[name]' already exists at that location. Should I create the structure inside it, or choose a different name?"

**Permission denied:**
- "I don't have permission to create folders at '[path]'. Please check the folder permissions or try a different location."

**Invalid path:**
- "The path '[path]' doesn't appear to be valid. Can you double-check it?"

**Partial failure:**
- "I created some folders but couldn't create '[folder]' due to [reason]. Here's what was created: [list]"
