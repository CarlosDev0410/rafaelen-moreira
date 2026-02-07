import { z } from "zod";

export const inscricaoSchema = z.object({
  nome_completo: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z
    .string()
    .min(10, "Telefone inválido")
    .transform((val) => val.replace(/\D/g, "")),
  objetivo: z.enum(["emagrecimento", "ganho-peso", "reeducacao", "bem-estar"], {
    message: "Selecione um objetivo válido",
  }),
  como_conheceu: z.enum(["instagram", "indicacao", "google", "consultorio"], {
    message: "Selecione como nos conheceu",
  }),
});

export type InscricaoInput = z.infer<typeof inscricaoSchema>;
