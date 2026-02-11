import chalk from "chalk";

// ── Brand Color Theme ──────────────────────────────────────────────
const brand = chalk.hex("#FE4506");
const accent = chalk.cyan;
const dim = chalk.gray;
const bold = chalk.bold;

// ── ASCII Art Wordmark ─────────────────────────────────────────────
const WORDMARK = [
  "██████   █████  ███████ ███████ ██      ██ ███    ██ ███████",
  "██   ██ ██   ██ ██      ██      ██      ██ ████   ██ ██     ",
  "██████  ███████ ███████ █████   ██      ██ ██ ██  ██ █████  ",
  "██   ██ ██   ██      ██ ██      ██      ██ ██  ██ ██ ██     ",
  "██████  ██   ██ ███████ ███████ ███████ ██ ██   ████ ███████",
];

// ── Spinner Frames ─────────────────────────────────────────────────
const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const SPINNER_INTERVAL = 80;

// ── Banner (ASCII art, used for init) ──────────────────────────────
export function banner(subtitle?: string): void {
  console.log();
  for (const line of WORDMARK) {
    console.log(`  ${brand(line)}`);
  }
  if (subtitle) {
    console.log();
    console.log(`  ${dim(subtitle)}`);
  }
  console.log();
}

// ── Header (boxed, used for other commands) ────────────────────────
export function header(title: string, subtitle?: string): void {
  const content = subtitle ? [title, subtitle] : [title];
  const maxLen = Math.max(...content.map((s) => s.length));
  const width = maxLen + 6;

  console.log();
  console.log(`  ${dim("╭" + "─".repeat(width) + "╮")}`);
  console.log(`  ${dim("│")}${" ".repeat(width)}${dim("│")}`);
  for (const line of content) {
    const padding = width - line.length - 3;
    if (line === title) {
      console.log(`  ${dim("│")}   ${brand.bold(line)}${" ".repeat(padding)}${dim("│")}`);
    } else {
      console.log(`  ${dim("│")}   ${dim(line)}${" ".repeat(padding)}${dim("│")}`);
    }
  }
  console.log(`  ${dim("│")}${" ".repeat(width)}${dim("│")}`);
  console.log(`  ${dim("╰" + "─".repeat(width) + "╯")}`);
  console.log();
}

// ── Section Header ─────────────────────────────────────────────────
export function sectionHeader(title: string, index: number, total: number): void {
  const label = `Section ${index} of ${total}`;
  const titlePart = `── ${title} `;
  const fill = "─".repeat(Math.max(2, 40 - titlePart.length));
  console.log(`  ${brand(titlePart)}${dim(fill + " " + label)}\n`);
}

// ── Question Prefix ────────────────────────────────────────────────
export function questionPrefix(current: number, total: number): string {
  return dim(`[${current}/${total}]`);
}

// ── Format Prompt (for readline) ───────────────────────────────────
export function formatPrompt(question: string, hint?: string): string {
  const hintStr = hint ? ` ${accent(`[${hint}]`)}` : "";
  return `  ${bold(question)}${hintStr}\n  ${brand("›")} `;
}

export function formatPromptWithProgress(
  question: string,
  current: number,
  total: number,
  hint?: string
): string {
  const prefix = dim(`[${current}/${total}]`);
  const hintStr = hint ? ` ${accent(`[${hint}]`)}` : "";
  return `  ${prefix} ${bold(question)}${hintStr}\n  ${brand("›")} `;
}

// ── Section Complete ───────────────────────────────────────────────
export function sectionComplete(title: string, answered: number, total: number): void {
  console.log(`  ${chalk.green("✓")} ${brand(title)} ${dim(`— ${answered} of ${total} answered`)}\n`);
}

// ── Spinner ────────────────────────────────────────────────────────
export function spinner(message: string): { stop: (finalMessage?: string) => void } {
  let i = 0;
  const id = setInterval(() => {
    process.stdout.write(
      `\r  ${accent(SPINNER_FRAMES[i++ % SPINNER_FRAMES.length])} ${message}`
    );
  }, SPINNER_INTERVAL);

  return {
    stop(finalMessage?: string) {
      clearInterval(id);
      const text = finalMessage || message;
      process.stdout.write(`\r  ${chalk.green("✓")} ${text}${" ".repeat(20)}\n`);
    },
  };
}

// ── Semantic Output ────────────────────────────────────────────────
export function success(message: string): void {
  console.log(`  ${chalk.green("✓")} ${message}`);
}

export function error(message: string): void {
  console.log(`  ${chalk.red("✗")} ${message}`);
}

export function warn(message: string): void {
  console.log(`  ${chalk.yellow("⚠")} ${message}`);
}

export function info(message: string): void {
  console.log(`  ${dim(message)}`);
}

// ── Summary Box ────────────────────────────────────────────────────
export function summary(title: string, rows: [string, string][]): void {
  const labelWidth = Math.max(...rows.map(([label]) => label.length));
  const valueWidth = Math.max(...rows.map(([, value]) => value.length));
  const contentWidth = labelWidth + valueWidth + 4; // "  label  value"
  const width = Math.max(contentWidth + 6, title.length + 6);

  console.log();
  console.log(`  ${dim("╭" + "─".repeat(width) + "╮")}`);
  console.log(`  ${dim("│")}${" ".repeat(width)}${dim("│")}`);

  const titlePad = width - title.length - 3;
  console.log(`  ${dim("│")}   ${chalk.green.bold(title)}${" ".repeat(titlePad)}${dim("│")}`);

  console.log(`  ${dim("│")}${" ".repeat(width)}${dim("│")}`);

  for (const [label, value] of rows) {
    const line = `${dim(label.padEnd(labelWidth))}  ${value}`;
    const linePad = width - labelWidth - value.length - 5;
    console.log(`  ${dim("│")}   ${line}${" ".repeat(Math.max(0, linePad))}${dim("│")}`);
  }

  console.log(`  ${dim("│")}${" ".repeat(width)}${dim("│")}`);
  console.log(`  ${dim("╰" + "─".repeat(width) + "╯")}`);
}

// ── Next Steps ─────────────────────────────────────────────────────
export function nextSteps(steps: string[]): void {
  console.log(`\n  ${bold("Next steps:")}`);
  for (let i = 0; i < steps.length; i++) {
    console.log(`    ${dim(`${i + 1}.`)} ${steps[i]}`);
  }
  console.log();
}

// ── Divider ────────────────────────────────────────────────────────
export function divider(): void {
  console.log(`  ${dim("─".repeat(40))}`);
}

// ── Format Date ────────────────────────────────────────────────────
export function formatDate(isoString: string): string {
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return isoString;
  }
}

// ── Skip Hint (shown once at start of questionnaire) ───────────────
export function skipHint(): void {
  console.log(`  ${dim("Press Enter to skip any question.")}\n`);
}

// Re-export chalk colors for inline use where needed
export { brand, accent, dim, bold };
