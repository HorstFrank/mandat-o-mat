import React from "react";

import { Meta } from "@storybook/react/types-6-0";
import LogoIcon from "./LogoIcon";

export default {
  title: "Common/Logo",
  component: LogoIcon,
} as Meta;

export const logoIcon = () => <LogoIcon />;
