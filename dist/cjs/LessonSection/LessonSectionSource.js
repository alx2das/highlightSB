"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LessonSectionSource = (props) => {
    const { alt, sourceUrl, sourceType, sourceNode, } = props;
    if (sourceNode) {
        return react_1.default.createElement(react_1.default.Fragment, null, sourceNode);
    }
    if (sourceUrl && sourceType === "image") {
        return (react_1.default.createElement("div", { className: "tutorial-steps-preview__image" },
            react_1.default.createElement("img", { src: sourceUrl, alt: alt })));
    }
    if (sourceUrl && sourceType === "video") {
        return (react_1.default.createElement("div", { className: "tutorial-steps-preview__video" },
            react_1.default.createElement("video", { width: "100%", height: "auto", autoPlay: true, muted: true, playsInline: true },
                react_1.default.createElement("source", { src: sourceUrl, type: "video/mp4" }))));
    }
    return null;
};
exports.default = LessonSectionSource;
//# sourceMappingURL=LessonSectionSource.js.map