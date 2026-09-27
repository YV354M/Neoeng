"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type EvidenceItem = {
  src: string;
  alt: string;
  caption: string;
};

export default function LightwallEvidenceGallery({ items }: { items: readonly EvidenceItem[] }) {
  const [selected, setSelected] = useState<EvidenceItem | null>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="grid gap-8">
        {items.map((item) => (
          <figure key={item.src} className="overflow-hidden rounded-3xl border border-deep-navy/10 bg-concrete-gray/30 p-3">
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-active-orange focus:ring-offset-2"
              aria-label={`Ampliar: ${item.alt}`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
              <span className="absolute bottom-3 right-3 rounded-full bg-deep-navy/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white opacity-90">Ampliar</span>
            </button>
            <figcaption className="mt-3 text-xs leading-relaxed text-deep-navy/60">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-deep-navy/90 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${selected.alt}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div className="relative flex max-h-full w-full max-w-7xl flex-col rounded-3xl bg-white p-3 shadow-2xl md:p-5">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-deep-navy text-xl leading-none text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-active-orange"
              aria-label="Fechar imagem ampliada"
            >
              ×
            </button>
            <div className="relative h-[65vh] min-h-[260px] w-full overflow-hidden rounded-2xl bg-concrete-gray/30">
              <Image src={selected.src} alt={selected.alt} fill sizes="95vw" className="object-contain" priority />
            </div>
            <p className="px-2 pt-3 text-xs leading-relaxed text-deep-navy/65">{selected.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
