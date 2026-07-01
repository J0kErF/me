"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScriptLine from "@/components/custom/ScriptLine";
import { fadeUp, viewportOnce } from "@/lib/motion";

const socials = [
  { href: "https://github.com/J0kErF", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/mohammad-yosef",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://x.com/MohTechLab", label: "X / Twitter", icon: Twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="label-mono text-xs text-saffron-deep">Get in touch</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Have real work? Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-foreground/80">
            I&apos;m open to full-time engineering roles and select projects.
            Email works best — I read everything myself.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="text-base" asChild>
              <a href="mailto:mohammad@mryosef.com">
                <Mail className="mr-1 h-4 w-4" /> mohammad@mryosef.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="/Mohammad-Yosef-CV.pdf" download>
                Download CV <Download className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-6">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/60 transition hover:text-saffron-deep"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <ScriptLine text="أراك قريبًا" lang="ar" />
            <span aria-hidden>·</span>
            <ScriptLine text="נתראה בקרוב" lang="he" />
            <span aria-hidden>·</span>
            <span>See you soon</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
