"use client";

import Image from "next/image";

const cases = [
  {
    title: "Jessica Massimi vs. Globex Corp.",
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
  return (
    <section className="bg-black/5 py-28" id="cases">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-1 inline-block text-xs uppercase tracking-widest text-black/50">
            Featured In
          </span>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
            We Make a Difference
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-black/70">
            Our experience spans a wide range of legal cases, delivering
            thoughtful strategy and dependable results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cases.map((item, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
