"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { label: "Philosophy", href: "#philosophy" },
    { label: "Facility", href: "#facility" },
    { label: "Membership", href: "#pricing" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-2xl"
                : "bg-gradient-to-b from-black/60 to-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer group">
                        <img
                            src="/logo.jpg"
                            alt="Underground Fitness Logo"
                            className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="relative text-gray-300 hover:text-white px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors group"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-3/4" />
                            </a>
                        ))}
                        <Link
                            href="/book"
                            className="ml-4 bg-white text-black px-7 py-2.5 text-sm font-bold uppercase tracking-widest transition-all hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/5 block px-4 py-3 text-base font-medium uppercase tracking-wider transition-colors rounded-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Link
                                href="/book"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block mt-3 w-full text-center bg-white text-black px-6 py-3.5 font-bold uppercase tracking-widest transition-colors hover:bg-gray-200"
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
