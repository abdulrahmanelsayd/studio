import { portfolio } from "@/config/content";

const AboutSection = () => {
  const { about } = portfolio;

  return (
    <section id="about" className="px-3 sm:px-4 md:px-6 py-6 sm:py-8 bg-zinc-950">
      <div className="w-full max-w-[1400px] mx-auto bg-[#F9F6EE] rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] lg:rounded-[6rem] relative overflow-hidden p-6 sm:p-10 md:p-16 lg:p-24 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14 md:mb-20">
            <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-zinc-400 mb-4 sm:mb-6">
              About
            </p>

            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-zinc-950 leading-[1.15] mb-5 sm:mb-6 md:mb-8">
              {about.tagline}
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto whitespace-pre-line px-2">
              {about.bio}
            </p>
          </div>

          {/* Skills Grid - Clean & Minimal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200/50 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
            {about.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F9F6EE] p-4 sm:p-6 md:p-8 lg:p-10 group hover:bg-zinc-950 transition-colors duration-500"
              >
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <feature.icon
                    className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-950 group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-zinc-950 group-hover:text-white transition-colors duration-500 mb-2 sm:mb-3 md:mb-4">
                  {feature.label}
                </h3>

                <div className="space-y-1 sm:space-y-2 hidden sm:block">
                  {feature.skills.slice(0, 3).map((skill, i) => (
                    <p
                      key={i}
                      className="text-[10px] sm:text-xs text-zinc-400 group-hover:text-zinc-400 transition-colors duration-500"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Bottom Light Reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-[15%] sm:h-[20%] bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default AboutSection;
