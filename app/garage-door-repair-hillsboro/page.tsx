import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Repair Hillsboro OR | PDX Garage Pros",
  description:
    "Garage door repair in Hillsboro, Oregon — broken springs, opener problems, off-track doors, cables, and emergency service for Hillsboro and Washington County homeowners.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-hillsboro",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Hillsboro, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Repair in Hillsboro
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Hillsboro has grown rapidly, with subdivisions ranging from 1990s tract homes near
            TV Highway to newer construction around Orenco Station and South Hillsboro. PDX Garage Pros
            helps homeowners across all of Hillsboro when garage doors stop working.
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
          <h2 className="text-3xl font-bold tracking-tight">Garage door issues common in Hillsboro</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Hillsboro's mix of older and newer housing means we see two very different sets of problems.
            In older neighborhoods near downtown Hillsboro and along TV Highway, hardware is often
            original and springs or openers may be well past their expected lifespan. In newer areas like
            Orenco Station, South Hillsboro, and AmberGlen, the doors themselves are newer but sensors,
            remotes, and smart opener integrations are more likely to be the issue.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Repairs we handle in Hillsboro</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>Broken torsion or extension springs</li>
            <li>Opener not responding</li>
            <li>Door running off track</li>
            <li>Snapped or frayed cables</li>
            <li>Rollers worn or broken</li>
            <li>Door won't close or reverses</li>
            <li>Safety sensor alignment</li>
            <li>Noisy or shaking operation</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Hillsboro neighborhoods we serve</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We serve all of Hillsboro, including Orenco Station, South Hillsboro, AmberGlen, Tanasbourne,
            the area around Intel's Ronler Acres campus, Jackson School, downtown Hillsboro, and
            communities along TV Highway toward Beaverton. We also serve North Plains, Banks, and
            unincorporated Washington County areas west of Hillsboro.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">What to do while you wait</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            If your garage door is stuck open in Hillsboro, you can manually lock it using the
            slide lock on the inside track — most doors have one. If the door won't close because
            of a sensor issue, check that nothing is blocking the sensor beam along the bottom of the
            door frame. If the lights on both sensors are solid (not blinking), the beam is clear
            and the issue is elsewhere.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Hillsboro service area</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Serving Hillsboro and surrounding Washington County communities including
            Orenco, Tanasbourne, North Plains, and Forest Grove.
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
            <a href="/garage-door-repair-beaverton" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Beaverton</a>
            <a href="/garage-door-repair-tigard" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Tigard</a>
            <a href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland</a>
          </div>
        </div>
      </section>
    </main>
  );
}
