"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LessonSource_1 = __importDefault(require("./LessonSource"));
const LessonSteps_1 = __importDefault(require("./LessonSteps"));
require("./style.styl");
const LessonSection = (props) => {
    const { title, subtitle, description, source = {}, steps = [] } = props;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "sb-lesson-section" },
            react_1.default.createElement("div", { className: "section-info" },
                title && react_1.default.createElement("h4", { className: "info__title" }, title),
                subtitle && react_1.default.createElement("h2", { className: "info__subtitle" }, subtitle),
                description && (react_1.default.createElement("div", { className: "info__description" }, description))),
            react_1.default.createElement("div", { className: "section-source" },
                react_1.default.createElement(LessonSource_1.default, Object.assign({}, source)))),
        Boolean(steps === null || steps === void 0 ? void 0 : steps.length) && react_1.default.createElement(LessonSteps_1.default, { steps: steps })));
};
exports.default = LessonSection;
//# sourceMappingURL=LessonSection.js.map