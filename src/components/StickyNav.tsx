import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const NAV_KEYS = [
  { id: "hero", key: "nav.home" },
  { id: "problems", key: "nav.problems" },
  { id: "solutions", key: "nav.solutions" },
  { id: "about", key: "nav.about" },
  { id: "testimonials", key: "nav.testimonials" },
  // { id: "blog", key: "nav.blog" },
  { id: "contact", key: "nav.contact" },
];

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "gu", label: "ગુજરાતી", flag: "🇮🇳" },
];

export default function StickyNav() {
  const { lang, setLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_KEYS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.el && section.el.offsetTop <= scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const handleClick = () => setLangOpen(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [langOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleLangSelect = (code: Language) => {
    setLang(code);
    setLangOpen(false);
  };

  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#1B2A4A]/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo with Acharya Photo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 sm:gap-3 group"
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#D4AF37] group-hover:scale-110 transition-transform shadow-md shadow-[#D4AF37]/20 flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="Acharya Bhavin Pandya"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[#D4AF37] font-serif text-[9px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Acharya
            </span>
            <span className="text-white font-serif text-sm sm:text-lg tracking-wide -mt-0.5">
              Bhavin Pandya
            </span>
          </div>
        </button>

        {/* Desktop Nav + Language Switcher */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {NAV_KEYS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "relative px-3 lg:px-4 py-2 text-xs lg:text-sm tracking-wide transition-all duration-300",
                activeSection === item.id
                  ? "text-[#D4AF37] font-bold"
                  : "text-white/70 hover:text-white",
              )}
            >
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-[2px] bg-[#D4AF37] rounded-full" />
              )}
              <span className="relative z-10">{t(item.key)}</span>
            </button>
          ))}

          {/* Language Dropdown — Desktop */}
          <div className="relative ml-2">
            {/* <button
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/40 hover:border-[#D4AF37] bg-white/5 hover:bg-white/10 transition-all duration-300"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-white text-xs font-medium">
                {currentLang.flag}
              </span>
              <span className="text-white/80 text-xs hidden lg:inline">
                {currentLang.label}
              </span>
              <svg
                className={cn(
                  "w-3 h-3 text-white/60 transition-transform",
                  langOpen && "rotate-180",
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button> */}

            {/* {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[#1B2A4A] border border-[#D4AF37]/30 rounded-xl shadow-xl shadow-black/30 overflow-hidden min-w-[160px] z-50">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLangSelect(l.code);
                    }}
                    className={cn(
                      "flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors",
                      lang === l.code
                        ? "bg-[#D4AF37]/15 text-[#D4AF37] font-semibold"
                        : "text-white/80 hover:bg-white/5 hover:text-white",
                    )}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.label}</span>
                    {lang === l.code && (
                      <svg
                        className="w-4 h-4 ml-auto text-[#D4AF37]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )} */}
          </div>
        </div>

        {/* Mobile: Language + Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Language Toggle */}
          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              handleLangSelect(lang === "en" ? "gu" : "en");
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-white/5 transition-all"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-white text-[10px] font-semibold">
              {lang === "en" ? "ગુજ" : "EN"}
            </span>
          </button> */}

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all duration-300",
                mobileOpen && "rotate-45 translate-y-2",
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all duration-300",
                mobileOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 pb-4" : "max-h-0",
        )}
      >
        <div className="bg-[#1B2A4A]/95 backdrop-blur-md px-4 sm:px-6 space-y-1">
          {NAV_KEYS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "block w-full text-left px-4 py-3 rounded-lg text-sm tracking-wide transition-all",
                activeSection === item.id
                  ? "text-[#D4AF37] font-bold border-l-2 border-[#D4AF37]"
                  : "text-white/70 hover:text-white hover:bg-white/5",
              )}
            >
              {t(item.key)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
