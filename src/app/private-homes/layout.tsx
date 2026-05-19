import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neoeng Private Homes | Residências de Alto Padrão em Fortaleza",
  description: "A Neoeng leva a disciplina técnica de obras corporativas para a construção residencial premium em Fortaleza. Custos abertos e controle de engenharia.",
};

export default function PrivateHomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
