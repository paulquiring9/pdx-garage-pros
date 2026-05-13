import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Repair Cost in Portland OR (2026) | PDX Garage Pros",
  description:
    "How much does garage door repair cost in Portland? Real 2026 price ranges for springs, openers, cables, rollers, and off-track repairs — plus what drives costs up.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-cost-portland",
  },
};

const repairs = [
  {
    type: "Spring replacement (torsion)",
    low: 200,
    high: 400,
    notes: "Most common repair. Single spring on a standard door.",
  },
  {
    type: "Spring replacement (extension)",
    low: 160,
    high: 280,
    notes: "Less common in newer homes. Usually replaced in pairs.",
  },
  {
    type: "Opener repair",
    low: 100,
    high: 300,
    notes: "Board, gear, or drive issues. Full replacement runs $300–$600.",
  },
  {
    type: "Cable replacement",
    low: 100,
    high: 250,
    notes: "Usually replaced in pairs. Often combined with spring repair.",
  },
  {
    type: "Roller replacement",
    low: 100,
    high: 200,
    notes: "Full set of 10–12 rollers. Nylon rollers cost more than steel.",
  },
  {
    type: "Off-track repair",
    low: 125,
    high: 300,
    notes: "Depends on whether track is bent or just needs realignment.",
  },
  {
    type: "Panel replacement (single)",
    low: 200,
    high: 500,
    notes: "Matching older panels can be difficult — sometimes warrants full replacement.",
  },
  {
    type: "Sensor replacement / alignment",
    low: 50,
    high: 150,
    notes: "Often the fix when a door reverses before closing.",
  },
  {
    type: "General tune-up / maintenance",
    low: 90,
    high: 150,
    notes: "Lubrication, balance check, hardware tightening.",
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
            Garage Door Repair Cost in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Portland homeowners typically pay between $155 and $354 for garage door repair,
            with an average around $252. But cost varies a lot depending on what's actually broken.
            Here's what each type of repair actually costs in the Portland metro area.
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
        <h2 className="text-3xl font-bold tracking-tight">Portland garage door repair prices by type</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Prices below reflect typical ranges for the Portland metro area in 2026, including parts
          and labor. Emergency or after-hours calls generally run 20–50% higher.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-4 font-semibold text-slate-700">Repair type</th>
                <th className="px-5 py-4 font-semibold text-slate-700">Typical range</th>
                <th className="px-5 py-4 font-semibold text-slate-700 hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map((r, i) => (
                <tr
                  key={r.type}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                >
                  <td className="px-5 py-4 font-medium text-slate-900">{r.type}</td>
                  <td className="px-5 py-4 text-slate-700 whitespace-nowrap">
                    ${r.low}–${r.high}
                  </td>
                  <td className="px-5 py-4 text-slate-500 hidden md:table-cell">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Prices are estimates based on Portland-area market data. Get a quote for your specific situation.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">What makes Portland repair costs higher or lower</h2>

              <h3 className="mt-8 text-xl font-bold">Labor rates in Portland</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Portland technicians typically charge $70–$115 per hour for standard repairs,
                with Portland's higher cost of living pushing rates toward the top of that range
                compared to national averages. Most repairs take one to two hours, so labor alone
                often runs $100–$230 before parts.
              </p>

              <h3 className="mt-8 text-xl font-bold">Emergency and after-hours calls</h3>
              <p className="mt-3 leading-7 text-slate-700">
                If your door is stuck open overnight or you're locked out before work, expect to pay
                a premium. After-hours calls in Portland typically add $50–$150 to the base cost,
                and same-day emergency service during peak periods — winter ice events especially —
                can run 30–50% higher than standard rates.
              </p>

              <h3 className="mt-8 text-xl font-bold">Older homes and custom doors</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Portland has significant older housing stock, particularly in Southeast and Northeast
                neighborhoods. Older doors may use non-standard spring sizes or discontinued hardware
                that costs more to source. Wood and carriage-style doors — more common in Lake Oswego
                and the West Hills — are heavier and require heavier-duty springs that cost more than
                standard torsion springs.
              </p>

              <h3 className="mt-8 text-xl font-bold">Diagnostic fees</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Most Portland-area technicians charge a $50–$100 service call or diagnostic fee,
                which is sometimes waived if you proceed with the repair. Ask upfront whether the
                diagnostic fee applies toward the total cost of repair.
              </p>

              <h3 className="mt-8 text-xl font-bold">Repair vs. replace</h3>
              <p className="mt-3 leading-7 text-slate-700">
                If your door is more than 15–20 years old and needs a major repair — spring plus
                cables plus rollers all at once — the total can approach the cost of a new door.
                Full door replacement in Portland starts around $900 for a basic steel door and runs
                $1,500–$2,000 for mid-range models. At that crossover point, replacement often makes
                more sense than stacking repairs on aging hardware.
              </p>
            </div>

            <aside className="h-fit space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Get a quote</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Call or request service for Portland and the surrounding metro area.
                  We connect you with a local repair professional.
                </p>
                <a
                  href="tel:+15034953464"
                  className="mt-5 block rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white hover:bg-slate-800"
                >
                  Call (503) 495-3464
                </a>
                <a
                  href="/contact"
                  className="mt-3 block rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100"
                >
                  Request a Quote
                </a>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-base font-bold text-amber-900">Quick cost check</h3>
                <ul className="mt-3 space-y-2 text-sm text-amber-800">
                  <li>Spring snapped? → $200–$400</li>
                  <li>Opener dead? → $100–$300 repair</li>
                  <li>Door off track? → $125–$300</li>
                  <li>Won't close? → often a $50–$150 sensor fix</li>
                  <li>Grinding noise? → $100–$200 rollers</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Questions to ask before you hire</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["Is the diagnostic fee applied toward the repair?", "Some companies waive it, some don't. Worth knowing before they arrive."],
            ["Are you licensed through the Oregon CCB?", "Oregon garage door contractors should be licensed through the Construction Contractors Board."],
            ["Do you stock common parts on the truck?", "A tech who has springs and rollers on hand can finish same-day. Others may need to return."],
            ["What's the warranty on parts and labor?", "Good shops offer 90 days to a year on parts and labor. Get it in writing."],
            ["Is the quoted price all-in?", "Confirm the quote includes parts, labor, and the service call fee — not just one of them."],
            ["Do you replace springs in pairs?", "If one spring broke, the other is likely close behind. Replacing both at once saves a second service call."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">{q}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Related repair pages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/garage-door-spring-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Replacement Cost</Link>
            <Link href="/garage-door-spring-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Repair</Link>
            <Link href="/garage-door-opener-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair</Link>
            <Link href="/garage-door-cable-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Cable Repair</Link>
            <Link href="/garage-door-off-track-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Off-Track Repair</Link>
            <Link href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
