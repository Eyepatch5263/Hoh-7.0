import type { Metadata } from "next";
import { Sansita } from "next/font/google";
import "./globals.css";


const sansita = Sansita({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Hack On Hills - 7.0",
  description: "Join HACK 5.0, the premier hackathon event for innovators, builders, and dreamers. Compete for prizes, network with industry leaders, and showcase your skills.",
  icons: {
    icon: "./hoh_logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansita.className}`}
      >
        {children}
      </body>
    </html>
  );
}
