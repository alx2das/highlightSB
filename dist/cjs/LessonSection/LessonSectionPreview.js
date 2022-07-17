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
const LessonSectionSource_1 = __importDefault(require("./LessonSectionSource"));
const ViewCode_1 = __importDefault(require("../ViewCode/ViewCode"));
const LessonSectionPreview = (props) => {
    const { step, steps, className, minify, } = props;
    const { prevStep, nextStep } = (0, react_1.useMemo)(() => {
        if (!step) {
            return { nextStep: undefined, prevStep: undefined };
        }
        const stepIndex = steps.findIndex((s) => s === step);
        const prevStep = (stepIndex > 0 ? steps.slice(0, stepIndex) : []).reduceRight((prevStep, s) => {
            if (!prevStep && s.fileName === step.fileName) {
                prevStep = s;
            }
            return prevStep;
        }, undefined);
        return { nextStep: step, prevStep: prevStep };
    }, [steps, step]);
    return (react_1.default.createElement("div", { className: className },
        react_1.default.createElement("div", null,
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileName) && (react_1.default.createElement("div", { className: "tutorial-steps-preview__name" }, nextStep.fileName)),
            react_1.default.createElement(LessonSectionSource_1.default, { alt: (nextStep === null || nextStep === void 0 ? void 0 : nextStep.title) || (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileName) || "", sourceNode: nextStep === null || nextStep === void 0 ? void 0 : nextStep.sourceNode, sourceUrl: nextStep === null || nextStep === void 0 ? void 0 : nextStep.sourceUrl, sourceType: nextStep === null || nextStep === void 0 ? void 0 : nextStep.sourceType }),
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileContent) && (react_1.default.createElement("div", { className: "tutorial-steps-preview__code" },
                react_1.default.createElement(ViewCode_1.default, { prevValue: prevStep === null || prevStep === void 0 ? void 0 : prevStep.fileContent, nextValue: nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileContent, minify: minify }))))));
};
exports.default = LessonSectionPreview;
//# sourceMappingURL=LessonSectionPreview.js.map