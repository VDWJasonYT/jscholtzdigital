import type { ReactNode } from "react";

/**
 * Original stacked service cards. Vector only, no filters or blur.
 */
export default function ServicesStack() {
  return (
    <svg
      viewBox="0 0 500 560"
      className="mx-auto block h-auto w-full max-w-[520px]"
      fill="none"
      aria-hidden="true"
      focusable="false"
      textRendering="geometricPrecision"
      shapeRendering="geometricPrecision"
    >
      <StackCard
        y={8}
        tilt={-7}
        number="01"
        title="Websites"
        mockup={<BrowserMock />}
      />
      <StackCard y={185} tilt={6} number="02" title="Apps" mockup={<PhoneMock />} />
      <StackCard
        y={362}
        tilt={-4}
        number="03"
        title="Security checks"
        mockup={<ShieldMock />}
      />
    </svg>
  );
}

function StackCard({
  y,
  tilt,
  number,
  title,
  mockup,
}: {
  y: number;
  tilt: number;
  number: string;
  title: string;
  mockup: ReactNode;
}) {
  return (
    <g transform={`translate(36 ${y}) rotate(${tilt} 210 78)`}>
      <rect x="14" y="14" width="420" height="156" rx="24" fill="#0B4F9E" />
      <rect
        width="420"
        height="156"
        rx="24"
        fill="#121826"
        stroke="#1E7FEB"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="28"
        y="46"
        fill="#4DA3FF"
        fontSize="14"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="600"
      >
        {number}
      </text>
      <text
        x="28"
        y="86"
        fill="#F7F8FA"
        fontSize="22"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="600"
      >
        {title}
      </text>
      <rect x="28" y="108" width="96" height="8" rx="4" fill="#1E7FEB" />
      <rect x="132" y="108" width="48" height="8" rx="4" fill="#2A3548" />
      {mockup}
    </g>
  );
}

function BrowserMock() {
  return (
    <g transform="translate(268 32)">
      <rect
        width="124"
        height="92"
        rx="12"
        fill="#182232"
        stroke="#1E7FEB"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="16" cy="16" r="2.2" fill="#4DA3FF" />
      <circle cx="26" cy="16" r="2.2" fill="#4DA3FF" />
      <circle cx="36" cy="16" r="2.2" fill="#4DA3FF" />
      <rect x="14" y="34" width="72" height="8" rx="4" fill="#1E7FEB" />
      <rect x="14" y="50" width="96" height="8" rx="4" fill="#2A3548" />
      <rect x="14" y="66" width="54" height="8" rx="4" fill="#2A3548" />
    </g>
  );
}

function PhoneMock() {
  return (
    <g transform="translate(300 24)">
      <rect
        width="58"
        height="108"
        rx="12"
        fill="#182232"
        stroke="#4DA3FF"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <rect x="18" y="8" width="22" height="4" rx="2" fill="#2A3548" />
      <rect x="10" y="24" width="38" height="8" rx="4" fill="#1E7FEB" />
      <rect x="10" y="40" width="38" height="8" rx="4" fill="#2A3548" />
      <rect x="10" y="56" width="26" height="8" rx="4" fill="#2A3548" />
      <rect x="10" y="80" width="38" height="14" rx="7" fill="#1E7FEB" />
    </g>
  );
}

function ShieldMock() {
  return (
    <g transform="translate(286 36)">
      <rect
        width="108"
        height="84"
        rx="12"
        fill="#182232"
        stroke="#1E7FEB"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M28 16 L42 21.5 V34 C42 42 28 50 28 50 C28 50 14 42 14 34 V21.5 Z"
        stroke="#4DA3FF"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="round"
      />
      <rect x="52" y="28" width="42" height="8" rx="4" fill="#1E7FEB" />
      <rect x="52" y="44" width="30" height="8" rx="4" fill="#2A3548" />
    </g>
  );
}
