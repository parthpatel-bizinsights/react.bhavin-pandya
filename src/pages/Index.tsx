import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BlueprintEnergySection from "@/components/BlueprintEnergySection";
import AchievementsSection from "@/components/AchievementsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import UseCaseTrustSection from "@/components/UseCaseTrustSection";
import BlogSection from "@/components/BlogSection";
import CTAContactSection from "@/components/CTAContactSection";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/context/LanguageContext";

/* JSON-LD Structured Data for SEO */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Acharya Bhavin Pandya — Spiritual Energy Solutions",
  description:
    "Expert Vastu Shastra consultant and spiritual energy healer specializing in motel and hotel energy alignment, negative energy removal, and business prosperity solutions across the United States.",
  url: "https://acharyabhavinpandya.com",
  image: "/assets/Bhavinbhai.png",
  telephone: "+1-555-123-4567",
  email: "contact@acharyabhavin.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  founder: {
    "@type": "Person",
    name: "Acharya Bhavin Pandya",
    jobTitle: "Spiritual Energy Consultant & Vastu Expert",
    description:
      "Renowned Vedic astrologer and spiritual energy practitioner with 15+ years of experience helping motel owners transform their properties through ancient energy sciences.",
  },
  serviceType: [
    "Vastu Shastra Consultation",
    "Spiritual Energy Alignment",
    "Negative Energy Removal",
    "Motel Energy Optimization",
    "Hotel Vastu Consultation",
    "Business Prosperity Solutions",
    "Yagna Ceremonies",
    "Crystal Healing for Business",
    "Mantra Shakti",
    "Yantra Shakti",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Spiritual Energy Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Energy Consultation",
          description:
            "Complimentary consultation to assess your property's energy and recommend spiritual solutions.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How can positive energy help my motel business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Positive energy alignment through Vastu Shastra and spiritual practices can improve guest flow, enhance occupancy rates, and create a welcoming atmosphere that attracts repeat customers. Many motel owners have reported significant improvements in business after energy alignment.",
      },
    },
    {
      "@type": "Question",
      name: "How do you remove negative energy from a property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use a combination of ancient Vedic techniques including Mantra Shakti (sacred sound vibrations), Yagna ceremonies (sacred fire rituals), healing stones, and Yantra placement to cleanse negative energy and restore positive vibrations to your property.",
      },
    },
    {
      "@type": "Question",
      name: "What is Vastu Shastra for hotels and motels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vastu Shastra is an ancient Indian science of architecture and spatial arrangement. When applied to hotels and motels, it optimizes the flow of positive energy throughout the property, improving guest experiences, staff harmony, and overall business prosperity.",
      },
    },
    {
      "@type": "Question",
      name: "Can spiritual energy solutions really improve motel occupancy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many of our 200+ clients have experienced significant improvements in occupancy rates after implementing our spiritual energy solutions. While results vary, the combination of Vastu alignment, energy cleansing, and prosperity rituals has consistently shown positive outcomes for motel businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online consultations for motel energy alignment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer both online and in-person consultations. Our online services include virtual property assessment, remote Yagna ceremonies, and personalized energy alignment plans that can be implemented from anywhere in the United States.",
      },
    },
  ],
};

const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Spiritual Energy Insights for Motel & Hotel Owners",
  description:
    "Expert articles on positive energy, Vastu Shastra, negative energy removal, and spiritual solutions for the hospitality industry.",
  author: {
    "@type": "Person",
    name: "Acharya Bhavin Pandya",
  },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline:
        "How Positive Energy Transforms Your Motel Business: A Complete Guide",
      description:
        "Discover how channeling positive energy through Vastu Shastra and spiritual practices can dramatically improve your motel's occupancy, revenue, and guest satisfaction.",
      author: { "@type": "Person", name: "Acharya Bhavin Pandya" },
      keywords:
        "positive energy motel, vastu for motel, spiritual energy business, motel prosperity",
    },
    {
      "@type": "BlogPosting",
      headline: "7 Powerful Ways to Remove Negative Energy from Your Property",
      description:
        "Learn proven spiritual techniques including Mantra Shakti, sacred fire ceremonies, and crystal healing to eliminate negative energy that may be blocking your business success.",
      author: { "@type": "Person", name: "Acharya Bhavin Pandya" },
      keywords:
        "remove negative energy, spiritual cleansing property, negative energy removal, energy protection",
    },
    {
      "@type": "BlogPosting",
      headline:
        "Energy Alignment Secrets for the Motel Industry: Boost Occupancy & Revenue",
      description:
        "Industry-specific insights on how energy alignment and Vastu principles can address common motel challenges like low occupancy and financial stagnation.",
      author: { "@type": "Person", name: "Acharya Bhavin Pandya" },
      keywords:
        "motel energy alignment, hotel vastu tips, hospitality energy, motel business growth",
    },
  ],
};

export default function Index() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <meta name="keywords" content={t("seo.keywords")} />
        <meta name="author" content="Acharya Bhavin Pandya" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href="https://acharyabhavinpandya.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("seo.ogTitle")} />
        <meta property="og:description" content={t("seo.ogDescription")} />
        <meta property="og:url" content="https://acharyabhavinpandya.com" />
        <meta property="og:site_name" content="Acharya Bhavin Pandya" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.ogTitle")} />
        <meta name="twitter:description" content={t("seo.ogDescription")} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <StickyNav />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BlueprintEnergySection />
        <AchievementsSection />
        <AboutSection />
        <TestimonialSection />
        <UseCaseTrustSection />
        {/* <BlogSection /> */}
        <CTAContactSection />
      </div>
    </>
  );
}
