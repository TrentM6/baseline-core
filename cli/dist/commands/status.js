"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = status;
const config_js_1 = require("../config.js");
const git_js_1 = require("../git.js");
const ui = __importStar(require("../ui.js"));
function status() {
    const config = (0, config_js_1.readConfig)();
    ui.header("Baseline System");
    console.log(`  ${ui.dim("Client:")}       ${config.client.name}`);
    console.log(`  ${ui.dim("Version:")}      v${config.version}`);
    console.log(`  ${ui.dim("Core repo:")}    ${config.coreRepo}`);
    console.log(`  ${ui.dim("Last updated:")} ${ui.formatDate(config.lastUpdated)}`);
    console.log();
    const spin = ui.spinner("Checking for updates...");
    const latest = (0, git_js_1.getLatestTag)(config.coreRepo);
    spin.stop("Checked for updates");
    if (!latest) {
        ui.error("Could not determine latest version.");
        console.log();
        return;
    }
    if ((0, git_js_1.isNewer)(latest, config.version)) {
        ui.warn(`Update available: v${config.version} ${ui.accent("→")} v${latest}`);
        console.log(`    Run ${ui.accent("npx baseline update")} to pull the latest.\n`);
    }
    else {
        ui.success(`Up to date (v${config.version})`);
        console.log();
    }
}
