"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/552175047225"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.div
        title="Agendar no WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={32} fill="white" />
      </motion.div>
    </a>
  );
}
