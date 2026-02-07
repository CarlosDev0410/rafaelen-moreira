"use client";

import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Calendar, Users, Trophy, CheckCircle2, MessageCircle } from "lucide-react";

export default function FaqSection() {
  return (
    <section id="faq" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">PERGUNTAS FREQUENTES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Tudo Que Você Precisa Saber
            </h2>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <Calendar className="text-primary" size={20} />
                Qual a duração do programa?
              </h3>
              <p className="text-gray-600 pl-7">
                <strong>6 semanas corridas</strong>, com acompanhamento semanal e suporte diário no grupo de WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-gradient-to-r from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <Users className="text-primary" size={20} />
                Já faço consulta com você, posso participar?
              </h3>
              <p className="text-gray-600 pl-7">
                <strong>Com certeza! Você DEVE participar.</strong> O grupo dará um <strong>upgrade no seu plano alimentar</strong> e 
                acelera seus resultados com o suporte coletivo e desafios exclusivos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <Trophy className="text-primary" size={20} />
                Quais resultados posso esperar?
              </h3>
              <p className="text-gray-600 pl-7">
                Os resultados variam de pessoa para pessoa, mas com disciplina e seguindo o plano, é possível:
              </p>
              <ul className="mt-3 pl-7 space-y-1 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Perder de 3 a 8 kg de forma saudável</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Reduzir medidas e melhorar a composição corporal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Criar hábitos alimentares que duram para sempre</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-gradient-to-r from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <h3 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <MessageCircle className="text-primary" size={20} />
                Como funciona o suporte?
              </h3>
              <p className="text-gray-600 pl-7">
                100% online pelo WhatsApp. Você receberá desafios semanais e terá acesso direto 
                à nutricionista Rafaelen e ao grupo de apoio.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
