import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Repair Portland OR | PDX Garage Pros",
  description:
    "Fast garage door repair in Portland, Oregon. Broken springs, opener repair, off-track doors, emergency service, and nearby metro service areas.",
  alternates: {
    canonical: "https://pdxgaragepros.com",
  },
};

const serviceLinks = [
  ["/garage-door-repair-portland", "Garage Door Repair Portland"],
  ["/garage-door-spring-repair-portland", "Spring Repair"],
  ["/garage-door-opener-repair-portland", "Opener Repair"],
  ["/emergency-garage-door-repair-portland", "Emergency Repair"],
  ["/garage-door-off-track-repair-portland", "Off Track Repair"],
  ["/garage-door-cable-repair-portland", "Cable Repair"],
];

const cityLinks = [
  ["/garage-door-repair-beaverton", "Beaverton"],
  ["/garage-door-repair-hillsboro", "Hillsboro"],
  ["/garage-door-repair-tigard", "Tigard"],
  ["/garage-door-repair-lake-oswego", "Lake Oswego"],
  ["/garage-door-repair-tualatin", "Tualatin"],
  ["/garage-door-repair-gresham", "Gresham"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#00482B]">
      <section className="border-b border-slate-200 bg-[#00482B] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d69a00]">
            Portland Garage Door Repair
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Fast Garage Door Repair in Portland, Oregon
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            PDX Garage Pros helps homeowners across Portland, Beaverton, Hillsboro,
            Tigard, Lake Oswego, and nearby areas with garage door repair, broken
            springs, opener problems, cables, off-track doors, and emergency service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15034953464"
              className="rounded-xl bg-[#d69a00] px-6 py-3 text-center font-bold text-[#00482B] shadow-sm hover:bg-[#c48a00]"
            >
              Call (503) 495-3464
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-3 text-center font-bold text-white hover:bg-white/10"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Garage Door Services</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {serviceLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold shadow-sm hover:shadow-md"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Service Areas</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cityLinks.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-slate-200 p-6 font-semibold hover:bg-slate-50"
            >
              Garage Door Repair in {label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
