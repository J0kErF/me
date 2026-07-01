"use client";

import { motion } from "framer-motion";
import ScriptLine from "@/components/custom/ScriptLine";
import { fadeUp, viewportOnce } from "@/lib/motion";

const skills = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C", "C++", "C#", "SQL"],
  },
  {
    label: "Web & full-stack",
    items: ["React", "Next.js", "Node.js", "Express", "Flask", "Django", "Tailwind", "shadcn/ui"],
  },
  {
    label: "Data & infra",
    items: ["MongoDB", "Firebase", "Clerk", "Docker", "Linux", "Git & GitHub", "Vercel", "CI/CD"],
  },
  {
    label: "AI & automation",
    items: ["LLM integration", "Agentic workflows", "Prompt engineering", "Pandas", "NLP", "Streamlit"],
  },
  {
    label: "Security",
    items: ["Web-app security testing", "Recon & disclosure", "Intigriti bug bounty"],
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="label-mono text-xs text-saffron-deep">About</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Bridging academia and industry — in three languages.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
              I&apos;m a full-stack engineer who ships production software to
              paying customers — and the founder of PyMaster. I work the full
              cycle: discovery, architecture, build, launch, and the support
              that comes after. I&apos;m finishing my B.Sc. in Computer
              Science at the University of Haifa, I research web security on
              the side, and I build in Arabic, Hebrew, and English. What ties
              it together is bridging — connecting academic talent to real
              industry work, and turning ideas into things people actually
              use.
            </p>

            <dl className="mt-8 grid max-w-xl grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <dt className="label-mono text-xs text-muted-foreground">Based in</dt>
                <dd className="mt-1 text-sm">Haifa, Israel</dd>
              </div>
              <div>
                <dt className="label-mono text-xs text-muted-foreground">Education</dt>
                <dd className="mt-1 text-sm">B.Sc. CS, Univ. of Haifa &apos;26</dd>
              </div>
              <div>
                <dt className="label-mono text-xs text-muted-foreground">Languages</dt>
                <dd className="mt-1 flex items-center gap-2 text-sm">
                  <ScriptLine text="عربي" lang="ar" />
                  <span aria-hidden>·</span>
                  <ScriptLine text="עברית" lang="he" />
                  <span aria-hidden>· EN</span>
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-lg border border-border bg-card p-6 sm:p-8"
          >
            <p className="label-mono text-xs text-muted-foreground">
              Tools I reach for
            </p>
            <div className="mt-5 space-y-5">
              {skills.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-medium text-foreground/70">
                    {group.label}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
