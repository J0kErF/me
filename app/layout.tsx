// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mohammad Yosef | محمد يوسف | מוחמד יוסף - PyMaster",
    template: "%s | Mohammad Yosef - PyMaster",
  },
  description:
    "Mohammad Yosef (محمد يوسف | מוחמד יוסף) is a full-stack developer, entrepreneur, and founder of PyMaster. I build websites, web apps, and startup solutions in Arabic, Hebrew, and English.",
  keywords: [
    "Mohammad Yosef",
    "محمد يوسف",
    "מוחמד יוסף",
    "PyMaster",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "Business Consultant",
    "Build website",
    "Business Tech Expert",
  ],
  authors: [{ name: "Mohammad Yosef", url: "https://mryosef.com" }],
  creator: "Mohammad Yosef",
  openGraph: {
    title: "Mohammad Yosef | Full-Stack Developer & Founder of PyMaster",
    description:
      "Explore the work and services of Mohammad Yosef (محمد يوسف | מוחמד יוסף), a leading full-stack developer and tech entrepreneur from Israel. Available for projects, startups, and consulting.",
    url: "https://mryosef.com",
    siteName: "mryosef.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Yosef | Full-Stack Developer & PyMaster Founder",
    description:
      "Follow Mohammad Yosef (محمد يوسف | מוחמד יוסף), a full-stack web developer & tech entrepreneur. Explore projects, request quotes, or build your next idea.",
    site: "@MohTechLab",
    creator: "@MohTechLab",
  },
  metadataBase: new URL("https://mryosef.com"),
  alternates: {
    canonical: "https://mryosef.com",
    languages: {
      en: "https://mryosef.com",
      ar: "https://mryosef.com/ar",
      he: "https://mryosef.com/he",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Structured Data for Google SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammad Yosef",
              alternateName: ["محمد يوسف", "מוחמד יוסף"],
              url: "https://mryosef.com",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "PyMaster",
              },
              sameAs: [
                "https://github.com/J0kErF",
                "https://linkedin.com/in/mohammad-yosef",
                "https://x.com/MohTechLab",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
