"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

/** Wraps the app with next-themes for dark/light mode support */
export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </NextThemesProvider>
    );
}
