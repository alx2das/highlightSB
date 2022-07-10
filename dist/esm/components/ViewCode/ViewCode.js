import React, { memo } from "react";
import { searchMarkers } from "./markers";
import { lineNumbers } from "./lines";
import ViewCodeLine from "./ViewCodeLine";
import "./ViewCode.css";
const ViewCode = (props) => {
    const { prevValue, value, startNumber } = props;
    const number = (startNumber ? startNumber : 1) || 1;
    const markers = searchMarkers(prevValue, value);
    const codeHTML = lineNumbers(value);
    return (React.createElement("div", { className: "view-code" },
        React.createElement("pre", null,
            React.createElement("code", null, codeHTML.map((line, index) => (React.createElement(ViewCodeLine, { key: line + index, line: line, number: number + index, marker: markers[index] || {} })))))));
};
export default memo(ViewCode);
//# sourceMappingURL=ViewCode.js.map