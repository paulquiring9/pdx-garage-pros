import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Off Track Repair in Portland | PDX Garage Pros",
  description: "Garage door off track in Portland? Get help with crooked doors, jammed rollers, bent tracks, and doors that will not open safely.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-off-track-portland",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Portland Garage Door Repair
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Off Track Repair in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Garage door off track in Portland? Get help with crooked doors, jammed rollers, bent tracks, and doors that will not open safely.
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
          <h2 className="text-3xl font-bold tracking-tight">What usually causes this problem?</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            A door that comes off track can bind, lean, scrape, or stop completely. This can happen from damaged rollers, loose hardware, impact, cable issues, or track misalignment.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Common warning signs</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
              <li>Door looks crooked or uneven</li>
              <li>Rollers have popped out of the track</li>
              <li>Door scrapes or jams</li>
              <li>Track looks bent or separated</li>
              <li>Door will not open or close smoothly</li>
              <li>Cables appear loose on one side</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Related repair issues to check</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Off-track doors are usually connected to another failure point. Damaged rollers, loose cables, broken springs, or repeated opener strain can all push a door out of alignment.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">What to do next</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Stop running the opener if the door is crooked, stuck, unusually loud, or visibly damaged.
            Continued use can turn a simple repair into a larger track, cable, roller, spring, or opener issue.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Quick safety note</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Springs, cables, and heavy garage doors can be dangerous. If the door feels unusually heavy
            or is hanging unevenly, avoid forcing it open or closed.
          </p>
          <a
            href="tel:+15034953464"
            className="mt-6 block rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white hover:bg-slate-800"
          >
            Call (503) 495-3464
          </a>
        </aside>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Related garage door problems</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
              <a href="/garage-door-roller-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Garage Door Roller Repair</a>
              <a href="/garage-door-cable-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Garage Door Cable Repair</a>
              <a href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Repair</a>
              <a href="/noisy-garage-door-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Noisy Garage Door</a>
              <a href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Garage Door Repair</a>
          </div>
        </div>
      </section>
    </main>
  );
}
