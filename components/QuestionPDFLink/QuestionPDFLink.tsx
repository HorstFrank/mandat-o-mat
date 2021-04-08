import React, { useState } from "react";
import { txt } from "../../assets/utils/txt";
import Icon from "../icons/Icons";
import styles from "./QuestionPDFLink.module.css";
import txtjson from "../../assets/json/text.json";

export type QuestionPDFLinkType = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function QuestionPDFLink({ onClick }: QuestionPDFLinkType) {
  const [modalstate, setmodalstate] = useState(false);

  function clickHandler() {
    setmodalstate(!modalstate);
    alert("click" + modalstate);
  }
  return (
    <div className={styles.container}>
      <a href="#" onClick={() => onClick(true)}>
        <Icon width="15px" kind="pdf" color="var(--primary)" />
        <span className={styles.label}>{txtjson.question.source}</span>
      </a>
    </div>
  );
}
