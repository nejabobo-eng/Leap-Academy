import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Leap Academy | Developing People. Strengthening Leadership.",
  description:
    "The Leap Academy equips individuals, leaders, entrepreneurs, and organisations through leadership development, training, speaking engagements, and practical learning resources.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://leap-academy.vercel.app'),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Leap Academy",
    description:
      "Leadership development, training, speaking, and practical learning resources.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
      className={`${inter.variable} ${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
