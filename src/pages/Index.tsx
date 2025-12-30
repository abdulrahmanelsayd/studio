import { lazy, Suspense } from "react";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";

// Lazy load below-the-fold sections
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));
const Footer = lazy(() => import("@/components/layout/Footer"));

const Index = () => (
  <div className="min-h-screen bg-zinc-950">
    <Navigation />
    <main>
      <HeroSection />
      <Suspense fallback={<div className="h-screen" />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div className="h-[50vh]" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-[50vh]" />}>
        <ContactSection />
      </Suspense>
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </div>
);

export default Index;
