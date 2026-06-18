import { services, trustBadges } from "@/lib/data";

export function TrustBadges() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {trustBadges.map(({ title, icon: Icon }) => (
        <div key={title} className="rounded border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
          <Icon className="mb-3 h-6 w-6 text-red-300" />
          <p className="text-sm font-bold">{title}</p>
        </div>
      ))}
    </div>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map(([slug, title, desc, Icon]) => (
        <a key={slug} href={`/services/${slug}`} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
          <Icon className="h-8 w-8 text-obri-blue" />
          <h3 className="mt-4 text-xl font-black text-obri-ink">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{desc}</p>
        </a>
      ))}
    </div>
  );
}
