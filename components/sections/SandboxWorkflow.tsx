"use client";

import { motion } from "framer-motion";
import { Lock, Server, Share2, CheckCircle2, ShieldAlert } from "lucide-react";

export const SandboxWorkflow = () => {

    const steps = [
        {
            id: 1,
            title: "Hipótesis de Negocio",
            desc: "Tu equipo identifica una oportunidad de IA o Automatización bloqueada por Compliance.",
            icon: ShieldAlert,
            color: "text-red-400",
            bg: "bg-red-400/10",
            border: "border-red-400/20"
        },
        {
            id: 2,
            title: "Desarrollo en Sandbox",
            desc: "Soluciones Area construye el prototipo en un entorno aislado, cifrado y fuera de tu red core.",
            icon: Lock,
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20"
        },
        {
            id: 3,
            title: "Validación Segura",
            desc: "Pruebas de usuario y estrés sin riesgos. Trazabilidad total de datos 'dummy' o anonimizados.",
            icon: CheckCircle2,
            color: "text-secondary",
            bg: "bg-secondary/10",
            border: "border-secondary/20"
        },
        {
            id: 4,
            title: "Entrega Blindada",
            desc: "El código maduro y auditado se empaqueta en contenedores seguros listos para tu infraestructura.",
            icon: Server,
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20"
        }
    ];

    return (
        <section className="relative py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="mb-16 text-center">
                    <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Metodología Exclusiva</span>
                    <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">The Secure Innovation Bridge</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Cómo llevamos la Inteligencia Artificial a la Aseguradora sin activar las alarmas de Ciberseguridad.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">

                    {/* Connector Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full hidden md:block">
                        <div className="h-0.5 w-full bg-gradient-to-r from-red-400/20 via-primary/50 to-green-400/20 border-t border-dashed border-white/10" />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className={`relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border ${step.border} ${step.bg} backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-transform group-hover:scale-110`}>
                                <step.icon className={`h-8 w-8 ${step.color}`} />
                                {/* Connector Dot */}
                                <div className="absolute -z-10 h-20 w-20 rounded-full bg-white/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Security Badge */}
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/5 px-6 py-2 text-sm text-green-400">
                        <ShieldAlert className="h-4 w-4" />
                        <span>Normativa Compatible: CNSF / GDPR / ISO 27001</span>
                    </div>
                </div>

            </div>
        </section>
    );
};
