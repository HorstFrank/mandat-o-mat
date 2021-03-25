import React from "react";
import "./QuestionButtonset.module.css";

export type qButtonSetType = {
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function QuestionButtonSet({ handleClick }: qButtonSetType) {
  return (
    <div>
      QuestionButtonSet placeholder
      {/* <DummyButton label="Ja" value="yes" handleClick={handleClick} />
      <br />
      <DummyButton label="Nein" value="no" handleClick={handleClick} />
      <br />
      <DummyButton
        label="Enthaltung"
        value="absonstwas"
        handleClick={handleClick}
      />
      <br /> */}
    </div>
  );
}
