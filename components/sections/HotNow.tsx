// components/sections/HotNow.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, ExternalLink } from "lucide-react";

export default function HotNow() {
  return (
    <section className="bg-orange-50 border-t border-orange-200 py-16 px-4" id="hot">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4"
        >
          Now Live: Arraba Hackathon 2025 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-800 text-lg max-w-2xl mx-auto mb-6"
        >
          This year’s theme is <strong>“Innovating for Community Impact”</strong> — bringing together students, mentors, and creatives to tackle local challenges using technology.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 mb-8"
        >
          We’re calling on <strong>sponsors, volunteers, mentors, and students</strong> to help make this community-first tech event unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="https://arrabahack.mryosef.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-orange-600 transition"
          >
            Explore the Hackathon <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="https://arrabahack.mryosef.com/apply"
            className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-600 rounded-md font-medium hover:bg-orange-100 transition"
          >
            Become a Partner <Rocket className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
