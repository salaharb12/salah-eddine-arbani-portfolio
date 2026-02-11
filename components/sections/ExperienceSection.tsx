"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    Calendar,
    MapPin,
    Rocket,
    TrendingUp,
    Star,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { experiences, type Experience } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Experience section with interactive timeline and animated cards */
export function ExperienceSection() {
    return (
        <SectionWrapper id="experience" className="bg-gray-50/50 dark:bg-gray-900/30">
            <SectionHeading
                title="Professional Experience"
                subtitle="My journey building real-world applications and leading projects"
            />

            {/* Timeline */}
            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent md:left-1/2 md:-translate-x-px" />

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            index={idx}
                            isLeft={idx % 2 === 0}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

const typeBadgeStyles: Record<string, string> = {
    "Full-time":
        "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
    Internship:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Freelance:
        "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

function ExperienceCard({
    experience,
    index,
    isLeft,
}: {
    experience: Experience;
    index: number;
    isLeft: boolean;
}) {
    const isHighlighted = experience.isHighlighted;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={cn(
                "relative flex flex-col md:flex-row items-start gap-8",
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
            )}
        >
            {/* Timeline dot */}
            <div
                className={cn(
                    "absolute left-4 md:left-1/2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 transition-all",
                    isHighlighted
                        ? "border-amber-400 bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30"
                        : "border-white dark:border-gray-950 bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20"
                )}
            >
                {isHighlighted ? (
                    <Star className="h-3.5 w-3.5 text-white fill-white" />
                ) : (
                    <Briefcase className="h-3.5 w-3.5 text-white" />
                )}
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block md:w-1/2" />

            {/* Card */}
            <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                    "group relative ml-12 md:ml-0 w-full md:w-1/2 rounded-3xl border backdrop-blur-md p-6 transition-all hover:shadow-2xl overflow-hidden",
                    isHighlighted
                        ? "border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-500/10 hover:shadow-amber-500/10"
                        : "border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-blue-500/10"
                )}
            >
                {/* Highlighted glow for freelance */}
                {isHighlighted && (
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                )}

                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                        {/* Company logo placeholder */}
                        <div
                            className={cn(
                                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white font-bold text-sm shadow-md",
                                experience.gradient
                            )}
                        >
                            {experience.company
                                .split(" ")
                                .map((w) => w[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {experience.company}
                            </h3>
                            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                                {experience.title}
                            </p>
                        </div>
                    </div>

                    {/* Employment type badge */}
                    <span
                        className={cn(
                            "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold",
                            typeBadgeStyles[experience.type]
                        )}
                    >
                        {experience.type === "Freelance" && (
                            <Rocket className="h-3 w-3" />
                        )}
                        {experience.type}
                    </span>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {experience.startDate} – {experience.endDate}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {experience.location} · {experience.mode}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {experience.description}
                </p>

                {/* Impact */}
                <div
                    className={cn(
                        "flex items-start gap-2 rounded-xl p-3 mb-4 text-sm",
                        isHighlighted
                            ? "bg-amber-500/10 dark:bg-amber-500/5"
                            : "bg-blue-500/5 dark:bg-blue-500/5"
                    )}
                >
                    <TrendingUp
                        className={cn(
                            "h-4 w-4 mt-0.5 shrink-0",
                            isHighlighted
                                ? "text-amber-500"
                                : "text-blue-500"
                        )}
                    />
                    <p
                        className={cn(
                            "font-medium",
                            isHighlighted
                                ? "text-amber-700 dark:text-amber-300"
                                : "text-blue-700 dark:text-blue-300"
                        )}
                    >
                        {experience.impact}
                    </p>
                </div>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5">
                    {experience.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-gray-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-white/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
