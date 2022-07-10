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
const markers_1 = require("./markers");
const lines_1 = require("./lines");
const ViewCodeLine_1 = __importDefault(require("./ViewCodeLine"));
require("./ViewCode.css");
const ViewCode = (props) => {
    const { prevValue, value, startNumber } = props;
    const number = (startNumber ? startNumber : 1) || 1;
    const markers = (0, markers_1.searchMarkers)(prevValue, value);
    const codeHTML = (0, lines_1.lineNumbers)(value);
    return (react_1.default.createElement("div", { className: "view-code" },
        react_1.default.createElement("pre", null,
            react_1.default.createElement("code", null, codeHTML.map((line, index) => (react_1.default.createElement(ViewCodeLine_1.default, { key: line + index, line: line, number: number + index, marker: markers[index] || {} })))))));
};
exports.default = (0, react_1.memo)(ViewCode);
//# sourceMappingURL=ViewCode.js.map