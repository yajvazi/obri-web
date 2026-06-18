import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { sourceContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Qualifications & Certifications",
  description: "Electrical qualifications, certifications and safety-focused working practices from OBRI Electrical Services London."
};

export default function QualificationsPage() {
  return (
    <main>
      <Section title="Qualifications & Certifications" intro="Obri's source site highlights professional partnerships, public liability insurance and safety-focused electrical work.">
        <div className="grid gap-5 md:grid-cols-2">
          {[...sourceContent.qualifications, "Electrical safety inspection support", "EICR and landlord certificate work", "Quality parts, equipment and workmanship"].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black">{item}</h2>
              <p className="mt-3 leading-7 text-slate-600">OBRI keeps electrical safety, clear communication and compliant workmanship at the centre of each project.</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
