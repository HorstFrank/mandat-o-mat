import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import QuestionButtonSet, { qButtonSetType } from "./QuestionButtonset";

export default {
  title: "Common/QuestionButtonSet",
  component: QuestionButtonSet,
} as Meta;

const Template: Story<qButtonSetType> = (args) => (
  <QuestionButtonSet {...args} />
);

export const ButtonSet = Template.bind({});
ButtonSet.args = {};
