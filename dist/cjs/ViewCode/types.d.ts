export interface ViewCodeProps {
    nextValue: string;
    prevValue?: string;
    startNumber?: number;
    hideNumber?: boolean;
    minify?: boolean;
    minifyCountSpace?: number;
}
export interface ViewCodeLineProps {
    number: number;
    content: string;
    marker: Marker;
    hideNumber: boolean;
}
export declare type Marker = {
    added?: true;
    removed?: true;
    updated?: true;
    minify_p?: true;
    minify_n?: true;
};
export declare type MapMarkers = {
    [lineNumber: string]: Marker | undefined;
};
export declare type IndexesData = {
    indexes: number[];
    markers: MapMarkers;
};
