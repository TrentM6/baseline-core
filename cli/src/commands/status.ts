import { readConfig } from "../config.js";
import { getLatestTag, isNewer } from "../git.js";
import * as ui from "../ui.js";

export function status(): void {
  const config = readConfig();

  ui.header("Baseline System");

  console.log(`  ${ui.dim("Client:")}       ${config.client.name}`);
  console.log(`  ${ui.dim("Version:")}      v${config.version}`);
  console.log(`  ${ui.dim("Core repo:")}    ${config.coreRepo}`);
  console.log(`  ${ui.dim("Last updated:")} ${ui.formatDate(config.lastUpdated)}`);
  console.log();

  const spin = ui.spinner("Checking for updates...");
  const latest = getLatestTag(config.coreRepo);
  spin.stop("Checked for updates");

  if (!latest) {
    ui.error("Could not determine latest version.");
    console.log();
    return;
  }

  if (isNewer(latest, config.version)) {
    ui.warn(`Update available: v${config.version} ${ui.accent("→")} v${latest}`);
    console.log(`    Run ${ui.accent("npx baseline update")} to pull the latest.\n`);
  } else {
    ui.success(`Up to date (v${config.version})`);
    console.log();
  }
}
