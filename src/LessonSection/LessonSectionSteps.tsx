import type { FC } from "react";
import type { LessonSectionStepsProps, Step } from "./types";

import React, { useState, useCallback, Fragment } from "react";
import cn from "classnames";
import { Waypoint } from "react-waypoint";

import LessonSectionPreview from "./LessonSectionPreview";
import useResponsive from "./useResponsive";
import useDataStep from "./useDataStep";

const LessonSectionSteps: FC<LessonSectionStepsProps> = (props) => {
	const { steps } = props;
	const [step, setStep] = useState<Step | undefined>(steps[0]);

	const { isMobile } = useResponsive();
	const { nextStep, prevStep } = useDataStep(steps, step);

	const handleSelect = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (isMobile) {
				return;
			}

			const position = event.currentTarget.getBoundingClientRect();
			const height = (window.innerHeight / 100) * 10;

			window.scrollTo({
				top: position.top + window.scrollY - height,
				behavior: "smooth",
			});
		},
		[isMobile],
	);

	return (
		<section className="sb-lesson-steps">
			<div className="tutorial-steps">
				{steps.map((_step, index) => (
					<Fragment key={_step.title + index}>
						<div
							className={cn("tutorial-steps__item", {
								_active: step?.title === _step.title || isMobile,
							})}
						>
							{!isMobile && (
								<Waypoint
									topOffset="10%"
									bottomOffset="85%"
									fireOnRapidScroll
									onEnter={() => setStep(_step)}
								/>
							)}

							<div className="inner-block" onClick={(e) => handleSelect(e)}>
								<h4 className="inner-title">{_step.title}</h4>
								{_step.description && <div>{_step.description}</div>}
							</div>

							{_step.comment && (
								<div className="inner-comment">{_step.comment}</div>
							)}
						</div>

						{isMobile && (
							<LessonSectionPreview
								className=""
								title={_step?.title}
								fileName={_step?.fileName}
								sourceNode={_step?.sourceNode}
								sourceUrl={_step?.sourceUrl}
								sourceType={_step?.sourceType}
								prevValue={prevStep?.fileContent}
								nextValue={_step?.fileContent}
								minify={true}
							/>
						)}
					</Fragment>
				))}
			</div>

			{!isMobile && (
				<LessonSectionPreview
					className="tutorial-steps-preview"
					title={nextStep?.title}
					fileName={nextStep?.fileName}
					sourceNode={nextStep?.sourceNode}
					sourceUrl={nextStep?.sourceUrl}
					sourceType={nextStep?.sourceType}
					prevValue={prevStep?.fileContent}
					nextValue={nextStep?.fileContent}
				/>
			)}
		</section>
	);
};

export default LessonSectionSteps;
