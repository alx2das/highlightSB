import React, { memo, FC } from "react";

import { searchMarkers } from "./markers";
import { lineNumbers } from "./lines";
import ViewCodeLine from "./ViewCodeLine";

import "./ViewCode.css";

export interface ViewCodeProps {
	prevValue: string;
	value: string;
	startNumber?: number;
}

const ViewCode: FC<ViewCodeProps> = (props) => {
	const { prevValue, value, startNumber } = props;

	const number = (startNumber ? startNumber : 1) || 1;
	const markers = searchMarkers(prevValue, value);
	const codeHTML = lineNumbers(value);

	return (
		<div className="view-code">
			<pre>
				<code>
					{codeHTML.map((line, index) => (
						<ViewCodeLine key={line + index} line={line} number={number + index} marker={markers[index] || {}} />
					))}
				</code>
			</pre>
		</div>
	);
};

export default memo(ViewCode);
