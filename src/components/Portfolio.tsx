"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const portfolioImages = [
  {
    src: "/obras/Comercial/Tatu Bola/WhatsApp Image 2026-05-06 at 22.08.00 (10).jpeg",
    alt: "Projeto Tatu Bola - Obra entregue",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "/obras/Comercial/GAV Resorts/WhatsApp Image 2026-05-06 at 22.08.00.jpeg",
    alt: "Projeto GAV Resorts - Excelência Técnica",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "/obras/Comercial/Galpão/WhatsApp Image 2026-05-06 at 22.01.21 (1).jpeg",
    alt: "Projeto Galpão Comercial - Detalhes Estruturais",
    aspectRatio: "aspect-square",
  },
  {
    src: "/obras/Comercial/Tatu Bola/WhatsApp Image 2026-05-06 at 22.08.00 (6).jpeg",
    alt: "Projeto Tatu Bola - Alta Performance",
    aspectRatio: "aspect-[4/3]",
  },
  {
    src: "/obras/Comercial/Galpão/WhatsApp Image 2026-05-06 at 22.01.19.jpeg",
    alt: "Projeto Galpão - Fundação e Estrutura",
    aspectRatio: "aspect-[3/4]",
  },
  {
    src: "/obras/Comercial/GAV Resorts/WhatsApp Image 2026-05-06 at 22.09.17 (1).jpeg",
    alt: "Projeto GAV Resorts - Instalações",
    aspectRatio: "aspect-[4/3]",
  }
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-deep-navy mb-6">
            Acervo de Realizações: Excelência que se vê.
          </h2>
          <p className="text-deep-navy/70 text-lg">
            Conheça alguns dos nossos projetos entregues, onde o rigor técnico da Neoeng se transforma em infraestrutura de alta performance.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioImages.map((img, index) => (
            <div key={index} className={`portfolio-item relative overflow-hidden rounded-2xl group break-inside-avoid ${img.aspectRatio}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
