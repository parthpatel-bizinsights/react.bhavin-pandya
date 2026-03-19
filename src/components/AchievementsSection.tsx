import { Award, Building, Briefcase, Flame } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const achievementKeys = [
  {
    icon: Award,
    titleKey: "achievements.a1.title",
    subtitleKey: "achievements.a1.subtitle",
    descKey: "achievements.a1.desc",
    image: "/Awards_from_CM_Biz.jpeg",
    accent: "from-[#D4AF37]/20 to-amber-600/10",
  },
  {
    icon: Building,
    titleKey: "achievements.a2.title",
    subtitleKey: "achievements.a2.subtitle",
    descKey: "achievements.a2.desc",
    image: "/Temple_Biz.jpeg",
    accent: "from-orange-500/20 to-amber-500/10",
  },
  {
    icon: Briefcase,
    titleKey: "achievements.a3.title",
    subtitleKey: "achievements.a3.subtitle",
    descKey: "achievements.a3.desc",
    image: "/F_v2_14x.png",
    accent: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: Flame,
    titleKey: "achievements.a4.title",
    subtitleKey: "achievements.a4.subtitle",
    descKey: "achievements.a4.desc",
    image: "/IMG_0741.jpg",
    accent: "from-red-500/20 to-orange-500/10",
  },
];

const statKeys = [
  { value: "20+", key: "achievements.stat1" },
  { value: "1008", key: "achievements.stat2" },
  { value: "5000+", key: "achievements.stat3" },
  { value: "1", key: "achievements.stat4" },
];

export default function AchievementsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#F8F6F0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {t("achievements.tag")}
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-3 sm:mb-4">
            {t("achievements.title1")}{" "}
            <span className="text-[#D4AF37]">
              {t("achievements.titleHighlight")}
            </span>
          </h2>
          <p className="text-[#6B7280] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {t("achievements.subtitle")}
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {achievementKeys.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#D4AF37]/30"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.accent} via-transparent to-black/40`}
                />

                {/* Icon badge */}
                <div className="absolute top-3 left-3 bg-[#1B2A4A]/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <item.icon className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Number badge */}
                <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#1B2A4A] font-bold text-xs w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B2A4A] mb-1 leading-tight">
                  {t(item.titleKey)}
                </h3>
                <p className="text-[#D4AF37] text-xs font-semibold mb-2">
                  {t(item.subtitleKey)}
                </p>
                <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-3">
                  {t(item.descKey)}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-10 sm:mt-14 bg-[#1B2A4A] rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {statKeys.map((stat, index) => (
              <div key={index}>
                <p className="text-[#D4AF37] font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
                  {stat.value}
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  {t(stat.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
