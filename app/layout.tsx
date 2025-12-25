import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Natural Capital ReBank - Tokenizing Nature into an Investable Asset Class",
  description: "NCRB is a blockchain-powered infrastructure that transforms natural capital credits and ecosystem services into transparent, liquid digital instruments for institutional investors.",
  keywords: "natural capital, carbon credits, tokenization, blockchain, climate finance, biodiversity, ESG, sustainable finance, RWA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
