"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Trophy, Users, CheckCircle2, Heart } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-10 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Zap className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">RESULTADOS COMPROVADOS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Por Que Você Deve Participar?
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Trophy className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Grupos de Emagrecimento Funcionam MUITO Mais Rápido</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quando você faz parte de um grupo com o mesmo objetivo, o <strong>incentivo mútuo acelera seus resultados</strong>. 
                    Ver outras mulheres conquistando suas metas te motiva a não desistir nos dias difíceis.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Users className="text-green-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Você NÃO Estará Sozinha Nessa Jornada</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ao contrário de tentar emagrecer sozinha, no <strong>Missão FIT</strong> você terá:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="text-primary shrink-0" size={20} />
                      <span>Apoio diário da nutricionista Rafaelen</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="text-primary shrink-0" size={20} />
                      <span>Grupo de mulheres com o mesmo objetivo</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="text-primary shrink-0" size={20} />
                      <span>Motivação constante para continuar firme</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Heart className="text-amber-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Disciplina Que Se Torna Hábito</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Em 6 semanas corridas, você não só emagrece — você <strong>transforma sua relação com a comida</strong> e 
                    cria uma rotina saudável que dura para sempre.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
