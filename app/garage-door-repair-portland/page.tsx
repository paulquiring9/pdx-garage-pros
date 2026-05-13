import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Repair Portland OR | PDX Garage Pros",
  description:
    "Garage door repair across Portland, Oregon — broken springs, opener problems, off-track doors, cables, rollers, and emergency service for Portland homeowners.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-portland",
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
            Garage Door Repair in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            From Northeast Portland bungalows to newer construction in the Pearl and South Waterfront,
            PDX Garage Pros helps Portland homeowners get their garage doors working again.
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
          <h2 className="text-3xl font-bold tracking-tight">Common garage door problems in Portland</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Portland's wet winters and temperature swings put real stress on garage door hardware.
            Springs and cables that were fine through summer can snap or slip when cold weather arrives.
            Wood doors absorb moisture and swell, throwing off alignment. Metal tracks shift slightly
            as temperatures change, causing rollers to bind or the door to sit unevenly in its frame.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Issues we see most often</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>Broken torsion or extension springs</li>
            <li>Garage door opener failure</li>
            <li>Door off track or running unevenly</li>
            <li>Snapped or frayed cables</li>
            <li>Worn rollers making grinding noise</li>
            <li>Door won't close all the way</li>
            <li>Remote or keypad stopped working</li>
            <li>Door reverses before closing</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Neighborhoods we serve in Portland</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We work throughout the city — including Northeast Portland neighborhoods like Alameda, Beaumont,
            Grant Park, and Hollywood; Southeast areas like Sellwood, Woodstock, Hawthorne, and Mt. Tabor;
            North Portland including St. Johns and Kenton; Northwest Portland and the West Hills; and
            newer developments in the Pearl District and South Waterfront. If you're within Portland city
            limits, we can help.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">What to do if your door stops working</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            If the door is stuck open, close it manually using the emergency release cord before leaving
            the garage unattended. If it's stuck closed, don't force the opener — continued use with a
            broken spring or cable can damage the opener motor and turn a simple repair into a larger job.
            Call us and we'll walk you through the next step.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Portland service area</h3>
          <p className="mt-3 leading-7 text-slate-700">
            We serve all Portland ZIP codes, including 97201–97239 and surrounding areas.
            Same-day help available for urgent situations.
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
          <h2 className="text-3xl font-bold tracking-tight">Portland-area services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a href="/garage-door-spring-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Repair</a>
            <a href="/garage-door-opener-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair</a>
            <a href="/garage-door-cable-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Cable Repair</a>
            <a href="/garage-door-off-track-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Off Track Repair</a>
            <a href="/garage-door-roller-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Roller Repair</a>
            <a href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</a>
          </div>
        </div>
      </section>
    </main>
  );
}
