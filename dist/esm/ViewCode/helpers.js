import hljs from "highlight.js";
import * as Diff from "diff";
export function searchMarkers(prev, next) {
    if (!prev || !next) {
        return {};
    }
    const arrDiff = Diff.diffLines(prev, next);
    const { markers } = arrDiff.reduce((accum, change) => {
        if (change.added || change.removed) {
            accum.markers = create({
                markers: accum.markers,
                number: accum.number,
                type: change.added ? "added" : "removed",
                count: change.count,
            });
        }
        if (!change.removed) {
            accum.number += change.count || 0;
        }
        return accum;
    }, { markers: {}, number: 0 });
    return markers;
    // private ...
    function create({ markers, type, number = 0, count = 0 }) {
        const _count = type === "removed" ? 1 : count;
        for (let i = 0; i < _count; i++) {
            const line = number + i;
            markers[line] = Object.assign({}, (markers[line] || {}));
            markers[line][type] = true;
        }
        return markers;
    }
}
export function lineNumbering(value) {
    var _a;
    const html = hljs.highlightAuto(value).value;
    const lines = getLines(html);
    if (!html) {
        return [value];
    }
    if (((_a = lines[lines.length - 1]) === null || _a === void 0 ? void 0 : _a.trim()) === "") {
        lines.pop();
    }
    if (!lines.length) {
        return [html];
    }
    return lines;
    // private ...
    function getLines(value) {
        if (!value.length)
            return [];
        return value.split(/\r?\n/g);
    }
}
//# sourceMappingURL=helpers.js.map