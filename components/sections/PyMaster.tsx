"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";

const services = [
  "AI agents & assistants",
  "Chatbots & conversational bots",
  "Custom platforms & dashboards",
  "Workflow automation",
];

export default function PyMaster() {
  return (
    <section id="pymaster" className="scroll-mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="label-mono text-xs text-saffron-deep">The venture</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              PyMaster
            </h2>
            <p className="mt-3 text-lg text-foreground/80">
              Enterprise-grade tech. Startup-friendly price.
            </p>
            <p className="label-mono mt-6 text-xs text-muted-foreground">
              Academy → Agency
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              PyMaster is the studio I founded in 2023: we build AI agents,
              chatbots, custom platforms, and workflow automation for
              businesses that need senior-level engineering without
              Tel Aviv prices. Every project ships under senior review —
              engineering, legal, and security — before it reaches a client.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/85 sm:text-lg">
              It runs on a flywheel I designed on purpose: an academy that
              trains ambitious students from the Arab community in the north,
              feeding an agency that gives them their first real, paid,
              client-facing work. More clients fund more training; better
              training means better delivery — that loop is the whole
              business.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>

            <Link
              href="https://pymaster.mryosef.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-medium text-saffron-deep hover:underline"
            >
              Visit PyMaster <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
