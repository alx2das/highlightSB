import type { FC } from "react";
import type { LessonSectionPreviewProps, Step } from "./types";

import React, { useMemo } from "react";
import cn from "classnames";
import LessonSectionSource from "./LessonSectionSource";
import ViewCode from "../ViewCode/ViewCode";
import "./LessonSectionPreview.styl";

const LessonSectionPreview: FC<LessonSectionPreviewProps> = (props) => {
	const { step, steps, className, minify, showPreview, onShowPreview } = props;

	const { prevStep, nextStep } = useMemo<{
		nextStep?: Step;
		prevStep?: Step;
	}>(() => {
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

	const isPreview = !!(
		nextStep?.sourceNode ||
		nextStep?.sourceUrl ||
		nextStep?.sourceType
	);
	const preview =
		(Boolean(onShowPreview) ? showPreview : true) || !nextStep?.fileContent;

	return (
		<div className={className}>
			<div>
				<div className="tutorial-steps-preview__name">
					{nextStep?.fileName && <span>{nextStep.fileName}</span>}

					{nextStep?.fileContent && onShowPreview && (
						<span
							className={cn("preview_btn", {
								hide: !isPreview,
								open: !showPreview,
								close: showPreview,
							})}
							onClick={onShowPreview}
						>
							{isPreview ? "Превью" : "Нет превью"}
						</span>
					)}
				</div>
			</div>

			{preview && (
				<LessonSectionSource
					alt={nextStep?.title || nextStep?.fileName || ""}
					sourceNode={nextStep?.sourceNode}
					sourceUrl={nextStep?.sourceUrl}
					sourceType={nextStep?.sourceType}
				/>
			)}

			<div>
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
