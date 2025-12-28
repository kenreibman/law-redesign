"use client";

import Image from "next/image";
import { motion, useReducedMotion, cubicBezier } from "framer-motion";

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const logos: Logo[] = [
  {
    src: "/images/super-lawyers.png",
    alt: "Logoipsum company logo",
    width: 100,
    height: 40,
  },
  {
    src: "/images/lawline.webp",
    alt: "Logoipsum company logo",
    width: 100,
    height: 40,
  },
  {
    src: "/images/avvo.png",
    alt: "Logoipsum company logo",
    width: 100,
    height: 40,
  },
  {
    src: "/images/findlaw.webp",
    alt: "Logoipsum company logo",
    width: 100,
    height: 40,
  },
  {
    src: "/images/experience.png",
    alt: "Logoipsum company logo",
    width: 100,
    height: 40,
  },
];

// duplicate for seamless loop
const track = [...logos, ...logos];

export default function Marquee() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-center text-sm text-black/60"
        >
          Trusted by leading organizations worldwide
        </motion.p>

        {/* 🔽 Added reveal wrapper ONLY */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="relative mt-10 overflow-hidden"
        >
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max items-center gap-16"
            animate={
              reduceMotion
                ? undefined
                : { x: ["0%", "-50%"] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 50,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          >
            {track.map((logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="flex shrink-0 items-center justify-center opacity-60"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-auto object-contain grayscale"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
