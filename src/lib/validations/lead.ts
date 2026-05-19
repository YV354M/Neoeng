import { z } from "zod";

const requiredSelect = (message: string) => z.string().min(1, message);

export const leadSchema = z.object({
  source: z.enum(["home", "private-homes"]),
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").max(100),
  whatsapp: z.string().min(10, "Insira um número de WhatsApp válido com DDD").max(20),
  email: z.string().email("Por favor, insira um e-mail válido"),
  location: z.string().min(2, "Informe a cidade/local da obra").max(100),
  projectCategory: requiredSelect("Selecione o tipo de projeto ou obra"),
  currentStage: requiredSelect("Selecione o estágio atual do projeto"),
  requestedServices: z.array(z.string()).min(1, "Selecione ao menos um serviço"),
  approximateArea: z.string().optional(),
  timeline: requiredSelect("Selecione o prazo desejado para início"),
  details: z
    .string()
    .min(10, "Descreva brevemente o que você precisa")
    .max(1500, "Limite de 1500 caracteres"),
  investmentRange: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
