"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Calendar, Layers, Code, User, Lock } from "lucide-react";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectDetailsModalProps {
    project: Project | null;
    onClose: () => void;
}

export function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [project]);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 20 }}
                        animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
                        exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className={cn(
                            "fixed z-50 bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-white/10 flex flex-col overflow-hidden",
                            isMobile
                                ? "bottom-0 left-0 right-0 w-full rounded-t-[2rem] rounded-b-none h-[85vh]"
                                : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(calc(100%-4rem),48rem)] rounded-3xl max-h-[85vh] p-1"
                        )}
                    >
                        {isMobile && (
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 dark:bg-white/20 rounded-full z-30" />
                        )}

                        <div className="relative flex-1 flex flex-col overflow-hidden h-full">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-4 z-20 rounded-full bg-black/20 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/40 hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Header Image/Gradient */}
                            <div className={cn("relative h-48 sm:h-64 shrink-0 w-full overflow-hidden bg-gradient-to-br", project.gradient)}>
                                {/* Pattern Overlay */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                                            {project.category}
                                        </span>
                                        {project.isPrivate && (
                                            <span className="flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md border border-white/10">
                                                <Lock className="h-3 w-3" /> Confidential
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                        {project.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-8 overscroll-contain">
                                <div className="grid gap-8 md:grid-cols-[2fr,1fr]">

                                    {/* Main Info */}
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                <Layers className="h-5 w-5 text-blue-500" />
                                                About the Project
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                                <Code className="h-5 w-5 text-violet-500" />
                                                Technologies
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-lg bg-gray-100 dark:bg-white/5 px-3 py-1.5 text-sm md:text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar Meta */}
                                    <div className="space-y-6 rounded-2xl bg-gray-50 dark:bg-white/5 p-5 border border-gray-100 dark:border-white/5 h-fit">
                                        <div>
                                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Role</h4>
                                            <div className="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                                                <User className="h-4 w-4 text-blue-500" />
                                                {project.role}
                                            </div>
                                        </div>

                                        {!project.isPrivate && (
                                            <div className="space-y-3 pt-2 border-t border-gray-200 dark:border-white/10">
                                                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Links</h4>

                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 text-center justify-center w-full"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        View Live Demo
                                                    </a>
                                                )}

                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-white/10 active:scale-95 text-center justify-center w-full"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        View Source
                                                    </a>
                                                )}
                                            </div>
                                        )}

                                        {project.isPrivate && (
                                            <div className="rounded-xl bg-amber-500/10 p-4 border border-amber-500/20">
                                                <div className="flex items-start gap-3">
                                                    <Lock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                                                    <p className="text-xs text-amber-700 dark:text-amber-400 font-medium leading-normal">
                                                        This project is under NDA. Code and live demo are confidential.
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
