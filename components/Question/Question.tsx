import React from "react";
import styles from "./Question.module.css";
import txtjson from "../../assets/json/text.json";
import { txt } from "../../assets/utils/txt";

export type QuestionType = {
  value: string;
};

export default function Question({ value }: QuestionType) {
  return (
    <div className={styles.container}>
      <div className={styles.question}>{value}</div>
      <div className={styles["question-info"]}>
        {txt(txtjson.question.date, {
          kind: "Bundestagsabstimmung",
          date: "20. Januar 2021",
        })}
      </div>
    </div>
  );
}
