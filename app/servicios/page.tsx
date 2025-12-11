"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SandboxWorkflow } from "@/components/sections/SandboxWorkflow";
import { motion } from "framer-motion";
import { Database, Code2, Cpu, BarChart3, ScanFace, Globe } from "lucide-react";

export default function ServicesPage() {

    const services = [
        {
            title: "Desarrollo de Microservicios",
            desc: "Desacoplamos tu monolito. Arquitecturas ligeras en Go, Node.js o Python que permiten escalabilidad independiente y mantenimiento sencillo.",
            icon: Code2,
        },
        {
            title: "Soluciones Cloud & Serverless",
            desc: "Migración y optimización en AWS/Azure. Implementación de Lambdas y arquitecturas orientadas a eventos para reducir costos operativos.",
            icon: Globe,
        },
        {
            title: "RFID & Control de Activos",
            desc: "Sistemas 'Track & Trace' en tiempo real. Hardware RFID integrado a dashboards web para control total de inventarios y flotillas.",
            icon: ScanFace,
        },
        {
            title: "Data Engineering & Analytics",
            desc: "Pipelines de datos robustos. Transformamos datos crudos de múltiples fuentes en insights actuariales y comerciales listos para usar.",
            icon: Database,
        },
        {
            title: "End-User Computing (EUC)",
            desc: "Empoderamos a las áreas de negocio construyendo herramientas tácticas seguras que IT no tiene ancho de banda para desarrollar.",
            icon: BarChart3,
        },
        {
            title: "IA Generativa Aplicada",
            desc: "Chatbots de atención, análisis de siniestros y extracción automática de datos (OCR) implementados bajo protocolos de seguridad.",
            icon: Cpu,
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="relative pt-32 pb-20 px-4 text-center">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-20 pointer-events-none" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                    Ingeniería de Software <br /><span className="text-primary">Sin Fricción</span>
                </motion.h1>
                <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                    Desplegamos células de desarrollo de alto rendimiento que se integran como una extensión de tu equipo. Velocidad de Startup con rigor Enterprise.
                </p>
            </section>

            {/* The Sandbox Emphasis */}
            <SandboxWorkflow />

            {/* Services Grid */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors group"
                        >
                            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
