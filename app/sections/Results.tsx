"use client";

import * as React from "react";
import { animate, useInView, useMotionValue } from "framer-motion";
import Link from "next/link";

type Recovery = {
  amount: string;
  title: string;
  description: string;
};

const recoveries: Recovery[] = [
  {
    amount: "$3.375 Million",
    title: "Sexual Harassment",
    description:
      "Represented two employees of a large healthcare company operating across the Northeast in a matter involving allegations of severe and persistent sexual harassment.",
  },
  {
    amount: "$3 Million",
    title: "Gender Discrimination & Sexual Harassment",
    description:
      "Client alleged retaliation and emotional distress after reporting concerns.",
  },
  {
    amount: "$2.2 Million",
    title: "Race Discrimination & Retaliation",
    description:
      "Secured a landmark $2.2 million verdict in Rosas v. Balter Sales, et al., affirming justice for race discrimination and retaliation in 2015. Led by Greg Kirschenbaum.",
  },
];

function parseAmount(input: string) {
  // Supports: "$3.375 Million", "$3 Million", "$2.2 Million", "$1,250,000"
  const match = input.trim().match(/^\s*\$?\s*([\d,]+(?:\.\d+)?)\s*(.*)\s*$/);
  const rawNum = match?.[1] ?? "0";
  const suffix = (match?.[2] ?? "").trim(); // e.g. "Million"
  const num = parseFloat(rawNum.replace(/,/g, "")) || 0;
  const decimals = (rawNum.split(".")[1]?.length ?? 0);

  return { num, decimals, suffix };
}

function formatAmount(value: number, decimals: number, suffix: string) {
  const fixed = value.toFixed(decimals);
  return `$${fixed}${suffix ? ` ${suffix}` : ""}`;
}

function CountUpAmount({
  amount,
  duration = 1.15,
  delay = 0.0,
}: {
  amount: string;
  duration?: number;
  delay?: number;
}) {
  const { num, decimals, suffix } = React.useMemo(() => parseAmount(amount), [amount]);

  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  const mv = useMotionValue(0);
  const [display, setDisplay] = React.useState(() => formatAmount(0, decimals, suffix));

  React.useEffect(() => {
    if (!inView) return;

    const controls = animate(mv, num, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(formatAmount(latest, decimals, suffix));
      },
    });

    return () => controls.stop();
  }, [inView, mv, num, decimals, suffix, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

export default function Results() {
  return (
    <section className="bg-black/5 pt-0 pb-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-black/50">
            Results
          </p>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
            Millions recovered for our clients
          </h2>
        </div>

        {/* Row */}
        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3">
          {recoveries.map((r, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border-l border-black/10 pl-6 first:border-l-0 first:pl-0"
            >
              <div className="font-serif text-3xl tracking-tight text-black md:text-4xl">
                <CountUpAmount amount={r.amount} delay={i * 0.08} />
              </div>

              <div className="text-sm font-medium text-black">{r.title}</div>

              <p className="text-sm leading-relaxed text-black/65">{r.description}</p>
            </div>
          ))}
        </div>

        <Link href="#contact" className="inline-flex items-center mt-10 justify-center rounded-md bg-black px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:bg-black/90">
          Free Consultation
        </Link>
      </div>
    </section>
  );
}
