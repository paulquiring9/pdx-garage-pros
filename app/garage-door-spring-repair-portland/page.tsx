import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Spring Repair Portland OR | PDX Garage Pros",
  description: "Broken garage door spring repair in Portland, Oregon.",
  alternates: {
    canonical: "https://pdxgaragepros.com/garage-door-spring-repair-portland",
  },
};

const bullets = [
  "Broken torsion springs",
  "Heavy garage doors",
  "Garage door opens unevenly",
  "Loud snapping sound",
  "Opener strains when lifting",
  "Door will not stay open",
];

const related = [
  { href: "/garage-door-repair-portland", label: "Portland Garage Door Repair" },
  { href: "/garage-door-opener-repair-portland", label: "Opener Repair" },
  { href: "/emergency-garage-door-repair-portland", label: "Emergency Repair" },
  { href: "/garage-door-repair-beaverton", label: "Beaverton Garage Door Repair" },
];

export default function Page() {
  return (
    <main className="bg-white text-[#00482B]">
      <section className="border-b border-slate-200 bg-[#00482B] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d69a00]">
            Portland Garage Door Repair
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Spring Repair in Portland, Oregon
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Broken garage door springs are one of the most common reasons a door suddenly stops working. You may hear a loud snap, notice the door feels heavy, or see the opener struggling to lift it.
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

      <div className="mx-auto max-w-5xl px-6 py-16">
        <section className="rounded-2xl border border-slate-200 p-8">
          <h2 className="text-2xl font-bold">Common Garage Door Problems</h2>

          <ul className="mt-5 grid gap-3 text-slate-600 md:grid-cols-2">
            {bullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Local Service Area</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            Spring repair help for homeowners in Portland and surrounding metro areas.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Related Pages</h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl bg-[#00482B] p-8 text-white">
          <h2 className="text-3xl font-bold">Need garage door help?</h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Call or request a quote for garage door repair help in the Portland metro area.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+15034953464"
              className="rounded-xl bg-[#d69a00] px-6 py-4 text-center font-semibold text-[#00482B] hover:bg-[#c48a00]"
            >
              Call (503) 495-3464
            </a>

            <Link
              href="/contact"
              className="rounded-xl border border-white/30 px-6 py-4 text-center font-semibold"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
