import Image from "next/image";

const partners = [
  {
    name: "NICEIC Approved Contractor",
    label: "Proud Member",
    image: "/partners/niceic-approved.png",
    href: "https://niceic.com/"
  },
  {
    name: "D&I Electrical Maintenance",
    label: "In Partnership",
    image: "/partners/di-electrical.png",
    href: "https://di-electrical.co.uk/"
  },
  {
    name: "Pristine Gas Ltd",
    label: "In Partnership",
    image: "/partners/pristine-gas.png",
    href: "https://pristinegas.co.uk/"
  },
  {
    name: "Zurich Insurance",
    label: "Public Liability & Professional Indemnity Insurance",
    image: "/partners/zurich.svg",
    href: "https://www.zurich.co.uk/"
  }
];

export function PartnerLogos() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {partners.map((partner) => (
        <a
          key={partner.name}
          href={partner.href}
          target="_blank"
          rel="noreferrer"
          className="group overflow-hidden rounded-lg border border-obri-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium"
        >
          <div className="relative h-48 border-b border-obri-border bg-white">
            <Image
              src={partner.image}
              alt={partner.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain p-7"
            />
          </div>
          <div className="min-h-24 p-5">
            <p className="text-sm font-black uppercase tracking-wide text-obri-blue">{partner.label}</p>
            <p className="mt-2 font-bold text-obri-ink">{partner.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
