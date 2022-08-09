import React from "react";
import ReactDOM from "react-dom";

import { LessonSection, LessonSectionProps } from "./LessonSection";

export default function (
	selector: HTMLDivElement,
	options: LessonSectionProps
) {
	ReactDOM.render(<LessonSection {...options} />, selector);
}
