import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";
import Button2, { ButtonProps2 } from "./Button2";

export default {
  title: "Common/Button2",
  component: Button2,
} as Meta;

const Template: Story<ButtonProps2> = (args) => <Button2 {...args} />;

export const Primaryx = Template.bind({});
Primaryx.args = {
  primary: true,
  label: "Beschriftung 3",
};

export const Secondaryx = Template.bind({});
Secondaryx.args = {
  label: "BEschriftung 2",
};
