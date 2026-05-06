export const metadata = {
  title: "Contact PDX Garage Pros | Portland Garage Door Repair",
  description:
    "Contact PDX Garage Pros for garage door repair in Portland and surrounding metro areas.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Contact PDX Garage Pros</h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Need help with a garage door issue? Call or request service for Portland,
        Beaverton, Hillsboro, Tigard, Lake Oswego, Tualatin, Gresham, and nearby areas.
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Phone
        </p>

        <a href="tel:+15035551234" className="mt-2 block text-3xl font-bold">
          (503) 555-1234
        </a>

        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Service Area
        </p>

        <p className="mt-2 text-slate-600">
          Portland metro area, including Beaverton, Hillsboro, Tigard, Tualatin,
          Lake Oswego, Gresham, and surrounding communities.
        </p>
      </div>
    </main>
  );
}
