import { BadgeRow, BlueButton } from "./ui";

const SMALL_IMG =
  "/media/about-small.webp";
const LARGE_IMG =
  "/media/about-large.webp";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-5 sm:px-8 lg:px-12">
          <BadgeRow number="1" label="Introducing JScholtz Digital" />
          <h2
            className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
          >
            A one-person studio,
            <br />
            obsessed with results.
          </h2>
        </div>

        {/* Mobile / tablet */}
        <div className="lg:hidden px-5 sm:px-8">
          <p className="text-[15px] leading-[1.6] font-medium text-gray-900">
            I'm Jason Scholtz, the developer behind JScholtz Digital. Based in
            Secunda, I work with South African small businesses to design, build and maintain
            websites that look sharp, load fast and actually convert.
          </p>
          <div className="mt-6">
            <BlueButton text="See prices" href="#pricing" />
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <img
              src={SMALL_IMG}
              alt="Person working on a website colour palette on a laptop"
              loading="lazy"
              className="sm:w-[45%] w-full aspect-[438/346] rounded-xl sm:rounded-2xl object-cover"
            />
            <img
              src={LARGE_IMG}
              alt="Two people planning a website project roadmap on a whiteboard"
              loading="lazy"
              className="sm:w-[55%] w-full aspect-[900/600] rounded-xl sm:rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-12">
          <div className="self-end">
            <img
              src={SMALL_IMG}
              alt="Person working on a website colour palette on a laptop"
              loading="lazy"
              className="w-full aspect-[438/346] rounded-2xl object-cover"
            />
          </div>

          <div className="self-start flex justify-end">
            <div>
              <p className="text-[16px] leading-[1.65] font-medium text-gray-900 whitespace-nowrap">
                I'm Jason Scholtz, the developer behind
                <br />
                JScholtz Digital. Based in Secunda, I work with
                <br />
                South African small businesses to design, build
                <br />
                and maintain websites that look sharp,
                <br />
                load fast and actually convert.
              </p>
              <div className="mt-8">
                <BlueButton text="See prices" href="#pricing" />
              </div>
            </div>
          </div>

          <div className="self-end">
            <img
              src={LARGE_IMG}
              alt="Two people planning a website project roadmap on a whiteboard"
              loading="lazy"
              className="w-full aspect-[3/2] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
