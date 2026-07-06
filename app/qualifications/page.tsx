import type { Metadata } from "next";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Qualifications & Certifications",
  description: "Electrical qualifications, certifications, trade partnerships and insurance supporting OBRI Electrical Services London."
};

export default function QualificationsPage() {
  return (
    <main>
      <Section title="Qualifications & Certifications" intro="Trusted certification, established trade partnerships and insurance protection supporting professional electrical work.">
        <PartnerLogos />
        <div className="mt-12 rounded-lg border border-obri-border bg-obri-mist p-8">
          <h2 className="text-2xl font-black">Safety and compliance at every stage</h2>
          <p className="mt-3 max-w-3xl leading-7 text-obri-text">
            OBRI keeps electrical safety, clear communication, inspection and compliant workmanship at the centre of each residential, commercial and industrial project.
          </p>
        </div>
      </Section>
    </main>
  );
}