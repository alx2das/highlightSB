export declare type Marker = {
    added?: boolean;
    removed?: boolean;
};
export declare type Markers = {
    [line: number]: Marker | undefined;
};
