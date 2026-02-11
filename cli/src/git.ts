import { execSync } from "child_process";
import { compare, valid } from "semver";

export function getLatestTag(coreRepo: string): string | null {
  try {
    const repoUrl = `https://github.com/${coreRepo}.git`;
    const output = execSync(`git ls-remote --tags --sort=-v:refname ${repoUrl}`, {
      encoding: "utf-8",
      timeout: 15000,
    });

    for (const line of output.trim().split("\n")) {
      if (!line) continue;
      const ref = line.split("\t")[1];
      if (!ref || ref.endsWith("^{}")) continue;
      const tag = ref.replace("refs/tags/", "");
      const version = tag.startsWith("v") ? tag.slice(1) : tag;
      if (valid(version)) return version;
    }
    return null;
  } catch {
    console.error("Error: Could not reach baseline-core repo.");
    console.error("Check your network connection and repo access.");
    process.exit(1);
  }
}

export function fetchAndExtract(coreRepo: string, tag: string, destDir: string): void {
  const repoUrl = `https://github.com/${coreRepo}.git`;
  const vTag = `v${tag}`;

  execSync(
    `git archive --remote=${repoUrl} ${vTag} 2>/dev/null || git clone --depth 1 --branch ${vTag} ${repoUrl} /tmp/baseline-core-fetch`,
    { encoding: "utf-8", timeout: 60000, stdio: "pipe" }
  );
}

/** Clone a specific tag to a temp dir and return the path */
export function cloneAtTag(coreRepo: string, tag: string): string {
  const repoUrl = `https://github.com/${coreRepo}.git`;
  const vTag = `v${tag}`;
  const tmpDir = `/tmp/baseline-core-${Date.now()}`;

  execSync(`git clone --depth 1 --branch ${vTag} ${repoUrl} ${tmpDir}`, {
    encoding: "utf-8",
    timeout: 60000,
    stdio: "pipe",
  });

  return tmpDir;
}

export function isNewer(latest: string, current: string): boolean {
  return compare(latest, current) > 0;
}
