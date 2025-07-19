// components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24 px-4 text-center max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-gray-900"
      >
        Hi, I’m <span className="text-indigo-600">Mohammad Yosef</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg text-gray-700"
      >
        Full-Stack Developer & Founder of <strong>PyMaster</strong>.
        <br />
        I build fast, scalable, and beautiful websites & web apps that drive results.
      </motion.p>

      <motion.div
        className="mt-6 flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link href="#quote">
          <Button className="text-base">
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="#projects">
          <Button variant="outline" className="text-base">
            View Projects
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
