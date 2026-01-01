"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, cubicBezier } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: -14, y: -10, filter: "blur(6px)" },
    show: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) },
        },
  };

  return (
    <section className="bg-white">
      <div className="mx-auto grid h-full w-full grid-cols-1 gap-0 md:grid-cols-2">
        {/* Left image */}
        <div className="relative overflow-hidden">
          <div className="relative h-[55vh] w-full md:h-[calc(100vh-5rem)]">
            <motion.div
              className="absolute inset-0"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            >
              <Image
                src="/images/law-hero.webp"
                alt="Hero image placeholder"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex items-center p-4 md:pl-10">
          <motion.div
            className="w-full max-w-xl py-14 md:py-0"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.h1
              variants={item}
              className="font-serif text-5xl leading-[1.05] tracking-tight text-black md:text-6xl"
            >
              We deliver the
              <br />
              results that are <br />
              worth your trust.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-base leading-relaxed text-black/70"
            >
              At Jessica Massimi, we understand that legal matters can be complex. Our team is here to guide you
              through every step of the process.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#try"
                className="rounded-md bg-black px-6 py-3 text-base font-medium text-white shadow-sm"
              >
                Free Consultation
              </Link>

              <Link
                href="#product"
                className="rounded-md bg-black/10 px-6 py-3 text-base font-medium text-black/80 hover:bg-black/15"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
