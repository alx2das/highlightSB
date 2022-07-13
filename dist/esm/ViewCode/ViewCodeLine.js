import React from "react";
import cn from "classnames";
const ViewCodeLine = ({ content, number, marker, hideNumber }) => {
    const markerClassNames = cn({
        _added: marker.added && !marker.removed,
        _removed: !marker.added && marker.removed,
        _updated: marker.added && marker.removed,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: cn("vc-line _number", markerClassNames) }, !hideNumber && number),
        React.createElement("span", { className: cn("vc-line _content", markerClassNames), dangerouslySetInnerHTML: { __html: content } })));
};
export default ViewCodeLine;
//# sourceMappingURL=ViewCodeLine.js.map