"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = status;
const config_js_1 = require("../config.js");
const git_js_1 = require("../git.js");
function status() {
    const config = (0, config_js_1.readConfig)();
    console.log(`\n  Baseline System`);
    console.log(`  ───────────────────────────`);
    console.log(`  Client:       ${config.client.name}`);
    console.log(`  Version:      v${config.version}`);
    console.log(`  Core repo:    ${config.coreRepo}`);
    console.log(`  Last updated: ${config.lastUpdated}`);
    console.log(`\n  Checking for updates...`);
    const latest = (0, git_js_1.getLatestTag)(config.coreRepo);
    if (!latest) {
        console.log(`  Could not determine latest version.\n`);
        return;
    }
    if ((0, git_js_1.isNewer)(latest, config.version)) {
        console.log(`  Update available: v${config.version} → v${latest}`);
        console.log(`  Run \`baseline update\` to pull the latest.\n`);
    }
    else {
        console.log(`  Up to date (v${config.version}).\n`);
    }
}
