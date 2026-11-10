import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AMIT ATHLETIC CLUB — Strength. Movement. Intention.",
    template: "%s | AMIT ATHLETIC CLUB",
  },
  description:
    "AMIT ATHLETIC CLUB is a fictional premium all-round fitness club concept set in Denver, Colorado, created as a software engineering and design portfolio demonstration.",
  keywords: [
    "Amit Athletic Club",
    "Strength and Conditioning",
    "Functional Training",
    "Mobility and Recovery",
    "Small-Group Training",
    "Portfolio Project",
  ],
  openGraph: {
    title: "AMIT ATHLETIC CLUB — Strength. Movement. Intention.",
    description:
      "A fictional luxury-minimalist athletic club concept set in Denver, Colorado. Built as a software-engineering portfolio project.",
    type: "website",
    locale: "en_US",
    siteName: "AMIT ATHLETIC CLUB (Portfolio Concept)",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMIT ATHLETIC CLUB — Strength. Movement. Intention.",
    description:
      "Fictional premium fitness club concept in Denver, Colorado. Portfolio demonstration.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      id="top"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-ivory text-graphite selection:bg-forest selection:text-ivory">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-graphite focus:text-ivory focus:px-5 focus:py-3 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-widest focus:outline-2 focus:outline-offset-2 focus:outline-forest"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
