"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Sparkles, Heart } from "lucide-react";

export default function Hero() {
  const vagasRestantes = 15;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-32 overflow-hidden bg-linear-to-br from-green-50/50 via-white to-green-50/30"
      aria-label="Banner Promocional - Grupo de Emagrecimento"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/10 via-transparent to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-linear-to-tr from-accent/5 to-transparent -z-10" />
      
      {/* Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-40 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
      />

      <div className="container mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] w-full order-2 md:order-2 hidden md:block"
          >
            {/* Main Image Container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/missao-fit.png" 
                alt="Grupo de Emagrecimento - Transforme seu Corpo"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
              >
                <Sparkles size={16} />
                VAGAS LIMITADAS
              </motion.div>

              {/* Stats Overlay at Bottom */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">{vagasRestantes}</p>
                    <p className="text-xs text-gray-600">Vagas</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">6</p>
                    <p className="text-xs text-gray-600">Semanas</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-xs text-gray-600">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1 md:order-1"
          >
            {/* Limited Time Badge 
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/30 border-2 border-primary rounded-full text-primary-dark font-semibold text-sm"
            >
              <Clock size={16} className="animate-pulse" />
              INSCRIÇÕES ABERTAS - TEMPO LIMITADO
            </motion.div> */}

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-secondary text-center">
              Grupo de <span className="text-primary">Emagrecimento</span><br /> Missão <span className="text-primary">FIT</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-secondary-light leading-relaxed text-center">
              Participe de uma mudança real no seu estilo de vida. Com desafios semanais, que farão mudar sua maneira de se alimentar, resultando na promoção da sua saúde.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Heart size={14} className="text-primary" />
                </div>
                <p className="text-secondary-light">
                  <strong className="text-secondary">Encontros presenciais e on-line.</strong>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Users size={14} className="text-primary" />
                </div>
                <p className="text-secondary-light">
                  <strong className="text-secondary">Suporte em grupo</strong> + acompanhamento nutricional semanal
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Sparkles size={14} className="text-primary" />
                </div>
                <p className="text-secondary-light">
                  <strong className="text-secondary">Desafios semanais</strong>
                </p>
              </div>
            </div>

            {/* Urgency Alert */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-1 rounded-r-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <Users size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-amber-900 text-sm">
                    Apenas {vagasRestantes} vagas disponíveis
                  </p>
                  <p className="text-xs text-amber-700">
                    Garanta sua vaga antes que esgote
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link
                href="/missao-fit"
                className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all text-center overflow-hidden"
              >
                <span className="relative z-10">Quero Minha Vaga</span>
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </Link>
              
              <Link
                href="/missao-fit"
                className="px-8 py-4 bg-white border-2 border-gray-200 text-secondary hover:text-primary hover:border-primary rounded-full font-semibold shadow-sm hover:shadow-md transition-all text-center"
              >
                Ver Detalhes
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
