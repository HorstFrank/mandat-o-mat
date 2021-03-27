import React, { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  label?: string;
  value?: string | number;
  flavor?: string;
  props?: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Button({
  label = "Undefined Button Label",
  value = `Value of ${label}`,
  flavor = "flavor-primary",
  handleClick,
  ...props
}: ButtonType) {
  value = value || label;
  if (props && typeof props.width !== "undefined") {
    props["display"] = "inline-block";
    props["text-align"] = "center";
  }
  return (
    <a
      className={`${styles.btn} ${styles[flavor]}`}
      href="#"
      onClick={() => handleClick(value)}
      style={{ ...props }}
    >
      {label}
    </a>
  );
}
