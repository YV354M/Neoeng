import { leadSchema } from "./validations/lead";
import assert from "node:assert";
import test from "node:test";

test("Lead Schema Validation - Sucesso (Home)", () => {
  const validData = {
    source: "home" as const,
    name: "Carlos Alberto",
    whatsapp: "(85) 99123-4567",
    email: "carlos.alberto@email.com",
    location: "Fortaleza - CE",
    projectCategory: "Instalações Elétricas",
    currentStage: "Projetos executivos prontos",
    requestedServices: ["Execução parcial de serviços", "Instalações técnicas"],
    timeline: "Em 1 a 3 meses",
    details: "Demanda urgente para execução de subestação e instalações elétricas industriais.",
    investmentRange: "R$ 300 mil a R$ 700 mil",
  };

  const result = leadSchema.safeParse(validData);
  assert.strictEqual(result.success, true);
});

test("Lead Schema Validation - Sucesso (Private Homes)", () => {
  const validData = {
    source: "private-homes" as const,
    name: "Mariana Souza",
    whatsapp: "85987654321",
    email: "mariana.souza@gmail.com",
    location: "Dunas, Fortaleza",
    projectCategory: "Residência de Alto Padrão",
    currentStage: "Projeto arquitetônico pronto",
    requestedServices: ["Construção completa", "Gestão / administração de obra"],
    timeline: "Em 3 a 6 meses",
    details: "Residência de alto padrão com 600m² de área construída.",
    approximateArea: "501 a 1.000 m²",
  };

  const result = leadSchema.safeParse(validData);
  assert.strictEqual(result.success, true);
});

test("Lead Schema Validation - Erro (WhatsApp curto)", () => {
  const invalidData = {
    source: "home" as const,
    name: "Carlos Alberto",
    whatsapp: "8599", // muito curto
    email: "carlos.alberto@email.com",
    location: "Fortaleza - CE",
    projectCategory: "Obra Civil / Estrutura / Acabamento",
    currentStage: "Projetos executivos prontos",
    requestedServices: ["Construção completa"],
    timeline: "Em 1 a 3 meses",
    details: "Instalação elétrica.",
  };

  const result = leadSchema.safeParse(invalidData);
  assert.strictEqual(result.success, false);
});

test("Lead Schema Validation - Erro (Falta Cidade/Local da obra)", () => {
  const invalidData = {
    source: "private-homes" as const,
    name: "Mariana Souza",
    whatsapp: "85987654321",
    email: "mariana.souza@gmail.com",
    // location ausente
    projectCategory: "Reforma Residencial Premium",
    currentStage: "Projeto arquitetônico pronto",
    requestedServices: ["Reforma"],
    timeline: "Em 3 a 6 meses",
    details: "Reforma premium em residência existente.",
  };

  const result = leadSchema.safeParse(invalidData);
  assert.strictEqual(result.success, false);
});
