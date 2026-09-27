import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadAssessmentForm from "@/components/LeadAssessmentForm";

export const metadata: Metadata = {
  title: "Sistema construtivo Lightwall | Execução habilitada pela Neoeng",
  description:
    "Conheça o sistema construtivo Lightwall, seus ganhos potenciais de prazo, resíduos, desempenho e área útil, e como a Neoeng conduz obras com equipe habilitada.",
  keywords: [
    "sistema construtivo Lightwall",
    "Lightwall Fortaleza",
    "construção modular",
    "obra industrializada",
    "painel de concreto leve",
    "Neoeng Lightwall",
  ],
  alternates: { canonical: "/lightwall" },
  openGraph: {
    title: "Sistema construtivo Lightwall | Neoeng Engenharia",
    description:
      "Tecnologia modular, desempenho documentado e execução Neoeng para obras residenciais, comerciais e industriais.",
    url: "/lightwall",
    type: "article",
    images: [{ url: "/assets/lightwall/lightwall-installation.jpeg", alt: "Montagem de painéis Lightwall em obra" }],
  },
};

const technicalBenefits = [
  {
    title: "Prazo",
    value: "Até 5×",
    text: "A montagem pode ser até 5 vezes mais rápida que a alvenaria convencional. O resultado depende do projeto, da equipe, da logística e das condições do canteiro.",
  },
  {
    title: "Resíduos",
    value: "83× menos",
    text: "O sistema pode gerar até 83 vezes menos resíduos: 1,13 kg/m² no Lightwall contra 93,89 kg/m² na alvenaria, conforme as condições da comparação.",
  },
  {
    title: "Estrutura",
    value: "7–11%",
    text: "A redução estimada de aço e fundação fica entre 7% e 11% em determinadas configurações. O projeto estrutural deve confirmar o resultado em cada obra.",
  },
] as const;

const citedStandards = [
  ["NBR 17073:2024", "Sistemas construtivos — requisitos e avaliação da solução."],
  ["NBR 15575", "Desempenho de edificações habitacionais, incluindo requisitos de conforto e segurança."],
  ["NBR 17036", "Painéis de vedação — requisitos relacionados ao sistema Lightwall."],
  ["NBR 14718", "Guardas-corpos — aplicável às interfaces e elementos previstos no projeto."],
] as const;

const evidenceSlides = [
  {
    src: "/assets/lightwall/lightwall-acoustic.png",
    alt: "Desempenho acústico de diferentes composições de painéis Lightwall",
    caption: "Desempenho acústico para diferentes composições: Rw de 39, 42, 45 e 51 dB. Dados apresentados pela Lightwall Brasil.",
  },
  {
    src: "/assets/lightwall/lightwall-installations.png",
    alt: "Exemplo de instalações elétricas e hidráulicas em painel Lightwall",
    caption: "Passagem de instalações elétricas e hidráulicas com cava para dutos e fechamento com argamassa ACIII. Solução apresentada pela Lightwall Brasil.",
  },
  {
    src: "/assets/lightwall/lightwall-ecolabel.png",
    alt: "Rótulo Ecológico ABNT e certificado de conformidade do Lightwall",
    caption: "Rótulo Ecológico ABNT e certificado de conformidade, incluindo o registro nº 595.001/25. Informação apresentada pela Lightwall Brasil.",
  },
  {
    src: "/assets/lightwall/lightwall-standards.png",
    alt: "Slide sobre sistema Lightwall normatizado pela ABNT",
    caption: "Sistema normatizado pela ABNT, com NBR 17073, NBR 15575 e NBR 17036, além de financiamento pela Caixa. A aplicação deve ser conferida no projeto vigente.",
  },
  {
    src: "/assets/lightwall/lightwall-comparison.png",
    alt: "Quadro comparativo entre Lightwall e outros sistemas construtivos",
    caption: "Comparativo de peso, velocidade, acústica e resistência ao fogo. Os valores dependem da composição e das condições de cada obra.",
  },
] as const;

const galleryPhotos = [
  ["/assets/lightwall/gallery-piloto-fabrica.png", "Piloto e fábrica", "Montagem de painéis em unidade-piloto/fábrica. Slide 47 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-piloto-montagem.png", "Execução de painéis", "Equipe em etapa de montagem de uma unidade-piloto. Slide 47 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-rio-claro.jpg", "Rio Claro/SP", "Empreendimento habitacional citado como Rio Claro/SP — 4.000 casas. Slide 48 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-casa-popular-sertania.jpg", "Casa Popular — Sertânia/PE", "Casa Popular de 55 m², Sertânia/PE. Slide 49 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-condominio-sertania.jpg", "Condomínio — Sertânia/PE", "Conjunto de 20 casas em Sertânia/PE. Slide 51 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-rooftop-tacaruna-montagem.jpg", "Rooftop Shopping Tacaruna", "Montagem no Rooftop Shopping Tacaruna, Recife/PE. Slide 53 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-rooftop-tacaruna-final.jpg", "Rooftop finalizado", "Rooftop Shopping Tacaruna, Recife/PE, em registro de conclusão. Slide 54 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-edificio-rooftop.jpg", "Edifício Rooftop", "Edifício Rooftop — Construtora Moura Dubeux. Slide 56 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-edificio-neue-haut.jpg", "Edifício Neue Haut", "Edifício Neue Haut, João Pessoa/PB. Slide 58 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-pedras-patacho.jpg", "Pedras do Patacho", "Pedras do Patacho Hotel Boutique, Milagres/AL. Slide 60 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-pedras-patacho-interior.jpg", "Interior de hotelaria", "Aplicação interna no Pedras do Patacho Hotel Boutique, Milagres/AL. Slide 61 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-grand-oca.jpg", "Grand Oca Resort", "Grand Oca Resort, Maragogi/AL. Slide 64 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-guadalupe.jpg", "Guadalupe Beach Resort", "Guadalupe Beach Resort, Sirinhaém/PE. Slide 65 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-mercado-livre.jpg", "Galpão Mercado Livre", "Execução de vedação em galpão do Mercado Livre, São Paulo/SP. Slide 75 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-galeria-jarlan.jpg", "Galeria Jarlan", "Galeria Jarlan, Maceió/AL. Slide 76 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-bar-cuscuz.jpg", "Bar do Cuscuz", "Bar do Cuscuz, Recife/PE. Slide 77 da apresentação técnico-comercial."],
  ["/assets/lightwall/gallery-fratelate.jpg", "Fratelate", "Fratelate, Recife/PE. Slide 78 da apresentação técnico-comercial."],
] as const;

const lightwallWhatsappHref = "https://wa.me/5585987240375?text=Vim%20do%20site%20da%20Neoeng%20e%20desejo%20entender%20mais%20sobre%20Lightwall.";

const executionSteps = [
  ["01", "Diagnóstico técnico", "Leitura da tipologia, projeto, interferências, riscos e viabilidade do sistema."],
  ["02", "Paginação e compatibilização", "Definição dos painéis, cortes, juntas, instalações e interfaces com a estrutura."],
  ["03", "Suprimentos no timing certo", "Planejamento de materiais, logística e sequência para proteger o cronograma."],
  ["04", "Execução controlada", "Equipe orientada ao sistema, conferência geométrica e controle de produtividade."],
  ["05", "Medição e entrega", "Acompanhamento do avanço, registros, correções e entrega com rastreabilidade."],
] as const;

const faqs = [
  [
    "O que é o sistema construtivo Lightwall?",
    "É um sistema modular de vedação com painéis de concreto leve, núcleo com EPS, faces cimentícias e encaixe macho-fêmea. A especificação do painel, das juntas e das interfaces deve ser definida para cada projeto.",
  ],
  [
    "O Lightwall substitui qualquer sistema em qualquer obra?",
    "Não. A solução precisa ser estudada conforme tipologia, estrutura, vãos, acústica, fogo, logística, orçamento e projeto executivo. A Neoeng começa pela análise de viabilidade antes de especificar o sistema.",
  ],
  [
    "Como são tratadas as informações de desempenho?",
    "Os números desta página ajudam a entender o potencial do sistema, mas não são uma garantia automática para toda obra. Montagem, espessura, acabamento, vãos e condições de uso influenciam o resultado final.",
  ],
  [
    "Como solicitar um orçamento em Lightwall?",
    "Use o formulário ao final da página. A equipe Neoeng pode avaliar localização, área, estágio do projeto, prazo, escopo e compatibilidade técnica para orientar a próxima etapa.",
  ],
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      headline: "Sistema construtivo Lightwall: execução habilitada pela Neoeng",
      description: "Guia técnico-comercial sobre o sistema construtivo Lightwall e a execução de obras pela Neoeng.",
      inLanguage: "pt-BR",
      mainEntityOfPage: "https://www.neoeng.co/lightwall",
      image: "https://www.neoeng.co/assets/lightwall/lightwall-installation.jpeg",
      author: { "@type": "Organization", name: "Neoeng Engenharia", url: "https://www.neoeng.co" },
      publisher: { "@type": "Organization", name: "Neoeng Engenharia", url: "https://www.neoeng.co" },
      about: { "@type": "Thing", name: "Sistema construtivo Lightwall" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Neoeng Engenharia", item: "https://www.neoeng.co/" },
        { "@type": "ListItem", position: 2, name: "Lightwall", item: "https://www.neoeng.co/lightwall" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

function SourceNote() {
  return (
    <p className="mt-5 max-w-3xl border-l-2 border-active-orange pl-4 text-sm leading-relaxed text-deep-navy/65">
      O Lightwall combina painéis de concreto leve, núcleo isolante e montagem planejada. Os resultados dependem da configuração escolhida e das condições de cada projeto, por isso a Neoeng avalia a solução antes de especificá-la.
    </p>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <figcaption className="mt-2 text-[10px] leading-relaxed text-deep-navy/50">{children}</figcaption>;
}

export default function LightwallPage() {
  return (
    <main className="min-h-screen bg-white text-deep-navy">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="bg-deep-navy px-6 pb-20 pt-36 text-white md:px-12 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-14 w-40 rounded-xl p-1">
                    <Image src="/assets/lightwall/lightwall-logo.png" alt="Lightwall" fill sizes="160px" className="object-contain" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-active-orange">Neoeng Engenharia</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Sistema construtivo industrializado</p>
                <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
                  Lightwall: desempenho modular com execução Neoeng.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                  Uma abordagem técnica para avaliar quando painéis modulares de concreto leve podem reduzir etapas, organizar o cronograma e entregar mais previsibilidade à obra.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="#orcamento" className="group inline-flex items-center gap-2 rounded-full bg-active-orange px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]">
                    Orçar minha obra em Lightwall
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                  <a href="/assets/lightwall/certificado-expert-yves.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/60">
                    <FileCheck2 className="h-4 w-4" aria-hidden="true" />
                    Ver certificado de habilitação
                  </a>
                </div>
              </div>

              <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image src="/assets/lightwall/lightwall-team.jpg" alt="Equipe em evento de habilitação Lightwall" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                </div>
                <figcaption className="px-5 py-3 text-[10px] leading-relaxed text-white/55">Registro de equipe em atividade Lightwall. Imagem fornecida para uso institucional.</figcaption>
              </figure>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-12 md:px-12">
          <SourceNote />

          <section className="mt-14" aria-labelledby="o-que-e-lightwall">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">O sistema</p>
            <h2 id="o-que-e-lightwall" className="mt-3 text-3xl font-black md:text-4xl">O que é o Lightwall?</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-4 text-base leading-relaxed text-deep-navy/75">
                <p>O Lightwall utiliza painéis modulares de concreto leve, núcleo com EPS, faces cimentícias e encaixe macho-fêmea. A solução integra vedação, desempenho e velocidade em uma sequência de montagem planejada.</p>
                <p>A configuração do painel importa: há painéis SP, com uma face cimentícia, e 2P, com duas faces, além de espessuras e aplicações distintas. A especificação deve acompanhar o projeto, a exigência de desempenho e o método de execução.</p>
                <p>Para a Neoeng, o sistema é parte de uma decisão de engenharia: antes de vender um painel, avaliamos vocação, interfaces, logística, estrutura, instalações, prazo e custo total da obra.</p>
              </div>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-concrete-gray">
                  <Image src="/assets/lightwall/lightwall-detail.jpeg" alt="Detalhe da seção e do encontro de painéis Lightwall" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                </div>
                <Caption>Detalhe de painel e encontro construtivo. Imagem fornecida pela Lightwall Brasil.</Caption>
              </figure>
            </div>
          </section>

          <section className="mt-20" aria-labelledby="vantagens-lightwall">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Custo, prazo e qualidade</p>
            <h2 id="vantagens-lightwall" className="mt-3 text-3xl font-black md:text-4xl">A vantagem está na obra inteira</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-deep-navy/70">O sistema não deve ser comparado somente pelo preço do metro quadrado do painel. O impacto potencial aparece na combinação entre produtividade, etapas eliminadas, peso próprio, perdas, custo indireto e área útil.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {technicalBenefits.map((item) => (
                <div key={item.title} className="rounded-3xl border border-deep-navy/10 bg-concrete-gray/45 p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-active-orange">{item.title}</p>
                  <p className="mt-3 text-4xl font-black text-deep-navy">{item.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-deep-navy/65">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-deep-navy/50">Os números são indicativos e variam conforme painel, projeto, equipe, logística, estrutura, acabamento e condições de execução.</p>
          </section>

          <section className="mt-20 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center" aria-labelledby="desempenho-lightwall">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Desempenho</p>
              <h2 id="desempenho-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Conforto térmico, acústico e segurança ao fogo</h2>
              <p className="mt-5 text-base leading-relaxed text-deep-navy/70">O desempenho muda conforme a composição do painel, a espessura, o acabamento e a forma de instalação. Os números abaixo ajudam a entender as possibilidades do sistema, mas a especificação final precisa ser feita para cada obra.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-deep-navy/10 p-5"><h3 className="font-bold">Térmico</h3><p className="mt-2 text-sm leading-relaxed text-deep-navy/65">Uma composição de painel pode alcançar U de 0,63 W/m².K, enquanto referências de alvenaria ficam em 2,53 e 2,72 W/m².K. Na prática, isso representa potencial de isolamento térmico 4 a 5 vezes maior, conforme a solução escolhida.</p></div>
              <div className="rounded-2xl border border-deep-navy/10 p-5"><h3 className="font-bold">Acústico</h3><p className="mt-2 text-sm leading-relaxed text-deep-navy/65">As composições ilustradas informam Rw de 39 dB (painel 90 mm), 42 dB (120 mm), 45 dB (75 mm + câmara de ar de 30 mm) e 51 dB (75 mm + lã de vidro de 50 mm). Outras combinações do deck chegam a 55 dB em ensaios/cases específicos.</p></div>
              <div className="rounded-2xl border border-deep-navy/10 p-5 sm:col-span-2"><h3 className="font-bold">Fogo</h3><p className="mt-2 text-sm leading-relaxed text-deep-navy/65">O painel 2P90 pode alcançar resistência ao fogo CF120, ou seja, 120 minutos nas condições do ensaio. A solução final deve ser especificada conforme ocupação, compartimentação, norma e projeto de segurança contra incêndio.</p></div>
            </div>
          </section>

          <section className="mt-20" aria-labelledby="evidencias-lightwall">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Evidências técnicas</p>
            <h2 id="evidencias-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Desempenho e aplicações na prática</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-deep-navy/70">Os quadros abaixo mostram, de forma visual, como o sistema pode se comportar em acústica, instalações, sustentabilidade, normalização e comparação com outros métodos. Eles ajudam na compreensão, mas não substituem laudos, memoriais ou a especificação do projeto.</p>
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              {evidenceSlides.map((item) => (
                <figure key={item.src} className="overflow-hidden rounded-3xl border border-deep-navy/10 bg-concrete-gray/30 p-3">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-white">
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                  </div>
                  <Caption>{item.caption}</Caption>
                </figure>
              ))}
            </div>
          </section>

          <div className="my-16 rounded-3xl bg-deep-navy p-7 text-white md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-active-orange">Próximo passo</p><h2 className="mt-2 text-2xl font-black md:text-3xl">Quer saber se o Lightwall faz sentido para sua obra?</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">A Neoeng avalia o contexto antes de indicar o sistema, incluindo projeto, tipologia, prazo, orçamento e interfaces técnicas.</p></div>
              <Link href="#orcamento" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-active-orange px-6 py-3.5 text-sm font-bold">Orçar minha obra em Lightwall <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
            </div>
          </div>

          <section className="mt-20" aria-labelledby="validacao-lightwall">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Validação e habilitação</p>
            <h2 id="validacao-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Tecnologia validada, execução orientada</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-deep-navy/10 p-7">
                <ShieldCheck className="h-8 w-8 text-active-orange" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Normas e critérios técnicos</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep-navy/65">O Lightwall segue as referências normativas abaixo e conta com homologação SINAT, possibilidade de financiamento pela Caixa, vida útil de projeto de 50 anos e Rótulo Ecológico ABNT. A aplicação e o atendimento devem ser confirmados para o painel, escopo e projeto correspondentes.</p>
                <ul className="mt-5 space-y-3">
                  {citedStandards.map(([standard, description]) => <li key={standard} className="flex gap-3 text-sm leading-relaxed text-deep-navy/70"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-active-orange" aria-hidden="true" /><span><strong className="text-deep-navy">{standard}</strong> — {description}</span></li>)}
                </ul>
              </div>
              <div className="rounded-3xl border border-deep-navy/10 p-7">
                <FileCheck2 className="h-8 w-8 text-active-orange" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Neoeng habilitada</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep-navy/65">Yves Rabelo Mourão concluiu o curso Lightwall Experts Pro, com imersão presencial na fábrica em Cabo de Santo Agostinho/PE, acumulando experiência prática sobre montagem, especificações, normativas e aplicações.</p>
                <a href="/assets/lightwall/certificado-expert-yves.pdf" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-active-orange hover:text-orange-600">Consultar certificado <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>
            </div>
          </section>

          <section className="mt-20" aria-labelledby="execucao-neoeng-lightwall">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Método Neoeng</p>
            <h2 id="execucao-neoeng-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Como conduzimos uma obra em Lightwall</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {executionSteps.map(([number, title, text]) => (
                <div key={number} className="rounded-2xl bg-concrete-gray/55 p-5">
                  <span className="text-xs font-black tracking-[0.2em] text-active-orange">{number}</span>
                  <h3 className="mt-3 text-base font-bold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-deep-navy/65">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20" aria-labelledby="aplicacoes-lightwall">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Aplicações</p>
            <h2 id="aplicacoes-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Onde a solução pode gerar mais valor</h2>
            <div className="mt-7 grid gap-8 md:grid-cols-2">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src="/assets/lightwall/lightwall-residence.jpg" alt="Residências executadas com painéis Lightwall em Maresias" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
                <Caption>Residências em Maresias/SP. Imagem fornecida para apresentação da tecnologia.</Caption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src="/assets/lightwall/lightwall-installation.jpeg" alt="Equipe montando painéis Lightwall em canteiro de obra" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div>
                <Caption>Montagem de painéis em canteiro. Imagem fornecida pela Lightwall Brasil.</Caption>
              </figure>
            </div>
            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-active-orange">Galeria de obras</p>
              <h3 className="mt-2 text-2xl font-black md:text-3xl">Aplicações apresentadas nos slides 46–84</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-deep-navy/65">Uma seleção de registros e imagens de empreendimentos residenciais, hoteleiros e comerciais presentes na apresentação técnico-comercial. Cada legenda identifica o empreendimento ou a etapa mostrada e informa a origem da imagem.</p>
              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {galleryPhotos.map(([src, alt, caption]) => (
                  <figure key={src}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-concrete-gray/45">
                      <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain" />
                    </div>
                    <Caption>{caption} Imagem fornecida pela Lightwall Brasil.</Caption>
                  </figure>
                ))}
              </div>
              <p className="mt-5 text-[10px] leading-relaxed text-deep-navy/50">As imagens desta galeria foram extraídas da apresentação técnico-comercial da Lightwall Brasil. A presença de uma obra na apresentação não constitui, por si só, atestado de escopo executado pela Neoeng.</p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                "Casas térreas, sobrados e condomínios padronizados",
                "Obras com prazo crítico e alto custo indireto de canteiro",
                "Projetos em que peso, resíduos e área útil influenciam a viabilidade",
              ].map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-deep-navy/10 p-5 text-sm leading-relaxed"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-active-orange" aria-hidden="true" /><span>{item}</span></div>)}
            </div>
          </section>

          <section className="mt-20" aria-labelledby="faq-lightwall">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Dúvidas frequentes</p>
            <h2 id="faq-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Perguntas sobre Lightwall</h2>
            <div className="mt-7 divide-y divide-deep-navy/10 rounded-3xl border border-deep-navy/10 px-6">
              {faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-base font-bold marker:hidden">{question}</summary><p className="mt-3 max-w-3xl text-sm leading-relaxed text-deep-navy/65">{answer}</p></details>)}
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] bg-[#0d3b2e] p-8 text-white shadow-xl md:p-10" aria-labelledby="representante-lightwall">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8be28f]">Representante Lightwall</p>
                <h2 id="representante-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Tire suas dúvidas com um representante de abrangência nacional</h2>
                <p className="mt-4 text-base leading-relaxed text-white/75">Converse diretamente com um representante Lightwall, entenda melhor o sistema e descubra como ele pode ser aplicado à sua obra.</p>
              </div>
              <a href={lightwallWhatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Falar com um representante Lightwall pelo WhatsApp" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-black text-[#063b22] shadow-lg transition-transform hover:scale-[1.03]">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.1-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.075c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 1 1 8.372 4.632M20.52 3.449A11.82 11.82 0 0 0 12.08 0C5.565 0 .26 5.305.26 11.82c0 2.083.544 4.116 1.578 5.907L.16 24l6.426-1.685a11.82 11.82 0 0 0 5.49 1.397h.005c6.514 0 11.819-5.305 11.819-11.82a11.82 11.82 0 0 0-3.38-8.443" />
                </svg>
                WhatsApp
              </a>
            </div>
          </section>
        </div>
      </article>

      <LeadAssessmentForm
        source="lightwall"
        eyebrowTitle="Orçamento em Lightwall"
        title="Orçar minha obra em Lightwall"
        description="Conte localização, área, estágio do projeto e prazo. A Neoeng fará uma avaliação técnica inicial para entender a viabilidade do sistema e os próximos passos do orçamento."
        submitLabel="Solicitar orçamento em Lightwall"
        theme="light"
        defaultProjectCategory="Sistema construtivo Lightwall"
      />
      <Footer />
    </main>
  );
}
