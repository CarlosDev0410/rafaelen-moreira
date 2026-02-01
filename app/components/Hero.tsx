"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-40 overflow-hidden bg-gradient-to-br from-background via-green-50/30 to-background-alt"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-b from-primary-light/20 to-transparent -z-10 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-linear-to-t from-accent/5 to-transparent -z-10 blur-3xl opacity-50" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/*<div className="inline-block px-3 py-1 bg-primary-light/50 border border-primary-light rounded-full text-primary-dark text-sm font-semibold tracking-wide uppercase">
            Nutrição Inteligente
          </div>*/}
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-secondary">
            Transforme sua <span className="text-primary italic">saúde</span> através da alimentação.
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-light max-w-lg leading-relaxed">
            Emagrecimento definitivo e bem-estar, sem dietas restritivas. 
            Uma abordagem personalizada para você viver sua melhor versão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/552175047225"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center"
            >
              Agendar Consulta
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white border border-gray-200 text-secondary hover:text-primary hover:border-primary rounded-full font-semibold shadow-sm hover:shadow-md transition-all text-center"
            >
              Saiba Mais
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-gray-100 mt-8">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-gray-500">Pacientes Atendidos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-gray-500">Personalizado</p>
            </div>
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full hidden md:block"
        >
           {/* Decorative Circle */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full blur-2xl" />
           
           <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
             {/* Using the provided photo here - normally would use a 'Hero' shot but this is what we have */}
             <Image 
                src="/hero1.jpeg" 
                alt="Nutricionista Rafaelen Moreira"
                fill
                className="object-cover object-left"
                priority
             />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
           </div>

           {/* Floating Card */}
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 1, duration: 0.5 }}
             className="absolute bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs z-20"
           >
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                 🍎
               </div>
               <div>
                 <p className="font-bold text-sm">Plano Alimentar</p>
                 <p className="text-xs text-gray-500">100% individualizado</p>
               </div>
             </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
