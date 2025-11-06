import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://astrexai.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Astrex AI - Making AI First Solutions",
    template: "%s — Astrex AI",
  },
  description:
    "We build AI Agents, automation systems, and data-driven intelligence that scale your business.",
  icons: {
    icon: "images/astrex_white.svg",
    shortcut: "images/astrex_white.svg",
  },
  openGraph: {
    title: "Astrex AI",
    description:
      "We build AI Agents, automation systems, and data-driven intelligence that scale your business.",
    url: siteUrl,
    siteName: "Astrex AI",
    images: [
      {
        url: "/images/astrex.png",
        width: 1200,
        height: 630,
        alt: "Astrex AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrex AI",
    description:
      "We build AI Agents, automation systems, and data-driven intelligence that scale your business.",
    images: ["/images/astrex.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

