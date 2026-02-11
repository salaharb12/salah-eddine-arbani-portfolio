import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

// ---------------------------------------------------------------------------
// Fonts
// ---------------------------------------------------------------------------
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// ---------------------------------------------------------------------------
// SEO Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Salah Eddine Arbani — Senior Full-Stack Developer",
  description:
    "Portfolio of Salah Eddine Arbani, a Senior Full-Stack Developer specializing in modern web, mobile, and desktop applications with AI and automation expertise.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "AI",
    "Automation",
    "Portfolio",
    "Salah Eddine Arbani",
  ],
  authors: [{ name: "Salah Eddine Arbani" }],
  openGraph: {
    title: "Salah Eddine Arbani — Senior Full-Stack Developer",
    description:
      "Building high-performance, scalable applications across web, mobile, and desktop platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salah Eddine Arbani — Senior Full-Stack Developer",
    description:
      "Building high-performance, scalable applications across web, mobile, and desktop platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------------------------------------------------------
// Root Layout
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
