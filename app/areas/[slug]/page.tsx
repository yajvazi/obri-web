import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTAButtons } from "@/components/CTAButtons";
import { Section } from "@/components/Section";
import { services, areas } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map(([slug]) => ({ slug }));
}

function getArea(slug: string) {
  return areas.find(([itemSlug]) => itemSlug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Electrician ${area[1]}`,
    description: `Emergency electrician and electrical services in ${area[1]} by OBRI Electrical Services. 24/7 service with 45-minute call-out.`
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const [, name] = area;
  return (
    <main>
      <section className="bg-obri-navy px-4 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-4xl font-black md:text-6xl">Electrician {name}</h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-blue-100">
            OBRI Electrical Services provides emergency call-outs, repairs, installations, inspections and upgrades in {name}.
          </p>
          <div className="mt-8"><CTAButtons /></div>
        </div>
      </section>
      <Section title={`Electrical Services in ${name}`} intro={`For homes, landlords, offices, shops and industrial sites in ${name}, OBRI offers responsive service and professional installation standards.`}>
        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0, 9).map(([serviceSlug, title]) => (
            <a key={serviceSlug} className="rounded-lg border border-slate-200 bg-white p-5 font-bold hover:border-obri-blue" href={`/services/${serviceSlug}`}>{title}</a>
          ))}
        </div>
      </Section>
    </main>
  );
}
