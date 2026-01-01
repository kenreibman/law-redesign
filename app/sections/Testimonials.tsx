"use client";

import Image from "next/image";

type Testimonial = {
  quote: string;
  name?: string;
  title?: string;
  avatarSrc?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Jessica Massimi completely changed how our team handles contracts. What used to take hours is now done in minutes, securely and with total confidence.",
    name: "Sarah Thompson",
    title: "Legal Counsel, Veridex Group",
    avatarSrc: "/images/avatars/avatar-1.png",
  },
  {
    quote:
      "We replaced multiple tools with Jessica Massimi. It’s fast, reliable, and built for teams that care about compliance as much as productivity.",
    name: "Daniel Ruiz",
    title: "Founder, LexEdge",
    avatarSrc: "/images/avatars/avatar-2.png",
  },
  {
    quote:
      "Jessica Massimi cut our negotiation cycles by nearly half. Recommendations surface issues instantly, and our team finally works with full confidence.",
  },
  {
    quote:
      "It’s rare to find a platform that feels both robust and intuitive. Jessica Massimi nails that balance perfectly.",
    name: "Marcus Lee",
    title: "Senior Counsel, Northbridge",
    avatarSrc: "/images/avatars/avatar-4.png",
  },
  {
    quote:
      "The collaboration workflow has been a breakthrough. Legal, sales, and ops can finally work in real time without endless versions.",
    name: "Elena Vasquez",
    title: "Director of Legal Ops, JuniperWorks",
    avatarSrc: "/images/avatars/avatar-5.png",
  },
  {
    quote:
      "Audit logs and AI-assisted reviews save us days every month. Jessica Massimi sets a new standard for legal-tech transparency.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center text-xs text-black/50">
            <span className="uppercase tracking-widest">Testimonials</span>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
            More words from our clients
            <br />
            who trust Jessica Massimi.
          </h2>
        </div>

        {/* Masonry columns */}
        <div className="columns-1 gap-4 md:columns-3">
          {testimonials.map((t, i) => {
            const hasMeta = Boolean(t.name || t.title || t.avatarSrc);

            return (
              <article
                key={i}
                className="mb-6 break-inside-avoid rounded-md border border-black/10 bg-black/2 p-7"
              >
                {/* quote mark */}
                <div className="mb-4 text-4xl leading-none text-black/10">“</div>

                <p className="text-sm leading-relaxed text-black/80">{t.quote}</p>

                {hasMeta ? (
                  <>
                    <div className="my-6 h-px w-full bg-black/10" />

                    <div className="flex items-center gap-3">
                      {t.avatarSrc ? (
                        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-black/10">
                          <Image
                            src={t.avatarSrc}
                            alt={`${t.name ?? "Client"} headshot`}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-black/10" />
                      )}

                      {(t.name || t.title) ? (
                        <div className="min-w-0">
                          {t.name ? (
                            <div className="truncate text-sm font-medium text-black">
                              {t.name}
                            </div>
                          ) : null}
                          {t.title ? (
                            <div className="truncate text-xs text-black/55">
                              {t.title}
                            </div>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>

      {/* bottom fade overlay (whole section fades out) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-100 bg-linear-to-b from-transparent to-white" />
    </section>
  );
}
