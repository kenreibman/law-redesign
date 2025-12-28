"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, cubicBezier } from "framer-motion";

type TeamMember = {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
};

const team: TeamMember[] = [
  {
    name: "Ava Richardson",
    title: "Managing Partner",
    imageSrc: "/images/team/member-1.webp",
    imageAlt: "Portrait of Ava Richardson",
  },
  {
    name: "Sophia Patel",
    title: "Partner, Head of Employment",
    imageSrc: "/images/team/member-2.webp",
    imageAlt: "Portrait of Sophia Patel",
  },
  {
    name: "Daniel Brooks",
    title: "Partner, Head of IP and Privacy",
    imageSrc: "/images/team/member-3.webp",
    imageAlt: "Portrait of Daniel Brooks",
  },
];

export default function Team() {
  const reduceMotion = useReducedMotion();

  const headerVariant = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.16 },
    },
  };

  const card = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Top-left intro */}
        <motion.div
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/60">
            Our Team
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-[1.02] tracking-tight text-black md:text-6xl">
            Clause leaders
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-black/65">
            Meet the attorneys who combine practical strategy with deep subject
            matter expertise—focused on outcomes that protect what matters.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {team.map((m) => (
            <motion.article
              key={m.name}
              variants={card}
              className="group relative"
            >
              {/* Info panel sitting on top of the image */}
              <div className="pointer-events-none absolute left-6 right-6 bottom-2 z-10 rounded-md border border-black/10 bg-white/95 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur">
                <h3 className="font-serif text-2xl leading-tight text-black">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-black/65">{m.title}</p>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-md border border-black/10">
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src={m.imageSrc}
                    alt={m.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
