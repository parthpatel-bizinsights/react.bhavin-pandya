import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, ArrowRight, Clock, Tag } from "lucide-react";

interface Article {
  id: string;
  titleKey: string;
  excerptKey: string;
  categoryKey: string;
  readTime: string;
  image: string;
  tags: string[];
}

const ARTICLES: Article[] = [
  {
    id: "positive-energy-motel",
    titleKey: "blog.a1.title",
    excerptKey: "blog.a1.excerpt",
    categoryKey: "blog.cat.energy",
    readTime: "5 min",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/6c0c31b3-ca4c-47b8-866e-c3401cb16c74.png",
    tags: ["Positive Energy", "Motel", "Vastu"],
  },
  {
    id: "remove-negative-energy",
    titleKey: "blog.a2.title",
    excerptKey: "blog.a2.excerpt",
    categoryKey: "blog.cat.remedies",
    readTime: "7 min",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/ba41eaf2-1d91-401f-b7d1-26e0849c04a9.png",
    tags: ["Negative Energy", "Spiritual Cleansing", "Protection"],
  },
  {
    id: "motel-energy-alignment",
    titleKey: "blog.a3.title",
    excerptKey: "blog.a3.excerpt",
    categoryKey: "blog.cat.business",
    readTime: "6 min",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/b021e86c-d666-4657-8a1c-0ed5a9abe756.png",
    tags: ["Motel Industry", "Business Growth", "Energy Flow"],
  },
  {
    id: "vastu-tips-hospitality",
    titleKey: "blog.a4.title",
    excerptKey: "blog.a4.excerpt",
    categoryKey: "blog.cat.vastu",
    readTime: "8 min",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/4ca6a2e9-84f9-4ada-b234-cdc4c60a3b2d.png",
    tags: ["Vastu Shastra", "Hospitality", "Prosperity"],
  },
  {
    id: "yagna-power-business",
    titleKey: "blog.a5.title",
    excerptKey: "blog.a5.excerpt",
    categoryKey: "blog.cat.rituals",
    readTime: "6 min",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/dc5f9641-0c1e-4880-afb3-319c60deb2e8.png",
    tags: ["Yagna", "Sacred Fire", "Business Purification"],
  },
  {
    id: "crystal-healing-properties",
    titleKey: "blog.a6.title",
    excerptKey: "blog.a6.excerpt",
    categoryKey: "blog.cat.healing",
    readTime: "5 min",
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-03-13/6c0c31b3-ca4c-47b8-866e-c3401cb16c74.png",
    tags: ["Crystal Healing", "Healing Stones", "Energy Balance"],
  },
];

export default function BlogSection() {
  const { t } = useLanguage();

  return (
    <section
      id="blog"
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#F8F6F0] to-white"
      aria-label="Blog and Articles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {t("blog.tag")}
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4 sm:mb-6">
            {t("blog.title1")}{" "}
            <span className="text-[#D4AF37]">{t("blog.titleHighlight")}</span>
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {t("blog.subtitle")}
          </p>
        </div>

        {/* Featured Article (First) */}
        <article className="mb-10 sm:mb-14">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-[220px] sm:h-[280px] lg:h-full overflow-hidden">
              <img
                src={ARTICLES[0].image}
                alt={t(ARTICLES[0].titleKey)}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#D4AF37] text-[#1B2A4A] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {t("blog.featured")}
                </span>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
                  {t(ARTICLES[0].categoryKey)}
                </span>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1 text-[#6B7280] text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{ARTICLES[0].readTime} {t("blog.read")}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#1B2A4A] mb-3 sm:mb-4 leading-tight">
                {t(ARTICLES[0].titleKey)}
              </h3>
              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                {t(ARTICLES[0].excerptKey)}
              </p>
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                {ARTICLES[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-[#1B2A4A]/5 text-[#1B2A4A]/70 text-[10px] sm:text-xs px-2.5 py-1 rounded-full"
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold text-sm hover:gap-3 transition-all group"
              >
                <BookOpen className="w-4 h-4" />
                {t("blog.readMore")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </article>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ARTICLES.slice(1, 4).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                <img
                  src={article.image}
                  alt={t(article.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#D4AF37]/90 text-[#1B2A4A] text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {t(article.categoryKey)}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2.5 text-[#6B7280] text-[10px] sm:text-xs">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime} {t("blog.read")}</span>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B2A4A] mb-2.5 leading-snug line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                  {t(article.titleKey)}
                </h3>
                <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {t(article.excerptKey)}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-0.5 bg-[#1B2A4A]/5 text-[#1B2A4A]/60 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full"
                    >
                      <Tag className="w-2 h-2" />
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold text-xs sm:text-sm hover:gap-2.5 transition-all"
                >
                  {t("blog.readMore")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Row - Compact Articles */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {ARTICLES.slice(4).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-28 sm:w-36 flex-shrink-0 overflow-hidden">
                <img
                  src={article.image}
                  alt={t(article.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-2 mb-1.5 text-[10px] sm:text-xs">
                  <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">
                    {t(article.categoryKey)}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[#6B7280]">{article.readTime} {t("blog.read")}</span>
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#1B2A4A] mb-1.5 leading-snug line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                  {t(article.titleKey)}
                </h3>
                <p className="text-[#6B7280] text-[10px] sm:text-xs leading-relaxed line-clamp-2">
                  {t(article.excerptKey)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to Contact */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-[#6B7280] text-sm sm:text-base mb-4">
            {t("blog.ctaText")}
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243660] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            {t("blog.ctaButton")}
          </button>
        </div>
      </div>
    </section>
  );
}