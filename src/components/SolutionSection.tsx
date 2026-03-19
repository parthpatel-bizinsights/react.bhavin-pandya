import {
  Music,
  Hexagon,
  Triangle,
  Flame,
  Gem,
  Play,
  Sparkles,
  BarChart3,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const YANTRA_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/2baba5e2-2aa2-4927-bd33-e08e05fc229e.png";
const RITUAL_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/fc4fe303-2989-44e9-9ac3-abc0381852e5.png";
const ENERGY_WAVE_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/ed146955-cc8b-4a52-a102-4074a14e88a3.png";
const HEALING_STONES_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/4ae35fd6-f4bd-4ca0-8a01-2bad49d48153.png";
const MANDALA_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/ba41eaf2-1d91-401f-b7d1-26e0849c04a9.png";

const serviceKeys = [
  {
    icon: Music,
    titleKey: "solutions.s1.title",
    descKey: "solutions.s1.desc",
    accent: "from-blue-500/20 to-indigo-500/20",
    image: ENERGY_WAVE_IMAGE,
  },
  {
    icon: Hexagon,
    titleKey: "solutions.s2.title",
    descKey: "solutions.s2.desc",
    accent: "from-amber-500/20 to-yellow-500/20",
    image: YANTRA_IMAGE,
  },
  {
    icon: Triangle,
    titleKey: "solutions.s3.title",
    descKey: "solutions.s3.desc",
    accent: "from-purple-500/20 to-pink-500/20",
    image: MANDALA_IMAGE,
  },
  {
    icon: Flame,
    titleKey: "solutions.s4.title",
    descKey: "solutions.s4.desc",
    accent: "from-orange-500/20 to-red-500/20",
    image: RITUAL_IMAGE,
  },
  {
    icon: Gem,
    titleKey: "solutions.s5.title",
    descKey: "solutions.s5.desc",
    accent: "from-emerald-500/20 to-teal-500/20",
    image: HEALING_STONES_IMAGE,
  },
  {
    icon: Heart,
    titleKey: "solutions.s6.title",
    descKey: "solutions.s6.desc",
    accent: "from-indigo-500/20 to-violet-600/20",
    image: "/For_Biz-insight.jpg",
  },
];

function VideoCard({
  title,
  description,
  thumbnail,
  videoUrl, // Added this prop
}: {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#1B2A4A]">
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72">
        {!playing ? (
          <>
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/40 to-transparent" />
            <button
              onClick={() => setPlaying(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg shadow-[#D4AF37]/30 hover:scale-110 transition-transform z-10"
            >
              <Play
                className="w-5 h-5 sm:w-7 sm:h-7 text-[#1B2A4A] ml-0.5 sm:ml-1"
                fill="#1B2A4A"
              />
            </button>
          </>
        ) : (
          <div className="w-full h-full bg-black">
            {/* The actual Media Player */}
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>

            {/* Close Button */}
            <button
              onClick={() => setPlaying(false)}
              className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
              title="Close Video"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
          {title}
        </h4>
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {t("solutions.tag")}
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-4 sm:mb-6">
            {t("solutions.title1")}{" "}
            <span className="text-[#D4AF37]">
              {t("solutions.titleHighlight")}
            </span>
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg max-w-2xl mx-auto">
            {t("solutions.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {serviceKeys.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-[#D4AF37]/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-36 sm:h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1B2A4A]/90 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:text-[#1B2A4A] transition-colors duration-300" />
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1B2A4A] mb-2 sm:mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-xs sm:text-sm">
                  {t(service.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Video / Visual Section */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1B2A4A] mb-3">
              {t("solutions.videoTitle1")}{" "}
              <span className="text-[#D4AF37]">
                {t("solutions.videoTitleHighlight")}
              </span>{" "}
              {t("solutions.videoTitle2")}
            </h3>
            <p className="text-[#6B7280] text-sm sm:text-base max-w-xl mx-auto">
              {t("solutions.videoSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <VideoCard
              title={t("solutions.video1.title")}
              description={t("solutions.video1.desc")}
              thumbnail={RITUAL_IMAGE}
              videoUrl="/screenrec.mp4"
            />
            <VideoCard
              title={t("solutions.video2.title")}
              description={t("solutions.video2.desc")}
              thumbnail={ENERGY_WAVE_IMAGE}
              videoUrl="/screenrec.mp4"
            />
            <VideoCard
              title={t("solutions.video3.title")}
              description={t("solutions.video3.desc")}
              thumbnail={HEALING_STONES_IMAGE}
              videoUrl="/screenrec.mp4"
            />
          </div>
        </div>

        {/* Visual Banner with animated overlay */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="relative h-48 sm:h-64 md:h-80 group overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={YANTRA_IMAGE}
              alt="Sacred Geometry Yantra"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-[#1B2A4A]/30 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <p className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1">
                  {t("solutions.banner1.tag")}
                </p>
                <p className="text-white font-serif text-base sm:text-xl">
                  {t("solutions.banner1.title")}
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-48 sm:h-64 md:h-80 group overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={MANDALA_IMAGE}
              alt="Mandala Energy Pattern"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-[#1B2A4A]/30 to-transparent flex items-end p-4 sm:p-6">
              <div>
                <p className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1">
                  {t("solutions.banner2.tag")}
                </p>
                <p className="text-white font-serif text-base sm:text-xl">
                  {t("solutions.banner2.title")}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
