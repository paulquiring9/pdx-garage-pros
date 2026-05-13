import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Door Repair Gresham OR | PDX Garage Pros",
  description:
    "Garage door repair in Gresham, Oregon — broken springs, opener problems, off-track doors, cables, and emergency service for Gresham and east Portland homeowners.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-repair-gresham",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Gresham, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Repair in Gresham
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Gresham is Oregon's fourth-largest city, with a mix of older east Portland-adjacent
            neighborhoods and newer subdivisions stretching toward Troutdale and Fairview. PDX Garage
            Pros serves homeowners throughout Gresham with garage door repair for all common issues.
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
          <h2 className="text-3xl font-bold tracking-tight">Garage door issues in Gresham</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Gresham sits at a slightly higher elevation than central Portland and gets more frequent
            ice and freeze events in winter — particularly in areas near Powell Butte and the eastern
            foothills. Freezing overnight temperatures are one of the leading causes of spring failures,
            as cold metal becomes more brittle and snaps under load. We see a noticeable spike in
            spring repair calls from Gresham each November through January.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Common repairs in Gresham</h2>
          <ul className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2">
            <li>Broken torsion and extension springs</li>
            <li>Opener not working</li>
            <li>Door off track</li>
            <li>Frayed or broken cables</li>
            <li>Rollers cracked or worn</li>
            <li>Door freezing to the ground seal</li>
            <li>Door won't close in cold weather</li>
            <li>Noisy or grinding operation</li>
          </ul>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">Gresham neighborhoods and surrounding areas</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            We serve all of Gresham, including Kelly Creek, Pleasant Valley, Centennial, Rockwood,
            Downtown Gresham, and neighborhoods near Mount Hood Community College. We also serve
            Troutdale, Fairview, Wood Village, and east Portland neighborhoods like Glenfair,
            Hazelwood, and Centennial that are closer to Gresham than to central Portland.
          </p>

          <h2 className="mt-10 text-3xl font-bold tracking-tight">If your door has frozen to the ground</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            On cold mornings, garage door bottom seals can freeze to the concrete floor. If this
            happens, don't run the opener — it will strain the motor and can snap cables. Instead,
            use warm water or an ice melt product along the bottom seal, let it work for a few minutes,
            and try lifting the door manually before engaging the opener. If the opener already ran
            and the door seems damaged, call before using it again.
          </p>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold">Gresham service area</h3>
          <p className="mt-3 leading-7 text-slate-700">
            Serving Gresham, Troutdale, Fairview, Wood Village, and east Portland communities.
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
            <a href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</a>
            <a href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</a>
            <a href="/garage-door-opener-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair</a>
            <a href="/garage-door-wont-close-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Door Won't Close</a>
            <a href="/garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Portland</a>
          </div>
        </div>
      </section>
    </main>
  );
}
