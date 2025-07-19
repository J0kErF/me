// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Twitter, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="quote"
      className="py-20 px-4 bg-indigo-50 border-t border-gray-200 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6"
        >
          Let’s Build Something Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 mb-8"
        >
          Have an idea, project, or business in mind? I’d love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4 text-left text-sm sm:text-base"
        >
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 text-indigo-600" />
            <span>+972 52-322-0394</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <MessageSquare className="w-5 h-5 text-green-600" />
            <a
              href="https://wa.me/972523220394"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              WhatsApp Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-indigo-600" />
            <a href="mailto:mohammad@mryosef.com" className="hover:underline">
              mohammad@mryosef.com
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-6 text-indigo-700">
            <a
              href="https://github.com/J0kErF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-indigo-900 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mohammad-yosef"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-indigo-900 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/MohTechLab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="hover:text-indigo-900 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
