import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import { portfolio } from "@/config/content";

const HeroSection = () => {
    const { hero } = portfolio;

    return (
        <section className="relative w-full min-h-[100svh] flex items-center justify-center py-8 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 bg-black overflow-hidden">
            {/* Content Card */}
            <div className="w-[92%] sm:w-[85%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-2xl md:rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-2xl border border-zinc-800/50 shadow-2xl shadow-black/50 flex flex-col items-center justify-center text-center">

                {/* Background Effects (Gradient Orbs) */}
                <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-purple-600/20 blur-3xl rounded-full mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-600/20 blur-3xl rounded-full mix-blend-screen pointer-events-none translate-x-1/2 translate-y-1/2" />

                {/* Content Container */}
                <div className="relative z-10 w-full flex flex-col items-center">
                    <h1 className="font-display text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-3 sm:mb-4 md:mb-6 animate-slide-up">
                        {hero.headline}
                    </h1>

                    <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-400 font-medium tracking-tight mt-4 sm:mt-5 md:mt-6 animate-slide-up animation-delay-100">
                        {hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto mt-8 md:mt-10 lg:mt-12 animate-slide-up animation-delay-200">
                        <a
                            href={hero.actions.primary.href}
                            className="group w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-white text-black font-semibold text-base flex items-center justify-center gap-2 shadow-lg shadow-white/10 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            {hero.actions.primary.label}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href={hero.actions.secondary.href}
                            className="group w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 rounded-full bg-transparent border-2 border-white text-white font-semibold text-base flex items-center justify-center hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            {hero.actions.secondary.label}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
