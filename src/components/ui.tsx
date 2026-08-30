import { ArrowRight } from "lucide-react";

const EASE = "ease-[cubic-bezier(0.25,0.1,0.25,1)]";

export function BadgeRow({
  number,
  label,
  border = "border-gray-200",
  className = "",
}: {
  number: string;
  label: string;
  border?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 mb-6 sm:mb-8 ${className}`}>
      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] sm:text-[12px] font-semibold flex items-center justify-center">
        {number}
      </span>
      <span
        className={`text-[12px] sm:text-[13px] font-medium border ${border} rounded-full px-3 sm:px-4 py-1 sm:py-1.5`}
      >
        {label}
      </span>
    </div>
  );
}

/** Blue pill button with the hover text-roll + rotating arrow. */
export function BlueButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 bg-[#1E7FEB] hover:bg-[#1663C4] text-white text-[13px] sm:text-[14px] rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300"
    >
      <span className="flex flex-col overflow-hidden h-[20px] leading-[20px]">
        <span
          className={`flex flex-col transition-transform duration-500 ${EASE} group-hover:-translate-y-1/2`}
        >
          <span className="h-[20px]">{text}</span>
          <span className="h-[20px]">{text}</span>
        </span>
      </span>
      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
        <ArrowRight
          size={16}
          className={`text-[#1E7FEB] transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
        />
      </span>
    </a>
  );
}
