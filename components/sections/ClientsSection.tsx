"use client";

import { motion } from "framer-motion";
import { Building2, Briefcase } from "lucide-react";

const clients = [
    { name: "Grupo Carso", category: "Industrial / Infraestructura" },
    { name: "Grupo Condumex", category: "Manufactura / Energía" },
    { name: "Nacobre", category: "Cobre / Aluminio" },
    { name: "Cigatam", category: "Consumo Masivo" },
    { name: "Inbursa*", category: "Sector Financiero" },
    { name: "Aseguradoras Tier-1", category: "Sector Seguros" },
];

export const ClientsSection = () => {
    return (
        <section id="clientes" className="relative w-full bg-[#050a14] py-24">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-secondary">
                        Trayectoria y Confianza
                    </h2>
                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Aliados Estratégicos
                    </h3>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Hemos entregado valor en los entornos corporativos más exigentes de México, hablando el idioma de la alta dirección y resolviendo con el rigor de la ingeniería avanzada.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-secondary/30 hover:bg-white/[0.04] group hover:-translate-y-1"
                        >
                            <div className="mb-4 h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-colors">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <span className="text-lg font-bold text-white text-center">{client.name}</span>
                            <span className="text-xs text-muted-foreground mt-1">{client.category}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Metric Strip */}
                <div className="mt-20 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 bg-white/[0.01] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    <div className="flex flex-col items-center py-6">
                        <span className="text-3xl font-bold text-white">100%</span>
                        <span className="text-sm text-muted-foreground mt-1">Cumplimiento Normativo</span>
                    </div>
                    <div className="flex flex-col items-center py-6">
                        <span className="text-3xl font-bold text-white">2x</span>
                        <span className="text-sm text-muted-foreground mt-1">Velocidad de Entrega (Sandbox)</span>
                    </div>
                    <div className="flex flex-col items-center py-6">
                        <span className="text-3xl font-bold text-white">Zero</span>
                        <span className="text-sm text-muted-foreground mt-1">Incidentes de Seguridad</span>
                    </div>
                </div>

            </div>
        </section>
    );
};
