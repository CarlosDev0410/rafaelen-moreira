"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "../hooks/useScroll";

const NAV_LINKS = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Especialidades", href: "#specialties" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
];

interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  customLinks?: NavLink[];
  customCTA?: {
    text: string;
    href: string;
  };
}

export default function Header({ customLinks, customCTA }: HeaderProps = {}) {
  const isScrolled = useScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Usa links customizados se fornecidos, senão usa os padrões
  const navLinks = customLinks || NAV_LINKS;

  // Função para navegar de forma inteligente
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Se o href é apenas "#" ou vazio, navega para a home
    if (href === "#" || href === "/") {
      router.push("/");
      return;
    }

    // Se é um link de âncora (#section)
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Se não está na home, navega para a home com a hash
      router.push(`/${href}`);
    }
  };

  // Quando navegamos para a home com hash, espera carregar e rola
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash;
      // Aguarda um frame para garantir que o DOM está pronto
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative h-10 w-40 md:h-20 md:w-70"
          aria-label="Ir para a página inicial"
        >
          <Image
            src="/Logo.png"
            alt="Rafaelen Moreira Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 160px, 280px"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-secondary hover:text-primary transition-colors font-medium text-sm tracking-wide cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href={customCTA?.href || "https://wa.me/552175047225"}
            target={customCTA?.href ? undefined : "_blank"}
            rel={customCTA?.href ? undefined : "noopener noreferrer"}
            onClick={customCTA?.href ? (e) => handleNavClick(e, customCTA.href) : undefined}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
            aria-label={customCTA?.text ? customCTA.text : "Agendar consulta no WhatsApp"}
          >
            {customCTA?.text || "Agendar Consulta"}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4" aria-label="Navegação Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-secondary hover:text-primary font-medium text-lg py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={customCTA?.href || "https://wa.me/552175047225"}
                target={customCTA?.href ? undefined : "_blank"}
                rel={customCTA?.href ? undefined : "noopener noreferrer"}
                onClick={customCTA?.href ? (e) => handleNavClick(e, customCTA.href) : undefined}
                className="bg-primary hover:bg-primary-dark text-center text-white px-6 py-3 rounded-full font-semibold shadow-md mt-2"
              >
                {customCTA?.text || "Agendar Consulta"}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
