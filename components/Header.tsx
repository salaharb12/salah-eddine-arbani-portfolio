"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Sticky glassmorphism navbar with mobile drawer */
export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5"
                    : "bg-transparent"
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-2">
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors hover:text-gray-900 dark:hover:text-white group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:left-2 group-hover:w-[calc(100%-16px)]" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    {/* Mobile menu button */}
                    <button
                        className="flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-white/10"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
