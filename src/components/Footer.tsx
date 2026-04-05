import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d1b2a] text-off-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-active-orange/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -ml-24 -mb-24" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            <div className="relative h-44 w-44 -mt-8 transform hover:scale-105 transition-transform duration-500 group flex items-center justify-center">
              {/* Stronger spotlight to highlight the dark blue 'ENG' */}
              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-20 bg-white/15 blur-[35px] rounded-[100%] pointer-events-none z-0" />
              <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-full scale-125 opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
              <div className="absolute inset-8 bg-active-orange/10 blur-[30px] rounded-full opacity-40 pointer-events-none z-0" />
              
              <Image 
                src="/logos_neoeng/vertical_neoeng.png" 
                alt="Neoeng Instalações" 
                fill 
                className="object-contain relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              />
            </div>
            <p className="text-off-white/70 leading-relaxed text-[15px] max-w-sm text-balance">
              Líder em execução de instalações prediais e industriais de alta complexidade. 
              Garantia de rigor técnico, cumprimento de cronograma e tecnologia embarcada.
            </p>
            
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/company/neoeng-engenharia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-active-orange hover:text-white transition-all duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.instagram.com/neoengco/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-active-orange hover:text-white transition-all duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="#especialidades" className="text-off-white/60 hover:text-active-orange transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-active-orange/0 group-hover:bg-active-orange rounded-full transition-all" />Especialidades</Link></li>
              <li><Link href="#diferencial" className="text-off-white/60 hover:text-active-orange transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-active-orange/0 group-hover:bg-active-orange rounded-full transition-all" />O Diferencial Neoeng</Link></li>
              <li><Link href="#autoridade" className="text-off-white/60 hover:text-active-orange transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-active-orange/0 group-hover:bg-active-orange rounded-full transition-all" />Autoridade & Sócios</Link></li>
              <li><Link href="#orcamento" className="text-off-white/60 hover:text-active-orange transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-active-orange/0 group-hover:bg-active-orange rounded-full transition-all" />Solicitar Orçamento</Link></li>
            </ul>
          </div>

          {/* Global Presence */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-xs">Contato & Atendimento</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="w-5 h-5 text-active-orange" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold mb-1">Endereço</p>
                  <p className="text-off-white/60 text-sm leading-relaxed">
                    Av. Antônio Sales 1317, Sala 702<br />
                    Fortaleza - CE, 60135-100
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  <Mail className="w-5 h-5 text-active-orange" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold mb-1">E-mail Corporativo</p>
                  <a href="mailto:contato@neoeng.com.br" className="text-off-white/60 hover:text-white transition-colors text-sm">
                    contato@neoeng.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-[10px] md:text-xs text-off-white/40 tracking-wider">
            © {new Date().getFullYear()} Neoeng Instalações. Todos os direitos reservados.
          </p>
          
          <div className="h-4 w-[1px] bg-white/10 hidden md:block" />

          <a 
            href="http://www.yrmstrategylab.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 group transition-all duration-300 opacity-40 hover:opacity-100"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium text-off-white/80">Powered by</span>
            <div className="relative w-4 h-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image 
                src="/credits/yrm-logo.png" 
                alt="YRM Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-[10px] md:text-[11px] font-bold text-white tracking-wide group-hover:text-active-orange transition-colors">YRM Strategy Lab</span>
          </a>
        </div>

        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          <span className="text-[10px] font-mono text-off-white/60 tracking-wider">SYSTEM OPERATIONAL</span>
        </div>
      </div>
    </footer>
  );
}
