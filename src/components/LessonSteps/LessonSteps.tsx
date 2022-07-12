import React, {useState, useMemo, FC} from "react";
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
	activeStep?: number;
	steps: Step[];
}

export const LessonSteps: FC<LessonStepsProps> = (props) => {
	const { activeStep = 0, steps } = props;

	const [active, setActive] = useState(activeStep);
	const prevValue = useMemo(() => {
		const selectStep = steps[active];
		const prevStep = steps[active - 1] || {};

		if (prevStep && prevStep.code_title === selectStep.code_title) {
			return prevStep.code;
		}

		return "";
	}, [steps, active]);

	return (
		<section className="page-section _steps">
			<div className="steps">
				{steps.map((step, index) => (
					<div
						key={`step-${index}`}
						className={cn("steps-item", { _active: active === index })}
					>
						<div className="inner-block" onClick={() => setActive(index)}>
							<h4 className="inner-title">{step.name}</h4>
							{step.description && <div>{step.description}</div>}
						</div>
						{step.comment && (
							<div className="inner-comment">{step.comment}</div>
						)}
					</div>
				))}
			</div>

			<FilePreview
				fileName={steps[active].code_title}
				image={steps[active].image_video_url}
				prevValue={prevValue}
				nextValue={steps[active].code}
			/>
		</section>
	);
};
