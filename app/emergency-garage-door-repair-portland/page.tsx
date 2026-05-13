import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Garage Door Repair Portland OR | PDX Garage Pros",
  description:
    "Emergency garage door repair in Portland — stuck open, stuck closed, broken spring, off track, or unsecured. Call (503) 495-3464 for urgent same-day service.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/emergency-garage-door-repair-portland",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Portland, Oregon · Urgent Service
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Emergency Garage Door Repair in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Stuck open, stuck closed, hanging crooked, spring snapped, or door off track —
            some garage door problems cannot wait until tomorrow. PDX Garage Pros connects
            Portland homeowners with technicians available for urgent same-day service.
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
              Request Urgent Service
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">When it is a genuine emergency</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Not every garage door problem is an emergency — but some situations genuinely cannot
              wait. A door stuck open overnight is a security risk. A door stuck closed with your
              car inside means you are not getting to work. A door hanging off its track is a
              safety hazard that gets worse the longer it sits. These are the situations where
              same-day service is a necessity, not a convenience.
            </p>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">Situations that need urgent attention</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="font-semibold text-red-900">Door stuck open</p>
                <p className="mt-2 text-sm leading-6 text-red-800">Your garage and everything in it is exposed. If you cannot manually close and lock the door, this is urgent — especially overnight or when leaving the house.</p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="font-semibold text-red-900">Door stuck closed, car inside</p>
                <p className="mt-2 text-sm leading-6 text-red-800">If your car is trapped, this is a same-day situation. Do not try to force the door — you risk damaging the opener, cables, or tracks further.</p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="font-semibold text-red-900">Door hanging crooked or off track</p>
                <p className="mt-2 text-sm leading-6 text-red-800">A door that has come off its track is under uneven tension and can fall. Do not run the opener or force it manually — leave it in place and call.</p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="font-semibold text-red-900">Visible broken spring</p>
                <p className="mt-2 text-sm leading-6 text-red-800">A snapped torsion spring leaves a visible gap in the coil above the door. The door is now extremely heavy and the opener must not be used.</p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="font-semibold text-red-900">Cable snapped or hanging loose</p>
                <p className="mt-2 text-sm leading-6 text-red-800">A broken cable leaves the door unbalanced and it may shift or fall suddenly. Stop using the opener immediately.</p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="font-semibold text-red-900">Door will not close after impact</p>
                <p className="mt-2 text-sm leading-6 text-red-800">If the door was hit by a vehicle or forced, it may not close or secure properly. This is both a safety and security issue that needs same-day service.</p>
              </div>
            </div>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">What to do while you wait</h2>
            <p className="mt-4 leading-7 text-slate-700">
              The most important thing is to stop running the opener the moment something seems
              seriously wrong. Continuing to run the motor against a broken spring, snapped cable,
              or off-track door turns a single repair into multiple repairs. Here is what to do
              in the most common emergency scenarios.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <h3 className="font-semibold text-slate-900">If the door is stuck open</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Pull the red emergency release cord to disengage the opener. Try to manually lower the door — it takes two people on a heavy door. If it will not move or feels extremely heavy, leave it and call. Move valuables away from the opening and do not leave the property unattended if possible.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">If the door is stuck closed</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Check whether the opener has power — look for indicator lights on the motor unit. If there is no power, check the circuit breaker and any GFCI outlets on the same circuit. If power is fine, disengage the opener via the emergency cord and try lifting manually. If it will not lift or feels very heavy, a spring has likely broken.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">If the door is off track</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Do not touch it. A door off its track is under uneven spring tension and can shift suddenly. Do not run the opener, do not try to push it back manually, and keep people away from the door until a technician arrives.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">If a spring has snapped</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">You will likely hear a loud bang when it happens. After that, the door will feel extremely heavy or the opener will run but nothing will move. Disengage the opener and leave the door in place. A garage door without spring assist weighs 150–250 pounds — do not attempt to open or close it until the spring is replaced.</p>
              </div>
            </div>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">What emergency repairs cost in Portland</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Emergency and same-day service in Portland typically carries a premium of 20–50%
              over standard rates. Most emergency calls involve one of these common repairs:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                ["Broken torsion spring (most common)", "$200–$400 standard", "$300–$550 emergency"],
                ["Door off track", "$125–$300 standard", "$200–$400 emergency"],
                ["Snapped cable", "$100–$250 standard", "$175–$350 emergency"],
                ["Opener failure", "$100–$300 standard", "$175–$400 emergency"],
              ].map(([repair, std, emerg]) => (
                <li key={repair} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-medium text-slate-900">{repair}</p>
                  <div className="mt-1 flex gap-4 text-sm text-slate-500">
                    <span>{std}</span>
                    <span className="font-semibold text-amber-700">{emerg}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">
              After-hours calls (evenings and weekends) and surge periods during Portland winter
              ice events tend toward the higher end of the emergency range.
            </p>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">Portland emergency service areas</h2>
            <p className="mt-4 leading-7 text-slate-700">
              We connect homeowners across the full Portland metro area for urgent repairs —
              including Northeast and Southeast Portland, the West Hills, Beaverton, Hillsboro,
              Tigard, Tualatin, Lake Oswego, and Gresham. Call and we will find available
              same-day coverage for your area.
            </p>
          </div>

          <aside className="h-fit space-y-5">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-base font-bold text-red-900">Need help right now?</h3>
              <p className="mt-2 text-sm leading-6 text-red-800">
                Call immediately. Do not run the opener again if the door is stuck, crooked,
                or making unusual sounds.
              </p>
              <a
                href="tel:+15034953464"
                className="mt-4 block rounded-xl bg-red-700 px-5 py-3 text-center font-bold text-white hover:bg-red-800"
              >
                Call (503) 495-3464
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-bold">Safety checklist</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="font-bold text-slate-400 shrink-0">→</span>Stop running the opener</li>
                <li className="flex gap-2"><span className="font-bold text-slate-400 shrink-0">→</span>Do not force the door manually</li>
                <li className="flex gap-2"><span className="font-bold text-slate-400 shrink-0">→</span>Keep people away from the door</li>
                <li className="flex gap-2"><span className="font-bold text-slate-400 shrink-0">→</span>Pull the red emergency cord</li>
                <li className="flex gap-2"><span className="font-bold text-slate-400 shrink-0">→</span>Secure the opening if door is stuck open</li>
                <li className="flex gap-2"><span className="font-bold text-slate-400 shrink-0">→</span>Call before attempting any fixes</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-base font-bold">Cannot call right now?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Submit a service request online and we will follow up as quickly as possible.
              </p>
              <a
                href="/contact"
                className="mt-4 block rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-slate-950 hover:bg-amber-300"
              >
                Request Urgent Service
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">The most common cause of Portland emergency calls</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Broken torsion springs account for the majority of emergency garage door calls in
            Portland. Springs are rated for around 10,000 cycles — roughly 7–10 years of typical
            use — and Portland's wet winters accelerate wear. When a spring fails, it usually does
            so suddenly and completely, leaving the door inoperable without warning.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            The second most common emergency is a door that has come off its track — often from
            a vehicle bump, a failed roller, or a door that has been running with a weakened spring
            for too long. Both situations are urgent and neither is safe to attempt without a
            trained technician.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15034953464"
              className="rounded-xl bg-slate-900 px-6 py-4 text-center font-bold text-white hover:bg-slate-800"
            >
              Call (503) 495-3464
            </a>
            <Link
              href="/garage-door-repair-cost-portland"
              className="rounded-xl border border-slate-300 px-6 py-4 text-center font-semibold text-slate-900 hover:bg-slate-100"
            >
              See Full Repair Cost Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Related pages</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
          <Link href="/garage-door-off-track-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Off-Track Repair</Link>
          <Link href="/garage-door-cable-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Cable Repair</Link>
          <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Repair Cost Guide</Link>
          <Link href="/garage-door-spring-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Replacement Cost</Link>
          <Link href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland Service Area</Link>
        </div>
      </section>
    </main>
  );
}
