"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineNumbering = exports.searchMarkers = void 0;
const highlight_js_1 = __importDefault(require("highlight.js"));
const Diff = __importStar(require("diff"));
function searchMarkers(prev, next) {
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
exports.searchMarkers = searchMarkers;
function lineNumbering(value) {
    var _a;
    const html = highlight_js_1.default.highlightAuto(value).value;
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
exports.lineNumbering = lineNumbering;
//# sourceMappingURL=helpers.js.map