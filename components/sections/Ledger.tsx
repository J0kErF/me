"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/custom/CountUp";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const stats = [
  { to: 10, suffix: "+", label: "Paying clients" },
  { to: 300, suffix: "k+ NIS", label: "Delivered in projects" },
  { to: 280, suffix: "+", label: "Students trained" },
  { to: 3, suffix: "", label: "Languages shipped in" },
];

const log = [
  {
    year: "2022",
    text: "Became Campus Director for Hasoub at the University of Haifa — led the chapter for 3 years.",
  },
  {
    year: "2022",
    text: "Started teaching programming — 300+ one-on-one lessons delivered since.",
  },
  { year: "2023", text: "Founded PyMaster." },
  {
    year: "2025",
    text: "Began security research on Intigriti — bug bounty work on live banking and media programs.",
  },
  {
    year: "2025",
    text: "Founded and produced the Arraba Hackathon — 160+ students, 50+ mentors, 20k NIS in prizes, 160k+ NIS raised.",
  },
  {
    year: "2025",
    text: "Launched Linkna, a link-in-bio SaaS — 10 paying businesses in week one.",
  },
  {
    year: "2026",
    text: "B.Sc. Computer Science, University of Haifa — final semester.",
  },
];

export default function Ledger() {
  return (
    <section className="dark bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="label-mono text-xs text-saffron">The ledger</p>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="font-mono text-3xl font-semibold text-foreground sm:text-4xl">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.ol
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 space-y-0 border-t border-border"
        >
          {log.map((entry, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:gap-6 sm:py-5"
            >
              <span className="label-mono w-16 shrink-0 text-sm text-saffron">
                {entry.year}
              </span>
              <span className="text-sm text-foreground/85 sm:text-base">
                {entry.text}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
