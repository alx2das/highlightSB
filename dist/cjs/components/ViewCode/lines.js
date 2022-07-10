"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineNumbers = void 0;
const highlight_js_1 = __importDefault(require("highlight.js"));
require("highlight.js/styles/default.css");
const REGEXP_LINE_BREAK = /\r?\n/g;
const getLines = (value) => {
    if (!value.length)
        return [];
    return value.split(REGEXP_LINE_BREAK);
};
const lineNumbers = (value) => {
    var _a;
    const valueHTML = highlight_js_1.default.highlightAuto(value).value;
    const lines = getLines(valueHTML);
    if (((_a = lines[lines.length - 1]) === null || _a === void 0 ? void 0 : _a.trim()) === "") {
        lines.pop();
    }
    if (!lines.length) {
        return [];
    }
    return lines;
};
exports.lineNumbers = lineNumbers;
//# sourceMappingURL=lines.js.map