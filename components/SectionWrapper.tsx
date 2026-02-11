"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
    className?: string;
}

/** Reusable scroll-triggered fade-in wrapper for page sections */
export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("px-6 py-24", className)}
        >
            <div className="mx-auto max-w-7xl">{children}</div>
        </motion.section>
    );
}

/** Section heading with gradient accent */
export function SectionHeading({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="mb-16 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
            >
                {subtitle}
            </motion.p>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
            />
        </div>
    );
}
