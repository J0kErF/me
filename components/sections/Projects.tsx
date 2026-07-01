"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

const spotlight = {
  title: "Alam Al-Tifl · عالم الطفل",
  badge: "Launching soon",
  description:
    "An Arabic (RTL) educational platform for children aged 3–6 — a subscription-gated content library with a full admin CMS, built for scale and a full security audit completed before launch.",
  tech: ["Next.js 16", "React 19", "Firebase", "TypeScript", "Tailwind CSS"],
};

const projects = [
  {
    title: "Linkna",
    description:
      "Link-in-bio SaaS with a marketplace, digital menus, and order management — onboarded 10 paying businesses in its first week.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk"],
    link: "https://linkna.org",
    linkLabel: "Visit site",
  },
  {
    title: "Dexpress",
    description:
      "Multi-role logistics platform with admin, courier, and vendor dashboards — shipment routing, filtering, and live map operations.",
    tech: ["Next.js", "Leaflet", "MongoDB"],
    link: "https://github.com/J0kErF/dexpress",
    linkLabel: "View on GitHub",
  },
  {
    title: "AC Parts Inventory",
    description:
      "Production inventory system for an A/C spare-parts business — fast search, image uploads, and role-based access.",
    tech: ["Next.js", "Clerk", "MongoDB", "Cloudinary"],
    link: "https://github.com/J0kErF/sam-admin",
    linkLabel: "View on GitHub",
  },
  {
    title: "Mikiyal",
    description:
      "NLP tool built during the Hasoub Accelerator that scans training datasets for potential bias and flags ethical concerns.",
    tech: ["Python", "Pandas", "NLP", "Streamlit"],
    link: "https://github.com/J0kErF/Mikyal",
    linkLabel: "View on GitHub",
  },
  {
    title: "PCL Radar",
    description:
      "Passive coherent location research for drone detection — an academic paper plus Python signal-processing simulations, built through PyMaster R&D.",
    tech: ["Python", "NumPy", "SciPy"],
  },
  {
    title: "Unix Shell in C",
    description:
      "A minimal Unix shell supporting piping, redirection, and built-in commands — written for systems-level control.",
    tech: ["C", "Unix", "Makefile"],
    link: "https://github.com/J0kErF/Simple-Unix-Shell",
    linkLabel: "View on GitHub",
  },
];

export default function Projects() {
  return (
    <section id="work" className="dark scroll-mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="label-mono text-xs text-saffron"
        >
          Selected work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Shipped, not just started.
        </motion.h2>

        {/* Spotlight */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 rounded-lg border border-border bg-card p-8 sm:p-10"
        >
          <span className="label-mono inline-block rounded-full border border-saffron/40 px-2.5 py-1 text-[11px] text-saffron">
            {spotlight.badge}
          </span>
          <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
            {spotlight.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-foreground/80 sm:text-base">
            {spotlight.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {spotlight.tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent px-2.5 py-1 text-accent-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-foreground/75">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 text-xs">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent px-2 py-0.5 text-accent-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-sm text-saffron hover:underline"
                >
                  {project.linkLabel} <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </Link>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between rounded-lg border border-dashed border-border p-6"
          >
            <div>
              <h3 className="text-lg font-semibold">More on GitHub</h3>
              <p className="mt-2 text-sm text-foreground/75">
                Open-source tools, experiments, and smaller builds beyond the
                highlights above.
              </p>
            </div>
            <Link
              href="https://github.com/J0kErF"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-sm text-saffron hover:underline"
            >
              Go to GitHub <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
