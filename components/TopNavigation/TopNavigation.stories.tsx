import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import TopNavigation, { TopNavigationProps } from "./TopNavigation";

export default {
  title: "Common/Header",
  component: TopNavigation,
} as Meta;

const Template: Story<TopNavigationProps> = (args) => (
  <TopNavigation {...args} />
);

export const TopNavigationx = Template.bind({});
TopNavigationx.args = {
  selectKey: "thisapp",
};
