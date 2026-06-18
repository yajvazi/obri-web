import { company } from "@/lib/data";
import { CTAButtons } from "./CTAButtons";
import { Logo } from "./Logo";

const nav = [
  ["Services", "/services"],
  ["Areas", "/areas"],
  ["About", "/about"],
  ["Qualifications", "/qualifications"],
  ["Reviews", "/reviews"],
  ["FAQ", "/faq"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-obri-emergency px-4 py-2 text-center text-sm font-bold text-white">
        24/7 Service - 45 Minute Call-Out - Call <a href={`tel:${company.tel}`}>{company.phone}</a>
      </div>
      <div className="border-b border-white/10 bg-obri-navy/95 px-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-4">
          <Logo />
          <nav className="hidden items-center gap-5 text-sm font-semibold text-blue-50 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} className="hover:text-white" href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden xl:block">
            <CTAButtons compact />
          </div>
          <a className="rounded bg-white px-4 py-2 text-sm font-bold text-obri-ink lg:hidden" href={`tel:${company.tel}`}>
            Call
          </a>
        </div>
      </div>
    </header>
  );
}
