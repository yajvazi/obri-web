import { company, faqs } from "./data";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: company.tradingName,
    legalName: company.name,
    telephone: company.phone,
    url: company.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tonbridge House, Tonbridge Street",
      addressLocality: "London",
      postalCode: "WC1H 9PA",
      addressCountry: "GB"
    },
    areaServed: "London",
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    description: "Professional electricians and installers for residential, commercial and industrial electrical services in London."
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };
}
