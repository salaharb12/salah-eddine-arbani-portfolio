"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Award, Zap, Globe } from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { stats } from "@/lib/data";

const statIcons = [
    <Zap key="z" className="h-6 w-6" />,
    <Globe key="g" className="h-6 w-6" />,
    <Award key="a" className="h-6 w-6" />,
    <TrendingUp key="t" className="h-6 w-6" />,
];

/** Animated counter that counts up when in view */
function AnimatedCounter({
    value,
    suffix,
    duration = 2,
}: {
    value: number;
    suffix: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const step = value / (duration * 60); // ~60fps
        const timer = setInterval(() => {
            start += step;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

/** Portfolio overview section with animated counters and achievements */
export function PortfolioOverview() {
    return (
        <SectionWrapper
            id="overview"
            className="bg-gray-50/50 dark:bg-gray-900/30"
        >
            <SectionHeading
                title="Portfolio Overview"
                subtitle="Numbers that reflect my journey and impact"
            />

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="group relative rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 p-8 backdrop-blur-md text-center transition-all hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
                    >
                        {/* Background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-blue-500">
                                {statIcons[idx]}
                            </div>
                            <p className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                />
                            </p>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                {stat.label}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Achievement highlights */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
                {[
                    {
                        title: "Clean Architecture",
                        desc: "Every project follows SOLID principles, clean code practices, and modular design patterns for maximum maintainability.",
                    },
                    {
                        title: "Performance First",
                        desc: "Applications are optimized for speed with lazy loading, code splitting, caching strategies, and efficient database queries.",
                    },
                    {
                        title: "End-to-End Delivery",
                        desc: "From concept to deployment — I handle design, development, testing, CI/CD pipelines, and production monitoring.",
                    },
                ].map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 p-6 backdrop-blur-md"
                    >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
