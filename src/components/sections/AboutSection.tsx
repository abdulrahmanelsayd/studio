import { portfolio } from "@/config/content";

const AboutSection = () => {
  const { about } = portfolio;

  return (
    <section id="about" className="px-2 sm:px-4 md:px-6 py-4 sm:py-8 bg-zinc-950">
      <div className="w-full max-w-[1400px] mx-auto bg-[#F9F6EE] rounded-[1.5rem] sm:rounded-[3rem] md:rounded-[4rem] lg:rounded-[6rem] relative overflow-hidden p-6 sm:p-10 md:p-16 lg:p-24 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-zinc-400 mb-4 sm:mb-6">
              About
            </p>

            <h2 className="font-display text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] text-zinc-950 leading-[1.15] mb-5 sm:mb-6 md:mb-8">
              {about.tagline}
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto whitespace-pre-line px-2">
              {about.bio}
            </p>
          </div>

          {/* Skills Grid - Simple & Chic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8">
            {about.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center sm:items-start group">
                {/* Icon & Label */}
                <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center mb-3 sm:mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:scale-105 transition-transform duration-500">
                    <feature.icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-900"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-zinc-900">
                    {feature.label}
                  </h3>
                </div>

                {/* Skills Tags - Chic & Rounded */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {feature.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white border border-zinc-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-[11px] sm:text-xs font-semibold text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
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
