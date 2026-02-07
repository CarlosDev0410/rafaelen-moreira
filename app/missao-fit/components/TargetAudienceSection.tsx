"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle2, Shield, Users, Star } from "lucide-react";

export default function TargetAudienceSection() {
  return (
    <section id="para-quem" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Target className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">PÚBLICO-ALVO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Este Grupo Foi Feito Para Você?
            </h2>
            <p className="text-lg text-secondary-light max-w-2xl mx-auto">
              O <strong className="text-primary">Missão FIT</strong> é ideal para mulheres entre <strong>18 e 60 anos</strong> que desejam:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Emagrecer de Forma Saudável</h3>
                  <p className="text-gray-600 text-sm">Sem dietas radicais, sem sofrimento. Apenas resultados sustentáveis e duradouros.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Ter Disciplina e Acompanhamento</h3>
                  <p className="text-gray-600 text-sm">Com suporte profissional da nutricionista Rafaelen a cada passo.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Fazer Parte de um Grupo Motivador</h3>
                  <p className="text-gray-600 text-sm">Mulheres com o mesmo objetivo, trocando experiências e se apoiando diariamente.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary/5 to-white border border-primary/10 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Star className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-2">Transformar Seu Estilo de Vida</h3>
                  <p className="text-gray-600 text-sm">Criar hábitos saudáveis que vão além das 6 semanas do programa.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 p-6 bg-green-50 border-l-4 border-primary rounded-r-2xl"
          >
            <p className="text-secondary font-semibold text-center">
              <span className="text-primary">✓</span> Se você se identificou, este grupo foi feito para VOCÊ!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
