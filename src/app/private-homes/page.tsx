"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Eye, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";

const privateImages = [
  {
    src: "/Obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (11).jpeg",
    alt: "Padrão Neoeng: Onde o luxo encontra a segurança estrutural.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    src: "/Obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.40 (1).jpeg",
    alt: "Padrão Neoeng: Onde o luxo encontra a segurança estrutural.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "/Obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (2).jpeg",
    alt: "Padrão Neoeng: Onde o luxo encontra a segurança estrutural.",
    aspectRatio: "aspect-square"
  },
  {
    src: "/Obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (6).jpeg",
    alt: "Padrão Neoeng: Onde o luxo encontra a segurança estrutural.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    src: "/Obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (4).jpeg",
    alt: "Padrão Neoeng: Onde o luxo encontra a segurança estrutural.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "/Obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41.jpeg",
    alt: "Padrão Neoeng: Onde o luxo encontra a segurança estrutural.",
    aspectRatio: "aspect-[4/3]"
  }
];

const brasilImages = [
  {
    src: "/Obras/Casas/Casas Brasil/20201228_083121.jpg",
    alt: "Padrão Neoeng: Engenharia Residencial de Alta Performance.",
    aspectRatio: "aspect-[4/3]"
  },
  {
    src: "/Obras/Casas/Casas Brasil/20231124_181030.jpg",
    alt: "Padrão Neoeng: Engenharia Residencial de Alta Performance.",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "/Obras/Casas/Casas Brasil/DSC_0062.JPG",
    alt: "Padrão Neoeng: Engenharia Residencial de Alta Performance.",
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
  const whatsappLink = "https://wa.me/558598240375?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20modelo%20de%20construção%20por%20administração%20da%20Neoeng%20Private.";

  return (
    <main className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Obras/Casas/Projetos/Casa1.webp"
            alt="Neoeng Private Homes - Engenharia de Luxo"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-transparent mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-start">
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-active-orange animate-pulse" />
            Engenharia Residencial de Alto Padrão
          </div>
          <h1 className="fade-in-up text-5xl md:text-7xl font-light text-white leading-tight max-w-4xl mb-6">
            A Engenharia de Alta Performance <br className="hidden md:block" />
            <span className="font-bold">a serviço do seu lar.</span>
          </h1>
          <p className="fade-in-up text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
            Trazemos a precisão e a tecnologia das grandes obras corporativas para a exclusividade da sua nova residência.
          </p>
          <div className="fade-in-up flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-active-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Consultoria de Alto Padrão
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Modelo de Gestão */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="w-16 h-1 bg-active-orange rounded-full mb-8" />
            <h2 className="text-4xl font-light text-deep-navy leading-tight">
              Construção por Administração: <br />
              <span className="font-black">Transparência Absoluta.</span>
            </h2>
            <div className="text-lg text-deep-navy/70 leading-relaxed space-y-4">
              <p>
                Na Neoeng Private, acreditamos que a construção do seu lar deve ser uma experiência de tranquilidade, não de stress. Operamos no <strong>Modelo de Gestão por Administração</strong>, onde o nosso único interesse é a excelência da sua obra.
              </p>
              <p>
                Você investe no custo real dos materiais e mão de obra, enquanto nós garantimos a gestão técnica rigorosa através de uma taxa fixa. Sem margens ocultas, sem conflito de interesses. Apenas engenharia pura dedicada ao seu projeto.
              </p>
            </div>
            <ul className="space-y-4 mt-8">
              {['Custos 100% abertos e transparentes', 'Acesso direto às notas e negociações', 'Foco total na qualidade da execução'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-deep-navy/80 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-active-orange shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Obras/Casas/Projetos/Casa6.png"
              alt="Modelo de Gestão"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-deep-navy/20" />
          </div>
        </div>
      </section>

      {/* Diferencial Tecnológico */}
      <section className="py-24 bg-deep-navy text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-active-orange/5 mix-blend-screen" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/Obras/Casas/Projetos/acompanhamento-celular.jpg"
              alt="Acompanhamento em tempo real"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="p-4 bg-white/5 inline-block rounded-2xl mb-4 border border-white/10">
              <Eye className="w-8 h-8 text-active-orange" />
            </div>
            <h2 className="text-4xl font-light leading-tight">
              Acompanhamento <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">em Tempo Real.</span>
            </h2>
            <div className="text-lg text-white/70 leading-relaxed space-y-4">
              <p>
                Sinta a segurança de estar presente, mesmo à distância. Através do nosso sistema de <strong>Acompanhamento por Imagens e Relatórios Periódicos</strong>, você monitoriza cada avanço da sua obra diretamente do seu celular.
              </p>
              <p>
                Dados precisos, cronogramas atualizados e a visão clara de que o seu sonho está a ser construído com o rigor que ele merece.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
              <ShieldCheck className="w-12 h-12 text-active-orange" />
              <p className="text-white/90 font-medium">Controle total na palma da sua mão com nossos relatórios de evolução diários.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Projetos */}
      <section ref={galleryRef} className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-deep-navy mb-6">
              Galeria de Projetos Privados
            </h2>
            <p className="text-deep-navy/70 text-lg mb-8">
              Conheça a excelência nos detalhes e o padrão construtivo que define a Neoeng Private.
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
                  <p className="text-white font-medium text-sm leading-snug">
                    "Padrão Neoeng: Onde o luxo encontra a segurança estrutural."
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-deep-navy text-white px-8 py-4 rounded-full font-bold hover:bg-deep-navy/90 transition-colors group"
            >
              Fale com um Especialista
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
