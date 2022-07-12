import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LessonSection } from "../src";
import { Layout } from "./Layout";
import { query_sections } from "./data";

export default {
	title: "LessonSection",
	component: LessonSection,
	argTypes: {
		title: { control: "text" },
		subtitle: { control: "text" },
		description: { control: "text" },
		imageUrl: { control: "text" },
	},
} as ComponentMeta<typeof LessonSection>;

const Template: ComponentStory<typeof LessonSection> = (args) => (
	<Layout>
		<LessonSection {...args} />
	</Layout>
);

export const Primary = Template.bind({});

const section = query_sections.lecture_sections[0];

Primary.args = {
	title: "Секция 1",
	subtitle: section.title,
	description: section.description,
	imageUrl: section.image_video_url,
	steps: section.lecture_steps,
};
