import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "./components/HeroSection";
import TargetAudienceSection from "./components/TargetAudienceSection";
import BenefitsSection from "./components/BenefitsSection";
import FaqSection from "./components/FaqSection";
import RegistrationForm from "./components/RegistrationForm";

export const metadata: Metadata = {
  title: "Missão FIT | Grupo de Emagrecimento Online",
  description: "Participe do Missão FIT: 6 semanas de acompanhamento nutricional, desafios semanais e grupo de apoio para transformar seus hábitos e seu corpo.",
  openGraph: {
    title: "Missão FIT - Desafio de Emagrecimento 6 Semanas",
    description: "Garanta sua vaga no grupo exclusivo da Nutri Rafaelen Moreira. Resultados reais, sem dietas malucas.",
    images: ["/missao-fit.png"],
    type: "website",
  },
};

export default function MissaoFitPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        customLinks={[
          { name: "Início", href: "/" },
          { name: "Para Quem É?", href: "#para-quem" },
          { name: "Por Que Participar?", href: "#beneficios" },
          { name: "Perguntas", href: "#faq" },
          { name: "O Que Inclui", href: "#incluso" }
        ]}
        customCTA={{
          text: "Participe Agora",
          href: "#inscricao"
        }}
      />
      
      <HeroSection />
      <TargetAudienceSection />
      <BenefitsSection />
      <FaqSection />
      <RegistrationForm />
      
      <Footer />
    </div>
  );
}
