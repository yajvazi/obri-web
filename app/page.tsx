import Image from "next/image";
import { CTAButtons } from "@/components/CTAButtons";
import { ContactForm } from "@/components/ContactForm";
import { ServicesGrid, TrustBadges } from "@/components/Cards";
import { Section } from "@/components/Section";
import { company, reviews, sourceContent } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-obri-navy px-4 py-16 text-white md:py-24">
        <div className="absolute inset-0 opacity-25">
          <Image src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=80" alt="Professional electrician working on electrical installation" fill priority className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
                Emergency Electrician & Professional Electrical Installers in London
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-blue-50">{sourceContent.intro[0]}</p>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100">{sourceContent.intro[2]}</p>
              <div className="mt-8"><CTAButtons /></div>
            </div>
            <div className="overflow-hidden rounded-lg border border-white/15 bg-white shadow-premium">
              <Image src="/obri-services.png" alt="OBRI Electrical Services branded storefront and service signage" width={1280} height={870} className="aspect-[4/3] object-cover" priority />
              <div className="bg-obri-ink p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-200">Emergency response</p>
                <p className="mt-3 text-4xl font-black">45-minute call-out</p>
                <p className="mt-3 text-blue-100">24/7 service for urgent faults, unsafe electrics and loss of power.</p>
                <a className="mt-6 block rounded bg-white px-5 py-4 text-center text-xl font-black text-obri-ink" href={`tel:${company.tel}`}>{company.phone}</a>
              </div>
            </div>
          </div>
          <div className="mt-12"><TrustBadges /></div>
        </div>
      </section>

      <Section title="Electrical Services London" intro="From emergency repairs to planned installations, OBRI handles domestic, commercial and industrial electrical work with a safety-first approach.">
        <ServicesGrid limit={9} />
        <a className="mt-8 inline-block rounded bg-obri-blue px-5 py-3 font-bold text-white" href="/services">View all services</a>
      </Section>

      <Section dark title="Why Choose OBRI" intro={sourceContent.whyChoose[0]}>
        <div className="grid gap-5 md:grid-cols-3">
          {["Clear advice and transparent communication", "24/7 rapid response times", "Solutions tailored to your needs and budget"].map((item, index) => (
            <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-6">
              <h3 className="text-xl font-black">{item}</h3>
              <p className="mt-3 text-blue-100">{sourceContent.whyChoose[index + 2]}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Qualifications & Certifications" intro="Electrical work is delivered with compliance, inspection and safety at the centre of the process.">
        <div className="grid gap-5 md:grid-cols-4">
          {sourceContent.qualifications.map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-obri-mist p-6 font-bold">{item}</div>
          ))}
          <div className="rounded-lg border border-slate-200 bg-obri-mist p-6 font-bold">Residential, commercial and industrial electrical work</div>
        </div>
      </Section>

      <Section dark title="Reviews & Testimonials" intro="At OBRI, our reputation is built on the trust and satisfaction of our clients. Every project is delivered with professionalism, attention to detail, and a commitment to exceeding expectations.">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-lg bg-white p-6 text-obri-ink">
              <p className="text-obri-emergency">★★★★★</p>
              <p className="mt-4 leading-7">{review.text}</p>
              <p className="mt-4 font-black">{review.name}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-obri-mist px-4 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-lg border border-obri-border bg-white p-8 shadow-sm md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-black text-obri-ink">Serving London & Surrounding Areas</h2>
            <p className="mt-3 max-w-2xl text-lg leading-7 text-obri-text">
              Fast electrical call-outs and planned installation work across London, nearby postcodes and selected surrounding areas.
            </p>
          </div>
          <a className="rounded bg-obri-blue px-5 py-3 font-bold text-white hover:bg-teal-700" href="/areas">
            View Coverage →
          </a>
        </div>
      </section>

      <section className="bg-obri-emergency px-4 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-black">Need an emergency electrician now?</h2>
            <p className="mt-2 text-red-50">24/7 service with 45-minute call-out where available.</p>
          </div>
          <CTAButtons />
        </div>
      </section>

      <Section title="Request a Quote" intro="Tell OBRI what you need and where the job is. The form is ready for a future email, Resend, Formspree or backend API connection.">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <ContactForm />
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <iframe title="Map to OBRIS LTD" className="h-full min-h-[420px] w-full" loading="lazy" src="https://www.google.com/maps?q=Tonbridge%20House%2C%20Tonbridge%20Street%2C%20London%20WC1H%209PA&output=embed" />
          </div>
        </div>
      </Section>
    </main>
  );
}
