'use server'

import { inscricaoSchema, type InscricaoInput } from '@/lib/schemas'
import { revalidatePath } from 'next/cache'
import { subscriptionService } from '@/lib/services/subscription-service'
import { emailService } from '@/lib/services/email-service'

export async function registrarInscricao(formData: InscricaoInput) {
  // 1. Validar no servidor com Zod
  const result = inscricaoSchema.safeParse(formData)

  if (!result.success) {
    return {
      success: false,
      error: 'Dados inválidos',
      details: result.error.flatten().fieldErrors
    }
  }

  const { email, telefone } = result.data

  try {
    // 2. Verificar duplicidade (Service)
    const existing = await subscriptionService.checkDuplicity(email, telefone)

    if (existing) {
      return { 
        success: false, 
        error: 'Você já possui uma inscrição ativa com este e-mail ou telefone!' 
      }
    }

    // 3. Criar Inscrição (Service) - Se der erro, o service lança exceção
    const inscricao = await subscriptionService.createSubscription(result.data)

    // 4. Disparar E-mails (Services) - Fire and forget (com tratamento interno)
    // Usamos Promise.allSettled para garantir que um não bloqueie o outro
    await Promise.allSettled([
      emailService.sendAdminNotification(inscricao),
      emailService.sendUserConfirmation(inscricao)
    ])

    // 5. Revalidar caminhos
    revalidatePath('/missao-fit')

    return { 
      success: true, 
      message: 'Inscrição realizada com sucesso!',
      data: inscricao 
    }

  } catch (error) {
    console.error('Erro na Server Action:', error)
    return { success: false, error: 'Erro inesperado ao processar sua inscrição. Tente novamente.' }
  }
}
