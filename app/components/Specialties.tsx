"use client";

import { motion } from "framer-motion";
import { Scale, Heart, Apple, Weight } from "lucide-react";

export default function Specialties() {
  const specialties = [
    {
      icon: Scale,
      title: "Emagrecimento",
      desc: "Elimine peso de forma estratégica e sem restrições severas. Foque em resultados reais e definitivos através de uma rotina alimentar leve e sustentável.",
    },
    {
      icon: Weight,
      title: "Ganho de Peso",
      desc: "Construa massa magra e ganhe corpo com qualidade. Um plano focado em hipertrofia e saúde para quem deseja resultados sólidos e sem acúmulo de gordura.",
    },
    {
      icon: Heart,
      title: "Reeducação Alimentar",
      desc: "Aprenda a fazer escolhas melhores e construa hábitos saudáveis para a vida toda.",
    },
    {
      icon: Apple,
      title: "Bem-Estar Geral",
      desc: "Melhore sua energia, sono e disposição através de uma alimentação equilibrada.",
    },
  ];

  return (
    <section id="specialties" className="py-24 bg-background-alt relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Como posso te <span className="text-primary">ajudar?</span>
          </h2>
          <p className="text-secondary-light text-lg">
            Minha abordagem é focada em resultados reais e no seu bem-estar.
            Escolha viver sua melhor versão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {item.title}
              </h3>
              <p className="text-secondary-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
