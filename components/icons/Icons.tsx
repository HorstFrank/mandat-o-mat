import styles from "./Icons.module.css";

export type IconProps = {
  kind?: string;
  width?: string;
  margin?: string;
  fill?: string;
  color?: string;
  className?: string;
  props?: object;
};

export default function Icon({
  width = "100%",
  margin = 0,
  ...props
}: IconProps) {
  const pathprops = {
    className: props.className || "",
    fill: props.fill || props.color,
    "primary-fill": props["primary-fill"] || props.fill || props.color,
  };

  return (
    <svg
      className={styles.iconsvg}
      style={{ width: width, margin: margin }}
      viewBox="0 0 40 40"
    >
      {/* -------- Close Icon -------- */}
      {props.kind === "close" && (
        <g transform="translate(0.5 0.5)">
          <circle
            fill={pathprops["primary-fill"]}
            cx="19.5"
            cy="19.43"
            r="20"
          />
          <path
            d="M19.639,3.638c-8.724,0-15.763,7.039-15.763,15.862c0,1.19,0.099,2.379,0.397,3.569
		l3.272-0.793c-1.487-6.741,2.677-13.384,9.418-14.871s13.384,2.677,14.871,9.418s-2.677,13.384-9.418,14.871
		c-0.892,0.198-1.884,0.297-2.776,0.297v3.371c8.724,0,15.763-7.039,15.763-15.763C35.402,10.677,28.363,3.638,19.639,3.638
		L19.639,3.638z"
            {...pathprops}
          />
          <g transform="translate(11.961 12.533)">
            <path d="M1.79,1.547l11.797,11.698" {...pathprops} />
            <path
              d="M13.587,14.732c-0.397,0-0.793-0.099-1.091-0.397L0.699,2.638c-0.595-0.595-0.595-1.487,0-2.082
				S2.286-0.039,2.88,0.457l11.797,11.698c0.595,0.595,0.595,1.487,0,2.082C14.38,14.633,13.984,14.732,13.587,14.732z"
              {...pathprops}
            />
            <path d="M13.587,1.547L1.79,13.245" {...pathprops} />
            <path
              d="M1.79,14.732c-0.397,0-0.793-0.099-1.091-0.397c-0.595-0.595-0.595-1.487,0-2.082L12.497,0.457
				c0.595-0.595,1.487-0.595,2.082,0c0.595,0.595,0.595,1.487,0,2.082L2.88,14.336C2.583,14.633,2.187,14.732,1.79,14.732z"
              {...pathprops}
            />
          </g>
        </g>
      )}
      {/* -------- PDF Icon -------- */}
      {props.kind === "pdf" && (
        <g transform="translate(1 1)">
          <g transform="translate(4.948 7.563)">
            <path
              d="M2.218,25.372c-0.252,0-0.503-0.095-0.696-0.281c-0.376-0.365-0.407-0.958-0.072-1.361
			c0.393-0.47,0.795-0.913,1.203-1.33c1.881-2.402,5.292-8.328,3.158-17.902c-0.152-0.548-0.21-0.884-0.217-0.924
			C5.507,3.044,5.853,2.54,6.378,2.43c0.527-0.106,1.043,0.215,1.174,0.736c0.081,0.321,0.156,0.638,0.225,0.952
			C8.511,6.697,11.521,14.134,22.151,16.2c0.009,0.002,0.017,0.003,0.023,0.004c0.541,0.107,0.893,0.632,0.787,1.174
			c-0.106,0.54-0.625,0.898-1.172,0.789c-0.001,0-0.003,0-0.004,0c-0.179-0.035-10.28-1.862-17.668,5.6
			c-0.662,0.83-1.154,1.279-1.234,1.349C2.694,25.287,2.456,25.372,2.218,25.372z M8.49,10.047c0.05,3.687-0.689,6.697-1.646,9.029
			c3.039-1.833,6.149-2.649,8.766-2.972C12.136,14.357,9.893,12.028,8.49,10.047z"
              {...pathprops}
            />
          </g>
          <path
            d="M32.236,39H0c-0.553,0-1-0.447-1-1V0.02c0-0.553,0.448-1,1-1h22.338
		c0.263,0,0.516,0.104,0.702,0.288l9.897,9.768c0.191,0.188,0.298,0.445,0.298,0.712V38C33.237,38.553,32.789,39,32.236,39z
		 M1.001,36.999h30.235V10.206l-9.307-9.186H1.001V36.999z"
            {...pathprops}
          />
          <path
            d="M32.026,12.559H20.51c-0.553,0-1-0.448-1-1V0.02h2.001v10.537h10.516V12.559z"
            {...pathprops}
          />
        </g>
      )}
      {/* -------- Settings Icon -------- */}
      {props.kind === "settings" && (
        <g transform="translate(1 1)">
          <path
            d="M19,25.1c-3.4,0-6.1-2.8-6.1-6.1s2.8-6.1,6.1-6.1c0,0,0,0,0,0c1.6,0,3.2,0.6,4.3,1.8c1.2,1.2,1.8,2.7,1.8,4.3
              v0C25.1,22.4,22.3,25.1,19,25.1z M19,14.9C19,14.9,19,14.9,19,14.9c-2.3,0-4.1,1.9-4.1,4.1s1.9,4.1,4.1,4.1c2.3,0,4.1-1.9,4.1-4.1
              c0-1.1-0.4-2.1-1.2-2.9C21.1,15.3,20.1,14.9,19,14.9z"
            {...pathprops}
          />
          <path
            d="M19.1,38.9c-2.4,0-4.4-1.9-4.4-4.4v-0.3c0-0.7-0.5-1.4-1.2-1.6c-0.7-0.3-1.5-0.2-2.1,0.3L11.3,33
              c-1.7,1.7-4.5,1.8-6.3,0.1c-1.8-1.7-1.8-4.5-0.1-6.3c0,0,0.1-0.1,0.1-0.1l0.1-0.1c0.7-0.7,0.7-1.9,0-2.6c-0.3-0.3-0.8-0.5-1.3-0.5
              H3.6c-2.4,0-4.4-1.9-4.5-4.4c0-1.2,0.4-2.3,1.2-3.1c0.8-0.8,1.9-1.3,3.1-1.3h0.3c0.7,0,1.4-0.5,1.6-1.2C5.7,12.8,5.5,12,5,11.4
              l-0.1-0.1C3.2,9.7,3.1,6.9,4.8,5.1C6.5,3.4,9.3,3.3,11.1,5c0,0,0.1,0.1,0.1,0.1l0.1,0.1c0.5,0.5,1.3,0.7,2,0.4
              c0.1,0,0.2-0.1,0.3-0.1c0.6-0.3,1-0.9,1-1.6V3.6c0-1.2,0.4-2.3,1.2-3.1s1.9-1.3,3.1-1.3c2.5,0,4.5,1.9,4.5,4.4v0.3
              c0,0.5,0.2,0.9,0.6,1.3c0.4,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5L26.6,5c0.8-0.8,1.9-1.3,3.1-1.3c1.2,0,2.3,0.4,3.1,1.3
              c1.8,1.7,1.8,4.5,0.1,6.3c0,0-0.1,0.1-0.1,0.1l-0.1,0.1c-0.5,0.5-0.7,1.3-0.4,2c0,0.1,0.1,0.2,0.1,0.3c0.3,0.6,0.9,0.9,1.6,1h0.3
              c1.2,0,2.3,0.4,3.1,1.2c0.8,0.8,1.3,1.9,1.3,3.1c0,2.4-1.9,4.5-4.4,4.5h-0.3c-0.7,0-1.4,0.4-1.7,1.1c0,0,0,0,0,0.1
              c-0.3,0.7-0.1,1.4,0.4,2l0.1,0.1c0.8,0.8,1.3,1.9,1.3,3.1c0,1.2-0.4,2.3-1.2,3.1c-0.8,0.8-1.9,1.3-3.1,1.3c0,0,0,0-0.1,0
              c-1.2,0-2.3-0.4-3.1-1.3c0,0-0.1-0.1-0.1-0.1l-0.1-0.1c-0.3-0.3-0.8-0.5-1.3-0.5c-0.5,0-1,0.2-1.3,0.6c-0.3,0.3-0.5,0.8-0.5,1.3
              v0.3C23.6,36.8,21.6,38.8,19.1,38.9C19.2,38.9,19.1,38.9,19.1,38.9z M12.7,30.4c0.5,0,1,0.1,1.5,0.3c1.4,0.5,2.4,1.9,2.4,3.5
              l0,0.2c0,1.4,1.1,2.5,2.4,2.5c0,0,0,0,0,0c1.3,0,2.4-1.1,2.4-2.5v-0.3c0-1,0.4-1.9,1.1-2.7c0.7-0.7,1.7-1.2,2.7-1.2
              c1,0,2,0.4,2.7,1.1l0.1,0.1c0.5,0.5,1.1,0.7,1.7,0.7c0,0,0,0,0,0c0.6,0,1.3-0.3,1.7-0.7c0.9-1,0.9-2.5,0-3.4L31.5,28
              c-1.1-1.1-1.4-2.8-0.8-4.2c0,0,0-0.1,0-0.1c0.6-1.4,2-2.2,3.5-2.2h0.3c1.3,0,2.4-1.1,2.4-2.5c0-0.6-0.3-1.3-0.7-1.7
              c-0.5-0.5-1.1-0.7-1.7-0.7h-0.3c-1.5,0-2.9-0.9-3.5-2.3c0-0.1-0.1-0.2-0.1-0.3c-0.5-1.4-0.2-2.9,0.8-4l0.1-0.1
              c0,0,0.1-0.1,0.1-0.1c0.9-0.9,0.9-2.5-0.1-3.4c-0.5-0.5-1.1-0.7-1.7-0.7c-0.6,0-1.3,0.3-1.7,0.7l-0.1,0.1
              c-0.7,0.7-1.7,1.1-2.7,1.1c-1,0-2-0.4-2.7-1.1c-0.7-0.7-1.1-1.7-1.1-2.7V3.6c0-1.4-1.1-2.5-2.5-2.5c-0.6,0-1.3,0.3-1.7,0.7
              c-0.5,0.5-0.7,1.1-0.7,1.7v0.3c0,1.5-0.9,2.9-2.3,3.5c-0.1,0-0.2,0.1-0.3,0.1c-1.4,0.5-2.9,0.2-4-0.8L9.8,6.5c-1-1-2.6-1-3.5,0
              c-0.9,1-0.9,2.5,0,3.4L6.4,10c1.1,1.1,1.4,2.8,0.8,4.2c-0.5,1.4-1.9,2.4-3.5,2.4l-0.2,0c-1.4,0-2.5,1.1-2.5,2.5
              c0,1.3,1.1,2.4,2.5,2.4h0.3c1,0,1.9,0.4,2.7,1.1c1.5,1.5,1.6,3.9,0.1,5.4l-0.1,0.1c-1,1-1,2.6,0,3.5c1,0.9,2.5,0.9,3.4-0.1
              l0.1-0.1C10.7,30.8,11.7,30.4,12.7,30.4z"
            {...pathprops}
          />
        </g>
      )}
      {/* -------- Info Icon -------- */}
      {props.kind === "info" && (
        <g>
          <g id="Icon_feather-info" transform="translate(1 1)">
            <path
              d="M18.9,39C7.9,39-1,30-1,19S7.9-0.9,18.9-0.9c11,0,19.9,8.9,19.9,19.9C38.9,30,29.9,39,18.9,39z M18.9,1.1
			C9.1,1.1,1,9.1,1,19c0,9.9,8,17.9,17.9,17.9c9.9,0,17.9-8,17.9-17.9C36.8,9.1,28.8,1.1,18.9,1.1z"
              {...pathprops}
            />
            <path
              d="M18.9,27.6c-0.6,0-1-0.5-1-1V19c0-0.6,0.5-1,1-1c0.6,0,1,0.5,1,1v7.6C19.9,27.1,19.5,27.6,18.9,27.6z"
              {...pathprops}
            />
            <path
              d="M18.9,12.5c-0.3,0-0.5-0.1-0.7-0.3C18.1,12.1,18,12,18,11.8c-0.1-0.1-0.1-0.3-0.1-0.4c0-0.1,0-0.1,0-0.2
			c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0.4-0.4,1-0.4,1.4,0c0.1,0.1,0.1,0.1,0.1,0.2
			c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3
			c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1C19.1,12.5,19,12.5,18.9,12.5z"
              {...pathprops}
            />
          </g>
        </g>
      )}
      {/* -------- result Icon -------- */}
      {props.kind === "result" && (
        <g>
          <g transform="translate(-122.286 -400.988)">
            <path
              d="M142.3,441c-11,0-20-9-20-20c0-11,9-20,20-20c11,0,20,9,20,20C162.3,432,153.3,441,142.3,441z M142.3,403
			c-9.9,0-17.9,8.1-17.9,17.9s8.1,17.9,17.9,17.9s17.9-8.1,17.9-17.9S152.2,403,142.3,403z"
              {...pathprops}
            />
            <rect
              x="150.8"
              y="412.2"
              transform="matrix(8.338489e-02 -0.9965 0.9965 8.338489e-02 -281.1319 537.94)"
              width="2.1"
              height="19.2"
              {...pathprops}
            />
            <rect x="141.3" y="402" width="2.1" height="19" {...pathprops} />
            <rect
              x="129.1"
              y="428.7"
              transform="matrix(0.3945 -0.9189 0.9189 0.3945 -310.9694 387.4871)"
              width="19"
              height="2.1"
              {...pathprops}
            />
            <rect
              x="137.5"
              y="411.7"
              transform="matrix(0.499 -0.8666 0.8666 0.499 -283.9559 334.2178)"
              width="19.2"
              height="2.1"
              {...pathprops}
            />
          </g>
        </g>
      )}
      {/* -------- Question Icon -------- */}
      {props.kind === "question" && (
        <g>
          <g transform="translate(11.961 12.533)">
            <path
              d="M14.4,11.3c-0.4,0-0.8-0.1-1.1-0.4L1.4-0.9c-0.6-0.6-0.6-1.5,0-2.1C2-3.6,3-3.6,3.6-3.1L15.5,8.7
             c0.6,0.6,0.6,1.5,0,2.1C15.2,11.2,14.8,11.3,14.4,11.3z"
              {...pathprops}
            />

            <path
              d="M2.5,11.3c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1L13.3-3.1c0.6-0.6,1.5-0.6,2.1,0
             c0.6,0.6,0.6,1.5,0,2.1L3.6,10.9C3.3,11.2,2.9,11.3,2.5,11.3z"
              {...pathprops}
            />
          </g>
          <g transform="translate(0.5 0.5)">
            <rect x="18.2" y="28" width="4" height="5.8" {...pathprops} />
            <rect x="18.2" y="35.5" width="4" height="4" {...pathprops} />
            <path
              d="M19.9-0.5C11.1-0.5,4,6.6,4,15.5c0,1.2,0.1,2.4,0.4,3.6l3.3-0.8c-1.5-6.8,2.7-13.5,9.5-15
            s13.5,2.7,15,9.5s-2.7,13.5-9.5,15c-0.9,0.2-1.9,0.3-2.8,0.3v3.4c8.8,0,15.9-7.1,15.9-15.9C35.8,6.6,28.7-0.5,19.9-0.5L19.9-0.5z"
              {...pathprops}
            />
          </g>
        </g>
      )}
    </svg>
  );
}
