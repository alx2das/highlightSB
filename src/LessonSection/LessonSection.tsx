import type { FC } from "react";
import type { SectionType } from "./types";

import React from "react";
import LessonSource from "./LessonSource";
import LessonSteps from "./LessonSteps";

import "./style.styl";

const LessonSection: FC<SectionType> = (props) => {
	const { title, subtitle, description, source = {}, steps = [] } = props;

	return (
		<>
			<section className="sb-lesson-section">
				<div className="section-info">
					{title && <h4 className="info__title">{title}</h4>}
					{subtitle && <h2 className="info__subtitle">{subtitle}</h2>}
					{description && (
						<div className="info__description">{description}</div>
					)}
				</div>

				<div className="section-source">
					<LessonSource {...source} />
				</div>
			</section>

			{Boolean(steps?.length) && <LessonSteps steps={steps} />}
		</>
	);
};

export default LessonSection;
