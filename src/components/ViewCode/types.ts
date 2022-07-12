export type Marker = {
	added?: boolean;
	removed?: boolean;
};

export type Markers = {
	[line: number]: Marker | undefined;
};
