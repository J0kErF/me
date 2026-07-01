"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const stats = [
  { value: "160+", label: "Students" },
  { value: "50+", label: "Senior mentors" },
  { value: "7", label: "Judges, each a founder" },
  { value: "26", label: "Teams" },
  { value: "14h", label: "Nonstop" },
  { value: "20k", label: "NIS in prizes" },
];

const sponsors = [
  "Arraba Municipality",
  "Hasoub",
  "Clalit",
  "Mercantile Bank",
  "NorthMed",
  "Haat",
  "Ministry of Culture & Sport",
];

export default function ArrabaHack() {
  return (
    <section className="dark bg-background text-foreground border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="label-mono text-xs text-saffron">
            Community — 2025
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Arraba Hackathon
          </h2>
          <p className="mt-4 max-w-2xl text-base text-foreground/85 sm:text-lg">
            I founded, fundraised, and produced my town&apos;s first and
            largest tech event — and raised over 160k NIS to make it happen.
            Every judge already runs a well-established startup of their own.
            I built the event&apos;s internal platform myself — applications,
            team formation, judging, live ops — and we were invited on air by
            Radio Makan to talk about it.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8 sm:grid-cols-6"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="font-mono text-xl font-semibold sm:text-2xl">
                {stat.value}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10"
        >
          <p className="label-mono text-xs text-muted-foreground">Backed by</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {sponsors.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-3 py-1 text-xs text-foreground/75"
              >
                {s}
              </span>
            ))}
          </div>

          <Link
            href="https://arrabahack.mryosef.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center text-sm font-medium text-saffron hover:underline"
          >
            See the hackathon <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
