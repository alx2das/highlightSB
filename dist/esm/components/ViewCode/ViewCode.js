import React from "react";
import { searchMarkers, lineNumbering } from "./helpers";
import ViewCodeLine from "./ViewCodeLine";
import "./style.css";
export const ViewCode = (props) => {
    const { nextValue, prevValue = "", startNumber = 1, hideNumber = false, } = props;
    const markers = searchMarkers(prevValue, nextValue);
    const htmlLines = lineNumbering(nextValue);
    return (React.createElement("div", { className: "view-code" },
        React.createElement("pre", null,
            React.createElement("code", null, htmlLines.map((line, index) => (React.createElement(ViewCodeLine, { key: `${index}-line`, content: line, number: startNumber + index, marker: markers[index] || {}, hideNumber: Boolean(hideNumber) })))))));
};
//# sourceMappingURL=ViewCode.js.map