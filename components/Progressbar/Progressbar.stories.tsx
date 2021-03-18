import React from "react";
import ProgressbarType from "../../types/ProgressbarType";

import {Story, Meta} from "@storybook/react/types-6-0";
import Progressbar from "./Progressbar";

export default {
  title: "Common/SomeStuff",
  component: Progressbar,
} as Meta;

// export const progressbar = () => <Progressbar />;

const Template: Story<ProgressbarType> = (args) => <Progressbar {...args} />;

export const progressbar = Template.bind({});
progressbar.args = {};

export const progressbarTest = Template.bind({});
progressbarTest.args = {
  colorProgress: "blue",
  colorBackground: "gray",
  progress: 0.5,
  width: "100%",
  height: 2,
};

// export const Secondaryx = Template.bind({});
// Secondaryx.args = {
//   label: "BEschriftung 2",
// };
