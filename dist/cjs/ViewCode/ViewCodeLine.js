"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const ViewCodeLine = (props) => {
    const { number, content, marker, hideNumber } = props;
    const markerClassNames = (0, classnames_1.default)({
        _added: marker.added && !marker.removed,
        _removed: !marker.added && marker.removed,
        _updated: (marker.added && marker.removed) || marker.updated,
        _minify_prev: marker.minify_p,
        _minify_next: marker.minify_n,
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: (0, classnames_1.default)("vc-line _number", markerClassNames) }, !hideNumber && number),
        react_1.default.createElement("span", { className: (0, classnames_1.default)("vc-line _content", markerClassNames), dangerouslySetInnerHTML: { __html: content } })));
};
exports.default = ViewCodeLine;
//# sourceMappingURL=ViewCodeLine.js.map