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
    const { activeStep = 0, steps } = props;
    const [active, setActive] = (0, react_1.useState)(activeStep);
    const prevValue = (0, react_1.useMemo)(() => {
        const selectStep = steps[active];
        const prevStep = steps[active - 1] || {};
        if (prevStep && prevStep.code_title === selectStep.code_title) {
            return prevStep.code;
        }
        return "";
    }, [steps, active]);
    return (react_1.default.createElement("section", { className: "page-section _steps" },
        react_1.default.createElement("div", { className: "steps" }, steps.map((step, index) => (react_1.default.createElement("div", { key: `step-${index}`, className: (0, classnames_1.default)("steps-item", { _active: active === index }) },
            react_1.default.createElement("div", { className: "inner-block", onClick: () => setActive(index) },
                react_1.default.createElement("h4", { className: "inner-title" }, step.name),
                step.description && react_1.default.createElement("div", null, step.description)),
            step.comment && (react_1.default.createElement("div", { className: "inner-comment" }, step.comment)))))),
        react_1.default.createElement(FilePreview_1.FilePreview, { fileName: steps[active].code_title, image: steps[active].image_video_url, prevValue: prevValue, nextValue: steps[active].code })));
};
exports.LessonSteps = LessonSteps;
//# sourceMappingURL=LessonSteps.js.map