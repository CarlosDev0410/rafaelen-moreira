import Header from "./components/Header";
import Hero from "./components/Hero";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AboutSummary from "./components/AboutSummary";
import Specialties from "./components/Specialties";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary-light selection:text-primary-dark">
      <SpeedInsights/>
      <Header />
      
      <Hero />
      
      <AboutSummary />
      
      <Specialties />
      
      <Testimonials />

      <Contact />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
