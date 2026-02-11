"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

/** Projects section with filterable, animated project cards */
export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <SectionWrapper id="projects">
            <SectionHeading
                title="Featured Projects"
                subtitle="A showcase of applications I've built across platforms"
            />

            {/* Filter tabs */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "rounded-full px-5 py-2 text-sm font-medium transition-all",
                            activeFilter === cat
                                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"
                                : "border border-white/10 bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10"
                        )}
                    >
                        {cat}
                    </motion.button>
                ))}
            </div>

            {/* Projects grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFilter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {filtered.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </SectionWrapper>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[number];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-blue-500/10"
        >
            {/* Image / Gradient header */}
            <div className={cn("relative h-48 bg-gradient-to-br", project.gradient)}>
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform hover:scale-110"
                            aria-label="Live demo"
                        >
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                </h3>
                <p className="mt-1 text-xs text-blue-500 dark:text-blue-400 font-medium">
                    {project.role}
                </p>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-gray-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* View details link */}
                <div className="mt-4 flex items-center text-sm font-medium text-blue-500 dark:text-blue-400 group/link cursor-pointer">
                    View Details
                    <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </div>
            </div>
        </motion.div>
    );
}
