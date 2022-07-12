import React, { FC } from "react";

import { LessonSteps, Step } from "../LessonSteps";
import "./style.css";

export interface LessonSectionProps {
	title: string;
	subtitle: string;
	description?: string;
	image_video_url?: string;
	steps?: Step[];
}

export const LessonSection: FC<LessonSectionProps> = (props) => {
	const { title, subtitle, description, image_video_url, steps } = props;

	return (
		<>
			<section className="page-section">
				<div className="info">
					{title && <h4 className="info__order-name">{title}</h4>}
					{subtitle && <h2 className="info__title">{subtitle}</h2>}
					{description && <div>{description}</div>}
				</div>

				{image_video_url && (
					<div className="image">
						<img src={image_video_url} alt={title} />
					</div>
				)}
			</section>

			{steps && <LessonSteps steps={steps} />}
		</>
	);
};
