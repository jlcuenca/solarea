"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Servicios & Sandbox", href: "/servicios" },
        { name: "Casos de Éxito", href: "/#clientes" },
        { name: "Contacto", href: "/#contacto" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg"
                : "bg-transparent border-b border-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative h-12 w-48 transition-transform group-hover:scale-105">
                            <Image
                                src="/branding/imago_tipo_area_alfa.png"
                                alt="Soluciones Area Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Sesión+Estratégica+con+Soluciones+Area&add=info@solucionesarea.com&details=Solicitud+de+consultoría+sobre+Secure+Sandbox+y+Desarrollo+de+Software.&sf=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
                            >
                                Agendar Cita
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-white/5"
                    >
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Sesión+Estratégica+con+Soluciones+Area&add=info@solucionesarea.com&details=Solicitud+de+consultoría+sobre+Secure+Sandbox+y+Desarrollo+de+Software.&sf=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block mt-4 rounded-md bg-primary px-3 py-2 text-center text-base font-medium text-white shadow-lg shadow-primary/25"
                            >
                                Agendar Cita
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
