import type { FC } from "react";
import type { StepType } from "./types";

import React, { useCallback, useState } from "react";
import cn from "classnames";
import { Waypoint } from "react-waypoint";
import LessonSource from "./LessonSource";
import ViewCode from "../ViewCode";

const LessonSteps: FC<{ steps: StepType[] }> = ({ steps }) => {
	const firstStep = steps.find(({ id }) => Boolean(id)) || { id: "" };
	const [stepId, setStepId] = useState<string>(firstStep?.id);

	const { prevStep, nextStep } = steps.reduce(
		(accum: { prevStep?: StepType; nextStep?: StepType }, step, index) => {
			if (stepId === step.id && !accum.nextStep) {
				accum.prevStep = steps[index - 1];
				accum.nextStep = step;
			}

			return accum;
		},
		{ prevStep: undefined, nextStep: undefined },
	);

	const handleSelectStep = useCallback(
		(stepId) => () => {
			// TODO надо проскролить страницу к элементу

			setStepId(stepId);
		},
		[],
	);

	return (
		<section className="sb-lesson-steps">
			<div className="tutorial-steps">
				{steps.map((step) => (
					<div
						key={step.id}
						className={cn("tutorial-steps__item", {
							_active: stepId === step.id,
						})}
					>
						<Waypoint
							topOffset="30%"
							bottomOffset="60%"
							onEnter={() => setStepId(step.id)}
						/>

						<div className="inner-block" onClick={handleSelectStep(step.id)}>
							<h4 className="inner-title">{step.title}</h4>
							{step.description && <div>{step.description}</div>}
						</div>

						{step.comment && (
							<div className="inner-comment">{step.comment}</div>
						)}
					</div>
				))}
			</div>

			<div className="tutorial-steps-preview">
				{nextStep?.fileName && (
					<div className="tutorial-steps-preview__name">
						{nextStep.fileName}
					</div>
				)}

				{nextStep?.source && (
					<div className="section-source">
						<LessonSource {...nextStep.source} />
					</div>
				)}

				{nextStep?.fileContent && (
					<div className="tutorial-steps-preview__code">
						<ViewCode
							prevValue={prevStep?.fileContent}
							nextValue={nextStep.fileContent}
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default LessonSteps;
