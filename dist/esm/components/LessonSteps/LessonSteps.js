import React, { useState } from "react";
import cn from "classnames";
import { FilePreview } from "../FilePreview";
import "./style.css";
export const LessonSteps = (props) => {
    const { steps } = props;
    const [activeIndex] = useState(0);
    return (React.createElement("section", { className: "page-section _steps" },
        React.createElement("div", { className: "steps" }, steps.map((step, index) => (React.createElement("div", { key: `step-${index}`, className: cn("steps-item", { _active: activeIndex === index }) },
            React.createElement("div", { className: "inner-block" },
                React.createElement("h4", { className: "inner-title" }, step.name),
                step.description && React.createElement("div", null, step.description)),
            step.comment && (React.createElement("div", { className: "inner-comment" }, step.comment)))))),
        React.createElement(FilePreview, { fileName: steps[1].code_title, image: steps[0].image_video_url, prevValue: steps[0].code, nextValue: steps[1].code })));
};
//# sourceMappingURL=LessonSteps.js.map