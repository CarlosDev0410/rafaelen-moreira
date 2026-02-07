import { createAdminClient } from "@/lib/supabase-admin";
import type { InscricaoInput } from "@/lib/schemas";

export class SubscriptionService {
  async checkDuplicity(email: string, telefone: string) {
    const supabase = await createAdminClient();

    const { data: existing, error } = await supabase
      .from("inscricoes_missao_fit")
      .select("email, telefone")
      .or(`email.eq.${email},telefone.eq.${telefone}`)
      .maybeSingle();

    if (error) {
      console.error("Erro ao verificar duplicidade:", error);
      // Não bloqueia caso de erro de leitura, assume que não existe e tenta inserir
      return null;
    }

    return existing;
  }

  async createSubscription(data: InscricaoInput) {
    const supabase = await createAdminClient();

    const { data: inscricao, error } = await supabase
      .from("inscricoes_missao_fit")
      .insert([
        {
          nome_completo: data.nome_completo,
          email: data.email,
          telefone: data.telefone,
          objetivo: data.objetivo,
          como_conheceu: data.como_conheceu,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Erro criar inscrição (Supabase):", error);
      throw new Error("Falha ao salvar inscrição no banco de dados.");
    }

    return inscricao;
  }
}

export const subscriptionService = new SubscriptionService();
