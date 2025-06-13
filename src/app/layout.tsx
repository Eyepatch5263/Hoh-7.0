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
    icon: "/hoh2.webp"
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
              "eventStatus":"https://schema.org/EventScheduled",
              "location":{
                "@type": "Place",
                "name": "NIT HAMIRPUR",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Hamirpur",
                  "addressLocality": "Hamirpur",
                  "addressRegion": "Himachal Pradesh",
                  "postalCode": "177005",
                  "addressCountry": "India"
                }
              },
              "image":[
                "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1749385680/img7_zheh58.webp",
                "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1749385678/img2_wreqs7.webp",
                "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1749385679/img1_lfcfmv.webp",
                "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1749385678/img6_qggjtj.webp",
                "https://res.cloudinary.com/dvnrlqqpq/image/upload/v1749385678/img5_k0ytpa.webp"
              ],
              "description":"Join HOH-7.0, the premier hackathon event for innovators, builders, and dreamers. Compete for prizes, network with industry leaders, and showcase your skills.",
              "organizer":{
                "@type":"Organization",
                "Name":"App Team NITH"
              },
              "logo":"https://res.cloudinary.com/dvnrlqqpq/image/upload/v1749389039/hoh3_nqktap.webp",
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
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}