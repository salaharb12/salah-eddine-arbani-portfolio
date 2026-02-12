"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    X,
    ArrowRight,
    Hash,
    Briefcase,
    Award,
    Code,
    FileText,
    Command
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
    navLinks,
    projects,
    certifications,
    skillCategories
} from "@/lib/data";
import { cn } from "@/lib/utils";

// Define search result types
type SearchCategory = "Section" | "Project" | "Certification" | "Skill" | "Page";

interface SearchResult {
    id: string;
    title: string;
    subtitle?: string;
    category: SearchCategory;
    icon: any;
    href: string;
    shortcut?: string;
}

export function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();

    // Toggle scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Keyboard shortcuts
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            } else if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // Aggregate and filter data
    const filteredResults = useMemo(() => {
        if (!query) {
            // Default "Suggestions" when query is empty
            const defaults: SearchResult[] = [
                { id: "resume", title: "View Resume", category: "Page", icon: FileText, href: "/resume", shortcut: "R" },
                ...navLinks.map(link => ({
                    id: `nav-${link.label}`,
                    title: link.label,
                    category: "Section" as SearchCategory,
                    icon: Hash,
                    href: link.href
                }))
            ];
            return defaults;
        }

        const lowerQuery = query.toLowerCase();
        const results: SearchResult[] = [];

        // 1. Pages
        if ("resume".includes(lowerQuery)) {
            results.push({ id: "resume", title: "View Resume", category: "Page", icon: FileText, href: "/resume" });
        }

        // 2. Sections (Nav Links)
        navLinks.forEach(link => {
            if (link.label.toLowerCase().includes(lowerQuery)) {
                results.push({
                    id: `nav-${link.label}`,
                    title: link.label,
                    category: "Section",
                    icon: Hash,
                    href: link.href
                });
            }
        });

        // 3. Projects
        projects.forEach(project => {
            if (
                project.title.toLowerCase().includes(lowerQuery) ||
                project.description.toLowerCase().includes(lowerQuery) ||
                project.techStack.some(t => t.toLowerCase().includes(lowerQuery))
            ) {
                results.push({
                    id: `proj-${project.id}`,
                    title: project.title,
                    subtitle: project.description.substring(0, 60) + "...",
                    category: "Project",
                    icon: Briefcase,
                    href: "#projects" // In a real app we might open the modal via URL param
                });
            }
        });

        // 4. Skills
        skillCategories.forEach(cat => {
            cat.skills.forEach(skill => {
                if (skill.name.toLowerCase().includes(lowerQuery)) {
                    results.push({
                        id: `skill-${skill.name}`,
                        title: skill.name,
                        subtitle: cat.title,
                        category: "Skill",
                        icon: Code,
                        href: "#skills"
                    });
                }
            });
        });

        // 5. Certifications
        certifications.forEach(cert => {
            if (
                cert.title.toLowerCase().includes(lowerQuery) ||
                cert.provider.toLowerCase().includes(lowerQuery)
            ) {
                results.push({
                    id: `cert-${cert.id}`,
                    title: cert.title,
                    subtitle: cert.provider,
                    category: "Certification",
                    icon: Award,
                    href: "#certifications"
                });
            }
        });

        return results.slice(0, 10); // Limit to 10 results
    }, [query]);

    // Keyboard navigation for filtered results
    useEffect(() => {
        setSelectedIndex(0);
    }, [filteredResults]);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex(i => (i + 1) % filteredResults.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex(i => (i - 1 + filteredResults.length) % filteredResults.length);
            } else if (e.key === "Enter") {
                e.preventDefault();
                const selected = filteredResults[selectedIndex];
                if (selected) {
                    handleSelect(selected);
                }
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, filteredResults, selectedIndex]);

    const handleSelect = (result: SearchResult) => {
        setIsOpen(false);
        setQuery("");
        router.push(result.href);
    };

    return (
        <>
            {/* Floating Hint Pill (Desktop only) */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full shadow-lg text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer group"
            >
                <span className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-[10px] group-hover:bg-gray-200 dark:group-hover:bg-white/20 transition-colors">⌘K</span>
                <span>Command Menu</span>
            </motion.button>

            {/* Mobile search button override (replaces the pill on mobile if desired, or relying on hamburger) 
                For now we just keep the desktop pill. Mobile users usually don't have Cmd+K
            */}

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="fixed left-1/2 top-[20%] -translate-x-1/2 z-[70] w-full max-w-xl px-4"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden flex flex-col max-h-[60vh]">
                                {/* Search Input */}
                                <div className="flex items-center border-b border-gray-100 dark:border-white/5 px-4 h-14 shrink-0">
                                    <Search className="h-5 w-5 text-gray-400 mr-3" />
                                    <input
                                        autoFocus
                                        type="text"
                                        placeholder="Type a command or search..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400 h-full text-base"
                                    />
                                    <div className="flex items-center gap-2">
                                        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-gray-400 bg-gray-100 dark:bg-white/5 rounded border border-gray-200 dark:border-white/10">ESC</kbd>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="overflow-y-auto p-2 scrollbar-hide">
                                    {filteredResults.length === 0 ? (
                                        <div className="py-12 text-center text-sm text-gray-500">
                                            No results found.
                                        </div>
                                    ) : (
                                        <div className="space-y-1">
                                            {filteredResults.map((result, index) => {
                                                const isActive = index === selectedIndex;
                                                return (
                                                    <button
                                                        key={`${result.category}-${result.id}`}
                                                        onClick={() => handleSelect(result)}
                                                        onMouseEnter={() => setSelectedIndex(index)}
                                                        className={cn(
                                                            "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors",
                                                            isActive
                                                                ? "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white"
                                                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "flex h-8 w-8 items-center justify-center rounded-md border shadow-sm",
                                                            isActive
                                                                ? "border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800"
                                                                : "border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5"
                                                        )}>
                                                            <result.icon className="h-4 w-4" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-medium truncate">{result.title}</span>
                                                                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 uppercase tracking-wider">
                                                                    {result.category}
                                                                </span>
                                                            </div>
                                                            {result.subtitle && (
                                                                <p className="text-xs text-gray-400 truncate mt-0.5">
                                                                    {result.subtitle}
                                                                </p>
                                                            )}
                                                        </div>
                                                        {isActive && (
                                                            <ArrowRight className="h-4 w-4 text-gray-400" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Link Footer */}
                                <div className="bg-gray-50 dark:bg-white/5 px-4 py-2 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-[10px] text-gray-400">
                                    <div className="flex gap-3">
                                        <span>Use <kbd className="font-sans">↑</kbd> <kbd className="font-sans">↓</kbd> to navigate</span>
                                        <span><kbd className="font-sans">↵</kbd> to select</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
