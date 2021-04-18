import React from "react";
import donutStripesData from "../../assets/json/donutLines.json";
import styles from "./Donut.module.css";

// export type Data = {
//   "CDU/CSU": number;
// }

export type DonutType = {
  data: Record<string, number>;
  primary: string[];
  draworder: string[];
  decimalPlaces: number;
};

export default function Donut({
  data = { undef: 100 },
  primary = [],
  draworder,
  decimalPlaces = 0,
}: DonutType) {
  draworder = draworder || Object.keys(data);

  const fontsizeFactor = 5;
  const donutSectionCenter = (f = 0.5) => ({
    x: 2 + 128 * (1 - f),
    y: 163 + 16 * (1 - f),
    cx: 2 + 128 * (1 - f),
    cy: 163 + 16 * (1 - f),
  });
  const rotateSections = (v, ox = 182, oy = 185) =>
    `rotate(${166 * v},${ox},${oy})`;
  const edgeTranslate = (rt = 0) =>
    `translate(${(128 / 2) * rt},${(16 / 2) * rt})`;
  const orderedData = draworder.map((key) => ({
    label: key,
    value: data[key],
  }));

  let totalDegreesIncludePastPartys = 0;
  let totalDegreesIncludePastPartyslabel = 0;

  return (
    <div className={styles.container}>
      <svg x="0px" y="0px" width="366px" height="180px">
        <g id="stripes">{createDonutStripes()}</g>
        <path
          id="donutshape"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2"
          d="M131.011,178.719
	c3.65-28.161,29.438-48.031,57.598-44.381c23.154,3.001,41.38,21.226,44.381,44.381l128.646-15.8
	c-11.041-89.394-87.254-158.6-179.635-158.6S13.407,73.526,2.364,162.919L131.011,178.719z"
        />
        {orderedData.map((party, index) => {
          /* --- Sepatator Lines --- */
          totalDegreesIncludePastPartys += party.value;
          return (
            <line
              key={index}
              transform={rotateSections(totalDegreesIncludePastPartys / 100)}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              x1="2"
              y1="163"
              x2="130"
              y2="179"
            />
          );
        })}
        {orderedData.map((party, index) => {
          /* --- Text Label --- */
          totalDegreesIncludePastPartyslabel += party.value;
          const fill = primary.includes(party.label)
            ? "var(--primary)"
            : "var(--icon)";
          const primaryShift = primary.includes(party.label) ? -0.25 : 0;
          return (
            <>
              <g
                transform={
                  rotateSections(
                    (totalDegreesIncludePastPartyslabel - party.value * 0.5) /
                      100
                  ) +
                  edgeTranslate(primaryShift) +
                  rotateSections(
                    ((totalDegreesIncludePastPartyslabel - party.value * 0.5) /
                      100) *
                      -1,
                    67,
                    171
                  )
                }
                key={index}
              >
                <g>
                  <g id="outline">
                    <text
                      className={`${styles.label} ${styles["label-outline"]}`}
                      fontSize={(party.value / 100) * fontsizeFactor + "rem"}
                      {...donutSectionCenter()}
                    >
                      {party.label}
                    </text>
                    <text
                      className={`${styles.label} ${styles["label-outline"]}`}
                      fontSize={
                        (party.value / 100) * (fontsizeFactor - 1) + "rem"
                      }
                      {...donutSectionCenter()}
                      dy={(party.value / 100) * (fontsizeFactor - 0.8) + "rem"}
                    >
                      {+party.value.toFixed(decimalPlaces)}%
                    </text>
                  </g>
                  <text
                    className={styles.label}
                    fontSize={(party.value / 100) * fontsizeFactor + "rem"}
                    fill={fill}
                    {...donutSectionCenter()}
                  >
                    {party.label}
                  </text>
                  <text
                    className={styles.label}
                    fontSize={
                      (party.value / 100) * (fontsizeFactor - 1) + "rem"
                    }
                    fill={fill}
                    {...donutSectionCenter()}
                    dy={(party.value / 100) * (fontsizeFactor - 0.8) + "rem"}
                  >
                    {+party.value.toFixed(decimalPlaces)}%
                  </text>
                  {/* <circle {...donutSectionCenter()} r="2" fill="red" /> */}
                </g>
              </g>
            </>
          );
        })}
      </svg>
    </div>
  );
}

function createDonutStripes() {
  return donutStripesData.map((lineData, index) => {
    return (
      <line
        key={index}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="0.5"
        {...lineData}
      />
    );
  });
}
