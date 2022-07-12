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
exports.LessonSteps = void 0;
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const FilePreview_1 = require("../FilePreview");
require("./style.css");
const LessonSteps = (props) => {
    const { steps } = props;
    const [activeIndex] = (0, react_1.useState)(0);
    return (react_1.default.createElement("section", { className: "page-section _steps" },
        react_1.default.createElement("div", { className: "steps" }, steps.map((step, index) => (react_1.default.createElement("div", { key: `step-${index}`, className: (0, classnames_1.default)("steps-item", { _active: activeIndex === index }) },
            react_1.default.createElement("div", { className: "inner-block" },
                react_1.default.createElement("h4", { className: "inner-title" }, step.name),
                step.description && react_1.default.createElement("div", null, step.description)),
            step.comment && (react_1.default.createElement("div", { className: "inner-comment" }, step.comment)))))),
        react_1.default.createElement(FilePreview_1.FilePreview, { fileName: steps[1].code_title, image: steps[0].image_video_url, prevValue: steps[0].code, nextValue: steps[1].code })));
};
exports.LessonSteps = LessonSteps;
//# sourceMappingURL=LessonSteps.js.map