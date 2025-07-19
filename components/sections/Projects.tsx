"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AC car parts Inventory System",
    description:
      "A modern inventory management app for A/C spare parts using Next.js, Clerk, MongoDB, and Cloudinary — built for speed and accuracy.",
    tech: ["Next.js", "MongoDB", "Clerk", "Cloudinary"],
    link: "https://github.com/J0kErF/sam-admin",
  },
  {
    title: "Dexpress Logistics Platform",
    description:
      "Multi-role logistics dashboard with admin, courier, and vendor interfaces. Includes shipment routing, filtering, and map interactions.",
    tech: ["Next.js", "Leaflet", "MongoDB", "Tailwind"],
    link: "https://github.com/J0kErF/dexpress",
  },
  {
    title: "Unix Shell in C",
    description:
      "Custom-built mini Unix shell in C, supporting piping, redirection, and built-in commands — designed for academic performance and control.",
    tech: ["C", "Unix", "Makefile"],
    link: "https://github.com/J0kErF/Simple-Unix-Shell",
  },
  {
    title: "Mikiyal - AI Bias Detection Tool",
    description:
      "Built during Hasoub Accelerator — this tool analyzes AI datasets for bias and flags potential ethical concerns using NLP models.",
    tech: ["Python", "Pandas", "NLP", "Streamlit"],
    link: "https://github.com/J0kErF/Mikyal",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-10"
        >
          Projects I’ve Done
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl border shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-indigo-600 hover:underline"
              >
                View on GitHub <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}

          {/* GitHub Card */}
          <div className="bg-gray-50 p-6 rounded-xl border shadow-sm hover:shadow-md transition md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              More Projects on GitHub
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Explore 30+ open-source projects, tools, and experiments I've built —
              from code challenges and AI demos to full-stack SaaS templates.
            </p>
            <Link
              href="https://github.com/J0kErF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-indigo-600 hover:underline"
            >
              Go to GitHub <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
