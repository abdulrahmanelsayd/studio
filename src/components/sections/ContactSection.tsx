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
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-zinc-950">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-8 sm:mb-10 md:mb-12 text-center">
                    <span className="text-zinc-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] block mb-4 sm:mb-6">Ready for Impact</span>
                    <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6.5rem] font-black tracking-tighter text-white leading-none uppercase">
                        Let's Go & Cook.
                    </h2>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto px-2">
                    {/* Email Link */}
                    <a
                        href={`mailto:${contact.email}`}
                        className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 bg-white rounded-full flex items-center gap-3 sm:gap-4 transition-all duration-500 hover:scale-[1.02] md:hover:scale-[1.05] shadow-[0_10px_25px_rgba(0,0,0,0.08)] md:shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-zinc-100/50"
                    >
                        <div className="flex flex-col items-start flex-1 min-w-0">
                            <span className="text-zinc-950 text-xs sm:text-sm font-bold tracking-tight truncate max-w-full">{contact.email}</span>
                            <span className="text-zinc-400 text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Contact</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-500 flex-shrink-0 border border-zinc-100">
                            <Mail className="w-4 h-4" strokeWidth={2} />
                        </div>
                    </a>

                    {/* Social Links */}
                    {Object.entries(contact.socials).map(([platform, url]) => {
                        const Icon = iconMap[platform] || ArrowUpRight;
                        return (
                            <a
                                key={platform}
                                href={url as string}
                                className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3.5 sm:py-4 md:py-5 bg-white rounded-full flex items-center gap-3 sm:gap-4 transition-all duration-500 hover:scale-[1.02] md:hover:scale-[1.05] shadow-[0_10px_25px_rgba(0,0,0,0.08)] md:shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-zinc-100/50"
                            >
                                <div className="flex flex-col items-start flex-1">
                                    <span className="text-zinc-950 text-xs sm:text-sm font-bold tracking-tight capitalize">{platform}</span>
                                    <span className="text-zinc-400 text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Follow</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-500 flex-shrink-0 border border-zinc-100">
                                    <Icon className="w-4 h-4" strokeWidth={2} />
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
