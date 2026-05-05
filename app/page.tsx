export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Portland Garage Door Repair
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Fast Garage Door Repair in Portland, Oregon
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          PDX Garage Pros helps homeowners across Portland, Beaverton,
          Hillsboro, Tigard, and Lake Oswego with garage door repair, broken
          springs, opener issues, off-track doors, and emergency service.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+15035551234"
            className="rounded-xl bg-slate-900 px-6 py-4 text-center font-semibold text-white"
          >
            Call Now
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-slate-300 px-6 py-4 text-center font-semibold"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">Broken Spring Repair</h2>
            <p className="mt-3 text-slate-600">
              Garage door spring problems are one of the most common reasons a
              door gets stuck, feels heavy, or will not open safely.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Garage Door Opener Repair</h2>
            <p className="mt-3 text-slate-600">
              We help troubleshoot opener issues, remote problems, sensors,
              keypads, and doors that stop halfway.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Emergency Garage Door Service</h2>
            <p className="mt-3 text-slate-600">
              If your garage door is stuck open, stuck closed, or off track, we
              help connect you with fast local service.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Serving the Portland Metro Area</h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          PDX Garage Pros serves homeowners throughout Portland and nearby
          communities including Beaverton, Hillsboro, Tigard, Tualatin, Lake
          Oswego, Milwaukie, Gresham, and Oregon City.
        </p>
      </section>
    </main>
  );
}