import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LessonSection } from "../src";

export default {
	title: "LessonSection",
	component: LessonSection,
	argTypes: {},
} as ComponentMeta<typeof LessonSection>;

const Template: ComponentStory<typeof LessonSection> = (args) => (
	<LessonSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
