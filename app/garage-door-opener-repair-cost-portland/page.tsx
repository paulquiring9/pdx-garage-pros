import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Opener Repair Cost Portland OR (2026) | PDX Garage Pros",
  description:
    "Garage door opener repair costs $100–$300 in Portland. See 2026 price ranges for common opener problems, when repair beats replacement, and what to expect from a service call.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-opener-repair-cost-portland",
  },
};

const issues = [
  {
    problem: "Logic board failure",
    cost: "$100–$200",
    notes: "The most common repair on openers 10+ years old. The board controls all functions.",
  },
  {
    problem: "Stripped or broken drive gear",
    cost: "$75–$150",
    notes: "Plastic gear that engages the chain or belt. Wears out before the motor does.",
  },
  {
    problem: "Motor burnout",
    cost: "$150–$300",
    notes: "Often caused by running the opener repeatedly against a stuck spring. At this cost, replacement makes sense.",
  },
  {
    problem: "Trolley / carriage replacement",
    cost: "$75–$175",
    notes: "The carriage that pulls the door. Chain drive openers wear these faster than belt drives.",
  },
  {
    problem: "Safety sensor replacement",
    cost: "$50–$150",
    notes: "The photoelectric sensors at the base of the door. Often just need realignment, not replacement.",
  },
  {
    problem: "Remote / keypad reprogramming",
    cost: "$50–$100",
    notes: "Usually a quick fix. Many homeowners can do this themselves with the manual.",
  },
  {
    problem: "Limit switch adjustment",
    cost: "$50–$100",
    notes: "Controls how far the door opens and closes. Causes door to reverse before fully closing.",
  },
  {
    problem: "Full opener replacement",
    cost: "$300–$600",
    notes: "Labor plus a new mid-range belt or chain drive unit. Smart openers run $400–$700+.",
  },
];

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Portland, Oregon · 2026 Pricing
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Opener Repair Cost in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Most opener repairs in Portland run $75–$300. Full replacement costs $300–$600.
            The right call depends on what's actually broken — and how old the opener is.
            Here's a full breakdown of what to expect.
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
        <h2 className="text-3xl font-bold tracking-tight">Opener repair costs by problem type</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Portland technicians charge $70–$115 per hour for opener work, plus a $50–$100 service
          call fee. Most repairs take one to two hours. Prices below include parts and labor.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-4 font-semibold text-slate-700">Problem</th>
                <th className="px-5 py-4 font-semibold text-slate-700 whitespace-nowrap">Typical cost</th>
                <th className="px-5 py-4 font-semibold text-slate-700 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((r, i) => (
                <tr key={r.problem} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-5 py-4 font-medium text-slate-900">{r.problem}</td>
                  <td className="px-5 py-4 text-slate-700 whitespace-nowrap">{r.cost}</td>
                  <td className="px-5 py-4 text-slate-500 hidden md:table-cell">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Repair or replace your opener?</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                This is the real question most Portland homeowners face when an opener stops working.
                The answer comes down to age and what's actually broken.
              </p>

              <h3 className="mt-8 text-xl font-bold">Repair makes sense when</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>The opener is under 10 years old and a single component has failed — a gear, board, or sensor.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>The repair cost is less than half the cost of a new unit — generally under $200.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-green-600">✓</span>
                  <span>The problem is something simple like a sensor alignment, limit switch, or remote reprogramming.</span>
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-bold">Replacement makes sense when</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 text-red-500">✗</span>
                  <span>The opener is 15+ years old. At that age, parts are harder to source and the motor is likely worn regardless.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-red-500">✗</span>
                  <span>The motor has burned out — usually from repeated use against a stuck spring. Motor replacement costs nearly as much as a new unit.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-red-500">✗</span>
                  <span>The opener predates 1993 and lacks auto-reverse safety features required by current code.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-red-500">✗</span>
                  <span>You want smart home integration or quieter operation — a belt drive replacement with Wi-Fi runs $400–$600 installed.</span>
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-bold">The opener isn't always the problem</h3>
              <p className="mt-4 leading-7 text-slate-700">
                In Portland, the most common reason an opener appears to fail is actually a broken
                spring. When a torsion spring snaps, the door becomes too heavy for the motor to lift
                — so the opener strains, slows, or stops entirely, even though the opener itself is
                fine. Before replacing an opener, confirm the springs and cables are intact. A
                technician will check this, but it's worth asking about upfront.
              </p>

              <h3 className="mt-8 text-xl font-bold">Older Portland homes and opener clearance</h3>
              <p className="mt-4 leading-7 text-slate-700">
                Many older homes in Portland — particularly Craftsman bungalows and mid-century
                houses in Sellwood, Montavilla, and St. Johns — have garages with low ceiling
                clearance. Some modern opener models require 2–4 inches of headroom above the door
                that older garages don't have. A technician should measure before recommending a
                specific replacement model.
              </p>
            </div>

            <aside className="h-fit space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Quick cost guide</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-3">
                    <dt className="text-slate-600">Sensor / limit fix</dt>
                    <dd className="font-semibold">$50–$150</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-3">
                    <dt className="text-slate-600">Drive gear replacement</dt>
                    <dd className="font-semibold">$75–$150</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-3">
                    <dt className="text-slate-600">Logic board repair</dt>
                    <dd className="font-semibold">$100–$200</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-3">
                    <dt className="text-slate-600">Motor replacement</dt>
                    <dd className="font-semibold">$150–$300</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-600">Full replacement</dt>
                    <dd className="font-semibold">$300–$600</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <h3 className="text-base font-bold">Not sure what's wrong?</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Call and describe what the opener is doing — or not doing. We can help you figure out whether it's the opener, a spring, or something else before a technician arrives.
                </p>
                <a
                  href="tel:+15034953464"
                  className="mt-4 block rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-slate-950 hover:bg-amber-300"
                >
                  Call (503) 495-3464
                </a>
                <a
                  href="/contact"
                  className="mt-3 block rounded-xl border border-white/20 px-5 py-3 text-center font-semibold text-white hover:bg-white/10"
                >
                  Request a Quote
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">What to check before calling a technician</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Some opener problems have simple fixes that don't require a service call. Worth checking these first.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["Check the power first", "Garage door outlets are often on the same circuit as exterior lights or GFCI outlets. If the opener has no power, check the circuit breaker and any nearby GFCI outlets before assuming the opener has failed."],
            ["Look at the sensor lights", "Each safety sensor has a small LED. If either light is off or blinking, the sensors are misaligned or obstructed. Realigning them takes about two minutes and often resolves a door that won't close."],
            ["Try the wall button, not just the remote", "If the wall button works but the remote doesn't, the issue is the remote or its battery — not the opener itself. Try replacing the battery or reprogramming the remote before calling."],
            ["Check the manual lock lever", "Some garage doors have a manual lock that engages the throw bolt across the door. If this is locked, the opener will strain and stop. Look for a horizontal lever handle on the inside of the door."],
            ["Look for a lock-out mode", "Many openers have a vacation lock or lock-out mode that disables all remotes. Check whether the wall button has been accidentally put into this mode — usually by holding the lock button for a few seconds."],
            ["Listen for the motor running", "If you hear the opener motor running but the door isn't moving, the problem is usually a stripped drive gear or broken spring — not the motor itself. Don't run it repeatedly; you'll burn out the motor."],
          ].map(([title, detail]) => (
            <div key={title} className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">{title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Related pages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">All Repair Costs</Link>
            <Link href="/garage-door-opener-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair Service</Link>
            <Link href="/garage-door-spring-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Replacement Cost</Link>
            <Link href="/garage-door-wont-close-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Door Won't Close</Link>
            <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
            <Link href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
