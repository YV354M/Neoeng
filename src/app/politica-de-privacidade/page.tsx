import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-white selection:bg-active-orange selection:text-white flex flex-col">
      <Navbar />
      
      <section className="py-24 md:py-32 relative bg-[#f8fafc] z-10 flex-grow mt-16">
        <div className="absolute inset-0 bg-white/40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.03 }} />
        
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-active-orange hover:text-deep-navy transition-colors mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Voltar para Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-deep-navy mb-4 tracking-tight">Políticas de Privacidade e Cookies</h1>
            <p className="text-deep-navy/50 font-medium">Atualizado em 18 de abril de 2026</p>
          </div>

          <div className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-bold prose-headings:text-deep-navy 
            prose-p:text-deep-navy/80 prose-li:text-deep-navy/80
            prose-a:text-active-orange hover:prose-a:text-deep-navy 
            prose-strong:text-deep-navy
            marker:text-active-orange">
            
            <p className="text-lg leading-relaxed text-deep-navy/80 mb-12 border-l-4 border-active-orange pl-6 bg-white py-6 pr-6 shadow-sm rounded-r-lg">
              A <strong>Neoeng Engenharia</strong>, acessível em www.neoeng.co, valoriza a privacidade dos seus utilizadores e a segurança dos seus dados. Este documento detalha como recolhemos, utilizamos e protegemos as suas informações, em conformidade com as melhores práticas de proteção de dados.
            </p>

            <div className="space-y-16">
              <div className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-active-orange font-mono text-xl bg-active-orange/10 px-3 py-1 rounded-md">01</span> Coleta de Informações
                </h2>
                <p className="mb-6">Recolhemos informações fornecidas voluntariamente através do nosso formulário de contato e pedido de orçamento, incluindo:</p>
                <ul className="list-none space-y-3 mb-8 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-black/5">
                  {[
                    "Nome completo",
                    "Nome da empresa",
                    "E-mail corporativo",
                    "Telefone com WhatsApp",
                    "Preferências de tipos de instalações (Elétrica, Combate a Incêndio, SPDA, Climatização, Automação, etc)",
                    "Escopo do projeto para execução"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-active-orange shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-deep-navy/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-active-orange font-mono text-xl bg-active-orange/10 px-3 py-1 rounded-md">02</span> Utilização dos Dados
                </h2>
                <p className="mb-6">Os dados recolhidos são utilizados exclusivamente para:</p>
                <ul className="list-none space-y-3 mb-8 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-black/5">
                  {[
                    "Elaboração de estudos de viabilidade técnica e orçamentos de execução",
                    "Envio do E-book \"Guia da Execução Eficiente\" e comunicações relacionadas",
                    "Análise interna para melhoria da eficiência operacional e qualidade dos serviços",
                    "Contato direto pela equipe técnica da Neoeng em até 48h úteis"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-active-orange shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-deep-navy/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-active-orange font-mono text-xl bg-active-orange/10 px-3 py-1 rounded-md">03</span> Armazenamento e Segurança
                </h2>
                <p className="leading-relaxed bg-white p-6 md:p-8 rounded-xl shadow-sm border border-black/5">
                  Utilizamos sistemas de gestão integrados (Supabase/n8n) para garantir que os seus dados sejam armazenados de forma segura e organizada. Implementamos medidas técnicas para proteger as informações contra acesso não autorizado, perda ou alteração.
                </p>
              </div>

              <div className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-active-orange font-mono text-xl bg-active-orange/10 px-3 py-1 rounded-md">04</span> Política de Cookies
                </h2>
                <p className="mb-6 leading-relaxed">
                  O site www.neoeng.co utiliza cookies para melhorar a experiência do utilizador e otimizar o desempenho em motores de busca (SEO).
                </p>
                <div className="grid md:grid-cols-2 gap-6 bg-transparent mb-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-deep-navy/5 flex items-center justify-center text-deep-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <h3 className="font-bold text-lg text-deep-navy m-0">Cookies Técnicos</h3>
                    <p className="text-deep-navy/70 text-sm m-0 leading-relaxed">Necessários para o funcionamento principal do formulário e navegação pelo site.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5 flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-deep-navy/5 flex items-center justify-center text-deep-navy">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                    </div>
                    <h3 className="font-bold text-lg text-deep-navy m-0">Cookies de Analítica</h3>
                    <p className="text-deep-navy/70 text-sm m-0 leading-relaxed">Utilizados para monitorizar o tráfego do site e entender como os visitantes interagem com o nosso conteúdo.</p>
                  </div>
                </div>
                <p className="leading-relaxed mt-6">O utilizador pode gerir ou desativar os cookies nas definições do seu navegador a qualquer momento.</p>
              </div>

              <div className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-active-orange font-mono text-xl bg-active-orange/10 px-3 py-1 rounded-md">05</span> Partilha de Informações
                </h2>
                <p className="leading-relaxed bg-white p-6 md:p-8 rounded-xl shadow-sm border border-black/5">
                  A Neoeng não comercializa dados pessoais. As informações podem ser partilhadas apenas com parceiros técnicos e escritórios de projetos de engenharia que colaborem diretamente na execução do seu escopo, sob compromisso de confidencialidade.
                </p>
              </div>

              <div className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-active-orange font-mono text-xl bg-active-orange/10 px-3 py-1 rounded-md">06</span> Seus Direitos
                </h2>
                <p className="leading-relaxed bg-white p-6 md:p-8 rounded-xl shadow-sm border border-black/5">
                  O utilizador tem o direito de solicitar o acesso, a retificação ou a eliminação dos seus dados pessoais, bem como a revogação do consentimento para comunicações de marketing.
                </p>
              </div>
            </div>
            
            <div className="mt-20 flex justify-center">
              <Link href="/" className="px-8 py-4 bg-deep-navy text-white rounded-lg hover:bg-deep-navy/90 hover:shadow-lg transition-all font-semibold flex items-center gap-2">
                Aceitar e Voltar para a Navegação
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
