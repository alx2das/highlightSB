import React, { FC } from "react";
import cn from "classnames";

interface ViewCodeLineProps {
	line: string;
	number: number;
	marker: {
		added?: boolean;
		removed?: boolean;
	};
}

const ViewCodeLine: FC<ViewCodeLineProps> = ({ line, number, marker }) => (
	<span
		key={line}
		className={cn("vc-line", {
			_added: marker.added && !marker.removed,
			_removed: !marker.added && marker.removed,
			_update: marker.added && marker.removed,
		})}
	>
		<span className="vc-line-number">{number}</span>
		<span
			className="vc-line-content"
			dangerouslySetInnerHTML={{ __html: line }}
		/>
	</span>
);

export default ViewCodeLine;
