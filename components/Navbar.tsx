import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/garage-door-repair-portland", label: "Portland" },
  { href: "/garage-door-spring-repair-portland", label: "Spring Repair" },
  { href: "/garage-door-opener-repair-portland", label: "Opener Repair" },
  { href: "/garage-door-repair-beaverton", label: "Beaverton" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          PDX Garage Pros
        </Link>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
