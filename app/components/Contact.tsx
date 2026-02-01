"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary-dark text-white relative overflow-hidden" aria-label="Contato">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Vamos começar sua transformação?
            </h2>
            <p className="text-green-100 text-lg leading-relaxed max-w-md">
              Não deixe sua saúde para depois. Agende sua consulta hoje mesmo e dê o primeiro passo para sua melhor versão.
            </p>
            
            <a
              href="https://wa.me/552175047225"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-lg transform hover:-translate-y-1"
              aria-label="Agendar via WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
              Agendar via WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Consultório</h4>
                <p className="text-green-100">
                  Rua Diderot, Lote 1, Quadra 33<br />
                  Parque Equitativa - Duque de Caxias - RJ
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="p-3 bg-white/20 rounded-full">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">Instagram</h4>
                <a 
                  href="https://instagram.com/rafah_nutrii" 
                  target="_blank" 
                  className="text-green-100 hover:text-white underline decoration-green-100/50"
                  aria-label="Visitar Instagram"
                >
                  @rafah_nutrii
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="p-3 bg-white/20 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1">E-mail</h4>
                <a 
                  href="mailto:contato@rafaelenmoreira.com" 
                  className="text-green-100 hover:text-white underline decoration-green-100/50"
                  aria-label="Enviar e-mail para contato"
                >
                  rafarafaelen@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
