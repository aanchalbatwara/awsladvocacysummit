import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from 'next/font/google';
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Educational Advocacy Summit 2026 | AWSL",
  description: "Join high school students across Washington State for the Educational Advocacy Summit. Meet legislators, learn about government, and advocate for civic education. February 13-14, 2026.",
  keywords: ["civic education", "student advocacy", "Washington State", "AWSL", "legislators", "Capitol", "youth leadership"],
  openGraph: {
    title: "Educational Advocacy Summit 2026",
    description: "Empowering Washington students to shape civic education policy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${sourceSans.variable}`}>
      <body className="antialiased font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
