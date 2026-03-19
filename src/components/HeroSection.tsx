import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowDown } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

/** Replace this with Acharya Bhavin Pandya's actual Calendly link */
const CALENDLY_URL = "https://calendly.com/kunal-13/15min";

const MOTEL_BLUEPRINT =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/6c0c31b3-ca4c-47b8-866e-c3401cb16c74.png";
const MOTEL_TWILIGHT =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/b021e86c-d666-4657-8a1c-0ed5a9abe756.png";
const MANDALA_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/ba41eaf2-1d91-401f-b7d1-26e0849c04a9.png";

/* Energy flow annotations for the blueprint */
const ENERGY_POINTS = [
  { label: "Entrance Energy", x: "15%", y: "70%", dir: "↗" },
  { label: "Prosperity Zone", x: "75%", y: "25%", dir: "✦" },
  { label: "Guest Flow", x: "50%", y: "85%", dir: "→" },
  { label: "Vastu Alignment", x: "85%", y: "60%", dir: "◎" },
];

export default function HeroSection() {
  const { t } = useLanguage();
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current || !imageRef.current) return;
      // Disable parallax on mobile for better performance
      if (window.innerWidth < 768) return;
      const scrollY = window.scrollY;
      textRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      imageRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: scroll to contact if Calendly hasn't loaded
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const scrollToProblems = () => {
    document.getElementById("problems")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F1B33] via-[#1B2A4A] to-[#162240]"
    >
      {/* Inline keyframes */}
      <style>{`
        @keyframes blueprintScan {
          0% { top: 0%; opacity: 0.6; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0.6; }
        }
        @keyframes blueprintPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes annotationFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes gridFade {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.15; }
        }
        @keyframes compassSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background decorative mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] opacity-[0.04]">
        <img
          src={MANDALA_IMAGE}
          alt=""
          className="w-full h-full object-contain animate-spin"
          style={{ animationDuration: "120s" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/40 rounded-full animate-pulse"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 14}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10" />

      {/* Main Content: Split Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* LEFT — Text Content */}
          <div
            ref={textRef}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#F0E68C] text-xs sm:text-sm tracking-wide">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              {t("hero.title1")}{" "}
              <span className="text-[#D4AF37] relative inline-block">
                {t("hero.titleHighlight")}
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C40 2 80 2 100 4C120 6 160 6 199 3"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                </svg>
              </span>{" "}
              {t("hero.title2")}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 leading-relaxed">
              {t("hero.desc1")}
            </p>

            <p className="text-sm sm:text-base text-white/60 mb-8 sm:mb-10 leading-relaxed">
              {t("hero.desc2")}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-serif">
                  500+
                </p>
                <p className="text-white/50 text-xs sm:text-sm">
                  {t("hero.stat1Label")}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-serif">
                  20+
                </p>
                <p className="text-white/50 text-xs sm:text-sm">
                  {t("hero.stat2Label")}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-serif">
                  98%
                </p>
                <p className="text-white/50 text-xs sm:text-sm">
                  {t("hero.stat3Label")}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
              <Button
                onClick={openCalendly}
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A028] text-[#1B2A4A] font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg shadow-lg shadow-[#D4AF37]/20 transition-all hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t("hero.cta1")}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto !bg-transparent border-2 border-[#D4AF37]/60 text-[#F0E68C] hover:!bg-[#D4AF37]/10 hover:border-[#D4AF37] hover:text-[#F0E68C] px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-lg transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t("hero.cta2")}
              </Button>
            </div>
          </div>

          {/* RIGHT — Motel Blueprint Architect Style */}
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {/* Blueprint outer frame */}
              <div className="absolute -inset-1 border-2 border-[#4A90D9]/30 rounded-xl sm:rounded-2xl z-20 pointer-events-none hidden sm:block" />
              <div className="absolute -inset-3 border border-[#4A90D9]/15 rounded-2xl sm:rounded-3xl z-20 pointer-events-none hidden md:block" />

              {/* Main motel image */}
              <div className="relative">
                <img
                  src={MOTEL_TWILIGHT}
                  alt="Luxury motel with spiritual energy alignment"
                  className="w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[520px] object-cover rounded-xl sm:rounded-2xl"
                />

                {/* Blueprint overlay */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl mix-blend-screen opacity-30">
                  <img
                    src={MOTEL_BLUEPRINT}
                    alt=""
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>

                {/* Blueprint grid overlay */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
                  style={{ animation: "gridFade 4s ease-in-out infinite" }}
                >
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="blueprintGrid"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="#4A90D9"
                          strokeWidth="0.5"
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#blueprintGrid)"
                    />
                  </svg>
                </div>

                {/* Scanning line effect */}
                <div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A90D9]/60 to-transparent pointer-events-none z-10"
                  style={{
                    animation: "blueprintScan 4s linear infinite",
                  }}
                />

                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B33]/80 via-[#0F1B33]/20 to-[#0F1B33]/40 rounded-xl sm:rounded-2xl" />

                {/* Energy flow annotations — hidden on mobile */}
                <div className="hidden sm:block">
                  {ENERGY_POINTS.map((point, i) => (
                    <div
                      key={i}
                      className="absolute z-10 pointer-events-none"
                      style={{
                        left: point.x,
                        top: point.y,
                        animation: `annotationFloat 3s ease-in-out ${i * 0.5}s infinite`,
                      }}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#D4AF37] text-base md:text-lg font-bold">
                          {point.dir}
                        </span>
                        <div className="bg-[#0F1B33]/70 backdrop-blur-sm border border-[#4A90D9]/40 rounded px-1.5 md:px-2 py-0.5">
                          <span className="text-[#4A90D9] text-[8px] md:text-[10px] font-mono tracking-wider whitespace-nowrap">
                            {point.label}
                          </span>
                        </div>
                      </div>
                      <div className="w-6 md:w-8 h-[1px] border-t border-dashed border-[#D4AF37]/40 mt-1 ml-2" />
                    </div>
                  ))}
                </div>

                {/* Compass rose in top-right corner */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                  <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                    <div
                      className="absolute inset-0"
                      style={{
                        animation: "compassSpin 20s linear infinite",
                      }}
                    >
                      <svg
                        viewBox="0 0 60 60"
                        className="w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="30"
                          cy="30"
                          r="28"
                          stroke="#D4AF37"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                        <circle
                          cx="30"
                          cy="30"
                          r="20"
                          stroke="#4A90D9"
                          strokeWidth="0.5"
                          opacity="0.3"
                        />
                        <polygon
                          points="30,4 33,18 27,18"
                          fill="#D4AF37"
                          opacity="0.8"
                        />
                        <polygon
                          points="30,56 33,42 27,42"
                          fill="#4A90D9"
                          opacity="0.5"
                        />
                        <polygon
                          points="56,30 42,33 42,27"
                          fill="#4A90D9"
                          opacity="0.5"
                        />
                        <polygon
                          points="4,30 18,33 18,27"
                          fill="#4A90D9"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                    <span className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 text-[#D4AF37] text-[8px] sm:text-[9px] font-bold font-mono">
                      N
                    </span>
                  </div>
                </div>

                {/* Bottom info bar — architect style */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0F1B33]/90 backdrop-blur-md border-t border-[#4A90D9]/30 rounded-b-xl sm:rounded-b-2xl p-3 sm:p-4 z-10">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-[#4A90D9] text-[8px] sm:text-[10px] font-mono tracking-widest uppercase mb-0.5 sm:mb-1">
                        {t("hero.blueprintLabel")}
                      </p>
                      <p className="text-white font-semibold text-xs sm:text-sm truncate">
                        {t("hero.blueprintSub")}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4 hidden sm:block">
                      <p className="text-[#D4AF37] text-[10px] font-mono tracking-wider">
                        SCALE 1:100
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-[2px] bg-[#D4AF37]" />
                          <span className="text-[#D4AF37]/70 text-[9px] font-mono">
                            Energy
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-[2px] bg-[#4A90D9]" />
                          <span className="text-[#4A90D9]/70 text-[9px] font-mono">
                            Structure
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blueprint dimension markers */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <div
                    className="bg-[#0F1B33]/60 backdrop-blur-sm border border-[#D4AF37]/30 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"
                    style={{
                      animation: "blueprintPulse 3s ease-in-out infinite",
                    }}
                  >
                    <span className="text-[#D4AF37] text-[8px] sm:text-[10px] font-mono">
                      {t("hero.energyFlowMap")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-3 -right-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-2xl hidden sm:block" />
            <div className="absolute -bottom-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-2xl hidden sm:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <button
            onClick={scrollToProblems}
            className="flex flex-col items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">
              {t("hero.scrollMore")}
            </span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </section>
  );
}
