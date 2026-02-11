"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_1 = require("fs");
const path_1 = require("path");
const status_js_1 = require("./commands/status.js");
const update_js_1 = require("./commands/update.js");
const init_js_1 = require("./commands/init.js");
const context_js_1 = require("./commands/context.js");
const pkg = JSON.parse((0, fs_1.readFileSync)((0, path_1.join)(__dirname, "..", "package.json"), "utf-8"));
const program = new commander_1.Command();
program
    .name("baseline")
    .description("Distribute and update the Baseline System")
    .version(pkg.version);
program
    .command("status")
    .description("Show current version and check for updates")
    .action(status_js_1.status);
program
    .command("update")
    .description("Pull latest skills, frameworks, and scripts from baseline-core")
    .action(update_js_1.update);
program
    .command("init")
    .description("Set up a new client system with guided onboarding")
    .action(init_js_1.init);
const ctxCmd = program
    .command("context")
    .description("Manage context files")
    .action(() => (0, context_js_1.context)());
ctxCmd
    .command("add <name>")
    .description("Create a new context file and wire it to skills")
    .action((name) => (0, context_js_1.context)(name));
program.parse();
