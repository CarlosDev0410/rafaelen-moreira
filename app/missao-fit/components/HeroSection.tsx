"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Clock } from "lucide-react";

export default function HeroSection() {
  const vagasRestantes = 15;

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-missao-fit.png"
          alt="Background Missão FIT"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Limited Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full font-bold text-xs shadow-lg">
              <Sparkles size={14} />
              APENAS {vagasRestantes} VAGAS DISPONÍVEIS
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 drop-shadow-sm">
              Grupo de emagrecimento Missão <span className="text-primary italic">FIT</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-light max-w-2xl mx-auto mb-6">
              6 semanas para transformar seu corpo e criar hábitos saudáveis que duram para sempre
            </p>
            
            {/* Price Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-sm border border-primary/20 rounded-xl shadow-sm hover:shadow-md transition-all">
              <span className="text-2xl font-black text-primary">R$ 150,00</span>
              <span className="bg-primary text-white text-[10px] uppercase px-2 py-1 rounded-md font-bold tracking-wider self-center">Única parcela</span>
            </div>
          </motion.div>

          {/* Stats Row - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
          >
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl text-center border border-white/50 shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-primary" size={24} />
              </div>
              <p className="font-bold text-lg text-secondary">6 Semanas</p>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-medium">Duração</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl text-center border border-white/50 shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="text-primary" size={24} />
              </div>
              <p className="font-bold text-lg text-secondary">15 Vagas</p>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-medium">Limitadas</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl text-center border border-white/50 shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="text-primary" size={24} />
              </div>
              <p className="font-bold text-lg text-secondary">100% Online</p>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-medium">Pelo WhatsApp</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
