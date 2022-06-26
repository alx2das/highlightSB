import { first, second } from "./example_content";
import highlightSB from "../lib";

const html = highlightSB(
    [ first, second ],
    {
    filename: "ReminderListDataSource.swift"
});

document.querySelector("body").innerHTML +=
    `<div style="width: 700px; padding: 50px">${html}</div>`;


