import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Repair Beaverton OR | PDX Garage Pros",
  description:
    "Garage door repair in Beaverton, Oregon — broken springs, opener issues, off-track doors, cables, and emergency service for Beaverton homeowners.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-beaverton",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Beaverton, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Repair in Beaverton
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Beaverton has a high concentration of attached garages — especially in neighborhoods built
            in the 1980s through 2000s — which means the door is often the primary entry point to the
            home. PDX Garage Pros helps Beaverton homeowners get back in when things go wrong.
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
          <h2 className="text-3xl font-bold tracking-tight">What causes garage door problems in Beaverton</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Many Beaverton homes were built in the late 1980s and 1990s — meaning their original garage
            door springs and openers are now 25 to 35 years old and well past their typical service life.
            Torsion springs are rated for around 10,000 cycles, which works out to roughly 7 to 10 years
            of typical use. Openers from that era often lack the safety sensors required by modern code.
            If your door suddenly stops working and the hardware looks original, age is likely a factor.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Common repairs for Beaverton homeowners</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>Broken torsion springs</li>
            <li>Garage door opener replacement</li>
            <li>Door off track or binding</li>
            <li>Frayed or snapped cables</li>
            <li>Worn or cracked rollers</li>
            <li>Door reverses before fully closing</li>
            <li>Keypad or remote stopped working</li>
            <li>Noisy door on every cycle</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Beaverton neighborhoods we serve</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We serve all of Beaverton, including Murrayhill, Sexton Mountain, Cooper Mountain,
            Progress Ridge, Raleigh Hills, Cedar Hills, Aloha, and the areas around Sunset Corridor.
            We also cover Cedar Mill and the unincorporated Washington County areas that border Beaverton
            to the north and west.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">When to stop using the opener</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            If your door shudders, moves unevenly, or makes a new grinding or popping noise, stop
            running the opener. On older doors especially, forcing a struggling opener can bend tracks,
            snap cables, or burn out the motor. A brief call can help you figure out whether it's safe
            to keep using the door while waiting for a repair.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Beaverton service area</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Serving Beaverton and nearby areas including Cedar Hills, Aloha, Raleigh Hills,
            Cooper Mountain, and Murrayhill.
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
            <a href="/garage-door-repair-hillsboro" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Hillsboro</a>
            <a href="/garage-door-repair-tigard" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Tigard</a>
            <a href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland</a>
          </div>
        </div>
      </section>
    </main>
  );
}
