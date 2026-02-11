"use client";

import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialIconProps {
    name: string;
    className?: string;
}

/** Renders a Lucide icon by name string */
export function SocialIcon({ name, className }: SocialIconProps) {
    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
        Linkedin: LucideIcons.Linkedin,
        Github: LucideIcons.Github,
        Twitter: LucideIcons.Twitter,
        Mail: LucideIcons.Mail,
        Globe: LucideIcons.Globe,
        Phone: LucideIcons.Phone,
    };

    const Icon = iconMap[name] || LucideIcons.Globe;
    return <Icon className={cn("h-5 w-5", className)} />;
}
