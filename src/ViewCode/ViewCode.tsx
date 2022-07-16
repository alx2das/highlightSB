import type { FC } from "react";
import type { ViewCodeProps, IndexesData } from "./types";

import React, { useMemo } from "react";
import { searchMarkers, lineNumbering, indexesMarkedLines } from "./utils";
import ViewCodeLine from "./ViewCodeLine";

import "highlight.js/styles/github.css";
import "./styles.styl";

const ViewCode: FC<ViewCodeProps> = (props) => {
	const { nextValue, prevValue, startNumber = 1, hideNumber } = props;

	const isMobile = true;

	const htmlLines = useMemo<string[]>(() => {
		return lineNumbering(nextValue);
	}, [nextValue]);

	const { indexes, markers } = useMemo<IndexesData>(() => {
		const markers = searchMarkers(nextValue, prevValue);
		const indexes = htmlLines.map((_, index) => index);

		if (isMobile && Object.keys(markers).length) {
			return indexesMarkedLines(markers, htmlLines.length, 2);
		}

		return { indexes, markers };
	}, [isMobile, htmlLines, nextValue, prevValue]);

	return (
		<div className="view-code">
			<pre>
				<code>
					{indexes.map((i) => (
						<ViewCodeLine
							key={htmlLines[i] + i}
							number={startNumber + i}
							content={htmlLines[i]}
							marker={markers[i] || {}}
							hideNumber={Boolean(hideNumber)}
						/>
					))}
				</code>
			</pre>
		</div>
	);
};

export default ViewCode;
