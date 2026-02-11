"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { SectionWrapper, SectionHeading } from "../SectionWrapper";
import { socialLinks } from "@/lib/data";
import { SocialIcon } from "../SocialIcon";

/** Contact section with form, info cards, and social links */
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
                title="Get In Touch"
                subtitle="Have a project in mind? Let's build something amazing together."
            />

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Info cards */}
                    <div className="space-y-4">
                        {[
                            {
                                icon: <Mail className="h-5 w-5" />,
                                label: "Email",
                                value: "salah.arb09@gmail.com",
                                href: "mailto:salah.arb09@gmail.com",
                            },
                            {
                                icon: <MapPin className="h-5 w-5" />,
                                label: "Location",
                                value: "Available Worldwide (Remote)",
                                href: "#",
                            },
                            {
                                icon: <Phone className="h-5 w-5" />,
                                label: "Phone",
                                value: "+212 638 832 292",
                                href: "tel:+212638832292",
                            },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/50 dark:bg-white/5 p-4 backdrop-blur-md transition-all hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-lg group"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 text-blue-500 group-hover:from-blue-500 group-hover:to-violet-500 group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {item.value}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Social links */}
                    <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                            Follow me on
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/50 dark:bg-white/5 text-gray-500 hover:text-blue-500 hover:border-blue-500/30 backdrop-blur-md transition-all"
                                    aria-label={social.name}
                                >
                                    <SocialIcon name={social.icon} className="h-4 w-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* AI Chatbot placeholder */}
                    <div className="rounded-2xl border border-dashed border-blue-500/30 bg-blue-500/5 p-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                    AI Assistant
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Powered by OpenAI GPT
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Coming soon — an AI chatbot that can answer questions about my
                            skills, projects, and availability in real-time.
                        </p>
                    </div>
                </motion.div>

                {/* Contact form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-white/10 bg-white/60 dark:bg-white/5 p-8 backdrop-blur-md"
                    >
                        <div className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full rounded-xl border border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 backdrop-blur-md outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full rounded-xl border border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 backdrop-blur-md outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 backdrop-blur-md outline-none transition-all focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                                />
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                ) : isSubmitted ? (
                                    <>
                                        <CheckCircle className="h-4 w-4" />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        Send Message
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
