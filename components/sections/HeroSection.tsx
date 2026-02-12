"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
/** Hero section with animated intro, floating orbs, and CTA */
export function HeroSection() {
    const typedTitle = useTypingEffect(heroData.titles);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-12 lg:pt-0 lg:pb-0"
        >
            {/* ---- Animated background orbs ---- */}
            <div className="absolute inset-0 -z-10">
                {/* Main gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30" />

                {/* Floating orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl opacity-50"
                    animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl opacity-50"
                    animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
            </div>

            <div className="container mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                    {/* ---- Text Content (Left) ---- */}
                    <div className="text-center lg:text-left order-2 lg:order-1 w-full">
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs sm:text-sm text-green-600 dark:text-green-400 mb-4 sm:mb-6"
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
                            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 bg-clip-text text-transparent block sm:inline lg:inline">
                                {heroData.name}
                            </span>
                        </motion.h1>

                        {/* Typing title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-6 sm:h-8 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-xl lg:text-2xl mb-6 sm:mb-8"
                        >
                            <span>{typedTitle}</span>
                            <span className="animate-pulse text-blue-500">|</span>
                        </motion.div>

                        {/* Mission */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto lg:mx-0 max-w-2xl text-sm text-gray-500 dark:text-gray-400 leading-relaxed sm:text-base lg:text-lg mb-6 sm:mb-10"
                        >
                            {heroData.mission}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center justify-center lg:justify-start w-full sm:w-auto"
                        >
                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
                            >
                                View My Work
                                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-semibold text-gray-900 dark:text-white backdrop-blur-md transition-all hover:bg-white dark:hover:bg-white/10 hover:scale-105"
                            >
                                Get In Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* ---- Image Content (Right) ---- */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[500px] lg:max-w-none order-1 lg:order-2 flex justify-center"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />

                        <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[320px] lg:max-w-[500px]">
                            {/* Abstract shape container */}
                            <svg className="absolute inset-0 w-full h-full text-blue-100 dark:text-blue-900/20 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,59.3C22.5,67.2,9.8,74.5,-2.9,79.5C-15.6,84.5,-28.3,87.2,-39.8,82.7C-51.3,78.2,-61.6,66.5,-70.7,53.7C-79.8,40.9,-87.7,27,-88.9,12.7C-90.1,-1.5,-84.6,-16.1,-75.4,-28.4C-66.2,-40.7,-53.3,-50.7,-40.4,-58.3C-27.5,-65.9,-14.6,-71.1,0.2,-71.5C15,-71.8,30.5,-76.4,44.7,-76.4Z" transform="translate(100 100) scale(1.1)" />
                            </svg>

                            {/* The Image */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src="/heroImage.png"
                                    alt={heroData.name}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
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
