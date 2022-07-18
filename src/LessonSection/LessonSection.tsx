import type { FC } from "react";
import type { LessonSectionProps } from "./types";

import React from "react";
import LessonSectionSource from "./LessonSectionSource";
import LessonSectionSteps from "./LessonSectionSteps";

import "./styles.styl";

const LessonSection: FC<LessonSectionProps> = (props) => {
	const {
		title,
		subtitle,
		description,

		sourceUrl,
		sourceType,
		sourceNode,

		steps,
	} = props;

	return (
		<>
			<section className="sb-lesson-section">
				<div className="section-info">
					<div className="inner-title">{title}</div>
					<div className="inner-subtitle">{subtitle}</div>

					{description && <div className="inner-description">{description}</div>}
				</div>

				<div className="section-source">
					<LessonSectionSource
						alt={subtitle}
						sourceUrl={sourceUrl}
						sourceType={sourceType}
						sourceNode={sourceNode}
					/>
				</div>
			</section>

			{Boolean(steps?.length) && <LessonSectionSteps steps={steps} />}
		</>
	);
};

export default LessonSection;
