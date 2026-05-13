import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Do Garage Door Springs Last? | PDX Garage Pros Portland",
  description:
    "Garage door springs last 7–12 years on average. Learn what affects spring lifespan in Portland, how to tell when yours are failing, and what replacement costs.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/how-long-do-garage-door-springs-last",
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
            How Long Do Garage Door Springs Last?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Standard garage door springs are rated for 10,000 cycles — which works out to
            7–10 years for most Portland households. But actual lifespan varies significantly
            based on how often the door is used, the spring type, and Portland's climate.
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
            <h2 className="text-3xl font-bold tracking-tight">The cycle rating — what it actually means</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Garage door springs are rated in cycles, not years. One cycle is one complete open-and-close
              of the door. Standard torsion springs are rated for 10,000 cycles. High-cycle springs are
              available at 25,000, 50,000, and 100,000 cycles.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              To translate cycles into years, count how many times your door opens and closes per day.
              Here's how that maps to lifespan with a standard 10,000-cycle spring:
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 font-semibold text-slate-700">Daily cycles</th>
                    <th className="px-5 py-4 font-semibold text-slate-700">Typical household</th>
                    <th className="px-5 py-4 font-semibold text-slate-700">Expected lifespan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["2–3", "Single person, minimal use", "9–14 years"],
                    ["4–6", "Couple, standard commute", "5–7 years"],
                    ["8–10", "Family with multiple drivers", "3–4 years"],
                    ["12+", "Home business, frequent access", "2–3 years"],
                  ].map(([cycles, household, lifespan], i) => (
                    <tr key={cycles} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 font-medium text-slate-900">{cycles}</td>
                      <td className="px-5 py-4 text-slate-600">{household}</td>
                      <td className="px-5 py-4 font-semibold text-slate-900">{lifespan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">How Portland's climate affects spring life</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Portland's wet, mild winters create a specific set of conditions that affect spring
              longevity in ways that differ from drier or colder climates.
            </p>

            <h3 className="mt-6 text-xl font-bold">Temperature cycling shortens lifespan</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Portland doesn't get the sustained hard freezes that inland Oregon does, but it gets
              frequent cycling between cold nights and mild days — particularly November through
              March. Metal expands and contracts with temperature changes, and repeated cycling
              fatigues the metal over time. This is one reason Portland springs tend to fail at
              the lower end of their rated cycle count compared to springs in more stable climates.
            </p>

            <h3 className="mt-6 text-xl font-bold">Moisture and corrosion</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Portland's high annual rainfall — about 36 inches per year — means garage environments
              tend to be more humid than in drier regions. Springs in garages without good ventilation
              or weatherstripping can develop surface rust that weakens the metal. This is most common
              in older garages in Southeast Portland and east county, where original weatherstripping
              has deteriorated and moisture gets in freely.
            </p>

            <h3 className="mt-6 text-xl font-bold">Cold-snap failures in fall and winter</h3>
            <p className="mt-3 leading-7 text-slate-700">
              A spring that's been operating near the end of its cycle life all summer often fails
              during Portland's first cold snap of fall. Cold metal becomes more brittle, and a
              spring under full operating tension can snap suddenly when temperatures drop overnight.
              This is why Portland sees a significant spike in spring repair calls every November
              and December.
            </p>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">Signs your springs are getting close to end of life</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Springs rarely give much warning before failing, but there are a few signs worth watching for —
              especially if your door is 7 or more years old.
            </p>
            <ul className="mt-5 space-y-4">
              {[
                ["Door feels heavier when lifting manually", "The spring is losing tension and no longer fully counterbalancing the door weight. If you disengage the opener and the door is hard to lift, the spring has lost significant tension."],
                ["Opener is slower or strains more than before", "As spring tension weakens, the opener has to work harder. If the door moves slower than it used to or the opener sounds labored, worn springs are a likely cause."],
                ["Door doesn't stay open at the halfway point", "A balanced door should stay open at any height without the opener. If it creeps down on its own when held at waist height, the springs are losing tension unevenly."],
                ["Visible wear, rust, or gaps in the coil", "Torsion springs can be inspected from inside the garage. Look for rust, uneven spacing between coils, or a visible gap — which means the spring has already snapped."],
                ["Squeaking or creaking during operation", "Some squeaking is normal and can be resolved with lubrication. But new or worsening squeaking on older springs can indicate metal fatigue."],
              ].map(([sign, detail]) => (
                <li key={sign} className="rounded-xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">{sign}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit space-y-5">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-base font-bold text-amber-900">Quick lifespan estimate</h3>
              <dl className="mt-3 space-y-2 text-sm text-amber-800">
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <dt>Standard spring</dt>
                  <dd className="font-semibold">10,000 cycles</dd>
                </div>
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <dt>4 cycles/day</dt>
                  <dd className="font-semibold">~7 years</dd>
                </div>
                <div className="flex justify-between border-b border-amber-200 pb-2">
                  <dt>High-cycle option</dt>
                  <dd className="font-semibold">25,000–100,000</dd>
                </div>
                <div className="flex justify-between">
                  <dt>High-cycle at 4/day</dt>
                  <dd className="font-semibold">17–68 years</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold">Replacement costs in Portland</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <dt className="text-slate-600">Torsion spring</dt>
                  <dd className="font-semibold">$200–$400</dd>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <dt className="text-slate-600">Extension spring (ea.)</dt>
                  <dd className="font-semibold">$160–$280</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-600">High-cycle upgrade</dt>
                  <dd className="font-semibold">+$50–$150</dd>
                </div>
              </dl>
              <Link
                href="/garage-door-spring-repair-cost-portland"
                className="mt-4 block text-center text-sm font-medium text-slate-700 underline hover:text-slate-900"
              >
                Full spring cost guide →
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 text-white">
              <h3 className="text-base font-bold">Think your springs are failing?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Call us and describe what the door is doing. We can help you figure out if it's the springs before sending a technician.
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
          <h2 className="text-3xl font-bold tracking-tight">How to extend the life of your springs</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              ["Lubricate twice a year", "Spray a lithium-based or silicone garage door lubricant directly on the spring coils — not WD-40, which attracts dust and dries out quickly. Do this in spring and fall. A well-lubricated spring runs cooler, with less friction-induced wear on the metal."],
              ["Keep the door balanced", "An out-of-balance door puts uneven load on the springs, causing premature wear. Test balance by disconnecting the opener and lifting the door manually to waist height — it should stay in place. If it rises or drops, the springs need adjustment."],
              ["Don't run the opener against resistance", "If the door is frozen, stuck, or hits an obstruction, running the opener repeatedly strains both the motor and the springs well beyond their design load. One attempt is fine — after that, investigate manually."],
              ["Consider high-cycle springs at next replacement", "When your current springs reach end of life, upgrading to high-cycle springs adds $50–$150 to the replacement cost but can triple or quadruple the lifespan. For busy households in Portland, it almost always pays off."],
              ["Replace both springs at the same time", "On doors with two torsion springs, replacing only the failed one leaves an aging spring doing half the work. Springs on the same door wear at the same rate — replacing both at once costs less than two separate service calls."],
              ["Address corrosion early", "If you see surface rust on your springs, apply a rust-inhibiting lubricant and improve garage ventilation. Surface rust is cosmetic at first but penetrates over time. In Portland's humid winters, checking for rust annually is worth the two minutes it takes."],
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
        <h2 className="text-3xl font-bold tracking-tight">When to replace proactively vs. waiting for failure</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Most homeowners replace springs after they fail — which means dealing with a door that
          won't open, often at the worst possible time. Proactive replacement makes sense when your
          springs are 8 or more years old and you're already having other hardware serviced. Adding
          spring replacement to a same-visit repair usually costs less in combined labor than a
          separate service call later.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          If your door is approaching 10 years old and you've never had the springs serviced, it's
          worth having a technician assess tension and wear during a routine tune-up. A $90–$150
          tune-up that catches failing springs early is significantly cheaper than an emergency
          spring replacement when the door is stuck shut at 7am.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+15034953464"
            className="rounded-xl bg-slate-900 px-6 py-4 text-center font-bold text-white hover:bg-slate-800"
          >
            Call (503) 495-3464
          </a>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 px-6 py-4 text-center font-semibold text-slate-900 hover:bg-slate-50"
          >
            Request Service Online
          </Link>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Related pages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/garage-door-spring-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Replacement Cost</Link>
            <Link href="/torsion-vs-extension-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Torsion vs. Extension Springs</Link>
            <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
            <Link href="/garage-door-spring-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Repair Service</Link>
            <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">All Repair Costs</Link>
            <Link href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland Service Area</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
