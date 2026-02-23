"use client";

import { motion } from "framer-motion";
import { Dumbbell, ArrowLeft, Calendar, User, Mail, Phone, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Book() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to Supabase
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-black flex flex-col md:flex-row relative">
            {/* ─── LEFT COLUMN: Atmospheric Background & Info ─── */}
            <div className="md:w-5/12 lg:w-1/2 relative flex flex-col justify-between p-8 md:p-12 lg:p-16 min-h-[40vh] md:min-h-screen border-b md:border-b-0 md:border-r border-white/10">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-40 mix-blend-luminosity"
                    style={{ backgroundImage: "url('/equipment.5.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                <div className="relative z-10 flex flex-col h-full">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mb-12 sm:mb-24 w-fit"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Return to Base
                    </Link>

                    <div className="mt-auto md:mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium mb-4">
                                Book Your Session
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
                                Ready To <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
                                    Put In The Work?
                                </span>
                            </h1>
                            <p className="text-gray-400 text-sm md:text-base font-light max-w-sm leading-relaxed mb-8">
                                Claim your spot on the platform. Whether it&apos;s a drop-in, personal training, or full membership inquiry, start here.
                            </p>

                            <div className="flex items-center gap-3">
                                <img src="/logo.jpg" alt="UG Logo" className="h-10 w-auto object-contain" />
                                <div className="flex flex-col">
                                    <span className="text-white font-black uppercase text-sm tracking-widest leading-none">Underground</span>
                                    <span className="text-gray-500 font-medium uppercase text-[10px] tracking-widest">Fitness</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ─── RIGHT COLUMN: The Form ─── */}
            <div className="md:w-7/12 lg:w-1/2 bg-ug-dark flex items-center justify-center p-6 sm:p-12 lg:p-20 relative overflow-y-auto">
                <div className="w-full max-w-xl">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-black border border-white/10 p-10 md:p-14 text-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-8 h-8 text-black" strokeWidth={3} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-3">
                                Request Received
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light mb-10 max-w-xs mx-auto">
                                You&apos;re on the list. Keep an eye on your inbox—one of our coaches will reach out shortly to confirm your slot.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="group w-full border border-white/30 text-white font-bold uppercase tracking-widest py-4 text-xs transition-all hover:bg-white hover:text-black"
                            >
                                Book Another Session
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-8 md:hidden">
                                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Fill The Form</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Loop */}
                                <div className="space-y-4 md:space-y-0 md:flex md:gap-4">
                                    <div className="w-full">
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <User className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-black/50 border border-white/10 placeholder-gray-600 text-white text-sm pl-11 pr-4 py-3.5 focus:outline-none focus:border-white/40 focus:bg-black transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Phone className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                required
                                                type="tel"
                                                className="w-full bg-black/50 border border-white/10 placeholder-gray-600 text-white text-sm pl-11 pr-4 py-3.5 focus:outline-none focus:border-white/40 focus:bg-black transition-all"
                                                placeholder="0917 123 4567"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-black/50 border border-white/10 placeholder-gray-600 text-white text-sm pl-11 pr-4 py-3.5 focus:outline-none focus:border-white/40 focus:bg-black transition-all"
                                            placeholder="athlete@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Service & Date */}
                                <div className="space-y-4 md:space-y-0 md:flex md:gap-4 pb-4">
                                    <div className="w-full">
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Service Type
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                                <Dumbbell className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <select className="appearance-none w-full bg-black/50 border border-white/10 text-white text-sm pl-11 pr-10 py-3.5 focus:outline-none focus:border-white/40 focus:bg-black transition-all relative cursor-pointer">
                                                <option value="walk_in">Daily Walk-In</option>
                                                <option value="trial">Free Trial Session</option>
                                                <option value="pt_powerlifting">PT: Powerlifting</option>
                                                <option value="pt_boxing">PT: Boxing / Muay Thai</option>
                                                <option value="pt_weightloss">PT: Weight Loss</option>
                                                <option value="membership">Monthly/Annual Membership</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                <ChevronDown className="h-4 w-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                                            Preferred Date
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                                <Calendar className="h-4 w-4 text-gray-400" />
                                            </div>
                                            <input
                                                required
                                                type="date"
                                                className="w-full bg-black/50 border border-white/10 text-white text-sm pl-11 pr-4 py-3.5 focus:outline-none focus:border-white/40 focus:bg-black transition-all"
                                                style={{ colorScheme: 'dark' }}
                                            />
                                        </div>
                                        <style justify-content="true" dangerouslySetInnerHTML={{
                                            __html: `
                                            input[type="date"]::-webkit-calendar-picker-indicator {
                                                opacity: 0.5;
                                                cursor: pointer;
                                            }
                                        `}} />
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-black uppercase tracking-widest py-4 text-sm transition-all hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-[0.98]"
                                >
                                    Submit Request
                                </button>
                                <p className="text-center text-gray-600 text-[10px] uppercase tracking-wider mt-4">
                                    No payment required at this stage.
                                </p>
                            </form>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
