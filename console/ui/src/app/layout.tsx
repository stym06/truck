import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: "Truck Analytics",
  description: "App Analytics Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
