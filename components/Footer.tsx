import { areas, company, services } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-obri-navy px-4 pb-24 pt-14 text-white md:pb-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-6 text-blue-100">
            Professional electricians and installers serving residential, commercial and industrial customers across London.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            {services.slice(0, 8).map(([slug, title]) => <a key={slug} href={`/services/${slug}`}>{title}</a>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Areas</h3>
          <div className="mt-4 grid gap-2 text-sm text-blue-100">
            {areas.slice(0, 8).map(([slug, name]) => <a key={slug} href={`/areas/${slug}`}>{name}</a>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <p className="mt-4 text-sm text-blue-100">{company.address}</p>
          <a className="mt-3 block text-xl font-black text-white" href={`tel:${company.tel}`}>{company.phone}</a>
          <a className="mt-3 inline-block rounded bg-obri-emergency px-4 py-3 font-bold" href="/contact">Emergency call-out</a>
        </div>
      </div>
    </footer>
  );
}
