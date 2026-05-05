export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Garage Door Repair in Portland, Oregon
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        If your garage door is stuck, noisy, or won’t open properly, PDX Garage
        Pros helps homeowners across Portland, Oregon connect with fast, reliable
        garage door repair service.
      </p>

      <h2 className="mt-10 text-2xl font-bold">Common Garage Door Issues</h2>

      <ul className="mt-4 list-disc pl-6 text-slate-600">
        <li>Broken garage door springs</li>
        <li>Garage door won’t open or close</li>
        <li>Door off track</li>
        <li>Opener not responding</li>
        <li>Noisy or shaking door</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">
        Serving Portland & Nearby Areas
      </h2>

      <p className="mt-4 text-slate-600">
        We serve Portland and surrounding areas including Beaverton, Hillsboro,
        Tigard, Tualatin, Lake Oswego, and Gresham.
      </p>

      <div className="mt-10">
        <a
          href="tel:+15035551234"
          className="rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white"
        >
          Call Now
        </a>
      </div>
    </main>
  );
}