# Write Markdown File

> Save output as a local markdown (.md) file.

## Works With Skills

- Technical Documentation (docs, specs, README files)

## When to Use

- After generating documentation that should live in a repository
- After creating README files or technical docs
- After producing content that integrates with markdown-based systems
- When output needs version control (Git)

## Prerequisites

**Required MCP:** File system access (usually available by default in Claude Desktop/CLI)

- Write permissions to target directory

**If file system access is not available:**
- Claude cannot save the file automatically
- Alternative: Claude can display the formatted markdown content for you to copy/paste into a file manually

## Instructions

1. **Verify file system access:**
   - Check if file system tools are available
   - If not, inform user and offer alternatives (see Error Handling)

2. **Confirm file details:**
   - "I can save this as a markdown file. Where should I save it?"
   - Suggest appropriate filename based on content type
   - Confirm the directory path

3. **Validate the path:**
   - Check that the directory exists
   - If it doesn't, ask if it should be created
   - Ensure no existing file will be overwritten (or confirm overwrite)

4. **Format the content:**
   - Ensure proper markdown syntax
   - Check that headers use correct levels (#, ##, ###)
   - Verify code blocks have language tags
   - Ensure links are properly formatted

5. **Write the file:**
   - Save content to the specified path
   - Use UTF-8 encoding
   - Preserve line endings appropriate for the system

6. **Confirm completion:**
   - "Saved to: [full path]"
   - "File size: [X] bytes"
   - Suggest next steps (git add, open in editor, etc.)

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| content | Markdown content to save | Yes |
| filename | Name for the file (with .md extension) | Yes |
| directory | Target directory path | Yes |

## Example

**Scenario:** User created a technical spec and wants to add it to their repo

**User:** "Save this spec to my project's docs folder"

**Claude:**
1. Verifies file system access is available
2. Asks: "What's the path to your docs folder?"
3. User: "/Users/name/project/docs"
4. Suggests: "I'll save it as 'feature-spec-auth.md'. Does that work?"
5. User confirms
6. Writes file to /Users/name/project/docs/feature-spec-auth.md
7. Returns: "Saved to /Users/name/project/docs/feature-spec-auth.md (2.4 KB)"

## Error Handling

**File system access not available:**
- "I don't have file system access in this environment. I can't save the file automatically."
- Offer alternative: "Here's the formatted markdown content you can copy and save manually: [content]"

**Directory doesn't exist:**
- "The directory '[path]' doesn't exist. Should I create it, or would you like to use a different location?"

**File already exists:**
- "A file named '[filename]' already exists at that location. Should I overwrite it, or use a different name?"

**Permission denied:**
- "I don't have permission to write to '[path]'. Please check the folder permissions or try a different location."

**Invalid path:**
- "The path '[path]' doesn't appear to be valid. Can you double-check it?"

**Disk full:**
- "Unable to save the file — the disk may be full. Please free up some space and try again."
