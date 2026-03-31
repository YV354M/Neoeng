"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Verificar o status inicial da página para caso seja um recarregamento fora do topo
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 inset-x-0 mx-auto z-50 flex items-center justify-between px-8 py-1 rounded-full w-[95%] max-w-6xl transition-all duration-500 ease-out ${
        isScrolled
          ? "translate-y-0 opacity-100 bg-deep-navy/90 backdrop-blur-xl border border-white/10 shadow-lg text-white pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="relative h-20 w-72 shrink-0">
          <Image 
            src="/logos_neoeng/horizontal-neoeng.png" 
            alt="Neoeng Instalações" 
            fill 
            className="object-contain object-left"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="#especialidades" className="text-sm font-medium hover:-translate-y-[1px] transition-transform">Especialidades</Link>
        <Link href="#diferencial" className="text-sm font-medium hover:-translate-y-[1px] transition-transform">Por Que Nós?</Link>
        <Link href="#autoridade" className="text-sm font-medium hover:-translate-y-[1px] transition-transform">Experiência</Link>
      </div>

      <a
        href="#orcamento"
        className="relative overflow-hidden group bg-active-orange text-white px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-[1.03] active:scale-95 duration-300 whitespace-nowrap"
      >
        <span className="relative z-10">Solicitar Orçamento</span>
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      </a>
    </nav>
  );
}
