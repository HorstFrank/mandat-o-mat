import IconType from "../../types/IconType";

export default function IconSettings(props: IconType) {
  const pathprops = {
    fill: props.fill || "none",
    stroke: props.color || props.stroke || "black",
    "stroke-linecap": props.strokeLinecap || "round",
    "stroke-linejoin": props.strokelinejoin || "round",
    "stroke-width": props.strokeWidth || 1,
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 36 36" transform="scale(1,1)">
      <path d="M22.5,18A4.5,4.5,0,1,1,18,13.5,4.5,4.5,0,0,1,22.5,18Z" {...pathprops} />
      <path
        d="M29.1,22.5a2.475,2.475,0,0,0,.495,2.73l.09.09a3,3,0,1,1-4.245,4.245l-.09-.09a2.5,2.5,0,0,0-4.23,1.77V31.5a3,3,0,1,1-6,0v-.135A2.475,2.475,0,0,0,13.5,29.1a2.475,2.475,0,0,0-2.73.495l-.09.09A3,3,0,1,1,6.435,25.44l.09-.09a2.5,2.5,0,0,0-1.77-4.23H4.5a3,3,0,1,1,0-6h.135A2.475,2.475,0,0,0,6.9,13.5a2.475,2.475,0,0,0-.5-2.73l-.09-.09A3,3,0,1,1,10.56,6.435l.09.09a2.475,2.475,0,0,0,2.73.495h.12A2.475,2.475,0,0,0,15,4.755V4.5a3,3,0,0,1,6,0v.135a2.5,2.5,0,0,0,4.23,1.77l.09-.09a3,3,0,1,1,4.245,4.245l-.09.09a2.475,2.475,0,0,0-.5,2.73v.12A2.475,2.475,0,0,0,31.245,15H31.5a3,3,0,0,1,0,6h-.135A2.475,2.475,0,0,0,29.1,22.5Z"
        {...pathprops}
      />
    </svg>
  );
}
