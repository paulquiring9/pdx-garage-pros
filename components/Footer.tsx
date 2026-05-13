import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-1">
            <h2 className="font-bold text-slate-900">PDX Garage Pros</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Connecting Portland-area homeowners with garage door repair professionals.
            </p>
            <a
              href="tel:+15034953464"
              className="mt-4 block text-sm font-semibold text-slate-900 hover:underline"
            >
              (503) 495-3464
            </a>
            <p className="mt-1 text-sm text-slate-500">Portland, OR metro area</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/garage-door-spring-repair-portland" className="hover:text-slate-900">Spring Repair</Link></li>
              <li><Link href="/broken-garage-door-spring-portland" className="hover:text-slate-900">Broken Spring</Link></li>
              <li><Link href="/garage-door-opener-repair-portland" className="hover:text-slate-900">Opener Repair</Link></li>
              <li><Link href="/garage-door-cable-repair-portland" className="hover:text-slate-900">Cable Repair</Link></li>
              <li><Link href="/garage-door-off-track-portland" className="hover:text-slate-900">Off-Track Repair</Link></li>
              <li><Link href="/garage-door-roller-repair-portland" className="hover:text-slate-900">Roller Repair</Link></li>
              <li><Link href="/garage-door-wont-close-portland" className="hover:text-slate-900">Door Won't Close</Link></li>
              <li><Link href="/noisy-garage-door-portland" className="hover:text-slate-900">Noisy Door</Link></li>
              <li><Link href="/emergency-garage-door-repair-portland" className="hover:text-slate-900">Emergency Repair</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Service Areas</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/garage-door-repair-portland" className="hover:text-slate-900">Portland</Link></li>
              <li><Link href="/garage-door-repair-beaverton" className="hover:text-slate-900">Beaverton</Link></li>
              <li><Link href="/garage-door-repair-hillsboro" className="hover:text-slate-900">Hillsboro</Link></li>
              <li><Link href="/garage-door-repair-tigard" className="hover:text-slate-900">Tigard</Link></li>
              <li><Link href="/garage-door-repair-tualatin" className="hover:text-slate-900">Tualatin</Link></li>
              <li><Link href="/garage-door-repair-lake-oswego" className="hover:text-slate-900">Lake Oswego</Link></li>
              <li><Link href="/garage-door-repair-gresham" className="hover:text-slate-900">Gresham</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Pricing & Guides</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/garage-door-repair-cost-portland" className="hover:text-slate-900">Repair Cost Guide</Link></li>
              <li><Link href="/garage-door-spring-repair-cost-portland" className="hover:text-slate-900">Spring Replacement Cost</Link></li>
              <li><Link href="/garage-door-opener-repair-cost-portland" className="hover:text-slate-900">Opener Repair Cost</Link></li>
              <li><Link href="/garage-door-repair-vs-replace-portland" className="hover:text-slate-900">Repair vs. Replace</Link></li>
              <li><Link href="/garage-door-frozen-portland" className="hover:text-slate-900">Frozen Door Help</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} PDX Garage Pros · Portland, Oregon · (503) 495-3464
        </div>
      </div>
    </footer>
  );
}
