import Image from "next/image";

export function Logo() {
  return (
    <a href="/" className="group flex items-center gap-3" aria-label="OBRIS LTD home">
      <span className="relative h-12 w-36">
        <Image src="/obri-logo.svg" alt="OBRI Electrical Services" fill className="object-contain" priority />
      </span>
    </a>
  );
}
