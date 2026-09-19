"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadAssessmentForm from "@/components/LeadAssessmentForm";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Calculator,
  Check,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  FileText,
  Handshake,
  HardHat,
  Home as HomeIcon,
  Landmark,
  Layers,
  Presentation,
  Smartphone,
  WalletCards,
} from "lucide-react";

const contactBlocks = [
  {
    icon: Handshake,
    title: "Parceria com arquitetos",
    copy: "Conectamos você a arquitetos parceiros para personalizar e assinar o projeto da sua casa.",
    variant: "icon",
  },
  {
    icon: Layers,
    title: "Projetos complementares",
    copy: "Projetos elétrico, hidráulico, estrutural e demais complementares, compatibilizados entre si.",
    variant: "icon",
  },
  {
    icon: Calculator,
    title: "Orçamento da obra antes da aprovação",
    copy: "Você aprova a construção já sabendo o custo real, sem surpresas no meio do caminho.",
    variant: "icon",
  },
  {
    icon: Factory,
    title: "Insumos mais baratos, direto de fábrica",
    copy: "Compra de materiais com condições de fábrica, repassadas integralmente a você.",
    variant: "icon",
  },
  {
    icon: Landmark,
    title: "Parceria com Correspondente da Caixa",
    copy: "Atenção dedicada ao financiamento da sua construção, do início à liberação dos recursos.",
    variant: "photo",
    image: "/assets/neohouse/caixa-logo.png",
    imageAlt: "Correspondente Caixa",
    imageFit: "contain" as const,
  },
  {
    icon: Smartphone,
    title: "Acompanhamento pelo App NeoFlow",
    copy: "Evolução física e financeira da obra, com fotos em tempo real.",
    variant: "photo",
    image: "/assets/neohouse/app-neoflow-planta.svg",
    imageAlt: "App NeoFlow — planta da casa com áreas concluídas e pendentes da obra",
    imageFit: "cover" as const,
  },
  {
    icon: ClipboardCheck,
    title: "Checklist de qualidade na entrega",
    copy: "Cada etapa da obra é validada por um checklist técnico, até a entrega das chaves.",
    variant: "banner",
  },
] as const;

const problemCards = [
  { icon: WalletCards, title: "Custo real", copy: "Dificuldade para saber quanto a casa realmente vai custar, do projeto ao acabamento." },
  { icon: HardHat, title: "Execução previsível", copy: "A Neoeng trabalha com sistemas construtivos, equipamentos e tecnologia próprios para dar previsibilidade de prazo, custo e qualidade." },
  { icon: Presentation, title: "Evolução", copy: "Falta de clareza sobre o avanço físico e financeiro da obra." },
] as const;

const journey = [
  "Escolha do lote ou identificação do terreno do cliente",
  "Análise das regras e características do lote",
  "Seleção do modelo NeoHouse",
  "Escolha das opções de personalização",
  "Desenvolvimento e compatibilização dos projetos",
  "Orçamento, cronograma e organização documental",
  "Estruturação e acompanhamento do financiamento",
  "Início da obra, conduzida pela equipe própria da Neoeng",
  "Acompanhamento físico-financeiro pelo App NeoFlow",
  "Organização da entrega e documentação final",
] as const;

const houseModels = [
  { name: "Essencial", type: "Casa plana", copy: "Todos os ambientes em um único pavimento, com praticidade, integração e conforto.", image: "/assets/neohouse/house-essencial.webp" },
  { name: "Horizonte", type: "Térreo + 1 sem rooftop", copy: "Dois pavimentos completos, com mais espaço, privacidade e presença arquitetônica.", image: "/assets/neohouse/house-horizonte.webp" },
  { name: "Mirante", type: "Térreo + 1 com varanda gourmet integrada", copy: "Casa predominantemente térrea, com ampla varanda gourmet no pavimento superior e um cômodo fechado recuado ao fundo.", image: "/assets/neohouse/house-mirante.png" },
  { name: "Signature", type: "Térreo + 1 com rooftop superior", copy: "Dois pavimentos e um rooftop aberto acima, criando uma área adicional de lazer e contemplação.", image: "/assets/neohouse/house-signature.webp" },
] as const;

const trackingMetrics = [
  "Percentual físico executado",
  "Valor contratado",
  "Valor pago",
  "Valor comprometido",
  "Saldo disponível",
  "Projeção de conclusão",
  "Etapas atrasadas",
  "Pontos de atenção",
  "Documentos pendentes",
  "Histórico de decisões e alterações",
] as const;

const documentationItems = [
  "Aprovação dos projetos",
  "Alvarás e autorizações",
  "ARTs e RRTs dos profissionais responsáveis",
  "Contratos e documentos do financiamento",
  "Orçamentos, cronogramas, medições e registros",
  "Habite-se e documentação de conclusão",
  "Manuais, garantias e documentos da entrega",
] as const;

const adminHighlights = [
  "Relatórios mensais de conciliação financeira e física.",
  "Cotações e compras de materiais diretas em nome do cliente, com repasse integral de descontos comerciais.",
  "Cronogramas executivos atualizados com identificação preventiva de gargalos.",
] as const;

const profiles = [
  { title: "Proprietários Exigentes", desc: "Quem busca controle minucioso de custos, fidelidade absoluta ao projeto e atenção obsessiva aos detalhes de acabamento." },
  { title: "Investidores Residenciais", desc: "Quem exige alta performance financeira, cronogramas previsíveis e qualidade que valoriza o metro quadrado para revenda imediata." },
  { title: "Arquitetos e Designers", desc: "Parceiros que buscam uma construtora com rigor de engenharia capaz de tirar do papel layouts complexos sem desvios estruturais." },
] as const;

const brasilImages = [
  { src: "/obras/Casas/Casas Brasil/20201228_083121.jpg", alt: "Referência Técnica: Projetos residenciais no Brasil liderados pelos sócios.", aspectRatio: "aspect-[4/3]" },
  { src: "/obras/Casas/Casas Brasil/20231124_181030.jpg", alt: "Referência Técnica: Gestão de montagem e controle de prazo em obras premium.", aspectRatio: "aspect-[3/4]" },
  { src: "/obras/Casas/Casas Brasil/DSC_0062.JPG", alt: "Referência Técnica: Conclusão de estruturas residenciais complexas.", aspectRatio: "aspect-square" },
];

const privateImages = [
  { src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (11).jpeg", alt: "Referência Técnica: Execução Residencial de Alto Padrão - Detalhes Estruturais", aspectRatio: "aspect-[4/3]" },
  { src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.40 (1).jpeg", alt: "Referência Técnica: Execução Residencial de Alto Padrão - Compatibilização de Projeto", aspectRatio: "aspect-[3/4]" },
  { src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (2).jpeg", alt: "Referência Técnica: Execução Residencial de Alto Padrão - Acabamento Fino", aspectRatio: "aspect-square" },
  { src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (6).jpeg", alt: "Referência Técnica: Execução Residencial de Alto Padrão - Conectividade de Instalações", aspectRatio: "aspect-[4/3]" },
  { src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41 (4).jpeg", alt: "Referência Técnica: Execução Residencial de Alto Padrão - Gestão Construtiva", aspectRatio: "aspect-[3/4]" },
  { src: "/obras/Casas/Casa USA/WhatsApp Image 2026-05-06 at 22.05.41.jpeg", alt: "Referência Técnica: Execução Residencial de Alto Padrão - Estrutura de Concreto", aspectRatio: "aspect-[4/3]" },
];

const clientLogos = [
  { src: "/logos_clientes/mcdonalds.png", alt: "McDonalds" },
  { src: "/logos_clientes/kfc-logo_1678128805.png", alt: "KFC" },
  { src: "/logos_clientes/nike-logo.png", alt: "Nike" },
  { src: "/logos_clientes/riachuelo.jpg", alt: "Riachuelo" },
  { src: "/logos_clientes/logo-bradesco-hero.png", alt: "Bradesco" },
  { src: "/logos_clientes/beachpark.png", alt: "Beach Park" },
  { src: "/logos_clientes/centauro.png", alt: "Centauro" },
  { src: "/logos_clientes/AMERICANAS.png", alt: "Americanas" },
  { src: "/logos_clientes/alifenino.png", alt: "Alife Nino" },
  { src: "/logos_clientes/logo_grupo-gav_kcywwW.png", alt: "Gav Resorts" },
  { src: "/logos_clientes/adidas-logo-1971.jpg", alt: "Adidas" },
];

const commercialPhotos = [
  { src: "/obras/Comercial/Select/Loja_Nike.jpeg", alt: "Acervo comercial Neoeng - Loja Nike" },
  { src: "/obras/Comercial/Select/Loja_Centauro.JPG", alt: "Acervo comercial Neoeng - Loja Centauro" },
  { src: "/obras/Comercial/Select/Loja_Riachuelo.jpeg", alt: "Acervo comercial Neoeng - Loja Riachuelo" },
  { src: "/obras/Comercial/Select/Gav_Resorts.jpeg", alt: "Acervo comercial Neoeng - Gav Resorts" },
];

export default function PrivateHomes() {
  const heroRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"brasil" | "usa">("brasil");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-in-up", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" });

      gsap.fromTo(
        ".nh-contact-block",
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: layersRef.current, start: "top 78%", toggleActions: "play none none reverse" },
        },
      );

      gsap.fromTo(
        ".gallery-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: galleryRef.current, start: "top 80%", toggleActions: "play none none reverse" },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const currentImages = activeTab === "brasil" ? brasilImages : privateImages;

  return (
    <main className="neohouse-page flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="nh-hero" id="inicio">
        <div className="nh-hero-image">
          <Image src="/assets/neohouse/hero-house.webp" alt="Residência de alto padrão NeoHouse" fill priority className="object-cover" />
        </div>
        <div className="nh-hero-overlay" />
        <div className="nh-hero-grid">
          <div className="nh-hero-copy">
            <span className="nh-eyebrow fade-in-up"><HomeIcon size={15} /> NeoHouse — Casas de Alto Padrão Neoeng</span>
            <h1 className="fade-in-up">Do lote às chaves,<br /><em>com clareza em cada decisão.</em></h1>
            <p className="fade-in-up">Escolha seu projeto, personalize os acabamentos, organize o financiamento e acompanhe a construção em uma única jornada.</p>
            <p className="fade-in-up">A Neoeng leva para a construção residencial premium a disciplina técnica de obras comerciais e complexas, garantindo controle de custos e conformidade de projetos.</p>
            <div className="nh-hero-actions fade-in-up">
              <a className="nh-button nh-button-gold" href="#avaliacao-residencial">Quero construir minha casa <ArrowRight size={18} /></a>
              <a className="nh-button nh-button-ghost" href="#jornada">Conheça a jornada NeoHouse</a>
            </div>
          </div>
          <aside className="nh-hero-proof fade-in-up">
            <span>Jornada NeoHouse</span>
            <strong>Projeto, obra e entrega sob um só time.</strong>
            <ul>
              <li><Check size={16} /> Projetos</li>
              <li><Check size={16} /> Orçamento assertivo</li>
              <li><Check size={16} /> Financiamento do Terreno e Obra</li>
              <li><Check size={16} /> Execução com qualidade e previsibilidade de prazo e custo</li>
              <li><Check size={16} /> Acompanhamento em tempo real via App NeoFlow</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="nh-signal-strip">
        <div><DraftingCompass /><span><b>Projetos</b> adequados ao lote</span></div>
        <div><HardHat /><span><b>Execução</b> com previsibilidade de prazo e custo</span></div>
        <div><Smartphone /><span><b>Clareza</b> sobre avanço e pagamentos</span></div>
      </section>

      {/* O desafio de quem vai construir */}
      <section className="nh-section">
        <div className="nh-section-head">
          <span className="nh-kicker">O desafio de quem vai construir</span>
          <h2>Construir uma casa não deveria ser um salto no escuro.</h2>
          <p>Depois da compra do lote, surgem decisões sobre projeto, orçamento, documentação, financiamento, fornecedores, pagamentos e qualidade. A NeoHouse organiza essa jornada e coloca a própria Neoeng à frente da execução, do primeiro projeto à entrega das chaves.</p>
        </div>
        <div className="nh-problem-grid">
          {problemCards.map(({ icon: Icon, title, copy }) => (
            <article key={title}><Icon /><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      {/* Tudo em um só contato */}
      <section className="nh-section" id="servicos" ref={layersRef}>
        <div className="nh-section-head nh-center-head">
          <span className="nh-kicker">NeoHouse</span>
          <h2>Tudo em um só contato.</h2>
        </div>
        <div className="nh-contact-grid">
          {contactBlocks.map(({ icon: Icon, title, copy, variant, ...rest }) => {
            const image = "image" in rest ? rest.image : undefined;
            const imageAlt = "imageAlt" in rest ? rest.imageAlt : title;
            const imageFit = "imageFit" in rest ? rest.imageFit : "cover";
            if (variant === "banner") {
              return (
                <article className="nh-contact-block nh-contact-banner" key={title}>
                  <span className="nh-contact-icon"><Icon /></span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              );
            }
            if (variant === "photo" && image) {
              return (
                <article className="nh-contact-block nh-contact-photo" key={title}>
                  <div className="nh-contact-media">
                    <Image src={image} alt={imageAlt} fill style={{ objectFit: imageFit }} sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <div className="nh-contact-photo-body">
                    <span className="nh-contact-icon"><Icon /></span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              );
            }
            return (
              <article className="nh-contact-block" key={title}>
                <span className="nh-contact-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Acompanhamento Físico-Financeiro */}
      <section className="nh-tracking-section" id="acompanhamento">
        <div className="nh-tracking-header">
          <span className="nh-kicker">Acompanhamento Físico-Financeiro</span>
          <h2>Saiba quanto foi executado, quanto foi pago e o que ainda falta.</h2>
          <p>A equipe Neoeng alimenta o App NeoFlow com a evolução da execução, cronograma, medições, despesas, documentos e evidências fotográficas — para você acompanhar a obra com clareza, de onde estiver.</p>
        </div>
        <div className="nh-tracking-body">
          <div className="nh-tracking-visual-col">
            <div className="nh-tracking-visual">
              <Image src="/obras/Casas/Projetos/acompanhamento-celular.jpg" alt="App NeoFlow — acompanhamento físico-financeiro por dispositivo móvel" fill className="object-cover" />
            </div>
            <div className="nh-tracking-methods">
              <div><CheckCircle2 size={18} /><span>RDO online, dia a dia</span></div>
              <div><CheckCircle2 size={18} /><span>Fotos e imagens aéreas por drone</span></div>
              <div><CheckCircle2 size={18} /><span>Curva S de custos x avanço</span></div>
            </div>
            <small>App NeoFlow — visualização ilustrativa do acompanhamento em tempo real.</small>
          </div>
          <div className="nh-metric-panel">
            {trackingMetrics.map((item, i) => (
              <div key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Financiamento e Documentação */}
      <section className="nh-section">
        <div className="nh-support-grid">
          <article>
            <Landmark />
            <span className="nh-kicker">Financiamento</span>
            <h2>Também ajudamos a organizar o financiamento da construção.</h2>
            <div className="nh-highlight-box">
              <WalletCards size={20} />
              <p><strong>Viabilizamos o financiamento do terreno e da obra.</strong> Pague as parcelas somente após a conclusão da obra.</p>
            </div>
            <p>A Neoeng conta com correspondente bancário da Caixa, com canal dedicado ao financiamento de construção, e acompanha a preparação de documentos, projetos, orçamento e cronograma exigidos na análise. Também facilita a comunicação durante as etapas de contratação, medição e liberação dos recursos.</p>
            <small>*Aprovação de crédito, valores liberados e itens financiáveis dependem dos critérios e da análise da instituição financeira.</small>
          </article>
          <article>
            <FileText />
            <span className="nh-kicker">Documentação</span>
            <h2>Documentação organizada do projeto à entrega.</h2>
            <ul>{documentationItems.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
            <small>A Neoeng organiza e acompanha a obtenção dos documentos. A emissão, aprovação e responsabilidade por cada um permanecem com os respectivos profissionais e órgãos competentes.</small>
          </article>
        </div>
      </section>

      {/* Modelos NeoHouse */}
      <section className="nh-section" id="modelos">
        <div className="nh-section-head nh-center-head">
          <span className="nh-kicker">Modelos NeoHouse</span>
          <h2>Uma base arquitetônica clara. Personalizações que cabem no orçamento.</h2>
          <p style={{ margin: "0 auto" }}>Antes da contratação definitiva, verificamos a compatibilidade do modelo com o lote e com as regras do empreendimento.</p>
        </div>
        <div className="nh-house-grid">
          {houseModels.map(({ name, type, copy, image }, i) => (
            <article className="nh-house-card" style={{ backgroundImage: `url(${image})` }} key={name}>
              <div className="nh-house-content">
                <span>Modelo {String(i + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <b>{type}</b>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="nh-render-note">Imagens conceituais. Cada projeto é licenciado para uma única construção em lote determinado. A estrutura principal é mantida; acabamentos, texturas, revestimentos, cores e elementos decorativos podem ser escolhidos entre opções previamente selecionadas e orçáveis. Todos os projetos contam com acompanhamento de um arquiteto responsável pela personalização e pela adaptação ao terreno, mesmo dentro do conceito do modelo escolhido.</p>
        <div className="nh-inline-cta">
          <div><strong>Encontre o modelo adequado ao seu lote.</strong><span>A NeoHouse verifica regras, características do terreno e possibilidades de personalização.</span></div>
          <a className="nh-button nh-button-dark" href="#avaliacao-residencial">Conheça os modelos NeoHouse <ArrowRight size={18} /></a>
        </div>
      </section>

      {/* Como funciona */}
      <section className="nh-journey-section" id="jornada">
        <div className="nh-journey-intro">
          <span className="nh-kicker">Como funciona</span>
          <h2>Uma sequência organizada, do terreno à entrega.</h2>
        </div>
        <div className="nh-journey-flow">
          {journey.map((item, i) => (
            <Fragment key={item}>
              <div className="nh-journey-step">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
              {i < journey.length - 1 && <ArrowRight className="nh-journey-arrow" />}
            </Fragment>
          ))}
        </div>
      </section>

      {/* Construção por Administração */}
      <section className="nh-section" id="modelo-gestao">
        <div className="nh-section-head" style={{ maxWidth: 760, margin: "0 0 8px" }}>
          <span className="nh-kicker">Construção por Administração</span>
        </div>
        <div className="nh-admin-section">
          <div className="nh-admin-copy">
            <h2 style={{ marginTop: 0 }}>Transparência nas contratações, para quem prefere um projeto autoral.</h2>
            <p>No modelo de <strong>Construção por Administração</strong> da Neoeng, a obra é executada com custos abertos. Você paga o valor real de materiais e mão de obra, enquanto a Neoeng realiza a gestão operacional e a responsabilidade técnica sob uma taxa administrativa fixa pré-estabelecida.</p>
            <p>Eliminamos conflitos de interesse de margens ocultas e focamos na mitigação de riscos, no controle físico-financeiro e na entrega de uma engenharia de alto nível para o seu lar.</p>
            <ul>
              {adminHighlights.map((item) => (
                <li key={item}><CheckCircle2 size={17} />{item}</li>
              ))}
            </ul>
          </div>
          <div className="nh-admin-visual">
            <div className="nh-admin-visual-frame">
              <Image src="/assets/neohouse/planta-alto-padrao.webp" alt="Planta baixa de residência de alto padrão NeoHouse, em orientação vertical" width={385} height={216} className="nh-admin-visual-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Acervo Residencial e Referências de Execução */}
      <section ref={galleryRef} className="nh-section" id="acervo">
        <div className="nh-section-head nh-center-head">
          <span className="nh-kicker">Acervo Residencial e Referências de Execução</span>
          <h2>Portfólio e referências construtivas dos fundadores.</h2>
          <p style={{ margin: "0 auto" }}>Projetos executados com a mesma disciplina técnica e rigor que aplicamos em cada obra NeoHouse.</p>
        </div>

        <div className="nh-acervo-tabs">
          <button className={activeTab === "brasil" ? "active" : ""} onClick={() => setActiveTab("brasil")}>Brasil</button>
          <button className={activeTab === "usa" ? "active" : ""} onClick={() => setActiveTab("usa")}>USA</button>
        </div>

        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {currentImages.map((img, index) => (
            <div key={index} className={`gallery-item relative overflow-hidden rounded-2xl group break-inside-avoid shadow-lg ${img.aspectRatio}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08172f]/90 via-[#08172f]/40 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <p className="text-white font-medium text-xs leading-snug">Referência Técnica: Histórico de projetos dos sócios fundadores.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="nh-acervo-comercial">
          <span className="nh-kicker">Acervo Comercial</span>
          <h2 style={{ marginTop: 12 }}>O mesmo rigor técnico, em obras complexas para grandes marcas.</h2>
          <p>Antes de aplicar essa disciplina à construção residencial, o time Neoeng executou obras comerciais e industriais para operações como estas.</p>
          <div className="nh-logo-marquee">
            <div className="nh-logo-marquee-track">
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={idx}><Image src={logo.src} alt={logo.alt} fill sizes="150px" className="object-contain" /></div>
              ))}
            </div>
          </div>
          <div className="nh-comercial-photos">
            {commercialPhotos.map((photo) => (
              <div className="nh-gallery-item" key={photo.src}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfis de Clientes */}
      <section className="nh-section nh-bg-ivory">
        <div className="nh-section-head nh-center-head">
          <span className="nh-kicker">Perfis de Clientes</span>
          <h2>Para quem é a NeoHouse?</h2>
          <p style={{ margin: "0 auto" }}>Nossa estrutura é voltada para quem não aceita desvios técnicos na execução do seu projeto residencial.</p>
        </div>
        <div className="nh-profiles-grid">
          {profiles.map((profile, idx) => (
            <article key={profile.title}>
              <span>{idx + 1}</span>
              <h3>{profile.title}</h3>
              <p>{profile.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <LeadAssessmentForm
        source="private-homes"
        eyebrowTitle="Avaliação Técnica Residencial"
        title="Solicite uma Avaliação Técnica Residencial"
        description="Conte um pouco sobre o seu projeto. A Neoeng irá avaliar o estágio da obra, o tipo de escopo e os principais pontos de atenção para indicar o melhor caminho de execução."
        submitLabel="Solicitar Avaliação Técnica"
        theme="dark"
        sectionId="avaliacao-residencial"
      />

      <Footer />
    </main>
  );
}
