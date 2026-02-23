"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const equipmentMedia = [
    { type: 'video' as const, src: '/equipment.1.mp4' },
    { type: 'image' as const, src: '/equipment.1.jpg' },
    { type: 'video' as const, src: '/equipment.2.mp4' },
    { type: 'image' as const, src: '/equipment.2.jpg' },
    { type: 'image' as const, src: '/equipment.3.jpg' },
    { type: 'video' as const, src: '/equipment.3.mp4' },
    { type: 'image' as const, src: '/equipment.4.jpg' },
    { type: 'image' as const, src: '/equipment.5.jpg' },
];

const athletePhotos = [
    '/competetion.1.jpg',
    '/competetion.2.jpg',
    '/competetion.3.jpg',
    '/competetion.4.jpg',
];

export default function PhilosophyFacility() {
    return (
        <>
            {/* ─── Philosophy Section ─── */}
            <section id="philosophy" className="relative bg-ug-dark py-16 sm:py-24 md:py-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-medium">Our Philosophy</p>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6 sm:mb-8">
                            This Is Not <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">A Commercial Gym</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light px-2">
                            We are a crucible. Here, iron sharpens iron. Our facility is built for those who demand more from themselves.
                            No frills. No distractions. Just raw power and undeniable results.
                            <span className="block mt-3 text-white font-medium">This is where legends are forged.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Equipment & Facility Grid ─── */}
            <section id="facility" className="relative bg-ug-black py-14 sm:py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-10 gap-3"
                    >
                        <div>
                            <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1 sm:mb-2 font-medium">The Facility</p>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                                Built For The Unbreakable
                            </h2>
                        </div>
                        <Link
                            href="#contact"
                            className="group flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors"
                        >
                            Visit Us
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Equipment Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
                        {equipmentMedia.map((media, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className={`relative group overflow-hidden bg-ug-dark ${i === 0
                                        ? 'col-span-2 row-span-2 aspect-square'
                                        : 'aspect-[4/5]'
                                    }`}
                            >
                                {media.type === 'video' ? (
                                    <video
                                        autoPlay loop muted playsInline
                                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        src={media.src}
                                    />
                                ) : (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        style={{ backgroundImage: `url('${media.src}')` }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Our Athletes ─── */}
            <section className="relative bg-ug-dark py-14 sm:py-20 md:py-28">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 sm:mb-10"
                    >
                        <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1 sm:mb-2 font-medium">Our Athletes</p>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                            Representing UG On Stage
                        </h2>
                        <p className="text-gray-400 text-xs sm:text-sm font-light mt-2 sm:mt-3 max-w-xl">
                            These athletes train at Underground Fitness and carry our flag at national and international powerlifting competitions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-3">
                        {athletePhotos.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="relative group overflow-hidden aspect-[3/4] bg-ug-dark"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    style={{ backgroundImage: `url('${src}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── UG Merch ─── */}
            <section className="relative bg-ug-black py-14 sm:py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 sm:mb-10"
                    >
                        <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-1 sm:mb-2 font-medium">Official Gear</p>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
                            UG Merch
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {['/merch collab.jpg', '/merch collab 2.jpg'].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="relative group overflow-hidden aspect-video bg-ug-dark"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: `url('${src}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
