"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Cloud, ArrowRight, Lock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-background">
      <Navbar />

      {/* Background Decor - "Secure Grid" */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      {/* Radial Gradient for Focus */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-primary/10 to-transparent opacity-40 mix-blend-screen" />

      {/* HERO SECTION */}
      <main className="z-10 flex w-full max-w-7xl flex-col items-center px-4 pt-32 pb-20 text-center sm:px-6 lg:px-8">

        {/* Badge: Secure Sandbox */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_15px_rgba(14,165,233,0.3)] backdrop-blur-md"
        >
          <Lock className="mr-2 h-4 w-4" />
          The Secure Innovation Bridge
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Innovación Segura para el <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
            Sector Asegurador
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Tu <strong>Sandbox Seguro</strong> para desarrollar Inteligencia Artificial, Microservicios y RFID sin riesgos.
          Validamos en entornos aislados, entregamos software blindado para integración Core.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <button className="group inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]">
            Explorar Soluciones
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Sesión+Estratégica+con+Soluciones+Area&add=info@solucionesarea.com&details=Solicitud+de+consultoría+sobre+Secure+Sandbox+y+Desarrollo+de+Software.&sf=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-muted bg-background/50 px-8 py-3 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-muted/50 hover:text-primary"
          >
            Agendar Consultoría
          </a>
        </motion.div>

        {/* Feature Grid (Hard Skills) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {/* Card 1: AI & Sandbox */}
          <div className="relative group overflow-hidden rounded-2xl border border-border bg-card/50 p-8 text-left backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Secure AI Sandbox</h3>
            <p className="text-muted-foreground">Entornos aislados para experimentar con IA sin comprometer datos sensibles ni compliance.</p>
          </div>

          {/* Card 2: Microservices */}
          <div className="relative group overflow-hidden rounded-2xl border border-border bg-card/50 p-8 text-left backdrop-blur-sm transition-all hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">Cloud & Microservicios</h3>
            <p className="text-muted-foreground">Arquitecturas distribuidas, escalables y resilientes para el core de negocio moderno.</p>
          </div>

          {/* Card 3: RFID & IOT */}
          <div className="relative group overflow-hidden rounded-2xl border border-border bg-card/50 p-8 text-left backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground">RFID & IoT Control</h3>
            <p className="text-muted-foreground">Trazabilidad física en tiempo real integrada a tus sistemas digitales de gestión.</p>
          </div>

        </motion.div>
      </main>

      {/* CLIENTS SECTION */}
      <ClientsSection />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* footer */}
      <Footer />
    </div>
  );
}
