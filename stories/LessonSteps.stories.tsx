import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LessonSteps } from "../src";
import { query_sections } from "./data";

export default {
	title: "LessonSteps",
	component: LessonSteps,
	argTypes: {},
} as ComponentMeta<typeof LessonSteps>;

const Template: ComponentStory<typeof LessonSteps> = (args) => (
	<LessonSteps {...args} />
);

export const Primary = Template.bind({});

const section = query_sections.lecture_sections[0];

Primary.args = {
	steps: section.lecture_steps
};
