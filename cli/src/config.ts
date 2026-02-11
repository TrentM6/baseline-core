import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

export interface BaselineConfig {
  version: string;
  coreRepo: string;
  lastUpdated: string;
  client: {
    name: string;
    contextPath: string;
  };
}

const CONFIG_FILE = "baseline.config.json";

export function readConfig(): BaselineConfig {
  const configPath = join(process.cwd(), CONFIG_FILE);
  try {
    return JSON.parse(readFileSync(configPath, "utf-8"));
  } catch {
    console.error(`Error: ${CONFIG_FILE} not found in current directory.`);
    console.error("Run this command from your baseline system root.");
    process.exit(1);
  }
}

export function writeConfig(config: BaselineConfig): void {
  const configPath = join(process.cwd(), CONFIG_FILE);
  writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
}
