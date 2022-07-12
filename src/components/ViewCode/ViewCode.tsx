import React, { FC } from "react";

import { searchMarkers, lineNumbering } from "./helpers";
import ViewCodeLine from "./ViewCodeLine";
import "./style.css";


export interface ViewCodeProps {
    nextValue: string;
    prevValue?: string;
    startNumber?: number;
    hideNumber?: string;
}

const ViewCode: FC<ViewCodeProps> = props => {
    const {
        nextValue,
        prevValue = "",
        startNumber = 1,
        hideNumber = false
    } = props;

    const markers = searchMarkers(prevValue, nextValue);
    const htmlLines = lineNumbering(nextValue);

    return (
        <div className="view-code">
            <pre>
                <code>
                    {htmlLines.map((line, index) => (
                        <ViewCodeLine
                            key={`${index}-line`}
                            content={line}
                            number={startNumber + index}
                            marker={markers[index] || {}}
                            hideNumber={Boolean(hideNumber)}
                        />
                    ))}
                </code>
            </pre>
        </div>
    );
};

export default ViewCode;