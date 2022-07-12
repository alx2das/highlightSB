var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import ViewCode from "../ViewCode";
import "./style.css";
const FilePreview = (props) => {
    const { fileName, image } = props, otherProps = __rest(props, ["fileName", "image"]);
    return (React.createElement("div", { className: "steps-preview", id: "preview-file" },
        fileName && React.createElement("div", { className: "steps-preview__name" }, fileName),
        image && React.createElement("div", { className: "steps-preview__image" }, image),
        React.createElement("div", { className: "steps-preview__code" },
            React.createElement(ViewCode, Object.assign({}, otherProps)))));
};
export default FilePreview;
//# sourceMappingURL=FilePreview.js.map