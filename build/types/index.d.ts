import "./index.sass";
declare type TText = string | [string, string | undefined];
declare type TOptions = {
    startLine?: number;
    markers?: number[];
};
export declare function create(text: TText, options?: TOptions): string;
export declare function createNumbers(text: string, { startLine, markers }?: TOptions): string;
export declare function searchMarkers(text: string[]): number[];
export declare function format(temp: string, args?: string[]): string;
export {};
