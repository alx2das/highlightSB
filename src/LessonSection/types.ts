import { ReactNode } from "react";

export type SectionType = {
	title: string;
	subtitle: string;
	description: string | ReactNode;
	source?: SourceType;
	steps?: StepType[];
};

export type SourceType = {
	url?: string;
	type?: string;
	node?: ReactNode;
};

export type StepType = {
	id: string;
	title: string;
	description?: string | ReactNode;
	comment?: string | ReactNode;

	fileName?: string;
	fileContent?: string;
	source?: SourceType;
};
