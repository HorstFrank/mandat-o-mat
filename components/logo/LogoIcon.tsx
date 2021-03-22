// import { SVGProps } from "react";

/*
memo:
SVGAttributes<T>.style?: CSSProperties
Pick<SVGAttributes<T>.style?: CSSProperties, fill> ??????
*/

export type LogoType = {
  fill?: string;
  crossfill?: string;
};

export default function Logo(props: LogoType) {
  const param = {
    fill: props.fill || "#CACACA",
    crossfill: props.crossfill || "orange",
  };

  return (
    <svg x="0px" y="0px" viewBox="0 0 513.29 101.12">
      <rect x="39.75" y="73.1" width="9.71" height="14.04" fill={param.fill} />
      <rect x="39.75" y="91.41" width="9.71" height="9.71" fill={param.fill} />
      <path
        d="M43.87,3.77C22.46,3.77,5.1,21.13,5.1,42.54c0,2.99,0.34,5.9,0.98,8.7l7.99-1.91c-0.5-2.18-0.76-4.46-0.76-6.79
	c0-16.88,13.68-30.56,30.56-30.56s30.56,13.68,30.56,30.56S60.75,73.1,43.87,73.1v8.21c21.41,0,38.77-17.36,38.77-38.77
	S65.28,3.77,43.87,3.77z"
        fill={param.fill}
      />
      <polygon
        points="11.11,86.91 0.08,73.34 80.27,1.37 91.3,13.93 "
        fill={param.crossfill}
      />
      <polygon
        points="77.58,84.74 0,13.43 11.19,0 88.76,70.32 "
        fill={param.crossfill}
      />
    </svg>
  );
}
