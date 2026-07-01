"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScriptLine from "@/components/custom/ScriptLine";
import SignalLine from "@/components/custom/SignalLine";
import { fadeUp, staggerChildren } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="dark bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="label-mono text-xs text-saffron"
          >
            Haifa, Israel — Full-Stack Engineer &amp; Founder
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 space-y-1">
            <ScriptLine
              text="محمد يوسف"
              lang="ar"
              className="block text-3xl font-semibold text-saffron sm:text-4xl"
            />
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Mohammad Yosef
            </h1>
            <ScriptLine
              text="מוחמד יוסף"
              lang="he"
              className="block text-2xl text-muted-foreground sm:text-3xl"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg text-foreground/90 sm:text-xl"
          >
            Full-stack engineer &amp; founder who ships production software
            to paying customers.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="label-mono mt-4 text-xs text-muted-foreground"
          >
            Open to full-time roles &amp; select projects
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="text-base" asChild>
              <Link href="#contact">
                Get in touch <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="/Mohammad-Yosef-CV.pdf" download>
                Download CV <Download className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <SignalLine />
    </section>
  );
}
