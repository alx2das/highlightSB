import type { FC } from "react";
import type { ViewCodeLineProps } from "./types";

import React from "react";
import cn from "classnames";
import "./ViewCodeLine.styl";

const CodeLinePrev = (
	<span className="vc-line _number _truncate">
		<svg width="16" height="16" viewBox="0 0 16 16">
			<path
				d="M7.823 1.677L4.927 4.573A.25.25 0 005.104 5H7.25v3.236a.75.75 0 101.5 0V5h2.146a.25.25 0 00.177-.427L8.177 1.677a.25.25 0 00-.354 0zM13.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zm-3.75.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM7.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM4 11.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM1.75 11a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
				fill="currentColor"
			></path>
		</svg>
	</span>
);

const CodeLineNext = (
	<span className="vc-line _number _truncate">
		<svg width="16" height="16" viewBox="0 0 16 16">
			<path
				d="M8.177 14.323l2.896-2.896a.25.25 0 00-.177-.427H8.75V7.764a.75.75 0 10-1.5 0V11H5.104a.25.25 0 00-.177.427l2.896 2.896a.25.25 0 00.354 0zM2.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM6 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zM8.25 5a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5zM12 4.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5a.75.75 0 01.75.75zm2.25.75a.75.75 0 000-1.5h-.5a.75.75 0 000 1.5h.5z"
				fill="currentColor"
			></path>
		</svg>
	</span>
);

const ViewCodeLine: FC<ViewCodeLineProps> = (props) => {
	const { number, content, marker, hideNumber } = props;

	const markerClassNames = cn({
		_added: marker.added && !marker.removed,
		_removed: !marker.added && marker.removed,
		_updated: (marker.added && marker.removed) || marker.updated,
	});

	return (
		<>
			{marker.minify_p && CodeLinePrev}
			<span className={cn("vc-line _number", markerClassNames)}>
				{!hideNumber && number}
			</span>
			<span
				className={cn("vc-line _content", markerClassNames)}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			{marker.minify_n && CodeLineNext}
		</>
	);
};

export default ViewCodeLine;
