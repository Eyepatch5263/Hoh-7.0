import type { Metadata } from "next";
import {Sansita } from "next/font/google";
import "./globals.css";


const sansita=Sansita({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Hack On Hills - 7.0",
  description: "Marines of the blue",
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
