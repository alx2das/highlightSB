import React, { useCallback, useState } from "react";
import cn from "classnames";
import { Waypoint } from "react-waypoint";
import LessonSource from "./LessonSource";
import ViewCode from "../ViewCode";
const LessonSteps = ({ steps }) => {
    const firstStep = steps.find(({ id }) => Boolean(id)) || { id: "" };
    const [stepId, setStepId] = useState(firstStep === null || firstStep === void 0 ? void 0 : firstStep.id);
    const { prevStep, nextStep } = steps.reduce((accum, step, index) => {
        if (stepId === step.id && !accum.nextStep) {
            accum.prevStep = steps[index - 1];
            accum.nextStep = step;
        }
        return accum;
    }, { prevStep: undefined, nextStep: undefined });
    const handleSelectStep = useCallback((stepId) => () => {
        // TODO надо проскролить страницу к элементу
        setStepId(stepId);
    }, []);
    return (React.createElement("section", { className: "sb-lesson-steps" },
        React.createElement("div", { className: "tutorial-steps" }, steps.map((step) => (React.createElement("div", { key: step.id, className: cn("tutorial-steps__item", {
                _active: stepId === step.id,
            }) },
            React.createElement(Waypoint, { topOffset: "30%", bottomOffset: "60%", onEnter: () => setStepId(step.id) }),
            React.createElement("div", { className: "inner-block", onClick: handleSelectStep(step.id) },
                React.createElement("h4", { className: "inner-title" }, step.title),
                step.description && React.createElement("div", null, step.description)),
            step.comment && (React.createElement("div", { className: "inner-comment" }, step.comment)))))),
        React.createElement("div", { className: "tutorial-steps-preview" },
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileName) && (React.createElement("div", { className: "tutorial-steps-preview__name" }, nextStep.fileName)),
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.source) && (React.createElement("div", { className: "section-source" },
                React.createElement(LessonSource, Object.assign({}, nextStep.source)))),
            (nextStep === null || nextStep === void 0 ? void 0 : nextStep.fileContent) && (React.createElement("div", { className: "tutorial-steps-preview__code" },
                React.createElement(ViewCode, { prevValue: prevStep === null || prevStep === void 0 ? void 0 : prevStep.fileContent, nextValue: nextStep.fileContent }))))));
};
export default LessonSteps;
//# sourceMappingURL=LessonSteps.js.map