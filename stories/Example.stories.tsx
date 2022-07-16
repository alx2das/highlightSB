import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LessonSection, SectionType } from "../src";
import { LayoutLessonSection } from "./demo/demo.Layouts";
import { sections } from "./demo/Example.data";


export default {
    title: "LessonSection",
    component: LessonSection
} as ComponentMeta<typeof LessonSection>;


const Template: ComponentStory<typeof LessonSection> = (args) => (
    <LayoutLessonSection>
        {sections.map((section: SectionType, index) => (
            <LessonSection
                key={index + section.title}
                {...section}
            />
        ))}
    </LayoutLessonSection>
);

export const Primary = Template.bind({});
Primary.args = {};




