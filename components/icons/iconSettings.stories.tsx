import React from "react";

import {Story, Meta} from "@storybook/react/types-6-0";
import IconSettings from "./IconSettings";

export default {
  title: "Common/IconSettings",
  component: IconSettings,
} as Meta;

export const iSettings = () => <IconSettings />;

// const Template: Story<IconType> = (args) => <IconSettings {...args} />;

// export const IconSettings = Template.bind({});
// IconSettings.args = {
//   primary: true,
//   label: "Beschriftung 3",
// };

// export const Secondaryx = Template.bind({});
// Secondaryx.args = {
//   label: "BEschriftung 2",
// };
