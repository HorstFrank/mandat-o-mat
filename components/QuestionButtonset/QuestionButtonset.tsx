import React from "react";
import DummyButton from "../Button/DummyButton";
import "./QuestionButtonset.module.css";
// import "../../styles/globals.css";
// import { ButtonType } from "../../types/ButtonType";

export type qButtonSetType = {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
};

export default function QuestionButtonSet({ handleClick }: qButtonSetType) {
  return (
    <div>
      <DummyButton label="Ja" value="yes" handleClick={handleClick} />
      <br />
      <DummyButton label="Nein" value="no" handleClick={handleClick} />
      <br />
      <DummyButton
        label="Enthaltung"
        value="absonstwas"
        handleClick={handleClick}
      />
      <br />
    </div>
  );
}
