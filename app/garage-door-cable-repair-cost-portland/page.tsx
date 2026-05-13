import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Cable Repair Cost Portland OR (2026) | PDX Garage Pros",
  description:
    "Garage door cable repair costs $100–$250 in Portland. See 2026 price ranges, what causes cables to snap, and what to do when a cable breaks.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-cable-repair-cost-portland",
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
            Garage Door Cable Repair Cost in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Cable repair typically runs $100–$250 in Portland, depending on whether one or both
            cables need replacement and whether the spring also needs to be replaced. Here's a full
            breakdown of what to expect and what drives the cost.
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
            <h2 className="text-3xl font-bold tracking-tight">Cable repair costs by scenario</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Cables are almost always replaced as a pair even if only one has failed — the other
              cable is the same age and under the same stress, so replacing both in one visit is
              standard practice. Labor is the biggest cost factor since the job requires releasing
              spring tension, which must be done safely by a technician.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Cable replacement only (both cables)",
                  price: "$100–$200",
                  description: "The most common scenario when cables snap due to age or wear without a concurrent spring failure. Includes both lift cables, labor, and any necessary drum adjustment.",
                  highlight: false,
                },
                {
                  title: "Cable replacement + spring replacement",
                  price: "$300–$600",
                  description: "Cables frequently fail alongside or shortly after a spring failure — the sudden loss of spring tension can whip the cable loose or damage the drum. Replacing both in one visit is more cost-effective than two separate service calls.",
                  highlight: false,
                },
                {
                  title: "Cable drum replacement",
                  price: "$150–$300",
                  description: "If the cable drum — the spool the cable winds around — is cracked or grooved, it needs replacement alongside the cable. Drums are more common to fail on older doors or when a spring has snapped with force.",
                  highlight: false,
                },
                {
                  title: "Emergency cable repair",
                  price: "+$50–$150",
                  description: "After-hours or same-day emergency calls in Portland typically add $50–$150 to the base cost. Cable failures that leave a door stuck open are the most common emergency scenario.",
                  highlight: true,
                },
              ].map((scenario) => (
                <div
                  key={scenario.title}
                  className={`rounded-2xl border p-6 ${scenario.highlight ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-white"}`}
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${scenario.highlight ? "text-amber-900" : "text-slate-900"}`}>
                        {scenario.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-6 ${scenario.highlight ? "text-amber-800" : "text-slate-600"}`}>
                        {scenario.description}
                      </p>
                    </div>
                    <div className="shrink-0 md:text-right">
                      <p className={`text-2xl font-bold ${scenario.highlight ? "text-amber-900" : "text-slate-900"}`}>
                        {scenario.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">What causes garage door cables to fail</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Cables fail for a few distinct reasons, and knowing which one applies can tell you
              whether additional repairs are likely.
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["Age and wear", "Lift cables are steel wound around a central core — similar to a bicycle brake cable but much heavier gauge. Over thousands of cycles, individual wires fray and break. Once enough wires break, the remaining cable can't handle the load and snaps. This is the most common cause and usually happens when doors are 10–15+ years old."],
                ["Spring failure", "When a torsion spring snaps, it releases stored energy suddenly. That energy travels through the system — and can snap or badly kink the cables in the process. This is why cable damage is common alongside spring failures. A technician will inspect cables as part of any spring repair."],
                ["Cable drum issues", "The cable winds around a drum on each side of the door. If the drum develops a groove or crack, the cable can slip out of its track during operation and unwind unevenly — causing the door to run crooked or come off track entirely."],
                ["Corrosion in Portland's wet climate", "Portland's high humidity and wet winters accelerate rust on cable surfaces, particularly in garages with poor ventilation or weatherstripping. Surface rust weakens individual wires and shortens cable lifespan compared to drier climates."],
                ["Running the door with a problem", "Continuing to operate a door that's off-track, has a broken spring, or has an obstruction puts abnormal load on cables. This is a common way cables fail prematurely — the motor keeps trying to run the door, transferring all the force through the cables instead of sharing it with the springs."],
              ].map(([title, detail]) => (
                <div key={title}>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">What to do when a cable breaks</h2>
            <p className="mt-4 leading-7 text-slate-700">
              A broken cable is a call-a-technician situation — not a DIY repair. Cables are under
              significant spring tension, and working on them without releasing that tension safely
              is dangerous. Here's what to do while you wait:
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 font-bold text-slate-400 shrink-0">1.</span>
                <span><strong>Stop using the opener.</strong> Running the motor with a broken cable puts all the load on the remaining cable and the opener itself — both of which can fail or be damaged as a result.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 font-bold text-slate-400 shrink-0">2.</span>
                <span><strong>Don't manually force the door.</strong> If one cable is broken, the door is unbalanced and can come down unevenly. Don't try to lift or close it by hand — leave it where it stopped.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 font-bold text-slate-400 shrink-0">3.</span>
                <span><strong>If the door is stuck open, secure it.</strong> A door stuck open is a security issue. If you need to leave, manually push it down as far as it will go safely and use the manual lock or secure the door with a c-clamp on the track above a roller to hold it in place.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 font-bold text-slate-400 shrink-0">4.</span>
                <span><strong>Call for service.</strong> Cable repair is a same-day or next-day repair in most cases — it's not a long wait. Most Portland technicians carry replacement cables on their truck.</span>
              </li>
            </ul>
          </div>

          <aside className="h-fit space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold">Cost summary</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-600">Cables only (pair)</dt>
                  <dd className="font-semibold">$100–$200</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-600">Cable + spring</dt>
                  <dd className="font-semibold">$300–$600</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-600">Cable + drum</dt>
                  <dd className="font-semibold">$150–$300</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-3">
                  <dt className="text-slate-600">Labor (per hour)</dt>
                  <dd className="font-semibold">$80–$160</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">Emergency add-on</dt>
                  <dd className="font-semibold">+$50–$150</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-base font-bold">Cable snapped?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Don't run the opener again. Call us and we'll get a technician to you.
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

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-bold text-slate-900">Is the spring also broken?</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                If the door is very heavy when you try to lift it manually after the cable
                broke, the spring may have failed too. A snapped spring and snapped cable
                often happen together.
              </p>
              <Link
                href="/garage-door-spring-repair-cost-portland"
                className="mt-3 block text-xs font-medium text-slate-700 underline hover:text-slate-900"
              >
                Spring replacement cost →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Signs your cables are wearing out</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Unlike springs, cables sometimes show visible signs of wear before they snap.
            It's worth a quick look every year or two, especially on doors over 10 years old.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              ["Fraying or loose strands visible on the cable", "The cable is made of multiple wire strands wound together. If you can see individual strands starting to separate or poke out from the main cable, it's close to failure. Don't wait for it to snap."],
              ["Door running unevenly or tilting to one side", "If one cable is looser or more worn than the other, the door will sag on that side during operation. The panels may run at a slight angle, and you might notice the door doesn't sit flush in the frame when closed."],
              ["Slack cable visible when door is closed", "Lift cables should be taut when the door is fully closed. If you can see a cable hanging loose or off its drum, it has either snapped or come unwound — both require a technician."],
              ["Rust or discoloration on the cable", "Surface rust on cables is a warning sign in Portland's wet climate. Rust weakens the individual wire strands and accelerates fatigue. A rust-covered cable on a door over 10 years old is likely near end of life."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-900">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Related pages</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/garage-door-cable-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Cable Repair Service</Link>
          <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">All Repair Costs</Link>
          <Link href="/garage-door-spring-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Replacement Cost</Link>
          <Link href="/garage-door-off-track-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Off-Track Repair</Link>
          <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
          <Link href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</Link>
        </div>
      </section>
    </main>
  );
}
