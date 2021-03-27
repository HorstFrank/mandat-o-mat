import { ProgressbarType } from "../../types/ProgressbarType";

export default function Progressbar({
  colorBackground,
  colorProgress,
  width = "100%",
  height = 2,
  progress = 0.5,
  x = 0,
  y = 0,
}: ProgressbarType) {
  return (
    <svg width="100%" height={`${height}px`}>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={colorBackground ? colorBackground : "var(--context-background)"}
      />
      <rect
        x={x}
        y={y}
        width={updateWidthStringWithProgress(width, progress)}
        height={height}
        fill={colorProgress ? colorProgress : "var(--primary)"}
      />
    </svg>
  );
}

function updateWidthStringWithProgress(
  width: number | string,
  progress: number
) {
  return String(width).replace(/(\d+)/g, (n: string) => String(+n * progress));
}
