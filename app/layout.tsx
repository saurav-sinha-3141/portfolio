import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurav Sinha's Portfolio",
  // icons: {
  //   icon: "/Saurav-new.jpg",
  // },
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
