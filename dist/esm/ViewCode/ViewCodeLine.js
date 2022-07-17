import React from "react";
import cn from "classnames";
const ViewCodeLine = (props) => {
    const { number, content, marker, hideNumber } = props;
    const markerClassNames = cn({
        _added: marker.added && !marker.removed,
        _removed: !marker.added && marker.removed,
        _updated: (marker.added && marker.removed) || marker.updated,
        _minify_prev: marker.minify_p,
        _minify_next: marker.minify_n,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: cn("vc-line _number", markerClassNames) }, !hideNumber && number),
        React.createElement("span", { className: cn("vc-line _content", markerClassNames), dangerouslySetInnerHTML: { __html: content } })));
};
export default ViewCodeLine;
//# sourceMappingURL=ViewCodeLine.js.map