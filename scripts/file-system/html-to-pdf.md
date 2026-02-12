# Convert HTML to PDF

> Convert styled HTML/CSS content to a professional PDF document using headless Chrome.

## Works With Skills

- Visual Communication (whitepapers, branded documents, visual reports)
- Technical Documentation (styled specs, formatted guides)
- Product Communications (formatted PRDs, briefs)
- Product Marketing (landing page exports, positioning materials)

## When to Use

- After generating a styled HTML/CSS document (whitepaper, report, branded page)
- When the final deliverable needs to be a PDF but the content was authored in HTML
- When you need pixel-perfect CSS rendering in the PDF (flexbox, grid, custom fonts)
- When browser "print to PDF" would lose styling or produce inconsistent results

## Prerequisites

**Required:** Node.js installed locally, file system access

Puppeteer auto-installs via `npx` on first use — no manual setup required. The first run downloads a bundled Chromium binary (~170MB), which is cached for subsequent runs.

**If Node.js is not available:**
- Claude cannot convert automatically
- Alternative: Open the HTML file in a browser and use File > Print > Save as PDF
- Alternative: Use [write-markdown.md](write-markdown.md) to save content as markdown instead

## Instructions

1. **Verify Node.js is available:**
   - Run `node --version` to confirm Node.js is installed
   - If not found, inform the user and offer alternatives (see Error Handling)

2. **Confirm the HTML source:**
   - If the user provides an HTML file path, verify the file exists
   - If the HTML was generated in-session, write it to a temporary `.html` file first
   - Confirm the source with the user: "I'll convert [filename] to PDF. Sound good?"

3. **Gather PDF preferences:**
   - Output file path and name (suggest: same directory, same name with `.pdf` extension)
   - Page size (default: Letter — 8.5x11in)
   - Margins (default: 0.5in on all sides, or 0 for full-bleed designs)
   - Orientation (default: portrait)
   - If the HTML includes its own `@page` CSS rules, defer to those

4. **Run the conversion:**
   - Execute the following Node.js script via `npx`:
   ```bash
   node -e "
   const puppeteer = require('puppeteer');
   (async () => {
     const browser = await puppeteer.launch();
     const page = await browser.newPage();
     await page.goto('file://[ABSOLUTE_HTML_PATH]', { waitUntil: 'networkidle0' });
     await page.pdf({
       path: '[OUTPUT_PDF_PATH]',
       format: '[PAGE_SIZE]',
       margin: { top: '[TOP]', right: '[RIGHT]', bottom: '[BOTTOM]', left: '[LEFT]' },
       printBackground: true,
       preferCSSPageSize: true
     });
     await browser.close();
   })();
   "
   ```
   - **Important:** Use `printBackground: true` to preserve background colors and images
   - **Important:** Use `preferCSSPageSize: true` to respect any `@page` rules in the HTML
   - **Important:** Use `waitUntil: 'networkidle0'` to ensure fonts and images load before capture
   - If Puppeteer isn't installed locally, run `npm install puppeteer` in a temp directory first, then execute

5. **Verify the output:**
   - Confirm the PDF file was created
   - Report the file path and size
   - If the file is unexpectedly small (<1KB), warn that conversion may have failed

6. **Confirm completion:**
   - "Saved PDF to: [full path] ([file size])"
   - Suggest next steps: "You can open it to review, or I can make adjustments to the HTML and re-convert."

## Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| html_source | Path to HTML file, or HTML content to convert | Yes |
| output_path | Where to save the PDF (defaults to same location as HTML, with .pdf extension) | No |
| page_size | Page size: Letter, A4, Legal, Tabloid (default: Letter) | No |
| margins | Page margins in CSS units (default: 0.5in all sides) | No |
| orientation | portrait or landscape (default: portrait) | No |

## Example

**Scenario:** User created a branded whitepaper using the Visual Communication skill. The output is a styled HTML file with CSS.

**User:** "Convert this whitepaper to PDF"

**Claude:**
1. Confirms Node.js is available (`node --version` returns v20.x)
2. Verifies the HTML file exists at `/Users/name/projects/whitepaper.html`
3. Asks: "I'll convert whitepaper.html to PDF with Letter size and 0.5in margins. The HTML has custom @page rules, so I'll defer to those. Save as whitepaper.pdf in the same folder?"
4. User confirms
5. Runs the Puppeteer conversion script
6. Returns: "Saved PDF to: /Users/name/projects/whitepaper.pdf (2.1 MB)"

## Error Handling

**Node.js not found:**
- "Node.js isn't installed on this system, so I can't run the PDF conversion automatically."
- Offer: "You can open the HTML file in Chrome and use File > Print > Save as PDF. The styling should be preserved."
- Offer: "Or install Node.js from https://nodejs.org and I can convert it."

**Puppeteer installation fails:**
- "Puppeteer couldn't download its bundled Chromium. This usually means a network issue."
- Offer: "Check your internet connection and try again, or open the HTML in Chrome and print to PDF manually."

**HTML file not found:**
- "I can't find the HTML file at [path]. Can you confirm the correct file path?"

**Conversion produces empty/broken PDF:**
- "The PDF was created but appears to be empty or very small. The HTML may have rendering issues."
- Offer: "I can check the HTML for common problems (missing closing tags, broken CSS paths, relative asset URLs that need to be made absolute)."

**Permission denied (output path):**
- "I don't have permission to write to [path]. Can you suggest a different location, or check folder permissions?"

**Disk full:**
- "Unable to save the PDF — the disk may be full. Please free up some space and try again."
