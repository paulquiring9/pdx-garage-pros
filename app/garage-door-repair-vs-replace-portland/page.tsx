import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Repair vs Replace Portland OR | PDX Garage Pros",
  description:
    "Should you repair or replace your garage door in Portland? A practical guide to making the right call based on door age, damage type, and real Portland cost data.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-vs-replace-portland",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Portland, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Repair vs. Replacement in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Most garage door problems are worth repairing. But some situations make replacement
            the smarter call. Here's how to figure out which one applies to your door — with
            real cost numbers for Portland.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15034953464"
              className="rounded-xl bg-amber-400 px-6 py-3 text-center font-bold text-slate-950 shadow-sm hover:bg-amber-300"
            >
              Call (503) 495-3464
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3 text-center font-bold text-white hover:bg-white/10"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">The short answer</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Repair your door if the problem is a single failed component — a spring, cable, opener,
          or set of rollers — and the door itself is structurally sound. Replace it when the
          repair cost approaches or exceeds the cost of a new door, when multiple components are
          failing at once, or when the door has significant structural or cosmetic damage. Age is
          the biggest tiebreaker: doors under 15 years old are almost always worth repairing.
          Doors over 20 years old with recurring problems usually aren't.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">When repair is the right call</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              ["Single component failure", "A broken spring, snapped cable, worn rollers, or failed opener are all straightforward repairs. Each costs $100–$400 in Portland. Even if two need to be replaced at once, you're typically still well under the cost of a new door."],
              ["Door is under 15 years old", "A door this age has plenty of service life left. Unless it's been heavily damaged, repair almost always makes financial sense. You're not fighting rust, rot, or systemic wear — just a single part that's reached end of life."],
              ["The door is structurally sound", "If the panels, frame, and tracks are in good shape and the problem is isolated to hardware, repair is the clear choice. Hardware is replaceable. A sound door with new springs and cables can last another 10–15 years."],
              ["You like the door", "If your door matches your home's exterior well and you don't have complaints about noise or insulation, there's no reason to replace it over a mechanical repair. A $250 spring replacement extends that match indefinitely."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-green-600 font-bold text-lg shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">When replacement makes more sense</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["The repair cost exceeds 50% of replacement", "A new mid-range door installed in Portland runs $900–$2,000. If you're looking at a $600+ repair on a 20-year-old door, the math starts to favor replacement — especially if more repairs are likely soon."],
            ["Multiple systems are failing at once", "Springs, opener, cables, and rollers all have roughly similar lifespans. If one has failed, others on an older door are close behind. Replacing the door avoids the cycle of recurring repairs over the next few years."],
            ["Significant panel or structural damage", "A door with bent or dented panels, a warped frame, or rust damage throughout the sections is difficult and expensive to restore. At that point, replacement gives you a fresh start with a warranty."],
            ["The door is over 20 years old", "Garage door hardware from the early 2000s or older is often harder to source. Springs may be non-standard sizes. Openers this old typically lack modern safety features. A new door and opener package brings everything up to current standards."],
            ["Wood door with moisture damage", "Portland's wet climate is hard on wood garage doors. A wood door with rot, delamination, or persistent warping that prevents a proper seal is usually not worth restoring — the underlying material problem will keep returning."],
            ["You want better insulation or noise reduction", "If your uninsulated steel door is making your garage uncomfortably cold in winter or your current door shakes the house when it operates, replacement with an insulated panel or belt-drive opener is a legitimate upgrade — not just a repair scenario."],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-red-500 font-bold text-lg shrink-0">✗</span>
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Portland cost comparison: repair vs. replace</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Here's what you're actually comparing when you weigh the two options in the Portland
            metro area.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">Typical repair costs</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["Spring replacement (torsion)", "$200–$400"],
                  ["Opener repair", "$100–$300"],
                  ["Full opener replacement", "$300–$600"],
                  ["Cable replacement", "$100–$250"],
                  ["Roller replacement (full set)", "$100–$200"],
                  ["Off-track repair", "$125–$300"],
                  ["Spring + cables (combined)", "$300–$600"],
                ].map(([item, cost]) => (
                  <li key={item} className="flex justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-slate-600">{item}</span>
                    <span className="font-semibold text-slate-900">{cost}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">Replacement costs in Portland</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["Basic steel door (single, installed)", "$900–$1,200"],
                  ["Mid-range insulated steel (single)", "$1,200–$1,800"],
                  ["Double-car door (standard)", "$1,400–$2,200"],
                  ["Carriage-style / decorative", "$2,000–$3,500"],
                  ["Custom wood door", "$3,500–$6,500+"],
                  ["Labor only (removal + install)", "$300–$600"],
                  ["New belt-drive opener added", "+$300–$500"],
                ].map(([item, cost]) => (
                  <li key={item} className="flex justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-slate-600">{item}</span>
                    <span className="font-semibold text-slate-900">{cost}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-bold text-amber-900">The crossover point</h3>
            <p className="mt-2 leading-7 text-amber-800">
              If your repair quote is approaching $600–$800 on an older door, you're close to the
              crossover point with a basic new door. At that threshold, ask the technician whether
              there are other components likely to fail in the next year or two — that answer often
              makes the replacement case clear.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Portland-specific factors worth considering</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["Wood doors and Portland's wet climate", "Wood garage doors need more maintenance in the Pacific Northwest than in drier climates. If you're replacing a failing wood door, most Portland contractors recommend switching to a steel or composite door — the long-term maintenance burden is significantly lower."],
            ["Older homes with non-standard openings", "Many Portland homes built before 1960 have non-standard garage door openings — narrower widths, low headroom, or unusual heights. Replacement on these homes sometimes requires custom-ordered doors with longer lead times and higher costs than the standard ranges above."],
            ["Permits for new door installation", "Most garage door replacements in Portland don't require a permit if you're replacing like-for-like. However, if the opening is being modified, framing is changed, or the project involves electrical work for a new opener circuit, a permit through Portland Bureau of Development Services may be required. A licensed contractor will know when one is needed."],
            ["CCB licensing for Oregon contractors", "Oregon requires garage door contractors to be licensed through the Construction Contractors Board (CCB) and to carry liability insurance and a surety bond. Always ask for a contractor's CCB number before authorizing work — it protects you if damage or injury occurs on the job."],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold">Not sure which way to go?</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Call us and describe what's happening with your door. We can help you understand
            whether what you're dealing with is a simple repair or a situation where replacement
            makes more sense — before a technician arrives.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15034953464"
              className="rounded-xl bg-amber-400 px-6 py-4 text-center font-bold text-slate-950 hover:bg-amber-300"
            >
              Call (503) 495-3464
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Related pages</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">All Repair Costs</Link>
          <Link href="/garage-door-spring-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Replacement Cost</Link>
          <Link href="/garage-door-opener-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair Cost</Link>
          <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
          <Link href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</Link>
          <Link href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland Service Area</Link>
        </div>
      </section>
    </main>
  );
}
