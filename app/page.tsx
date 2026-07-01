import Hero from "@/components/sections/Hero";
import Ledger from "@/components/sections/Ledger";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import PyMaster from "@/components/sections/PyMaster";
import ArrabaHack from "@/components/sections/ArrabaHack";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Ledger />
      <About />
      <Projects />
      <PyMaster />
      <ArrabaHack />
      <Contact />
    </main>
  );
}
