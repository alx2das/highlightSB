import React from "react";
const LessonSectionSource = (props) => {
    const { alt, sourceUrl, sourceType, sourceNode, } = props;
    if (sourceNode) {
        return React.createElement(React.Fragment, null, sourceNode);
    }
    if (sourceUrl && sourceType === "image") {
        return (React.createElement("div", { className: "tutorial-steps-preview__image" },
            React.createElement("img", { src: sourceUrl, alt: alt })));
    }
    if (sourceUrl && sourceType === "video") {
        return (React.createElement("div", { className: "tutorial-steps-preview__video" },
            React.createElement("video", { width: "100%", height: "auto", autoPlay: true, muted: true, playsInline: true },
                React.createElement("source", { src: sourceUrl, type: "video/mp4" }))));
    }
    return null;
};
export default LessonSectionSource;
//# sourceMappingURL=LessonSectionSource.js.map