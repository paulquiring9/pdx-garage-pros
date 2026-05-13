import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Torsion vs Extension Spring Portland OR | PDX Garage Pros",
  description:
    "Torsion or extension spring — what's the difference and which do you have? A practical guide for Portland homeowners, with repair costs and what to do when one breaks.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/torsion-vs-extension-spring-portland",
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
            Torsion vs. Extension Springs: What Portland Homeowners Need to Know
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Your garage door has either torsion springs or extension springs. Knowing which type
            you have tells you a lot about what broke, what it'll cost to fix, and what to expect
            from the repair.
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
        <h2 className="text-3xl font-bold tracking-tight">How to tell which type you have</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Stand inside your garage facing the door and look up. This takes about five seconds.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-6">
            <h3 className="text-xl font-bold">Torsion spring</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">Most common in Portland homes built after ~1985</p>
            <p className="mt-4 leading-7 text-slate-700">
              You'll see a single horizontal metal bar mounted above the door opening, running
              parallel to the top of the door. One or two tightly coiled springs wrap around
              this bar. The springs are usually 18–36 inches long and have visible coils when
              the door is closed.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Longer lifespan — 10,000–20,000 cycles standard</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>More controlled operation — smoother, quieter</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Safer when it breaks — contained by the shaft</li>
              <li className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">—</span>Costs more to replace: $200–$400 per spring</li>
              <li className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">—</span>Requires a technician — high-tension repair</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold">Extension springs</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">Common in older Portland homes and some newer construction</p>
            <p className="mt-4 leading-7 text-slate-700">
              You'll see two springs — one on each side of the door — running horizontally along
              the upper tracks. They're typically 24–36 inches long when relaxed and stretch out
              (extend) as the door closes. Often have a safety cable running through the center.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Less expensive to replace: $160–$280 per spring</li>
              <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>Easier to visually inspect for wear</li>
              <li className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">—</span>Shorter lifespan — ~7,500 cycles typically</li>
              <li className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">—</span>Can be more dangerous when they snap</li>
              <li className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">—</span>Require replacement in pairs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">How each spring type works</h2>

              <h3 className="mt-6 text-xl font-bold">Torsion springs</h3>
              <p className="mt-3 leading-7 text-slate-700">
                A torsion spring works by storing energy through twisting — torsion means rotation.
                When the door closes, the spring winds up tighter. When you open the door, that
                stored rotational energy unwinds and helps lift the door's weight. The spring transfers
                this force through the metal shaft to the cable drums on each side, which wind the
                cables that lift the door.
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                This is why a broken torsion spring is so recognizable: the door suddenly becomes very
                heavy, because the motor or your arms have to lift the full weight of the door without
                any spring assist. A standard two-car garage door weighs 150–250 pounds — a broken
                torsion spring means none of that weight is counterbalanced.
              </p>

              <h3 className="mt-8 text-xl font-bold">Extension springs</h3>
              <p className="mt-3 leading-7 text-slate-700">
                Extension springs store energy by stretching — they extend as the door closes and
                snap back to help pull the door up as it opens. They're simpler mechanically and
                have fewer components, but the stretching motion puts a different kind of stress on
                the metal that leads to fatigue faster than the twisting stress on torsion springs.
              </p>
              <p className="mt-3 leading-7 text-slate-700">
                A safety cable running through the center of each extension spring is important. If an
                extension spring snaps without a safety cable, it can fly off the track with significant
                force. If your extension springs don't have safety cables, having them added during a
                repair is worth the small additional cost.
              </p>

              <h2 className="mt-10 text-3xl font-bold tracking-tight">Which is more common in Portland?</h2>
              <p className="mt-4 leading-7 text-slate-700">
                The majority of Portland-area homes built after 1985 have torsion springs. The shift
                happened as torsion spring systems became the industry standard for residential doors
                due to their longer lifespan and safer failure mode.
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                Older Portland neighborhoods — particularly the Craftsman bungalows and mid-century
                homes in Sellwood, Irvington, Laurelhurst, and Mt. Tabor — are more likely to have
                extension springs, especially if the garage was original to the house or converted
                from a carriage house. Homes in Gresham and east Portland with original 1970s garages
                also frequently have extension springs.
              </p>

              <h2 className="mt-10 text-3xl font-bold tracking-tight">Can you switch from extension to torsion?</h2>
              <p className="mt-4 leading-7 text-slate-700">
                Yes, and it's a relatively common upgrade in Portland. The conversion requires
                installing the torsion bar, drums, cables, and new spring — plus the correct
                spring size for your door's weight. In the Portland market, a full conversion
                typically runs $400–$700 depending on door weight and whether any track hardware
                needs to be modified.
              </p>
              <p className="mt-4 leading-7 text-slate-700">
                The main reason to convert is lifespan and safety. If you have extension springs
                on an older home and they're reaching end of life, it's worth asking about
                converting rather than replacing like-for-like.
              </p>
            </div>

            <aside className="h-fit space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold">Spring replacement costs in Portland</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-3">
                    <dt className="text-slate-600">Torsion (standard)</dt>
                    <dd className="font-semibold">$200–$400</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-3">
                    <dt className="text-slate-600">Torsion (heavy door)</dt>
                    <dd className="font-semibold">$300–$600</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-3">
                    <dt className="text-slate-600">Extension (per spring)</dt>
                    <dd className="font-semibold">$160–$280</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-3">
                    <dt className="text-slate-600">Extension (pair)</dt>
                    <dd className="font-semibold">$280–$500</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-600">Ext → torsion conversion</dt>
                    <dd className="font-semibold">$400–$700</dd>
                  </div>
                </dl>
                <Link
                  href="/garage-door-spring-repair-cost-portland"
                  className="mt-5 block text-center text-sm font-medium text-slate-700 underline hover:text-slate-900"
                >
                  Full spring cost guide →
                </Link>
              </div>

              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <h3 className="text-base font-bold">Spring broken?</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Don't run the opener against a broken spring. Call us and we'll connect you with a technician.
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
        <h2 className="text-3xl font-bold tracking-tight">What happens when a spring breaks</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ["Torsion spring failure", "A snapped torsion spring usually announces itself with a loud bang — the stored tension releases suddenly. The spring separates at the break, often leaving a visible gap in the coil. The door becomes very heavy immediately and the opener will strain and stop. Don't force it."],
            ["Extension spring failure", "Extension springs can snap loudly or quietly depending on how much tension remains. Without a safety cable, a failed extension spring can fly across the garage. With a cable, it stays contained. Either way, the door will sag on one side and lose the ability to open smoothly."],
            ["After a torsion spring breaks", "Check for a gap in the spring above the door. If you see one, the spring has snapped. Do not run the opener. Disengage it and leave the door in whatever position it's in until a technician arrives. Trying to lift it manually requires two people and should be done carefully."],
            ["After an extension spring breaks", "Look along each track for a spring that's hanging loose or has come off its hook. If the safety cable is intact, the spring will still be in the track. Don't attempt to reattach it yourself — extension springs under load are dangerous. Call for service."],
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
            <Link href="/garage-door-spring-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Replacement Cost</Link>
            <Link href="/garage-door-spring-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Spring Repair Service</Link>
            <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
            <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">All Repair Costs</Link>
            <Link href="/garage-door-cable-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Cable Repair</Link>
            <Link href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland Service Area</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
