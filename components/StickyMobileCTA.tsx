import { company } from "@/lib/data";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/20 bg-obri-navy p-3 md:hidden">
      <a className="rounded bg-obri-emergency py-3 text-center font-bold text-white" href={`tel:${company.tel}`}>Call Now</a>
      <a className="rounded bg-green-600 py-3 text-center font-bold text-white" href={`https://wa.me/${company.whatsapp}`}>WhatsApp</a>
    </div>
  );
}
