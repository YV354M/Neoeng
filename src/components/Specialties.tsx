"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Flame, CloudLightning, Wind, Cpu } from "lucide-react";

const SolarPanelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="5" cy="5" r="2" />
    <path d="M5 1v1M5 8v1M9 5H8M2 5H1M7.8 2.2l-.7.7M2.9 7.1l-.7.7M7.8 7.8l-.7-.7M2.9 2.9l-.7-.7" />
    <path d="M8 13l-1.5 8h11l-1.5-8z" />
    <path d="M13.5 13v8" />
    <path d="M7 17h10" />
    <path d="M10 21v2" />
    <path d="M17 21v2" />
  </svg>
);

const specialties = [
  {
    icon: Zap,
    title: "Elétrica",
    description: "Baixa, média e alta tensão com máxima segurança em ambientes industriais.",
    bgImage: "/images/bg-eletrica.png"
  },
  {
    icon: Flame,
    title: "Combate a Incêndio",
    description: "Sistemas certificados e execução rigorosa seguindo as normas vigentes.",
    bgImage: "/images/bg-incendio.png"
  },
  {
    icon: CloudLightning,
    title: "SPDA",
    description: "Proteção contra descargas atmosféricas com rigorosas normas técnicas e inspeção preventiva.",
    bgImage: "/images/bg-spda.png"
  },
  {
    icon: Wind,
    title: "Climatização (HVAC)",
    description: "Instalação de ar condicionado central e sistemas de ventilação exaustiva industrial.",
    bgImage: "/images/bg-hvac.png"
  },
  {
    icon: Cpu,
    title: "Automação",
    description: "Sistemas e painéis elétricos inteligentes para máxima eficiência operacional da planta.",
    bgImage: "/images/bg-automacao.png"
  },
  {
    icon: SolarPanelIcon,
    title: "Energia Solar",
    description: "Instalação e manutenção de sistemas residenciais, industriais e em fazendas solares.",
    bgImage: "/images/bg-solar.png"
  }
];

export default function Specialties() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".specialty-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="especialidades" ref={containerRef} className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-active-orange font-bold uppercase tracking-wider mb-2 text-sm">
              Soluções Especializadas
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-deep-navy leading-[1.1] text-balance">
              Expertise Técnica para Obras de Alta Complexidade.
            </h2>
          </div>
          <p className="text-deep-navy/70 max-w-sm text-balance">
            Instalações de alta performance com qualidade assegurada, mitigação de riscos e planejamento assertivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="specialty-card group bg-white hover:bg-white border border-transparent hover:border-active-orange/20 shadow-sm hover:shadow-2xl hover:shadow-active-orange/10 transition-all duration-700 rounded-3xl p-8 flex flex-col items-start relative overflow-hidden"
              >
                {/* Background Watermark Image */}
                <div
                  className="absolute inset-0 z-0 opacity-[0.7] grayscale mix-blend-darken bg-center bg-cover bg-no-repeat transition-transform duration-[1.5s] ease-out group-hover:scale-105 pointer-events-none"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                />

                <div className="bg-concrete-gray/50 border border-black/5 p-4 rounded-2xl shadow-sm mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative z-10 backdrop-blur-sm">
                  <Icon className="w-8 h-8 text-active-orange drop-shadow-sm" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-deep-navy mb-3 relative z-10 drop-shadow-sm">{item.title}</h3>
                <p className="text-deep-navy/70 leading-relaxed max-w-md relative z-10 mix-blend-multiply font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
