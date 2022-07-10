import React from "react";
import cn from "classnames";
const ViewCodeLine = ({ line, number, marker }) => (React.createElement("span", { key: line, className: cn("vc-line", {
        _added: marker.added && !marker.removed,
        _removed: !marker.added && marker.removed,
        _update: marker.added && marker.removed,
    }) },
    React.createElement("span", { className: "vc-line-number" }, number),
    React.createElement("span", { className: "vc-line-content", dangerouslySetInnerHTML: { __html: line } })));
export default ViewCodeLine;
//# sourceMappingURL=ViewCodeLine.js.map