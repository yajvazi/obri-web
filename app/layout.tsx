import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { EmergencyQuoteCTA } from "@/components/EmergencyQuoteCTA";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, localBusinessSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.obri.co.uk"),
  title: {
    default: "OBRI Electrical Services | Emergency Electrician London",
    template: "%s | OBRI Electrical Services"
  },
  description: "OBRIS LTD provides 24/7 electrical services in London with 45-minute call-out for residential, commercial and industrial customers.",
  openGraph: {
    title: "OBRI Electrical Services",
    description: "Emergency electrician and professional electrical installers in London.",
    url: "https://www.obri.co.uk",
    siteName: "OBRI Electrical Services",
    locale: "en_GB",
    type: "website",
    images: ["/obri-logo.svg"]
  },
  icons: {
    icon: "/obri-logo.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="font-sans">
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={faqSchema()} />
        <Header />
        {children}
        <EmergencyQuoteCTA />
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
