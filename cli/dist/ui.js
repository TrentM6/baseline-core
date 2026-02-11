"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bold = exports.dim = exports.accent = exports.brand = void 0;
exports.banner = banner;
exports.header = header;
exports.sectionHeader = sectionHeader;
exports.questionPrefix = questionPrefix;
exports.formatPrompt = formatPrompt;
exports.formatPromptWithProgress = formatPromptWithProgress;
exports.sectionComplete = sectionComplete;
exports.spinner = spinner;
exports.success = success;
exports.error = error;
exports.warn = warn;
exports.info = info;
exports.summary = summary;
exports.nextSteps = nextSteps;
exports.divider = divider;
exports.formatDate = formatDate;
exports.skipHint = skipHint;
const chalk_1 = __importDefault(require("chalk"));
// ── Brand Color Theme ──────────────────────────────────────────────
const brand = chalk_1.default.hex("#FE4506");
exports.brand = brand;
const accent = chalk_1.default.cyan;
exports.accent = accent;
const dim = chalk_1.default.gray;
exports.dim = dim;
const bold = chalk_1.default.bold;
exports.bold = bold;
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
function banner(subtitle) {
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
function header(title, subtitle) {
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
        }
        else {
            console.log(`  ${dim("│")}   ${dim(line)}${" ".repeat(padding)}${dim("│")}`);
        }
    }
    console.log(`  ${dim("│")}${" ".repeat(width)}${dim("│")}`);
    console.log(`  ${dim("╰" + "─".repeat(width) + "╯")}`);
    console.log();
}
// ── Section Header ─────────────────────────────────────────────────
function sectionHeader(title, index, total) {
    const label = `Section ${index} of ${total}`;
    const titlePart = `── ${title} `;
    const fill = "─".repeat(Math.max(2, 40 - titlePart.length));
    console.log(`  ${brand(titlePart)}${dim(fill + " " + label)}\n`);
}
// ── Question Prefix ────────────────────────────────────────────────
function questionPrefix(current, total) {
    return dim(`[${current}/${total}]`);
}
// ── Format Prompt (for readline) ───────────────────────────────────
function formatPrompt(question, hint) {
    const hintStr = hint ? ` ${accent(`[${hint}]`)}` : "";
    return `  ${bold(question)}${hintStr}\n  ${brand("›")} `;
}
function formatPromptWithProgress(question, current, total, hint) {
    const prefix = dim(`[${current}/${total}]`);
    const hintStr = hint ? ` ${accent(`[${hint}]`)}` : "";
    return `  ${prefix} ${bold(question)}${hintStr}\n  ${brand("›")} `;
}
// ── Section Complete ───────────────────────────────────────────────
function sectionComplete(title, answered, total) {
    console.log(`  ${chalk_1.default.green("✓")} ${brand(title)} ${dim(`— ${answered} of ${total} answered`)}\n`);
}
// ── Spinner ────────────────────────────────────────────────────────
function spinner(message) {
    let i = 0;
    const id = setInterval(() => {
        process.stdout.write(`\r  ${accent(SPINNER_FRAMES[i++ % SPINNER_FRAMES.length])} ${message}`);
    }, SPINNER_INTERVAL);
    return {
        stop(finalMessage) {
            clearInterval(id);
            const text = finalMessage || message;
            process.stdout.write(`\r  ${chalk_1.default.green("✓")} ${text}${" ".repeat(20)}\n`);
        },
    };
}
// ── Semantic Output ────────────────────────────────────────────────
function success(message) {
    console.log(`  ${chalk_1.default.green("✓")} ${message}`);
}
function error(message) {
    console.log(`  ${chalk_1.default.red("✗")} ${message}`);
}
function warn(message) {
    console.log(`  ${chalk_1.default.yellow("⚠")} ${message}`);
}
function info(message) {
    console.log(`  ${dim(message)}`);
}
// ── Summary Box ────────────────────────────────────────────────────
function summary(title, rows) {
    const labelWidth = Math.max(...rows.map(([label]) => label.length));
    const valueWidth = Math.max(...rows.map(([, value]) => value.length));
    const contentWidth = labelWidth + valueWidth + 4; // "  label  value"
    const width = Math.max(contentWidth + 6, title.length + 6);
    console.log();
    console.log(`  ${dim("╭" + "─".repeat(width) + "╮")}`);
    console.log(`  ${dim("│")}${" ".repeat(width)}${dim("│")}`);
    const titlePad = width - title.length - 3;
    console.log(`  ${dim("│")}   ${chalk_1.default.green.bold(title)}${" ".repeat(titlePad)}${dim("│")}`);
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
function nextSteps(steps) {
    console.log(`\n  ${bold("Next steps:")}`);
    for (let i = 0; i < steps.length; i++) {
        console.log(`    ${dim(`${i + 1}.`)} ${steps[i]}`);
    }
    console.log();
}
// ── Divider ────────────────────────────────────────────────────────
function divider() {
    console.log(`  ${dim("─".repeat(40))}`);
}
// ── Format Date ────────────────────────────────────────────────────
function formatDate(isoString) {
    try {
        const d = new Date(isoString);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }
    catch {
        return isoString;
    }
}
// ── Skip Hint (shown once at start of questionnaire) ───────────────
function skipHint() {
    console.log(`  ${dim("Press Enter to skip any question.")}\n`);
}
