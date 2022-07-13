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
const classnames_1 = __importDefault(require("classnames"));
const react_waypoint_1 = require("react-waypoint");
const LessonSource_1 = __importDefault(require("./LessonSource"));
const ViewCode_1 = __importDefault(require("../ViewCode"));
const LessonSteps = ({ steps }) => {
    const firstStep = steps.find(({ id }) => Boolean(id)) || { id: "" };
    const [stepId, setStepId] = (0, react_1.useState)(firstStep === null || firstStep === void 0 ? void 0 : firstStep.id);
    const { prevStep, nextStep } = steps.reduce((accum, step, index) => {
        if (stepId === step.id && !accum.nextStep) {
            accum.prevStep = steps[index - 1];
            accum.nextStep = step;
        }
        return accum;
    }, { prevStep: undefined, nextStep: undefined });
    const handleSelectStep = (0, react_1.useCallback)((stepId) => () => {
        // TODO надо проскролить страницу к элементу
        setStepId(stepId);
    }, []);
    return (react_1.default.createElement("section", { className: "sb-lesson-steps" },
        react_1.default.createElement("div", { className: "tutorial-steps" }, steps.map((step) => (react_1.default.createElement("div", { key: step.id, className: (0, classnames_1.default)("tutorial-steps__item", {
                _active: stepId === step.id,
            }) },
            react_1.default.createElement(react_waypoint_1.Waypoint, { topOffset: "30%", bottomOffset: "60%", onEnter: () => setStepId(step.id) }),
            react_1.default.createElement("div", { className: "inner-block", onClick: handleSelectStep(step.id) },
                react_1.default.createElement("h4", { className: "inner-title" }, step.title),
                step.description && react_1.default.createElement("div", null, step.description)),
            step.comment && (react_1.default.createElement("div", { className: "inner-comment" }, step.comment)))))),
        react_1.default.createElement("div", { className: "tutorial-steps-preview" },
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileName) && (react_1.default.createElement("div", { className: "tutorial-steps-preview__name" }, nextStep.fileName)),
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.source) && (react_1.default.createElement("div", { className: "section-source" },
                react_1.default.createElement(LessonSource_1.default, Object.assign({}, nextStep.source)))),
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileContent) && (react_1.default.createElement("div", { className: "tutorial-steps-preview__code" },
                react_1.default.createElement(ViewCode_1.default, { prevValue: prevStep === null || prevStep === void 0 ? void 0 : prevStep.fileContent, nextValue: nextStep.fileContent }))))));
};
exports.default = LessonSteps;
//# sourceMappingURL=LessonSteps.js.map