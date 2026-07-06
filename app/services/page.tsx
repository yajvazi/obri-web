import type { Metadata } from "next";
import Image from "next/image";
import { ServicesGrid } from "@/components/Cards";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Electrical Services London",
  description: "Emergency electrical repairs, EICR, consumer unit upgrades, EV charger installation, commercial and industrial electrical services in London."
};

export default function ServicesPage() {
  return (
    <main>
      <Section title="Electrical Services London" intro="Professional electricians and installers for emergency repairs, upgrades, inspections, fit-outs and maintenance across London.">
        <ServicesGrid />
      </Section>
    </main>
  );
}
