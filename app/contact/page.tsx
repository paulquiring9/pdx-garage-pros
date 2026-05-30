import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PDX Garage Pros | Portland Garage Door Repair",
  description:
    "Contact PDX Garage Pros for garage door repair in Portland and surrounding metro areas.",
  alternates: {
    canonical: "https://pdxgaragepros.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white text-[#00482B]">
      <section className="border-b border-slate-200 bg-[#00482B] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d69a00]">
            Portland, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Contact PDX Garage Pros
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Need help with a garage door issue? Call or request service for Portland,
            Beaverton, Hillsboro, Tigard, Lake Oswego, Tualatin, Gresham, and nearby areas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15034953464"
              className="rounded-xl bg-[#d69a00] px-6 py-3 text-center font-bold text-[#00482B] shadow-sm hover:bg-[#c48a00]"
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

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Phone
          </p>

          <a href="tel:+15034953464" className="mt-2 block text-3xl font-bold">
            (503) 495-3464
          </a>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Service Area
          </p>

          <p className="mt-2 text-slate-600">
            Portland metro area, including Beaverton, Hillsboro, Tigard, Tualatin,
            Lake Oswego, Gresham, and surrounding communities.
          </p>
        </div>
      </div>
    </main>
  );
}
