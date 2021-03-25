import React from "react";

import { Meta, Story } from "@storybook/react/types-6-0";
import Icon, { IconProps } from "./Icons";

export default {
  title: "Common/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const IconAll = Template.bind({});
IconAll.args = {};

// export const iSettings = () => <Icon />;
