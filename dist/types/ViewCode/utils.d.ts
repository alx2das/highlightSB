import type { MapMarkers, IndexesData } from "./types";
export declare function searchMarkers(nextValue: string, prevValue?: string): MapMarkers;
export declare function lineNumbering(value: string): string[];
export declare function indexesMarkedLines(markers: MapMarkers, maxLines: any, count?: number): IndexesData;
