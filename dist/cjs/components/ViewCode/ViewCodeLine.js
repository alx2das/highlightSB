"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const ViewCodeLine = ({ content, number, marker, hideNumber }) => (react_1.default.createElement("span", { "data-line": number, className: (0, classnames_1.default)("vc-line", {
        _added: marker.added && !marker.removed,
        _removed: !marker.added && marker.removed,
        _update: marker.added && marker.removed,
    }) },
    !hideNumber && react_1.default.createElement("span", { className: "vc-line-number" }, number),
    react_1.default.createElement("span", { className: "vc-line-content", dangerouslySetInnerHTML: { __html: content } })));
exports.default = ViewCodeLine;
//# sourceMappingURL=ViewCodeLine.js.map