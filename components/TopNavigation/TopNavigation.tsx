import React, { useState, MouseEvent } from "react";
import styles from "./TopNavigation.module.css";
// import { txt } from "../../assets/utils/txt";
import { createKeyLabelObjectFromTxtJson } from "../../assets/utils/createKeyLabelObjectFromTxtJson";

export type TopNavigationProps = {
  selectKey: string;
  handleClick?: (key: string) => void;
};

export default function TopNavigation({
  selectKey,
  handleClick,
}: TopNavigationProps) {
  const [linestatus, setLinestatus] = useState(selectKey);

  const nav = createKeyLabelObjectFromTxtJson("topnav");

  function handleInteraction(key: string) {
    handleClick(key);
    setLinestatus(key);
  }

  return (
    <ul className={styles.container}>
      {nav.map((listelement, key) => {
        return (
          <li key={key}>
            <a href="#" onClick={() => handleInteraction(listelement.key)}>
              {listelement.label}
              <svg className={styles.svg} width="100%" height="2px">
                <rect
                  x={0}
                  y={linestatus === listelement.key ? 0 : 1}
                  width="100%"
                  height={linestatus === listelement.key ? "2px" : "1px"}
                  fill={
                    linestatus === listelement.key
                      ? "var(--primary)"
                      : "var(--text)"
                  }
                />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
