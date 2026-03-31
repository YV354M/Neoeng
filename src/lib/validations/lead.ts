import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").max(100),
  email: z.string().email("Por favor, insira um e-mail válido"),
  company: z.string().min(2, "O nome da empresa é obrigatório").max(100),
  whatsapp: z.string().min(10, "Insira um número válido com DDD"),
  services: z.array(z.string()).min(1, "Selecione pelo menos uma especialidade"),
  timeline: z.string().min(1, "Selecione o prazo estimado"),
  details: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadSchema>;
