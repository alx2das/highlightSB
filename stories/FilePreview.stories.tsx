import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FilePreview } from "../src";
import { prevValue, nextValue } from "./data";

export default {
	title: "FilePreview",
	component: FilePreview,
	argTypes: {
		fileName: { control: "text" },
		image: { control: "text" },
		prevValue: { control: "text" },
		nextValue: { control: "text" },
		startNumber: { control: { type: "number", min: 1, max: 30 } },
		hideNumber: { control: "boolean", defaultValue: false },
	},
} as ComponentMeta<typeof FilePreview>;

const Template: ComponentStory<typeof FilePreview> = (args) => (
	<FilePreview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	fileName: "ReminderListDataSource.swift",
	image: "IMAGE",
	nextValue: nextValue,
	prevValue: prevValue,
};
