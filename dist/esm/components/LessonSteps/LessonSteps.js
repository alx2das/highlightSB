import React, { useState, useMemo } from "react";
import cn from "classnames";
import { FilePreview } from "../FilePreview";
import "./style.css";
export const LessonSteps = (props) => {
    const { activeStep = 0, steps } = props;
    const [active, setActive] = useState(activeStep);
    const prevValue = useMemo(() => {
        const selectStep = steps[active];
        const prevStep = steps[active - 1] || {};
        if (prevStep && prevStep.code_title === selectStep.code_title) {
            return prevStep.code;
        }
        return "";
    }, [steps, active]);
    return (React.createElement("section", { className: "page-section _steps" },
        React.createElement("div", { className: "steps" }, steps.map((step, index) => (React.createElement("div", { key: `step-${index}`, className: cn("steps-item", { _active: active === index }) },
            React.createElement("div", { className: "inner-block", onClick: () => setActive(index) },
                React.createElement("h4", { className: "inner-title" }, step.name),
                step.description && React.createElement("div", null, step.description)),
            step.comment && (React.createElement("div", { className: "inner-comment" }, step.comment)))))),
        React.createElement(FilePreview, { fileName: steps[active].code_title, image: steps[active].image_video_url, prevValue: prevValue, nextValue: steps[active].code })));
};
//# sourceMappingURL=LessonSteps.js.map