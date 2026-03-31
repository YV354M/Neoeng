import Link from "next/link";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-deep-navy text-white px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full animate-ping bg-green-500/20" />
            <CheckCircle2 className="w-10 h-10 text-green-500 relative z-10" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
          Solicitação Recebida<br />
          <span className="text-active-orange">com Sucesso!</span>
        </h1>

        <p className="text-lg text-off-white/80 mb-10 leading-relaxed">
          Nossa equipe técnica já está analisando as informações da sua obra. Entraremos em contato via WhatsApp nas próximas 24 horas úteis.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
            <Download className="w-6 h-6 text-active-orange" />
            Seu E-book Exclusivo
          </h2>
          <p className="text-sm text-off-white/70 mb-6">
            Conforme prometido, baixe agora o <strong>Guia de Mitigação de Riscos em Instalações Complexas</strong>.
          </p>
          
          <button 
            type="button" 
            className="w-full bg-active-orange/90 hover:bg-active-orange text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors group"
          >
            Baixar E-book (PDF)
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-xs text-white/40 mt-3">
            O documento será disponibilizado em breve.
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium border-b border-transparent hover:border-white pb-1"
        >
          Voltar para a página inicial
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
