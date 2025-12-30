import Mail from "lucide-react/dist/esm/icons/mail";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import { portfolio } from "@/config/content";

const ContactSection = () => {
    const { contact } = portfolio;

    return (
        <section
            id="contact"
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 md:py-32 bg-black overflow-hidden"
        >
            {/* Subtle Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Headline */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-4 tracking-tight leading-none">
                    <span className="bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-transparent">
                        Let's Create Together
                    </span>
                </h2>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-16 md:mb-20">
                    Have a project in mind? Let's discuss how we can work together to bring your vision to life.
                </p>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                    {/* Email Card */}
                    <a
                        href={`mailto:${contact.email}`}
                        className="group relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 md:p-7 lg:p-8 hover:bg-zinc-900/70 hover:border-zinc-700/50 active:scale-[0.98] transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                        <div className="relative">
                            <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 group-hover:border-zinc-600 transition-all duration-300">
                                <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                Email
                            </h3>
                            <p className="text-sm text-zinc-500 mb-4">
                                Drop me a message
                            </p>
                            <p className="text-sm font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors break-all">
                                {contact.email}
                            </p>
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                            </div>
                        </div>
                    </a>

                    {/* GitHub Card */}
                    <a
                        href={contact.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 md:p-7 lg:p-8 hover:bg-zinc-900/70 hover:border-zinc-700/50 active:scale-[0.98] transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                        <div className="relative">
                            <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 group-hover:border-zinc-600 transition-all duration-300">
                                <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                GitHub
                            </h3>
                            <p className="text-sm text-zinc-500 mb-4">
                                Check out my work
                            </p>
                            <p className="text-sm font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors break-all">
                                github.com/username
                            </p>
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                            </div>
                        </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a
                        href={contact.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-6 md:p-7 lg:p-8 hover:bg-zinc-900/70 hover:border-zinc-700/50 active:scale-[0.98] transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                        <div className="relative">
                            <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 group-hover:border-zinc-600 transition-all duration-300">
                                <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                LinkedIn
                            </h3>
                            <p className="text-sm text-zinc-500 mb-4">
                                Let's connect
                            </p>
                            <p className="text-sm font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors break-all">
                                linkedin.com/in/profile
                            </p>
                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
