"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Lock } from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ProjectDetailsModal } from "../ProjectDetailsModal";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

/** Projects section with filterable, animated project cards */
export function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <div className="mb-8 sm:mb-12 flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                    <motion.button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                            "rounded-full px-4 py-2 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium transition-all",
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
                    className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {filtered.map((project, idx) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={idx}
                            onSelect={() => !project.isPrivate && setSelectedProject(project)}
                        />
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Details Modal */}
            <ProjectDetailsModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </SectionWrapper>
    );
}

function ProjectCard({
    project,
    index,
    onSelect,
}: {
    project: Project;
    index: number;
    onSelect: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ y: -8 }}
            onClick={onSelect}
            className={cn(
                "group relative rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full",
                !project.isPrivate && "cursor-pointer"
            )}
        >
            {/* Image / Gradient header */}
            <div className={cn("relative h-48 bg-gradient-to-br shrink-0", project.gradient)}>
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {project.category}
                    </span>
                    {project.isPrivate && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                            <Lock className="h-3 w-3" /> Confidential
                        </span>
                    )}
                </div>

                {/* Hover overlay - Only show interactive buttons if public AND not handled by card click */}
                {/* Actually, let's keep direct links here for quick access, but card click opens modal */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    {project.isPrivate ? (
                        <div className="flex flex-col items-center gap-2 text-white">
                            <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                                <Lock className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-medium">NDA Protected</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-3">
                            <span className="rounded-full bg-blue-600/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-lg">
                                View Details
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    {project.title}
                    {project.isPrivate && <Lock className="h-4 w-4 text-gray-400" />}
                </h3>
                <p className="mt-1 text-xs text-blue-500 dark:text-blue-400 font-medium">
                    {project.role}
                </p>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full bg-gray-100 dark:bg-white/10 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
