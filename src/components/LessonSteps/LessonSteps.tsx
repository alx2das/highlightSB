import React, { useState, FC } from "react";
import cn from "classnames";

import { FilePreview } from "../FilePreview";
import "./style.css";


export type Step = {
	name: string;
	description: string;
	comment: string;
	code_title: string;
	code: string;
	image_video_url: string;
};

export interface LessonStepsProps {
	steps: Step[]
}

export const LessonSteps: FC<LessonStepsProps> = (props) => {
	const {
		steps
	} = props;

	const [active] = useState(0);

	return (
		<section className="page-section _steps">
			<div className="steps">
				{steps.map((step, index) => (
					<div key={`step-${index}`} className={cn("steps-item", { _active: active === index })}>
						<div className="inner-block">
							<h4 className="inner-title">{step.name}</h4>
							{step.description && (
								<div>{step.description}</div>
							)}
						</div>
						{step.comment && (
							<div className="inner-comment">{step.comment}</div>
						)}
					</div>
				))}
			</div>

			<FilePreview
				nextValue="123"
			/>
		</section>
	);
};
