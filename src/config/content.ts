import Terminal from "lucide-react/dist/esm/icons/terminal";
import Globe from "lucide-react/dist/esm/icons/globe";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import Zap from "lucide-react/dist/esm/icons/zap";
// Optimized images: WebP format, 900px width for optimal display
import project1Image from "@/assets/project-1.jpg?w=900&format=webp";
import project2Image from "@/assets/project-2.jpg?w=900&format=webp";
import project3Image from "@/assets/project-3.jpg?w=900&format=webp";

export const portfolio = {
    hero: {
        headline: "Obsessed with what I do",
        subtitle: "as a Full Stack Developer.",
        actions: {
            primary: { label: "View Selected Work", href: "#work" },
            secondary: { label: "Let's Talk", href: "#contact" }
        }
    },
    about: {
        tagline: "Ready to build the future?",
        bio: "Principal Full Stack Engineer. I help high-growth companies build scalable, user-centric platforms.\nNo barriers. No limits. Pure creation.",
        features: [
            {
                icon: Terminal,
                label: "Architecture",
                skills: ["System Design", "Microservices", "Design Patterns", "Scalability", "Clean Architecture", "REST / GraphQL"]
            },
            {
                icon: Globe,
                label: "Cloud Native",
                skills: ["AWS Services", "Docker", "CI/CD Pipelines", "Serverless", "Database Management", "Monitoring"]
            },
            {
                icon: Cpu,
                label: "Performance",
                skills: ["Core Web Vitals", "Caching Strategies", "Code Splitting", "SEO Optimization", "Accessibility", "Testing"]
            },
            {
                icon: Zap,
                label: "Modern Stack",
                skills: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Framer Motion"]
            },
        ]
    },
    projects: [
        {
            title: "E-Commerce Architecture",
            category: "System Design",
            outcome: "40% Conversion Lift",
            year: "2024",
            description: "A headless commerce solution built for scalability and performance.",
            image: project1Image,
            link: "#"
        },
        {
            title: "AI Content Studio",
            category: "Machine Learning",
            outcome: "2.5x Workflow Speed",
            year: "2024",
            description: "Integrated Al-driven workflows for content generation teams.",
            image: project2Image,
            link: "#"
        },
        {
            title: "Financial Analytics",
            category: "Data Visualization",
            outcome: "$1.2M Assets Managed",
            year: "2023",
            description: "Real-time dashboarding for complex financial datasets.",
            image: project3Image,
            link: "#"
        },
        {
            title: "Global Supply Chain",
            category: "Infrastructure",
            outcome: "99.99% Uptime",
            year: "2023",
            description: "Distributed logistics network tracking for international shipping.",
            image: project1Image, // Reuse for demo
            link: "#"
        },
        {
            title: "HealthTech Portal",
            category: "Secure Platform",
            outcome: "HIPAA Compliant",
            year: "2022",
            description: "Patient management system with end-to-end encryption.",
            image: project2Image, // Reuse for demo
            link: "#"
        }
    ],
    contact: {
        email: "contact@example.com",
        socials: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    }
};
