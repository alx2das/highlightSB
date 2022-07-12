import React from "react";
import { LessonSteps } from "../LessonSteps";
import "./style.css";
export const LessonSection = (props) => {
    const { title, subtitle, description, image_video_url, steps } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "page-section" },
            React.createElement("div", { className: "info" },
                title && React.createElement("h4", { className: "info__order-name" }, title),
                subtitle && React.createElement("h2", { className: "info__title" }, subtitle),
                description && React.createElement("div", null, description)),
            image_video_url && (React.createElement("div", { className: "image" },
                React.createElement("img", { src: image_video_url })))),
        steps && React.createElement(LessonSteps, { steps: steps })));
};
//# sourceMappingURL=LessonSection.js.map