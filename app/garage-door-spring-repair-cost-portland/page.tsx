import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Spring Replacement Cost Portland OR (2026) | PDX Garage Pros",
  description:
    "Garage door spring replacement costs $158–$400 in Portland. See 2026 price ranges for torsion vs extension springs, what affects cost, and what to ask before hiring.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-spring-repair-cost-portland",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Portland, Oregon · 2026 Pricing
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Spring Replacement Cost in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Portland homeowners typically pay $158–$400 to replace a garage door spring,
            depending on spring type, door size, and whether it's an emergency call.
            Here's a full breakdown of what you'll actually pay in the Portland metro area.
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
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Portland spring replacement price ranges</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Spring replacement is the most common garage door repair in Portland — and the cost
              varies more than most homeowners expect. The two main factors are spring type and
              door size. Here's what each scenario typically costs.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Torsion spring replacement</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      The horizontal spring mounted above the door. Standard on most homes built
                      after the mid-1980s. More durable than extension springs — typically rated
                      for 10,000 cycles — but costs more to replace. Most Portland homes have one
                      torsion spring; two-car garage doors often have two.
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-2xl font-bold text-slate-900">$200–$400</p>
                    <p className="text-sm text-slate-500">per spring</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Extension spring replacement</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      The pair of springs running along each side of the door track. More common in
                      older homes and Craftsman bungalows across Portland's Laurelhurst, Irvington,
                      and Sellwood neighborhoods. Less expensive per spring, but they run in pairs
                      and should be replaced together.
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-2xl font-bold text-slate-900">$160–$280</p>
                    <p className="text-sm text-slate-500">per spring (usually 2)</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Heavy or oversized door springs</h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      Carriage-style, wood, or custom doors — more common in Lake Oswego,
                      the West Hills, and older Portland neighborhoods — require heavier-duty
                      springs rated for the extra weight. These cost more than standard springs
                      and require a technician to confirm the correct wire gauge and turn count.
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-2xl font-bold text-slate-900">$300–$600</p>
                    <p className="text-sm text-slate-500">per spring</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-100 border p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-amber-900">Emergency / after-hours replacement</h3>
                    <p className="mt-2 leading-7 text-amber-800">
                      Spring failures spike in Portland during cold snaps — typically November
                      through January — when overnight temperatures cause metal to contract and
                      become brittle. Same-day emergency calls during these periods often carry
                      a 30–50% premium over standard rates. After-hours calls add $50–$150 on top.
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-2xl font-bold text-amber-900">+30–50%</p>
                    <p className="text-sm text-amber-700">over standard rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold">Quick cost summary</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-600">Torsion (standard)</dt>
                  <dd className="font-semibold">$200–$400</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-600">Extension (each)</dt>
                  <dd className="font-semibold">$160–$280</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-600">Heavy/custom door</dt>
                  <dd className="font-semibold">$300–$600</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-3">
                  <dt className="text-slate-600">Labor (per hour)</dt>
                  <dd className="font-semibold">$80–$160</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">Diagnostic fee</dt>
                  <dd className="font-semibold">$50–$100</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-base font-bold">Ready to get a quote?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Call now or request service online. We connect Portland homeowners with local repair pros.
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
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">What else affects the cost</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div>
              <h3 className="text-xl font-bold">Whether you replace one or both springs</h3>
              <p className="mt-3 leading-7 text-slate-600">
                If one torsion spring snaps, most technicians recommend replacing both at the same
                time. Springs on the same door age at the same rate — if one has failed, the other
                is close behind. Replacing both now costs less than two separate service calls later,
                and you won't be locked out again in three months.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">High-cycle vs. standard springs</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Standard springs are rated for around 10,000 cycles — roughly 7–10 years of daily
                use. High-cycle springs (25,000–100,000 cycles) cost more upfront but last significantly
                longer. For a busy household where the door opens four or more times a day, high-cycle
                springs often pay for themselves in fewer service calls.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Cable damage from a spring failure</h3>
              <p className="mt-3 leading-7 text-slate-600">
                When a spring snaps under tension, it can whip the cables loose or damage the drums
                they wind around. If your cables need replacement alongside the spring — which happens
                in roughly one in three spring failures — expect to add $100–$200 to the repair total.
                A good technician will check the cables before wrapping up.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Portland neighborhood and access</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Some Portland-area repair companies charge travel fees for outlying areas like Gresham,
                North Plains, or Sherwood. In Southeast Portland, narrow driveways and older garages
                with low clearance can also add time to a repair. Ask about travel fees when you call
                if you're outside the central metro area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Signs your spring is failing — before it snaps</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Springs rarely give much warning, but there are a few signs worth paying attention to.
          Catching a failing spring early is always better than dealing with an emergency.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 text-slate-700">
          {[
            ["Door feels heavier than usual", "The spring is losing tension and no longer fully counterbalancing the door's weight."],
            ["Opener strains or moves slowly", "If the motor is working harder than normal, the spring may not be doing its share of the lifting."],
            ["Door opens unevenly or tilts to one side", "On doors with two torsion springs, one failing spring causes the other to carry an uneven load."],
            ["Visible gap in the spring", "A snapped torsion spring will have a clear gap of an inch or more in the coil — easy to spot above the door."],
            ["Cables look loose or slack on one side", "Loose cables are often a symptom of a spring that has lost tension or broken entirely."],
            ["Loud bang from the garage", "The most dramatic warning sign — when a torsion spring snaps under tension, it's very loud."],
          ].map(([sign, detail]) => (
            <li key={sign} className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold">{sign}</p>
              <p className="mt-1 text-sm text-slate-500">{detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Related pages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">All Repair Costs</Link>
            <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
            <Link href="/garage-door-spring-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Repair Service</Link>
            <Link href="/garage-door-cable-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Cable Repair</Link>
            <Link href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</Link>
            <Link href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland Garage Door Repair</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
