import type { Change } from "diff";
import type { MapMarkers, IndexesData } from "./types";

import { diffLines } from "diff/lib/diff/line";
import hljs from "highlight.js";


export function searchMarkers(nextValue: string, prevValue?: string): MapMarkers {
    if (!prevValue) {
        return {};
    }

    const arrDiff: Change[] = diffLines(prevValue, nextValue);

    const { markers } = arrDiff.reduce((accum: { markers: MapMarkers, number: number }, change) => {
        if (change.added || change.removed) {
            accum.markers = createMarkers({
                markers: accum.markers,
                number: accum.number,
                count: change.count,
                type: change.added ? "added" : "removed",
            });
        }

        if (!change.removed) {
            accum.number += change.count || 0;
        }

        return accum;
    }, { markers: {}, number: 0 });

    return markers;

    // private methods...

    function createMarkers({ markers, number, count, type }): MapMarkers {
        const _count = type === "removed" ? 1 : count;

        for (let i = 0; i < _count; i++) {
            const idx = number + i;

            markers[idx] = { ...(markers[idx] || {}) };
            markers[idx][type] = true;
        }

        return markers;
    }
}

export function lineNumbering(value: string, languages: string[] = ["swift"]): string[] {
    const html = hljs.highlightAuto(value, languages).value;
    const htmlLines = getLines(html);

    if (!htmlLines){
        return [value];
    }

    if (htmlLines[htmlLines.length - 1]?.trim() === "") {
        htmlLines.pop();
    }

    if (!htmlLines.length) {
        return [html];
    }

    return htmlLines;

    // private methods...

    function getLines(value: string) {
        if (!value.length) {
            return [];
        }

        return value.split(/\r?\n/g);
    }
}

export function indexesMarkedLines(markers: MapMarkers, maxLines, count = 3): IndexesData {
    const indexes = Object.keys(markers);

    const { markers: _markers, buffer } = indexes.reduce(
        (accum: { markers: MapMarkers, buffer: number[] }, i) => {
            const index = parseInt(i);
            const check = p => p >= 0 && p <= maxLines && !accum.buffer.includes(p);

            for (let p = index - count; p <= index; p++) {
                if (check(p)) accum.buffer.push(p);
            }

            if (!accum.buffer.includes(index)) {
                accum.buffer.push(index);
            }

            for (let p = index; p <= index + count; p++) {
                if (check(p)) accum.buffer.push(p);
            }

            return accum;
        }, { markers: markers, buffer: [] }
    );

    const response = buffer.reduce(
        (accum, index) => {
            const min = index - 1;
            const max = index + 1;

            if (index > 0 && !accum.buffer.includes(min)) {
                accum.markers = createMarker({
                    markers: accum.markers,
                    type: "minify_p",
                    index
                });
            }

            if (index < maxLines && !accum.buffer.includes(max)) {
                accum.markers = createMarker({
                    markers: accum.markers,
                    type: "minify_n",
                    index
                });
            }

            return accum;
        },
        { markers: markers, buffer: buffer }
    );

    return {
        indexes: response.buffer,
        markers: response.markers
    };


    function createMarker({ markers, type, index }) {
        const i = index.toString();

        markers[i] = { ...(markers[i] || {}) };
        markers[i][type] = true;

        return markers;
    }
}