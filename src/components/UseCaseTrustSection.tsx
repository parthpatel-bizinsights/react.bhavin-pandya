import { Check, Lock, BarChart3, Handshake, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const useCaseKeys = [
  "usecase.u1",
  "usecase.u2",
  "usecase.u3",
  "usecase.u4",
  "usecase.u5",
];

const trustItemKeys = [
  { icon: Lock, titleKey: "trust.t1.title", descKey: "trust.t1.desc" },
  { icon: BarChart3, titleKey: "trust.t2.title", descKey: "trust.t2.desc" },
  { icon: Handshake, titleKey: "trust.t3.title", descKey: "trust.t3.desc" },
  { icon: Clock, titleKey: "trust.t4.title", descKey: "trust.t4.desc" },
];

export default function UseCaseTrustSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Use Cases */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                {t("usecase.tag")}
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-4 sm:mb-6">
              {t("usecase.title")}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-3 sm:space-y-4">
              {useCaseKeys.map((key, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 bg-[#F8F6F0] rounded-lg sm:rounded-xl p-4 sm:p-5 hover:bg-[#D4AF37]/5 transition-colors border border-transparent hover:border-[#D4AF37]/20"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B2A4A]" />
                  </div>
                  <span className="text-[#1A1A2E] text-sm sm:text-lg font-medium">
                    {t(key)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div>
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                {t("trust.tag")}
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4 sm:mb-6">
              {t("trust.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustItemKeys.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#1B2A4A] to-[#2A3F6A] group hover:from-[#D4AF37] hover:to-[#C5A028] transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-colors">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] group-hover:text-[#1B2A4A] transition-colors" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#1B2A4A] mb-2 transition-colors">
                  {t(item.titleKey)}
                </h3>
                <p className="text-white/70 group-hover:text-[#1B2A4A]/70 text-xs sm:text-sm leading-relaxed transition-colors">
                  {t(item.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}