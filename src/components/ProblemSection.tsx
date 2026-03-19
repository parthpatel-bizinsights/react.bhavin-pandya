import { TrendingDown, Home, MessageSquareWarning, DollarSign, Users, CloudOff } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const problemKeys = [
  { icon: TrendingDown, titleKey: "problems.p1.title", descKey: "problems.p1.desc" },
  { icon: Home, titleKey: "problems.p2.title", descKey: "problems.p2.desc" },
  { icon: MessageSquareWarning, titleKey: "problems.p3.title", descKey: "problems.p3.desc" },
  { icon: DollarSign, titleKey: "problems.p4.title", descKey: "problems.p4.desc" },
  { icon: Users, titleKey: "problems.p5.title", descKey: "problems.p5.desc" },
  { icon: CloudOff, titleKey: "problems.p6.title", descKey: "problems.p6.desc" },
];

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section id="problems" className="py-16 sm:py-20 md:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {t("problems.tag")}
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-4 sm:mb-6">
            {t("problems.title")}
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg max-w-2xl mx-auto">
            {t("problems.subtitle")}
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {problemKeys.map((problem, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#D4AF37]/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#1B2A4A]/5 group-hover:bg-[#D4AF37]/10 flex items-center justify-center mb-4 sm:mb-5 transition-colors">
                <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1B2A4A] group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1B2A4A] mb-2 sm:mb-3">
                {t(problem.titleKey)}
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                {t(problem.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center bg-gradient-to-r from-[#1B2A4A] to-[#2A3F6A] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            {t("problems.bottom")}{" "}
            <span className="text-[#D4AF37] font-semibold">
              {t("problems.bottomHighlight")}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}