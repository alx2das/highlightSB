import * as Diff from "diff";

export enum TYPE_DIFF {
	ADDED = "added",
	REMOVED = "removed",
}

export type Markers = {
	[number: number]: {
		added?: boolean;
		removed?: boolean;
	};
};

type CreateMarkerProps = {
	type: TYPE_DIFF;
	markers: {};
	count?: number;
	startNumber?: number;
};

const createMarkers = (props: CreateMarkerProps) => {
	const { markers, type, count = 0, startNumber = 0 } = props;

	for (let i = 0; i < count; i++) {
		const number = startNumber + i;

		markers[number] = { ...(markers[number] || {}) };
		markers[number][type] = true;
	}

	return markers;
};

export const searchMarkers = (
	prevValue?: string,
	newValue?: string
): Markers => {
	if (!prevValue || !newValue) {
		return {};
	}

	const diffArray = Diff.diffLines(prevValue, newValue);

	const { markers } = diffArray.reduce(
		(accum, { added, removed, count }: Diff.Change) => {
			if (added || removed) {
				accum.markers = createMarkers({
					markers: accum.markers,
					startNumber: accum.number,
					type: added ? TYPE_DIFF.ADDED : TYPE_DIFF.REMOVED,
					count,
				});
			}

			if (!removed) {
				accum.number += count || 0;
			}

			return accum;
		},
		{ markers: {}, number: 0 }
	);

	return markers;
};
