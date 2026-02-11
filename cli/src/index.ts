import { Command } from "commander";
import { status } from "./commands/status.js";
import { update } from "./commands/update.js";
import { init } from "./commands/init.js";

const program = new Command();

program
  .name("baseline")
  .description("Distribute and update the Baseline System")
  .version("1.0.0");

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

program.parse();
