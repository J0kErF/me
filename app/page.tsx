// app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import HotNow from "@/components/sections/HotNow";
import AboutPyMaster from "@/components/sections/AboutPyMaster";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import TechStack from "@/components/sections/TechStack";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      {/* Hero Section */}
      <Hero />
      {/* Tech Stack Section */}
      <TechStack />
      {/* Hot Now Section */}
      <HotNow />
      {/* About PyMaster Section */}
      <AboutPyMaster />
      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
      
    </main>
  );
}
