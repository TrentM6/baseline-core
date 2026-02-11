export declare function getLatestTag(coreRepo: string): string | null;
export declare function fetchAndExtract(coreRepo: string, tag: string, destDir: string): void;
/** Clone a specific tag to a temp dir and return the path */
export declare function cloneAtTag(coreRepo: string, tag: string): string;
export declare function isNewer(latest: string, current: string): boolean;
