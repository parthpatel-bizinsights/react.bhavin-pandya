import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Owner, Sunshine Inn",
    location: "Houston, TX",
    logo: "SI",
    logoColor: "from-orange-400 to-amber-500",
    comment:
      "After Acharya Bhavin Pandya performed the Yagna ritual and placed the Shri Yantra at our motel, our occupancy rate jumped from 45% to 78% within three months. The energy shift was remarkable — even our staff noticed the difference.",
    commentGu:
      "આચાર્ય ભાવિન પંડ્યાએ યજ્ઞ વિધિ કરી અને અમારી મોટેલ પર શ્રી યંત્ર મૂક્યા પછી, અમારો ઓક્યુપન્સી દર ત્રણ મહિનામાં 45% થી 78% સુધી વધ્યો. ઊર્જા પરિવર્તન નોંધપાત્ર હતું — અમારા સ્ટાફે પણ તફાવત જોયો.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Manager, Royal Stay Motel",
    location: "Atlanta, GA",
    logo: "RS",
    logoColor: "from-purple-400 to-indigo-500",
    comment:
      "We were struggling to sell our property for over two years. After the spiritual energy consultation and Mantra Shakti sessions, we received a full-price offer within 6 weeks. I truly believe the energy alignment made the difference.",
    commentGu:
      "અમે બે વર્ષથી વધુ સમયથી અમારી મિલકત વેચવા માટે સંઘર્ષ કરી રહ્યા હતા. આધ્યાત્મિક ઊર્જા પરામર્શ અને મંત્ર શક્તિ સત્રો પછી, અમને 6 અઠવાડિયામાં પૂર્ણ-કિંમત ઓફર મળી.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Owner, Comfort Lodge",
    location: "Dallas, TX",
    logo: "CL",
    logoColor: "from-emerald-400 to-teal-500",
    comment:
      "The healing stones and sacred herbs placement transformed the atmosphere of our motel. Guests started leaving positive reviews about the 'peaceful vibe' and our repeat bookings increased by 60%. Highly recommend Acharya ji's services.",
    commentGu:
      "હીલિંગ સ્ટોન્સ અને પવિત્ર જડીબુટ્ટીઓના પ્લેસમેન્ટે અમારી મોટેલનું વાતાવરણ બદલી નાખ્યું. મહેમાનોએ 'શાંતિપૂર્ણ વાતાવરણ' વિશે સકારાત્મક સમીક્ષાઓ આપવાનું શરૂ કર્યું અને અમારી પુનરાવર્તિત બુકિંગ 60% વધી.",
    rating: 5,
  },
  {
    name: "Neha Mehta",
    role: "Co-Owner, Paradise Inn",
    location: "Orlando, FL",
    logo: "PI",
    logoColor: "from-rose-400 to-pink-500",
    comment:
      "We had constant staff conflicts and unexplained equipment failures. After the Yantra Shakti installation and energy clearing, everything changed. Our team is harmonious, equipment works smoothly, and revenue has grown 35%.",
    commentGu:
      "અમારી પાસે સતત સ્ટાફ સંઘર્ષ અને અસ્પષ્ટ સાધન નિષ્ફળતાઓ હતી. યંત્ર શક્તિ સ્થાપના અને ઊર્જા શુદ્ધિકરણ પછી, બધું બદલાઈ ગયું. અમારી ટીમ સુમેળભરી છે, સાધનો સરળતાથી કામ કરે છે, અને આવક 35% વધી છે.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Owner, Gateway Motor Lodge",
    location: "Phoenix, AZ",
    logo: "GM",
    logoColor: "from-blue-400 to-cyan-500",
    comment:
      "I was skeptical at first, but the results speak for themselves. After the complete energy transformation program, our Google rating went from 3.2 to 4.6 stars, and monthly revenue increased by over $15,000. Acharya Bhavin is the real deal.",
    commentGu:
      "હું શરૂઆતમાં શંકાશીલ હતો, પરંતુ પરિણામો પોતે જ બોલે છે. સંપૂર્ણ ઊર્જા રૂપાંતરણ કાર્યક્રમ પછી, અમારી Google રેટિંગ 3.2 થી 4.6 સ્ટાર્સ થઈ, અને માસિક આવક $15,000 થી વધુ વધી.",
    rating: 5,
  },
  {
    name: "Kavita Joshi",
    role: "Owner, Lakeside Motel",
    location: "Nashville, TN",
    logo: "LM",
    logoColor: "from-yellow-400 to-orange-500",
    comment:
      "Our motel had a dark history that was keeping guests away. Acharya Pandya's comprehensive energy cleansing and Shri Yantra activation completely transformed the property. We're now consistently booked at 85%+ occupancy.",
    commentGu:
      "અમારી મોટેલનો અંધકારમય ઇતિહાસ હતો જે મહેમાનોને દૂર રાખતો હતો. આચાર્ય પંડ્યાના વ્યાપક ઊર્જા શુદ્ધિકરણ અને શ્રી યંત્ર સક્રિયકરણે મિલકતને સંપૂર્ણ રૂપાંતરિત કરી. અમે હવે સતત 85%+ ઓક્યુપન્સી પર બુક છીએ.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const { lang, t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const getComment = (testimonial: (typeof testimonials)[0]) => {
    return lang === "gu" ? testimonial.commentGu : testimonial.comment;
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-[#F8F6F0] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              {t("testimonials.tag")}
            </span>
            <div className="h-px w-8 bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-4 sm:mb-6">
            {t("testimonials.title1")}{" "}
            <span className="text-[#D4AF37]">
              {t("testimonials.titleHighlight")}
            </span>{" "}
            {t("testimonials.title2")}
          </h2>
          <p className="text-[#6B7280] text-base sm:text-lg max-w-2xl mx-auto mb-5 sm:mb-6">
            {t("testimonials.subtitle")}
          </p>
          {/* Guru trust badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-md border border-gray-100">
            <img
              src="/logo.jpeg"
              alt="Acharya Bhavin Pandya"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#D4AF37] bg-gradient-to-b from-[#FFF8E7] to-[#E8D5A0]"
            />
            <div className="text-left">
              <p className="text-[#1B2A4A] font-semibold text-xs sm:text-sm">
                Acharya Bhavin Pandya
              </p>
              <p className="text-[#6B7280] text-[10px] sm:text-xs">
                {t("testimonials.trustBadge")}
              </p>
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 text-[#D4AF37]/10" />

            <div className="relative z-10">
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="text-[#1B2A4A] text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 font-medium italic">
                &ldquo;{getComment(testimonials[activeIndex])}&rdquo;
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={cn(
                    "w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm sm:text-lg",
                    testimonials[activeIndex].logoColor,
                  )}
                >
                  {testimonials[activeIndex].logo}
                </div>
                <div>
                  <p className="text-[#1B2A4A] font-semibold text-base sm:text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-[#6B7280] text-xs sm:text-sm">
                    {testimonials[activeIndex].role} •{" "}
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Selector Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-2.5 sm:h-3 rounded-full transition-all duration-300",
                activeIndex === i
                  ? "bg-[#D4AF37] w-6 sm:w-8"
                  : "bg-[#1B2A4A]/20 hover:bg-[#1B2A4A]/40 w-2.5 sm:w-3",
              )}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Grid of all testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "text-left rounded-xl sm:rounded-2xl p-4 sm:p-6 border transition-all duration-300 hover:-translate-y-1",
                activeIndex === index
                  ? "bg-[#1B2A4A] border-[#D4AF37]/40 shadow-lg"
                  : "bg-white border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-md",
              )}
            >
              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3 h-3 sm:w-4 sm:h-4",
                      activeIndex === index
                        ? "text-[#D4AF37] fill-[#D4AF37]"
                        : "text-[#D4AF37]/60 fill-[#D4AF37]/60",
                    )}
                  />
                ))}
              </div>

              <p
                className={cn(
                  "text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3",
                  activeIndex === index ? "text-white/80" : "text-[#6B7280]",
                )}
              >
                &ldquo;{getComment(testimonial)}&rdquo;
              </p>

              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-[10px] sm:text-xs",
                    testimonial.logoColor,
                  )}
                >
                  {testimonial.logo}
                </div>
                <div>
                  <p
                    className={cn(
                      "font-semibold text-xs sm:text-sm",
                      activeIndex === index ? "text-white" : "text-[#1B2A4A]",
                    )}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={cn(
                      "text-[10px] sm:text-xs",
                      activeIndex === index
                        ? "text-white/50"
                        : "text-[#6B7280]",
                    )}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
