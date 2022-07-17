import { ReactNode } from "react";

export interface LessonSectionProps {
	title: string;
	subtitle: string;
	description?: string | ReactNode;

	sourceUrl?: string;
	sourceType?: string;
	sourceNode?: ReactNode;

	steps: Step[];
}

export interface LessonSectionSourceProps {
	alt: string;

	sourceUrl?: string;
	sourceType?: string;
	sourceNode?: ReactNode;
}

export interface LessonSectionStepsProps {
	steps: Step[];
}

export interface LessonSectionPreviewProps {
	className?: string;

	title?: string;
	fileName?: string;

	sourceUrl?: string;
	sourceType?: string;
	sourceNode?: ReactNode;

	prevValue?: string;
	nextValue?: string;

	minify?: boolean;
}

export type Step = {
	title: string;
	description?: string | ReactNode;
	comment?: string | ReactNode;

	sourceUrl?: string;
	sourceType?: string;
	sourceNode?: ReactNode;

	fileName?: string;
	fileContent?: string;
};
