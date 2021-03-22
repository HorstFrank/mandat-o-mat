import React from "react";
import "./DummyButton.module.css";

export type Button = {
  label: string;
  value: string | number;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
};

export default function DummyButton({ label, value, handleClick }: Button) {
  return (
    <div className="btnwrapper">
      <div onClick={() => handleClick(value)}>{label}</div>
    </div>
  );
}
