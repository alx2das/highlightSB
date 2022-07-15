import type { FC } from "react";
import type { ViewCodeProps } from "./types";

import React from "react";
import ViewCodeLine from "./ViewCodeLine";
import { searchMarkers, lineNumbering } from "./helpers";

import "./ViewCode.styl";

const ViewCode: FC<ViewCodeProps> = (props) => {
	const {
		nextValue,
		prevValue = undefined,
		language = "swift",
		startNumber = 1,
		hideNumber = false,
		markers = undefined,
	} = props;

	const _markers = searchMarkers({ nextValue, prevValue, language, markers });
	const _htmlLines = lineNumbering({ nextValue });

	return (
		<div className="view-code">
			<pre>
				<code>
					{_htmlLines.map((content, index) => (
						<ViewCodeLine
							key={`${index}-line`}
							index={index}
							number={startNumber + index}
							content={content}
							marker={_markers[index] || {}}
							hideNumber={hideNumber}
						/>
					))}
				</code>
			</pre>
		</div>
	);
};

export default ViewCode;
