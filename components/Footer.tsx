"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import { SocialIcon } from "./SocialIcon";
import { Logo } from "./Logo";

/** Footer with copyright, navigation, and social links */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-gray-50 dark:bg-gray-950">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
                <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <Logo />
                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                            Building modern, scalable applications with cutting-edge
                            technologies and clean architecture.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                            Connect
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                                    aria-label={social.name}
                                >
                                    <SocialIcon name={social.icon} className="h-4 w-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-8 sm:mt-10 flex flex-col items-center gap-2 border-t border-white/5 pt-6 sm:pt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} Salah Eddine Arbani. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                        Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using
                        Next.js, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
