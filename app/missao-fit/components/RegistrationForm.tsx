"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle2, Heart, MessageCircle } from "lucide-react";
import { inscricaoSchema, type InscricaoInput } from "@/lib/schemas";
import { registrarInscricao } from "@/app/actions/inscricoes";

export default function RegistrationForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const vagasRestantes = 15;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InscricaoInput>({
    resolver: zodResolver(inscricaoSchema),
  });

  const mutation = useMutation({
    mutationFn: registrarInscricao,
    onSuccess: (response) => {
      if (response.success) {
        reset();
        setShowSuccess(true);
      } else {
        alert(response.error);
      }
    },
    onError: () => {
      alert("Ocorreu um erro ao processar sua inscrição. Tente novamente.");
    },
  });

  const onSubmit = (data: InscricaoInput) => {
    mutation.mutate(data);
  };

  return (
    <section id="inscricao" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Garanta Sua Vaga Agora
            </h2>
            <p className="text-lg text-secondary-light">
              Preencha o formulário abaixo e dê o primeiro passo rumo à sua transformação
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
          >
            {showSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  Pré-Inscrição Realizada! 🎉
                </h3>
                <div className="bg-primary/5 p-6 rounded-2xl mb-8 border border-primary/10">
                  <p className="text-secondary font-semibold mb-4 text-lg">
                    Último passo: Entre no grupo de inscritos para finalizar sua vaga!
                  </p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Este é um grupo temporário para alinharmos o pagamento da entrada (R$ 150,00). 
                    Assim que confirmado, eu te adicionarei pessoalmente ao <strong>Grupo VIP Missão FIT</strong>.
                  </p>
                  <a
                    href={process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all w-full justify-center"
                  >
                    <MessageCircle size={24} />
                    ENTRAR NO GRUPO DE WHATSAPP
                  </a>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-gray-500 hover:text-primary text-sm font-medium underline"
                >
                  Fazer outra inscrição
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nome Completo */}
                <div>
                  <label htmlFor="nome_completo" className="block text-sm font-semibold text-secondary mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome_completo"
                    {...register("nome_completo")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.nome_completo ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Digite seu nome completo"
                  />
                  {errors.nome_completo && (
                    <p className="text-red-500 text-sm mt-1">{errors.nome_completo.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-secondary mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    {...register("telefone")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.telefone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="(00) 00000-0000"
                  />
                  {errors.telefone && (
                    <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
                  )}
                </div>

                {/* Objetivo */}
                <div>
                  <label htmlFor="objetivo" className="block text-sm font-semibold text-secondary mb-2">
                    Qual seu objetivo com esse grupo? *
                  </label>
                  <select
                    id="objetivo"
                    {...register("objetivo")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.objetivo ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="emagrecimento">Emagrecimento</option>
                    <option value="ganho-peso">Ganho de Peso</option>
                    <option value="reeducacao">Reeducação Alimentar</option>
                    <option value="bem-estar">Bem Estar e Saúde</option>
                  </select>
                  {errors.objetivo && (
                    <p className="text-red-500 text-sm mt-1">{errors.objetivo.message}</p>
                  )}
                </div>

                {/* Como Conheceu */}
                <div>
                  <label htmlFor="como_conheceu" className="block text-sm font-semibold text-secondary mb-2">
                    Como me conheceu? *
                  </label>
                  <select
                    id="como_conheceu"
                    {...register("como_conheceu")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.como_conheceu ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="instagram">Instagram</option>
                    <option value="indicacao">Indicação</option>
                    <option value="google">Google</option>
                    <option value="consultorio">Consultório Local</option>
                  </select>
                  {errors.como_conheceu && (
                    <p className="text-red-500 text-sm mt-1">{errors.como_conheceu.message}</p>
                  )}
                </div>

                {/* Urgency Message */}
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                  <div className="flex items-center gap-3">
                    <Heart className="text-amber-600 shrink-0" size={24} />
                    <p className="text-sm text-amber-900">
                      <strong>Últimas vagas!</strong> Apenas {vagasRestantes} pessoas poderão participar desta turma.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Garantir Minha Vaga"
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Ao enviar, você concorda em receber comunicações sobre o programa.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
