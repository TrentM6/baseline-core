"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfig = readConfig;
exports.writeConfig = writeConfig;
const fs_1 = require("fs");
const path_1 = require("path");
const CONFIG_FILE = "baseline.config.json";
function readConfig() {
    const configPath = (0, path_1.join)(process.cwd(), CONFIG_FILE);
    try {
        return JSON.parse((0, fs_1.readFileSync)(configPath, "utf-8"));
    }
    catch {
        console.error(`Error: ${CONFIG_FILE} not found in current directory.`);
        console.error("Run this command from your baseline system root.");
        process.exit(1);
    }
}
function writeConfig(config) {
    const configPath = (0, path_1.join)(process.cwd(), CONFIG_FILE);
    (0, fs_1.writeFileSync)(configPath, JSON.stringify(config, null, 2) + "\n");
}
