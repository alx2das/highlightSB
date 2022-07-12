import React from "react";
import cn from "classnames";
const ViewCodeLine = ({ content, number, marker, hideNumber }) => (React.createElement("span", { "data-line": number, className: cn("vc-line", {
        _added: marker.added && !marker.removed,
        _removed: !marker.added && marker.removed,
        _update: marker.added && marker.removed,
    }) },
    !hideNumber && React.createElement("span", { className: "vc-line-number" }, number),
    React.createElement("span", { className: "vc-line-content", dangerouslySetInnerHTML: { __html: content } })));
export default ViewCodeLine;
//# sourceMappingURL=ViewCodeLine.js.map