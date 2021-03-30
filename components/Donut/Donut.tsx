import React, { useState } from "react";
import { txt, txtFindReplace } from "../../assets/utils/txt";
import Icon from "../icons/Icons";
import styles from "./Donut.module.css";

export type DonutType = {
  data: object;
  primary: array;
  // onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Donut({ data, primary }: DonutType) {
  const [modalstate, setmodalstate] = useState(false);
  const rotate = (v, ox = 182, oy = 185) => `rotate(${166 * v},${ox},${oy})`;

  let percentWithLastpartys = 0;
  let percentWithLastpartyslabel = 0;
  // data = Object.keys(data).map((key) => {
  //   // data[key].start = 2;
  //   // const x = data[key];
  //   return {
  //     label: key,
  //     value: data[key],
  //     start: data[key],
  //     end: data[key],
  //   };
  //   // return {
  //   //   ...data[key],
  //   //   start: 2,
  //   //   end: 2,
  //   // };
  // });

  function clickHandler() {
    setmodalstate(!modalstate);
    alert("click" + modalstate);
  }

  return (
    <div className={styles.container}>
      <svg
        x="0px"
        y="0px"
        width="366px"
        height="180px"
        // view-box="0 0 364 199"
        // enable-background="new 0 0 364 199"
      >
        {Object.keys(data).map((party) => {
          percentWithLastpartys += data[party];
          return (
            <line
              transform={rotate(percentWithLastpartys / 100)}
              fill="none"
              stroke="var(--primary)"
              stroke-width="2"
              x1="2"
              y1="163"
              x2="130"
              y2="179"
            />
          );
        })}

        {Object.keys(data).map((party) => {
          percentWithLastpartyslabel += data[party];
          const fill = primary.includes(party)
            ? "var(--primary)"
            : "var(--icon)";
          return (
            <>
              <g
                transform={
                  rotate(
                    (percentWithLastpartyslabel - data[party] * 0.5) / 100
                  ) +
                  rotate(
                    ((percentWithLastpartyslabel - data[party] * 0.5) / 100) *
                      -1,
                    67,
                    171
                  )
                }
              >
                <g>
                  <text
                    className={styles.label}
                    font-size={(data[party] / 100) * 6 + "rem"}
                    fill={fill}
                    x="67"
                    y="171"
                  >
                    {party}
                  </text>
                  <text
                    className={styles.label}
                    font-size={(data[party] / 100) * 5 + "rem"}
                    fill={fill}
                    x="67"
                    y="171"
                    dy={(data[party] / 100) * 5.2 + "rem"}
                  >
                    {data[party]}%
                  </text>
                  {/* <circle cx="67" cy="171" r="2" fill="red" /> */}
                </g>
              </g>
            </>
          );
        })}

        <path
          fill="none"
          stroke="var(--primary)"
          stroke-width="2"
          d="M131.011,178.719
	c3.65-28.161,29.438-48.031,57.598-44.381c23.154,3.001,41.38,21.226,44.381,44.381l128.646-15.8
	c-11.041-89.394-87.254-158.6-179.635-158.6S13.407,73.526,2.364,162.919L131.011,178.719z"
        />
        <g>
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="3.608"
            y1="157.277"
            x2="53.002"
            y2="157.277"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="4.699"
            y1="147.956"
            x2="43.001"
            y2="147.956"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="7.836"
            y1="139.636"
            x2="37"
            y2="139.5"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="9.928"
            y1="132.316"
            x2="33"
            y2="132.316"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="12.648"
            y1="123.996"
            x2="32.73"
            y2="123.996"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="29.523"
            y1="165.597"
            x2="69"
            y2="165.597"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="14.74"
            y1="115.584"
            x2="34.822"
            y2="115.584"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="19.482"
            y1="107.264"
            x2="39.564"
            y2="107.264"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="22.689"
            y1="98.852"
            x2="45"
            y2="98.852"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="27.918"
            y1="90.44"
            x2="50"
            y2="90.44"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="34.821"
            y1="81.12"
            x2="55.5"
            y2="81.5"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="47.999"
            y1="65.388"
            x2="66.001"
            y2="65.388"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="54.274"
            y1="57.022"
            x2="74.356"
            y2="57.022"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="63.686"
            y1="48.656"
            x2="83.768"
            y2="48.656"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="73.355"
            y1="41.336"
            x2="91.001"
            y2="41.336"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="83.767"
            y1="34.016"
            x2="101.001"
            y2="34.016"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="94.437"
            y1="26.695"
            x2="111.001"
            y2="26.695"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="106.986"
            y1="20.421"
            x2="124.001"
            y2="20.421"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="123.718"
            y1="14.147"
            x2="140.002"
            y2="14.147"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="139.404"
            y1="8.918"
            x2="158.001"
            y2="8.918"
          />
          <line
            fill="none"
            stroke="var(--primary)"
            stroke-width="0.5"
            x1="40.003"
            y1="73.346"
            x2="60.001"
            y2="73.346"
          />
        </g>
      </svg>
    </div>
  );
}
