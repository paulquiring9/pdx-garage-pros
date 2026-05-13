import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Frozen to Ground Portland OR | PDX Garage Pros",
  description:
    "Garage door frozen shut in Portland? Here's how to safely free it, what not to do, and when to call for help. Tips specific to Portland winters.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-frozen-portland",
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
            Garage Door Frozen to the Ground in Portland
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Portland doesn't get the sustained freezes that inland Oregon does, but overnight
            temperatures below 32°F are enough to freeze a garage door's bottom seal to the
            concrete floor. Here's how to handle it safely — and what not to do.
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

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">The first thing to do: don't run the opener</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              This is the most important rule. When a garage door is frozen to the ground and you
              run the opener, the motor pulls against a fixed resistance. On the first attempt it
              may just fail to open. On repeated attempts it can strip the drive gear, snap the
              cables, or burn out the motor entirely — turning a $0 problem into a $200–$600 repair.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              If you already ran the opener once or twice and the door didn't open, that's usually
              fine. Just stop there. The damage typically happens when people run it five, ten, or
              fifteen times trying to force it.
            </p>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">How to safely free a frozen garage door</h2>

            <ol className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">1</span>
                <div>
                  <p className="font-semibold text-slate-900">Disengage the opener first</p>
                  <p className="mt-1 leading-7 text-slate-600">
                    Pull the red emergency release cord hanging from the opener trolley. This
                    disconnects the door from the opener so you can work without risk of the motor
                    engaging. The cord usually has a red handle and hangs down near the center of
                    the door track.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">2</span>
                <div>
                  <p className="font-semibold text-slate-900">Apply warm water along the bottom seal</p>
                  <p className="mt-1 leading-7 text-slate-600">
                    Pour lukewarm — not boiling — water along the bottom edge of the door where
                    the rubber seal meets the concrete. Boiling water can crack cold concrete and
                    may damage the seal itself. Let the water work for two to three minutes before
                    trying to move the door.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">3</span>
                <div>
                  <p className="font-semibold text-slate-900">Try a plastic putty knife or ice scraper</p>
                  <p className="mt-1 leading-7 text-slate-600">
                    Gently work a plastic scraper along the bottom seal to break the ice bond.
                    Don't use metal scrapers or pry bars — they'll tear the seal or scratch the
                    door panel. A thin plastic tool and a little patience gets the job done without damage.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-content rounded-full bg-slate-900 text-sm font-bold text-white">4</span>
                <div>
                  <p className="font-semibold text-slate-900">Lift manually before re-engaging the opener</p>
                  <p className="mt-1 leading-7 text-slate-600">
                    Once you've broken the ice bond, try lifting the door manually. It should move
                    fairly freely — garage doors are counterbalanced by springs and shouldn't require
                    much force. If it feels very heavy or won't budge after the ice is cleared, that's
                    a sign of a separate problem (often a spring) and you should call before trying the opener.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">5</span>
                <div>
                  <p className="font-semibold text-slate-900">Re-engage the opener and test slowly</p>
                  <p className="mt-1 leading-7 text-slate-600">
                    Once the door moves freely by hand, pull the emergency release cord back up toward
                    the opener until you hear a click — this re-engages the trolley. Then use the
                    opener at slow speed to open the door completely, watching for any unusual sounds
                    or movement before closing it again.
                  </p>
                </div>
              </li>
            </ol>

            <h2 className="mt-10 text-3xl font-bold tracking-tight">What not to use</h2>
            <p className="mt-4 leading-7 text-slate-700">
              A few things people try that cause more damage than the freeze itself:
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Heat guns or propane torches.</strong> Concentrated heat can melt or scorch rubber seals, warp aluminum door panels, and create a fire risk near wood trim and insulation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Salt or sand.</strong> Rock salt is corrosive and will deteriorate the rubber bottom seal over time. It also pits concrete. Use a purpose-made ice melt rated as safe for rubber and concrete.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Crowbars or pry bars.</strong> Prying at the door bottom tears the seal and can bend the bottom panel, which is expensive to replace and often can't be matched on older doors.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold shrink-0">✗</span>
                <span><strong>Repeatedly running the opener.</strong> Already covered above — but worth repeating. One attempt, maybe two. Then stop and use the manual method.</span>
              </li>
            </ul>
          </div>

          <aside className="h-fit space-y-5">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-base font-bold text-amber-900">Door still won't open?</h3>
              <p className="mt-2 text-sm leading-6 text-amber-800">
                If the door is free from ice but still won't lift easily by hand, don't force the opener.
                A broken spring can mimic a frozen door — call before running it again.
              </p>
              <a
                href="tel:+15034953464"
                className="mt-4 block rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white hover:bg-slate-800"
              >
                Call (503) 495-3464
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-base font-bold">Service area</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Serving Portland, Beaverton, Hillsboro, Tigard, Tualatin, Lake Oswego, Gresham,
                and surrounding metro areas.
              </p>
              <a
                href="/contact"
                className="mt-4 block rounded-xl border border-slate-300 px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-100"
              >
                Request a Quote
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">How to prevent it next time</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              ["Replace a cracked or hardened bottom seal", "The rubber bottom seal is what freezes to the concrete. An old, hardened seal bonds much more aggressively than a new pliable one. Seal replacement typically costs $75–$150 installed and is the single most effective prevention step."],
              ["Apply silicone lubricant to the seal", "A thin coat of silicone spray on the bottom seal before a freeze makes it far less likely to bond to the concrete. Petroleum-based lubricants will degrade rubber — use silicone only. Reapply at the start of each cold season."],
              ["Keep the floor dry near the door", "Water pooling against the door bottom — from rain, car runoff, or condensation — makes freezing much more likely. Make sure the garage floor drains away from the door, and consider a weatherproof mat inside the door."],
              ["Don't park a wet car against the door", "A wet car dripping against the bottom of the door on a cold night is a reliable way to freeze it shut by morning. If temperatures are below freezing, park a foot away from the door."],
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
        <h2 className="text-3xl font-bold tracking-tight">When the real problem is a broken spring</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Portland sees a spike in spring failures every winter. Cold temperatures make metal
          more brittle, and a spring that was marginal in October may snap during the first
          hard freeze in November or December. The symptoms overlap with a frozen door — the
          door won't open, and the opener may strain and stop — which is why it's important to
          free the door from the ice manually before running the opener again.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          If the door moves freely by hand once the ice is cleared, the springs are likely fine.
          If it's still very heavy or only opens a few inches manually, a spring may have snapped.
          In that case, stop and call — running the opener against a broken spring can damage the
          motor and cables.
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
            <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
            <Link href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</Link>
            <Link href="/garage-door-wont-close-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Door Won't Close</Link>
            <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Repair Cost Guide</Link>
            <Link href="/garage-door-repair-gresham" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Gresham Service Area</Link>
            <Link href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland Service Area</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
