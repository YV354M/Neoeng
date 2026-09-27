"use client";

import Image from "next/image";

const STYLED_LOGOS = [
  { src: "/logos_clientes/mcdonalds.png", alt: "McDonalds" },
  { src: "/logos_clientes/kfc-logo_1678128805.png", alt: "KFC" },
  { src: "/logos_clientes/nike-logo.png", alt: "Nike" },
  { src: "/logos_clientes/riachuelo.jpg", alt: "Riachuelo" },
  { src: "/logos_clientes/logo-bradesco-hero.png", alt: "Bradesco" },
  { src: "/logos_clientes/beachpark.png", alt: "Beach Park" },
  { src: "/logos_clientes/centauro.png", alt: "Centauro" },
  { src: "/logos_clientes/AMERICANAS.png", alt: "Americanas" },
  { src: "/logos_clientes/alifenino.png", alt: "Alife Nino" },
  { src: "/logos_clientes/logo_grupo-gav_kcywwW.png", alt: "Gav Resorts" },
  { src: "/logos_clientes/adidas-logo-1971.jpg", alt: "Adidas" },
];

export default function Authority() {

  return (
    <section id="autoridade" className="py-24 bg-deep-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-active-orange font-bold uppercase tracking-wider mb-2 text-sm">
            Autoridade & Trajetória
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            A Base de Confiança da Neoeng.
          </h2>
          <p className="text-off-white/80 text-lg text-balance font-light">
            A Neoeng consolida a experiência acumulada de seu fundador e time técnico na execução de obras rápidas, complexas e de grande porte em todo o Brasil, integrando este acervo técnico e profissional na nova operação.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <h3 className="text-5xl font-black text-active-orange mb-2 font-serif">20 Anos</h3>
            <p className="text-off-white/70">Experiência acumulada do time em obras complexas.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <h3 className="text-5xl font-black text-active-orange mb-2 font-serif">+700k m²</h3>
            <p className="text-off-white/70">De Área Executada (ABL) no acervo profissional do time.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <h3 className="text-5xl font-black text-active-orange mb-2 font-serif">Nacional</h3>
            <p className="text-off-white/70">Histórico de projetos geridos em todas as regiões do país.</p>
          </div>
        </div>

        {/* CAROUSEL - CLIENTS */}
        <div className="mb-24">
          <h3 className="text-center text-off-white/50 text-sm tracking-widest uppercase mb-8">
            Marcas atendidas no histórico profissional do time
          </h3>
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee flex gap-16 md:gap-24 items-center min-w-full">
              {[...STYLED_LOGOS, ...STYLED_LOGOS].map((logo, idx) => (
                <div key={idx} className="relative w-32 h-16 md:w-48 md:h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all shrink-0">
                  <Image src={logo.src} alt={logo.alt} fill sizes="200px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-off-white/50 mt-8 italic leading-relaxed">
          *A experiência profissional, áreas executadas e marcas eventualmente apresentadas constituem o acervo técnico e comercial acumulado pelo time da Neoeng ao longo de atuações anteriores e atuais.
        </p>
      </div>

      {/* Tailwind Marquee animation in globals.css needed */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
