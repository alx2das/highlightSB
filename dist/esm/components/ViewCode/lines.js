import hljs from "highlight.js";
import "highlight.js/styles/default.css";
const REGEXP_LINE_BREAK = /\r?\n/g;
const getLines = (value) => {
    if (!value.length)
        return [];
    return value.split(REGEXP_LINE_BREAK);
};
export const lineNumbers = (value) => {
    var _a;
    const valueHTML = hljs.highlightAuto(value).value;
    const lines = getLines(valueHTML);
    if (((_a = lines[lines.length - 1]) === null || _a === void 0 ? void 0 : _a.trim()) === "") {
        lines.pop();
    }
    if (!lines.length) {
        return [];
    }
    return lines;
};
//# sourceMappingURL=lines.js.map