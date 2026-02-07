"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Users, Clock } from "lucide-react";

export default function HeroSection() {
  const vagasRestantes = 15;

  return (
    <section id="hero" className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-br from-green-50/50 via-white to-primary/5">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary/10 to-transparent -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Limited Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
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
            className="text-center mb-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-3">
              Missão <span className="text-primary italic">FIT</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-light max-w-2xl mx-auto mb-4">
              6 semanas para transformar seu corpo e criar hábitos saudáveis que duram para sempre
            </p>
            
            {/* Price Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border-2 border-primary/20 rounded-xl">
              <span className="text-xl font-black text-primary">R$ 150,00</span>
              <span className="bg-primary text-white text-[10px] uppercase px-2 py-1 rounded-md font-bold tracking-wider">Única parcela</span>
            </div>
          </motion.div>

          {/* Event Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[250px] w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-8"
          >
            <Image
              src="/missao-fit.png"
              alt="Missão FIT - Grupo de Emagrecimento"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Overlay Stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl text-center">
                  <Calendar className="mx-auto mb-1 text-primary" size={20} />
                  <p className="font-bold text-sm text-secondary">6 Semanas</p>
                  <p className="text-[10px] text-gray-600 uppercase">Duração</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl text-center">
                  <Users className="mx-auto mb-1 text-primary" size={20} />
                  <p className="font-bold text-sm text-secondary">15 Vagas</p>
                  <p className="text-[10px] text-gray-600 uppercase">Limitadas</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl text-center">
                  <Clock className="mx-auto mb-1 text-primary" size={20} />
                  <p className="font-bold text-sm text-secondary">100% Online</p>
                  <p className="text-[10px] text-gray-600 uppercase">Pelo WhatsApp</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
