import React, { useState } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import styles from "../styles/info.module.css";
import { txt } from "../assets/utils/txt";
import txtjson from "../assets/json/text.json";

import parse from "html-react-parser";

export default function Home() {
  const [topNavState, setTopNavSelection] = useState("thisapp");

  const handleClick = (selectKey) => {
    setTopNavSelection(selectKey);
  };

  return (
    <div className={styles.container}>
      <TopNavigation selectKey="thisapp" handleClick={handleClick} />
      <div>{txt(txtjson.infotext[topNavState])}</div>
    </div>
  );
}
