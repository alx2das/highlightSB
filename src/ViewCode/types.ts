export interface ViewCodeProps {
	nextValue: string;
	prevValue?: string;
	startNumber?: number;
	hideNumber?: boolean;
}

export interface ViewCodeLineProps {
	number: number;
	content: string;
	marker: Marker;
	hideNumber: boolean;
}

export type Marker = {
	added?: true;
	removed?: true;
	updated?: true;
	minify_p?: true;
	minify_n?: true;
};

export type MapMarkers = {
	[lineNumber: string]: Marker | undefined;
};

export type IndexesData = {
	indexes: number[];
	markers: MapMarkers;
};
