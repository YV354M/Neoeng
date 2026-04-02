import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Differentiator from "@/components/Differentiator";
import Authority from "@/components/Authority";
import ConversionForm from "@/components/ConversionForm";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Specialties />
      <Differentiator />
      <Authority />
      <ConversionForm />
      <Footer />
    </main>
  );
}
