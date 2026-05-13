import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Repair Tigard OR | PDX Garage Pros",
  description:
    "Garage door repair in Tigard, Oregon — broken springs, opener problems, off-track doors, cables, and emergency service for Tigard homeowners.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-tigard",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Tigard, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Repair in Tigard
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Tigard is a largely residential community with a lot of attached two-car garages — and a lot
            of garage door hardware that was installed during the building booms of the 1980s and 1990s.
            PDX Garage Pros helps Tigard homeowners diagnose and fix garage door problems quickly.
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
              Request Service
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Why garage doors fail in Tigard homes</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Most of Tigard's residential neighborhoods were developed between 1975 and 2000, putting
            a lot of original hardware in the 25- to 40-year-old range. Springs, cables, and rollers
            all have finite lifespans — and when one goes, it often puts extra strain on adjacent
            components. A snapped spring, for example, puts immediate extra load on the opener motor
            and the cables, which is why addressing the root cause early matters.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Most common Tigard repair calls</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>Broken torsion springs</li>
            <li>Opener motor failure</li>
            <li>Door won't open from inside</li>
            <li>Cables off the drum</li>
            <li>Door shakes or vibrates</li>
            <li>Rollers off track</li>
            <li>Wall button stopped working</li>
            <li>Door closes partially then reverses</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Areas of Tigard we serve</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We serve all of Tigard, including Bull Mountain, Metzger, Summerlake, Woodard, King City,
            the Tigard Triangle, and neighborhoods near Washington Square. We also cover the unincorporated
            areas of Washington County that border Tigard, including parts of Tualatin and the areas
            near Durham and Cook Park.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">A note on older opener models</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Openers made before 1993 don't have the auto-reverse safety feature that's been required
            since then. If your opener is original to a pre-1993 home, it may not stop if the door
            contacts an obstruction. Replacing older units is often worth doing for safety reasons
            alone, even if the opener is still technically working.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Tigard service area</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Serving Tigard, Bull Mountain, King City, Metzger, and nearby communities in
            Washington County.
          </p>
          <a
            href="tel:+15034953464"
            className="mt-6 block rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white hover:bg-slate-800"
          >
            Call (503) 495-3464
          </a>
          <a
            href="/contact"
            className="mt-3 block rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100"
          >
            Request a Quote
          </a>
        </aside>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Related services and nearby areas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a href="/garage-door-spring-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Repair</a>
            <a href="/garage-door-opener-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair</a>
            <a href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</a>
            <a href="/garage-door-repair-tualatin" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Tualatin</a>
            <a href="/garage-door-repair-lake-oswego" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Lake Oswego</a>
            <a href="/garage-door-repair-beaverton" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Beaverton</a>
          </div>
        </div>
      </section>
    </main>
  );
}
