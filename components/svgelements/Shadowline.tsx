export type ShadowlineProps = {
  fill?: string;
};

export default function Shadowline(props: ShadowlineProps) {
  return (
    <div>
      <svg x="0px" y="0px" viewBox="0 0 10.18 26.331">
        <path
          fill="#252525"
          d="M-21.241,26.331L5.09,0l-20.647,26.331H-21.241z"
        />
        <path
          fill="#252525"
          d="M-16.151,26.331L10.18,0l-20.647,26.331H-16.151z"
        />
        <path
          fill="#252525"
          d="M-11.061,26.331L15.27,0L-5.377,26.331H-11.061z"
        />
        <path fill="#252525" d="M-5.971,26.331L20.36,0L-0.287,26.331H-5.971z" />
        <path fill="#252525" d="M-0.881,26.331L25.45,0L4.803,26.331H-0.881z" />
        <path fill="#252525" d="M4.209,26.331L30.54,0L9.893,26.331H4.209z" />
        <path fill="#252525" d="M9.299,26.331L35.63,0L14.983,26.331H9.299z" />
      </svg>
    </div>
  );
}
