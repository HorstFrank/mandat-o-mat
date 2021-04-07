import React, { useEffect, useState } from "react";
import Question from "../components/Question/Question";
import QuestionButtonSet from "../components/QuestionButtonset/QuestionButtonset";
import QuestionPDFLink from "../components/QuestionPDFLink/QuestionPDFLink";
import QuestionPDFmodal from "../components/QuestionPDFmodal/QuestionPDFmodal";
import QuestionState from "../components/QuestionState/QuestionState";

import styles from "../styles/question.module.css";
import gdata from "../assets/json/polls_ag_questions 2.json";

const questionIds = Object.keys(gdata);
const question = (n) => gdata[questionIds[n]];
const getJsonItem = (v) => JSON.parse(localStorage.getItem(v));
const setJsonItem = (k, v) => localStorage.setItem(k, JSON.stringify(v));

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(
    getJsonItem("questionState") ? getJsonItem("questionState") : 0
  );
  const [usrResult, setUsrResult] = useState(
    getJsonItem("usrResult") ? getJsonItem("usrResult") : []
  );
  const pushUsrResult = (v) => {
    const newUsrArr = getJsonItem("usrResult");
    newUsrArr.push(v);
    setUsrResult(newUsrArr);
  };

  const fractions = [
    "SPD",
    "FDP",
    "CDU/CSU",
    "DIE LINKE",
    "DIE GR\u00dcNEN",
    "AfD",
  ];

  useEffect(() => {
    setJsonItem("usrResult", usrResult);
    setJsonItem("questionState", questionNumber);
    // console.log(usrResult);
  }, [usrResult]);

  function handleQestionResult(usrVoteValue) {
    const result = getFractionVotes(
      usrVoteValue.questionId,
      usrVoteValue.usrVote
    );
    usrVoteValue = Object.assign(usrVoteValue, result);
    setQuestionNumber(questionNumber + 1);

    pushUsrResult(usrVoteValue);
  }

  function getFractionVotes(questionId, usrVote) {
    const fractionVotes = gdata[questionId]["poll_result"].fraction;

    const resultVotes = {};
    const resultRatio = {};
    let totalVotes = 0;

    fractions.map((name) => {
      resultVotes[name] = fractionVotes[name][usrVote]
        ? fractionVotes[name][usrVote]
        : 0;
      totalVotes += resultVotes[name];
    });

    fractions.map((name) => {
      resultRatio[name] = fractionVotes[name][usrVote]
        ? fractionVotes[name][usrVote] / totalVotes
        : 0;
    });

    return { result: resultVotes, ratio: resultRatio };
  }

  return (
    <div className={styles.container}>
      {questionset(
        questionNumber + 1,
        questionIds.length,
        // question(questionNumber).question,
        question(questionNumber).label,
        "/pdfs/1927800.pdf",
        handleQestionResult
      )}
    </div>
  );
}

function questionset(
  questionNumber,
  questionTotal,
  questionLabel,
  pdfUrl,
  clickHandlerResult
) {
  const [modalState, setmodalState] = useState(false);
  const clickHandler = () => setmodalState(!modalState);
  return (
    <>
      <QuestionState
        questionNumber={questionNumber}
        questionTotal={questionTotal}
      />

      <Question value={questionLabel} />

      <QuestionPDFLink onClick={clickHandler} />
      <QuestionButtonSet
        handleClick={clickHandlerResult}
        questionNumber={+questionIds[questionNumber]}
      />
      <QuestionPDFmodal
        url={pdfUrl}
        // url="http://dipbt.bundestag.de/dip21/btd/19/278/1927800.pdf"
        state={modalState}
        onClick={clickHandler}
      />
    </>
  );
}
