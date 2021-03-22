import React from "react";

import { Meta } from "@storybook/react/types-6-0";
import Logo from "./Logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as Meta;

export const LogoBig = () => <Logo />;
