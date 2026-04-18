"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for text elements
      gsap.fromTo(
        ".reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15, delay: 0.4 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center pb-12 pt-20 px-6 md:px-12 overflow-hidden bg-deep-navy"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-deep-navy/40" />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col items-start text-white">
          <div className="reveal mb-6 md:mb-8 w-full">
            <div className="relative h-32 md:h-52 w-[340px] md:w-[680px]">
              <Image
                src="/logos_neoeng/horizontal-neoeng.png"
                alt="Neoeng Engenharia Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-balance reveal">
            Neoeng Engenharia:<br />
            Execução de Projetos com <span className="italic font-serif font-light text-active-orange">Rigor e Tecnologia.</span>
          </h1>

          <p className="text-lg md:text-xl text-off-white/80 max-w-2xl mb-10 text-balance reveal">
            Transformamos projetos complexos em infraestrutura de alta performance. Especialistas em execução de instalações com metodologia Lean Construction e análise preditiva via IA.
          </p>

          <div className="flex flex-wrap gap-4 items-center reveal">
            <a
              href="#orcamento"
              className="group relative overflow-hidden bg-active-orange text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-[1.03] transition-transform duration-300"
            >
              <span className="relative z-10">Solicitar Orçamento de Execução</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
          </div>
        </div>

        {/* Lead Magnet Highlight Panel */}
        <div className="lg:col-span-4 self-end reveal">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-active-orange/50 transition-colors">
            {/* Subtle glow effect */}
            <div className="absolute -inset-10 bg-active-orange/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="bg-active-orange text-white text-xs font-bold tracking-wider uppercase px-2 py-1 rounded inline-block mb-4">
                Material Exclusivo
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                Acervo de Engenharia Neoeng
              </h3>
              <p className="text-sm text-off-white/60 mb-6">
                Baixe nossos 2 E-books exclusivos e descubra como garantir previsibilidade e evitar atrasos em obras de instalações.
              </p>

              <a href="#orcamento" className="flex items-center gap-2 text-active-orange font-medium hover:text-white transition-colors">
                <Download className="w-4 h-4" />
                <span>Baixar Gratuitamente</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
