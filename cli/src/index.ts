import { Command } from "commander";
import { status } from "./commands/status.js";
import { update } from "./commands/update.js";
import { init } from "./commands/init.js";
import { context } from "./commands/context.js";

const program = new Command();

program
  .name("baseline")
  .description("Distribute and update the Baseline System")
  .version("2.2.2");

program
  .command("status")
  .description("Show current version and check for updates")
  .action(status);

program
  .command("update")
  .description("Pull latest skills, frameworks, and scripts from baseline-core")
  .action(update);

program
  .command("init")
  .description("Set up a new client system with guided onboarding")
  .action(init);

const ctxCmd = program
  .command("context")
  .description("Manage context files")
  .action(() => context());

ctxCmd
  .command("add <name>")
  .description("Create a new context file and wire it to skills")
  .action((name: string) => context(name));

program.parse();
