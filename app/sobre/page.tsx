import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { Check, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FloatingWhatsApp />

      {/* Hero for Inner Page */}
      <section className="pt-32 pb-12 bg-green-50/50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Sobre Mim
          </h1>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Conheça minha trajetória e entenda como posso te ajudar a conquistar seus objetivos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
         
         {/* Photo */}
         <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-8 border-white">
           <Image
             src="/profile.jpeg"
             alt="Nutricionista Rafaelen Moreira"
             fill
             className="object-cover"
           />
         </div>

         {/* Content */}
         <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary">
              Nutrição com <span className="text-primary">propósito</span>
            </h2>
            <div className="space-y-4 text-secondary-light leading-relaxed text-lg">
              <p>
                Olá! Sou Rafaelen Moreira, nutricionista apaixonada por transformar vidas através da alimentação.
              </p>
              <p>
                Minha jornada na nutrição começou com o desejo de entender como os alimentos podem ser nossos maiores aliados na busca por saúde e longevidade.
              </p>
              <p>
                Não acredito em dietas restritivas que excluem tudo o que você gosta. Meu método é baseado no equilíbrio, na reeducação alimentar e na individualidade biológica.
              </p>
              <p>
                Atuo com foco em emagrecimento, hipertrofia e tratamento de doenças crônicas, sempre respeitando a sua rotina e suas preferências.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mt-8">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Calendar className="text-primary w-6 h-6" />
                Como funciona o atendimento?
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Check className="text-primary w-5 h-5 shrink-0 mt-1" />
                  <span>Anamnese completa para entender seu histórico e rotina.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary w-5 h-5 shrink-0 mt-1" />
                  <span>Avaliação antropométrica (dobras cutâneas e bioimpedância).</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary w-5 h-5 shrink-0 mt-1" />
                  <span>Plano alimentar personalizado entregue no aplicativo.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-primary w-5 h-5 shrink-0 mt-1" />
                  <span>Suporte direto via WhatsApp para dúvidas.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
               <a
                href="https://wa.me/552175047225"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Agendar Consulta
              </a>
            </div>
         </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
