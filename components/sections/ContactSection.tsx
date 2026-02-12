"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { socialLinks } from "@/lib/data";
import { SocialIcon } from "../SocialIcon";
import { Globe } from "../ui/Globe";

/** Contact section with a clean, organized split layout */
export function ContactSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
    };

    return (
        <SectionWrapper id="contact">
            <SectionHeading
                title="Let's Connect"
                subtitle="Ready to start your next project?"
            />

            <div className="grid gap-6 lg:grid-cols-5 lg:gap-8 max-w-6xl mx-auto">

                {/* 1. Left Sidebar - Globe & Info (2 cols) */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Globe Card - Compact & Clean */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl border border-white/10 bg-white/50 dark:bg-white/5 overflow-hidden h-64 sm:h-72 flex items-center justify-center backdrop-blur-sm group"
                    >
                        <div className="absolute top-4 left-4 z-10">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 dark:bg-gray-950/90 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-black/5 dark:border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Based in Morocco
                            </span>
                        </div>
                        <Globe className="absolute inset-0 w-full h-[150%] scale-[1.6] translate-y-10" />
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
                    </motion.div>

                    {/* Contact Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 p-6 backdrop-blur-md"
                    >
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-blue-500" />
                            Contact Details
                        </h3>
                        <div className="space-y-4">
                            <a href="mailto:salah.arb09@gmail.com" className="flex items-start gap-3 group transition-colors">
                                <div className="mt-0.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 p-2 text-blue-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Email</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">salah.arb09@gmail.com</p>
                                </div>
                            </a>
                            <a href="tel:+212638832292" className="flex items-start gap-3 group transition-colors">
                                <div className="mt-0.5 rounded-lg bg-violet-50 dark:bg-violet-500/10 p-2 text-violet-600 group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20 transition-colors">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Phone</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">+212 638 832 292</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5">
                            <p className="text-xs text-gray-500 font-medium mb-3">Social Profiles</p>
                            <div className="flex gap-2">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="h-9 w-9 flex items-center justify-center rounded-lg bg-white dark:bg-white/10 text-gray-500 dark:text-gray-400 hover:bg-blue-500 hover:text-white transition-all shadow-sm border border-gray-100 dark:border-white/5"
                                        aria-label={social.name}
                                    >
                                        <SocialIcon name={social.icon} className="h-4 w-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* 2. Right Main - Contact Form (3 cols) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-md flex flex-col h-full"
                >
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Send Me a Message
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            I usually respond within 24 hours.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-xs font-medium text-gray-700 dark:text-gray-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 dark:text-white placeholder-gray-400"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 dark:text-white placeholder-gray-400"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label htmlFor="message" className="text-xs font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                className="w-full h-full min-h-[160px] rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <div className="pt-2">
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full sm:w-auto ml-auto flex items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-white px-8 py-3 text-sm font-semibold text-white dark:text-gray-900 shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                ) : isSubmitted ? (
                                    <>
                                        <CheckCircle className="h-4 w-4" />
                                        Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="h-4 w-4" />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}
