import { company } from "@/lib/data";

export function CTAButtons({ compact = false }: { compact?: boolean }) {
  const cls = compact ? "px-4 py-2 text-sm" : "px-5 py-3";
  return (
    <div className="flex flex-wrap gap-3">
      <a className={`${cls} rounded bg-obri-emergency font-bold text-white shadow-premium hover:bg-red-700`} href={`tel:${company.tel}`}>
        Call Now
      </a>
      <a className={`${cls} rounded border border-green-300 bg-green-600 font-bold text-white hover:bg-green-700`} href={`https://wa.me/${company.whatsapp}`}>
        WhatsApp Us
      </a>
      <a className={`${cls} rounded border border-white/30 bg-white font-bold text-obri-ink hover:bg-blue-50`} href="/contact">
        Request a Quote
      </a>
    </div>
  );
}
