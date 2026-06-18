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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Image src="/obri-services.png" alt="OBRI Electrical Services branded premises" width={1280} height={870} className="rounded-lg object-cover shadow-premium" />
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            {sourceContent.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </Section>
    </main>
  );
}
