import "./index.sass";

type TText = string | [string, string | undefined];
type TOptions = {
	startLine?: number;
	markers?: number[];
};

const REGEXP_FORMAT = /\{(\d+)\}/g;
const REGEXP_LINE_BREAK = /\r?\n/g;

const CSS_CLASS = {
	CONTAINER: "highlightsb",
	LINE: "hlsb-line",
	LINE_MARKER: "_marker",
	LINE_NUMBER: "hlsb-number",
	LINE_CONTENT: "hlsb-content",
};

export function create(text: TText, options: TOptions = {}) {
	const [first, second = ""] = Array.isArray(text) ? text : [text, ""];

	const startLine = options?.startLine || 1;
	const markers = options?.markers || (Boolean(first && second) ? searchMarkers([first, second]) : []);
	const codeBase = second || first;

	return createNumbers(codeBase, { startLine, markers });
}

export function createNumbers(text: string, { startLine = 1, markers = [] }: TOptions = {}): string {
	const lines = breakLines(text);

	let html = "";

	if (lines[lines.length - 1].trim() === "") {
		lines.pop();
	}

	if (!lines.length) {
		return text;
	}

	for (let i = 0; i < lines.length; i++) {
		const temp =
			`<span class="{0}{3}" data-line-number="{4}">` +
			`<span class="{1}">{4}</span>` +
			`<span class="{2}">{5}</span>` +
			`</span>`;

		const args = [
			CSS_CLASS.LINE, // {0}
			CSS_CLASS.LINE_NUMBER, // {1}
			CSS_CLASS.LINE_CONTENT, // {2}
			markers.includes(i) ? ` ${CSS_CLASS.LINE_MARKER}` : "", // {3}
			(i + startLine).toString(), // {4}
			lines[i].length > 0 ? lines[i] : "", // {5}
		];

		html += format(temp, args);
	}

	return format(`<div class="{0}"><pre><code>{1}</code></pre></div>`, [CSS_CLASS.CONTAINER, html]);
}

export function searchMarkers(text: string[]): number[] {
	const [first, second] = text.map(breakLines);
	const markers = [];

	for (let i = 0; i < second.length; i++) {
		first[i] !== second[i] && markers.push(i);
	}

	return markers;
}

function breakLines(text: string): string[] {
	if (!text.length) return [];
	return text.split(REGEXP_LINE_BREAK);
}

export function format(temp: string, args?: string[]): string {
	return temp.replace(REGEXP_FORMAT, (m, n) => {
		return args[n] !== undefined ? args[n] : m;
	});
}
