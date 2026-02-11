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
  metadataBase: new URL('https://salah-portfolio.vercel.app'),
  title: {
    default: "Salah Eddine Arbani | Senior Full-Stack Developer",
    template: "%s | Salah Eddine Arbani"
  },
  description:
    "Senior Full-Stack Developer specializing in Next.js, React Native, AI, and Automation. Building high-performance, scalable applications with a focus on user experience and technical excellence.",
  keywords: [
    "Senior Full-Stack Developer",
    "Next.js Expert",
    "React Native Developer",
    "AI Automation Specialist",
    "Salah Eddine Arbani",
    "Software Engineer Morocco",
    "Modern Web Applications",
  ],
  authors: [{ name: "Salah Eddine Arbani", url: "https://github.com/salaharb12" }],
  creator: "Salah Eddine Arbani",
  icons: {
    icon: "/salahfavicon.png",
    shortcut: "/salahfavicon.png",
    apple: "/salahfavicon.png",
  },
  openGraph: {
    title: "Salah Eddine Arbani | Senior Full-Stack Developer",
    description:
      "Expertly crafted web, mobile, and desktop solutions. Specializing in Next.js, AI integration, and high-performance architectures.",
    url: "https://salah-portfolio.vercel.app", // Adjust if needed
    siteName: "Salah Eddine Arbani Portfolio",
    images: [
      {
        url: "/og-image.png", // We should check if this exists or just keep it as a placeholder
        width: 1200,
        height: 630,
        alt: "Salah Eddine Arbani - Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salah Eddine Arbani | Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer specializing in Next.js, AI, and modern digital solutions.",
    creator: "@SalahArb09",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
