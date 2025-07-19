// components/sections/AboutPyMaster.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description:
            "Custom websites and full-stack apps using Next.js, Tailwind CSS, MongoDB, Firebase, and more.",
    },
    {
        title: "Startup MVPs",
        description:
            "Launch your idea fast — from prototype to scalable product with real users and modern stack.",
    },
    {
        title: "Business Websites",
        description:
            "Professional, SEO-optimized landing pages and systems to grow your online presence.",
    },
    {
        title: "Automation & Tools",
        description:
            "Scripts, bots, dashboards and AI workflows that save time and improve productivity.",
    },
    {
        title: "Tech Strategy",
        description:
            "1-on-1 consulting for early-stage startups or teams needing clear tech execution plans.",
    },
    {
        title: "Tech Lessons & Tutoring",
        description:
            "1-on-1 or group tutoring in programming, web development, and computer science fundamentals — personalized and project-based learning.",
    },

];

export default function AboutPyMaster() {
    return (
        <section
            id="pymaster"
            className="bg-gray-50 py-20 px-4 border-t border-gray-200"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-10"
                >
                    What is PyMaster?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto text-gray-700 text-lg mb-12"
                >
                    <strong>PyMaster</strong> is your partner in tech — delivering clean code,
                    modern solutions, and business-focused results. Whether you’re launching
                    a startup or scaling your systems, we make it happen.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="mt-10 text-center">
                    <Link
                        href="https://pymaster.mryosef.com"
                        className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-md text-base font-medium hover:bg-indigo-700 transition"
                    >
                        Work With PyMaster <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
