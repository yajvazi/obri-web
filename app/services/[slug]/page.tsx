import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTAButtons } from "@/components/CTAButtons";
import { Section } from "@/components/Section";
import { company, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(([slug]) => ({ slug }));
}

function getService(slug: string) {
  return services.find(([itemSlug]) => itemSlug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service[1]} London`,
    description: `${service[1]} in London by OBRI Electrical Services. 24/7 electrical support with 45-minute call-out for residential, commercial and industrial customers.`
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const [, title, desc, Icon] = service;
  return (
    <main>
      <section className="bg-obri-navy px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <Icon className="h-12 w-12 text-red-300" />
          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">{title} London</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-blue-100">{desc}</p>
          <div className="mt-8"><CTAButtons /></div>
        </div>
      </section>
      <Section title={`Professional ${title.toLowerCase()}`} intro={`OBRI Electrical Services provides ${title.toLowerCase()} for residential, commercial and industrial customers across London.`}>
        <div className="grid gap-6 md:grid-cols-3">
          {["Initial safety assessment", "Clear options and pricing", "Neat, compliant workmanship"].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">{item}</h2>
              <p className="mt-3 leading-7 text-slate-600">The team explains the scope, uses appropriate parts and stays with the job until the installation is safe and complete.</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-lg bg-obri-mist p-6">
          <p className="text-lg font-bold">For urgent {title.toLowerCase()}, call {company.phone} or send the quote form with your postcode and preferred time.</p>
        </div>
      </Section>
    </main>
  );
}
