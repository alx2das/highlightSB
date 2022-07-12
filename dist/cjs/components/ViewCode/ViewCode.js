"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewCode = void 0;
const react_1 = __importDefault(require("react"));
const helpers_1 = require("./helpers");
const ViewCodeLine_1 = __importDefault(require("./ViewCodeLine"));
require("./style.css");
const ViewCode = (props) => {
    const { nextValue, prevValue = "", startNumber = 1, hideNumber = false, } = props;
    const markers = (0, helpers_1.searchMarkers)(prevValue, nextValue);
    const htmlLines = (0, helpers_1.lineNumbering)(nextValue);
    return (react_1.default.createElement("div", { className: "view-code" },
        react_1.default.createElement("pre", null,
            react_1.default.createElement("code", null, htmlLines.map((line, index) => (react_1.default.createElement(ViewCodeLine_1.default, { key: `${index}-line`, content: line, number: startNumber + index, marker: markers[index] || {}, hideNumber: Boolean(hideNumber) })))))));
};
exports.ViewCode = ViewCode;
//# sourceMappingURL=ViewCode.js.map