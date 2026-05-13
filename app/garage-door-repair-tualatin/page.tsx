import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Repair Tualatin OR | PDX Garage Pros",
  description:
    "Garage door repair in Tualatin, Oregon — broken springs, opener problems, off-track doors, cables, and emergency service for Tualatin homeowners.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-tualatin",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Tualatin, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Repair in Tualatin
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Tualatin's residential neighborhoods are built for car-dependent living — most homes have
            an attached garage, and for many households it's the most-used entry point. When the door
            stops working, PDX Garage Pros helps Tualatin homeowners get it sorted out.
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
          <h2 className="text-3xl font-bold tracking-tight">Garage door problems we see in Tualatin</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Tualatin was developed primarily in the 1980s and 1990s, so much of the installed garage
            door hardware is reaching or has already passed the end of its expected service life.
            Cold snaps — even mild Oregon winters can produce overnight lows that stress metal springs —
            often trigger spring failures in late fall and early winter. We also see a lot of opener
            issues in Tualatin, where older units have simply worn out or stopped holding a reliable
            signal from remotes and keypads.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Repairs Tualatin homeowners call us for</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>Broken torsion or extension springs</li>
            <li>Opener failure or intermittent operation</li>
            <li>Door running unevenly or off track</li>
            <li>Snapped or frayed lift cables</li>
            <li>Cracked or worn rollers</li>
            <li>Door that won't fully close</li>
            <li>Frozen or stiff door in cold weather</li>
            <li>Loud popping or grinding noises</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Where in Tualatin we work</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We serve all of Tualatin, including Tualatin Commons, Ibach, Tualatin Country Club area,
            Martinazzi, and the neighborhoods along Boones Ferry Road. We also cover Sherwood and
            the Durham area, which borders Tualatin to the north near the Tualatin River.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Cold weather and your garage door</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            When temperatures drop overnight, metal springs contract and become more brittle — this is
            why spring failures spike in November and December. If your door feels heavier than usual
            on a cold morning, that's a warning sign worth paying attention to. Running the door when
            a spring is near failure can cause it to snap suddenly, which is loud, potentially dangerous,
            and usually leaves the door stuck.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Tualatin service area</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Serving Tualatin, Sherwood, Durham, and nearby communities in Washington and
            Clackamas counties.
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
            <a href="/garage-door-repair-lake-oswego" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Lake Oswego</a>
            <a href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland</a>
          </div>
        </div>
      </section>
    </main>
  );
}
