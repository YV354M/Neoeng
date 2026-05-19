"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrainCircuit, CalendarCheck, Shield, Eye, TrendingDown, CheckCircle, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const diffs = [
  {
    icon: BrainCircuit,
    title: "Planejamento Executivo",
    desc: "Detalhamento completo de projetos, cronogramas e fluxos de montagem antes do início da obra física para evitar retrabalhos."
  },
  {
    icon: CalendarCheck,
    title: "Controle de Prazo e Custo",
    desc: "Monitoramento constante com reporte periódico ao cliente, focando em previsibilidade financeira e cumprimento do cronograma."
  },
  {
    icon: Shield,
    title: "Gestão Técnica de Campo",
    desc: "Coordenação de equipes e supervisão direta de engenharia em campo para compatibilização de disciplinas e controle de qualidade."
  },
  {
    icon: Eye,
    title: "Tecnologia e Transparência",
    desc: "Acesso direto a relatórios integrados sobre o andamento físico e financeiro da obra com modelo de custos transparentes."
  },
  {
    icon: TrendingDown,
    title: "Lean Construction",
    desc: "Aplicação de metodologias ágeis e enxutas para otimização de processos e redução sistemática de desperdícios de materiais e tempo."
  }
];

export default function Differentiator() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".diff-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="diferencial" ref={sectionRef} className="py-24 bg-concrete-gray relative overflow-hidden">
      {/* Decorative gradient element */}
      <div className="absolute -top-1/2 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-deep-navy mb-6 text-balance">
            Por que escolher a Neoeng?
          </h2>
          <p className="text-lg text-deep-navy/80 mb-10 max-w-xl text-balance">
            Segurança técnica e controle operacional. Garantimos que sua obra seja executada sob rígidos padrões de engenharia com total visibilidade de custos e cronograma.
          </p>

          <div className="space-y-6">
            {diffs.map((item, id) => {
              const Icon = item.icon;
              return (
                <div key={id} className="diff-item flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-deep-navy text-active-orange flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-navy mb-1">{item.title}</h3>
                    <p className="text-deep-navy/70 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative h-[600px] w-full rounded-3xl diff-item">
          {/* Imagem de Fundo (Engenheiro com Tablet) */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy via-deep-navy/30 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2000&auto=format&fit=crop"
              alt="Engenheira usando tablet digital na obra"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
            />
            {/* Tag inferior */}
            <div className="absolute bottom-10 left-10 right-10 z-20">
              <div className="bg-deep-navy/60 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-white font-medium text-sm tracking-wide">GESTÃO OPERACIONAL</span>
                </div>
                <p className="text-white/90 text-sm">
                  Planejamento tático de campo e controle de avanço físico atualizados diariamente na nuvem para máxima previsibilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Widget Flutuante: Gráfico de Gantt */}
          <div className="absolute top-12 -left-6 md:-left-12 bg-deep-navy/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-30 hidden sm:block hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-active-orange" />
              <div className="text-white text-xs font-bold uppercase tracking-wider">Cronograma Executivo</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-20 text-white/70 text-xs font-medium">Infraestrutura</div>
                <div className="w-32 h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-green-400 rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 text-white/70 text-xs font-medium">Instalações</div>
                <div className="w-32 h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-active-orange rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 text-white/70 text-xs font-medium">Acabamento</div>
                <div className="w-32 h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[30%] h-full bg-blue-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Widget Flutuante: Indicador de Qualidade */}
          <div className="absolute top-48 -right-6 md:-right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-30 hidden sm:flex items-center gap-4 hover:-translate-y-2 transition-transform duration-500">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex flex-col items-center justify-center border border-green-500/50 shrink-0">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-white font-black text-xl">Previsível</div>
              <div className="text-white/70 text-xs uppercase tracking-wider font-semibold">Controle de Riscos</div>
            </div>
          </div>

          {/* Widget Flutuante: Indicador de Prazo */}
          <div className="absolute top-10 right-6 md:right-10 bg-deep-navy/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-30 hidden sm:flex items-center gap-4 hover:-translate-y-2 transition-transform duration-500 delay-100">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex flex-col items-center justify-center border border-blue-500/50 shrink-0">
              <CalendarCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-black text-lg">Controlada</div>
              <div className="text-white/70 text-[10px] uppercase tracking-wider font-semibold">Previsão de Entrega</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
