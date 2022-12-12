import type { FC } from "react";
import type { LessonSectionAssetProps, Step } from "./types";

import React, { useMemo } from "react";
import cn from "classnames";
import LessonSectionSource from "./LessonSectionSource";
import ViewCode from "../ViewCode/ViewCode";
import useResponsive from "../Responsive";

import "./LessonSectionAsset.styl";

const LessonSectionAsset: FC<LessonSectionAssetProps> = (props) => {
	const { step, steps, className, minify, showPreview, onShowPreview } =
		props;
	const { isMobile, isTablet } = useResponsive();

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

	const canShowPreview = Boolean(nextStep?.previewUrl);

	return (
		<div className={className}>
			<div>
				<div className="tutorial-steps-asset__name">
					{nextStep?.fileName && <span>{nextStep.fileName}</span>}

					{nextStep?.fileContent && (
						<span
							className={cn("tutorial-steps-preview__button", {
								open: !showPreview,
								close: !!showPreview,
								hide: !canShowPreview,
							})}
							onClick={onShowPreview}
						>
							{canShowPreview ? "Превью" : "Нет превью"}
						</span>
					)}
				</div>

				<div
					className={cn("tutorial-steps-preview__content", {
						show: canShowPreview && showPreview,
						responsive: isMobile || isTablet,
					})}
				>
					<div className="preview__content-asset">
						<img
							className="preview__content-asset__img"
							src={nextStep?.previewUrl}
							alt={nextStep?.title || nextStep?.fileName || ""}
						/>
					</div>
				</div>
			</div>

			<LessonSectionSource
				alt={nextStep?.title || nextStep?.fileName || ""}
				sourceNode={nextStep?.sourceNode}
				sourceUrl={nextStep?.sourceUrl}
				sourceType={nextStep?.sourceType}
			/>

			<div>
				{nextStep?.fileContent && (
					<div className="tutorial-steps-asset__code">
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

export default LessonSectionAsset;
