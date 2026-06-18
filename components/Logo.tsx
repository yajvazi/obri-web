import Image from "next/image";

export function Logo() {
  return (
    <a href="/" className="group flex items-center gap-3" aria-label="OBRIS LTD home">
      <span className="relative h-12 w-36 overflow-hidden rounded bg-obri-navy shadow-premium">
        <Image src="/obri-logo.svg" alt="OBRI Electrical Services" fill className="object-contain p-1" priority />
      </span>
    </a>
  );
}
