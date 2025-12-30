import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import Mail from "lucide-react/dist/esm/icons/mail";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Twitter from "lucide-react/dist/esm/icons/twitter";
import { portfolio } from "@/config/content";

const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter
};

const ContactSection = () => {
    const { contact } = portfolio;

    return (
        <section id="contact" className="py-12 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-zinc-950">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-8 sm:mb-10 md:mb-12 text-center">
                    <span className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] block mb-4 sm:mb-6">Ready for Impact</span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6.5rem] font-black tracking-tighter text-white leading-none uppercase">
                        Let's Go & Cook.
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-6 w-full max-w-5xl mx-auto px-2">
                    {/* Email Link */}
                    <a
                        href={`mailto:${contact.email}`}
                        className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-zinc-900/50 hover:bg-zinc-900 rounded-full flex items-center gap-4 sm:gap-5 transition-all duration-500 hover:scale-[1.02] border border-white/5 hover:border-white/10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-colors duration-500 flex-shrink-0 relative z-10">
                            <Mail className="w-5 h-5" strokeWidth={1.5} />
                        </div>

                        <div className="flex flex-col items-start flex-1 min-w-0 relative z-10">
                            <span className="text-white text-sm sm:text-base font-medium tracking-tight truncate max-w-full">{contact.email}</span>
                            <span className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">Start a Project</span>
                        </div>
                    </a>

                    {/* Social Links */}
                    {Object.entries(contact.socials).map(([platform, url]) => {
                        const Icon = iconMap[platform] || ArrowUpRight;
                        return (
                            <a
                                key={platform}
                                href={url as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-zinc-900/50 hover:bg-zinc-900 rounded-full flex items-center gap-4 sm:gap-5 transition-all duration-500 hover:scale-[1.02] border border-white/5 hover:border-white/10 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-colors duration-500 flex-shrink-0 relative z-10">
                                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                                </div>

                                <div className="flex flex-col items-start flex-1 relative z-10">
                                    <span className="text-white text-sm sm:text-base font-medium tracking-tight capitalize">{platform}</span>
                                    <span className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">Follow</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
