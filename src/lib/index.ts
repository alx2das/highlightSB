import hljs from "highlight.js/lib/core";
import swift from "highlight.js/lib/languages/swift";

import "highlight.js/styles/base16/github.css";

import "./index.css";

type TText = string | [string, string | undefined];
type TOptions = {
	filename?: string;
	startLine?: number;
	markers?: number[];
};

const REGEXP_FORMAT = /\{(\d+)\}/g;
const REGEXP_LINE_BREAK = /\r?\n/g;

const CSS = {
	MAIN: "hljs-swiftbook",
	FILENAME: "sb-filename",
	CONTAINER: "sb-container",
	NUMBER: "sb-number",
	CONTENT: "sb-content",
	MARKER: "_marker",
};

function highlightSB(text: TText, options: TOptions = {}): string {
	const [first, second] = Array.isArray(text) ? [text[0], text[1] || ""] : [text, ""];
	const markers = options?.markers || (Boolean(first && second) ? getMarkers([first, second]) : []);
	const startLine = options.startLine || 0;

	hljs.registerLanguage("swift", swift);

	const codeBase = hljs.highlightAuto(second || first, ["swift"]).value;
	const codeName = formatFilename(options.filename);
	const codeLine = lineNumbers(codeBase, { startLine, markers });

	return format(`<div class="{2}">{0}<div class="eee">{1}</div></div>`, [codeName, codeLine, CSS.MAIN]);

	// ...

	function formatFilename(filename?: string): string {
		if (!filename) return "";
		return format(`<h4 class="{1}">{0}</h4>`, [filename, CSS.FILENAME]);
	}

	function lineNumbers(text: string, { startLine, markers }: TOptions): string {
		const lines = getLines(text);
		const def_number = startLine || 1;

		let html = "";

		if (lines[lines.length - 1].trim() === "") {
			lines.pop();
		}

		if (!lines.length) {
			return text;
		}

		for (let i = 0; i < lines.length; i++) {
			const _marker = markers.includes(i) ? ` ${CSS.MARKER}` : "";
			const _number = (i + def_number).toString();
			const _content = lines[i]?.length > 0 ? lines[i] : "";

			html += format(
				`<span class="{3}{0}" data-line-number="{1}">` +
					`<span class="{4}">{1}</span>` +
					`<span class="{5}">{2}</span>` +
					`</span>`,
				[_marker, _number, _content, CSS.CONTAINER, CSS.NUMBER, CSS.CONTENT]
			);
		}

		return format(`<pre><code>{0}</code></pre>`, [html]);
	}

	function getMarkers(text: string[]): number[] {
		const [first, second] = text.map(getLines);
		const markers = [];

		for (let i = 0; i < second.length; i++) {
			first[i] !== second[i] && markers.push(i);
		}

		return markers;
	}

	function getLines(text: string): string[] {
		if (!text || !text.length) return [];
		return text.split(REGEXP_LINE_BREAK);
	}

	function format(tmp: string, args?: string[]): string {
		return tmp.replace(REGEXP_FORMAT, (m, n) => {
			return args[n] !== undefined ? args[n] : m;
		});
	}
}

export default highlightSB;
