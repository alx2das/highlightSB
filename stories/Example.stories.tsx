import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LessonSection, SectionType } from "../src";
import { Layout } from "./Layout";
import { sections } from "./Example.data";


export default {
    title: "LessonSection",
    component: LessonSection
} as ComponentMeta<typeof LessonSection>;


const Template: ComponentStory<typeof LessonSection> = (args) => (
    <Layout>
        {sections.map((section: SectionType, index) => (
            <LessonSection
                key={index + section.title}
                {...section}
            />
        ))}
    </Layout>
);

export const Primary = Template.bind({});
Primary.args = {};




