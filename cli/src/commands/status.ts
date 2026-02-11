import { readConfig } from "../config.js";
import { getLatestTag, isNewer } from "../git.js";

export function status(): void {
  const config = readConfig();

  console.log(`\n  Baseline System`);
  console.log(`  ───────────────────────────`);
  console.log(`  Client:       ${config.client.name}`);
  console.log(`  Version:      v${config.version}`);
  console.log(`  Core repo:    ${config.coreRepo}`);
  console.log(`  Last updated: ${config.lastUpdated}`);

  console.log(`\n  Checking for updates...`);
  const latest = getLatestTag(config.coreRepo);

  if (!latest) {
    console.log(`  Could not determine latest version.\n`);
    return;
  }

  if (isNewer(latest, config.version)) {
    console.log(`  Update available: v${config.version} → v${latest}`);
    console.log(`  Run \`baseline update\` to pull the latest.\n`);
  } else {
    console.log(`  Up to date (v${config.version}).\n`);
  }
}
