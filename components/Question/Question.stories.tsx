import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Question, { QuestionType } from "./Question";

export default {
  title: "Common/Question",
  component: Question,
} as Meta;

const Template: Story<QuestionType> = (args) => <Question {...args} />;

export const QuestionTxt = Template.bind({});
QuestionTxt.args = {};
