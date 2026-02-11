"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { User, Briefcase, Code, Users, FileText } from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { aboutData } from "@/lib/data";

const iconMap = [
    <User key="u" className="h-5 w-5" />,
    <Briefcase key="b" className="h-5 w-5" />,
    <Code key="c" className="h-5 w-5" />,
    <Users key="us" className="h-5 w-5" />,
];

/** About Me section with bio and highlight cards */
export function AboutSection() {
    return (
        <SectionWrapper id="about">
            <SectionHeading
                title="About Me"
                subtitle="Get to know the developer behind the code"
            />

            <div className="grid gap-12 lg:grid-cols-2 items-center">
                {/* Avatar / Decorative element */}
                {/* Avatar / Decorative element */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto lg:mx-0"
                >
                    {/* 3D-style avatar placeholder */}
                    <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-3xl overflow-hidden group">
                        {/* Gradient background/border effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 opacity-20 group-hover:opacity-30 transition-opacity" />

                        {/* The Logo Image */}
                        <div className="absolute inset-[3px] rounded-[22px] overflow-hidden bg-white/5 backdrop-blur-sm z-10 flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/LogoSalah.png"
                                    alt="Salah Eddine Arbani"
                                    fill
                                    className="object-cover p-2 hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Floating dots - kept for animation */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute h-2 w-2 rounded-full bg-blue-400/50 z-20 pointer-events-none"
                                style={{
                                    top: `${20 + Math.random() * 60}%`,
                                    left: `${20 + Math.random() * 60}%`,
                                }}
                                animate={{
                                    y: [0, -10, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl opacity-50" />
                </motion.div>

                {/* Bio content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="space-y-4">
                        {aboutData.bio.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Resume Download CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                    >
                        <Link
                            href="/resume"
                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]"
                        >
                            <FileText className="h-4 w-4 transition-transform group-hover:rotate-12" />
                            View Resume
                        </Link>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white backdrop-blur-md transition-all hover:bg-white dark:hover:bg-white/10 hover:scale-[1.02]"
                        >
                            Hire Me
                        </a>
                    </motion.div>

                    {/* Highlight cards */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                        {aboutData.highlights.map((item, idx) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="rounded-2xl border border-white/10 bg-white/50 dark:bg-white/5 p-4 backdrop-blur-md text-center transition-shadow hover:shadow-lg hover:shadow-blue-500/5"
                            >
                                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-blue-500">
                                    {iconMap[idx]}
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {item.value}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
