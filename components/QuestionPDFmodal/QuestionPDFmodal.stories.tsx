import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import QuestionPDFmodal from "./QuestionPDFmodal";

export default {
  title: "Common/QuestionPDFmodal",
  component: QuestionPDFmodal,
} as Meta;

const Template = (args) => (
  <QuestionPDFmodal {...args} />
);

export const QuestionPDFmodalComp = Template.bind({});
QuestionPDFmodalComp.args = {};
 