export const HERO_POSTER = "/media/hero-grid.webp";

/** Static, light-washed hero texture. No video, no canvas animation. */
export default function HeroBackdrop() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#EFEFEF]" />
      <img
        src={HERO_POSTER}
        alt=""
        width={1344}
        height={768}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #EFEFEF 0%, rgba(239,239,239,0.92) 42%, rgba(239,239,239,0.72) 100%)",
        }}
      />
    </div>
  );
}
