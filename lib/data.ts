// =============================================================================
// Portfolio Data — All content for the portfolio website
// =============================================================================

export interface Skill {
    name: string;
    icon: string; // Lucide icon name
}

export interface SkillCategory {
    title: string;
    icon: string;
    color: string; // gradient class
    skills: Skill[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    role: string;
    category: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    image: string; // placeholder gradient
    gradient: string;
    isPrivate?: boolean;
}

export interface Stat {
    label: string;
    value: number;
    suffix: string;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export const heroData = {
    name: "Salah Eddine Arbani",
    titles: [
        "Senior Full-Stack Developer",
        "Modern Web, Mobile & Desktop Apps",
        "AI & Automation Expert",
    ],
    mission:
        "I create high-performance, scalable, and modern applications across web, mobile, and desktop platforms, integrating AI, real-time systems, and advanced automation to solve complex real-world problems.",
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const aboutData = {
    bio: [
        "I'm Salah Eddine Arbani, a Senior Full-Stack Developer with deep expertise in building production-grade applications across web, mobile, and desktop platforms.",
        "With years of hands-on experience, I've designed and shipped everything from real-time mobile apps with GPS tracking and payments to AI-powered dashboards and desktop management systems.",
        "My approach combines clean architecture, modern tooling, and a relentless focus on user experience. I specialize in Next.js, React Native, Node.js, and AI integrations — delivering solutions that are both technically excellent and visually stunning.",
    ],
    highlights: [
        { label: "Years Experience", value: "5+" },
        { label: "Projects Completed", value: "30+" },
        { label: "Technologies Mastered", value: "40+" },
        { label: "Happy Clients", value: "20+" },
    ],
};

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        icon: "Monitor", // Keeping generic category icons for now or could update if we exported them
        color: "from-blue-500 to-cyan-400",
        skills: [
            { name: "Next.js 16", icon: "Nextjs" },
            { name: "React 19", icon: "React" },
            { name: "TypeScript 5.9", icon: "TypeScript" },
            { name: "Tailwind 4.1+", icon: "Tailwind" },
            { name: "Framer Motion", icon: "FramerMotion" },
            { name: "Three.js", icon: "Threejs" },
            { name: "shadcn/ui", icon: "Shadcn" },
            { name: "Headless UI", icon: "HeadlessUI" },
        ],
    },
    {
        title: "Backend",
        icon: "Server",
        color: "from-violet-500 to-purple-400",
        skills: [
            { name: "Node.js 24", icon: "Nodejs" },
            { name: "NestJS 10+", icon: "NestJS" },
            { name: "Express.js", icon: "Express" },
            { name: "GraphQL", icon: "GraphQL" },
            { name: "REST APIs", icon: "REST" },
            { name: "tRPC", icon: "tRPC" },
            { name: "JWT Auth", icon: "JWT" },
            { name: "Stripe/PayPal", icon: "Stripe" },
        ],
    },
    {
        title: "Mobile",
        icon: "Smartphone",
        color: "from-emerald-500 to-green-400",
        skills: [
            { name: "React Native 0.88+", icon: "ReactNative" },
            { name: "Expo", icon: "Expo" },
            { name: "Push Notifications", icon: "PushNotifications" },
            { name: "Real-time Chat", icon: "RealTime" },
            { name: "Maps Integration", icon: "Maps" },
            { name: "Offline Support", icon: "Offline" },
        ],
    },
    {
        title: "Desktop",
        icon: "Monitor",
        color: "from-orange-500 to-amber-400",
        skills: [
            { name: "Electron 39+", icon: "Electron" },
            { name: "TypeScript", icon: "TypeScript" },
            { name: "SQLite", icon: "SQLite" },
        ],
    },
    {
        title: "Database",
        icon: "Database",
        color: "from-rose-500 to-pink-400",
        skills: [
            { name: "PostgreSQL 16", icon: "PostgreSQL" },
            { name: "MongoDB 7", icon: "MongoDB" },
            { name: "Prisma 7.1+", icon: "Prisma" },
            { name: "Supabase 2.86+", icon: "Supabase" },
            { name: "Redis", icon: "Redis" },
            { name: "ElasticSearch", icon: "ElasticSearch" },
            { name: "MySQL", icon: "MySQL" },
        ],
    },
    {
        title: "AI & Automation",
        icon: "Brain",
        color: "from-indigo-500 to-blue-400",
        skills: [
            { name: "OpenAI GPT", icon: "OpenAI" },
            { name: "LangChain", icon: "LangChain" },
            { name: "Automation Workflows", icon: "Automation" },
            { name: "Bots (Email/WhatsApp)", icon: "Bots" },
            { name: "Real-time Dashboards", icon: "Dashboards" },
        ],
    },
    {
        title: "DevOps & Tools",
        icon: "Wrench",
        color: "from-teal-500 to-cyan-400",
        skills: [
            { name: "Git/GitHub", icon: "Git" },
            { name: "CI/CD", icon: "CICD" },
            { name: "Docker", icon: "Docker" },
            { name: "Vercel", icon: "Vercel" },
            { name: "Netlify", icon: "Netlify" },
            { name: "Figma", icon: "Figma" },
            { name: "Storybook", icon: "Storybook" },
        ],
    },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
    {
        id: "pet-care",
        title: "Pet Care Platform",
        description:
            "A comprehensive mobile app for pet owners featuring real-time chat between pet owners and veterinarians, GPS tracking for pets, booking system for vet appointments, and secure payment integration.",
        role: "Lead Full-Stack Developer",
        category: "Mobile",
        techStack: [
            "React Native",
            "Expo",
            "Node.js",
            "PostgreSQL",
            "Socket.IO",
            "Stripe",
            "Google Maps",
        ],
        liveUrl: "#",
        githubUrl: "#",
        image: "/projects/pet-care.png",
        gradient: "from-emerald-500 to-teal-400",
    },
    {
        id: "building-community",
        title: "Building Community Platform",
        description:
            "Mobile platform for residential building management with features for booking amenities, event management, community announcements, and a powerful admin dashboard for property managers.",
        role: "Full-Stack Developer",
        category: "Mobile",
        techStack: [
            "React Native",
            "TypeScript",
            "NestJS",
            "MongoDB",
            "Redis",
            "Push Notifications",
        ],
        liveUrl: "#",
        githubUrl: "#",
        image: "/projects/building-community.png",
        gradient: "from-blue-500 to-indigo-400",
    },
    {
        id: "property-estimator",
        title: "Property Price Estimator",
        description:
            "AI-powered real estate estimation tool available on mobile and web. Features interactive map integration, comprehensive dashboards, and machine learning models to predict property values accurately.",
        role: "Lead Developer & AI Engineer",
        category: "Web",
        techStack: [
            "Next.js",
            "React Native",
            "Python",
            "TensorFlow",
            "PostgreSQL",
            "Mapbox",
            "OpenAI",
        ],
        liveUrl: "#",
        githubUrl: "#",
        image: "/projects/property-estimator.png",
        gradient: "from-violet-500 to-purple-400",
    },
    {
        id: "web-automation",
        title: "Web Automation System",
        description:
            "Powerful automation system for event scraping across multiple platforms, with intelligent email and WhatsApp notification workflows. Includes scheduling, filtering, and real-time alerting.",
        role: "Backend Developer & Architect",
        category: "Web",
        techStack: [
            "Node.js",
            "Puppeteer",
            "NestJS",
            "Redis",
            "WhatsApp API",
            "Cron",
            "ElasticSearch",
        ],
        liveUrl: "#",
        githubUrl: "#",
        image: "/projects/web-automation.png",
        gradient: "from-orange-500 to-red-400",
    },
    {
        id: "car-rental",
        title: "Car Rental Management",
        description:
            "Desktop application for managing car rental operations including inventory management, rental tracking, customer management, invoicing, and comprehensive reporting dashboards.",
        role: "Desktop App Developer",
        category: "Desktop",
        techStack: ["Electron", "TypeScript", "SQLite", "React", "Chart.js"],
        liveUrl: "#",
        githubUrl: "#",
        image: "/projects/car-rental.png",
        gradient: "from-cyan-500 to-blue-400",
    },
    {
        id: "enterprise-erp",
        title: "Enterprise ERP System",
        description:
            "A massive-scale Enterprise Resource Planning system for a multi-national logistics company. Handled complex supply chain management, real-time inventory tracking, and automated financial reporting for over 500+ users.",
        role: "Senior Architect",
        category: "Web",
        techStack: [
            "Next.js",
            "NestJS",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kubernetes",
        ],
        image: "/projects/erp-system.png",
        gradient: "from-slate-700 to-slate-500",
        isPrivate: true,
    },
    {
        id: "fintech-banking",
        title: "Neo-Bank Core Banking Module",
        description:
            "Secure and high-frequency trading module for a fintech startup. Implemented banking-grade security, anti-fraud detection systems using AI, and real-time transaction processing with microservices architecture.",
        role: "Backend Lead",
        category: "Backend",
        techStack: [
            "Node.js",
            "Kafka",
            "gRPC",
            "MongoDB",
            "ElasticSearch",
            "AWS",
        ],
        image: "/projects/fintech.png",
        gradient: "from-indigo-900 to-blue-800",
        isPrivate: true,
    },
    {
        id: "healthcare-portal",
        title: "AI Diagnostic Patient Portal",
        description:
            "HIPAA-compliant telemedicine platform connecting patients with specialists. Features AI-driven preliminary diagnosis, secure video consultations, and integrated electronic health records (EHR).",
        role: "Full-Stack Lead",
        category: "Web",
        techStack: [
            "React",
            "Python",
            "TensorFlow",
            "WebRTC",
            "FastAPI",
            "PostgreSQL",
        ],
        image: "/projects/healthcare.png",
        gradient: "from-teal-700 to-emerald-600",
        isPrivate: true,
    },
];

// ---------------------------------------------------------------------------
// Portfolio Stats
// ---------------------------------------------------------------------------
export const stats: Stat[] = [
    { label: "Mobile Apps Built", value: 8, suffix: "+" },
    { label: "Web Dashboards", value: 15, suffix: "+" },
    { label: "Landing Pages", value: 25, suffix: "+" },
    { label: "Lines of Code", value: 500, suffix: "K+" },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export interface Experience {
    id: string;
    company: string;
    title: string;
    type: "Full-time" | "Internship" | "Freelance";
    startDate: string;
    endDate: string;
    location: string;
    mode: string; // Remote / Hybrid / On-site
    description: string;
    techStack: string[];
    impact: string;
    gradient: string;
    isHighlighted?: boolean;
}

export const experiences: Experience[] = [
    {
        id: "tomoes-fulltime",
        company: "Tomoes",
        title: "Full-Stack Developer",
        type: "Full-time",
        startDate: "Mar 2025",
        endDate: "Present",
        location: "Marrakesh, Morocco",
        mode: "Remote",
        description:
            "Leading full-stack mobile and web development — designing robust APIs, managing database architecture, implementing real-time features, and building end-to-end automation workflows that power scalable products.",
        techStack: [
            "React Native",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Tailwind CSS",
        ],
        impact:
            "Delivered scalable applications that improved user experience and operational efficiency across multiple product lines.",
        gradient: "from-blue-600 to-violet-600",
    },
    {
        id: "tomoes-intern",
        company: "Tomoes",
        title: "Full-Stack Developer",
        type: "Internship",
        startDate: "Nov 2024",
        endDate: "Mar 2025",
        location: "Marrakesh, Morocco",
        mode: "Remote",
        description:
            "Designed and developed mobile applications from scratch, built RESTful APIs, integrated databases, and ensured cross-platform performance for production-ready products.",
        techStack: [
            "React Native",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
        ],
        impact:
            "Delivered production-ready apps ahead of schedule and strengthened full-stack development expertise.",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        id: "nichan-labs",
        company: "Nichan Labs",
        title: "Full-Stack Developer",
        type: "Internship",
        startDate: "Nov 2024",
        endDate: "Mar 2025",
        location: "Errachidia, Morocco",
        mode: "Hybrid",
        description:
            "Developed cross-platform mobile and desktop applications, led a development team, coordinated directly with clients, and ensured delivery of high-quality software solutions.",
        techStack: [
            "React Native",
            "Electron.js",
            "Vue.js",
            "Apollo GraphQL",
        ],
        impact:
            "Delivered high-quality apps on time, improved client satisfaction scores, and strengthened project management skills.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        id: "freelance",
        company: "Freelance",
        title: "Web Developer",
        type: "Freelance",
        startDate: "Jan 2024",
        endDate: "Sep 2024",
        location: "Worldwide",
        mode: "Remote",
        description:
            "Independently delivered full-stack web projects for diverse clients — interactive dashboards, real-time features, AI integrations, and end-to-end product builds.",
        techStack: [
            "React.js",
            "Next.js",
            "Node.js",
            "MySQL",
            "Tailwind CSS",
            "Prisma",
            "Supabase",
        ],
        impact:
            "Successfully launched 10+ production-ready web apps, gained repeat clients, and built a strong freelance reputation.",
        gradient: "from-amber-500 to-orange-500",
        isHighlighted: true,
    },
    {
        id: "commune-tinejdad",
        company: "Commune de Tinejdad",
        title: "Informaticien",
        type: "Internship",
        startDate: "Apr 2023",
        endDate: "May 2023",
        location: "Tinejdad, Morocco",
        mode: "On-site",
        description:
            "Developed digital tools to modernize administrative workflows, collaborated with staff to identify inefficiencies, and built solutions to streamline daily operations.",
        techStack: [
            "Database Administration",
            "Microsoft Office",
            "React.js",
        ],
        impact:
            "Streamlined internal workflows and improved operational efficiency for the administrative team.",
        gradient: "from-rose-500 to-pink-500",
    },
];

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------
export const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/salah-arbani/",
        icon: "Linkedin",
    },
    {
        name: "GitHub",
        url: "https://github.com/salaharb12",
        icon: "Github",
    },
    {
        name: "Twitter",
        url: "https://x.com/SalahArb09",
        icon: "Twitter",
    },
    {
        name: "Email",
        url: "mailto:salah.arb09@gmail.com",
        icon: "Mail",
    },
    {
        name: "Phone",
        url: "tel:+212638832292",
        icon: "Phone",
    },
];

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Overview", href: "#overview" },
    { label: "Contact", href: "#contact" },
];
// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export interface Certification {
    id: string;
    title: string;
    provider: string;
    issued: string;
    credentialId: string;
    skills: string[];
    category: "Cloud" | "Mobile" | "Web" | "Design" | "English";
    image: string; // Placeholder for image provided by user later
}

export const certifications: Certification[] = [
    {
        id: "aws-s3-basics",
        title: "AWS S3 Basics",
        provider: "Coursera Project Network",
        issued: "July 2025",
        credentialId: "MT280Y99231H",
        skills: ["AWS", "Cloud Storage", "S3"],
        category: "Cloud",
        image: "/certs/aws-s3.png",
    },
    {
        id: "azure-rest-api",
        title: "Azure: Create a REST API using NodeJS Serverless Functions",
        provider: "Coursera Project Network",
        issued: "September 2024",
        credentialId: "LXLBLJKOCAVL",
        skills: ["Azure Functions", "Serverless Architecture", "Node.js", "REST APIs"],
        category: "Cloud",
        image: "/certs/azure-api.png",
    },
    {
        id: "react-native-meta",
        title: "React Native",
        provider: "Meta (Coursera)",
        issued: "September 2024",
        credentialId: "ICTTI61Y79D1",
        skills: ["React Native", "Mobile Development", "Cross-platform Apps"],
        category: "Mobile",
        image: "/certs/react-native-meta.png",
    },
    {
        id: "twitter-clone-nextjs",
        title: "Build a Full Stack Twitter Clone with Next.js",
        provider: "Coursera Project Network",
        issued: "August 2024",
        credentialId: "AFMT9NESHDHI",
        skills: ["Next.js", "TypeScript", "Full-Stack Development"],
        category: "Web",
        image: "/certs/twitter-clone.png",
    },
    {
        id: "javascript-meta",
        title: "Programming with JavaScript",
        provider: "Meta (Coursera)",
        issued: "August 2024",
        credentialId: "UD6WLFZO9V5H",
        skills: ["JavaScript", "OOP", "Web Development Fundamentals"],
        category: "Web",
        image: "/certs/js-meta.png",
    },
    {
        id: "frontend-meta",
        title: "Introduction to Front-End Development",
        provider: "Meta (Coursera)",
        issued: "August 2024",
        credentialId: "MVBG61E52DBU",
        skills: ["HTML", "CSS", "Responsive Design", "Web Foundations"],
        category: "Web",
        image: "/certs/frontend-meta.png",
    },
    {
        id: "wordpress-meta",
        title: "Build a Full Website using WordPress",
        provider: "Coursera",
        issued: "September 2024",
        credentialId: "RTYNOYHZLTEO",
        skills: ["WordPress", "Web Design", "CMS Development"],
        category: "Web",
        image: "/certs/wordpress.png",
    },
    {
        id: "figma-meta",
        title: "Work with Components in Figma",
        provider: "Coursera",
        issued: "September 2024",
        credentialId: "4VSTT2JTTLS8",
        skills: ["Figma", "UI Components", "Design Systems", "UI/UX Workflow"],
        category: "Design",
        image: "/certs/figma-meta.png",
    },
    {
        id: "english-career",
        title: "English for Career Development",
        provider: "University of Pennsylvania Carey Law School (Coursera)",
        issued: "September 2024",
        credentialId: "P2WJOGJDZHLO",
        skills: ["Professional Communication", "Career Development", "Workplace English"],
        category: "English",
        image: "/certs/english.png",
    },
];
