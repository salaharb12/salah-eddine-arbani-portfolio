"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn("flex items-center gap-2 font-bold", className)}
        >
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 shadow-md shadow-blue-500/20">
                {/* Abstract "S" shape or initials */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white"
                >
                    <path d="M20 8c0-2.2-1.8-4-4-4H8C5.8 4 4 5.8 4 8s1.8 4 4 4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4H8c-2.2 0-4-1.8-4-4" />
                </motion.svg>
            </div>
            <span className="text-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                SA<span className="text-blue-500">.dev</span>
            </span>
        </motion.a>
    );
}
