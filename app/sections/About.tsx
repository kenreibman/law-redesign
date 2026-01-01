"use client";

import Image from "next/image";
import Link from "next/link";

type Stat = {
  value: string;
  label: string;
};

type AboutProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  stats?: Stat[];
};

export default function About({
  eyebrow = "Kenstera",
  heading = "For over 25 years,\nwe’ve been helping\nclients navigate their\nlegal challenges.",
  body = "To simplify the complexities of law. To\nprovide our clients with peace of mind. To\nfoster growth and success by alleviating\nlegal pressures.",
  ctaHref = "#consultation",
  ctaLabel = "Free consultation",
  imageSrc = "/images/about-placeholder.avif",
  imageAlt = "Two professionals shaking hands",
  stats = [
    { value: "10k", label: "Clients worldwide" },
    { value: "95%", label: "Success rate" },
    { value: "50+", label: "Awards & honors" },
  ],
}: AboutProps) {
  return (
    <section className="bg-white py-16 md:py-24" id="about">
      <div className="mx-auto max-w-6xl px-5">
        {/* Top: left copy + right image */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-10 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-xs text-black/60">
              {eyebrow}
            </p>

            <h2 className="mt-5 whitespace-pre-line font-serif text-4xl leading-[1.03] tracking-tight text-black md:text-5xl">
              {heading}
            </h2>

            <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-black/60">
              {body}
            </p>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-black/5">
              <div className="relative aspect-square w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority={false}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: button (left) + stats (right) */}
        <div className="hidden mt-14 md:grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-black/90"
            >
              {ctaLabel}
            </Link>
          </div>

          <div className="lg:col-span-8 lg:pl-6">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={`${s.value}-${s.label}`}>
                  <div className="font-serif text-4xl tracking-tight text-black md:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-3 text-sm text-black/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
