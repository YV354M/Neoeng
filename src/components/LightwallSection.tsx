import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "Prazo mais previsível",
    description: "A montagem industrializada reduz etapas úmidas e organiza o avanço por paginação, equipe e sequência de execução.",
  },
  {
    icon: Sparkles,
    title: "Obra mais limpa",
    description: "Painéis cimentíceos e montagem racionalizada reduzem cortes, retrabalho, entulho e interferências no canteiro.",
  },
  {
    icon: ShieldCheck,
    title: "Desempenho e segurança",
    description: "O sistema oferece conforto térmico e acústico e resistência ao fogo CF120.",
  },
] as const;

export default function LightwallSection() {
  return (
    <section id="lightwall" className="relative overflow-hidden bg-deep-navy py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(22,164,232,0.22),transparent_38%),radial-gradient(circle_at_84%_72%,rgba(239,106,35,0.2),transparent_34%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <div className="relative h-12 w-32 rounded-xl p-1">
              <Image src="/assets/lightwall/lightwall-logo.png" alt="Lightwall" fill sizes="128px" className="object-contain" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-active-orange">Sistema construtivo</span>
          </div>
          <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
            A Neoeng está habilitada para executar obras com a tecnologia Lightwall.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Painéis cimentíceos com núcleo de concreto leve, EPS e aditivos para transformar planejamento, produtividade e desempenho em uma execução mais previsível — com engenharia Neoeng do diagnóstico à entrega.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <Icon className="mb-3 h-5 w-5 text-active-orange" aria-hidden="true" />
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/60">{description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/lightwall"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-active-orange px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
          >
            Conheça o sistema Lightwall
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
          <div className="relative aspect-[4/3]">
            <Image
              src="/assets/lightwall/lightwall-installation.jpeg"
              alt="Equipe instalando painéis cimentíceos Lightwall em uma obra residencial"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-5 py-3 text-[10px] leading-relaxed text-white/55">
            Registro de obra com a tecnologia Lightwall.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
