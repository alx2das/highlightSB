import type { FC } from "react";
import type { ViewCodeLineProps } from "./types";

import React from "react";
import cn from "classnames";


const ViewCodeLine: FC<ViewCodeLineProps> = (props) => {
    const {
        number,
        content,
        marker,
        hideNumber
    } = props;

    const markerClassNames = cn({
        _added: marker.added && !marker.removed,
        _removed: !marker.added && marker.removed,
        _updated: (marker.added && marker.removed) || marker.updated,
        _minify_prev: marker.minify_p,
        _minify_next: marker.minify_n,
    });

    return (
        <>
            <span className={cn("vc-line _number", markerClassNames)}>
                {!hideNumber && number}
            </span>
            <span
                className={cn("vc-line _content", markerClassNames)}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </>
    );
};

export default ViewCodeLine;