"use client";

import { motion } from "framer-motion";
import {
    Download,
    Printer,
    ArrowLeft,
    Mail,
    Phone,
    MapPin,
    Globe,
    Linkedin,
    Github,
    ExternalLink,
    Calendar,
    Briefcase
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    heroData,
    aboutData,
    experiences,
    skillCategories,
    socialLinks,
    certifications
} from "@/lib/data";
import { cn } from "@/lib/utils";

export default function ResumePage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12 px-6 print:bg-white print:py-0 print:px-0">
            {/* Navigation / Actions (Hidden on Print) */}
            <div className="mx-auto max-w-4xl mb-8 flex items-center justify-between print:hidden">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>
                <div className="flex gap-3">
                    <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-5 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
                    >
                        <Printer className="h-4 w-4" />
                        Print / Save PDF
                    </button>
                </div>
            </div>

            {/* Resume Sheet */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-4xl bg-white dark:bg-gray-900 shadow-2xl shadow-black/5 rounded-3xl overflow-hidden print:shadow-none print:rounded-none print:max-w-none"
            >
                {/* Header Decoration (Hidden on Print) */}
                <div className="h-2 bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 print:hidden" />

                <div className="p-8 md:p-12 print:p-0">
                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 border-b border-gray-100 dark:border-white/5 pb-10">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                                {heroData.name}
                            </h1>
                            <p className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-6">
                                Senior Full-Stack Developer
                            </p>

                            <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-gray-600 dark:text-gray-400">
                                <a href="mailto:salah.arb09@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                                    <Mail className="h-4 w-4" />
                                    salah.arb09@gmail.com
                                </a>
                                <a href="tel:+212638832292" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                                    <Phone className="h-4 w-4" />
                                    +212 638 832 292
                                </a>
                                <span className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    Marrakech, Morocco (Remote Available)
                                </span>
                            </div>
                        </div>

                        {/* Social Links on Resume */}
                        <div className="flex flex-col gap-3 text-sm">
                            {socialLinks.slice(0, 3).map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                                >
                                    {social.name === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                                    {social.name === "GitHub" && <Github className="h-4 w-4" />}
                                    {social.name === "Twitter" && <Globe className="h-4 w-4" />}
                                    {social.url.replace("https://", "")}
                                </a>
                            ))}
                        </div>
                    </header>

                    {/* Professional Summary */}
                    <section className="mb-12">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                            Professional Summary
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            {aboutData.bio[0]} {aboutData.bio[1]}
                        </p>
                    </section>

                    {/* Experience Section */}
                    <section className="mb-12">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
                            Work Experience
                        </h2>
                        <div className="space-y-10">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="relative pl-0 md:pl-0">
                                    <div className="flex flex-col md:flex-row md:justify-between items-start gap-1 mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                                                <Briefcase className="h-4 w-4" />
                                                <span>{exp.company}</span>
                                                <span className="text-gray-300 dark:text-gray-700">•</span>
                                                <span className="text-xs uppercase tracking-wider">{exp.type}</span>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 pt-1">
                                            <Calendar className="h-4 w-4" />
                                            {exp.startDate} – {exp.endDate}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed max-w-3xl">
                                        {exp.description}
                                    </p>
                                    <div className="flex items-start gap-2 text-sm bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                                        <span className="text-blue-500 font-bold">Impact:</span>
                                        <span className="text-gray-700 dark:text-gray-300">{exp.impact}</span>
                                    </div>

                                    {/* Tech used in this role */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.techStack.map(tech => (
                                            <span key={tech} className="text-[10px] px-2 py-0.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills Grid */}
                    <section className="mb-12 break-inside-avoid">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {skillCategories.map((cat) => (
                                <div key={cat.title}>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                                        {cat.title}
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {cat.skills.map((skill) => (
                                            <li key={skill.name} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <div className="h-1 w-1 rounded-full bg-blue-500" />
                                                {skill.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Professional Certifications */}
                    <section className="break-inside-avoid">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
                            Professional Certifications
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {certifications.map((cert) => (
                                <div key={cert.id} className="group">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                            {cert.title}
                                        </h4>
                                        <span className="text-[10px] font-medium text-gray-400 whitespace-nowrap ml-4">
                                            {cert.issued}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-2 text-[10px] text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">{cert.provider}</span>
                                        <span className="text-gray-300 dark:text-gray-700">|</span>
                                        <span className="font-mono opacity-70">ID: {cert.credentialId}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer / QR (Visible on Print) */}
                    <footer className="mt-16 pt-8 border-t border-gray-100 dark:border-white/5 text-center hidden print:block">
                        <p className="text-xs text-gray-400 mb-1">
                            Scanned from Salah Eddine Arbani&apos;s digital portfolio
                        </p>
                        <p className="text-xs font-bold text-blue-500">
                            salah-portfolio.vercel.app/resume
                        </p>
                    </footer>
                </div>
            </motion.div>
        </main>
    );
}
