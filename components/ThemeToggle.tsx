"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/** Animated sun/moon toggle for dark/light mode */
export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <button className="relative h-10 w-10 rounded-full" aria-label="Toggle theme" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.span
                        key="moon"
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon className="h-5 w-5 text-yellow-300" />
                    </motion.span>
                ) : (
                    <motion.span
                        key="sun"
                        initial={{ rotate: 90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: -90, scale: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun className="h-5 w-5 text-yellow-500" />
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
