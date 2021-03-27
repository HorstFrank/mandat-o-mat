import { Duplex } from "node:stream";
import React, { useState } from "react";
import Question from "../components/Question/Question";
import QuestionButtonSet from "../components/QuestionButtonset/QuestionButtonset";
import QuestionPDFLink from "../components/QuestionPDFLink/QuestionPDFLink";
import QuestionPDFmodal from "../components/QuestionPDFmodal/QuestionPDFmodal";
import QuestionState from "../components/QuestionState/QuestionState";

import styles from "../styles/question.module.css";

export default function Home() {
  const [modalState, setmodalState] = useState(false);
  const clickHandler = () => setmodalState(!modalState);

  return (
    <div className={styles.container}>
      <QuestionState questionNumber={2} questionTotal={10} />
      <Question value="dummy" />
      <QuestionPDFLink onClick={clickHandler} />
      <QuestionButtonSet />
      <QuestionPDFmodal
        url="/pdfs/1927800.pdf"
        // url="http://dipbt.bundestag.de/dip21/btd/19/278/1927800.pdf"
        state={modalState}
        onClick={clickHandler}
      />
    </div>
  );
}
