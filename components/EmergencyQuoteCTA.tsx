import { company } from "@/lib/data";

export function EmergencyQuoteCTA() {
  return (
    <section className="bg-obri-navy px-4 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-lg border border-white/10 bg-white/10 p-8 shadow-premium md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl font-black md:text-4xl">Need an Electrician Today?</h2>
          <a className="mt-3 block text-3xl font-black text-white md:text-5xl" href={`tel:${company.tel}`}>
            Call {company.phone}
          </a>
          <p className="mt-3 text-lg font-bold text-blue-100">Emergency Call-Outs Available 24/7</p>
        </div>
        <a className="rounded bg-obri-blue px-6 py-4 text-center text-lg font-black text-white hover:bg-teal-700" href="/contact">
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
