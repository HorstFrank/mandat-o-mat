import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import QuestionPDFLink, { QuestionPDFLinkType } from "./QuestionPDFLink";

export default {
  title: "Common/QuestionPDFLink",
  component: QuestionPDFLink,
} as Meta;

const Template: Story<QuestionPDFLinkType> = (args) => (
  <QuestionPDFLink {...args} />
);

export const QuestionPDFLinkComp = Template.bind({});
QuestionPDFLinkComp.args = {};
