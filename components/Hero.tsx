"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover"
            >
                <source src="/gym tour.mp4" type="video/mp4" />
            </video>

            {/* Overlays */}
            <div className="absolute inset-0 z-[1] bg-black/50" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-transparent to-black" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl px-5 sm:px-6 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 sm:mb-6 px-4 sm:px-5 py-1.5 sm:py-2 border border-white/20 backdrop-blur-sm bg-white/5 text-gray-300 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] font-light"
                >
                    The First World Class Iron Gym in the Philippines
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-[3rem] sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-4 sm:mb-6"
                >
                    Earned<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                        Not Given
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl font-light tracking-wide mb-8 sm:mb-10 leading-relaxed px-2"
                >
                    Hardcore Powerlifting & Bodybuilding. Largest gym with the lowest prices in the South.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
                >
                    <Link
                        href="/book"
                        className="group flex items-center justify-center gap-2 sm:gap-3 bg-white text-black w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-95"
                    >
                        Start Your Journey
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                        href="#pricing"
                        className="flex items-center justify-center gap-2 border border-white/30 text-white w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-white/10 hover:border-white/50 transition-all"
                    >
                        View Pricing
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="flex flex-col items-center animate-bounce">
                    <ChevronDown className="h-5 w-5 sm:h-7 sm:w-7 text-gray-600 -mb-3 sm:-mb-4" strokeWidth={1.5} />
                    <ChevronDown className="h-5 w-5 sm:h-7 sm:w-7 text-gray-400 -mb-3 sm:-mb-4" strokeWidth={1.5} />
                    <ChevronDown className="h-5 w-5 sm:h-7 sm:w-7 text-white" strokeWidth={1.5} />
                </div>
            </motion.div>
        </section>
    );
}
