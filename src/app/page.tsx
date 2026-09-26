import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Differentiator from "@/components/Differentiator";
import NeoFlowTracking from "@/components/NeoFlowTracking";
import Authority from "@/components/Authority";
import Portfolio from "@/components/Portfolio";
import LeadAssessmentForm from "@/components/LeadAssessmentForm";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Specialties />
      <Differentiator />
      <NeoFlowTracking />
      <Authority />
      <Portfolio />
      <LeadAssessmentForm
        source="home"
        eyebrowTitle="Avaliação Técnica"
        title="Solicite uma Avaliação Técnica da sua Obra"
        description="Conte um pouco sobre o seu projeto. A Neoeng irá avaliar o estágio da obra, o tipo de escopo e os principais pontos de atenção para indicar o melhor caminho de execução."
        submitLabel="Solicitar Avaliação Técnica"
        theme="light"
      />
      <Footer />
    </main>
  );
}
