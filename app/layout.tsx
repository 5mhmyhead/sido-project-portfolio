import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  style: "normal",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  style: "italic",
});


export const metadata: Metadata = {
  title: "Portfolio Projects",
  description: "Enterprise Programming 2 Week 2 Activity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans min-h-full flex flex-col">
        <nav className="flex gap-6 px-16 py-6">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}