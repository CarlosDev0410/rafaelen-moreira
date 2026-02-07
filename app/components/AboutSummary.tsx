"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function AboutSummary() {
  const benefits = [
    "Atendimento 100% individualizado",
    "Foco em reeducação alimentar",
    "Suporte contínuo pelo WhatsApp",
    "Plano alimentar prático e real",
  ];

  return (
    <section id="about" className="py-25 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side - visible on mobile too */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Rafaelen Moreira em atendimento"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4 hidden md:block" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                Sobre Mim
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Muito prazer, sou a <span className="text-primary">Rafaelen Moreira</span>
              </h2>
            </div>

            <p className="text-secondary-light text-lg leading-relaxed">
              Minha missão é simplificar sua relação com a comida. Acredito que a 
              nutrição vai muito além de contar calorias: é sobre nutrir o corpo, 
              respeitar sua rotina e alcançar objetivos de forma sustentável.
            </p>

            <ul className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-secondary">
                  <CheckCircle className="text-primary h-5 w-5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 group text-primary font-bold text-lg hover:text-primary-dark transition-colors"
                title="Saiba mais sobre Rafaelen"
              >
                Conheça minha trajetória
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
