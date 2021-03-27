import React from "react";

import { Meta, Story } from "@storybook/react/types-6-0";
import Shadowline, { ShadowlineProps } from "./Shadowline";

export default {
  title: "Common/SVGelements",
  component: Shadowline,
} as Meta;

const Template: Story<ShadowlineProps> = (args) => <Shadowline {...args} />;

export const ShadowLine = Template.bind({});
Shadowline.args = {};
