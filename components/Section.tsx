export function Section({
  title,
  intro,
  children,
  dark = false
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-obri-ink text-white" : "bg-white text-obri-ink"} px-4 py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display text-3xl font-black md:text-5xl">{title}</h2>
          {intro ? <p className={`mt-4 text-lg leading-8 ${dark ? "text-blue-100" : "text-slate-600"}`}>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
