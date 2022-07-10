import * as Diff from "diff";
export var TYPE_DIFF;
(function (TYPE_DIFF) {
    TYPE_DIFF["ADDED"] = "added";
    TYPE_DIFF["REMOVED"] = "removed";
})(TYPE_DIFF || (TYPE_DIFF = {}));
const createMarkers = (props) => {
    const { markers, type, count = 0, startNumber = 0 } = props;
    for (let i = 0; i < count; i++) {
        const number = startNumber + i;
        markers[number] = Object.assign({}, (markers[number] || {}));
        markers[number][type] = true;
    }
    return markers;
};
export const searchMarkers = (prevValue, newValue) => {
    if (!prevValue || !newValue) {
        return {};
    }
    const diffArray = Diff.diffLines(prevValue, newValue);
    const { markers } = diffArray.reduce((accum, { added, removed, count }) => {
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
    }, { markers: {}, number: 0 });
    return markers;
};
//# sourceMappingURL=markers.js.map