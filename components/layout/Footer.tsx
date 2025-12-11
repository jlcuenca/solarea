"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-[#020617] pt-16 pb-8 text-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4 relative h-12 w-48">
                            <Image
                                src="/branding/imago_tipo_area_alfa.png"
                                alt="Soluciones Area"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="max-w-md text-muted-foreground">
                            El puente seguro entre la innovación tecnológica y la realidad corporativa.
                            Desarrollamos soluciones de misión crítica para el sector asegurador e industrial.
                        </p>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h3 className="mb-4 font-semibold text-white">Soluciones</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                                    AI Secure Sandbox
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                                    Cloud Microservices
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                                    RFID & IoT Tracking
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                                    Modernización Legacy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="mb-4 font-semibold text-white">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>contacto@solucionesarea.com</span>
                            </li>
                            <li className="flex gap-4 mt-4">
                                <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 sm:flex-row">
                    <p className="text-muted-foreground">
                        &copy; {new Date().getFullYear()} Soluciones Area. Todos los derechos reservados.
                    </p>
                    <div className="mt-4 flex gap-6 sm:mt-0">
                        <Link href="#" className="text-muted-foreground hover:text-white">Privacidad</Link>
                        <Link href="#" className="text-muted-foreground hover:text-white">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
