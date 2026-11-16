import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Splendors Properties | Spaces Crafted for Living in Islamabad",
  description:
    "Blue Area’s premier real estate consultants—connecting discerning buyers and overseas investors with verified residences and high-yield commercial assets.",
  keywords: [
    "Splendors Properties",
    "Blue Area Islamabad",
    "real estate Islamabad",
    "commercial office Blue Area",
    "DHA Phase 2",
    "property consultants Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
