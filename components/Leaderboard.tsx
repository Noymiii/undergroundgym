"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Crown } from "lucide-react";
import Link from "next/link";

// Mock data until Supabase is fully connected
const mockLeaderboard = [
    { id: 1, name: "Big Ramy", weightClass: "120kg+", squat: 350, bench: 220, deadlift: 380, total: 950 },
    { id: 2, name: "Chris B.", weightClass: "105kg", squat: 320, bench: 200, deadlift: 360, total: 880 },
    { id: 3, name: "John Doe", weightClass: "93kg", squat: 280, bench: 180, deadlift: 310, total: 770 },
    { id: 4, name: "Jane Smith", weightClass: "72kg", squat: 180, bench: 100, deadlift: 200, total: 480 },
    { id: 5, name: "Alex K.", weightClass: "83kg", squat: 240, bench: 150, deadlift: 270, total: 660 },
];

export default function Leaderboard() {
    return (
        <section id="the-ug-fam" className="py-24 bg-ug-black relative overflow-hidden">
            {/* Paint Splatter Gritty Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
                style={{ backgroundImage: "url('/ug-fam-bg.jpg')" }}
            />
            {/* Subtle Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-ug-black/90 via-transparent to-ug-black/90" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-gray-500 shadow-2xl relative"
                    >
                        <Trophy className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4"
                    >
                        The UG <span className="text-gray-300">Fam</span> Leaderboard
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg mb-8"
                    >
                        Numbers don&apos;t lie. See who runs the iron. Talk to a coach to verify your 1-rep maxes and claim your spot on the wall.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/book"
                            className="inline-block bg-white text-ug-black px-8 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        >
                            Book A Max Out Session
                        </Link>
                    </motion.div>
                </div>

                {/* Leaderboard Table */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bg-ug-dark rounded-xl border border-ug-gray overflow-hidden shadow-2xl"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-widest text-gray-400">
                                    <th className="p-4 font-bold w-16 text-center">Rank</th>
                                    <th className="p-4 font-bold">Lifter</th>
                                    <th className="p-4 font-bold text-center">Class</th>
                                    <th className="p-4 font-bold text-right">Squat</th>
                                    <th className="p-4 font-bold text-right">Bench</th>
                                    <th className="p-4 font-bold text-right">Deadlift</th>
                                    <th className="p-4 font-bold text-right text-gray-300">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {mockLeaderboard.sort((a, b) => b.total - a.total).map((lifter, index) => (
                                    <tr
                                        key={lifter.id}
                                        className="hover:bg-white/[0.02] transition-colors group"
                                    >
                                        <td className="p-4 text-center font-bold">
                                            {index === 0 ? <Crown className="w-5 h-5 text-yellow-500 mx-auto" /> :
                                                index === 1 ? <Medal className="w-5 h-5 text-gray-400 mx-auto" /> :
                                                    index === 2 ? <Medal className="w-5 h-5 text-amber-600 mx-auto" /> :
                                                        <span className="text-gray-500">{index + 1}</span>}
                                        </td>
                                        <td className="p-4 font-bold text-white tracking-wide">{lifter.name}</td>
                                        <td className="p-4 text-center text-sm text-gray-400">{lifter.weightClass}</td>
                                        <td className="p-4 text-right font-mono text-gray-300 group-hover:text-white transition-colors">{lifter.squat}kg</td>
                                        <td className="p-4 text-right font-mono text-gray-300 group-hover:text-white transition-colors">{lifter.bench}kg</td>
                                        <td className="p-4 text-right font-mono text-gray-300 group-hover:text-white transition-colors">{lifter.deadlift}kg</td>
                                        <td className="p-4 text-right font-mono text-gray-300 font-bold text-lg">{lifter.total}kg</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-black/40 p-4 text-center border-t border-white/5">
                        <p className="text-xs text-gray-500">Totals are sum of highest Squat, Bench Press, and Deadlift. Verified by coaches.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
