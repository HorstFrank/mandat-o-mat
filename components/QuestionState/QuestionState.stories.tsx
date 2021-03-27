import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import QuestionState, { QuestionStateType } from "./QuestionState";

export default {
  title: "Common/QuestionState",
  component: QuestionState,
} as Meta;

const Template: Story<QuestionStateType> = (args) => (
  <QuestionState {...args} />
);

export const QuestionStateTxt = Template.bind({});
QuestionStateTxt.args = {};
