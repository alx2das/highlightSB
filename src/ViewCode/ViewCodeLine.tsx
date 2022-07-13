import React, { FC } from "react";
import cn from "classnames";

import { Marker } from "./types";

interface Props {
	content: string;
	number: number;
	marker: Marker;
	hideNumber: boolean;
}

const ViewCodeLine: FC<Props> = ({ content, number, marker, hideNumber }) => {
	const markerClassNames = cn({
		_added: marker.added && !marker.removed,
		_removed: !marker.added && marker.removed,
		_updated: marker.added && marker.removed,
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
