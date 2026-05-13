import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.pdxgaragepros.com";

export const metadata: Metadata = {
  title: "Garage Door Repair Portland OR | PDX Garage Pros",
  description:
    "Fast garage door repair in Portland, Oregon. Broken springs, opener repair, off-track doors, emergency service, and nearby metro service areas.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    siteName: "PDX Garage Pros",
    locale: "en_US",
    type: "website",
  },
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PDX Garage Pros",
      description:
        "Garage door repair referral service for Portland, Oregon and the surrounding metro area.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Garage Door Repair Referral",
      description:
        "PDX Garage Pros connects homeowners in Portland and the surrounding metro area with garage door repair professionals for broken springs, opener issues, off-track doors, cables, rollers, and emergency service.",
      provider: {
        "@type": "Organization",
        name: "PDX Garage Pros",
        url: siteUrl,
        telephone: "+15034953464",
      },
      areaServed: [
        { "@type": "City", name: "Portland", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "City", name: "Beaverton", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "City", name: "Hillsboro", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "City", name: "Tigard", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "City", name: "Tualatin", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "City", name: "Lake Oswego", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "City", name: "Gresham", containedInPlace: { "@type": "State", name: "Oregon" } },
      ],
      serviceType: [
        "Garage Door Spring Repair",
        "Garage Door Opener Repair",
        "Emergency Garage Door Repair",
        "Garage Door Cable Repair",
        "Off-Track Garage Door Repair",
        "Garage Door Roller Repair",
      ],
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
