import type { FC } from "react";
import type { LessonSectionStepsProps, Step } from "./types";

import React, { useState, useMemo, useCallback } from "react";
import cn from "classnames";
import CSSMotion from "rc-motion";
import { Waypoint } from "react-waypoint";
import ViewCode from "../ViewCode/ViewCode";
import LessonSectionSource from "./LessonSectionSource";

const LessonSectionSteps: FC<LessonSectionStepsProps> = (props) => {
	const { steps } = props;

	const [step, setStep] = useState<Step | undefined>(steps[0]);

	const { nextStep, prevStep } = useMemo(() => {
		const sIndex = steps.findIndex((_step) => _step === step);
		const prevStep = (sIndex > 0 ? steps.slice(0, sIndex) : []).reduceRight(
			(accum: null | Step, _step) => {
				if (!accum && _step.fileName === step?.fileName) accum = _step;
				return accum;
			},
			null,
		);

		return {
			nextStep: step || undefined,
			prevStep: prevStep || undefined,
		};
	}, [steps, step]);

	const handleSelect = useCallback(
		(event: React.MouseEvent<HTMLDivElement>, step: Step) => {
			const position = event.currentTarget.getBoundingClientRect();
			const height = (window.innerHeight / 100) * 10;

			window.scrollTo({
				top: position.top + window.scrollY - height,
				behavior: "smooth",
			});
		},
		[],
	);

	return (
		<section className="sb-lesson-steps">
			<div className="tutorial-steps">
				{steps.map((_step, index) => (
					<div
						key={_step.title + index}
						className={cn("tutorial-steps__item", {
							_active: step?.title === _step.title,
						})}
					>
						<Waypoint
							topOffset="10%"
							bottomOffset="85%"
							fireOnRapidScroll
							onEnter={() => setStep(_step)}
						/>

						<div
							className="inner-block"
							onClick={(e) => handleSelect(e, _step)}
						>
							<h4 className="inner-title">{_step.title}</h4>
							{_step.description && <div>{_step.description}</div>}
						</div>

						{_step.comment && (
							<div className="inner-comment">{_step.comment}</div>
						)}
					</div>
				))}
			</div>

			<div className="tutorial-steps-preview">
				<CSSMotion
					visible={Boolean(Object.keys(nextStep || {}).length)}
					motionName="motion-tutorial-steps-preview"
				>
					{({ className: motionClassName, style: motionStyle }) => (
						<div className={motionClassName} style={motionStyle}>
							{nextStep?.fileName && (
								<div className="tutorial-steps-preview__name">
									{nextStep.fileName}
								</div>
							)}

							<LessonSectionSource
								alt={nextStep?.title || ""}
								sourceNode={nextStep?.sourceNode}
								sourceUrl={nextStep?.sourceUrl}
								sourceType={nextStep?.sourceType}
							/>

							{nextStep?.fileContent && (
								<div className="tutorial-steps-preview__code">
									<ViewCode
										prevValue={prevStep?.fileContent}
										nextValue={nextStep.fileContent}
									/>
								</div>
							)}
						</div>
					)}
				</CSSMotion>
			</div>
		</section>
	);
};

export default LessonSectionSteps;
