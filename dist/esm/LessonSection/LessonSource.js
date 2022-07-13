import React from "react";
const LessonSource = (props) => {
    const { url, type, node } = props;
    return (React.createElement(React.Fragment, null,
        node,
        Boolean(url && type) && (React.createElement(React.Fragment, null,
            type === "image" && React.createElement("img", { src: url, alt: "lesson-section-source" }),
            type === "video" && (React.createElement("video", { width: "100%", height: "auto", autoPlay: true, muted: true, playsInline: true },
                React.createElement("source", { src: url, type: "video/mp4" })))))));
};
export default LessonSource;
//# sourceMappingURL=LessonSource.js.map