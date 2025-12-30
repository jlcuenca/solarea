"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Cpu, Layers, BarChart3 } from "lucide-react";

const features = [
    {
        title: "Architecture API-First",
        desc: "Orquestación modular diseñada para integrarse con cualquier ecosistema legado o moderno.",
        icon: Layers,
        color: "blue",
    },
    {
        title: "Cloud-Native & Serverless",
        desc: "Escalabilidad infinita con costos optimizados. Sin servidores que gestionar, solo negocio que crecer.",
        icon: Zap,
        color: "amber",
    },
    {
        title: "Precision Analytics",
        desc: "Insights actuariales en tiempo real. Decisiones basadas en datos, no en suposiciones.",
        icon: BarChart3,
        color: "emerald",
    },
];

export const NSCPlatform = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-[#020617]">
            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            <Shield className="h-3 w-3" />
                            NSC Insurance Core
                        </motion.div>

                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground mb-10 max-w-xl"
                    >
                        NSC no es solo un sistema, es una ventaja competitiva. Inspirado en estándares globales de orquestación,
                        permitimos a las aseguradoras lanzar productos en días, no meses.
                    </motion.p>

                    <div className="grid grid-cols-1 gap-6">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className={`h-10 w-10 flex-shrink-0 rounded-lg flex items-center justify-center ${f.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                                    f.color === "amber" ? "bg-amber-500/20 text-amber-400" :
                                        "bg-emerald-500/20 text-emerald-400"
                                    }`}>
                                    <f.icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">{f.title}</h4>
                                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual representation / Mockup area */}
                <div className="flex-1 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square max-w-lg mx-auto"
                    >
                        {/* Decorative rings */}
                        <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-10 border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Central Hub */}
                        <div className="absolute inset-[30%] bg-gradient-to-br from-primary to-purple-600 rounded-3xl shadow-[0_0_50px_rgba(14,165,233,0.3)] flex items-center justify-center backdrop-blur-xl border border-white/20">
                            <Cpu className="h-16 w-16 text-white" />
                            <div className="absolute -top-2 -right-2 h-6 w-6 bg-emerald-500 rounded-full animate-pulse border-4 border-[#020617]" />
                        </div>

                        {/* Floating Nodes */}
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute h-14 w-14 rounded-xl bg-card border border-white/10 flex items-center justify-center text-primary shadow-xl"
                                style={{
                                    top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                                    left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                {i % 2 === 0 ? <Globe className="h-6 w-6" /> : <Zap className="h-6 w-6" />}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
        </section >
    );
};
