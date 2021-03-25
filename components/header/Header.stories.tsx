import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Common/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
MainHeader.args = {
  colored: true,
};
