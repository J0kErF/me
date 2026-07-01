// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  IBM_Plex_Sans_Hebrew,
  IBM_Plex_Mono,
} from "next/font/google";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";
import MotionProvider from "@/components/custom/MotionProvider";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

const plexSansHebrew = IBM_Plex_Sans_Hebrew({
  subsets: ["hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-hebrew",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mohammad Yosef | محمد يوسف | מוחמד יוסף — Full-Stack Engineer & Founder of PyMaster",
    template: "%s | Mohammad Yosef",
  },
  description:
    "Mohammad Yosef (محمد يوسف | מוחמד יוסף) is a full-stack engineer and founder of PyMaster, building production software for paying customers from Haifa, Israel. Open to full-time engineering roles and select projects.",
  keywords: [
    "Mohammad Yosef",
    "محمد يوسف",
    "מוחמד יוסף",
    "PyMaster",
    "Full-Stack Developer Haifa",
    "Next.js Developer Israel",
    "Arraba Hackathon",
    "Arab tech entrepreneur Israel",
    "University of Haifa Computer Science",
  ],
  authors: [{ name: "Mohammad Yosef", url: "https://mryosef.com" }],
  creator: "Mohammad Yosef",
  openGraph: {
    title: "Mohammad Yosef — Full-Stack Engineer & Founder of PyMaster",
    description:
      "Full-stack engineer who ships production software to paying customers. Founder of PyMaster, producer of the Arraba Hackathon. Open to full-time roles and select projects.",
    url: "https://mryosef.com",
    siteName: "mryosef.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Yosef — Full-Stack Engineer & Founder of PyMaster",
    description:
      "Full-stack engineer who ships production software to paying customers. Founder of PyMaster, producer of the Arraba Hackathon.",
    site: "@MohTechLab",
    creator: "@MohTechLab",
  },
  metadataBase: new URL("https://mryosef.com"),
  alternates: {
    canonical: "https://mryosef.com",
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
              jobTitle: "Full-Stack Engineer & Founder",
              worksFor: {
                "@type": "Organization",
                name: "PyMaster",
                url: "https://pymaster.mryosef.com",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Haifa",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Haifa",
                addressCountry: "IL",
              },
              knowsLanguage: ["Arabic", "Hebrew", "English"],
              sameAs: [
                "https://github.com/J0kErF",
                "https://linkedin.com/in/mohammad-yosef",
                "https://x.com/MohTechLab",
                "https://pymaster.mryosef.com",
                "https://arrabahack.mryosef.com",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plexSans.variable} ${plexSansArabic.variable} ${plexSansHebrew.variable} ${plexMono.variable} font-sans antialiased`}
      >
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
