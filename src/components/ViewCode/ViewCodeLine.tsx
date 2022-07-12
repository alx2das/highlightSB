import React, { FC } from "react";
import cn from "classnames";

import { Marker } from "./types";

interface Props {
	content: string;
	number: number;
	marker: Marker;
	hideNumber: boolean;
}

const ViewCodeLine: FC<Props> = ({ content, number, marker, hideNumber }) => (
	<span
		data-line={number}
		className={cn("vc-line", {
			_added: marker.added && !marker.removed,
			_removed: !marker.added && marker.removed,
			_update: marker.added && marker.removed,
		})}
	>
		{!hideNumber && <span className="vc-line-number">{number}</span>}
		<span
			className="vc-line-content"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	</span>
);

export default ViewCodeLine;
