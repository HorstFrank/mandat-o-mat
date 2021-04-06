import React, {
  AnchorHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
} from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  label?: string;
  value?: string | number;
  flavor?: string;
  questionNumber: number;
  // width?: string;
  props?: string;

  handleClick?: React.MouseEventHandler<HTMLDivElement>;
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
    <a
      className={`${styles.btn} ${styles[flavor]}`}
      href="#"
      onClick={() =>
        handleClick({ usrVote: value, questionId: questionNumber })
      }
      style={{ ...props }}
    >
      {label}
    </a>
  );
}
