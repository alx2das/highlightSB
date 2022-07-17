import React from "react";
import LessonSectionSource from "./LessonSectionSource";
import LessonSectionSteps from "./LessonSectionSteps";
import "./styles.styl";
const LessonSection = (props) => {
    const { title, subtitle, description, sourceUrl, sourceType, sourceNode, steps, } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "sb-lesson-section" },
            React.createElement("div", { className: "section-info" },
                React.createElement("h4", { className: "inner-title" }, title),
                React.createElement("h2", { className: "inner-subtitle" }, subtitle),
                description && (React.createElement("div", { className: "inner-description" }, description))),
            React.createElement("div", { className: "section-source" },
                React.createElement(LessonSectionSource, { alt: subtitle, sourceUrl: sourceUrl, sourceType: sourceType, sourceNode: sourceNode }))),
        Boolean(steps === null || steps === void 0 ? void 0 : steps.length) && React.createElement(LessonSectionSteps, { steps: steps })));
};
export default LessonSection;
//# sourceMappingURL=LessonSection.js.map