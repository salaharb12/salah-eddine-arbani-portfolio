"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Sticky glassmorphism navbar with mobile drawer */
export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Find current section
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
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
            <nav className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8 lg:px-12 lg:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <ul className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={cn(
                                            "relative px-4 py-2.5 text-sm font-medium transition-all duration-200 group rounded-lg hover:bg-white/50 dark:hover:bg-white/5",
                                            isActive
                                                ? "text-blue-600 dark:text-blue-400"
                                                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                        )}
                                    >
                                        {link.label}
                                        {/* Hover underline */}
                                        <span className={cn(
                                            "absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 rounded-full",
                                            isActive
                                                ? "left-3 w-[calc(100%-24px)]"
                                                : "w-0 group-hover:left-3 group-hover:w-[calc(100%-24px)]"
                                        )} />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        {/* Mobile menu button */}
                        <button
                            className="flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
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
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className={cn(
                                                "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                                                isActive
                                                    ? "bg-blue-50/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400"
                                                    : "text-gray-600 dark:text-gray-300 hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                                            )}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar at the bottom of header */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 origin-left z-50"
                style={{ scaleX }}
            />
        </header>
    );
}
