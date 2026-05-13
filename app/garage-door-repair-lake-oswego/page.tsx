import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Repair Lake Oswego OR | PDX Garage Pros",
  description:
    "Garage door repair in Lake Oswego, Oregon — broken springs, opener problems, off-track doors, cables, and emergency service for Lake Oswego homeowners.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-lake-oswego",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Lake Oswego, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Repair in Lake Oswego
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Lake Oswego homes range from mid-century ranch houses near the lake to newer
            construction in Stafford and Mountain Park. PDX Garage Pros helps Lake Oswego homeowners
            with garage door repairs across all property types and door styles.
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
          <h2 className="text-3xl font-bold tracking-tight">What Lake Oswego homeowners deal with</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Lake Oswego has a wide range of home vintages — from 1950s and 1960s lakefront properties
            to 1980s and 1990s construction in Mountain Park and First Addition, to newer builds in
            the Stafford area. Older homes often have original hardware that's well past its service
            life. Larger, heavier carriage-style or custom wood doors — more common in Lake Oswego than
            in surrounding cities — put extra demands on springs and openers and tend to wear components
            faster than standard steel doors.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Repairs we handle in Lake Oswego</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>Broken torsion springs on heavy doors</li>
            <li>Opener upgrade or replacement</li>
            <li>Off-track or misaligned door</li>
            <li>Cable repair or replacement</li>
            <li>Roller replacement on carriage doors</li>
            <li>Door panel damage assessment</li>
            <li>Wall button or keypad not working</li>
            <li>Door out of balance</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Lake Oswego neighborhoods we serve</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We serve all of Lake Oswego, including First Addition, Lake Grove, Mountain Park,
            Westlake, Palisades, Uplands, Old Town, and the Stafford area. We also serve nearby
            West Linn, which shares a border with Lake Oswego along the Tualatin River, and
            Oswego Lake-area communities on the Clackamas County side.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Heavy or custom doors need the right spring</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Carriage-style and custom wood doors are significantly heavier than standard steel panels.
            Using a spring rated for a lighter door is a common mistake that leads to fast wear, poor
            balance, and early opener failure. If your door has been replaced or upgraded but the
            springs haven't been rechecked, it's worth confirming the hardware matches the door weight.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Lake Oswego service area</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Serving Lake Oswego, West Linn, Stafford, and nearby Clackamas County communities.
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
            <a href="/garage-door-repair-tigard" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Tigard</a>
            <a href="/garage-door-repair-tualatin" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Tualatin</a>
            <a href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland</a>
          </div>
        </div>
      </section>
    </main>
  );
}
