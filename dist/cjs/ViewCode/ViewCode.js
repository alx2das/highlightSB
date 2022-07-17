"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const utils_1 = require("./utils");
const ViewCodeLine_1 = __importDefault(require("./ViewCodeLine"));
require("highlight.js/styles/github.css");
require("./styles.styl");
const ViewCode = (props) => {
    const { nextValue, prevValue, startNumber = 1, hideNumber, minify, minifyCountSpace, } = props;
    const isMobile = minify;
    const count = (minifyCountSpace && parseInt("" + minifyCountSpace)) || 2;
    const htmlLines = (0, react_1.useMemo)(() => {
        return (0, utils_1.lineNumbering)(nextValue);
    }, [nextValue]);
    const { indexes, markers } = (0, react_1.useMemo)(() => {
        const markers = (0, utils_1.searchMarkers)(nextValue, prevValue);
        const indexes = htmlLines.map((_, index) => index);
        if (isMobile && Object.keys(markers).length) {
            return (0, utils_1.indexesMarkedLines)(markers, htmlLines.length, count);
        }
        return { indexes, markers };
    }, [isMobile, htmlLines, nextValue, prevValue, count]);
    return (react_1.default.createElement("div", { className: "view-code" },
        react_1.default.createElement("pre", null,
            react_1.default.createElement("code", null, indexes.map((i) => (react_1.default.createElement(ViewCodeLine_1.default, { key: htmlLines[i] + i, number: startNumber + i, content: htmlLines[i], marker: markers[i] || {}, hideNumber: Boolean(hideNumber) })))))));
};
exports.default = ViewCode;
//# sourceMappingURL=ViewCode.js.map