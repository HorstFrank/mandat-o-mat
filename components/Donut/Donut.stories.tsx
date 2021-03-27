import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Donut, { DonutType } from "./Donut";

export default {
  title: "Common/Donut",
  component: Donut,
} as Meta;

const Template: Story<DonutType> = (args) => <Donut {...args} />;

export const DonutComp = Template.bind({});
DonutComp.args = {};
