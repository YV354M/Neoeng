import { Metadata } from "next";
import "./neohouse.css";

const title = "NeoHouse | Casas de Alto Padrão da Neoeng em Fortaleza";
const description = "NeoHouse é a marca da Neoeng para construção residencial de alto padrão: projetos, financiamento com correspondente Caixa, modelos de casa e acompanhamento em tempo real pelo App NeoFlow.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    url: "https://www.neoeng.co/private-homes",
    siteName: "Neoeng",
    images: [{ url: "/assets/neohouse/hero-house.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/neohouse/hero-house.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Neoeng — NeoHouse",
      description,
      areaServed: "Fortaleza, CE",
      url: "https://www.neoeng.co/private-homes",
      brand: { "@type": "Brand", name: "NeoHouse" },
    },
    {
      "@type": "Service",
      serviceType: "Construção residencial de alto padrão",
      provider: { "@type": "Organization", name: "Neoeng" },
      areaServed: "Fortaleza, CE",
    },
    {
      "@type": "ItemList",
      name: "Modelos NeoHouse",
      itemListElement: ["Essencial", "Horizonte", "Mirante", "Signature"].map((name, i) => ({
        "@type": "Product",
        position: i + 1,
        name: `NeoHouse ${name}`,
      })),
    },
  ],
};

export default function PrivateHomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
