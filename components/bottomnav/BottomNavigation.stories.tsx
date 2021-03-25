import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import BottomNavigation, { BottomNavigationProps } from "./BottomNavigation";

export default {
  title: "Common/Bottom Navigation",
  component: BottomNavigation,
} as Meta;

const Template: Story<BottomNavigationProps> = (args) => (
  <BottomNavigation {...args} />
);

export const QuestionsActive = Template.bind({});
QuestionsActive.args = {
  activeLink: "/question",
};

export const ResultActive = Template.bind({});
ResultActive.args = {
  activeLink: "/result",
};

export const InfoActive = Template.bind({});
InfoActive.args = {
  activeLink: "/info",
};

export const SettingsActive = Template.bind({});
SettingsActive.args = {
  activeLink: "/settings",
};
