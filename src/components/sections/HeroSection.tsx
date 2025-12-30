import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import { portfolio } from "@/config/content";

const HeroSection = () => {
    const { hero } = portfolio;

    return (
        <section className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-zinc-950 h-screen flex flex-col items-center">
            {/* The Creamy Rounded Card */}
            <div className="w-full max-w-[1400px] flex-1 bg-[#F9F6EE] rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] lg:rounded-[6rem] relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12 sm:p-8 md:p-16 lg:p-24 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] animate-fade-in">

                <div className="relative z-10 w-full flex flex-col items-center">
                    <h1 className="font-display text-[1.75rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-[-0.02em] text-zinc-950 leading-[1.1] mb-4 sm:mb-6 md:mb-8 lg:mb-10 mx-auto animate-slide-up">
                        {hero.headline}
                    </h1>

                    <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-500 font-medium tracking-tight leading-relaxed mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2 opacity-80 animate-slide-up animation-delay-100">
                        {hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto px-4 sm:px-0 animate-slide-up animation-delay-200">
                        <a
                            href={hero.actions.primary.href}
                            className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full bg-zinc-950 text-white font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2 sm:gap-3 shadow-[0_15px_30px_-8px_rgba(0,0,0,0.3)] md:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] transition-all hover:scale-105 hover:-translate-y-1 active:scale-[0.98]"
                        >
                            {hero.actions.primary.label}
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:rotate-12 group-hover:text-white transition-all duration-300" />
                        </a>

                        <a
                            href={hero.actions.secondary.href}
                            className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full bg-transparent border-2 border-zinc-950/10 text-zinc-950 font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:border-zinc-950 transition-all flex items-center justify-center hover:scale-105 hover:-translate-y-1 active:scale-[0.98]"
                        >
                            {hero.actions.secondary.label}
                        </a>
                    </div>
                </div>

                {/* Subtle Bottom Light Reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-[15%] sm:h-[20%] bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default HeroSection;
