"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadAssessmentForm from "@/components/LeadAssessmentForm";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Eye, ShieldCheck, ArrowRight, CalendarCheck, Layers, Hammer, Users, DollarSign } from "lucide-react";

const privateImages = [
  {
    src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (11).jpeg",
    alt: "Referência Técnica: Execução Residencial de Alto Padrão - Detalhes Estruturais",
    aspectRatio: "aspect-[4/3]"
  },
  {
    src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.40 (1).jpeg",
    alt: "Referência Técnica: Execução Residencial de Alto Padrão - Compatibilização de Projeto",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (2).jpeg",
    alt: "Referência Técnica: Execução Residencial de Alto Padrão - Acabamento Fino",
    aspectRatio: "aspect-square"
  },
  {
    src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (6).jpeg",
    alt: "Referência Técnica: Execução Residencial de Alto Padrão - Conectividade de Instalações",
    aspectRatio: "aspect-[4/3]"
  },
  {
    src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (4).jpeg",
    alt: "Referência Técnica: Execução Residencial de Alto Padrão - Gestão Construtiva",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41.jpeg",
    alt: "Referência Técnica: Execução Residencial de Alto Padrão - Estrutura de Concreto",
    aspectRatio: "aspect-[4/3]"
  }
];

const brasilImages = [
  {
    src: "/obras/Casas/Casas Brasil/20201228_083121.jpg",
    alt: "Referência Técnica: Projetos residenciais no Brasil liderados pelos sócios.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    src: "/obras/Casas/Casas Brasil/20231124_181030.jpg",
    alt: "Referência Técnica: Gestão de montagem e controle de prazo em obras premium.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "/obras/Casas/Casas Brasil/DSC_0062.JPG",
    alt: "Referência Técnica: Conclusão de estruturas residenciais complexas.",
    aspectRatio: "aspect-square"
  }
];

export default function PrivateHomes() {
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"brasil" | "usa">("brasil");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in-up",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(
        ".gallery-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".gallery-item",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [activeTab]);

  const currentImages = activeTab === "brasil" ? brasilImages : privateImages;

  return (
    <main className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/obras/Casas/Projetos/Casa1.webp"
            alt="Neoeng Private Homes - Engenharia Residencial de Alto Padrão"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 via-deep-navy/85 to-transparent mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-start">
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-active-orange animate-pulse" />
            Neoeng Private Homes
          </div>
          <h1 className="fade-in-up text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mb-6">
            Residências de Alto Padrão com Engenharia, Controle e Transparência.
          </h1>
          <p className="fade-in-up text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
            A Neoeng leva para a construção residencial premium a disciplina técnica de obras comerciais e complexas, garantindo controle de custos e conformidade de projetos.
          </p>
          <div className="fade-in-up flex flex-wrap gap-4">
            <a 
              href="#avaliacao-residencial"
              className="bg-active-orange text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-lg shadow-active-orange/20"
            >
              Solicitar Consultoria de Alto Padrão
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#modelo-gestao"
              className="border border-white/30 hover:border-white/80 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              Entender Nosso Modelo de Gestão
            </a>
          </div>
        </div>
      </section>

      {/* Modelo de Gestão (Construção por Administração) */}
      <section id="modelo-gestao" className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="w-16 h-1 bg-active-orange rounded-full mb-8" />
            <h2 className="text-4xl font-light text-deep-navy leading-tight">
              Construção por Administração: <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-deep-navy to-deep-navy/80">Transparência nas Contratações.</span>
            </h2>
            <div className="text-lg text-deep-navy/70 leading-relaxed space-y-4 font-light">
              <p>
                No modelo de <strong>Construção por Administração</strong> da Neoeng Private, a obra é executada com custos abertos. Você paga o valor real de materiais e mão de obra, enquanto nós realizamos a gestão operacional e a responsabilidade técnica sob uma taxa administrativa fixa pré-estabelecida.
              </p>
              <p>
                Eliminamos conflitos de interesse de margens ocultas e focamos estritamente na mitigação de riscos, controle físico-financeiro e na entrega de uma engenharia de alto nível para o seu lar.
              </p>
            </div>
            <ul className="space-y-4 mt-8">
              {[
                'Relatórios mensais de conciliação financeira e física.',
                'Cotações e compras de materiais diretas em nome do cliente, com repasse integral de descontos comerciais.',
                'Cronogramas executivos atualizados com identificação preventiva de gargalos.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-deep-navy/80 font-medium text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-active-orange shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/obras/Casas/Projetos/Casa6.png"
              alt="Modelo de Gestão por Administração"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-deep-navy/10" />
          </div>
        </div>
      </section>

      {/* Seção "Por que alto padrão exige gestão técnica?" */}
      <section className="py-24 bg-concrete-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-active-orange font-bold uppercase tracking-wider mb-2 text-sm">
              Gestão de Engenharia
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-deep-navy leading-tight">
              Por que Alto Padrão exige Gestão Técnica?
            </h2>
            <p className="text-deep-navy/70 mt-4 text-sm md:text-base max-w-xl mx-auto">
              Projetos sofisticados demandam controle rigoroso. A Neoeng aplica metodologias estruturadas para evitar retrabalhos e assegurar a qualidade de montagem de cada disciplina.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CalendarCheck,
                title: "Planejamento Executivo Detalhado",
                desc: "Estruturação minuciosa do cronograma físico-financeiro e dimensionamento de insumos antes do início dos trabalhos em campo."
              },
              {
                icon: Layers,
                title: "Compatibilização de Disciplinas",
                desc: "Análise técnica que garante que os projetos elétrico, hidráulico, estrutural e de climatização convergem sem interferências."
              },
              {
                icon: Hammer,
                title: "Rigor Geométrico e Estrutural",
                desc: "Controle dimensional milimétrico e auditoria minuciosa em concretagens, alvenarias e esquadrias de grandes vãos."
              },
              {
                icon: Users,
                title: "Gestão e Homologação de Fornecedores",
                desc: "Contratação direta baseada em capacidade técnica comprovada e fiscalização contínua das atividades de terceiros."
              },
              {
                icon: DollarSign,
                title: "Rastreabilidade de Custos",
                desc: "Acompanhamento preciso de compras de insumos e mão de obra com total transparência e conciliação de notas fiscais."
              },
              {
                icon: ShieldCheck,
                title: "Fiscalização e Controle de Qualidade",
                desc: "Inspeções técnicas sistemáticas em todas as fases da obra, desde a fundação ao acabamento fino de revestimentos."
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="bg-white border border-black/5 hover:border-active-orange/20 shadow-md hover:shadow-xl rounded-2xl p-8 transition-all duration-300">
                  <div className="bg-concrete-gray/30 p-3.5 rounded-xl inline-block text-active-orange mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-navy mb-3">{card.title}</h3>
                  <p className="text-deep-navy/70 text-sm leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Acompanhamento em Tempo Real */}
      <section className="py-24 bg-deep-navy text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-active-orange/5 mix-blend-screen pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/obras/Casas/Projetos/acompanhamento-celular.jpg"
              alt="Acompanhamento físico-financeiro por dispositivo móvel"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="p-4 bg-white/5 inline-block rounded-2xl mb-4 border border-white/10">
              <Eye className="w-8 h-8 text-active-orange" />
            </div>
            <h2 className="text-4xl font-light leading-tight">
              Acompanhamento Físico-Financeiro <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">em Tempo Real.</span>
            </h2>
            <div className="text-lg text-white/70 leading-relaxed space-y-4 font-light text-justify">
              <p>
                Mais do que imagens, entregamos relatórios técnicos de status. Nossa gestão oferece visibilidade completa sobre o ritmo de avanço físico e a curva de desembolso financeiro da sua obra, mitigando surpresas e garantindo tranquilidade.
              </p>
              <p>
                Monitore o avanço e acompanhe cada etapa da execução residencial premium de onde estiver, com total segurança e previsibilidade técnica.
              </p>
            </div>
            <ul className="space-y-3 mt-6">
              {[
                'Relatório de Avanço Físico Diário (RDO) disponível online.',
                'Registro fotográfico e de imagens aéreas (drones) das etapas construtivas.',
                'Curva S de custos x avanço para acompanhamento em tempo real do orçamento.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-active-orange shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Galeria de Projetos (Acervo) */}
      <section ref={galleryRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-deep-navy mb-6">
              Acervo Residencial e Referências de Execução
            </h2>
            <p className="text-deep-navy/70 text-lg mb-8 font-light">
              Portfólio de residências e referências construtivas que compõem o histórico profissional e técnico dos fundadores da Neoeng. Projetos executados com a mesma disciplina técnica e rigor que aplicamos em cada obra.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setActiveTab("brasil")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${activeTab === "brasil" ? "bg-active-orange border-active-orange text-white" : "border-deep-navy/20 text-deep-navy hover:border-active-orange/50"}`}
              >
                Brasil
              </button>
              <button
                onClick={() => setActiveTab("usa")}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${activeTab === "usa" ? "bg-active-orange border-active-orange text-white" : "border-deep-navy/20 text-deep-navy hover:border-active-orange/50"}`}
              >
                USA
              </button>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {currentImages.map((img, index) => (
              <div key={index} className={`gallery-item relative overflow-hidden rounded-2xl group break-inside-avoid shadow-lg ${img.aspectRatio}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-white font-medium text-xs leading-snug">
                    Referência Técnica: Histórico de projetos dos sócios fundadores.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção "Para quem é o Neoeng Private Homes?" */}
      <section className="py-24 bg-concrete-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-active-orange font-bold uppercase tracking-wider mb-2 text-sm">
              Perfis de Clientes
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-deep-navy leading-tight">
              Para quem é o Neoeng Private Homes?
            </h2>
            <p className="text-deep-navy/70 mt-4 text-sm md:text-base max-w-xl mx-auto font-light">
              Nossa estrutura é voltada para quem não aceita desvios técnicos na execução de seus projetos residenciais de alto padrão.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Proprietários Exigentes",
                desc: "Quem busca controle minucioso de custos, fidelidade absoluta ao projeto e atenção obsessiva aos detalhes de acabamento."
              },
              {
                title: "Investidores Residenciais",
                desc: "Quem exige alta performance financeira, cronogramas previsíveis e qualidade que valoriza o metro quadrado para revenda imediata."
              },
              {
                title: "Arquitetos e Designers",
                desc: "Parceiros que buscam uma construtora com rigor de engenharia capaz de tirar do papel layouts complexos sem desvios estruturais."
              },
              {
                title: "Diretores e Empresários",
                desc: "Profissionais acostumados a metas claras, cronogramas e orçamentos corporativos, que desejam a mesma disciplina na execução de seu lar."
              }
            ].map((profile, idx) => (
              <div key={idx} className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <div className="w-8 h-8 rounded-full bg-active-orange/10 flex items-center justify-center text-active-orange font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-deep-navy mb-3">{profile.title}</h3>
                  <p className="text-deep-navy/70 text-xs leading-relaxed">{profile.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final com Formulário Completo */}
      <LeadAssessmentForm
        source="private-homes"
        eyebrowTitle="Avaliação Técnica Residencial"
        title="Solicite uma Avaliação Técnica Residencial"
        description="Conte um pouco sobre o seu projeto. A Neoeng irá avaliar o estágio da obra, o tipo de escopo e os principais pontos de atenção para indicar o melhor caminho de execução."
        submitLabel="Solicitar Avaliação Técnica"
        theme="dark"
        sectionId="avaliacao-residencial"
      />

      <Footer />
    </main>
  );
}
