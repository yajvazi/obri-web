import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CTAButtons } from "@/components/CTAButtons";
import { Section } from "@/components/Section";
import { company, sourceContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact OBRI Electrical Services",
  description: "Contact OBRI Electrical Services for emergency electrician call-outs, quotes and electrical services in London."
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-obri-navy px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-4xl font-black md:text-6xl">Contact OBRI Electrical Services</h1>
          <p className="mt-5 max-w-3xl text-xl text-blue-100">{sourceContent.contact[0]}</p>
          <p className="mt-2 max-w-3xl text-blue-100">{sourceContent.contact[1]}</p>
          <p className="mt-5 max-w-3xl text-xl font-bold text-white">{company.address}</p>
          <p className="mt-2 text-2xl font-black">{company.phone}</p>
          <div className="mt-8"><CTAButtons /></div>
        </div>
      </section>
      <Section title="Request a Quote" intro="Send your job details, service need and postcode. This form is prepared for email/API integration later.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <ContactForm />
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div className="p-6">
              <h2 className="text-2xl font-black">{sourceContent.contact[2]}</h2>
              <p className="mt-3 text-slate-700">{company.address}</p>
              <p className="mt-3 font-bold">{sourceContent.contact[3]}</p>
              <p className="font-bold">{sourceContent.contact[4]}</p>
            </div>
            <iframe title="Map to OBRIS LTD" className="min-h-[380px] w-full" loading="lazy" src="https://www.google.com/maps?q=Tonbridge%20House%2C%20Tonbridge%20Street%2C%20London%20WC1H%209PA&output=embed" />
          </div>
        </div>
      </Section>
    </main>
  );
}
