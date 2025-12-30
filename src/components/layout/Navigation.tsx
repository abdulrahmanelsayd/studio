import { useState, useEffect } from "react";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    const navItems = [
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in ${scrolled
                    ? "bg-[#F9F6EE]/90 backdrop-blur-xl py-3 sm:py-4"
                    : "bg-transparent py-4 sm:py-6 md:py-8"
                    }`}
            >
                <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-center h-full">
                    {/* Desktop Links - Ultra Premium */}
                    <div className="hidden md:flex items-center gap-10 lg:gap-16">
                        {navItems.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                style={{ animationDelay: `${100 + index * 100}ms` }}
                                className={`relative text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.2em] lg:tracking-[0.25em] transition-all duration-500 group animate-slide-up opacity-0 ${scrolled ? "text-zinc-950 hover:text-zinc-600" : "text-white/70 hover:text-white"}`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-500 ease-out ${scrolled ? "bg-zinc-950" : "bg-white"}`} />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className={`md:hidden p-2 text-zinc-950 hover:text-zinc-600 transition-colors duration-300 ${scrolled ? "text-zinc-950 hover:text-zinc-600" : "text-white hover:text-white/80"}`}
                        aria-label="Open menu"
                    >
                        <Menu className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-[#F9F6EE]/95 backdrop-blur-xl md:hidden flex flex-col transition-opacity duration-500 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
                    <span className="text-lg sm:text-xl font-display font-semibold text-zinc-900">
                        Menu
                    </span>
                    <button
                        onClick={() => setMobileOpen(false)}
                        aria-label="Close menu"
                        className="p-2 -mr-2 text-zinc-500 hover:text-zinc-900 transition-colors"
                    >
                        <X className="w-6 h-6" strokeWidth={1.5} />
                    </button>
                </div>
                <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                    {navItems.map((item, i) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            style={{ transitionDelay: `${100 + i * 50}ms` }}
                            className={`text-4xl font-display font-medium text-zinc-900 hover:text-zinc-600 transition-all duration-500 transform ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Navigation;
