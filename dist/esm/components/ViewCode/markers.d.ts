export declare enum TYPE_DIFF {
    ADDED = "added",
    REMOVED = "removed"
}
export declare type Markers = {
    [number: number]: {
        added?: boolean;
        removed?: boolean;
    };
};
export declare const searchMarkers: (prevValue?: string, newValue?: string) => Markers;
