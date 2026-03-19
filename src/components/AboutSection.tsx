import { Award, BookOpen, Heart, Shield, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GURU_IMAGE = "/assets/Bhavinbhai.png";

const highlightKeys = [
  { icon: BookOpen, key: "about.h1" },
  { icon: Shield, key: "about.h2" },
  { icon: Heart, key: "about.h3" },
  { icon: Award, key: "about.h4" },
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {t("about.tag")}
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A]">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          {/* <div className="relative flex justify-center">
            <div className="relative max-w-[320px] sm:max-w-[400px] w-full group">
              <div className="absolute -inset-[2px] bg-gradient-to-tr from-[#D4AF37] via-orange-400/50 to-[#D4AF37] rounded-xl sm:rounded-2xl blur-[50px] opacity-70" />

              <div className="relative flex items-center justify-center rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#FFF8E7] via-[#F5E6B8]/40 to-[#E8D5A0]/30 h-[400px] sm:h-[480px] lg:h-[560px]">
                <img
                  src={"/aboutimage.jpeg"}
                  alt="Acharya Bhavin Pandya"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-24 sm:w-32 h-24 sm:h-32 border-2 border-[#D4AF37]/30 rounded-2xl -z-10 hidden sm:block" />
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-24 sm:w-32 h-24 sm:h-32 border-2 border-[#D4AF37]/30 rounded-2xl -z-10 hidden sm:block" />

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1B2A4A] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg flex items-center gap-2 z-10">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                  {t("about.badge")}
                </span>
              </div>
            </div>
          </div> */}
          <div className="relative flex justify-center">
            <div className="relative max-w-[320px] sm:max-w-[400px] w-full">
              {/* Glow Frame */}
              <div className="absolute -inset-[10px] rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

              {/* Image Container */}
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#1B2A4A] flex items-center justify-center
      min-h-[260px] sm:h-[480px] lg:h-[560px]"
              >
                <img
                  src={"/aboutimage.jpeg"}
                  alt="Acharya Bhavin Pandya"
                  className="w-full h-auto sm:h-full object-contain sm:object-cover"
                />
              </div>

              {/* Decorative corners */}
              <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 border-2 border-[#D4AF37]/20 rounded-2xl -z-10 hidden sm:block" />
              <div className="absolute -top-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 border-2 border-[#D4AF37]/20 rounded-2xl -z-10 hidden sm:block" />

              {/* Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#1B2A4A] border border-[#D4AF37]/50 text-white px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2 z-20">
                <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-sm font-semibold whitespace-nowrap">
                  {t("about.badge")}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-[#1A1A2E] text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {t("about.p1")}
            </p>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {t("about.p2")}
            </p>
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              {t("about.p3")}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlightKeys.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[#1B2A4A] font-medium text-xs sm:text-sm">
                    {t(item.key)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
