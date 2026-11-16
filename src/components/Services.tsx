import { FileCheck2, Globe2, Landmark, Scale } from "lucide-react";

const pillars = [
  {
    icon: FileCheck2,
    title: "100% CDA/RDA Verified Documentation",
    text: "Every dossier is cleared for title, ownership, and paper trail before it is presented.",
  },
  {
    icon: Scale,
    title: "Transparent Transfer & Legal Desk",
    text: "Documented costs, clear timelines, and end-to-end transfer coordination with the relevant authorities.",
  },
  {
    icon: Landmark,
    title: "Commercial Portfolio Management",
    text: "Advisory for Blue Area floors, yield modeling, and tenancy strategy for institutional-grade assets.",
  },
  {
    icon: Globe2,
    title: "Dedicated Overseas Pakistani Desk",
    text: "Remote deal structuring, virtual walkthroughs, and trusted local representation for the diaspora.",
  },
];

const stats = [
  { value: "12+", label: "Years in Blue Area" },
  { value: "PKR 15B+", label: "Assets Transacted" },
  { value: "100%", label: "Verified Titles" },
];

export default function Services() {
  return (
    <section
      id="advisory"
      className="scroll-mt-28 px-3 py-10 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-ink px-6 py-14 text-canvas sm:px-10 sm:py-20 lg:px-16">
        <div
          id="about"
          className="grid scroll-mt-32 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-sand uppercase">
              Human-centric advisory
            </p>
            <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Stewardship over speculation.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-canvas/65 sm:text-base">
              From Ginza Centre on Jinnah Avenue, Splendors Properties pairs
              local market fluency with a documentation-first process for
              buyers, tenants, and overseas investors.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold tracking-tight text-canvas sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-sand sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-bronze/40 hover:bg-white/10 sm:p-8"
            >
              <item.icon className="h-5 w-5 text-sand" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-canvas/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
