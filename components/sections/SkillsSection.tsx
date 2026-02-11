"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Monitor,
    Server,
    Smartphone,
    Database,
    Brain,
    Wrench,
    Globe,
    Layers,
    Code,
    Palette,
    Sparkles,
    Box,
    LayoutDashboard,
    Hexagon,
    Zap,
    GitBranch,
    Link,
    ArrowLeftRight,
    Shield,
    CreditCard,
    Rocket,
    Bell,
    MessageCircle,
    Map,
    WifiOff,
    Leaf,
    Cloud,
    Search,
    Workflow,
    Mail,
    MessageSquare,
    BarChart3,
    RefreshCw,
    Container,
    Triangle,
    Figma,
    BookOpen,
    Component,
} from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { skillCategories, type SkillCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

// Map icon names to actual components
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    Monitor, Server, Smartphone, Database, Brain, Wrench, Globe, Layers, Code,
    Palette, Sparkles, Box, LayoutDashboard, Hexagon, Zap, GitBranch, Link,
    ArrowLeftRight, Shield, CreditCard, Rocket, Bell, MessageCircle, Map,
    WifiOff, Leaf, Cloud, Search, Workflow, Mail, MessageSquare, BarChart3,
    RefreshCw, Container, Triangle, Figma, BookOpen, Component,
};

function LucideIcon({ name, className }: { name: string; className?: string }) {
    const Icon = iconComponents[name] || Globe;
    return <Icon className={className} />;
}

/** Skills section with categorized, animated skill cards */
export function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <SectionWrapper id="skills" className="bg-gray-50/50 dark:bg-gray-900/30">
            <SectionHeading
                title="Skills & Technologies"
                subtitle="The tools and technologies I use to bring ideas to life"
            />

            {/* Category tabs */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
                {skillCategories.map((cat, idx) => (
                    <motion.button
                        key={cat.title}
                        onClick={() => setActiveCategory(idx)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                            activeCategory === idx
                                ? "bg-gradient-to-r text-white shadow-lg shadow-blue-500/20 " + cat.color
                                : "border border-white/10 bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-white/10"
                        )}
                    >
                        <LucideIcon name={cat.icon} className="h-4 w-4" />
                        {cat.title}
                    </motion.button>
                ))}
            </div>

            {/* Skill cards grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
                >
                    {skillCategories[activeCategory].skills.map((skill, idx) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            category={skillCategories[activeCategory]}
                            index={idx}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>
        </SectionWrapper>
    );
}

function SkillCard({
    skill,
    category,
    index,
}: {
    skill: { name: string; icon: string };
    category: SkillCategory;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="group relative rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 p-5 backdrop-blur-md transition-all hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer overflow-hidden"
        >
            {/* Hover gradient glow */}
            <div
                className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br",
                    category.color
                )}
            />

            <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                <div
                    className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                        category.color
                    )}
                >
                    <LucideIcon name={skill.icon} className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {skill.name}
                </p>
            </div>
        </motion.div>
    );
}
