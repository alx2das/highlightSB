"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const react_waypoint_1 = require("react-waypoint");
const LessonSectionPreview_1 = __importDefault(require("./LessonSectionPreview"));
const useResponsive_1 = __importDefault(require("./useResponsive"));
const LessonSectionSteps = (props) => {
    const { steps } = props;
    const [step, setStep] = (0, react_1.useState)(steps[0]);
    const { isMobile } = (0, useResponsive_1.default)();
    const handleSelect = (0, react_1.useCallback)((event) => {
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
    return (react_1.default.createElement("section", { className: "sb-lesson-steps" },
        react_1.default.createElement("div", { className: "tutorial-steps" }, steps.map((_step, index) => (react_1.default.createElement(react_1.Fragment, { key: _step.title + index },
            react_1.default.createElement("div", { className: (0, classnames_1.default)("tutorial-steps__item", {
                    _active: (step === null || step === void 0 ? void 0 : step.title) === _step.title || isMobile,
                }) },
                !isMobile && (react_1.default.createElement(react_waypoint_1.Waypoint, { topOffset: "10%", bottomOffset: "85%", fireOnRapidScroll: true, onEnter: () => setStep(_step) })),
                react_1.default.createElement("div", { className: "inner-block", onClick: (e) => handleSelect(e) },
                    react_1.default.createElement("h4", { className: "inner-title" }, _step.title),
                    _step.description && react_1.default.createElement("div", null, _step.description)),
                _step.comment && (react_1.default.createElement("div", { className: "inner-comment" }, _step.comment))),
            isMobile && (react_1.default.createElement(LessonSectionPreview_1.default, { className: "tutorial-steps-preview-minify", steps: steps, step: _step, minify: true })))))),
        !isMobile && (react_1.default.createElement(LessonSectionPreview_1.default, { className: "tutorial-steps-preview", steps: steps, step: step }))));
};
exports.default = LessonSectionSteps;
//# sourceMappingURL=LessonSectionSteps.js.map