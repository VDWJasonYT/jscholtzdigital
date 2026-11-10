import { useEffect, useState, type CSSProperties } from "react";
import { usePrefersReducedMotion } from "../motion";

export default function TypeLine({
  text,
  as: Tag = "p",
  className = "",
  style,
}: {
  text: string;
  as?: "p" | "h1" | "h2" | "span";
  className?: string;
  style?: CSSProperties;
}) {
  const reduced = usePrefersReducedMotion();
  const [shown, setShown] = useState(reduced ? text : "");

  useEffect(() => {
    if (reduced) {
      setShown(text);
      return;
    }
    let i = 0;
    setShown("");
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 42);
    return () => window.clearInterval(id);
  }, [text, reduced]);

  return (
    <Tag className={`relative ${className}`} style={style}>
      <span className="sr-only">{text}</span>
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {shown}
        <span className="type-caret">|</span>
      </span>
    </Tag>
  );
}
