import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LayoutViewCode } from "./demo/demo.Layouts";
import { BigCodeOne, BigCodeTwo, SimpleCodeOne, SimpleCodeTwo, SimpleCodeThree } from "./demo/demo.Data";

import { ViewCode } from "../src";

export default {
    title: "ViewCode",
    component: ViewCode
} as ComponentMeta<typeof ViewCode>;

const Template: ComponentStory<typeof ViewCode> = (args) => (
    <LayoutViewCode>
        <ViewCode {...args} />
    </LayoutViewCode>
);

export const First = Template.bind({});
First.args = {
    prevValue: BigCodeOne,
    nextValue: BigCodeTwo,
    minify: true,
    minifyCountSpace: 5
};

export const Second = Template.bind({});
Second.args = {
    nextValue: SimpleCodeOne
};

export const Third = Template.bind({});
Third.args = {
    nextValue: SimpleCodeTwo,
    prevValue: SimpleCodeOne
};

export const Fourth = Template.bind({});
Fourth.args = {
    nextValue: SimpleCodeThree,
    prevValue: SimpleCodeTwo,
    startNumber: 10
};