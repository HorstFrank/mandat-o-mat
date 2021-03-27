import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Button, { ButtonType } from "./Button";

export default {
  title: "Common/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonType> = (args) => <Button {...args} />;

export const ButtonSample = Template.bind({});
ButtonSample.args = {
  label: "string",
  value: "string | number",
  // handleClick: React.MouseEventHandler<HTMLDivElement>;
};
