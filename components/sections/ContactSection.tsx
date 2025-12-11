"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Calendar } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contacto" className="relative py-24 bg-[#020617] overflow-hidden">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Copy & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Hablemos de Negocios</span>
                            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white leading-tight">
                                ¿Listo para acelerar tu <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Transformación Digital?</span>
                            </h2>
                            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                                Agenda una sesión estratégica de 30 minutos. Analizaremos tu arquitectura actual y te propondremos un plan de "Sandbox Seguro" sin compromiso.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Correo Electrónico</h3>
                                    <p className="text-muted-foreground">contacto@solucionesarea.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Oficinas Corporativas</h3>
                                    <p className="text-muted-foreground">Ciudad de México, México</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Form/Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md shadow-2xl"
                    >
                        <form action="https://formspree.io/f/mrbnoqjl" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white">Nombre</label>
                                    <input type="text" id="name" name="name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Ej. Ricardo Pérez" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-white">Empresa</label>
                                    <input type="text" id="company" name="company" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Ej. Seguros Atlas" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-white">Correo Corporativo</label>
                                <input type="email" id="email" name="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="nombre@empresa.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-white">¿Qué desafío te gustaría resolver?</label>
                                <textarea id="message" name="message" rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad..." required />
                            </div>

                            <button type="submit" className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-[1.02]">
                                <Send className="mr-2 h-5 w-5" />
                                Solicitar Propuesta
                            </button>

                            <p className="text-xs text-center text-muted-foreground mt-4">
                                Tus datos están protegidos bajo nuestros estrictos protocolos de privacidad.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
