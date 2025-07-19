// components/sections/TechStack.tsx
"use client";

import { motion } from "framer-motion";

const techs = [
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Shadcn UI",
  "TypeScript",
  "JavaScript",
  "Python",
  "C",
  "C++",
  "React",
  "Framer Motion",
  "Git & GitHub",
  "Docker",
];

export default function TechStack() {
  return (
    <section className="pb-12 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-center text-base font-medium text-gray-500 mb-6">
          Tech Stack & Knowledge
        </h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-800">
          {techs.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full shadow-sm hover:shadow-md transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
