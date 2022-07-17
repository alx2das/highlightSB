import React, { useState, useCallback, Fragment } from "react";
import cn from "classnames";
import { Waypoint } from "react-waypoint";
import LessonSectionPreview from "./LessonSectionPreview";
import useResponsive from "./useResponsive";
const LessonSectionSteps = (props) => {
    const { steps } = props;
    const [step, setStep] = useState(steps[0]);
    const { isMobile } = useResponsive();
    const handleSelect = useCallback((event) => {
        if (isMobile) {
            return;
        }
        const position = event.currentTarget.getBoundingClientRect();
        const height = (window.innerHeight / 100) * 10;
        window.scrollTo({
            top: position.top + window.scrollY - height,
            behavior: "smooth",
        });
    }, [isMobile]);
    return (React.createElement("section", { className: "sb-lesson-steps" },
        React.createElement("div", { className: "tutorial-steps" }, steps.map((_step, index) => (React.createElement(Fragment, { key: _step.title + index },
            React.createElement("div", { className: cn("tutorial-steps__item", {
                    _active: (step === null || step === void 0 ? void 0 : step.title) === _step.title || isMobile,
                }) },
                !isMobile && (React.createElement(Waypoint, { topOffset: "10%", bottomOffset: "85%", fireOnRapidScroll: true, onEnter: () => setStep(_step) })),
                React.createElement("div", { className: "inner-block", onClick: (e) => handleSelect(e) },
                    React.createElement("h4", { className: "inner-title" }, _step.title),
                    _step.description && React.createElement("div", null, _step.description)),
                _step.comment && (React.createElement("div", { className: "inner-comment" }, _step.comment))),
            isMobile && (React.createElement(LessonSectionPreview, { className: "tutorial-steps-preview-minify", steps: steps, step: _step, minify: true })))))),
        !isMobile && (React.createElement(LessonSectionPreview, { className: "tutorial-steps-preview", steps: steps, step: step }))));
};
export default LessonSectionSteps;
//# sourceMappingURL=LessonSectionSteps.js.map