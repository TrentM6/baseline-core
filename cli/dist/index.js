"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const status_js_1 = require("./commands/status.js");
const update_js_1 = require("./commands/update.js");
const program = new commander_1.Command();
program
    .name("baseline")
    .description("Distribute and update the Baseline System")
    .version("1.0.0");
program
    .command("status")
    .description("Show current version and check for updates")
    .action(status_js_1.status);
program
    .command("update")
    .description("Pull latest skills, frameworks, and scripts from baseline-core")
    .action(update_js_1.update);
program.parse();
