import Image from "next/image";
import { primeLocations } from "@/data/properties";

export default function PrimeLocations() {
  return (
    <section
      id="locations"
      className="scroll-mt-28 px-3 py-8 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-bronze uppercase">
            Neighborhoods
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Islamabad, mapped by living and yield.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-taupe sm:text-base">
            A quiet atlas of the capital’s most considered commercial and
            residential corridors — with active listings and appreciation notes.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[220px] gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {primeLocations.map((loc) => {
            const spanClass =
              loc.span === "wide"
                ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[540px]"
                : loc.span === "tall"
                  ? "lg:col-span-2"
                  : "";

            return (
              <article
                key={loc.name}
                className={`group relative overflow-hidden rounded-[28px] ${spanClass}`}
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C09]/80 via-[#524229]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[11px] font-medium tracking-[0.2em] text-sand uppercase">
                    {loc.tagline}
                  </p>
                  <h3 className="font-display mt-1 text-2xl font-semibold tracking-tight text-canvas sm:text-3xl">
                    {loc.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-canvas/80">
                    <span>{loc.listings} active listings</span>
                    <span className="hidden h-1 w-1 rounded-full bg-sand sm:inline-block" />
                    <span>{loc.note}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
