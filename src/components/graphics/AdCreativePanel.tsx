/**
 * Hero visual: an abstract vertical ad frame on the existing circuit still.
 * No people, no fake metrics, no fake brands. Crisp edges only.
 */
export default function AdCreativePanel() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:max-w-[500px] select-none">
      <div className="relative ml-auto w-[68%] aspect-[9/16] rounded-[28px] bg-[#111827] p-2.5 neon-ring">
        <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-[#111827]">
          <img
            src="/media/hero-grid.webp"
            alt=""
            width={1344}
            height={768}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
            <span className="rounded-full bg-[#111827] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-white">
              AI video creative
            </span>
            <span className="rounded-full bg-[#1A6FD0] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-white">
              9:16
            </span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" aria-hidden="true">
                <path d="M7 4.5v15l12-7.5z" fill="#1A6FD0" />
              </svg>
            </span>
          </div>
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white p-3">
            <span className="block h-2 w-3/4 rounded-full bg-[#111827]" />
            <span className="mt-2 block h-2 w-1/2 rounded-full bg-gray-300" />
            <span className="mt-3 block rounded-full bg-[#1A6FD0] py-1.5 text-center text-[11px] font-semibold text-white">
              Learn more
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[14%] w-[46%] rounded-2xl bg-white p-3 sm:p-4 grad-card">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-600">Placements</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-[#111827] px-2.5 py-1 text-[11px] sm:text-[12px] font-medium text-white">Facebook</span>
          <span className="rounded-full bg-[#111827] px-2.5 py-1 text-[11px] sm:text-[12px] font-medium text-white">Instagram</span>
        </div>
      </div>

      <div className="absolute left-[4%] bottom-[12%] w-[44%] rounded-2xl bg-[#111827] p-3 sm:p-4 grad-card-dark">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wide text-gray-300">Also on the retainer</p>
        <ul className="mt-2 space-y-1 text-[11px] sm:text-[12px] font-medium text-white">
          <li>Website care</li>
          <li>Google profile</li>
          <li>Booking flows</li>
        </ul>
      </div>
    </div>
  );
}
