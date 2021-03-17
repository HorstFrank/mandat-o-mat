import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";
import iconSettings, { icon } from "./iconSettings";

export default {
  title: "Common/iconSettings",
  component: iconSettings,
} as Meta;

const Template: Story<icon> = () => <iconSettings />;

export const Primaryx = Template.bind({});
Primaryx.args = {
  // primary: true,
  // label: "Beschriftung 3",
};

// export const Secondaryx = Template.bind({});
// Secondaryx.args = {
//   label: "BEschriftung 2",
// };
