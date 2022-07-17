import React, { useMemo } from "react";
import LessonSectionSource from "./LessonSectionSource";
import ViewCode from "../ViewCode/ViewCode";
const LessonSectionPreview = (props) => {
    const { step, steps, className, minify, } = props;
    const { prevStep, nextStep } = useMemo(() => {
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
    return (React.createElement("div", { className: className },
        React.createElement("div", null,
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileName) && (React.createElement("div", { className: "tutorial-steps-preview__name" }, nextStep.fileName)),
            React.createElement(LessonSectionSource, { alt: (nextStep === null || nextStep === void 0 ? void 0 : nextStep.title) || (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileName) || "", sourceNode: nextStep === null || nextStep === void 0 ? void 0 : nextStep.sourceNode, sourceUrl: nextStep === null || nextStep === void 0 ? void 0 : nextStep.sourceUrl, sourceType: nextStep === null || nextStep === void 0 ? void 0 : nextStep.sourceType }),
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileContent) && (React.createElement("div", { className: "tutorial-steps-preview__code" },
                React.createElement(ViewCode, { prevValue: prevStep === null || prevStep === void 0 ? void 0 : prevStep.fileContent, nextValue: nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileContent, minify: minify }))))));
};
export default LessonSectionPreview;
//# sourceMappingURL=LessonSectionPreview.js.map