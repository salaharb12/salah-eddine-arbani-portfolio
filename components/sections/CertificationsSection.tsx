"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, Plus } from "lucide-react";
import Image from "next/image";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { certifications, Certification } from "@/lib/data";
import { cn } from "@/lib/utils";
import { CertificationDetailsModal } from "../CertificationDetailsModal";

export function CertificationsSection() {
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

    return (
        <SectionWrapper id="certifications">
            <SectionHeading
                title="Professional Certifications"
                subtitle="Industry-leading credentials documenting expertise in Cloud, Mobile, and Web technologies."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedCert(cert)}
                        className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/50 dark:bg-white/5 p-6 backdrop-blur-md transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
                    >
                        {/* Category Badge */}
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-500">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                            </span>
                            {cert.category}
                        </div>

                        {/* Icon/Award Placeholder */}
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-500 group-hover:from-blue-500 group-hover:to-violet-500 group-hover:text-white transition-all duration-500">
                            <Award className="h-6 w-6" />
                        </div>

                        {/* Content */}
                        <div className="flex-grow">
                            <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                                {cert.provider}
                            </p>

                            {/* Skills Tags */}
                            <div className="mb-6 flex flex-wrap gap-2">
                                {cert.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg bg-gray-100 dark:bg-white/5 px-2 py-1 text-[10px] font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Metadata Footer */}
                        <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-4 text-xs">
                            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                                <Calendar className="h-3.5 w-3.5" />
                                {cert.issued}
                            </div>
                            <div className="flex items-center gap-1 text-emerald-500 font-medium">
                                <Plus className="h-3.5 w-3.5 group-hover:rotate-90 transition-transform" />
                                Details
                            </div>
                        </div>

                        {/* Credential ID Tooltip/Label */}
                        <div className="mt-3 text-[10px] font-mono text-gray-400 dark:text-gray-600">
                            ID: {cert.credentialId}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Insight */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 rounded-2xl border border-dashed border-blue-500/20 bg-blue-500/5 p-6 text-center"
            >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold text-blue-500 italic">Pro Tip:</span> All certifications are verified via Coursera and official provider networks.
                    Links to original certificates are available upon request.
                </p>
            </motion.div>

            {/* Modal */}
            <CertificationDetailsModal
                certification={selectedCert}
                onClose={() => setSelectedCert(null)}
            />
        </SectionWrapper>
    );
}
