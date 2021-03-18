import {SVGProps} from "react";

/*
memo:
SVGAttributes<T>.style?: CSSProperties
*/

export default function Logo(props): SVGProps<SVGRectElement> {
  const param = {
    fill: props.fill || "#CACACA",
    crossfill: props.crossfill || "orange",
  };

  return (
    <svg x="0px" y="0px" viewBox="0 0 513.29 101.12">
      <g id="crosstionmark-icon">
        <g id="questionmark">
          <rect fill={param.fill} x="310.96" y="73.1" width="9.71" height="14.04" />
          <rect fill={param.fill} x="310.96" y="91.41" width="9.71" height="9.71" />
          <path
            fill={param.fill}
            d="M315.08,3.77c-21.41,0-38.77,17.36-38.77,38.77c0,2.99,0.34,5.9,0.98,8.7l7.99-1.91c-0.5-2.18-0.76-4.46-0.76-6.79
   c0-16.88,13.68-30.56,30.56-30.56s30.56,13.68,30.56,30.56S331.96,73.1,315.08,73.1v8.21c21.41,0,38.77-17.36,38.77-38.77
   S336.49,3.77,315.08,3.77z"
          />
          <g id="cross">
            <polygon
              fill={param.crossfill}
              points="348.79,84.74 271.21,13.43 282.4,0 359.97,70.32 "
            />
            <polygon
              fill={param.crossfill}
              points="282.32,86.91 271.29,73.34 351.48,1.37 362.51,13.93 "
            />
          </g>
        </g>
      </g>

      <g>
        <g id="text-mandat">
          <path
            fill={param.fill}
            d="M0,14.81h6.58l13.23,31.04l12.97-31.04h6.6v47.62H32.4v-29.7h-0.16l-9.65,22.87h-5.82L7.11,32.74H6.98v29.7H0V14.81z"
          />
          <path
            fill={param.fill}
            d="M73.93,51.79H56.44L52.9,62.44h-7.4l16.77-47.62h5.85l16.77,47.62h-7.37L73.93,51.79z M71.94,45.39l-6.68-20.83h-0.13
       l-6.68,20.83H71.94z"
          />
          <path
            fill={param.fill}
            d="M91.09,14.81h6.58l20.89,33.86h0.13V14.81h6.98v47.62h-6.62L98.2,28.58h-0.13v33.86h-6.98V14.81z"
          />
          <path
            fill={param.fill}
            d="M135.52,14.81h16.14c6.25,0.04,10.93,2.72,14.05,8.04c1.12,1.79,1.82,3.66,2.12,5.62c0.23,1.96,0.35,5.35,0.35,10.16
       c0,5.12-0.18,8.69-0.54,10.71c-0.17,1.02-0.42,1.94-0.76,2.74c-0.36,0.78-0.79,1.6-1.3,2.45c-1.35,2.24-3.23,4.09-5.63,5.55
       c-2.38,1.57-5.31,2.35-8.77,2.35h-15.66V14.81z M142.5,55.65h8.36c3.93,0,6.78-1.39,8.55-4.16c0.78-1.03,1.28-2.32,1.49-3.9
       c0.19-1.55,0.29-4.45,0.29-8.71c0-4.15-0.1-7.11-0.29-8.9c-0.25-1.79-0.85-3.24-1.81-4.35c-1.94-2.77-4.69-4.11-8.24-4.03h-8.36
       V55.65z"
          />
          <path
            fill={param.fill}
            d="M200.62,51.79h-17.49l-3.54,10.65h-7.4l16.77-47.62h5.85l16.77,47.62h-7.37L200.62,51.79z M198.63,45.39l-6.68-20.83
       h-0.13l-6.68,20.83H198.63z"
          />
          <path
            fill={param.fill}
            d="M223.62,21.21h-12.64v-6.4h32.28v6.4H230.6v41.23h-6.98V21.21z"
          />
          <path fill={param.fill} d="M242.23,40.52h19.46v6.79h-19.46V40.52z" />
        </g>
      </g>

      <g>
        <g>
          <path fill={param.fill} d="M366.75,40.52h19.46v6.79h-19.46V40.52z" />
          <path
            fill={param.fill}
            d="M395.39,14.81h6.58l13.23,31.04l12.97-31.04h6.6v47.62h-6.98v-29.7h-0.16l-9.66,22.87h-5.82l-9.66-22.87h-0.13v29.7h-6.98
       V14.81z"
          />
          <path
            fill={param.fill}
            d="M470.66,51.79h-17.5l-3.54,10.65h-7.4l16.77-47.62h5.85l16.77,47.62h-7.37L470.66,51.79z M468.67,45.39l-6.68-20.83h-0.13
       l-6.68,20.83H468.67z"
          />
          <path
            fill={param.fill}
            d="M493.65,21.21h-12.64v-6.4h32.28v6.4h-12.65v41.23h-6.98V21.21z"
          />
        </g>
      </g>
    </svg>
  );
}
