/** Decorative still used as a faint section texture. */
export default function SectionTexture({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
