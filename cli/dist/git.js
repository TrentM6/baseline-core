"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestTag = getLatestTag;
exports.fetchAndExtract = fetchAndExtract;
exports.cloneAtTag = cloneAtTag;
exports.isNewer = isNewer;
const child_process_1 = require("child_process");
const semver_1 = require("semver");
function getLatestTag(coreRepo) {
    try {
        const repoUrl = `https://github.com/${coreRepo}.git`;
        const output = (0, child_process_1.execSync)(`git ls-remote --tags --sort=-v:refname ${repoUrl}`, {
            encoding: "utf-8",
            timeout: 15000,
        });
        for (const line of output.trim().split("\n")) {
            if (!line)
                continue;
            const ref = line.split("\t")[1];
            if (!ref || ref.endsWith("^{}"))
                continue;
            const tag = ref.replace("refs/tags/", "");
            const version = tag.startsWith("v") ? tag.slice(1) : tag;
            if ((0, semver_1.valid)(version))
                return version;
        }
        return null;
    }
    catch {
        console.error("Error: Could not reach baseline-core repo.");
        console.error("Check your network connection and repo access.");
        process.exit(1);
    }
}
function fetchAndExtract(coreRepo, tag, destDir) {
    const repoUrl = `https://github.com/${coreRepo}.git`;
    const vTag = `v${tag}`;
    (0, child_process_1.execSync)(`git archive --remote=${repoUrl} ${vTag} 2>/dev/null || git clone --depth 1 --branch ${vTag} ${repoUrl} /tmp/baseline-core-fetch`, { encoding: "utf-8", timeout: 60000, stdio: "pipe" });
}
/** Clone a specific tag to a temp dir and return the path */
function cloneAtTag(coreRepo, tag) {
    const repoUrl = `https://github.com/${coreRepo}.git`;
    const vTag = `v${tag}`;
    const tmpDir = `/tmp/baseline-core-${Date.now()}`;
    (0, child_process_1.execSync)(`git clone --depth 1 --branch ${vTag} ${repoUrl} ${tmpDir}`, {
        encoding: "utf-8",
        timeout: 60000,
        stdio: "pipe",
    });
    return tmpDir;
}
function isNewer(latest, current) {
    return (0, semver_1.compare)(latest, current) > 0;
}
