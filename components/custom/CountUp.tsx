"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "framer-motion";

export default function CountUp({
  to,
  suffix = "",
  duration = 1.4,
  start,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, reduceMotion, to, duration]);

  return (
    <span>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
