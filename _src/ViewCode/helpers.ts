import type { Change } from "diff";
import type { Marker, Markers } from "./types";

import { diffLines } from "diff/lib/diff/line";
import hljs from "highlight.js";

import "highlight.js/styles/github.css";

type MarkersOptions = {
	nextValue: string;
	prevValue?: string;
	language?: string | string[];
	markers?: number[];
};

type LinesOptions = {
	nextValue: string;
};

export function searchMarkers(options: MarkersOptions): Markers {
	const _markers = (options.markers || []).reduce((accum, lineNumber) => {
		accum[lineNumber] = {};
		accum[lineNumber].updated = true;

		return accum;
	}, {});

	if (!options.prevValue) {
		return _markers;
	}

	const arrDiff: Change[] = diffLines(options.prevValue, options.nextValue);

	const { markers } = arrDiff.reduce(
		(accum: { markers: Marker; number: number }, change) => {
			if (change.added || change.removed) {
				accum.markers = createMarker(
					accum.markers,
					change.added ? "added" : "removed",
					accum.number,
					change.count,
				);
			}

			if (!change.removed) {
				accum.number += change.count || 0;
			}

			return accum;
		},
		{ markers: _markers, number: 0 },
	);

	return markers;

	// private methods...

	function createMarker(markers, type, number = 0, count = 0) {
		const _count = type === "removed" ? 1 : count;

		for (let i = 0; i < _count; i++) {
			const line = number + i;

			markers[line] = { ...(markers[line] || {}) };
			markers[line][type] = true;
		}

		return markers;
	}
}

export function lineNumbering(options: LinesOptions): string[] {
	const html = hljs.highlightAuto(options.nextValue, ["swift"]).value;
	const lines = getLines(html);

	if (!html) {
		return [options.nextValue];
	}

	if (lines[lines.length - 1]?.trim() === "") {
		lines.pop();
	}

	if (!lines.length) {
		return [html];
	}

	return lines;

	// private ...

	function getLines(value: string): string[] {
		if (!value.length) return [];
		return value.split(/\r?\n/g);
	}
}
