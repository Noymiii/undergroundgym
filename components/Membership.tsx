"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Walk-In",
        subtitle: "One Day Access",
        price: "₱100",
        period: "/Day",
        features: ["Student Rate: ₱75", "Full Facility Use", "Valid for 24 Hours", "No Commitment"],
        cta: "Drop In",
        featured: false,
    },
    {
        name: "Monthly Access",
        subtitle: "Commit to the Iron",
        price: "₱1,000",
        period: "/Month",
        features: ["Student Rate: ₱750", "24/7 Gym Access", "Full Facility Use", "No Lock-In Contract"],
        cta: "Become a Member",
        featured: true,
    },
];

export default function Membership() {
    return (
        <section id="pricing" className="relative bg-ug-dark py-16 sm:py-24 md:py-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-3 sm:mb-4 font-medium">Pricing</p>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 sm:mb-4">
                        Choose Your Path
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base font-light max-w-lg mx-auto px-2">
                        No hidden fees. No gimmicks. Just honest pricing for serious athletes.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className={`relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${plan.featured
                                ? "bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                                : "bg-ug-gray/50 border border-white/10"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-0 bg-black text-white text-[9px] sm:text-[10px] uppercase tracking-widest font-bold px-3 sm:px-4 py-1 sm:py-1.5">
                                    Best Value
                                </div>
                            )}

                            <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full">
                                <h3 className={`text-lg sm:text-xl font-black uppercase tracking-wider mb-1 ${plan.featured ? "text-black" : "text-white"
                                    }`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-5 sm:mb-6 ${plan.featured ? "text-black/60" : "text-gray-500"
                                    }`}>
                                    {plan.subtitle}
                                </p>

                                <div className="mb-6 sm:mb-8">
                                    <span className={`text-3xl sm:text-4xl md:text-5xl font-black ${plan.featured ? "text-black" : "text-white"
                                        }`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-xs sm:text-sm font-normal ml-1 ${plan.featured ? "text-black/50" : "text-gray-500"
                                        }`}>
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 flex-grow">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className={`flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm ${plan.featured ? "text-black/80" : "text-gray-300"
                                            }`}>
                                            <Check className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${plan.featured ? "text-black" : "text-white"
                                                }`} strokeWidth={2.5} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/book"
                                    className={`group/btn flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all ${plan.featured
                                        ? "bg-black text-white hover:bg-gray-900"
                                        : "border border-white/30 text-white hover:bg-white hover:text-black"
                                        }`}
                                >
                                    {plan.cta}
                                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
