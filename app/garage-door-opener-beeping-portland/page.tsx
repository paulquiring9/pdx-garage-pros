import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Door Opener Beeping or Blinking Portland OR | PDX Garage Pros",
  description:
    "Garage door opener beeping, clicking, or blinking in Portland? Here's what each pattern means, what you can fix yourself, and when to call a technician.",
  alternates: {
    canonical: "https://www.pdxgaragepros.com/garage-door-opener-beeping-portland",
  },
};

const patterns = [
  {
    signal: "1 beep / solid LED",
    meaning: "Normal operation",
    action: "Nothing — this is the confirmation beep after a command is received.",
    urgent: false,
  },
  {
    signal: "2 beeps",
    meaning: "Safety sensor obstruction or misalignment",
    action: "Check for objects in the sensor beam path. Look for a blinking LED on one sensor. Realign if needed.",
    urgent: false,
  },
  {
    signal: "3 beeps",
    meaning: "Safety sensor wiring issue",
    action: "Inspect sensor wires for damage or disconnection. Often caused by wires being pinched in the track.",
    urgent: false,
  },
  {
    signal: "4 beeps",
    meaning: "Safety sensor failure",
    action: "Sensors may need replacement. Call a technician — sensor replacement runs $50–$150.",
    urgent: false,
  },
  {
    signal: "5 beeps",
    meaning: "Logic board error or internal motor fault",
    action: "This usually means the opener needs professional diagnosis. Don't keep running it.",
    urgent: true,
  },
  {
    signal: "Continuous beeping",
    meaning: "Battery backup low (on units with backup battery) or power issue",
    action: "Check if the opener has a backup battery — these typically need replacement every 1–2 years.",
    urgent: false,
  },
  {
    signal: "Clicking but not moving",
    meaning: "Stripped drive gear or broken spring",
    action: "If you hear the motor click on but nothing moves, the gear is likely stripped — or a spring has snapped and the door is too heavy. Call before running it again.",
    urgent: true,
  },
  {
    signal: "LED blinking rapidly",
    meaning: "Varies by brand — often a travel limit or force setting issue",
    action: "Count the blinks and check your opener manual. Craftsman, LiftMaster, and Chamberlain use specific blink codes documented in their manuals.",
    urgent: false,
  },
];

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            Portland, Oregon
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Garage Door Opener Beeping or Blinking
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            A beeping or blinking garage door opener is telling you something specific. Most beep
            and blink codes have a direct meaning — and many are fixable without a service call.
            Here's how to read what your opener is saying.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+15034953464"
              className="rounded-xl bg-amber-400 px-6 py-3 text-center font-bold text-slate-950 shadow-sm hover:bg-amber-300"
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

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Common beep and blink codes</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          Most modern openers — LiftMaster, Chamberlain, Craftsman, Genie — use beep or LED blink
          patterns to indicate specific faults. The exact codes vary by brand and model, but these
          are the most common patterns and what they mean.
        </p>

        <div className="mt-8 space-y-3">
          {patterns.map((p) => (
            <div
              key={p.signal}
              className={`rounded-xl border p-5 ${
                p.urgent
                  ? "border-red-200 bg-red-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6">
                <div className="shrink-0 md:w-40">
                  <span className={`inline-block rounded-lg px-3 py-1 text-sm font-semibold ${
                    p.urgent
                      ? "bg-red-100 text-red-800"
                      : "bg-slate-100 text-slate-700"
                  }`}>
                    {p.signal}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{p.meaning}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{p.action}</p>
                </div>
                {p.urgent && (
                  <div className="shrink-0">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">Stop using it</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Note: Blink codes vary by manufacturer. Always cross-reference with your opener's manual
          or the manufacturer's website for model-specific codes.
        </p>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">The most common cause in Portland: sensor issues</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                By far the most frequent cause of opener beeping and blinking in Portland homes is a
                sensor problem. The two photoelectric sensors mounted at the base of the door frame
                create an invisible beam — if anything interrupts or misaligns that beam, the opener
                will refuse to close the door and will typically signal with beeps or a blinking light
                on the motor unit.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Sensors get knocked out of alignment by kids, pets, bikes, and garden equipment. In
                Portland's wet winters, condensation on the sensor lens can also interrupt the beam —
                a quick wipe with a dry cloth sometimes resolves a door that stopped closing overnight.
              </p>

              <h3 className="mt-8 text-xl font-bold">How to check your sensors in two minutes</h3>
              <ol className="mt-4 space-y-4">
                {[
                  ["Look at the LED on each sensor", "Each sensor has a small LED indicator. The sending sensor (usually amber) should be solid. The receiving sensor (usually green) should also be solid. If either is off or blinking, the beam is broken."],
                  ["Check for obstructions first", "Look along the floor at both sensors for anything in the beam path — a leaf, a piece of debris, or even a spiderweb can break the beam. Clear anything you find and see if the light goes solid."],
                  ["Gently adjust the sensor bracket", "If the LED is blinking but there's no obstruction, the sensor is out of alignment. Loosen the wing nut or thumbscrew holding the sensor bracket and rotate it slowly until the LED goes solid, then retighten."],
                  ["Clean the sensor lens", "A dirty or fogged lens can scatter the beam enough to break it. Wipe each sensor lens with a soft dry cloth. Don't use glass cleaner — it can leave a residue that makes the problem worse."],
                ].map(([title, detail], i) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="mt-10 text-3xl font-bold tracking-tight">When the beeping means something more serious</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                If you've confirmed the sensors are fine — both LEDs solid, no obstructions — and the
                opener is still beeping, clicking without moving, or flashing an error code, the issue
                is likely inside the opener unit itself. The most common internal failures are:
              </p>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 font-bold text-slate-400 shrink-0">—</span>
                  <span><strong>Stripped drive gear.</strong> The plastic gear that engages the chain or belt. When it strips, you'll hear the motor run but nothing moves. Repair runs $75–$150.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 font-bold text-slate-400 shrink-0">—</span>
                  <span><strong>Logic board failure.</strong> The circuit board that controls all opener functions. More common on openers 10+ years old. Repair or replacement runs $100–$200.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 font-bold text-slate-400 shrink-0">—</span>
                  <span><strong>The problem isn't actually the opener.</strong> A broken spring makes the door too heavy to lift — the opener motor strains and stops, which looks like an opener failure. Before replacing anything, confirm the spring is intact.</span>
                </li>
              </ul>
            </div>

            <aside className="h-fit space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-bold">Quick sensor check</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">→</span>Both sensor LEDs solid? Sensors are fine.</li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">→</span>One LED blinking? Check for obstruction first, then realign.</li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">→</span>One LED off? Wiring issue — call a tech.</li>
                  <li className="flex gap-2"><span className="text-amber-500 font-bold shrink-0">→</span>Both LEDs solid but door still won't close? Check the limit switch settings or call.</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <h3 className="text-base font-bold">Not sure what's wrong?</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Describe what the opener is doing and we can help you figure out next steps before a technician arrives.
                </p>
                <a
                  href="tel:+15034953464"
                  className="mt-4 block rounded-xl bg-amber-400 px-5 py-3 text-center font-bold text-slate-950 hover:bg-amber-300"
                >
                  Call (503) 495-3464
                </a>
                <a
                  href="/contact"
                  className="mt-3 block rounded-xl border border-white/20 px-5 py-3 text-center font-semibold text-white hover:bg-white/10"
                >
                  Request a Quote
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold tracking-tight">Brand-specific resources</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          If you know your opener brand, the manufacturer's blink code documentation is the most
          accurate reference for your specific model. Most Portland-area homes have one of these:
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["LiftMaster / Chamberlain", "The most common brand in Portland. Their diagnostic LED blinks in sequences of 1–10. Count carefully — the pattern repeats after a pause. Manual codes are available on their support site by model number."],
            ["Craftsman (Sears)", "Sold through Sears and now available at other retailers. Craftsman openers from 2011+ use a similar blink code system to LiftMaster (they share technology). Older units use a simpler error indicator."],
            ["Genie", "Uses a combination of LED colors and blink patterns. Genie's codes tend to be more informative about specific motor vs. sensor faults. Their support site has a model lookup tool."],
            ["Linear / Nortek", "Less common in Portland but found in some condos and newer construction. Uses a single diagnostic LED. Limited DIY documentation — call a tech if basic checks don't resolve it."],
          ].map(([brand, detail]) => (
            <div key={brand} className="rounded-xl border border-slate-200 p-5">
              <p className="font-semibold text-slate-900">{brand}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Related pages</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/garage-door-opener-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair Service</Link>
            <Link href="/garage-door-opener-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Opener Repair Cost</Link>
            <Link href="/garage-door-wont-close-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Door Won't Close</Link>
            <Link href="/broken-garage-door-spring-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Broken Spring Help</Link>
            <Link href="/garage-door-repair-cost-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Repair Cost Guide</Link>
            <Link href="/emergency-garage-door-repair-portland" className="rounded-xl border border-slate-200 bg-white p-4 font-medium text-slate-900 shadow-sm hover:bg-slate-50">Emergency Repair</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
