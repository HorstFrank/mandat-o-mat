import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  StyleHTMLAttributes,
} from "react";
import styles from "./Button.module.css";
import * as CSS from "csstype";

export type ButtonType = {
  label?: string;
  value?: string | number;
  flavor?: string;
  questionNumber: number;
  handleClick?: ({ usrVote: value, questionId: questionNumber }) => void;
  // props?: StyleHTMLAttributes<T>;
  // props?: CSS.Properties;
  props?: string;
  width?: string;
};

export default function Button({
  label = "Undefined Button Label",
  value = `Value of ${label}`,
  flavor = "flavor-primary",
  handleClick,
  questionNumber,
  ...props
}: ButtonType) {
  if (props && typeof props.width !== "undefined") {
    props["display"] = "inline-block";
    props["text-align"] = "center";
  }
  return (
    <span
      className={`${styles.btn} ${styles[flavor]}`}
      onClick={() =>
        handleClick({ usrVote: value, questionId: questionNumber })
      }
      style={{ ...props }}
    >
      {label}
    </span>
  );
}
