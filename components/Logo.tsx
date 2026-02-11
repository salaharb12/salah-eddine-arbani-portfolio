"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Import Image
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn("flex items-center gap-2 font-bold", className)}
        >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/10 shadow-sm border border-white/10">
                <Image
                    src="/LogoSalah.png"
                    alt="Salah Logo"
                    fill
                    className="object-cover p-1"
                />
            </div>
            <span className="text-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Salah<span className="text-blue-500">.Dev</span>
            </span>
        </motion.a>
    );
}
