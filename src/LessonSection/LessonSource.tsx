import type { FC } from "react";
import type { SourceType } from "./types";

import React from "react";

const LessonSource: FC<SourceType> = (props) => {
	const { url, type, node } = props;

	return (
		<>
			{node}

			{Boolean(url && type) && (
				<>
					{type === "image" && <img src={url} alt="lesson-section-source" />}

					{type === "video" && (
						<video width="100%" height="auto" autoPlay muted playsInline>
							<source src={url} type="video/mp4" />
						</video>
					)}
				</>
			)}
		</>
	);
};

export default LessonSource;
