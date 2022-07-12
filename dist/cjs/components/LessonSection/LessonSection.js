"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonSection = void 0;
const react_1 = __importDefault(require("react"));
const LessonSteps_1 = require("../LessonSteps");
require("./style.css");
const LessonSection = (props) => {
    const { title, subtitle, description, image_video_url, steps } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "page-section" },
            react_1.default.createElement("div", { className: "info" },
                title && react_1.default.createElement("h4", { className: "info__order-name" }, title),
                subtitle && react_1.default.createElement("h2", { className: "info__title" }, subtitle),
                description && react_1.default.createElement("div", null, description)),
            image_video_url && (react_1.default.createElement("div", { className: "image" },
                react_1.default.createElement("img", { src: image_video_url })))),
        steps && react_1.default.createElement(LessonSteps_1.LessonSteps, { steps: steps })));
};
exports.LessonSection = LessonSection;
//# sourceMappingURL=LessonSection.js.map