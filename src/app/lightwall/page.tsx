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
    text: "mais rápido que o método convencional em referências de montagem apresentadas no material técnico, com produtividade dependente de projeto, equipe e canteiro.",
  },
  {
    title: "Resíduos",
    value: "83× menos",
    text: "no comparativo apresentado: 93,89 kg/m² na alvenaria contra 1,13 kg/m² no Lightwall, sob as premissas do estudo.",
  },
  {
    title: "Estrutura",
    value: "7–11%",
    text: "de redução indicada em estudos específicos para aço da superestrutura e alívio de carga na fundação; cada projeto precisa de verificação própria.",
  },
] as const;

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
    "Os números publicados nesta página são apresentados como resultados, referências ou benchmarks dos documentos fornecidos, e não como garantia automática. Montagem, espessura, acabamento, vãos e condições de uso influenciam o resultado final.",
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
      As informações a seguir foram compiladas de documentos técnicos e publicitários fornecidos pela Lightwall Brasil e complementadas pela experiência técnica dos profissionais da Neoeng. Resultados de ensaios, estudos e benchmarks dependem da configuração e das condições de cada projeto.
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
                  <div className="relative h-14 w-40 rounded-xl bg-white p-2">
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
                <p>A configuração do painel importa: o material técnico diferencia painéis SP, com uma face cimentícia, e 2P, com duas faces, além de espessuras e aplicações distintas. A especificação deve acompanhar o projeto, a exigência de desempenho e o método de execução.</p>
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
            <p className="mt-4 text-[11px] leading-relaxed text-deep-navy/50">Referências numéricas conforme apresentação técnico-comercial fornecida. Os resultados variam conforme painel, projeto, equipe, logística, estrutura, acabamento e premissas do estudo.</p>
          </section>

          <section className="mt-20 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center" aria-labelledby="desempenho-lightwall">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-active-orange">Desempenho</p>
              <h2 id="desempenho-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Conforto térmico, acústico e segurança ao fogo</h2>
              <p className="mt-5 text-base leading-relaxed text-deep-navy/70">A apresentação informa resultados diferentes conforme composição, espessura, acabamento e ensaio. Por isso, os números abaixo são referências técnicas documentadas, não uma promessa independente da especificação.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-deep-navy/10 p-5"><h3 className="font-bold">Térmico</h3><p className="mt-2 text-sm leading-relaxed text-deep-navy/65">U de 0,63 W/m².K para o painel citado, comparado a 2,53 e 2,72 W/m².K em referências de alvenaria no material. A apresentação resume isso como 4 a 5 vezes mais isolante.</p></div>
              <div className="rounded-2xl border border-deep-navy/10 p-5"><h3 className="font-bold">Acústico</h3><p className="mt-2 text-sm leading-relaxed text-deep-navy/65">O deck cita 2P com Rw de 39 dB e combinações com lã de vidro ou lã de rocha chegando a 51–55 dB em ensaios/cases específicos.</p></div>
              <div className="rounded-2xl border border-deep-navy/10 p-5 sm:col-span-2"><h3 className="font-bold">Fogo</h3><p className="mt-2 text-sm leading-relaxed text-deep-navy/65">O painel 2P90 é apresentado com desempenho CF120 em relatório de ensaio citado no material. A solução final deve ser especificada conforme ocupação, compartimentação, norma e projeto de segurança contra incêndio.</p></div>
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
            <h2 id="validacao-lightwall" className="mt-3 text-3xl font-black md:text-4xl">Tecnologia documentada, execução orientada</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-deep-navy/10 p-7">
                <ShieldCheck className="h-8 w-8 text-active-orange" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Referências técnicas do sistema</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep-navy/65">Os materiais fornecidos citam NBR 15575, NBR 17073:2024, NBR 17036, NBR 14718, homologação SINAT, 100% de financiamento pela Caixa, vida útil de projeto de 50 anos e Rótulo Ecológico ABNT. Esses itens devem ser conferidos conforme o painel, o escopo, a edição do documento e a aplicação antes da especificação final.</p>
              </div>
              <div className="rounded-3xl border border-deep-navy/10 p-7">
                <FileCheck2 className="h-8 w-8 text-active-orange" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Neoeng habilitada</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep-navy/65">Yves Rabelo Mourão concluiu o curso Lightwall Experts Pro, com imersão presencial na fábrica em Cabo de Santo Agostinho/PE, nos dias 25 e 26 de junho de 2026, totalizando 20 horas práticas sobre montagem, especificações, normativas e aplicações.</p>
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
