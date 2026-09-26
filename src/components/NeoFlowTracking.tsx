import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import styles from "./NeoFlowTracking.module.css";

const NEOFLOW_URL = "https://www.obra360.pro/neoflow/entrar";

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
  "Histórico de decisões",
] as const;

const methods = [
  "RDO online e evolução diária",
  "Fotos e imagens aéreas por drone",
  "Curva S de custos versus avanço",
] as const;

type NeoFlowTrackingProps = {
  variant?: "institutional" | "residential";
};

const content = {
  institutional: {
    id: "neoflow",
    kicker: "Gestão digital de obras com NeoFlow",
    title: "Acompanhe o avanço físico e financeiro da sua obra em um só lugar.",
    description:
      "Nas obras comerciais, industriais e residenciais conduzidas pela Neoeng, o NeoFlow centraliza cronograma, medições, custos, documentos e registros fotográficos. Mais transparência e previsibilidade para clientes em Fortaleza e em projetos de todo o Brasil.",
  },
  residential: {
    id: "acompanhamento",
    kicker: "Acompanhamento Físico-Financeiro",
    title: "Saiba quanto foi executado, quanto foi pago e o que ainda falta.",
    description:
      "A equipe Neoeng alimenta o NeoFlow com a evolução da execução, cronograma, medições, despesas, documentos e evidências fotográficas — para você acompanhar a construção da sua casa com clareza, de onde estiver.",
  },
} as const;

export default function NeoFlowTracking({ variant = "institutional" }: NeoFlowTrackingProps) {
  const copy = content[variant];

  return (
    <section className={styles.section} data-variant={variant} id={copy.id} aria-labelledby={`${copy.id}-title`}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.copy}>
            <span className={styles.kicker}>{copy.kicker}</span>
            <h2 id={`${copy.id}-title`}>{copy.title}</h2>
            <p>{copy.description}</p>
          </div>

          <div className={styles.brandAction}>
            <div className={styles.logo}>
              <Image
                src="/logos_neoflow/neoflow.png"
                alt="NeoFlow — plataforma de acompanhamento de obras"
                fill
                sizes="190px"
                className={styles.logoImage}
              />
            </div>
            <a href={NEOFLOW_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>
              Acompanhe sua obra <ArrowUpRight size={18} />
            </a>
          </div>
        </header>

        <div className={styles.body}>
          <div className={styles.visualColumn}>
            <div className={styles.phoneFrame}>
              <iframe
                src="/app-mockup/app-neohouse-mockup.html"
                title="Demonstração interativa do NeoFlow para acompanhamento físico-financeiro de obras"
                className={styles.phoneIframe}
                loading="lazy"
              />
            </div>
            <small>Visualização ilustrativa do acompanhamento de obra no NeoFlow.</small>
          </div>

          <div className={styles.informationColumn}>
            <div className={styles.metricPanel}>
              {trackingMetrics.map((item, index) => (
                <div key={item}>
                  <span className={styles.metricNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className={styles.methods}>
              {methods.map((item) => (
                <div key={item}><CheckCircle2 size={17} /><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
