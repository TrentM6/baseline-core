export declare function init(): Promise<void>;
/** Build a markdown skill table from manifest files in a skills directory.
 *  Falls back to a hardcoded table if no manifests are found. */
export declare function buildSkillTable(skillsDir: string): string;
/** Generate AGENTS.md — canonical AI instructions for all tools */
export declare function generateAgentsMd(clientName: string, skillsDir?: string): string;
/** Generate CLAUDE.md — pointer to AGENTS.md for Claude Code */
export declare function generateClaudeMdPointer(_skillsDir?: string): string;
/** Generate .github/copilot-instructions.md — thin pointer to AGENTS.md for GitHub Copilot */
export declare function generateCopilotInstructions(): string;
/** Generate README.md for client systems */
export declare function generateReadme(clientName: string): string;
