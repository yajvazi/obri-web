import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { sourceContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "About OBRIS LTD",
  description: "About OBRI Electrical Services, professional electricians and installers for residential, commercial and industrial customers in London."
};

export default function AboutPage() {
  return (
    <main>
      <Section title="About OBRIS LTD" intro={sourceContent.welcome}>
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-slate-700">
          {sourceContent.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </Section>
    </main>
  );
}
