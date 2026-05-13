"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/garage-door-spring-repair-portland", label: "Spring Repair" },
  { href: "/broken-garage-door-spring-portland", label: "Broken Spring" },
  { href: "/garage-door-opener-repair-portland", label: "Opener Repair" },
  { href: "/garage-door-cable-repair-portland", label: "Cable Repair" },
  { href: "/garage-door-off-track-portland", label: "Off-Track Repair" },
  { href: "/garage-door-roller-repair-portland", label: "Roller Repair" },
  { href: "/garage-door-wont-close-portland", label: "Door Won't Close" },
  { href: "/noisy-garage-door-portland", label: "Noisy Door" },
  { href: "/emergency-garage-door-repair-portland", label: "Emergency Repair" },
];

const areas = [
  { href: "/garage-door-repair-portland", label: "Portland" },
  { href: "/garage-door-repair-beaverton", label: "Beaverton" },
  { href: "/garage-door-repair-hillsboro", label: "Hillsboro" },
  { href: "/garage-door-repair-tigard", label: "Tigard" },
  { href: "/garage-door-repair-tualatin", label: "Tualatin" },
  { href: "/garage-door-repair-lake-oswego", label: "Lake Oswego" },
  { href: "/garage-door-repair-gresham", label: "Gresham" },
];

const pricing = [
  { href: "/garage-door-repair-cost-portland", label: "Repair Cost Guide" },
  { href: "/garage-door-spring-repair-cost-portland", label: "Spring Replacement Cost" },
  { href: "/garage-door-opener-repair-cost-portland", label: "Opener Repair Cost" },
  { href: "/garage-door-repair-vs-replace-portland", label: "Repair vs. Replace" },
  { href: "/garage-door-frozen-portland", label: "Frozen Door Help" },
];

function DropdownMenu({ label, items, open, onToggle }: {
  label: string;
  items: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-950"
        aria-expanded={open}
      >
        {label}
        <svg
          className={"h-3.5 w-3.5 transition-transform " + (open ? "rotate-180" : "")}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-52 rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onToggle}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (menu: string) => setOpen((prev) => (prev === menu ? null : menu));

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight" onClick={() => setOpen(null)}>
          PDX Garage Pros
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
          <DropdownMenu label="Services" items={services} open={open === "services"} onToggle={() => toggle("services")} />
          <DropdownMenu label="Service Areas" items={areas} open={open === "areas"} onToggle={() => toggle("areas")} />
          <DropdownMenu label="Pricing & Guides" items={pricing} open={open === "pricing"} onToggle={() => toggle("pricing")} />
          <a href="tel:+15034953464" className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700">
            (503) 495-3464
          </a>
          <Link href="/contact" className="rounded-lg border border-slate-300 px-4 py-2 hover:bg-slate-50" onClick={() => setOpen(null)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
