import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TOTAL_SLIDES = 3;

const FLOOR_PLAN = "/assets/motel-floor-plan.avif";
const SHREE_YANTRA =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/393bcffd-1b81-4d9a-8c1b-2ef61dccbad2.png";
const VIBRATION_STONES =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/fdc75cf5-668c-48cf-95bb-5ec006803c70.png";
const YAGNA_CEREMONY =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/567879d2-b348-4039-b5bc-bd4716a687fc.png";

/* Sacred mantras placed at four corners */
const CORNER_MANTRAS = [
  { text: "ॐ गं गणपतये नमः", position: "top-left" },
  { text: "ॐ श्रीं ह्रीं क्लीं", position: "top-right" },
  { text: "ॐ नमः शिवाय", position: "bottom-left" },
  { text: "ॐ ह्रीं श्रीं लक्ष्मी", position: "bottom-right" },
];

/* Extended mantras for slide 2 */
const EXTENDED_MANTRAS = [
  { text: "ॐ वास्तु पुरुषाय नमः", top: "8%", left: "15%" },
  { text: "ॐ ह्रीं श्रीं क्लीं", top: "12%", left: "75%" },
  { text: "ॐ भूमि देव्यै नमः", top: "45%", left: "8%" },
  { text: "ॐ दिग्पालाय नमः", top: "42%", left: "82%" },
  { text: "ॐ सूर्याय नमः", top: "78%", left: "20%" },
  { text: "ॐ चन्द्राय नमः", top: "75%", left: "70%" },
  { text: "ॐ कुबेराय नमः", top: "25%", left: "45%" },
  { text: "ॐ इन्द्राय नमः", top: "65%", left: "50%" },
];

/* Vibration stone positions for slide 2 */
const STONE_POSITIONS = [
  { top: "15%", left: "25%", color: "#D4AF37", size: "w-4 h-4 sm:w-5 sm:h-5", delay: "0s" },
  { top: "20%", left: "70%", color: "#9B59B6", size: "w-3 h-3 sm:w-4 sm:h-4", delay: "0.5s" },
  { top: "50%", left: "15%", color: "#E74C3C", size: "w-4 h-4 sm:w-5 sm:h-5", delay: "1s" },
  { top: "48%", left: "85%", color: "#2ECC71", size: "w-3 h-3 sm:w-4 sm:h-4", delay: "1.5s" },
  { top: "80%", left: "30%", color: "#3498DB", size: "w-4 h-4 sm:w-5 sm:h-5", delay: "2s" },
  { top: "78%", left: "65%", color: "#F39C12", size: "w-3 h-3 sm:w-4 sm:h-4", delay: "0.8s" },
  { top: "35%", left: "50%", color: "#D4AF37", size: "w-5 h-5 sm:w-6 sm:h-6", delay: "0.3s" },
  { top: "60%", left: "40%", color: "#E91E63", size: "w-3 h-3 sm:w-4 sm:h-4", delay: "1.2s" },
];

/* Fire spark positions for slide 3 — compact cluster around fire center */
const FIRE_SPARKS = [
  { top: "38%", left: "46%", delay: "0s", size: 2 },
  { top: "36%", left: "52%", delay: "0.3s", size: 2 },
  { top: "40%", left: "44%", delay: "0.6s", size: 3 },
  { top: "35%", left: "54%", delay: "0.9s", size: 2 },
  { top: "42%", left: "48%", delay: "1.2s", size: 2 },
  { top: "34%", left: "50%", delay: "0.4s", size: 2 },
  { top: "39%", left: "56%", delay: "0.8s", size: 3 },
  { top: "41%", left: "42%", delay: "1.5s", size: 2 },
  { top: "33%", left: "48%", delay: "0.2s", size: 2 },
  { top: "43%", left: "52%", delay: "1.0s", size: 2 },
  { top: "37%", left: "45%", delay: "0.5s", size: 3 },
  { top: "36%", left: "58%", delay: "1.3s", size: 2 },
];

const positionClasses: Record<string, string> = {
  "top-left": "top-2 left-2 sm:top-4 sm:left-4",
  "top-right": "top-2 right-2 sm:top-4 sm:right-4",
  "bottom-left": "bottom-14 left-2 sm:bottom-16 sm:left-4",
  "bottom-right": "bottom-14 right-2 sm:bottom-16 sm:right-4",
};

const mantraAnimDelay: Record<string, string> = {
  "top-left": "0s",
  "top-right": "0.5s",
  "bottom-left": "1s",
  "bottom-right": "1.5s",
};

const SLIDE_LABEL_KEYS = ["blueprint.slideLabel1", "blueprint.slideLabel2", "blueprint.slideLabel3"];

export default function BlueprintEnergySection() {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  }, []);

  /* Auto-advance every 8 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#0F1B33] via-[#162240] to-[#1B2A4A] overflow-hidden">
      {/* Inline keyframes for animations */}
      <style>{`
        @keyframes mantraGlow {
          0%, 100% { opacity: 0.5; transform: scale(1) translateY(0); text-shadow: 0 0 8px rgba(212,175,55,0.3); }
          50% { opacity: 1; transform: scale(1.05) translateY(-3px); text-shadow: 0 0 20px rgba(212,175,55,0.7); }
        }
        @keyframes yantraPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); filter: drop-shadow(0 0 10px rgba(212,175,55,0.4)); }
          50% { transform: translate(-50%, -50%) scale(1.08); filter: drop-shadow(0 0 25px rgba(212,175,55,0.8)); }
        }
        @keyframes yantraSpin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes waveExpand {
          0% { transform: translate(-50%, -50%) scale(0.3); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
        @keyframes energyBeam {
          0% { opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { opacity: 0; }
        }
        @keyframes blueprintGridPulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.12; }
        }
        @keyframes scanLine {
          0% { top: 0%; opacity: 0.5; }
          50% { opacity: 0.9; }
          100% { top: 100%; opacity: 0.5; }
        }
        @keyframes cornerGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(212,175,55,0.2); }
          50% { box-shadow: 0 0 20px rgba(212,175,55,0.5); }
        }
        @keyframes stonePulse {
          0%, 100% { transform: scale(1); opacity: 0.7; filter: blur(0px); }
          50% { transform: scale(1.3); opacity: 1; filter: blur(0px); }
        }
        @keyframes stoneRipple {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        @keyframes floatMantra {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes positiveAura {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }
        @keyframes fireRise {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-30px) scale(0.8); opacity: 0.7; }
          100% { transform: translateY(-60px) scale(0.3); opacity: 0; }
        }
        @keyframes fireGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,140,0,0.3), 0 0 40px rgba(255,69,0,0.2); }
          50% { box-shadow: 0 0 40px rgba(255,140,0,0.6), 0 0 80px rgba(255,69,0,0.4); }
        }
        @keyframes yagnaWave {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }

        @keyframes sparkFloat {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          25% { transform: translateY(-15px) translateX(8px); opacity: 0.8; }
          50% { transform: translateY(-35px) translateX(-5px); opacity: 0.5; }
          75% { transform: translateY(-50px) translateX(10px); opacity: 0.3; }
          100% { transform: translateY(-70px) translateX(-3px); opacity: 0; }
        }
        @keyframes energyBurst {
          0% { transform: scale(0.6); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 0.8; }
          100% { transform: scale(0.6); opacity: 0.4; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {t("blueprint.tag")}
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t("blueprint.title1")} <span className="text-[#D4AF37]">{t("blueprint.titleHighlight")}</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {t("blueprint.subtitle")}
          </p>
        </div>

        {/* Blueprint Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Outer decorative frame */}
          <div className="absolute -inset-2 sm:-inset-3 border border-[#D4AF37]/20 rounded-2xl sm:rounded-3xl pointer-events-none" />
          <div className="absolute -inset-4 sm:-inset-6 border border-[#4A90D9]/10 rounded-3xl sm:rounded-[2rem] pointer-events-none hidden sm:block" />

          {/* Main slider container */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-[#4A90D9]/20">
            {/* ===== SLIDE 1: Original Floor Plan ===== */}
            <div
              className="relative transition-opacity duration-700"
              style={{
                opacity: activeSlide === 0 ? 1 : 0,
                position: activeSlide === 0 ? "relative" : "absolute",
                inset: activeSlide === 0 ? undefined : 0,
                pointerEvents: activeSlide === 0 ? "auto" : "none",
              }}
            >
              <div className="relative">
                <img
                  src={FLOOR_PLAN}
                  alt="Motel floor plan energy blueprint"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />

                {/* Blueprint blue tint overlay */}
                <div className="absolute inset-0 bg-[#0F1B33]/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#4A90D9]/10 via-transparent to-[#4A90D9]/10" />

                {/* Animated grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ animation: "blueprintGridPulse 5s ease-in-out infinite" }}
                >
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="bpGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4A90D9" strokeWidth="0.4" opacity="0.4" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#bpGrid)" />
                  </svg>
                </div>

                {/* Scanning line */}
                <div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent pointer-events-none z-10"
                  style={{ animation: "scanLine 5s linear infinite" }}
                />

                {/* SHREE YANTRA CENTER */}
                <div
                  className="absolute top-1/2 left-1/2 z-20"
                  style={{ animation: "yantraPulse 4s ease-in-out infinite" }}
                >
                  <img
                    src={SHREE_YANTRA}
                    alt="Shree Yantra"
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full"
                    style={{ filter: "brightness(1.2)" }}
                  />
                </div>

                {/* Slow spinning ring around yantra */}
                <div
                  className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 border border-[#D4AF37]/30 rounded-full pointer-events-none z-10"
                  style={{ animation: "yantraSpin 30s linear infinite" }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[#D4AF37] rounded-full" />
                </div>

                {/* ENERGY WAVES FROM CENTER */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={`wave-${i}`}
                    className="absolute top-1/2 left-1/2 rounded-full border border-[#D4AF37]/40 pointer-events-none z-10"
                    style={{
                      width: "80px",
                      height: "80px",
                      animation: `waveExpand 4s ease-out ${i * 0.8}s infinite`,
                    }}
                  />
                ))}

                {/* ENERGY BEAMS FROM CENTER TO CORNERS */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
                  <line x1="50%" y1="50%" x2="5%" y2="5%" stroke="#D4AF37" strokeWidth="1" opacity="0.3" strokeDasharray="8 4" style={{ animation: "energyBeam 3s ease-in-out 0s infinite" }} />
                  <line x1="50%" y1="50%" x2="95%" y2="5%" stroke="#D4AF37" strokeWidth="1" opacity="0.3" strokeDasharray="8 4" style={{ animation: "energyBeam 3s ease-in-out 0.5s infinite" }} />
                  <line x1="50%" y1="50%" x2="5%" y2="95%" stroke="#D4AF37" strokeWidth="1" opacity="0.3" strokeDasharray="8 4" style={{ animation: "energyBeam 3s ease-in-out 1s infinite" }} />
                  <line x1="50%" y1="50%" x2="95%" y2="95%" stroke="#D4AF37" strokeWidth="1" opacity="0.3" strokeDasharray="8 4" style={{ animation: "energyBeam 3s ease-in-out 1.5s infinite" }} />
                </svg>

                {/* CORNER MANTRAS */}
                {CORNER_MANTRAS.map((mantra, i) => (
                  <div
                    key={i}
                    className={`absolute z-20 ${positionClasses[mantra.position]}`}
                    style={{ animation: `mantraGlow 3s ease-in-out ${mantraAnimDelay[mantra.position]} infinite` }}
                  >
                    <div
                      className="bg-[#0F1B33]/80 backdrop-blur-sm border border-[#D4AF37]/40 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5"
                      style={{ animation: "cornerGlow 3s ease-in-out infinite" }}
                    >
                      <span className="text-[#D4AF37] text-[9px] sm:text-xs md:text-sm font-semibold whitespace-nowrap">
                        {mantra.text}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Dark gradient for bottom readability */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[#0F1B33]/90 to-transparent pointer-events-none z-10" />

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0F1B33]/90 backdrop-blur-md border-t border-[#4A90D9]/30 p-3 sm:p-4 z-20">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-[#4A90D9] text-[8px] sm:text-[10px] font-mono tracking-widest uppercase mb-0.5">
                        {t("blueprint.slide1.label")}
                      </p>
                      <p className="text-white font-semibold text-xs sm:text-sm truncate">
                        {t("blueprint.slide1.sub")}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4 hidden sm:block">
                      <p className="text-[#D4AF37] text-[10px] font-mono tracking-wider">ॐ SACRED GEOMETRY</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-[2px] bg-[#D4AF37]" />
                          <span className="text-[#D4AF37]/70 text-[9px] font-mono">Mantra</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-[2px] bg-[#4A90D9]" />
                          <span className="text-[#4A90D9]/70 text-[9px] font-mono">Structure</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== SLIDE 2: Vibration Stones & Extended Mantras ===== */}
            <div
              className="relative transition-opacity duration-700"
              style={{
                opacity: activeSlide === 1 ? 1 : 0,
                position: activeSlide === 1 ? "relative" : "absolute",
                inset: activeSlide === 1 ? undefined : 0,
                pointerEvents: activeSlide === 1 ? "auto" : "none",
              }}
            >
              <div className="relative">
                <img
                  src={VIBRATION_STONES}
                  alt="Hotel motel energy vibration mapping with healing stones"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />

                <div className="absolute inset-0 bg-[#0F1B33]/30 mix-blend-multiply" />

                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ animation: "blueprintGridPulse 5s ease-in-out infinite" }}
                >
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="bpGrid2" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.25" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#bpGrid2)" />
                  </svg>
                </div>

                {/* VIBRATION STONES WITH RIPPLE EFFECTS */}
                {STONE_POSITIONS.map((stone, i) => (
                  <div key={`stone-${i}`} className="absolute z-20" style={{ top: stone.top, left: stone.left }}>
                    {[0, 1, 2].map((r) => (
                      <div
                        key={`ripple-${i}-${r}`}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                        style={{
                          width: "12px",
                          height: "12px",
                          border: `1px solid ${stone.color}`,
                          animation: `stoneRipple 3s ease-out ${parseFloat(stone.delay) + r * 0.8}s infinite`,
                        }}
                      />
                    ))}
                    <div
                      className={`${stone.size} rounded-full relative z-10`}
                      style={{
                        backgroundColor: stone.color,
                        boxShadow: `0 0 15px ${stone.color}80, 0 0 30px ${stone.color}40`,
                        animation: `stonePulse 2.5s ease-in-out ${stone.delay} infinite`,
                      }}
                    />
                  </div>
                ))}

                {/* FLOATING MANTRAS */}
                {EXTENDED_MANTRAS.map((mantra, i) => (
                  <div
                    key={`ext-mantra-${i}`}
                    className="absolute z-20"
                    style={{ top: mantra.top, left: mantra.left, animation: `floatMantra 3.5s ease-in-out ${i * 0.4}s infinite` }}
                  >
                    <div className="bg-[#0F1B33]/70 backdrop-blur-sm border border-[#D4AF37]/30 rounded-md px-1.5 py-0.5 sm:px-2 sm:py-1">
                      <span className="text-[#D4AF37] text-[7px] sm:text-[9px] md:text-xs font-semibold whitespace-nowrap">
                        {mantra.text}
                      </span>
                    </div>
                  </div>
                ))}

                {/* POSITIVE AURA GLOW SPOTS */}
                {[
                  { top: "30%", left: "35%", color: "#D4AF37" },
                  { top: "55%", left: "60%", color: "#9B59B6" },
                  { top: "70%", left: "25%", color: "#2ECC71" },
                  { top: "20%", left: "55%", color: "#F39C12" },
                ].map((aura, i) => (
                  <div
                    key={`aura-${i}`}
                    className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full pointer-events-none z-10"
                    style={{
                      top: aura.top,
                      left: aura.left,
                      background: `radial-gradient(circle, ${aura.color}30 0%, transparent 70%)`,
                      animation: `positiveAura 4s ease-in-out ${i * 1.2}s infinite`,
                    }}
                  />
                ))}

                <div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent pointer-events-none z-10"
                  style={{ animation: "scanLine 6s linear infinite" }}
                />

                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-[#0F1B33]/90 to-transparent pointer-events-none z-10" />

                <div className="absolute bottom-0 left-0 right-0 bg-[#0F1B33]/90 backdrop-blur-md border-t border-[#D4AF37]/30 p-3 sm:p-4 z-20">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-[#D4AF37] text-[8px] sm:text-[10px] font-mono tracking-widest uppercase mb-0.5">
                        {t("blueprint.slide2.label")}
                      </p>
                      <p className="text-white font-semibold text-xs sm:text-sm truncate">
                        {t("blueprint.slide2.sub")}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4 hidden sm:block">
                      <p className="text-[#D4AF37] text-[10px] font-mono tracking-wider">ॐ CRYSTAL HEALING</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                          <span className="text-[#D4AF37]/70 text-[9px] font-mono">Stone</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#9B59B6]" />
                          <span className="text-[#9B59B6]/70 text-[9px] font-mono">Vibration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== SLIDE 3: Yagna Ceremony — Vedic Mantra Power ===== */}
            <div
              className="relative transition-opacity duration-700"
              style={{
                opacity: activeSlide === 2 ? 1 : 0,
                position: activeSlide === 2 ? "relative" : "absolute",
                inset: activeSlide === 2 ? undefined : 0,
                pointerEvents: activeSlide === 2 ? "auto" : "none",
              }}
            >
              <div className="relative">
                <img
                  src={YAGNA_CEREMONY}
                  alt="Vedic Yagna ceremony for motel positive energy and mantra power"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />

                {/* Warm overlay for fire atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0800]/60 via-transparent to-[#0F1B33]/40" />

                {/* Fire glow at center */}
                <div
                  className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full pointer-events-none z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(255,140,0,0.35) 0%, rgba(255,69,0,0.15) 40%, transparent 70%)",
                    animation: "fireGlow 3s ease-in-out infinite",
                  }}
                />

                {/* Energy burst rings from fire center */}
                <div
                  className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full pointer-events-none z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(255,200,50,0.4) 0%, transparent 70%)",
                    animation: "energyBurst 2.5s ease-in-out infinite",
                  }}
                />

                {/* Expanding positive energy waves from fire */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={`yagna-wave-${i}`}
                    className="absolute top-[40%] left-1/2 rounded-full pointer-events-none z-10"
                    style={{
                      width: "60px",
                      height: "60px",
                      border: "1px solid rgba(255,165,0,0.4)",
                      animation: `yagnaWave 5s ease-out ${i * 0.8}s infinite`,
                    }}
                  />
                ))}

                {/* Fire sparks floating upward — compact layout */}
                {FIRE_SPARKS.map((spark, i) => (
                  <div
                    key={`spark-${i}`}
                    className="absolute rounded-full pointer-events-none z-20"
                    style={{
                      top: spark.top,
                      left: spark.left,
                      width: `${spark.size}px`,
                      height: `${spark.size}px`,
                      backgroundColor: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#FF8C00" : "#FF4500",
                      boxShadow: `0 0 ${spark.size * 3}px ${i % 3 === 0 ? "#FFD700" : "#FF8C00"}`,
                      animation: `sparkFloat 2.5s ease-out ${spark.delay} infinite`,
                    }}
                  />
                ))}

                {/* Online/Offline badge */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
                  <div className="flex items-center gap-2 bg-[#1a0800]/80 backdrop-blur-md border border-[#FFD700]/50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                    <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
                    <span className="text-[#FFD700] text-[9px] sm:text-xs font-bold tracking-wider uppercase">
                      {t("blueprint.slide3.badge")}
                    </span>
                  </div>
                </div>

                {/* Scanning line with warm tone */}
                <div
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent pointer-events-none z-10"
                  style={{ animation: "scanLine 7s linear infinite" }}
                />

                {/* Dark gradient for bottom readability */}
                <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-[#1a0800]/95 to-transparent pointer-events-none z-10" />

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#1a0800]/90 backdrop-blur-md border-t border-[#FF8C00]/30 p-3 sm:p-4 z-20">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0">
                      <p className="text-[#FF8C00] text-[8px] sm:text-[10px] font-mono tracking-widest uppercase mb-0.5">
                        {t("blueprint.slide3.label")}
                      </p>
                      <p className="text-white font-semibold text-xs sm:text-sm truncate">
                        {t("blueprint.slide3.sub")}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4 hidden sm:block">
                      <p className="text-[#FFD700] text-[10px] font-mono tracking-wider">🔥 AGNI SHAKTI</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                          <span className="text-[#FFD700]/70 text-[9px] font-mono">Fire</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#FF8C00]" />
                          <span className="text-[#FF8C00]/70 text-[9px] font-mono">Mantra</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
                          <span className="text-[#2ECC71]/70 text-[9px] font-mono">Energy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== SLIDER CONTROLS ===== */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-[#0F1B33]/80 hover:bg-[#0F1B33] backdrop-blur-sm border border-[#D4AF37]/40 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-[#0F1B33]/80 hover:bg-[#0F1B33] backdrop-blur-sm border border-[#D4AF37]/40 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-3 mt-5 sm:mt-6">
            {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeSlide === index
                    ? "w-8 h-2.5 bg-[#D4AF37] shadow-md shadow-[#D4AF37]/30"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide labels */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-3">
            {SLIDE_LABEL_KEYS.map((key, index) => (
              <div key={key} className="flex items-center gap-4 sm:gap-6">
                {index > 0 && <div className="w-px h-3 bg-white/20" />}
                <button
                  onClick={() => goToSlide(index)}
                  className={`text-[9px] sm:text-xs font-mono tracking-wider transition-colors duration-300 ${
                    activeSlide === index ? "text-[#D4AF37]" : "text-white/40 hover:text-white/60"
                  }`}
                >
                  {t(key)}
                </button>
              </div>
            ))}
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-2xl hidden sm:block" />
          <div className="absolute -top-3 -right-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-2xl hidden sm:block" />
          <div className="absolute -bottom-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-l-2 border-[#D4AF37]/40 rounded-bl-2xl hidden sm:block" />
          <div className="absolute -bottom-3 -right-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-[#D4AF37]/40 rounded-br-2xl hidden sm:block" />
        </div>
      </div>
    </section>
  );
}