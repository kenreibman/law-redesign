"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function useMotionEnabled(breakpoint = 768) {
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);

    const update = () => setIsDesktop(mq.matches);
    update();

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return !reduceMotion && isDesktop;
}
