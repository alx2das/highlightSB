import React from "react";
import LessonSource from "./LessonSource";
import LessonSteps from "./LessonSteps";
import "./style.styl";
const LessonSection = (props) => {
    const { title, subtitle, description, source = {}, steps = [] } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "sb-lesson-section" },
            React.createElement("div", { className: "section-info" },
                title && React.createElement("h4", { className: "info__title" }, title),
                subtitle && React.createElement("h2", { className: "info__subtitle" }, subtitle),
                description && (React.createElement("div", { className: "info__description" }, description))),
            React.createElement("div", { className: "section-source" },
                React.createElement(LessonSource, Object.assign({}, source)))),
        Boolean(steps === null || steps === void 0 ? void 0 : steps.length) && React.createElement(LessonSteps, { steps: steps })));
};
export default LessonSection;
//# sourceMappingURL=LessonSection.js.map