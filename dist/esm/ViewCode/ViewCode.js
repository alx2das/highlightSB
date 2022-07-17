import React, { useMemo } from "react";
import { searchMarkers, lineNumbering, indexesMarkedLines } from "./utils";
import ViewCodeLine from "./ViewCodeLine";
import "highlight.js/styles/github.css";
import "./styles.styl";
const ViewCode = (props) => {
    const { nextValue, prevValue, startNumber = 1, hideNumber, minify, minifyCountSpace, } = props;
    const isMobile = minify;
    const count = (minifyCountSpace && parseInt("" + minifyCountSpace)) || 2;
    const htmlLines = useMemo(() => {
        return lineNumbering(nextValue);
    }, [nextValue]);
    const { indexes, markers } = useMemo(() => {
        const markers = searchMarkers(nextValue, prevValue);
        const indexes = htmlLines.map((_, index) => index);
        if (isMobile && Object.keys(markers).length) {
            return indexesMarkedLines(markers, htmlLines.length, count);
        }
        return { indexes, markers };
    }, [isMobile, htmlLines, nextValue, prevValue, count]);
    return (React.createElement("div", { className: "view-code" },
        React.createElement("pre", null,
            React.createElement("code", null, indexes.map((i) => (React.createElement(ViewCodeLine, { key: htmlLines[i] + i, number: startNumber + i, content: htmlLines[i], marker: markers[i] || {}, hideNumber: Boolean(hideNumber) })))))));
};
export default ViewCode;
//# sourceMappingURL=ViewCode.js.map