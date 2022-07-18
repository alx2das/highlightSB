import type { FC } from "react";
import type { LessonSectionStepsProps, Step } from "./types";

import React, { useState, useCallback, Fragment } from "react";
import cn from "classnames";
import { Waypoint } from "react-waypoint";
import LessonSectionPreview from "./LessonSectionPreview";
import useResponsive from "../Responsive";

const LessonSectionSteps: FC<LessonSectionStepsProps> = (props) => {
	const { steps } = props;
	const [step, setStep] = useState<Step | undefined>(steps[0]);
	const { isMobile } = useResponsive();

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
		[isMobile]
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

							{isMobile && (
								<LessonSectionPreview
									className="tutorial-steps-preview _small"
									steps={steps}
									step={_step}
									minify
								/>
							)}
						</div>
					</Fragment>
				))}
			</div>

			{!isMobile && (
				<LessonSectionPreview
					className="tutorial-steps-preview"
					steps={steps}
					step={step}
				/>
			)}
		</section>
	);
};

export default LessonSectionSteps;
