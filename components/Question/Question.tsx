import React from "react";
import { txt, txtFindReplace } from "../../assets/utils/txt";
import styles from "./Question.module.css";

export type QuestionType = {
  value: string;
};

export default function Question({ value }: QuestionType) {
  return (
    <div className={styles.container}>
      <div className={styles.question}>Frage</div>
      <div className={styles["question-info"]}>
        {txtFindReplace(txt("question")["date"], {
          kind: "Bundestagsabstimmung",
          date: "20. Januar 2021",
        })}
      </div>
    </div>
  );
}
