// components/custom/Footer.tsx
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 px-4 py-8 text-center text-sm text-gray-600">
      <p className="mb-3">
        © {currentYear} Mohammad Yosef · PyMaster · All rights reserved.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/J0kErF"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-indigo-600 transition"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/mohammad-yosef"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-indigo-600 transition"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="https://x.com/MohTechLab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter (X)"
          className="hover:text-indigo-600 transition"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
