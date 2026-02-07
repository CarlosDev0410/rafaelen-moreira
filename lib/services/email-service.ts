import { env } from "@/lib/env";
// O arquivo lib/env.ts foi criado no passo anterior. Vou importar dele.
// Mas espera, o env.ts exporta `env`. 

// Ajuste: O arquivo lib/env.ts usa "process.env" mas valida.
// Vou usar as variáveis validadas.

const RESEND_API_URL = "https://api.resend.com/emails";

interface EmailPayload {
  to: string[];
  subject: string;
  html: string;
}

export class EmailService {
  private async sendEmail(payload: EmailPayload) {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.warn("RESEND_API_KEY não configurada. Email ignorado.");
      return;
    }

    try {
      const response = await fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Missão FIT <atendimento@rafaelenmoreira.com.br>",
          ...payload,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro Resend API:", errorData);
        throw new Error(`Falha no envio de email: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      // Não propagar erro para não quebrar o fluxo do usuário se o email falhar
    }
  }

  async sendAdminNotification(inscricao: any) {
    const adminEmail = process.env.NOTIFICATION_EMAIL;
    if (!adminEmail) return;

    await this.sendEmail({
      to: [adminEmail],
      subject: "🎉 Nova Inscrição - Missão FIT",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2d6a4f;">Nova Inscrição Recebida!</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #2d6a4f;">
            <p><strong>Nome:</strong> ${inscricao.nome_completo}</p>
            <p><strong>Email:</strong> ${inscricao.email}</p>
            <p><strong>Telefone:</strong> ${inscricao.telefone}</p>
            <p><strong>Objetivo:</strong> ${inscricao.objetivo}</p>
            <p><strong>Origem:</strong> ${inscricao.como_conheceu}</p>
            <p style="font-size: 12px; color: #666; margin-top: 20px;">
              Inscrito em: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
      `,
    });
  }

  async sendUserConfirmation(inscricao: any) {
    const groupLink = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL || "#";
    const firstName = inscricao.nome_completo.split(' ')[0];

    await this.sendEmail({
      to: [inscricao.email],
      subject: "Sua vaga está quase garantida! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; padding: 20px 0;">
            <h1 style="color: #2d6a4f; margin: 0;">Bem-vinda ao Missão FIT!</h1>
          </div>
          
          <div style="background: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <p style="font-size: 16px; line-height: 1.6;">Olá, <strong>${firstName}</strong>! Tudo bem?</p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Recebi sua pré-inscrição com sucesso. Estou muito feliz que você decidiu dar esse passo importante na sua jornada de saúde! 💚
            </p>

            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 24px 0; text-align: center; border: 1px solid #bbf7d0;">
              <p style="font-weight: bold; color: #166534; margin-bottom: 16px;">Para confirmar sua vaga, entre no grupo VIP agora:</p>
              
              <a href="${groupLink}" style="display: inline-block; background-color: #25D366; color: white; padding: 14px 28px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.4);">
                ENTRAR NO GRUPO VIP
              </a>
              
              <p style="font-size: 13px; color: #166534; margin-top: 12px;">
                É lá que passaremos as informações sobre o pagamento da taxa única de R$ 150,00.
              </p>
            </div>

            <p style="font-size: 15px; color: #64748b;">
              Se tiver qualquer dúvida, pode me chamar no Instagram <a href="https://instagram.com/rafah.nutrii" style="color: #2d6a4f; text-decoration: none; font-weight: bold;">@rafah.nutrii</a>.
            </p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
            
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">
              Rafaelen Moreira - Nutricionista<br>
              CRN 18100654
            </p>
          </div>
        </div>
      `,
    });
  }
}

export const emailService = new EmailService();
