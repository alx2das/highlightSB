import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ViewCode } from "../src";
import { prevValue, nextValue } from "./data";

export default {
	title: "ViewCode",
	component: ViewCode,
	argTypes: {
		prevValue: { control: "text" },
		nextValue: { control: "text" },
		startNumber: { control: { type: "number", min: 1, max: 30 } },
		hideNumber: { control: "boolean", defaultValue: false },
	},
} as ComponentMeta<typeof ViewCode>;

const Template: ComponentStory<typeof ViewCode> = (args) => (
	<ViewCode {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	prevValue,
	nextValue,
};
