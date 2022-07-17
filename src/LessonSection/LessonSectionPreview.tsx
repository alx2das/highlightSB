import type { FC } from "react";
import type { LessonSectionPreviewProps } from "./types";

import React from "react";
import LessonSectionSource from "./LessonSectionSource";
import ViewCode from "../ViewCode/ViewCode";

const LessonSectionPreview: FC<LessonSectionPreviewProps> = (props) => {
	const {
		className,

		title,
		fileName,

		sourceNode,
		sourceUrl,
		sourceType,

		prevValue,
		nextValue,

		minify,
	} = props;

	return (
		<div className={className}>
			<div>
				{fileName && (
					<div className="tutorial-steps-preview__name">{fileName}</div>
				)}

				<LessonSectionSource
					alt={title || fileName || ""}
					sourceNode={sourceNode}
					sourceUrl={sourceUrl}
					sourceType={sourceType}
				/>

				{nextValue && (
					<div className="tutorial-steps-preview__code">
						<ViewCode
							prevValue={prevValue}
							nextValue={nextValue}
							minify={minify}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default LessonSectionPreview;
