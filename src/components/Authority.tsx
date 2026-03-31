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

const PARTNER_LOGOS = [
  { src: "/parceiros/IEX-branco-sem-fundo-scaled.png", alt: "IEX" },
]

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
          <p className="text-off-white/80 text-lg text-balance">
            A Neoeng nasce da união de Yves Mourão e Alexandre Modesto, somando décadas de liderança no setor focada na excelência técnica em engenharia em todo Brasil.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <h3 className="text-5xl font-black text-active-orange mb-2">30 Anos</h3>
            <p className="text-off-white/70">Experiência acumulada em obras de grande porte.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <h3 className="text-5xl font-black text-active-orange mb-2">+700k m²</h3>
            <p className="text-off-white/70">De ABL (Área Bruta Locável) executados com sucesso.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <h3 className="text-5xl font-black text-active-orange mb-2">Presença</h3>
            <p className="text-off-white/70">Obras entregues em todas as regiões do Brasil.</p>
          </div>
        </div>

        {/* CAROUSEL - CLIENTS */}
        <div className="mb-24">
          <h3 className="text-center text-off-white/50 text-sm tracking-widest uppercase mb-8">
            Empresas que os fundadores já atenderam
          </h3>
          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee flex gap-16 md:gap-24 items-center min-w-full">
              {[...STYLED_LOGOS, ...STYLED_LOGOS].map((logo, idx) => (
                <div key={idx} className="relative w-32 h-16 md:w-48 md:h-24 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all shrink-0">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOUNDERS & PARTNERS B2B */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Para Escritórios de Projeto</h3>
            <p className="text-off-white/70 mb-8 leading-relaxed">
              Focamos exclusivamente na excelência da execução de projetos de parceiros. Executamos instalações garantindo que o seu design seja implementado com exatidão técnica, sem a preocupação da gestão de obra direto para o projetista.
            </p>
            {PARTNER_LOGOS.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-active-orange uppercase mb-4">Parceiros B2B</h4>
                <div className="flex gap-6 items-center">
                  {PARTNER_LOGOS.map((pt, id) => (
                    <div key={id} className="relative w-32 h-16 md:w-48 md:h-24 shrink-0">
                      <Image src={pt.src} alt={pt.alt} fill className="object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative h-64 md:h-auto rounded-2xl overflow-hidden group">
              <Image
                src="/socios/Yves.jpg"
                alt="Yves Mourão"
                fill
                className="object-cover object-[center_15%] scale-[1.65] group-hover:scale-[1.75] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 to-transparent flex items-end p-6">
                <div>
                  <h4 className="font-bold text-lg">Yves Mourão</h4>
                  <span className="text-active-orange text-sm font-medium">Diretor de Operações</span>
                </div>
              </div>
            </div>
            {/* Sócio Alexandre */}
            <div className="flex-1 relative h-64 md:h-auto rounded-2xl overflow-hidden group">
              <Image src="/socios/alexandre.jpeg" alt="Alexandre Modesto" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 to-transparent flex items-end p-6">
                <div>
                  <h4 className="font-bold text-lg">Alexandre Modesto</h4>
                  <span className="text-active-orange text-sm font-medium">Diretor Técnico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-off-white/50 mt-8 italic">
          "Acervo técnico dos sócios fundadores: Projetos liderados por Yves Mourão e Alexandre Modesto."
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
