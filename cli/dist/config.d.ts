export interface BaselineConfig {
    version: string;
    coreRepo: string;
    lastUpdated: string;
    client: {
        name: string;
        contextPath: string;
    };
}
export declare function readConfig(): BaselineConfig;
export declare function writeConfig(config: BaselineConfig): void;
