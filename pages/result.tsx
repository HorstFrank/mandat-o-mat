import React from "react";
import { txt, txtFindReplace } from "../assets/utils/txt";
import styles from "../styles/result.module.css";
import rd3 from "react-d3-library";
import Donut from "../components/Donut/Donut";

const RD3Component = rd3.Component;

export default function Result() {
  const isCalculated = true;

  return (
    <div className={styles.container}>
      {!isCalculated && (
        <>
          <div
            className={styles.default}
            dangerouslySetInnerHTML={{ __html: txt("result").default.content }}
          ></div>
          <div className={styles["hint-arrow-group"]}>
            <div>
              <svg className={styles["svg-arrow"]} viewBox="0 0 83.17 73.105">
                <path
                  d="M1398.352,1404.98s-11.271-74.093,75.491-71.711"
                  transform="translate(-1390.688 -1332.712)"
                  fill="none"
                  stroke="#ffcf05"
                  stroke-width="1"
                />
                <path
                  d="M1381.563,1396.888l7.414,6.339,6.4-8.073"
                  transform="translate(-1381.238 -1330.84)"
                  fill="none"
                  stroke="#ffcf05"
                  stroke-width="1"
                />
              </svg>
            </div>
            <div
              className={styles["hint-text"]}
              dangerouslySetInnerHTML={{
                __html: txt("result").default.hint,
              }}
            ></div>
          </div>
        </>
      )}
      {isCalculated && (
        <>
          <div
            className={styles.result}
            dangerouslySetInnerHTML={{
              __html: txtFindReplace(txt("result").result.content, {
                p: "26",
                fraction: "ABC",
              }),
            }}
          ></div>
          <div>
            <Donut />
          </div>
        </>
      )}
    </div>
  );
}
