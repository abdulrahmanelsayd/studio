import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import { portfolio } from "@/config/content";

const ProjectsSection = () => {
  const { projects } = portfolio;

  return (
    <section id="work" className="py-12 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-8 sm:mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-8 border-b border-white/10 pb-6 sm:pb-10 md:pb-12">
          <div>
            <span className="text-xs sm:text-xs md:text-sm font-medium text-white/60 tracking-wider uppercase">Selected Works</span>
            <h2 className="font-display text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 sm:mt-3 md:mt-4 tracking-[-0.03em] text-white">
              Featured Projects
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl aspect-[16/10] mb-4 sm:mb-5 md:mb-6 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-zinc-900/50 backdrop-blur-md p-1.5 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-lg md:text-xl font-medium text-white mb-1 sm:mb-2 group-hover:text-zinc-300 transition-colors duration-300 truncate">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-sm text-white/50 leading-relaxed font-light line-clamp-2 mb-3 sm:mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techs?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 text-[10px] sm:text-[10px] font-medium uppercase tracking-wider text-white/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="block text-xs sm:text-xs font-medium text-white/40 uppercase tracking-wider mb-0.5 sm:mb-1">
                    {project.category}
                  </span>
                  <span className="block text-xs sm:text-xs text-white/30 font-mono">
                    {project.year}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
