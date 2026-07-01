import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { href: "https://github.com/J0kErF", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/mohammad-yosef",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://x.com/MohTechLab", label: "X / Twitter", icon: Twitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark border-t border-border bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <div className="flex gap-5">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground/60 transition hover:text-saffron"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {currentYear} Mohammad Yosef · Haifa, Israel
        </p>
      </div>
    </footer>
  );
}
