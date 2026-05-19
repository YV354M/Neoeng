"use client";

import { useState } from "react";
import { ArrowRight, Download, Loader2, ShieldCheck, Sparkles } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadFormData } from "@/lib/validations/lead";
import { useRouter } from "next/navigation";

type LeadAssessmentFormProps = {
  source: "home" | "private-homes";
  eyebrowTitle: string;
  title: string;
  description: string;
  submitLabel?: string;
  theme?: "light" | "dark";
  sectionId?: string;
};

const projectOptions = [
  "Residência de Alto Padrão",
  "Reforma Residencial Premium",
  "Loja / Restaurante / Clínica / Escritório",
  "Galpão / Indústria / Pátio Logístico",
  "Instalações Elétricas",
  "SPDA / Aterramento",
  "Combate a Incêndio",
  "Climatização / HVAC",
  "Energia Solar",
  "Automação",
  "Hidrossanitário",
  "Obra Civil / Estrutura / Acabamento",
  "Ainda não sei classificar",
  "Outro",
] as const;

const stageOptions = [
  "Ideia inicial",
  "Terreno ou imóvel definido",
  "Projeto arquitetônico em andamento",
  "Projeto arquitetônico pronto",
  "Projetos complementares em andamento",
  "Projetos executivos prontos",
  "Orçamento em andamento",
  "Obra já iniciada",
  "Obra parada / com problema",
  "Preciso de avaliação técnica para entender por onde começar",
] as const;

const serviceOptions = [
  "Construção completa",
  "Reforma",
  "Execução parcial de serviços",
  "Instalações técnicas",
  "Orçamento para obra",
  "Gestão / administração de obra",
  "Manutenção ou retrofit",
  "Ainda não sei",
] as const;

const areaOptions = [
  "Até 100 m²",
  "101 a 250 m²",
  "251 a 500 m²",
  "501 a 1.000 m²",
  "Acima de 1.000 m²",
  "Não sei informar",
] as const;

const timelineOptions = [
  "Imediato",
  "Em até 30 dias",
  "Em 1 a 3 meses",
  "Em 3 a 6 meses",
  "Acima de 6 meses",
  "Ainda estou planejando",
] as const;

const investmentOptions = [
  "Até R$ 100 mil",
  "R$ 100 mil a R$ 300 mil",
  "R$ 300 mil a R$ 700 mil",
  "R$ 700 mil a R$ 1,5 milhão",
  "Acima de R$ 1,5 milhão",
  "Ainda não tenho estimativa",
  "Prefiro não informar",
] as const;

export default function LeadAssessmentForm({
  source,
  eyebrowTitle,
  title,
  description,
  submitLabel = "Solicitar Avaliação Técnica",
  theme = "light",
  sectionId = "orcamento",
}: LeadAssessmentFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const isDark = theme === "dark";
  const labelClass = isDark ? "text-white/95" : "text-deep-navy";
  const inputClass = isDark
    ? "bg-white border-white/10 text-deep-navy"
    : "bg-concrete-gray/30 border-black/10 text-deep-navy";
  const errorClass = isDark ? "text-red-400" : "text-red-500";
  const panelClass = isDark
    ? "bg-deep-navy text-white shadow-2xl"
    : "bg-white text-deep-navy shadow-2xl border border-black/5";

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      source,
      name: "",
      whatsapp: "",
      email: "",
      location: "",
      projectCategory: "",
      currentStage: "",
      requestedServices: [],
      approximateArea: "",
      timeline: "",
      details: "",
      investmentRange: "",
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

  const renderSelect = (
    id: keyof LeadFormData,
    label: string,
    placeholder: string,
    options: readonly string[],
    required = true,
  ) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={`text-sm font-bold ${labelClass}`}>
        {label} {required && <span className="text-active-orange">*</span>}
      </label>
      <select
        {...register(id)}
        id={id}
        className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${inputClass} ${
          errors[id] ? "border-red-500" : ""
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[id] && <span className={`text-xs font-medium ${errorClass}`}>{String(errors[id]?.message ?? "")}</span>}
    </div>
  );

  return (
    <section id={sectionId} className={`py-24 ${isDark ? "bg-white" : "bg-concrete-gray"}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 rounded-3xl p-8 md:p-12 ${panelClass} relative overflow-hidden`}>
          {isDark && <div className="absolute inset-0 bg-gradient-to-tr from-active-orange/10 to-transparent pointer-events-none" />}

          <div className="relative z-10 flex flex-col gap-8">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] ${isDark ? "bg-white/10 text-white/75 border border-white/10" : "bg-deep-navy/5 text-deep-navy/60 border border-deep-navy/10"}`}>
                <Sparkles className="w-3.5 h-3.5 text-active-orange" />
                {eyebrowTitle}
              </div>
              <h2 className={`mt-5 text-3xl md:text-4xl font-black leading-tight ${isDark ? "text-white" : "text-deep-navy"}`}>
                {title}
              </h2>
              <p className={`mt-4 leading-relaxed ${isDark ? "text-white/72" : "text-deep-navy/70"}`}>
                {description}
              </p>
            </div>

            <div className={`rounded-2xl p-7 ${isDark ? "bg-white/5 border border-white/10" : "bg-deep-navy text-white"}`}>
              <ShieldCheck className="w-10 h-10 text-active-orange mb-4" />
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-white"}`}>E-books liberados após o envio</h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-white/72" : "text-off-white/80"}`}>
                A confirmação continua com os dois materiais para download, sem alterar o fluxo atual de captação.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-active-orange text-sm font-semibold">
                <Download className="w-4 h-4" />
                Disponível na tela de confirmação
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input type="hidden" {...register("source")} value={source} />

              {serverError && (
                <div className={`${isDark ? "bg-red-500/10 border-red-500/20 text-red-400" : "bg-red-50 border-red-100 text-red-600"} p-4 rounded-xl text-sm font-medium border`}>
                  {serverError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className={`text-sm font-bold ${labelClass}`}>Nome <span className="text-active-orange">*</span></label>
                  <input {...register("name")} id="name" type="text" placeholder="Seu nome" className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${inputClass} ${errors.name ? "border-red-500" : ""}`} />
                  {errors.name && <span className={`text-xs font-medium ${errorClass}`}>{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="whatsapp" className={`text-sm font-bold ${labelClass}`}>WhatsApp <span className="text-active-orange">*</span></label>
                  <input {...register("whatsapp")} id="whatsapp" type="tel" placeholder="(00) 00000-0000" className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${inputClass} ${errors.whatsapp ? "border-red-500" : ""}`} />
                  {errors.whatsapp && <span className={`text-xs font-medium ${errorClass}`}>{errors.whatsapp.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={`text-sm font-bold ${labelClass}`}>E-mail <span className="text-active-orange">*</span></label>
                  <input {...register("email")} id="email" type="email" placeholder="seuemail@email.com" className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${inputClass} ${errors.email ? "border-red-500" : ""}`} />
                  {errors.email && <span className={`text-xs font-medium ${errorClass}`}>{errors.email.message}</span>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="location" className={`text-sm font-bold ${labelClass}`}>Cidade / Local da obra <span className="text-active-orange">*</span></label>
                  <input {...register("location")} id="location" type="text" placeholder="Ex.: Fortaleza/CE, Eusébio/CE, Pecém/CE" className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow ${inputClass} ${errors.location ? "border-red-500" : ""}`} />
                  {errors.location && <span className={`text-xs font-medium ${errorClass}`}>{errors.location.message}</span>}
                </div>
              </div>

              {renderSelect("projectCategory", "Tipo de projeto ou obra", "Selecione o tipo de projeto ou obra", projectOptions)}
              {renderSelect("currentStage", "Estágio atual do projeto", "Selecione o estágio atual", stageOptions)}

              <div className="flex flex-col gap-2">
                <span className={`text-sm font-bold ${labelClass}`}>Qual serviço você busca? <span className="text-active-orange">*</span></span>
                <Controller
                  name="requestedServices"
                  control={control}
                  render={({ field }) => (
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl p-4 ${isDark ? "bg-white/5 border border-white/10" : "bg-concrete-gray/20 border border-black/5"}`}>
                      {serviceOptions.map((option) => {
                        const checked = field.value.includes(option);
                        return (
                          <label key={option} className={`flex items-start gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${checked ? "border-active-orange bg-active-orange/10" : isDark ? "border-white/10 bg-white/5" : "border-black/5 bg-white"}`}>
                            <input
                              type="checkbox"
                              className="mt-1 accent-orange-500"
                              checked={checked}
                              onChange={(event) => {
                                const next = event.target.checked
                                  ? [...field.value, option]
                                  : field.value.filter((item) => item !== option);
                                field.onChange(next);
                              }}
                            />
                            <span className={`text-sm leading-snug ${isDark ? "text-white/90" : "text-deep-navy"}`}>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                />
                {errors.requestedServices && <span className={`text-xs font-medium ${errorClass}`}>{errors.requestedServices.message}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {renderSelect("approximateArea", "Área aproximada da obra", "Opcional", areaOptions, false)}
                {renderSelect("timeline", "Prazo desejado para início", "Selecione o prazo", timelineOptions)}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className={`text-sm font-bold ${labelClass}`}>Descreva brevemente o que você precisa <span className="text-active-orange">*</span></label>
                <textarea
                  {...register("details")}
                  id="details"
                  rows={5}
                  placeholder="Ex.: construção de casa em condomínio, reforma de loja, execução elétrica, SPDA em galpão, orçamento para obra comercial, avaliação de projeto etc."
                  className={`px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-active-orange/50 transition-shadow resize-none ${inputClass} ${errors.details ? "border-red-500" : ""}`}
                />
                {errors.details && <span className={`text-xs font-medium ${errorClass}`}>{errors.details.message}</span>}
              </div>

              {renderSelect("investmentRange", "Faixa estimada de investimento", "Opcional", investmentOptions, false)}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative overflow-hidden bg-active-orange text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      {submitLabel}
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
