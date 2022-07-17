"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LessonSectionSource_1 = __importDefault(require("./LessonSectionSource"));
const LessonSectionSteps_1 = __importDefault(require("./LessonSectionSteps"));
require("./styles.styl");
const LessonSection = (props) => {
    const { title, subtitle, description, sourceUrl, sourceType, sourceNode, steps, } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "sb-lesson-section" },
            react_1.default.createElement("div", { className: "section-info" },
                react_1.default.createElement("h4", { className: "inner-title" }, title),
                react_1.default.createElement("h2", { className: "inner-subtitle" }, subtitle),
                description && (react_1.default.createElement("div", { className: "inner-description" }, description))),
            react_1.default.createElement("div", { className: "section-source" },
                react_1.default.createElement(LessonSectionSource_1.default, { alt: subtitle, sourceUrl: sourceUrl, sourceType: sourceType, sourceNode: sourceNode }))),
        Boolean(steps === null || steps === void 0 ? void 0 : steps.length) && react_1.default.createElement(LessonSectionSteps_1.default, { steps: steps })));
};
exports.default = LessonSection;
//# sourceMappingURL=LessonSection.js.map