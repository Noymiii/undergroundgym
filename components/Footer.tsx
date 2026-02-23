import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-black border-t border-white/10 pt-12 sm:pt-16 pb-6 sm:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-14">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4 sm:mb-5">
                            <img src="/logo.jpg" alt="UG Logo" className="h-9 sm:h-10 w-auto object-contain" />
                            <span className="font-black text-base sm:text-lg tracking-tight text-white uppercase leading-none flex flex-col">
                                <span>Underground</span>
                                <span className="text-gray-400 font-medium text-xs sm:text-sm">Fitness</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
                            The first world class iron gym in the Philippines. Largest gym with the lowest prices in the South.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/under.ground.fitness" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black text-gray-400 transition-all" aria-label="Instagram">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.facebook.com/voletsundergroundgym/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black text-gray-400 transition-all" aria-label="Facebook">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5">Quick Links</h4>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {[
                                { label: "Our Philosophy", href: "#philosophy" },
                                { label: "The Facility", href: "#facility" },
                                { label: "Membership", href: "#pricing" },
                                { label: "Book a Session", href: "/book" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5">Operating Hours</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
                                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white font-medium mb-0.5">Monday – Saturday</p>
                                    <p className="text-gray-400">6:00 AM – 11:00 PM</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm">
                                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white font-medium mb-0.5">Sunday</p>
                                    <p className="text-gray-400">6:00 AM – 10:00 PM</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-5">Location</h4>
                        <ul className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
                            <li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-400">
                                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 shrink-0 mt-0.5" />
                                <span>Under Ground Volet&apos;s Hotel & Resort, Emilio Aguinaldo Highway, Dasmariñas, Philippines</span>
                            </li>
                            <li className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-400">
                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 shrink-0" />
                                <span>(046) 450 9197</span>
                            </li>
                        </ul>
                        <div className="w-full h-24 sm:h-28 rounded-lg overflow-hidden border border-white/10">
                            <iframe
                                src="https://maps.google.com/maps?q=Underground+Fitness+Dasmari%C3%B1as&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
                    <p className="text-gray-600 text-[10px] sm:text-xs">
                        © {new Date().getFullYear()} Underground Fitness. Earned Not Given.
                    </p>
                    <div className="flex gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-600">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
