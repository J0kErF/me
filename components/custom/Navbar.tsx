"use client";

import { Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "PyMaster", href: "/#pymaster" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="dark sticky top-0 z-50 border-b border-border bg-background/90 text-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="label-mono flex h-8 w-8 items-center justify-center rounded-md bg-saffron text-sm text-ink">
            MY
          </span>
          <span className="hidden sm:inline">Mohammad Yosef</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/75 transition hover:text-saffron"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" asChild>
            <a href="/Mohammad-Yosef-CV.pdf" download>
              CV <Download className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="text-foreground/80 transition hover:text-saffron md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-saffron"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="mt-2 w-full" asChild>
            <a href="/Mohammad-Yosef-CV.pdf" download>
              Download CV <Download className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
