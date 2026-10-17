export type ProcessIcon = "chat" | "browser" | "rocket" | "wrench";

/** One tilted panel. The step name sits in HTML outside this SVG so it stays crisp. */
export default function ProcessPanel({
  tilt,
  step,
  icon,
}: {
  tilt: number;
  step: string;
  icon: ProcessIcon;
}) {
  return (
    <svg
      viewBox="0 0 220 230"
      className="mx-auto block h-auto w-full max-w-[210px]"
      fill="none"
      aria-hidden="true"
      focusable="false"
      textRendering="geometricPrecision"
      shapeRendering="geometricPrecision"
    >
      <g transform={`rotate(${tilt} 110 115)`}>
        <rect x="22" y="22" width="176" height="186" rx="26" fill="#0B4F9E" />
        <rect
          x="8"
          y="8"
          width="176"
          height="186"
          rx="26"
          fill="#121826"
          stroke="#1E7FEB"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x="28"
          y="46"
          fill="#4DA3FF"
          fontSize="13"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="600"
        >
          {step}
        </text>
        <Icon icon={icon} />
      </g>
    </svg>
  );
}

function Icon({ icon }: { icon: ProcessIcon }) {
  const stroke = {
    fill: "none" as const,
    stroke: "#F4F7FB",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    vectorEffect: "non-scaling-stroke" as const,
  };

  if (icon === "chat") {
    return (
      <g transform="translate(70 78)">
        <path
          {...stroke}
          d="M10 8 h44 a10 10 0 0 1 10 10 v22 a10 10 0 0 1 -10 10 H36 l-12 10 v-10 H10 A10 10 0 0 1 0 40 V18 A10 10 0 0 1 10 8 z"
        />
      </g>
    );
  }

  if (icon === "browser") {
    return (
      <g transform="translate(62 78)">
        <rect {...stroke} x="0" y="4" width="68" height="52" rx="8" />
        <path {...stroke} d="M0 18 h68" stroke="#4DA3FF" />
        <circle cx="12" cy="11" r="1.6" fill="#4DA3FF" />
        <circle cx="20" cy="11" r="1.6" fill="#4DA3FF" />
        <circle cx="28" cy="11" r="1.6" fill="#4DA3FF" />
        <rect x="12" y="28" width="32" height="6" rx="3" fill="#1E7FEB" />
        <rect x="12" y="40" width="44" height="6" rx="3" fill="#2A3548" />
      </g>
    );
  }

  if (icon === "rocket") {
    return (
      <g transform="translate(78 70)">
        <path
          {...stroke}
          d="M20 4 c0 0 16 12 16 28 v14 H4 V32 C4 16 20 4 20 4 z"
        />
        <path {...stroke} d="M4 34 L-2 48 h8" />
        <path {...stroke} d="M36 34 l6 14 h-8" />
        <circle {...stroke} cx="20" cy="26" r="4" />
        <path d="M14 52 h12" stroke="#4DA3FF" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </g>
    );
  }

  return (
    <g transform="translate(74 78)">
      <path
        {...stroke}
        d="M38 10 a10 10 0 0 0 -13 12 L8 39 l10 10 17 -17 a10 10 0 0 0 12 -13 l-8 8 -8 -8 z"
      />
    </g>
  );
}
