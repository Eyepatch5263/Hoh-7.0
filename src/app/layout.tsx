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
  description: "Join HOH-7.0, the premier hackathon event for innovators, builders, and dreamers. Compete for prizes, network with industry leaders, and showcase your skills.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Hack On Hills - 7.0",
              "startDate": "2025-10-10T00:00:00Z",
              "endDate": "2025-10-13T23:59:59Z",
              "url": "https://hackonhills.com",
              "potentialAction": {
                "@type": "RegisterAction",
                "target": "https://hackonhills.com/register",
                "query-input": "required name=hackonhills"
              }
            })
          }}
        />
      </head>
      <body
        className={`${sansita.className}`}
      >
        {children}
      </body>
    </html>
  );
}
