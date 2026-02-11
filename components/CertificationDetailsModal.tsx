"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Calendar, ShieldCheck, ExternalLink, Bookmark } from "lucide-react";
import { Certification } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CertificationDetailsModalProps {
    certification: Certification | null;
    onClose: () => void;
}

export function CertificationDetailsModal({ certification, onClose }: CertificationDetailsModalProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (certification) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [certification]);

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
            {certification && (
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
                            "fixed z-50 w-full bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-white/10 flex flex-col overflow-hidden",
                            isMobile
                                ? "bottom-0 left-0 right-0 rounded-t-[2rem] rounded-b-none h-[85vh]"
                                : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl rounded-3xl max-h-[90vh] p-1"
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

                            {/* Certificate Image Frame */}
                            <div className="relative h-64 sm:h-80 shrink-0 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-b border-gray-100 dark:border-white/5">
                                {/* Logo Pattern Overlay */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                                {/* Placeholder for Certificate Image */}
                                <div className="relative w-[90%] h-[90%] shadow-2xl border-4 border-white dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={certification.image}
                                            alt={certification.title}
                                            fill
                                            className="object-contain"
                                            onError={(e) => {
                                                // Fallback if image doesn't exist yet
                                                const target = e.target as HTMLImageElement;
                                                target.src = "https://placehold.co/800x600/003366/white?text=" + encodeURIComponent(certification.title);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 sm:p-8 overscroll-contain">
                                <div className="space-y-8">
                                    {/* Title and Category */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-500 border border-blue-500/20">
                                                {certification.category}
                                            </span>
                                            <div className="flex items-center gap-1 text-emerald-500 text-xs font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                                <ShieldCheck className="h-3.5 w-3.5" />
                                                Verified Credential
                                            </div>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
                                            {certification.title}
                                        </h2>
                                    </div>

                                    {/* Info Grid */}
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-4 rounded-2xl bg-gray-50 dark:bg-white/5 p-5 border border-gray-100 dark:border-white/5">
                                            <div>
                                                <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">Issued By</h4>
                                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                    {certification.provider}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">Issue Date</h4>
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    <Calendar className="h-4 w-4 text-blue-500" />
                                                    {certification.issued}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4 rounded-2xl bg-gray-50 dark:bg-white/5 p-5 border border-gray-100 dark:border-white/5">
                                            <div>
                                                <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">Credential ID</h4>
                                                <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                                                    {certification.credentialId}
                                                </p>
                                            </div>
                                            <div className="pt-2">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                                                >
                                                    <ExternalLink className="h-3.5 w-3.5" />
                                                    Verify Online
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills Section */}
                                    <div>
                                        <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400">
                                            <Bookmark className="h-4 w-4" />
                                            Skills Validated
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {certification.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-xl bg-blue-500/5 dark:bg-blue-500/10 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-blue-500/10"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
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
