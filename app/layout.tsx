import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurav Sinha's Portfolio",
  description: "A beautiful, animated portfolio built with Next.js 14",
  keywords: [
    "saurav",
    "mesra",
    "portfolio",
    "developer",
    "next.js",
    "react",
    "typescript",
    "docker",
    "CI/CD",
    "Azure",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon.png" />
        <meta
          name="google-site-verification"
          content="50AEcrP71ObP6EgNg4B-YHpsa2PNidVNtRm-VPoVSME"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
