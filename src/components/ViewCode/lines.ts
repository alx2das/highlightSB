import hljs from "highlight.js";
import "highlight.js/styles/default.css";

const REGEXP_LINE_BREAK = /\r?\n/g;

const getLines = (value: string): string[] => {
	if (!value.length) return [];
	return value.split(REGEXP_LINE_BREAK);
};

export const lineNumbers = (value: string): string[] => {
	const valueHTML = hljs.highlightAuto(value).value;
	const lines = getLines(valueHTML);

	if (lines[lines.length - 1]?.trim() === "") {
		lines.pop();
	}

	if (!lines.length) {
		return [];
	}

	return lines;
};
