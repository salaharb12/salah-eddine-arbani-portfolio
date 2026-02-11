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
            className={cn("flex items-center justify-center font-bold", className)}
        >
            <div className="relative h-20 w-72">
                <Image
                    src="/logoSalah-2.png"
                    alt="Salah Logo"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </motion.a>
    );
}
