/**
 * Original security-check panel. Vector only: solid fills and 1px strokes.
 * No filters, no blur, no raster images.
 */
export default function HeroDashboard() {
  return (
    <svg
      viewBox="0 0 700 540"
      className="block h-auto w-full"
      fill="none"
      aria-hidden="true"
      focusable="false"
      textRendering="geometricPrecision"
      shapeRendering="geometricPrecision"
    >
      <g transform="translate(28 34) rotate(-8 270 200)">
        <rect x="18" y="18" width="520" height="400" rx="28" fill="#0B4F9E" />
        <rect
          x="0"
          y="0"
          width="520"
          height="400"
          rx="28"
          fill="#121826"
          stroke="#1E7FEB"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        <rect
          x="28"
          y="28"
          width="48"
          height="48"
          rx="14"
          fill="#182232"
          stroke="#1E7FEB"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M52 38 L64 43 V52.5 C64 58.2 52 64 52 64 C52 64 40 58.2 40 52.5 V43 Z"
          stroke="#4DA3FF"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
        <text
          x="90"
          y="50"
          fill="#F5F7FB"
          fontSize="22"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="600"
        >
          Security check
        </text>
        <text
          x="90"
          y="72"
          fill="#9AA8BA"
          fontSize="13"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          Passive outside review
        </text>

        <g transform="translate(372 32)">
          <rect
            width="120"
            height="40"
            rx="12"
            fill="#182232"
            stroke="#1E7FEB"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <rect x="16" y="18" width="12" height="10" rx="2" stroke="#4DA3FF" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          <path d="M18 18 v-2.5 a4 4 0 0 1 8 0 V18" stroke="#4DA3FF" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
          <text
            x="36"
            y="26"
            fill="#F5F7FB"
            fontSize="13"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            Locked
          </text>
        </g>

        <CheckRow y={112} label="HTTPS" bar={168} />
        <CheckRow y={180} label="Logins" bar={132} />
        <CheckRow y={248} label="Software" bar={150} />
        <CheckRow y={316} label="Forms" bar={112} />
      </g>

      <g transform="translate(455 355) rotate(7 100 58)">
        <rect x="12" y="12" width="200" height="108" rx="20" fill="#0B4F9E" />
        <rect
          width="200"
          height="108"
          rx="20"
          fill="#121826"
          stroke="#1E7FEB"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <rect x="18" y="22" width="14" height="12" rx="2" stroke="#4DA3FF" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
        <path d="M20.5 22 v-3 a4.5 4.5 0 0 1 9 0 V22" stroke="#4DA3FF" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
        <text
          x="44"
          y="36"
          fill="#F5F7FB"
          fontSize="14"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="600"
        >
          Active testing
        </text>
        <text
          x="18"
          y="68"
          fill="#9AA8BA"
          fontSize="12"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          Written permission only
        </text>
        <rect x="18" y="82" width="92" height="8" rx="4" fill="#1E7FEB" />
        <rect x="116" y="82" width="48" height="8" rx="4" fill="#2A3548" />
      </g>
    </svg>
  );
}

function CheckRow({ y, label, bar }: { y: number; label: string; bar: number }) {
  return (
    <g transform={`translate(28 ${y})`}>
      <rect
        width="464"
        height="56"
        rx="14"
        fill="#182232"
        stroke="#243044"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="18"
        y="34"
        fill="#F5F7FB"
        fontSize="15"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="600"
      >
        {label}
      </text>
      <rect x="150" y="16" width={bar} height="8" rx="4" fill="#1E7FEB" />
      <rect x="150" y="32" width={Math.max(72, bar - 48)} height="8" rx="4" fill="#2A3548" />
      <circle cx="428" cy="28" r="10" stroke="#1E7FEB" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
      <path
        d="M423 28.5 L427 32.5 L434 24"
        stroke="#4DA3FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}
