import ProgressbarType from "../../types/ProgressbarType";

export default function Progressbar(props: ProgressbarType) {
  const param = {
    colorBack: props.colorBackground || "gray",
    colorProg: props.colorProgress || "orange",
    width: props.width || "100%",
    height: props.height || props.strokeWidth || 2,
    progress: props.progress || 0.5,
    x: 0,
    y: 0,
  };

  return (
    <svg width="100%" height="100%" transform="scale(1,1)">
      <rect x="0" y="0" width={param.width} height={param.height} fill={param.colorBack} />
      <rect
        x="0"
        y="0"
        width={param.width.replace(/(\d+)/g, (n: number) => +n * param.progress)}
        height={param.height}
        fill={param.colorProg}
      />
    </svg>
  );
}
