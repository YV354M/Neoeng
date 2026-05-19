"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Flame, CloudLightning, Wind, Cpu, BrickWall, Droplet, Hammer, ShieldAlert, ArrowRight } from "lucide-react";

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

const pillars = [
  {
    title: "Obras Comerciais e Corporativas",
    description: "Execução de lojas, restaurantes, clínicas, escritórios e espaços corporativos com foco em prazo, compatibilização de disciplinas, controle de fornecedores e entrega operacional.",
    bgImage: "/images/bg-concrete-metal.png",
    link: "#orcamento"
  },
  {
    title: "Instalações Técnicas e Industriais",
    description: "Execução de sistemas elétricos, SPDA, combate a incêndio, climatização, automação, energia solar, hidrossanitário e infraestrutura técnica para obras comerciais, industriais e logísticas.",
    bgImage: "/images/bg-concrete-metal.png",
    link: "#orcamento"
  },
  {
    title: "Residências de Alto Padrão",
    description: "Construção e gestão técnica de residências premium, com controle de custos, transparência nas contratações, acompanhamento periódico e atenção rigorosa aos detalhes de execução e acabamento.",
    bgImage: "/images/bg-concrete-metal.png",
    link: "/private-homes"
  }
];

const services = [
  {
    icon: Zap,
    title: "Elétrica",
    description: "Instalação e integração de sistemas elétricos de baixa, média e alta tensão com foco em conformidade e alta performance operacional."
  },
  {
    icon: Flame,
    title: "Combate a Incêndio",
    description: "Execução integrada de redes de hidrantes, sprinklers e alarmes para proteção total de ativos comerciais e industriais."
  },
  {
    icon: CloudLightning,
    title: "SPDA",
    description: "Instalação certificada de sistemas de proteção contra descargas atmosféricas, integrados à infraestrutura de campo."
  },
  {
    icon: Wind,
    title: "Climatização / HVAC",
    description: "Sistemas integrados de ventilação, exaustão e climatização para conforto e atendimento às normas regulamentadoras."
  },
  {
    icon: Cpu,
    title: "Automação",
    description: "Sistemas e painéis elétricos inteligentes integrados à infraestrutura técnica para otimização de consumo e processos."
  },
  {
    icon: SolarPanelIcon,
    title: "Energia Solar",
    description: "Estruturação e instalação de sistemas fotovoltaicos integrados à matriz elétrica das edificações."
  },
  {
    icon: BrickWall,
    title: "Obras Civis",
    description: "Execução de fundações, alvenaria, coberturas e pátios integrados ao cronograma de instalações e acabamento."
  },
  {
    icon: Droplet,
    title: "Hidrossanitário",
    description: "Instalação de redes de água fria, quente, esgoto e águas pluviais com rigor geométrico e estanqueidade garantida."
  },
  {
    icon: Hammer,
    title: "Estruturas e acabamentos",
    description: "Execução técnica de estruturas e revestimentos finais com controle rigoroso de qualidade e acabamento premium."
  }
];

export default function Specialties() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pillar-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        ".service-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-grid-container",
            start: "top 85%",
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

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-active-orange font-bold uppercase tracking-wider mb-2 text-sm">
              Áreas de Atuação
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-deep-navy leading-[1.1] text-balance">
              Execução Técnica de Obras com Rigor de Engenharia.
            </h2>
          </div>
          <p className="text-deep-navy/70 max-w-sm text-balance leading-relaxed">
            Conectamos experiência de campo e gestão de custos para atuar com previsibilidade técnica em três frentes de valor.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="pillar-card group bg-white border border-black/5 hover:border-active-orange/20 shadow-lg hover:shadow-2xl hover:shadow-active-orange/10 transition-all duration-500 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <div
                className="absolute inset-0 z-0 opacity-[0.03] grayscale mix-blend-darken bg-center bg-cover bg-no-repeat transition-transform duration-[1.5s] ease-out group-hover:scale-105 pointer-events-none"
                style={{ backgroundImage: `url(${item.bgImage})` }}
              />

              <div className="relative z-10">
                <span className="text-xs font-bold text-active-orange uppercase tracking-widest bg-active-orange/10 px-3 py-1 rounded-full inline-block mb-6">
                  Frente {index + 1}
                </span>
                <h3 className="text-2xl font-black text-deep-navy mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-deep-navy/70 leading-relaxed font-medium mb-8">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-black/5">
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-active-orange hover:text-orange-600 font-bold transition-colors group/link"
                >
                  <span>{index === 2 ? "Conhecer Private Homes" : "Solicitar Avaliação"}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Services Section */}
        <div className="services-grid-container">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-deep-navy mb-3">
              Capacidade de Execução Integrada
            </h3>
            <p className="text-deep-navy/60 max-w-xl mx-auto text-sm">
              Nossas especialidades não atuam de forma isolada. Integramos cada disciplina sob o mesmo rigor técnico e planejamento executivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="service-card group bg-white hover:bg-deep-navy border border-black/5 hover:border-transparent transition-all duration-300 rounded-2xl p-6 flex gap-4 items-start shadow-sm hover:shadow-lg"
                >
                  <div className="bg-concrete-gray/30 group-hover:bg-white/10 p-3 rounded-xl transition-colors shrink-0">
                    <Icon className="w-6 h-6 text-active-orange" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-deep-navy group-hover:text-white mb-2 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-deep-navy/60 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
