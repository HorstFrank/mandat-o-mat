import React from "react";
import BottomNavigation from "../components/bottomnav/BottomNavigation";
import Header from "../components/header/Header";
import QuestionButtonSet from "../components/QuestionButtonset/QuestionButtonset";
import styles from "../styles/Home.module.css";

export default function Home() {
  const devalert = (v) => alert(v);

  function handleClick(value) {
    devalert(value);
  }

  return (
    <div className={styles.container}>
      selected state: <br />
      question view <br />
    </div>
  );
}
