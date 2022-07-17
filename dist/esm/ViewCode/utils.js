import { diffLines } from "diff/lib/diff/line";
import hljs from "highlight.js";
export function searchMarkers(nextValue, prevValue) {
    if (!prevValue) {
        return {};
    }
    const arrDiff = diffLines(prevValue, nextValue);
    const { markers } = arrDiff.reduce((accum, change) => {
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
    function createMarkers({ markers, number, count, type }) {
        const _count = type === "removed" ? 1 : count;
        for (let i = 0; i < _count; i++) {
            const idx = number + i;
            markers[idx] = Object.assign({}, (markers[idx] || {}));
            markers[idx][type] = true;
        }
        return markers;
    }
}
export function lineNumbering(value, languages = ["swift"]) {
    var _a;
    const html = hljs.highlightAuto(value, languages).value;
    const htmlLines = getLines(html);
    if (!htmlLines) {
        return [value];
    }
    if (((_a = htmlLines[htmlLines.length - 1]) === null || _a === void 0 ? void 0 : _a.trim()) === "") {
        htmlLines.pop();
    }
    if (!htmlLines.length) {
        return [html];
    }
    return htmlLines;
    // private methods...
    function getLines(value) {
        if (!value.length) {
            return [];
        }
        return value.split(/\r?\n/g);
    }
}
export function indexesMarkedLines(markers, maxLines, count = 3) {
    const _indexes = Object.keys(markers);
    const _count = count < 2 ? 2 : count;
    const checkIndexes = _indexes.reduce((checkIndexes, i) => {
        const index = parseInt(i);
        const check = (p) => p >= 0 && p <= maxLines && !checkIndexes.includes(p);
        for (let p = index - _count; p <= index; p++) {
            if (check(p))
                checkIndexes.push(p);
        }
        if (!checkIndexes.includes(index)) {
            checkIndexes.push(index);
        }
        for (let p = index; p <= index + _count; p++) {
            if (check(p))
                checkIndexes.push(p);
        }
        return checkIndexes;
    }, []);
    return checkIndexes.reduce((accum, index) => {
        const min = index - 1;
        const max = index + 1;
        if (index > 0 && !accum.indexes.includes(min)) {
            accum.markers = createMarker({
                markers: accum.markers,
                type: "minify_p",
                index,
            });
        }
        if (index < maxLines && !accum.indexes.includes(max)) {
            accum.markers = createMarker({
                markers: accum.markers,
                type: "minify_n",
                index,
            });
        }
        return accum;
    }, { markers: markers, indexes: checkIndexes });
    function createMarker({ markers, type, index }) {
        const i = index.toString();
        markers[i] = Object.assign({}, (markers[i] || {}));
        markers[i][type] = true;
        return markers;
    }
}
//# sourceMappingURL=utils.js.map