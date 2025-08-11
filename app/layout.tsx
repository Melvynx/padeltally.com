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

export const metadata: Metadata = {
  title: "PadelTally - Score Tracking for Apple Watch",
  description: "The fastest way to keep score on the padel court. One-tap scoring on Apple Watch with automatic game detection, match history, and offline support.",
  keywords: "padel, score tracking, apple watch, padel app, match tracking, sports app",
  openGraph: {
    title: "PadelTally - Score Tracking for Apple Watch",
    description: "The fastest way to keep score on the padel court",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
