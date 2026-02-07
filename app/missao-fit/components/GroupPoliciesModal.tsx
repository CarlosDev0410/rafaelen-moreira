"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckSquare } from "lucide-react";

interface GroupPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GroupPoliciesModal({ isOpen, onClose }: GroupPoliciesModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-primary/10 p-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-secondary">
              Políticas do Grupo Missão FIT
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-full transition-colors text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                 <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <CheckSquare size={18}/> Observações Importantes:
                 </h4>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"/>
                        <span>
                            Forma de pagamento: <strong>dinheiro, pix ou cartão</strong> (com acréscimo).
                        </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"/>
                        <span>
                            Só pode entrar no grupo oficial após o <strong>pagamento quitado</strong>.
                        </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"/>
                        <span>
                            <strong>Não devolvemos valores pagos</strong> após iniciar o grupo. Caso haja desistência no meio do caminho, o valor pago ficará de crédito para a próxima temporada.
                        </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"/>
                        <span>
                            Os resultados são consequências do seu esforço. <strong>Quanto mais você se esforça, mais peso perde!</strong>
                        </span>
                    </li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-gray-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Entendi e Concordo
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
