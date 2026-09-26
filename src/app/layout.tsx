import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elahmar.dev"),
  title: "Mohammed El Ahmar | Cybersecurity & Full Stack Engineer",
  description:
    "Portfolio of Mohammed El Ahmar — cybersecurity & AI engineering student building secure full-stack applications and intelligent systems.",
  openGraph: {
    title: "Mohammed El Ahmar | Cybersecurity & Full Stack",
    description: "Cybersecurity & AI Engineering Student Portfolio",
    url: "https://elahmar.dev",
    siteName: "Mohammed El Ahmar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed El Ahmar Portfolio Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/terminal-favicon.svg",
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
        suppressHydrationWarning
        className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
