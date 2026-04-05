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
            Seus E-books Exclusivos
          </h2>
          <p className="text-sm text-off-white/70 mb-6">
            Conforme prometido, baixe agora os materiais exclusivos da Neoeng.
          </p>
          
          <div className="flex flex-col gap-4">
            <a 
              href="/ebooks/Como-evitar-atrasos-retrabalho-e-estouro-de-orcamento-em-obras-de-instalacoes.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-active-orange/90 hover:bg-active-orange text-white font-bold py-3 md:py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors group text-sm md:text-base text-center"
            >
              Como Evitar Atrasos (PDF)
              <Download className="w-5 h-5 flex-shrink-0 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <a 
              href="/ebooks/Execucao-de-obras-de-instalacoes-com-previsibilidade-metodo-controle-e-gestao.pdf" 
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-active-orange/90 hover:bg-active-orange text-white font-bold py-3 md:py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors group text-sm md:text-base text-center"
            >
              Execução com Previsibilidade (PDF)
              <Download className="w-5 h-5 flex-shrink-0 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
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
