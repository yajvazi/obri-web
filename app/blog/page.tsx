import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { advicePosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Electrical Advice Blog",
  description: "Electrical advice from OBRI covering power faults, EICR reports, consumer units and EV charger installation."
};

export default function BlogPage() {
  return (
    <main>
      <Section title="Electrical Advice" intro="Helpful guides for London property owners, landlords and businesses.">
        <div className="grid gap-5 md:grid-cols-2">
          {advicePosts.map(([slug, title, excerpt]) => (
            <article key={slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{excerpt}</p>
              <a className="mt-5 inline-block font-bold text-obri-blue" href={`/blog/${slug}`}>Read advice</a>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
