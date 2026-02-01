"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana Silva",
      result: "-12kg em 3 meses",
      text: "Eu nunca imaginei que dieta pudesse ser tão tranquila. A Rafaelen adaptou tudo à minha rotina corrida e eu não passei fome nem vontade!",
    },
    {
      name: "Carlos Eduardo",
      result: "Ganho de massa e disposição",
      text: "Procurei a nutri para melhorar meu rendimento no crossfit e o resultado foi incrível. Mudei minha composição corporal totalmente!",
    },
    {
      name: "Juliana Costa",
      result: "Reeducação definitiva",
      text: "Aprendi a comer de verdade. Hoje tenho autonomia nas minhas escolhas e me sinto muito mais saudável e disposta.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            O que dizem meus <span className="text-primary">pacientes</span>
          </h2>
          <p className="text-secondary-light text-lg">
            Histórias reais de transformação e saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-secondary-light italic mb-6 flex-grow">&quot;{t.text}&quot;</p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-secondary text-lg">{t.name}</p>
                <p className="text-primary text-sm font-semibold">{t.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
