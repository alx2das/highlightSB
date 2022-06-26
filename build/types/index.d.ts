import "highlight.js/styles/base16/github.css";
import "./index.css";
declare type TText = string | [string, string | undefined];
declare type TOptions = {
    filename?: string;
    startLine?: number;
    markers?: number[];
};
declare function highlightSB(text: TText, options?: TOptions): string;
export default highlightSB;
