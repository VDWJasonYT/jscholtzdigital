import CircuitCanvas from "./CircuitCanvas";
import LazyVideo from "./LazyVideo";
import { usePrefersReducedMotion } from "../motion";

export const HERO_POSTER = "/media/hero-grid.webp";
export const HERO_VIDEO = "/media/hero-grid.mp4";

/** Light-washed hero texture: video when motion is ok, still otherwise. */
export default function HeroBackdrop() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#EFEFEF]" />
      {reduced ? (
        <img
          src={HERO_POSTER}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      ) : (
        <LazyVideo
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          label="Abstract navy and blue circuit background"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #EFEFEF 0%, rgba(239,239,239,0.92) 42%, rgba(239,239,239,0.72) 100%)",
        }}
      />
      <CircuitCanvas className="absolute inset-0 h-full w-full opacity-70" />
    </div>
  );
}
