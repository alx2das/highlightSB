import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LessonSteps } from "../src";

export default {
    title: "LessonSteps",
    component: LessonSteps,
    argTypes: {},
} as ComponentMeta<typeof LessonSteps>;

const Template: ComponentStory<typeof LessonSteps> = (args) => (
    <LessonSteps {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
