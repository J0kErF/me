"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SignalLine({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative h-px w-full overflow-hidden bg-ink-3 ${className}`}>
      {!reduceMotion && (
        <motion.div
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-saffron to-transparent"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}
