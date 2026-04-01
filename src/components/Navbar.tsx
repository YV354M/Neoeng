"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 inset-x-0 mx-auto z-[60] flex items-center justify-between px-4 md:px-8 py-2 md:py-1 rounded-full w-[95%] max-w-6xl transition-all duration-500 ease-out ${
          isScrolled || mobileMenuOpen
            ? "translate-y-0 opacity-100 bg-deep-navy/95 backdrop-blur-xl border border-white/10 shadow-lg text-white pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="relative h-12 w-32 md:h-16 md:w-56 shrink-0 transition-all flex items-center justify-center">
            {/* Iluminação alinhada perfeitamente atrás da logo */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[90%] md:w-[85%] h-[60%] bg-white/25 blur-[24px] rounded-full pointer-events-none z-0" />
            
            <Image 
              src="/logos_neoeng/horizontal-neoeng.png" 
              alt="Neoeng Instalações" 
              fill 
              className="object-contain object-left relative z-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#especialidades" className="text-sm font-medium hover:-translate-y-[1px] transition-transform">Especialidades</Link>
          <Link href="#diferencial" className="text-sm font-medium hover:-translate-y-[1px] transition-transform">Por Que Nós?</Link>
          <Link href="#autoridade" className="text-sm font-medium hover:-translate-y-[1px] transition-transform">Experiência</Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <a
            href="#orcamento"
            className="relative overflow-hidden group bg-active-orange text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-transform hover:scale-[1.03] active:scale-95 duration-300 whitespace-nowrap"
          >
            <span className="relative z-10 hidden sm:inline">Solicitar Orçamento</span>
            <span className="relative z-10 sm:hidden">Orçamento</span>
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

          <button 
            className="md:hidden p-1.5 text-white hover:text-active-orange transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Dropdown Mobile */}
      <div 
        className={`fixed inset-x-0 top-[72px] mx-auto w-[95%] z-50 transition-all duration-300 ease-out origin-top md:hidden ${
          mobileMenuOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-deep-navy/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl">
          <Link href="#especialidades" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-active-orange transition-colors">Especialidades</Link>
          <hr className="border-white/10" />
          <Link href="#diferencial" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-active-orange transition-colors">Por Que Nós?</Link>
          <hr className="border-white/10" />
          <Link href="#autoridade" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-active-orange transition-colors">Experiência</Link>
        </div>
      </div>
    </>
  );
}
