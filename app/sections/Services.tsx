"use client";

import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Divorce and separation",
    description:
      "We provide guidance and representation through the divorce process, working to ensure fair outcomes.",
    href: "#",
  },
  {
    title: "Child Custody",
    description:
      "We guide families through custody decisions to secure stable, supportive arrangements for all parties.",
    href: "#",
  },
  {
    title: "Adoption and Guardianship",
    description:
      "We assist clients in navigating adoption and guardianship processes, securing loving, legally recognized relationships.",
    href: "#",
  },
  {
    title: "DUI and Traffic Violations",
    description:
      "We provide aggressive representation in DUI and traffic cases to minimize penalties and safeguard your driving record.",
    href: "#",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 md:py-28" id="services">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.25em] text-black/60">
            START WITH US
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-black md:text-6xl">
            Straightforward legal services with no hidden surprises.
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-24 grid grid-cols-1 gap-0 border border-black/10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative border-t border-black/10 bg-white p-10 md:border-t-0 md:border-l lg:first:border-l-0"
            >
              <h3 className="font-serif text-2xl leading-snug text-black">
                {s.title}
              </h3>

              <p className="mt-16 text-sm leading-relaxed text-black/60">
                {s.description}
              </p>

              <Link
                href={s.href}
                className="mt-10 inline-flex text-xs tracking-[0.25em] text-black/70 hover:text-black"
              >
                LEARN MORE
              </Link>

              {/* subtle hover like the screenshot */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 ring-1 ring-black/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
