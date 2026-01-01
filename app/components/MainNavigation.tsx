"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Team", href: "#team" },
];

function IconHamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M3 6h18v2H3V6zm0 5.5h18v2H3v-2zM3 17h18v2H3v-2z"
      />
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu open (mobile overlay)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        {/* Left: logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <span className="text-2xl font-medium tracking-tight text-black">
            Kenstera
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative text-lg text-black/80 transition-colors hover:text-black"
                >
                  <span className="relative">
                    {item.label}
                    {/* subtle hover underline */}
                    <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-200 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="rounded-lg bg-black px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-black md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <IconHamburger className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              onClick={() => setOpen(false)}
              aria-label="Go to homepage"
            >
              <span className="text-2xl font-medium tracking-tight text-black">
                Kenstera
              </span>
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <IconClose className="h-7 w-7" />
            </button>
          </div>

          <div className="bg-white mx-auto flex h-[calc(100dvh-5rem)] max-w-6xl flex-col items-center justify-center gap-7 px-5">
            <ul className="flex flex-col items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-normal text-black/80 transition-colors hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 w-full max-w-xl">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-lg bg-black px-6 py-4 text-center text-lg font-medium text-white shadow-sm transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
