import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "Mykhailo Steshyn | Full-Stack, Python & AI-Assisted Developer";
const description =
  "Minimalist portfolio of Mykhailo Steshyn — showcasing Python automation, full-stack applications, clean APIs, and AI-assisted workflows to build faster, smarter web solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  keywords: [
    "Python developer",
    "AI-assisted development",
    "automated workflows",
    "aiogram",
    "React portfolio",
    "Next.js",
    "FastAPI",
    "full-stack developer",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Mykhailo Steshyn — Full-Stack, Python & AI-Assisted Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Mykhailo Steshyn — Full-Stack, Python & AI-Assisted Developer",
      },
    ],
  },
  icons: {
    icon: "/foto_for_projekt_portfolio.jpg",
    shortcut: "/foto_for_projekt_portfolio.jpg",
    apple: "/foto_for_projekt_portfolio.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-emerald-500/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
