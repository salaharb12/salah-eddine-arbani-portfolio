"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Code, Users } from "lucide-react";
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
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto lg:mx-0"
                >
                    {/* 3D-style avatar placeholder */}
                    <div className="relative h-80 w-80 rounded-3xl overflow-hidden">
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600" />
                        {/* Glass overlay */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                        {/* Decorative circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <motion.div
                                    className="h-40 w-40 rounded-full border-4 border-white/20"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute inset-4 rounded-full border-2 border-white/30"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute inset-8 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">SA</span>
                                </div>
                            </div>
                        </div>
                        {/* Floating dots */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute h-2 w-2 rounded-full bg-white/30"
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
                    <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />
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

                    {/* Highlight cards */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
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
