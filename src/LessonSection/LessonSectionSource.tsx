import type { FC } from "react";
import type { LessonSectionSourceProps } from "./types";

import React from "react";

const LessonSectionSource: FC<LessonSectionSourceProps> = (props) => {
	const {
		alt,

		sourceUrl,
		sourceType,
		sourceNode,
	} = props;

	if (sourceNode) {
		return <>{sourceNode}</>;
	}

	if (sourceUrl && sourceType === "image") {
		return (
			<div className="tutorial-steps-preview__image">
				<img src={sourceUrl} alt={alt} />
			</div>
		);
	}

	if (sourceUrl && sourceType === "video") {
		return (
			<div className="tutorial-steps-preview__video">
				<video width="100%" height="auto" autoPlay muted playsInline>
					<source src={sourceUrl} type="video/mp4" />
				</video>
			</div>
		);
	}

	return null;
};

export default LessonSectionSource;
