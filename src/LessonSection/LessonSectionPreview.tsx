import type { FC } from "react";
import type { LessonSectionPreviewProps, Step } from "./types";

import React, { useMemo } from "react";
import LessonSectionSource from "./LessonSectionSource";
import ViewCode from "../ViewCode/ViewCode";

const LessonSectionPreview: FC<LessonSectionPreviewProps> = (props) => {
	const {
		step,
		steps,

		className,
		minify,
	} = props;

	const { prevStep, nextStep } = useMemo(() => {
		if (!step) {
			return { nextStep: undefined, prevStep: undefined };
		}

		const stepIndex = steps.findIndex((s) => s === step);
		const prevStep = (
			stepIndex > 0 ? steps.slice(0, stepIndex) : []
		).reduceRight((prevStep: Step | undefined, s: Step) => {
			if (!prevStep && s.fileName === step.fileName) {
				prevStep = s;
			}

			return prevStep;
		}, undefined);

		return { nextStep: step, prevStep: prevStep };
	}, [steps, step]);

	console.log(prevStep, nextStep);

	return (
		<div className={className}>
			<div>
				{nextStep?.fileName && (
					<div className="tutorial-steps-preview__name">
						{nextStep.fileName}
					</div>
				)}

				<LessonSectionSource
					alt={nextStep?.title || nextStep?.fileName || ""}
					sourceNode={nextStep?.sourceNode}
					sourceUrl={nextStep?.sourceUrl}
					sourceType={nextStep?.sourceType}
				/>

				{nextStep?.fileContent && (
					<div className="tutorial-steps-preview__code">
						<ViewCode
							prevValue={prevStep?.fileContent}
							nextValue={nextStep?.fileContent}
							minify={minify}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default LessonSectionPreview;
