import React from "react";
import Button from "../Button/Button";
import styles from "./QuestionButtonset.module.css";

export type qButtonSetType = {
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};

function handleButtonClick(value) {
  alert(value);
}

export default function QuestionButtonSet({ handleClick }: qButtonSetType) {
  return (
    <div className={styles.container}>
      <div>
        <Button
          label="Ja"
          value="yes"
          handleClick={handleButtonClick}
          width="100px"
          margin-right="1em"
        />
        <Button
          label="Nein"
          value="no"
          handleClick={handleButtonClick}
          width="100px"
        />
      </div>
      <div>
        <Button
          label="Enthaltung"
          value="abstain"
          handleClick={handleButtonClick}
          flavor="flavor-filled"
          width="280px"
          margin-top="1em"
        />
      </div>
    </div>
  );
}
