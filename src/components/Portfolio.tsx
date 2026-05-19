"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, X } from "lucide-react";

const portfolioImages = [
  "Galpão_Multiformas.jpeg",
  "Gav_Resorts.jpeg",
  "Loja_Centauro.JPG",
  "Loja_Riachuelo.jpeg",
  "Prédio_Multiformas.jpeg",
  "Tatu_Bola.jpeg",
  "Alarmes_de_incêndio.jpg",
  "Alarmes_de_incêndio2.jpg",
  "Climatização.JPG",
  "Galpão_logístico.jpeg",
  "Galpão_Logístico2.jpeg",
  "Instalações_de_dados.jpg",
  "Instalações_de_Incêndio.jpg",
  "Loja_de_Shopping.jpg",
  "Loja_de_Shopping2.jpg",
  "Loja_de_Shopping3.jpg",
  "Loja_de_Shopping4.jpeg",
  "Loja_de_Shopping5.jpeg",
  "Loja_de_Shopping6.jpeg",
  "Loja_de_Shopping7.jpeg",
  "Loja_Nike.jpeg",
  "Mezanino_metálico.JPG",
  "Piso_de_galpão.JPG",
  "Piso_industrial.JPG",
  "Pisos_especiais_lojas.JPG",
  "Pisos_especiais_lojas2.JPG",
  "Quadros_elétricos.jpg",
  "Sinalizações_de_incêndio.jpg",
] as const;

const formatTitle = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, "")
    .replaceAll("_", " ")
    .replace(/\d+/g, (match) => ` ${match}`)
    .replace(/\s+/g, " ")
    .trim();

const portfolioItems = portfolioImages.map((fileName, index) => ({
  src: `/obras/Comercial/Select/${fileName}`,
  alt: `Acervo técnico Neoeng - ${formatTitle(fileName)}`,
  title: formatTitle(fileName),
  id: index,
}));

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-reveal",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? 0 : current === 0 ? portfolioItems.length - 1 : current - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : current === portfolioItems.length - 1 ? 0 : current + 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === null ? 0 : current === 0 ? portfolioItems.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : current === portfolioItems.length - 1 ? 0 : current + 1,
    );
  };

  const visibleItems = isExpanded ? portfolioItems : portfolioItems.slice(0, 4);
  const activeItem = activeIndex !== null ? portfolioItems[activeIndex] : null;

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,33,71,0.07),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(255,107,0,0.06),_transparent_28%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto portfolio-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-deep-navy mb-6">
              Acervo Técnico e Referências de Execução
            </h2>
            <p className="text-deep-navy/70 text-lg font-light">
              Clique para ampliar.
            </p>
          </div>

          <div className="portfolio-reveal flex items-center justify-between gap-4 mb-8 rounded-[1.75rem] border border-deep-navy/10 bg-white/85 px-5 py-4 shadow-[0_20px_60px_rgba(0,33,71,0.06)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-active-orange">
                Seleção Comercial
              </p>
              <p className="mt-2 text-2xl font-black text-deep-navy">
                Obras do Acervo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {visibleItems.map((item) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(item.id)}
                className="portfolio-reveal group text-left overflow-hidden rounded-[1.6rem] border border-deep-navy/10 bg-white shadow-[0_16px_38px_rgba(0,33,71,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(0,33,71,0.12)] hover:border-active-orange/35"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/52 via-deep-navy/8 to-transparent opacity-80" />
                </div>

                <div className="px-5 py-4">
                  <h3 className="text-lg font-black text-deep-navy leading-tight">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {portfolioItems.length > 4 && (
            <div className="portfolio-reveal mt-6">
              <button
                type="button"
                onClick={() => setIsExpanded((current) => !current)}
                className="w-full rounded-[1.4rem] border border-deep-navy/10 bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.2em] text-deep-navy shadow-[0_12px_30px_rgba(0,33,71,0.05)] transition-colors hover:border-active-orange/35 hover:text-active-orange"
              >
                <span className="inline-flex items-center gap-2">
                  {isExpanded ? "Ver menos" : "Ver mais"}
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {activeItem && activeIndex !== null && (
        <div className="fixed inset-0 z-[120] bg-deep-navy/88 backdrop-blur-md px-4 py-6 md:p-8">
          <div className="mx-auto flex h-full max-w-7xl flex-col">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-black">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Fechar visualização"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-colors hover:bg-white/16"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />

              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Imagem anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/18"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Próxima imagem"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-active-orange text-white transition-colors hover:bg-[#ff7a1f]"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 text-white/74">
              <p className="text-sm">
                {activeIndex + 1} de {portfolioItems.length}
              </p>
              <p className="text-sm hidden md:block">
                Use as setas do teclado para navegar e `Esc` para fechar.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
