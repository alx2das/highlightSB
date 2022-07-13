"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LessonSource = (props) => {
    const { url, type, node } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        node,
        Boolean(url && type) && (react_1.default.createElement(react_1.default.Fragment, null,
            type === "image" && react_1.default.createElement("img", { src: url, alt: "lesson-section-source" }),
            type === "video" && (react_1.default.createElement("video", { width: "100%", height: "auto", autoPlay: true, muted: true, playsInline: true },
                react_1.default.createElement("source", { src: url, type: "video/mp4" })))))));
};
exports.default = LessonSource;
//# sourceMappingURL=LessonSource.js.map