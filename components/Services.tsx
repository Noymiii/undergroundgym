"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, TrendingDown, Target, Zap } from "lucide-react";

export default function Services() {
    const tracks = [
        {
            title: "Boxing / Muay Thai",
            description: "Learn striking techniques, improve cardiovascular conditioning, and unleash your inner fighter with our expert coaches.",
            icon: <Target className="w-8 h-8 text-gray-300 mb-4" />,
            bgImage: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Weight Loss",
            description: "Science-backed programming and nutritional guidance designed specifically to shred fat and build lean muscle.",
            icon: <Activity className="w-8 h-8 text-gray-300 mb-4" />,
            bgImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Body Building",
            description: "Hypertrophy-focused training to sculpt your physique, increase muscle mass, and perfect your stage presentation.",
            icon: <TrendingDown className="w-8 h-8 text-gray-300 mb-4 -scale-y-100" />,
            bgImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Athlete Training",
            description: "Performance, power, and agility programming for competitive athletes looking to dominate their sport.",
            icon: <Zap className="w-8 h-8 text-gray-300 mb-4" />,
            bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
    ];

    const coaches = [
        {
            name: "Coach Rnel",
            title: "Head Powerlifting Coach",
            specialty: "SBD Specialist",
            image: "https://images.unsplash.com/photo-1567598508481-65985588e295?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "Coach Marcus",
            title: "Striking Coach",
            specialty: "Muay Thai & Boxing",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        }
    ];

    return (
        <section id="services" className="py-24 bg-ug-dark relative gritty-texture">
            {/* Decorative separator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4"
                    >
                        Specialized <span className="text-gray-300">Tracks</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Choose your weapon. Our expert programming is designed to push you beyond your limits.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={track.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${track.bgImage})` }}
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500">
                                <div className="bg-white w-fit p-3 rounded-lg backdrop-blur-sm mb-4 border border-gray-500 group-hover:border-gray-500 transition-colors">
                                    {track.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white uppercase mb-2">{track.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 line-clamp-2">
                                    {track.description}
                                </p>

                                {/* Arrow indicator */}
                                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 border border-white/10">
                                    <ArrowRight className="text-white w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Coaches Section */}
                <div id="coaches" className="pt-12 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-2"
                            >
                                Elite <span className="text-gray-300">Coaching</span>
                            </motion.h2>
                            <p className="text-gray-400">Train with the best minds in the South.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 text-gray-300 font-bold uppercase tracking-wider hover:text-white transition-colors mt-4 md:mt-0">
                            View All Coaches <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {coaches.map((coach, i) => (
                            <motion.div
                                key={coach.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                className="flex flex-col sm:flex-row bg-ug-black rounded-xl overflow-hidden border border-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 group cursor-pointer"
                            >
                                <div
                                    className="w-full sm:w-2/5 h-64 sm:h-auto bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"
                                    style={{ backgroundImage: `url(${coach.image})` }}
                                />
                                <div className="p-8 w-full sm:w-3/5 flex flex-col justify-center">
                                    <div className="text-xs text-gray-300 font-bold uppercase tracking-widest mb-2">{coach.specialty}</div>
                                    <h3 className="text-2xl font-bold text-white uppercase mb-1">{coach.name}</h3>
                                    <p className="text-gray-400 mb-6">{coach.title}</p>
                                    <button className="w-full bg-white/5 hover:bg-white text-white py-3 rounded text-sm font-bold uppercase tracking-wider transition-colors">
                                        Book Session
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="w-full md:hidden flex items-center justify-center gap-2 text-gray-300 font-bold uppercase tracking-wider mt-8 p-4 border border-white/5 rounded-lg active:bg-white/5">
                        View All Coaches <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </section>
    );
}
