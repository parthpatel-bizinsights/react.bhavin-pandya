import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Language = "en" | "gu";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

/* ─── TRANSLATIONS ─── */
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.problems": "Problems",
    "nav.solutions": "Solutions",
    "nav.about": "About",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Spiritual Energy Solutions for Business",
    "hero.title1": "Transform Your",
    "hero.titleHighlight": "Motel's Energy",
    "hero.title2": "& Unlock Prosperity",
    "hero.desc1":
      "Struggling with low occupancy, stagnant revenue, or unexplained negativity? Ancient spiritual sciences can help realign your property's energy for growth and abundance.",
    "hero.desc2":
      "Acharya Bhavin Pandya has helped 200+ motel owners across the USA transform their struggling properties into thriving businesses through proven spiritual energy alignment techniques.",
    "hero.stat1Label": "Properties Served",
    "hero.stat2Label": "Years Experience",
    "hero.stat3Label": "Client Satisfaction",
    "hero.cta1": "Book Free Consultation",
    "hero.cta2": "Speak With Guruji",
    "hero.scrollMore": "Explore More",
    "hero.blueprintLabel": "Energy Blueprint Analysis",
    "hero.blueprintSub": "Vastu & Spiritual Energy Mapping",
    "hero.energyFlowMap": "ॐ Energy Flow Map",

    // Problem Section
    "problems.tag": "Identify the Root Cause",
    "problems.title": "Common Problems Motel Owners Face",
    "problems.subtitle":
      "These challenges may seem purely operational, but they often have a deeper energetic root.",
    "problems.p1.title": "Low Occupancy Rates",
    "problems.p1.desc":
      "Rooms sitting empty despite marketing efforts and competitive pricing.",
    "problems.p2.title": "Difficulty Selling Property",
    "problems.p2.desc":
      "Your motel has been on the market with little to no serious buyer interest.",
    "problems.p3.title": "Negative Energy Removal",
    "problems.p3.desc":
      "We provide energy cleansing and alignment to restore harmony and prosperity to your property",
    "problems.p4.title": "Financial Stagnation",
    "problems.p4.desc":
      "Revenue plateaus or declines despite operational improvements.",
    "problems.p5.title": "Staff Conflicts & Stress",
    "problems.p5.desc":
      "Ongoing tension among employees and high operational stress levels.",
    "problems.p6.title": "Heavy or Negative Energy",
    "problems.p6.desc":
      "Properties that feel unwelcoming or attract the wrong kind of energy.",
    "problems.bottom": "Sometimes the challenge is not just operational —",
    "problems.bottomHighlight":
      "it may be energetic imbalance within the property environment.",

    // Solution Section
    "solutions.tag": "Our Approach",
    "solutions.title1": "Ancient Energy Sciences Applied to",
    "solutions.titleHighlight": "Modern Businesses",
    "solutions.subtitle":
      "Our solutions are based on ancient spiritual energy practices designed to harmonize environments and attract prosperity.",
    "solutions.s1.title": "Mantra",
    "solutions.s1.desc":
      "Spiritual sound vibrations used to cleanse negative energy and enhance positive frequency in business spaces.",
    "solutions.s2.title": "Yantra",
    "solutions.s2.desc":
      "Sacred geometric instruments designed to attract prosperity and stability to your business environment.",
    "solutions.s3.title": "Shakti Activation",
    "solutions.s3.desc":
      "Activate the dormant flow of cosmic energy within your space to ignite rapid financial growth, power, and boundless abundance.",

    "solutions.s4.title": "Divine Energy Alignment",
    "solutions.s4.desc":
      "Align your environment with higher frequencies through sacred fire rituals that dissolve energetic obstacles and restore divine harmony.",

    "solutions.s5.title": "Holistic Land Cleansing",
    "solutions.s5.desc":
      "Purify and ground your property using energized elements to create a stable, protected, and holistically balanced business sanctuary.",

    "solutions.s6.title": "Guru Blessing",
    "solutions.s6.desc":
      "Through Agni Upasana, the sacred energy born in Guruji’s heart is gracefully transmitted and established (स्थापित) directly into yours.",
    "solutions.videoTitle1": "See Our",
    "solutions.videoTitleHighlight": "Energy Solutions",
    "solutions.videoTitle2": "in Action",
    "solutions.videoSubtitle":
      "Watch how our spiritual energy practices transform business environments and create lasting positive change.",
    "solutions.video1.title": "Sacred Fire Ceremony",
    "solutions.video1.desc":
      "Watch the powerful Yagna ritual that purifies and energizes business spaces for prosperity.",
    "solutions.video2.title": "Energy Flow Alignment",
    "solutions.video2.desc":
      "See how golden energy waves are channeled through corridors to remove blockages.",
    "solutions.video3.title": "Crystal Grid Activation",
    "solutions.video3.desc":
      "Discover the healing power of sacred stones arranged in prosperity-attracting formations.",
    "solutions.banner1.tag": "Sacred Geometry",
    "solutions.banner1.title": "Yantra Instruments for Prosperity",
    "solutions.banner2.tag": "Energy Patterns",
    "solutions.banner2.title": "Mandala Activation for Abundance",

    // Blueprint Energy Section
    "blueprint.tag": "Energy Blueprint",
    "blueprint.title1": "Sacred Energy",
    "blueprint.titleHighlight": "Mapping",
    "blueprint.subtitle":
      "Every property has an energy blueprint. Through Vastu and spiritual sciences, we map and realign the flow of prosperity into your space.",
    "blueprint.slide1.label": "Vastu Energy Analysis",
    "blueprint.slide1.sub": "Floor Plan — Spiritual Energy Flow Mapping",
    "blueprint.slide2.label": "Vibration & Crystal Mapping",
    "blueprint.slide2.sub": "Hotel/Motel — Positive Energy Stone Placement",
    "blueprint.slide3.label": "Vedic Yagna Ceremony",
    "blueprint.slide3.sub": "Motel Purification — Sacred Fire & Mantra Power",
    "blueprint.slide3.badge": "Online & Offline Yagna Available",
    "blueprint.slideLabel1": "SACRED GEOMETRY",
    "blueprint.slideLabel2": "CRYSTAL VIBRATIONS",
    "blueprint.slideLabel3": "YAGNA POWER",

    // Achievements
    "achievements.tag": "Milestones",
    "achievements.title1": "Achievements &",
    "achievements.titleHighlight": "Recognition",
    "achievements.subtitle":
      "A journey of devotion, service, and spiritual excellence — recognized at the highest levels.",
    "achievements.a1.title": "Gujarat State CM Award",
    "achievements.a1.subtitle": "Best Astrologer of the Year",
    "achievements.a1.desc":
      "Honored by the Chief Minister of Gujarat for outstanding contributions to Vedic astrology and spiritual sciences, recognizing years of dedicated service.",
    "achievements.a2.title": "Founder — Duttashray Ashram",
    "achievements.a2.subtitle": "Spiritual Retreat & Service Center",
    "achievements.a2.desc":
      "Established Duttashray Ashram as a center for spiritual healing, community service, and Vedic education — serving thousands seeking guidance and peace.",
    "achievements.a3.title": "Advisor — Spilritual Energy Pvt. Ltd.",
    "achievements.a3.subtitle": "Leading Astrology Advisory Company",
    "achievements.a3.desc":
      "Serves as a senior spiritual advisor at Astro Find Panditji, guiding clients worldwide with Vedic remedies, Vastu consultations, and energy alignment.",
    "achievements.a4.title": "World Record Holder",
    "achievements.a4.subtitle": "1008 Hanuman Yagna",
    "achievements.a4.desc":
      "Achieved a world record by conducting 1008 Hanuman Yagna — a monumental spiritual feat of devotion, discipline, and divine energy invocation.",
    "achievements.stat1": "Years of Practice",
    "achievements.stat2": "Hanuman Yagna",
    "achievements.stat3": "Clients Served",
    "achievements.stat4": "World Record",

    // About
    "about.tag": "Your Guide",
    "about.title": "About Acharya Bhavin Pandya",
    "about.p1":
      "Acharya Bhavin Pandya is a spiritual energy practitioner who works with ancient Vedic energy sciences to help individuals and businesses remove negative influences and create environments that support growth, prosperity, and harmony.",
    "about.p2":
      "His work focuses on identifying energy blockages within physical spaces and implementing spiritual remedies to restore balance and attract success.",
    "about.p3":
      "His services have helped many business owners improve clarity, peace, and business flow — transforming struggling properties into spaces that naturally attract prosperity.",
    "about.badge": "20+ Years of Spiritual Practice",
    "about.h1": "Vedic Energy Sciences",
    "about.h2": "Business Protection",
    "about.h3": "Holistic Approach",
    "about.h4": "Proven Methods",

    // Testimonials
    "testimonials.tag": "Success Stories",
    "testimonials.title1": "What Our",
    "testimonials.titleHighlight": "Clients",
    "testimonials.title2": "Say",
    "testimonials.subtitle":
      "Real stories from motel owners who have experienced the transformative power of spiritual energy alignment.",
    "testimonials.trustBadge": "5000+ Satisfied Clients",

    // Use Case & Trust
    "usecase.tag": "Real Results",
    "usecase.title": "How We Help Motel Owners",
    "usecase.u1": "Improve occupancy and guest flow",
    "usecase.u2": "Enhance property vibration and guest experience",
    "usecase.u3": "Resolve unseen energetic blockages affecting business",
    "usecase.u4": "Prepare a motel property for successful sale",
    "usecase.u5": "Restore balance in business environments",
    "trust.tag": "Why Trust Us",
    "trust.title": "Professional & Confidential Service",
    "trust.t1.title": "Private Consultations",
    "trust.t1.desc":
      "One-on-one sessions tailored to your specific business needs.",
    "trust.t2.title": "Customized Energy Analysis",
    "trust.t2.desc":
      "Detailed assessment of your property's energetic environment.",
    "trust.t3.title": "Confidential Business Support",
    "trust.t3.desc":
      "Your business information is handled with complete discretion.",
    "trust.t4.title": "Centuries of Tradition",
    "trust.t4.desc":
      "Spiritual methods backed by thousands of years of practice.",

    // CTA & Contact
    "cta.title1": "Ready to Transform the Energy of",
    "cta.titleHighlight": "Your Property",
    "cta.subtitle":
      "Book a consultation with Acharya Bhavin Pandya and discover how spiritual energy alignment may help your motel attract success.",
    "cta.trust": "Trusted by 500+ motel owners across the United States",
    "cta.button": "Book Free Consultation",
    "contact.tag": "Get in Touch",
    "contact.title": "Schedule Your Free Consultation",
    "contact.subtitle":
      "Fill out the form and our team will reach out to discuss your property's specific needs and how our spiritual energy solutions can help.",
    "contact.phone": "Phone / WhatsApp",
    "contact.email": "Email",
    "contact.serviceArea": "Service Area",
    "contact.serviceAreaValue": "Nationwide — United States",
    "contact.form.name": "Full Name",
    "contact.form.phone": "Phone Number",
    "contact.form.email": "Email",
    "contact.form.location": "Location (City / State)",
    "contact.form.propertyType": "Property Type",
    "contact.form.selectType": "Select type",
    "contact.form.motel": "Motel",
    "contact.form.hotel": "Hotel",
    "contact.form.inn": "Inn / B&B",
    "contact.form.resort": "Resort",
    "contact.form.other": "Other",
    "contact.form.description": "Description of Issue",
    "contact.form.descPlaceholder":
      "Briefly describe the challenges you're facing with your property...",
    "contact.form.submit": "Submit Request",
    "contact.form.confidential":
      "Your information is kept strictly confidential.",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.phonePlaceholder": "(555) 123-4567",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.locationPlaceholder": "e.g. Houston, TX",
    "contact.toast.error": "Please fill in your name and email.",
    "contact.toast.success":
      "Thank you! Your consultation request has been submitted. We will contact you shortly.",

    // Payment
    "payment.tag": "We Accept USA Payments",
    "payment.secure": "Secure & Encrypted",
    "payment.cards": "All Major US Credit & Debit Cards",
    "payment.usd": "USD Payments Only",

    // Blog
    "nav.blog": "Blog",
    "blog.tag": "Knowledge & Insights",
    "blog.title1": "Spiritual Energy",
    "blog.titleHighlight": "Articles & Insights",
    "blog.subtitle":
      "Explore expert articles on positive energy, Vastu Shastra, negative energy removal, and spiritual solutions for the motel and hospitality industry.",
    "blog.featured": "Featured",
    "blog.read": "read",
    "blog.readMore": "Read More",
    "blog.ctaText":
      "Want personalized guidance for your property's energy challenges?",
    "blog.ctaButton": "Get Expert Consultation",
    "blog.cat.energy": "Positive Energy",
    "blog.cat.remedies": "Spiritual Remedies",
    "blog.cat.business": "Business Growth",
    "blog.cat.vastu": "Vastu Shastra",
    "blog.cat.rituals": "Sacred Rituals",
    "blog.cat.healing": "Crystal Healing",
    "blog.a1.title":
      "How Positive Energy Transforms Your Motel Business: A Complete Guide",
    "blog.a1.excerpt":
      "Discover how channeling positive energy through Vastu Shastra and spiritual practices can dramatically improve your motel's occupancy, revenue, and guest satisfaction. Learn the ancient secrets that 200+ motel owners have used to transform their struggling properties into thriving businesses.",
    "blog.a2.title":
      "7 Powerful Ways to Remove Negative Energy from Your Property",
    "blog.a2.excerpt":
      "Learn proven spiritual techniques including Mantra Shakti, sacred fire ceremonies, and crystal healing to eliminate negative energy that may be blocking your business success. These time-tested methods have helped countless property owners restore harmony and prosperity.",
    "blog.a3.title":
      "Energy Alignment Secrets for the Motel Industry: Boost Occupancy & Revenue",
    "blog.a3.excerpt":
      "Industry-specific insights on how energy alignment and Vastu principles can address common motel challenges like low occupancy, financial stagnation, and negative guest experiences. Real case studies from successful transformations.",
    "blog.a4.title":
      "Vastu Shastra Tips for Hotels & Motels: Attract Prosperity to Your Property",
    "blog.a4.excerpt":
      "Essential Vastu Shastra guidelines specifically designed for the hospitality industry. Learn about entrance placement, room orientation, reception energy flow, and sacred geometry that attracts guests and prosperity to your property.",
    "blog.a5.title":
      "The Power of Yagna Ceremonies for Business Purification & Growth",
    "blog.a5.excerpt":
      "Understand how sacred fire rituals (Yagna) can purify your business environment, remove energetic obstacles, and create powerful positive vibrations that attract success and abundance to your motel or hotel.",
    "blog.a6.title":
      "Crystal Healing for Commercial Properties: Stones That Attract Business Success",
    "blog.a6.excerpt":
      "Explore the world of healing crystals and sacred stones that can stabilize, protect, and energize your commercial property. Learn which crystals are best for attracting customers, improving cash flow, and creating positive environments.",

    // SEO
    "seo.title":
      "Acharya Bhavin Pandya — Spiritual Energy Solutions for Motel & Hotel Business | Vastu Shastra Expert USA",
    "seo.description":
      "Transform your motel's energy with Acharya Bhavin Pandya. Expert Vastu Shastra consultation, negative energy removal, Yagna ceremonies & spiritual solutions for hotels and motels across the USA. 200+ properties served. Book free consultation today.",
    "seo.keywords":
      "vastu shastra motel, spiritual energy consultant USA, motel energy alignment, remove negative energy property, hotel vastu tips, positive energy business, motel occupancy improvement, spiritual healer for business, yagna ceremony motel, crystal healing commercial property, Acharya Bhavin Pandya, motel prosperity solutions, hotel energy optimization, vastu for hospitality industry, spiritual business consultant, negative energy removal motel, energy flow alignment hotel, sacred fire ceremony business, mantra shakti business, yantra shakti prosperity",
    "seo.ogTitle":
      "Acharya Bhavin Pandya — Transform Your Motel's Energy & Unlock Prosperity",
    "seo.ogDescription":
      "Expert spiritual energy solutions for motel & hotel owners. Vastu Shastra consultation, negative energy removal, Yagna ceremonies. 200+ properties transformed. Free consultation available.",

    // Footer
    "footer.tagline":
      "Spiritual Energy Solutions for Business Prosperity and Growth.",
    "footer.quickLinks": "Quick Links",
    "footer.commonProblems": "Common Problems",
    "footer.ourSolutions": "Our Solutions",
    "footer.aboutGuru": "About the Guru",
    "footer.contactUs": "Contact Us",
    "footer.contact": "Contact",
    "footer.disclaimer": "Disclaimer:",
    "footer.disclaimerText":
      "Spiritual services are intended to support personal and environmental well-being and should not replace professional financial or business consultation.",
    "footer.copyright": "Acharya Bhavin Pandya. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  gu: {
    // Nav
    "nav.home": "હોમ",
    "nav.problems": "સમસ્યાઓ",
    "nav.solutions": "ઉકેલો",
    "nav.about": "અમારા વિશે",
    "nav.testimonials": "પ્રશંસાપત્રો",
    "nav.contact": "સંપર્ક",

    // Hero
    "hero.badge": "વ્યવસાય માટે આધ્યાત્મિક ઊર્જા ઉકેલો",
    "hero.title1": "તમારા",
    "hero.titleHighlight": "મોટેલની ઊર્જા",
    "hero.title2": "બદલો અને સમૃદ્ધિ મેળવો",
    "hero.desc1":
      "ઓછી ઓક્યુપન્સી, સ્થિર આવક, અથવા અસ્પષ્ટ નકારાત્મકતા સાથે સંઘર્ષ કરી રહ્યા છો? પ્રાચીન આધ્યાત્મિક વિજ્ઞાન તમારી મિલકતની ઊર્જાને વૃદ્ધિ અને સમૃદ્ધિ માટે ફરીથી ગોઠવવામાં મદદ કરી શકે છે.",
    "hero.desc2":
      "આચાર્ય ભાવિન પંડ્યાએ યુએસએમાં 200+ મોટેલ માલિકોને તેમની સંઘર્ષશીલ મિલકતોને સાબિત આધ્યાત્મિક ઊર્જા ગોઠવણી તકનીકો દ્વારા સમૃદ્ધ વ્યવસાયોમાં રૂપાંતરિત કરવામાં મદદ કરી છે.",
    "hero.stat1Label": "મિલકતો સેવા આપી",
    "hero.stat2Label": "વર્ષોનો અનુભવ",
    "hero.stat3Label": "ગ્રાહક સંતોષ",
    "hero.cta1": "મફત પરામર્શ બુક કરો",
    "hero.cta2": "ગુરુજી સાથે વાત કરો",
    "hero.scrollMore": "વધુ જાણો",
    "hero.blueprintLabel": "ઊર્જા બ્લુપ્રિન્ટ વિશ્લેષણ",
    "hero.blueprintSub": "વાસ્તુ અને આધ્યાત્મિક ઊર્જા મેપિંગ",
    "hero.energyFlowMap": "ॐ ઊર્જા પ્રવાહ નકશો",

    // Problem Section
    "problems.tag": "મૂળ કારણ ઓળખો",
    "problems.title": "મોટેલ માલિકો જે સામાન્ય સમસ્યાઓનો સામનો કરે છે",
    "problems.subtitle":
      "આ પડકારો માત્ર ઓપરેશનલ લાગી શકે છે, પરંતુ તેમનું ઘણીવાર ઊંડું ઊર્જાત્મક મૂળ હોય છે.",
    "problems.p1.title": "ઓછો ઓક્યુપન્સી દર",
    "problems.p1.desc":
      "માર્કેટિંગ પ્રયાસો અને સ્પર્ધાત્મક કિંમત હોવા છતાં રૂમ ખાલી પડ્યા છે.",
    "problems.p2.title": "મિલકત વેચવામાં મુશ્કેલી",
    "problems.p2.desc":
      "તમારી મોટેલ બજારમાં છે પણ ગંભીર ખરીદદારોની રુચિ ઓછી છે.",
    "problems.p3.title": "નકારાત્મક મહેમાન અનુભવો",
    "problems.p3.desc":
      "વારંવાર ફરિયાદો, ખરાબ સમીક્ષાઓ, અને મહેમાનો જે ક્યારેય પાછા નથી આવતા.",
    "problems.p4.title": "આર્થિક સ્થિરતા",
    "problems.p4.desc": "ઓપરેશનલ સુધારાઓ છતાં આવક સ્થિર અથવા ઘટી રહી છે.",
    "problems.p5.title": "સ્ટાફ સંઘર્ષ અને તણાવ",
    "problems.p5.desc": "કર્મચારીઓ વચ્ચે ચાલુ તણાવ અને ઉચ્ચ ઓપરેશનલ તણાવ સ્તર.",
    "problems.p6.title": "ભારે અથવા નકારાત્મક ઊર્જા",
    "problems.p6.desc": "મિલકતો જે અસ્વાગત લાગે છે અથવા ખોટી ઊર્જા આકર્ષે છે.",
    "problems.bottom": "ક્યારેક પડકાર માત્ર ઓપરેશનલ નથી —",
    "problems.bottomHighlight":
      "તે મિલકત પર્યાવરણમાં ઊર્જાત્મક અસંતુલન હોઈ શકે છે.",

    // Solution Section
    "solutions.tag": "અમારો અભિગમ",
    "solutions.title1": "પ્રાચીન ઊર્જા વિજ્ઞાન",
    "solutions.titleHighlight": "આધુનિક વ્યવસાયો",
    "solutions.subtitle":
      "અમારા ઉકેલો પ્રાચીન આધ્યાત્મિક ઊર્જા પ્રથાઓ પર આધારિત છે જે વાતાવરણને સુમેળ કરવા અને સમૃદ્ધિ આકર્ષવા માટે રચાયેલ છે.",
    "solutions.s1.title": "મંત્ર શક્તિ",
    "solutions.s1.desc":
      "વ્યવસાયિક જગ્યાઓમાં નકારાત્મક ઊર્જા શુદ્ધ કરવા અને સકારાત્મક આવૃત્તિ વધારવા માટે આધ્યાત્મિક ધ્વનિ કંપનો.",
    "solutions.s2.title": "યંત્ર શક્તિ",
    "solutions.s2.desc":
      "તમારા વ્યવસાયિક વાતાવરણમાં સમૃદ્ધિ અને સ્થિરતા આકર્ષવા માટે રચાયેલ પવિત્ર ભૌમિતિક સાધનો.",
    "solutions.s3.title": "શ્રી યંત્ર સક્રિયકરણ",
    "solutions.s3.desc":
      "આર્થિક વૃદ્ધિ અને સમૃદ્ધિ માટે ઉપયોગમાં લેવાતી સૌથી શક્તિશાળી સમૃદ્ધિ ઊર્જા પ્રણાલીઓમાંની એક.",
    "solutions.s4.title": "યજ્ઞ ઊર્જા વિધિઓ",
    "solutions.s4.desc":
      "ઊર્જાત્મક અવરોધો દૂર કરવા અને શક્તિશાળી સકારાત્મક કંપનો બનાવવા માટે કરવામાં આવતી પવિત્ર અગ્નિ વિધિઓ.",
    "solutions.s5.title": "હીલિંગ સ્ટોન્સ અને પવિત્ર જડીબુટ્ટીઓ",
    "solutions.s5.desc":
      "વ્યવસાયિક વાતાવરણને સ્થિર અને સુરક્ષિત કરવા માટે ખાસ ઊર્જાવાન પથ્થરો અને હર્બલ તત્વો.",
    "solutions.videoTitle1": "અમારા",
    "solutions.videoTitleHighlight": "ઊર્જા ઉકેલો",
    "solutions.videoTitle2": "કાર્યમાં જુઓ",
    "solutions.videoSubtitle":
      "જુઓ કેવી રીતે અમારી આધ્યાત્મિક ઊર્જા પ્રથાઓ વ્યવસાયિક વાતાવરણને રૂપાંતરિત કરે છે અને કાયમી સકારાત્મક પરિવર્તન બનાવે છે.",
    "solutions.video1.title": "પવિત્ર અગ્નિ સમારોહ",
    "solutions.video1.desc":
      "સમૃદ્ધિ માટે વ્યવસાયિક જગ્યાઓને શુદ્ધ અને ઊર્જાવાન બનાવતી શક્તિશાળી યજ્ઞ વિધિ જુઓ.",
    "solutions.video2.title": "ઊર્જા પ્રવાહ ગોઠવણી",
    "solutions.video2.desc":
      "જુઓ કેવી રીતે સુવર્ણ ઊર્જા તરંગો અવરોધો દૂર કરવા માટે કોરિડોર દ્વારા ચેનલ કરવામાં આવે છે.",
    "solutions.video3.title": "ક્રિસ્ટલ ગ્રિડ સક્રિયકરણ",
    "solutions.video3.desc":
      "સમૃદ્ધિ-આકર્ષક રચનાઓમાં ગોઠવાયેલા પવિત્ર પથ્થરોની ઉપચાર શક્તિ શોધો.",
    "solutions.banner1.tag": "પવિત્ર ભૂમિતિ",
    "solutions.banner1.title": "સમૃદ્ધિ માટે યંત્ર સાધનો",
    "solutions.banner2.tag": "ઊર્જા પેટર્ન",
    "solutions.banner2.title": "સમૃદ્ધિ માટે મંડળ સક્રિયકરણ",

    // Blueprint Energy Section
    "blueprint.tag": "ઊર્જા બ્લુપ્રિન્ટ",
    "blueprint.title1": "પવિત્ર ઊર્જા",
    "blueprint.titleHighlight": "મેપિંગ",
    "blueprint.subtitle":
      "દરેક મિલકતમાં ઊર્જા બ્લુપ્રિન્ટ હોય છે. વાસ્તુ અને આધ્યાત્મિક વિજ્ઞાન દ્વારા, અમે તમારી જગ્યામાં સમૃદ્ધિના પ્રવાહને મેપ અને ફરીથી ગોઠવીએ છીએ.",
    "blueprint.slide1.label": "વાસ્તુ ઊર્જા વિશ્લેષણ",
    "blueprint.slide1.sub": "ફ્લોર પ્લાન — આધ્યાત્મિક ઊર્જા પ્રવાહ મેપિંગ",
    "blueprint.slide2.label": "કંપન અને ક્રિસ્ટલ મેપિંગ",
    "blueprint.slide2.sub": "હોટેલ/મોટેલ — સકારાત્મક ઊર્જા પથ્થર પ્લેસમેન્ટ",
    "blueprint.slide3.label": "વૈદિક યજ્ઞ સમારોહ",
    "blueprint.slide3.sub": "મોટેલ શુદ્ધિકરણ — પવિત્ર અગ્નિ અને મંત્ર શક્તિ",
    "blueprint.slide3.badge": "ઓનલાઇન અને ઓફલાઇન યજ્ઞ ઉપલબ્ધ",
    "blueprint.slideLabel1": "પવિત્ર ભૂમિતિ",
    "blueprint.slideLabel2": "ક્રિસ્ટલ કંપન",
    "blueprint.slideLabel3": "યજ્ઞ શક્તિ",

    // Achievements
    "achievements.tag": "સિદ્ધિઓ",
    "achievements.title1": "સિદ્ધિઓ અને",
    "achievements.titleHighlight": "માન્યતા",
    "achievements.subtitle":
      "ભક્તિ, સેવા અને આધ્યાત્મિક ઉત્કૃષ્ટતાની યાત્રા — ઉચ્ચતમ સ્તરે માન્યતા પ્રાપ્ત.",
    "achievements.a1.title": "ગુજરાત રાજ્ય CM એવોર્ડ",
    "achievements.a1.subtitle": "વર્ષનો શ્રેષ્ઠ જ્યોતિષી",
    "achievements.a1.desc":
      "વૈદિક જ્યોતિષ અને આધ્યાત્મિક વિજ્ઞાનમાં ઉત્કૃષ્ટ યોગદાન માટે ગુજરાતના મુખ્યમંત્રી દ્વારા સન્માનિત.",
    "achievements.a2.title": "સ્થાપક — દત્તાશ્રય આશ્રમ",
    "achievements.a2.subtitle": "આધ્યાત્મિક આશ્રય અને સેવા કેન્દ્ર",
    "achievements.a2.desc":
      "આધ્યાત્મિક ઉપચાર, સમુદાય સેવા અને વૈદિક શિક્ષણ માટે કેન્દ્ર તરીકે દત્તાશ્રય આશ્રમની સ્થાપના.",
    "achievements.a3.title": "સલાહકાર — એસ્ટ્રો ફાઇન્ડ પંડિતજી",
    "achievements.a3.subtitle": "અગ્રણી જ્યોતિષ સલાહકાર કંપની",
    "achievements.a3.desc":
      "એસ્ટ્રો ફાઇન્ડ પંડિતજી ખાતે વરિષ્ઠ આધ્યાત્મિક સલાહકાર તરીકે સેવા આપે છે.",
    "achievements.a4.title": "1008 હનુમાન યજ્ઞ",
    "achievements.a4.subtitle": "વિશ્વ રેકોર્ડ ધારક",
    "achievements.a4.desc":
      "1008 હનુમાન યજ્ઞ કરીને વિશ્વ રેકોર્ડ હાંસલ કર્યો — ભક્તિ, શિસ્ત અને દિવ્ય ઊર્જા આહ્વાનનું સ્મારક.",
    "achievements.stat1": "પ્રેક્ટિસના વર્ષો",
    "achievements.stat2": "હનુમાન યજ્ઞ",
    "achievements.stat3": "ગ્રાહકોને સેવા",
    "achievements.stat4": "વિશ્વ રેકોર્ડ",

    // About
    "about.tag": "તમારા માર્ગદર્શક",
    "about.title": "આચાર્ય ભાવિન પંડ્યા વિશે",
    "about.p1":
      "આચાર્ય ભાવિન પંડ્યા એક આધ્યાત્મિક ઊર્જા પ્રેક્ટિશનર છે જે વ્યક્તિઓ અને વ્યવસાયોને નકારાત્મક પ્રભાવો દૂર કરવામાં અને વૃદ્ધિ, સમૃદ્ધિ અને સુમેળને ટેકો આપતા વાતાવરણ બનાવવામાં મદદ કરવા પ્રાચીન વૈદિક ઊર્જા વિજ્ઞાન સાથે કામ કરે છે.",
    "about.p2":
      "તેમનું કાર્ય ભૌતિક જગ્યાઓમાં ઊર્જા અવરોધોને ઓળખવા અને સંતુલન પુનઃસ્થાપિત કરવા અને સફળતા આકર્ષવા માટે આધ્યાત્મિક ઉપાયો અમલમાં મૂકવા પર કેન્દ્રિત છે.",
    "about.p3":
      "તેમની સેવાઓએ ઘણા વ્યવસાય માલિકોને સ્પષ્ટતા, શાંતિ અને વ્યવસાય પ્રવાહ સુધારવામાં મદદ કરી છે — સંઘર્ષશીલ મિલકતોને એવી જગ્યાઓમાં રૂપાંતરિત કરી છે જે કુદરતી રીતે સમૃદ્ધિ આકર્ષે છે.",
    "about.badge": "15+ વર્ષની આધ્યાત્મિક પ્રેક્ટિસ",
    "about.h1": "વૈદિક ઊર્જા વિજ્ઞાન",
    "about.h2": "વ્યવસાય સુરક્ષા",
    "about.h3": "સમગ્ર અભિગમ",
    "about.h4": "સાબિત પદ્ધતિઓ",

    // Testimonials
    "testimonials.tag": "સફળતાની વાર્તાઓ",
    "testimonials.title1": "અમારા",
    "testimonials.titleHighlight": "ગ્રાહકો",
    "testimonials.title2": "શું કહે છે",
    "testimonials.subtitle":
      "મોટેલ માલિકોની વાસ્તવિક વાર્તાઓ જેમણે આધ્યાત્મિક ઊર્જા ગોઠવણીની રૂપાંતરકારી શક્તિનો અનુભવ કર્યો છે.",
    "testimonials.trustBadge": "200+ સંતુષ્ટ ગ્રાહકો",

    // Use Case & Trust
    "usecase.tag": "વાસ્તવિક પરિણામો",
    "usecase.title": "અમે મોટેલ માલિકોને કેવી રીતે મદદ કરીએ છીએ",
    "usecase.u1": "ઓક્યુપન્સી અને મહેમાન પ્રવાહ સુધારો",
    "usecase.u2": "મિલકત કંપન અને મહેમાન અનુભવ વધારો",
    "usecase.u3": "વ્યવસાયને અસર કરતા અદ્રશ્ય ઊર્જાત્મક અવરોધો ઉકેલો",
    "usecase.u4": "સફળ વેચાણ માટે મોટેલ મિલકત તૈયાર કરો",
    "usecase.u5": "વ્યવસાયિક વાતાવરણમાં સંતુલન પુનઃસ્થાપિત કરો",
    "trust.tag": "અમારા પર વિશ્વાસ કેમ",
    "trust.title": "વ્યાવસાયિક અને ગોપનીય સેવા",
    "trust.t1.title": "ખાનગી પરામર્શ",
    "trust.t1.desc":
      "તમારી ચોક્કસ વ્યવસાયિક જરૂરિયાતો માટે અનુકૂળ એક-પર-એક સત્રો.",
    "trust.t2.title": "કસ્ટમાઇઝ્ડ ઊર્જા વિશ્લેષણ",
    "trust.t2.desc": "તમારી મિલકતના ઊર્જાત્મક વાતાવરણનું વિગતવાર મૂલ્યાંકન.",
    "trust.t3.title": "ગોપનીય વ્યવસાય સહાય",
    "trust.t3.desc":
      "તમારી વ્યવસાયિક માહિતી સંપૂર્ણ વિવેકબુદ્ધિ સાથે સંભાળવામાં આવે છે.",
    "trust.t4.title": "સદીઓની પરંપરા",
    "trust.t4.desc":
      "હજારો વર્ષોની પ્રેક્ટિસ દ્વારા સમર્થિત આધ્યાત્મિક પદ્ધતિઓ.",

    // CTA & Contact
    "cta.title1": "તમારી મિલકતની ઊર્જા રૂપાંતરિત કરવા તૈયાર",
    "cta.titleHighlight": "તમારી મિલકત",
    "cta.subtitle":
      "આચાર્ય ભાવિન પંડ્યા સાથે પરામર્શ બુક કરો અને શોધો કે આધ્યાત્મિક ઊર્જા ગોઠવણી તમારી મોટેલને સફળતા આકર્ષવામાં કેવી રીતે મદદ કરી શકે.",
    "cta.trust": "યુનાઇટેડ સ્ટેટ્સમાં 200+ મોટેલ માલિકો દ્વારા વિશ્વસનીય",
    "cta.button": "મફત પરામર્શ બુક કરો",
    "contact.tag": "સંપર્ક કરો",
    "contact.title": "તમારું મફત પરામર્શ શેડ્યૂલ કરો",
    "contact.subtitle":
      "ફોર્મ ભરો અને અમારી ટીમ તમારી મિલકતની ચોક્કસ જરૂરિયાતો અને અમારા આધ્યાત્મિક ઊર્જા ઉકેલો કેવી રીતે મદદ કરી શકે તે વિશે ચર્ચા કરવા સંપર્ક કરશે.",
    "contact.phone": "ફોન / વોટ્સએપ",
    "contact.email": "ઈમેલ",
    "contact.serviceArea": "સેવા વિસ્તાર",
    "contact.serviceAreaValue": "દેશવ્યાપી — યુનાઇટેડ સ્ટેટ્સ",
    "contact.form.name": "પૂરું નામ",
    "contact.form.phone": "ફોન નંબર",
    "contact.form.email": "ઈમેલ",
    "contact.form.location": "સ્થાન (શહેર / રાજ્ય)",
    "contact.form.propertyType": "મિલકત પ્રકાર",
    "contact.form.selectType": "પ્રકાર પસંદ કરો",
    "contact.form.motel": "મોટેલ",
    "contact.form.hotel": "હોટેલ",
    "contact.form.inn": "ઇન / B&B",
    "contact.form.resort": "રિસોર્ટ",
    "contact.form.other": "અન્ય",
    "contact.form.description": "સમસ્યાનું વર્ણન",
    "contact.form.descPlaceholder":
      "તમારી મિલકત સાથે તમે જે પડકારોનો સામનો કરી રહ્યા છો તેનું ટૂંકમાં વર્ણન કરો...",
    "contact.form.submit": "વિનંતી સબમિટ કરો",
    "contact.form.confidential": "તમારી માહિતી સંપૂર્ણ ગોપનીય રાખવામાં આવે છે.",
    "contact.form.namePlaceholder": "તમારું પૂરું નામ",
    "contact.form.phonePlaceholder": "(555) 123-4567",
    "contact.form.emailPlaceholder": "you@example.com",
    "contact.form.locationPlaceholder": "દા.ત. Houston, TX",
    "contact.toast.error": "કૃપા કરીને તમારું નામ અને ઈમેલ ભરો.",
    "contact.toast.success":
      "આભાર! તમારી પરામર્શ વિનંતી સબમિટ થઈ ગઈ છે. અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.",

    // Payment
    "payment.tag": "અમે USA ચુકવણી સ્વીકારીએ છીએ",
    "payment.secure": "સુરક્ષિત અને એન્ક્રિપ્ટેડ",
    "payment.cards": "તમામ મુખ્ય US ક્રેડિટ અને ડેબિટ કાર્ડ",
    "payment.usd": "માત્ર USD ચુકવણી",

    // Blog
    "nav.blog": "બ્લોગ",
    "blog.tag": "જ્ઞાન અને આંતરદૃષ્ટિ",
    "blog.title1": "આધ્યાત્મિક ઊર્જા",
    "blog.titleHighlight": "લેખો અને આંતરદૃષ્ટિ",
    "blog.subtitle":
      "સકારાત્મક ઊર્જા, વાસ્તુ શાસ્ત્ર, નકારાત્મક ઊર્જા દૂર કરવા અને મોટેલ અને હોસ્પિટાલિટી ઉદ્યોગ માટે આધ્યાત્મિક ઉકેલો પરના નિષ્ણાત લેખો શોધો.",
    "blog.featured": "ફીચર્ડ",
    "blog.read": "વાંચન",
    "blog.readMore": "વધુ વાંચો",
    "blog.ctaText":
      "તમારી મિલકતના ઊર્જા પડકારો માટે વ્યક્તિગત માર્ગદર્શન જોઈએ છે?",
    "blog.ctaButton": "નિષ્ણાત પરામર્શ મેળવો",
    "blog.cat.energy": "સકારાત્મક ઊર્જા",
    "blog.cat.remedies": "આધ્યાત્મિક ઉપાયો",
    "blog.cat.business": "વ્યવસાય વૃદ્ધિ",
    "blog.cat.vastu": "વાસ્તુ શાસ્ત્ર",
    "blog.cat.rituals": "પવિત્ર વિધિઓ",
    "blog.cat.healing": "ક્રિસ્ટલ હીલિંગ",
    "blog.a1.title":
      "સકારાત્મક ઊર્જા તમારા મોટેલ વ્યવસાયને કેવી રીતે રૂપાંતરિત કરે છે: સંપૂર્ણ માર્ગદર્શિકા",
    "blog.a1.excerpt":
      "શોધો કે વાસ્તુ શાસ્ત્ર અને આધ્યાત્મિક પ્રથાઓ દ્વારા સકારાત્મક ઊર્જા ચેનલ કરવાથી તમારી મોટેલની ઓક્યુપન્સી, આવક અને મહેમાન સંતોષમાં કેવી રીતે નાટકીય સુધારો થઈ શકે છે.",
    "blog.a2.title":
      "તમારી મિલકતમાંથી નકારાત્મક ઊર્જા દૂર કરવાના 7 શક્તિશાળી રસ્તાઓ",
    "blog.a2.excerpt":
      "મંત્ર શક્તિ, પવિત્ર અગ્નિ સમારોહ અને ક્રિસ્ટલ હીલિંગ સહિત સાબિત આધ્યાત્મિક તકનીકો શીખો જે તમારા વ્યવસાયની સફળતાને અવરોધતી નકારાત્મક ઊર્જાને દૂર કરી શકે છે.",
    "blog.a3.title":
      "મોટેલ ઉદ્યોગ માટે ઊર્જા ગોઠવણીના રહસ્યો: ઓક્યુપન્સી અને આવક વધારો",
    "blog.a3.excerpt":
      "ઓછી ઓક્યુપન્સી, આર્થિક સ્થિરતા અને નકારાત્મક મહેમાન અનુભવો જેવા સામાન્ય મોટેલ પડકારોને ઊર્જા ગોઠવણી અને વાસ્તુ સિદ્ધાંતો કેવી રીતે સંબોધી શકે છે તેની ઉદ્યોગ-વિશિષ્ટ આંતરદૃષ્ટિ.",
    "blog.a4.title":
      "હોટેલ અને મોટેલ માટે વાસ્તુ શાસ્ત્ર ટિપ્સ: તમારી મિલકતમાં સમૃદ્ધિ આકર્ષો",
    "blog.a4.excerpt":
      "હોસ્પિટાલિટી ઉદ્યોગ માટે ખાસ રચાયેલ આવશ્યક વાસ્તુ શાસ્ત્ર માર્ગદર્શિકાઓ. પ્રવેશદ્વાર પ્લેસમેન્ટ, રૂમ ઓરિએન્ટેશન, રિસેપ્શન ઊર્જા પ્રવાહ વિશે જાણો.",
    "blog.a5.title": "વ્યવસાય શુદ્ધિકરણ અને વૃદ્ધિ માટે યજ્ઞ સમારોહની શક્તિ",
    "blog.a5.excerpt":
      "સમજો કે પવિત્ર અગ્નિ વિધિઓ (યજ્ઞ) તમારા વ્યવસાયિક વાતાવરણને કેવી રીતે શુદ્ધ કરી શકે છે, ઊર્જાત્મક અવરોધો દૂર કરી શકે છે અને શક્તિશાળી સકારાત્મક કંપનો બનાવી શકે છે.",
    "blog.a6.title":
      "વ્યાપારિક મિલકતો માટે ક્રિસ્ટલ હીલિંગ: વ્યવસાય સફળતા આકર્ષતા પથ્થરો",
    "blog.a6.excerpt":
      "હીલિંગ ક્રિસ્ટલ અને પવિત્ર પથ્થરોની દુનિયા શોધો જે તમારી વ્યાપારિક મિલકતને સ્થિર, સુરક્ષિત અને ઊર્જાવાન બનાવી શકે છે.",

    // SEO
    "seo.title":
      "આચાર્ય ભાવિન પંડ્યા — મોટેલ અને હોટેલ વ્યવસાય માટે આધ્યાત્મિક ઊર્જા ઉકેલો | વાસ્તુ શાસ્ત્ર નિષ્ણાત USA",
    "seo.description":
      "આચાર્ય ભાવિન પંડ્યા સાથે તમારી મોટેલની ઊર્જા રૂપાંતરિત કરો. નિષ્ણાત વાસ્તુ શાસ્ત્ર પરામર્શ, નકારાત્મક ઊર્જા દૂર કરવી, યજ્ઞ સમારોહ અને USA ભરમાં હોટેલ અને મોટેલ માટે આધ્યાત્મિક ઉકેલો.",
    "seo.keywords":
      "vastu shastra motel, spiritual energy consultant USA, motel energy alignment, remove negative energy property, hotel vastu tips, positive energy business, Acharya Bhavin Pandya",
    "seo.ogTitle":
      "આચાર્ય ભાવિન પંડ્યા — તમારી મોટેલની ઊર્જા રૂપાંતરિત કરો અને સમૃદ્ધિ મેળવો",
    "seo.ogDescription":
      "મોટેલ અને હોટેલ માલિકો માટે નિષ્ણાત આધ્યાત્મિક ઊર્જા ઉકેલો. વાસ્તુ શાસ્ત્ર પરામર્શ, નકારાત્મક ઊર્જા દૂર કરવી, યજ્ઞ સમારોહ.",

    // Footer
    "footer.tagline": "વ્યવસાય સમૃદ્ધિ અને વૃદ્ધિ માટે આધ્યાત્મિક ઊર્જા ઉકેલો.",
    "footer.quickLinks": "ઝડપી લિંક્સ",
    "footer.commonProblems": "સામાન્ય સમસ્યાઓ",
    "footer.ourSolutions": "અમારા ઉકેલો",
    "footer.aboutGuru": "ગુરુ વિશે",
    "footer.contactUs": "અમારો સંપર્ક કરો",
    "footer.contact": "સંપર્ક",
    "footer.disclaimer": "અસ્વીકરણ:",
    "footer.disclaimerText":
      "આધ્યાત્મિક સેવાઓ વ્યક્તિગત અને પર્યાવરણીય સુખાકારીને ટેકો આપવા માટે છે અને વ્યાવસાયિક નાણાકીય અથવા વ્યવસાય પરામર્શને બદલવી જોઈએ નહીં.",
    "footer.copyright": "આચાર્ય ભાવિન પંડ્યા. સર્વ હક્કો અનામત.",
    "footer.privacy": "ગોપનીયતા નીતિ",
    "footer.terms": "સેવાની શરતો",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = useCallback(
    (key: string) => translations[lang][key] || translations.en[key] || key,
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
