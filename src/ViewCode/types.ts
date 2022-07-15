export interface ViewCodeProps {
	nextValue: string;
	prevValue?: string;
	language?: string | string[];
	startNumber?: number;
	hideNumber?: boolean;
	markers?: number[];
	minify?: boolean;
	showLineMinify: number[];
}

export interface ViewCodeLineProps {
	index: number;
	number: number;
	content: string;
	marker: Marker;
	hideNumber?: boolean;
	minify?: boolean;
	showLineMinify?: string[];
}

export type Marker = {
	added?: boolean;
	removed?: boolean;
	updated?: boolean;
};

export type Markers = {
	[line: number]: Marker | undefined;
};
