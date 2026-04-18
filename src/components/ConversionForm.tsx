"use client";

import { useState } from "react";
import { ArrowRight, Download, ShieldCheck, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormData } from "@/lib/validations/lead";
import { useRouter } from "next/navigation";

export default function ConversionForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      services: [],
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setServerError("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ocorreu um erro ao enviar seus dados. Tente novamente.");
      }

      router.push("/obrigado");
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Erro desconhecido");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orcamento" className="py-24 bg-concrete-gray">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-black/5">
          
          {/* Form Context & Lead Magnet */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-deep-navy mb-4">
              Precisando de Rigor na Execução da Obra?
            </h2>
            <p className="text-deep-navy/70 mb-8 leading-relaxed">
              Deixe os riscos para trás. A Neoeng Engenharia garante cumprimento de cronograma com tecnologia e previsibilidade.
            </p>

            <div className="bg-deep-navy text-white rounded-2xl p-8 relative overflow-hidden group mb-8 lg:mb-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-active-orange/20 to-transparent" />
              
              <div className="relative z-10">
                <ShieldCheck className="w-10 h-10 text-active-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">Bônus: 2 E-books Exclusivos</h3>
                <p className="text-sm text-off-white/80 mb-6">
                  Ao solicitar seu orçamento, você ganha acesso imediato aos nossos guias de <strong>Previsibilidade e Prevenção de Atrasos em Instalações Complexas</strong>.
                </p>
                <div className="flex items-center gap-2 text-active-orange font-medium text-sm">
                  <Download className="w-4 h-4" />
                  <span>Incluídos no contato inicial</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form itself */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              
              {serverError && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
                  {serverError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-bold text-deep-navy">Nome Completo</label>
                  <input 
                    {...register("name")}
                    type="text" 
                    id="name" 
                    placeholder="João Silva" 
                    className={`px-4 py-3 bg-concrete-gray/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${errors.name ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-bold text-deep-navy">E-mail Corporativo</label>
                  <input 
                    {...register("email")}
                    type="email" 
                    id="email" 
                    placeholder="joao@empresa.com.br" 
                    className={`px-4 py-3 bg-concrete-gray/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${errors.email ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-bold text-deep-navy">Nome da Empresa</label>
                  <input 
                    {...register("company")}
                    type="text" 
                    id="company" 
                    placeholder="Neoeng S.A." 
                    className={`px-4 py-3 bg-concrete-gray/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${errors.company ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.company && <span className="text-red-500 text-xs font-medium">{errors.company.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="whatsapp" className="text-sm font-bold text-deep-navy">WhatsApp</label>
                  <input 
                    {...register("whatsapp")}
                    type="tel" 
                    id="whatsapp" 
                    placeholder="(85) 99999-9999" 
                    className={`px-4 py-3 bg-concrete-gray/30 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${errors.whatsapp ? 'border-red-500' : 'border-black/10'}`}
                  />
                  {errors.whatsapp && <span className="text-red-500 text-xs font-medium">{errors.whatsapp.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-deep-navy">Tipo de Obra (Especialidades)</label>
                <div className="flex flex-wrap gap-3 mt-1">
                  {["Elétrica", "Incêndio", "SPDA", "Climatização", "Automação", "Energia Solar", "Estrutura", "Dados", "Hidrossanitário", "Piscina", "Outros"].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        {...register("services")}
                        type="checkbox" 
                        value={item}
                        className="w-4 h-4 text-active-orange rounded border-black/20 focus:ring-active-orange" 
                      />
                      <span className="text-sm text-deep-navy/80 group-hover:text-deep-navy font-medium transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
                {errors.services && <span className="text-red-500 text-xs font-medium">{errors.services.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-sm font-bold text-deep-navy">Prazo estimado</label>
                <div className="flex flex-wrap gap-3 mt-1">
                  {["Até 30 dias", "30 - 60 dias", "60 - 90 dias", "Mais de 90 dias"].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        {...register("timeline")}
                        type="radio" 
                        value={item}
                        className="w-4 h-4 text-active-orange border-black/20 focus:ring-active-orange" 
                      />
                      <span className="text-sm text-deep-navy/80 group-hover:text-deep-navy font-medium transition-colors">{item}</span>
                    </label>
                  ))}
                </div>
                {errors.timeline && <span className="text-red-500 text-xs font-medium">{errors.timeline.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <label htmlFor="details" className="text-sm font-bold text-deep-navy">Escopo ou Detalhes (Opcional)</label>
                <textarea 
                  {...register("details")}
                  id="details" 
                  rows={4} 
                  placeholder="Fale brevemente sobre o escopo, metragem ou localização da obra..." 
                  className="px-4 py-3 bg-concrete-gray/30 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative overflow-hidden bg-active-orange text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300 mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      Solicitar Orçamento
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                {!isSubmitting && <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
