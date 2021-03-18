import React from "react";

import {Story, Meta} from "@storybook/react/types-6-0";
import Logo from "./Logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as Meta;

export const iSettings = () => <Logo />;
