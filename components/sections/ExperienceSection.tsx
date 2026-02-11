"use client";

import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaStripe,
    FaPaypal,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaAws,
    FaLinux,
    FaAndroid,
    FaApple,
    FaWindows,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiRedis,
    SiPrisma,
    SiSupabase,
    SiGraphql,
    SiNestjs,
    SiExpress,
    SiElectron,
    SiExpo,
    SiSocketdotio,
    SiOpenai,
    SiTensorflow,
    SiMapbox,
    SiPuppeteer,
    SiElasticsearch,
    SiVercel,
    SiNetlify,
    SiStorybook,
    SiThreedotjs,
    SiFramer,
    SiSqlite,
    SiTrpc,
    SiJsonwebtokens,
    SiLangchain,
    SiWhatsapp,
} from "react-icons/si";
import {
    TbBrandReactNative,
    TbBrandThreejs,
    TbBrandFramer
} from "react-icons/tb";
import {
    BiLogoTypescript
} from "react-icons/bi";
import {
    BsRobot,
    BsKanban,
    BsGlobe
} from "react-icons/bs";
import {
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoPython,
    IoLogoDocker
} from "react-icons/io5";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { experiences, type Experience } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar, MapPin, Rocket, Star, TrendingUp } from "lucide-react";

// Map icon names to actual components
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    // Frontend
    Nextjs: SiNextdotjs,
    React: FaReact,
    TypeScript: SiTypescript,
    Tailwind: SiTailwindcss,
    FramerMotion: TbBrandFramer,
    Threejs: TbBrandThreejs,
    Shadcn: BsKanban,
    HeadlessUI: BsKanban,

    // Backend
    Nodejs: FaNodeJs,
    NestJS: SiNestjs,
    Express: SiExpress,
    GraphQL: SiGraphql,
    REST: BsGlobe,
    tRPC: SiTrpc,
    JWT: SiJsonwebtokens,
    Stripe: FaStripe,

    // Mobile
    ReactNative: TbBrandReactNative,
    Expo: SiExpo,
    PushNotifications: BsRobot,
    RealTime: SiSocketdotio,
    Maps: SiMapbox,
    Offline: BsKanban,

    // Desktop
    Electron: SiElectron,
    SQLite: SiSqlite,

    // Database
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    Prisma: SiPrisma,
    Supabase: SiSupabase,
    Redis: SiRedis,
    ElasticSearch: SiElasticsearch,
    MySQL: SiMysql,

    // AI
    OpenAI: SiOpenai,
    LangChain: SiLangchain,
    Automation: BsRobot,
    Bots: BsRobot,
    Dashboards: BsKanban,

    // DevOps
    Git: FaGitAlt,
    CICD: FaGithub,
    Docker: FaDocker,
    Vercel: SiVercel,
    Netlify: SiNetlify,
    Figma: FaFigma,
    Storybook: SiStorybook,

    // Fallback
    Globe: BsGlobe,
};

// Map tech stack names to icons (normalization helper)
function getTechIcon(name: string) {
    const normalized = name.replace(/\s+/g, "").replace(/\./g, "").toLowerCase();

    // Lookup by normalized keys if needed, or just direct match with fallback
    // For now we try to match the keys in iconComponents
    // We can extend iconComponents to have lowercase keys or just do a simple lookup

    const key = Object.keys(iconComponents).find(k =>
        k.toLowerCase() === normalized ||
        k.toLowerCase() === name.toLowerCase()
    );

    return key ? iconComponents[key] : BsGlobe;
}

function TechIcon({ name, className }: { name: string; className?: string }) {
    const Icon = getTechIcon(name);
    return <Icon className={className} />;
}

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
                <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-violet-500/50 to-transparent md:left-1/2 md:-translate-x-px" />

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
                    "absolute left-3 md:left-1/2 z-10 flex h-6 w-6 sm:h-8 sm:w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 sm:border-4 transition-all",
                    isHighlighted
                        ? "border-amber-400 bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30"
                        : "border-white dark:border-gray-950 bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/20"
                )}
            >
                {isHighlighted ? (
                    <Star className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-white fill-white" />
                ) : (
                    <Briefcase className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-white" />
                )}
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block md:w-1/2" />

            {/* Card */}
            <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                    "group relative ml-8 sm:ml-10 md:ml-0 w-full md:w-1/2 rounded-2xl sm:rounded-3xl border backdrop-blur-md p-4 sm:p-6 transition-all hover:shadow-2xl overflow-hidden",
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
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3 sm:mb-4">
                    <div className="flex items-center gap-3">
                        {/* Company logo placeholder */}
                        <div
                            className={cn(
                                "flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white font-bold text-xs sm:text-sm shadow-md",
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
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
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
                <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 mb-3 sm:mb-4 text-xs text-gray-500 dark:text-gray-400">
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
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4">
                    {experience.description}
                </p>

                {/* Impact */}
                <div
                    className={cn(
                        "flex items-start gap-2 rounded-xl p-2.5 sm:p-3 mb-3 sm:mb-4 text-xs sm:text-sm",
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
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-gray-100 dark:bg-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-white/20"
                        >
                            {/* Try to map tech name to icon URL/Key if possible, otherwise just text */}
                            <TechIcon name={tech.replace(/\s+/g, '')} className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
