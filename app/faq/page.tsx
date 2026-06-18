import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about emergency electricians, EICR inspections, commercial electrical work and OBRI coverage areas."
};

export default function FAQPage() {
  return (
    <main>
      <Section title="Frequently Asked Questions" intro="Fast answers for emergency call-outs, inspections, service coverage and quote requests.">
        <div className="grid gap-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-black">{question}</summary>
              <p className="mt-3 leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}
