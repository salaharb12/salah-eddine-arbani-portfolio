"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { heroData } from "@/lib/data";
import { useEffect, useState } from "react";

/** Typing effect hook */
function useTypingEffect(texts: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                    if (displayText.length === currentText.length) {
                        setTimeout(() => setIsDeleting(true), pauseTime);
                    }
                } else {
                    setDisplayText(currentText.slice(0, displayText.length - 1));
                    if (displayText.length === 0) {
                        setIsDeleting(false);
                        setTextIndex((prev) => (prev + 1) % texts.length);
                    }
                }
            },
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timeout);
    }, [displayText, textIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

    return displayText;
}

/** Hero section with animated intro, floating orbs, and CTA */
export function HeroSection() {
    const typedTitle = useTypingEffect(heroData.titles);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* ---- Animated background orbs ---- */}
            <div className="absolute inset-0 -z-10">
                {/* Main gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />

                {/* Floating orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
                    animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
                    animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            {/* ---- Content ---- */}
            <div className="relative z-10 px-6 text-center">
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Available for projects
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
                >
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                        {heroData.name}
                    </span>
                </motion.h1>

                {/* Typing title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 h-8 text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl lg:text-2xl"
                >
                    <span>{typedTitle}</span>
                    <span className="animate-pulse text-blue-500">|</span>
                </motion.div>

                {/* Mission */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto mt-8 max-w-2xl text-base text-gray-500 dark:text-gray-400 leading-relaxed sm:text-lg"
                >
                    {heroData.mission}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
                    >
                        View My Work
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-8 py-3.5 text-sm font-semibold text-gray-900 dark:text-white backdrop-blur-md transition-all hover:bg-white dark:hover:bg-white/10 hover:scale-105"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <a href="#about" aria-label="Scroll down">
                    <ArrowDown className="h-5 w-5 text-gray-400" />
                </a>
            </motion.div>
        </section>
    );
}
