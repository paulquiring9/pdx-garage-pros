import Link from "next/link";

type RelatedLink = {
  href: string;
  label: string;
};

type ServicePageProps = {
  title: string;
  intro: string;
  bullets: string[];
  serviceArea: string;
  related: RelatedLink[];
};

export default function ServicePage({
  title,
  intro,
  bullets,
  serviceArea,
  related,
}: ServicePageProps) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        {intro}
      </p>

      <section className="mt-12 rounded-2xl border border-slate-200 p-8">
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
          {serviceArea}
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

      <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-3xl font-bold">Need garage door help?</h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Call or request a quote for garage door repair help in the Portland metro area.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+15035551234"
            className="rounded-xl bg-white px-6 py-4 text-center font-semibold text-slate-900"
          >
            Call Now
          </a>

          <Link
            href="/contact"
            className="rounded-xl border border-white/30 px-6 py-4 text-center font-semibold"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
