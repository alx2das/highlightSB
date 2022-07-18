import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LayoutLessonSection } from "./demo/demo.Layouts";
import { section } from "./demo/demo.Data";

import { LessonSection } from "../src";

export default {
	title: "LessonSection",
	component: LessonSection,
} as ComponentMeta<typeof LessonSection>;

const Template: ComponentStory<typeof LessonSection> = (args) => (
	<LayoutLessonSection>
		<LessonSection {...args} />
	</LayoutLessonSection>
);

export const Primary = Template.bind({});
Primary.args = {
	title: section.title,
	subtitle: section.subtitle,
	description: section.description,

	sourceUrl: section.sourceUrl,
	sourceType: section.sourceType,
	sourceNode: section.sourceNode,

	steps: section.steps,
};
