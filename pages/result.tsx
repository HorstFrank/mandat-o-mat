import React, { useEffect, useState } from "react";
import { txt, txtFindReplace } from "../assets/utils/txt";
import styles from "../styles/result.module.css";
import Donut from "../components/Donut/Donut";

const getJsonItem = (v: string) => JSON.parse(localStorage.getItem(v));
const sumValues = (obj: object) => Object.values(obj).reduce((a, b) => a + b);

export default function Result() {
  const [usrResult, setUsrResult] = useState(getJsonItem("usrResult"));
  const [percent, setPercent] = useState<object>({ "": 100 });
  const [draworder, setDraworder] = useState(null);
  const [primary, setPrimary] = useState([]);
  const [maxValue, setMaxvalue] = useState(100);

  useEffect(() => {
    // if (isCalculated) {

    const sumOfVotes = mergeUserVotes(usrResult.map((e) => e.ratio));
    const percent = createPercentOfValues(sumOfVotes, 100);
    const drawOrderArray = reOrderFractions(percent).map((i) => i.key);
    const maxValue = Math.max(...Object.values<number>(percent));

    setPercent(percent);
    setDraworder(drawOrderArray);
    setMaxvalue(maxValue);

    const primaryKeyArray = reOrderFractions(percent)
      .filter((i) => i.value === maxValue)
      .map((i) => i.key);

    setPrimary(primaryKeyArray);

    // console.log({ usrResult });
    // console.log({ sumOfVotes });
    // console.log({ percent });
    // console.log({ primaryKeyArray });
    // console.log({ maxValue });
    // }
  }, []);

  const isCalculated = usrResult.length > 1;

  return (
    <div className={styles.container}>
      {!isCalculated && createNotEnoughData()}
      {isCalculated && (
        <>
          <div
            className={styles.result}
            dangerouslySetInnerHTML={{
              __html: txtFindReplace(txt("result").result.content, {
                p: maxValue.toFixed(1),
                fraction: primary.join(", "),
              }),
            }}
          ></div>
          <div>
            <Donut
              data={percent}
              draworder={draworder}
              primary={primary}
              decimalPlaces={1}
            />
          </div>
        </>
      )}
    </div>
  );
}

function reOrderFractions(dataObject) {
  /* This Function order the minor values to the edges of the array */

  /* 
  Example:

 Given:  
dataObject = 
{AfD: 7,
CDU/CSU: 21,
DIE LINKE: 18,
DIE GRÜNEN: 25,
FDP: 13,
SPD: 14}

Result:
orderedArr =
[
{label: "AfD", value: 7},
{label: "SPD", value: 14},
{label: "CDU/CSU", value: 21},
{label: "DIE GRÜNEN", value: 25},
{label: "DIE LINKE", value: 18},
{label: "FDP", value: 13}
]

  */

  const arr = Object.keys(dataObject)
    .map((i) => ({ key: i, value: dataObject[i] }))
    .sort((a, b) => a.value - b.value);

  const oddKey = arr.filter((_, k) => k % 2);
  const evenKey = arr.filter((_, k) => !(k % 2));
  const ordered = evenKey.concat(oddKey.reverse());
  return ordered;
}

function createNotEnoughData() {
  return (
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
              strokeWidth="1"
            />
            <path
              d="M1381.563,1396.888l7.414,6.339,6.4-8.073"
              transform="translate(-1381.238 -1330.84)"
              fill="none"
              stroke="#ffcf05"
              strokeWidth="1"
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
  );
}

function mergeUserVotes(data) {
  /*
  Example:
  given (data):
  [{a:2,b:3},{b:4,c:5},{a:3,c:6}]
  result:
  {a:5,b:7,c:11}
  */
  const result = {};
  data.forEach((singleUserVote) => {
    for (const [key, value] of Object.entries(singleUserVote)) {
      result[key] = result[key] ? result[key] + value : value;
    }
  });
  return result;
}

function createPercentOfValues(dataObject, floatingpoints = 1) {
  /*
  Example:
  given (dataObject):
  {a:10,b:5,c:2.5,d:2.5}
  result (20 == 100%):
  {a:50,b:25,c:12.5,d:12.5}
  */

  const sum = sumValues(dataObject);

  const result = {};
  Object.keys(dataObject).map((key) => {
    result[key] = +((dataObject[key] * 100) / sum).toFixed(floatingpoints);
  });

  return result;
}
