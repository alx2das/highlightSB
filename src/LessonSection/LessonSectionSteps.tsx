import type { FC } from "react";
import type { LessonSectionStepsProps, Step } from "./types";

import React, { useState, useCallback, Fragment } from "react";
import cn from "classnames";
import { Waypoint } from "react-waypoint";
import LessonSectionPreview from "./LessonSectionPreview";
import useResponsive from "../Responsive";

import "./LessonSectionSteps.styl";

const LessonSectionSteps: FC<LessonSectionStepsProps> = (props) => {
	const { steps } = props;
	const [step, setStep] = useState<Step | undefined>(steps[0]);
	const { isMobile, isTablet } = useResponsive();

	const isResponsive = isMobile || isTablet;

	const handleSelect = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (isResponsive) {
				return;
			}

			const position = event.currentTarget.getBoundingClientRect();
			const height = (window.innerHeight / 100) * 10;

			window.scrollTo({
				top: position.top + window.scrollY - height,
				behavior: "smooth",
			});
		},
		[isResponsive]
	);

	return (
		<div className="sb-lesson-steps">
			<div className="tutorial-steps">
				{steps.map((_step, index) => (
					<Fragment key={_step.title + index}>
						<div
							className={cn("tutorial-steps__item", {
								_active: step?.title === _step.title || isResponsive,
							})}
						>
							{!isResponsive && (
								<Waypoint
									topOffset="10%"
									bottomOffset="85%"
									fireOnRapidScroll
									onEnter={() => setStep(_step)}
								/>
							)}

							<div className="inner-block" onClick={(e) => handleSelect(e)}>
								<div className="inner-title">{_step.title}</div>
								{_step.description && (
									<div className="inner-description">{_step.description}</div>
								)}
							</div>

							{_step.comment && (
								<div className="inner-comment">{_step.comment}</div>
							)}

							{isResponsive && (
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

			{!isResponsive && (
				<LessonSectionPreview
					className="tutorial-steps-preview"
					steps={steps}
					step={step}
				/>
			)}
		</div>
	);
};

export default LessonSectionSteps;
