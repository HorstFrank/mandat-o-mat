import React from "react";
import { txt, txtFindReplace } from "../../assets/utils/txt";
import Progressbar from "../Progressbar/Progressbar";
import { progressbar } from "../Progressbar/Progressbar.stories";
import styles from "./QuestionState.module.css";
import txtjson from "../../assets/json/text.json";

export type QuestionStateType = {
  questionNumber: number;
  questionTotal: number;
};

export default function QuestionState({
  questionNumber,
  questionTotal,
}: QuestionStateType) {
  return (
    <div className={styles.container}>
      {txt(txtjson.question.state, {
        f1: questionNumber,
        f2: questionTotal,
      })}
      <Progressbar progress={questionNumber / questionTotal} />
    </div>
  );
}
