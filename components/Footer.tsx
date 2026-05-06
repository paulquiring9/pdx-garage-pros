import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="font-bold">PDX Garage Pros</h2>
          <p className="mt-3 text-sm text-slate-600">
            Garage door repair service information for Portland and nearby metro areas.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/garage-door-spring-repair-portland">Spring Repair</Link>
            <Link href="/garage-door-opener-repair-portland">Opener Repair</Link>
            <Link href="/emergency-garage-door-repair-portland">Emergency Repair</Link>
            <Link href="/garage-door-off-track-repair-portland">Off Track Repair</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Areas</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/garage-door-repair-portland">Portland</Link>
            <Link href="/garage-door-repair-beaverton">Beaverton</Link>
            <Link href="/garage-door-repair-hillsboro">Hillsboro</Link>
            <Link href="/garage-door-repair-lake-oswego">Lake Oswego</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
