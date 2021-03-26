import React, { useState } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import styles from "../styles/info.module.css";
import { txt } from "../assets/utils/txt";

import parse from "html-react-parser";

export default function Home() {
  const [state, setstate] = useState("thisapp");

  const handleClick = (selectKey) => {
    setstate(selectKey);
  };

  return (
    <div className={styles.container}>
      <TopNavigation selectKey="thisapp" handleClick={handleClick} />
      <div>{parse(txt("infotext")[state])}</div>
    </div>
  );
}
