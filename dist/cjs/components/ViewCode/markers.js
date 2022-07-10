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
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMarkers = exports.TYPE_DIFF = void 0;
const Diff = __importStar(require("diff"));
var TYPE_DIFF;
(function (TYPE_DIFF) {
    TYPE_DIFF["ADDED"] = "added";
    TYPE_DIFF["REMOVED"] = "removed";
})(TYPE_DIFF = exports.TYPE_DIFF || (exports.TYPE_DIFF = {}));
const createMarkers = (props) => {
    const { markers, type, count = 0, startNumber = 0 } = props;
    for (let i = 0; i < count; i++) {
        const number = startNumber + i;
        markers[number] = Object.assign({}, (markers[number] || {}));
        markers[number][type] = true;
    }
    return markers;
};
const searchMarkers = (prevValue, newValue) => {
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
exports.searchMarkers = searchMarkers;
//# sourceMappingURL=markers.js.map