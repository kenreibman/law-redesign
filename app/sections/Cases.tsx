"use client";

import Image from "next/image";
import { motion, useReducedMotion, cubicBezier } from "framer-motion";

const cases = [
  {
    title: "Kenstera vs. Globex Corp.",
    description:
      "Short description of the case highlighting our strategic approach and successful outcome.",
    image: "https://picsum.photos/600/800?&random=50",
    alt: "Corporate litigation case",
  },
  {
    title: "Case vs. Smithson",
    description:
      "Resolving contractual conflicts efficiently while protecting client interests.",
    image: "https://picsum.photos/600/800?&random=63",
    alt: "Contract dispute case",
  },
  {
    title: "Another Case vs. Johnson LLC",
    description:
      "Dummy text representing our successful defense in regulatory compliance matters.",
    image: "https://picsum.photos/600/800?&random=60",
    alt: "Regulatory compliance case",
  },
];

export default function Cases() {
  const reduceMotion = useReducedMotion();

  /* Header animation: bottom → top */
  const headerVariant = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  /* Cards container: left → right stagger */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  /* Individual card animation */
  const card = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, x: -32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div
          variants={headerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-1 inline-block text-xs uppercase tracking-widest text-black/50">
            Case Studies
          </span>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
            We Make a Difference
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-black/70">
            Our experience spans a wide range of legal cases, delivering
            thoughtful strategy and dependable results.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {cases.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              className="group transition-shadow"
            >
              {/* Image */}
              <div className="relative mb-6 aspect-5/6 w-full overflow-hidden rounded-md bg-black/5">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-medium text-black">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-black/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
