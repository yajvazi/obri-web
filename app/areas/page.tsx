import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { areas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description: "OBRI Electrical Services covers Holborn, Bloomsbury, Kings Cross, Clerkenwell, Islington, Camden, west London, east London and St Albans."
};

export default function AreasPage() {
  return (
    <main>
      <Section title="Areas We Cover" intro="Local electrician coverage for London homes, landlords, offices, shops, facilities and industrial customers.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {areas.map(([slug, name]) => <a key={slug} className="rounded-lg border border-slate-200 bg-white p-5 font-black shadow-sm hover:border-obri-blue" href={`/areas/${slug}`}>Electrician {name}</a>)}
        </div>
      </Section>
    </main>
  );
}
