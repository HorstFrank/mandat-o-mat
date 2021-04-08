import React from "react";
import Button from "../Button/Button";
import styles from "./QuestionButtonset.module.css";

export type qButtonSetType = {
  handleClick?: ({ usrVote: value, questionId: questionNumber }) => void;
  questionNumber: number;
};

function handleButtonClick(value) {
  // alert(value);
  // return value;
}

export default function QuestionButtonSet({
  handleClick,
  questionNumber,
}: qButtonSetType) {
  return (
    <div className={styles.container}>
      <div>
        <Button
          label="Ja"
          value="yes"
          handleClick={handleClick}
          width="100px"
          margin-right="1em"
          questionNumber={questionNumber}
        />
        <Button
          label="Nein"
          value="no"
          handleClick={handleClick}
          width="100px"
          questionNumber={questionNumber}
        />
      </div>
      <div>
        <Button
          label="Enthaltung"
          value="abstain"
          handleClick={handleClick}
          flavor="flavor-filled"
          width="280px"
          margin-top="1em"
          questionNumber={questionNumber}
        />
      </div>
    </div>
  );
}
