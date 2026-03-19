import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/kunal-13/15min";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, Sparkles, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function CTAContactSection() {
  const { t } = useLanguage();

  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    propertyType: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error(t("contact.toast.error"));
      return;
    }
    toast.success(t("contact.toast.success"));
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      propertyType: "",
      description: "",
    });
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#1B2A4A] via-[#1F3260] to-[#1B2A4A] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 sm:w-64 h-40 sm:h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Guru photo for trust */}
          <div className="mb-5 sm:mb-6 flex justify-center">
            <div className="relative">
              <img
                src="/logo.jpeg"
                alt="Acharya Bhavin Pandya"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 bg-gradient-to-b from-[#FFF8E7] to-[#E8D5A0]"
              />
              <Sparkles className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 text-[#D4AF37] bg-[#1B2A4A] rounded-full p-1 sm:p-1.5" />
            </div>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t("cta.title1")}{" "}
            <span className="text-[#D4AF37]">{t("cta.titleHighlight")}</span>?
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl mb-3 sm:mb-4 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <p className="text-[#D4AF37]/80 text-xs sm:text-sm mb-8 sm:mb-10">
            {t("cta.trust")}
          </p>
          <Button
            onClick={openCalendly}
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A028] text-[#1B2A4A] font-semibold px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg rounded-lg shadow-lg shadow-[#D4AF37]/20 transition-all hover:shadow-xl hover:scale-105"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {t("cta.button")}
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-28 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Left - Info */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  {t("contact.tag")}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4 sm:mb-6">
                {t("contact.title")}
              </h2>
              <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                {t("contact.subtitle")}
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#6B7280]">
                      {t("contact.phone")}
                    </p>
                    <p className="text-[#1B2A4A] font-semibold text-sm sm:text-base">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-[#1B2A4A] font-semibold text-sm sm:text-base">
                      +91 9879861848
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#6B7280]">
                      {t("contact.email")}
                    </p>
                    <p className="text-[#1B2A4A] font-semibold text-sm sm:text-base break-all">
                      hello@acharyabhavin.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#6B7280]">
                      {t("contact.serviceArea")}
                    </p>
                    <p className="text-[#1B2A4A] font-semibold text-sm sm:text-base">
                      {t("contact.serviceAreaValue")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-[#1B2A4A] font-medium text-sm"
                  >
                    {t("contact.form.name")}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t("contact.form.namePlaceholder")}
                    className="mt-1.5 border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-[#1B2A4A] font-medium text-sm"
                    >
                      {t("contact.form.phone")}
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder={t("contact.form.phonePlaceholder")}
                      className="mt-1.5 border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-[#1B2A4A] font-medium text-sm"
                    >
                      {t("contact.form.email")}{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder={t("contact.form.emailPlaceholder")}
                      className="mt-1.5 border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <Label
                      htmlFor="location"
                      className="text-[#1B2A4A] font-medium text-sm"
                    >
                      {t("contact.form.location")}
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder={t("contact.form.locationPlaceholder")}
                      className="mt-1.5 border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="propertyType"
                      className="text-[#1B2A4A] font-medium text-sm"
                    >
                      {t("contact.form.propertyType")}
                    </Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, propertyType: value })
                      }
                    >
                      <SelectTrigger className="mt-1.5 border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20">
                        <SelectValue
                          placeholder={t("contact.form.selectType")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="motel">
                          {t("contact.form.motel")}
                        </SelectItem>
                        <SelectItem value="hotel">
                          {t("contact.form.hotel")}
                        </SelectItem>
                        <SelectItem value="inn">
                          {t("contact.form.inn")}
                        </SelectItem>
                        <SelectItem value="resort">
                          {t("contact.form.resort")}
                        </SelectItem>
                        <SelectItem value="other">
                          {t("contact.form.other")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="description"
                    className="text-[#1B2A4A] font-medium text-sm"
                  >
                    {t("contact.form.description")}
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder={t("contact.form.descPlaceholder")}
                    rows={4}
                    className="mt-1.5 border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#C5A028] text-[#1B2A4A] font-semibold py-5 sm:py-6 text-base sm:text-lg rounded-lg shadow-lg shadow-[#D4AF37]/20 transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t("contact.form.submit")}
                </Button>

                <p className="text-xs text-[#6B7280] text-center">
                  {t("contact.form.confidential")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* USA Payment Methods */}
      <section className="bg-[#F1EDE4] py-8 sm:py-10 border-t border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
            <div className="h-px w-6 sm:w-10 bg-[#D4AF37]/50" />
            <span className="text-[#1B2A4A]/70 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
              {t("payment.tag")}
            </span>
            <div className="h-px w-6 sm:w-10 bg-[#D4AF37]/50" />
          </div>

          {/* Payment method logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-5">
            {/* Visa */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[80px] sm:min-w-[90px]">
              <svg
                viewBox="0 0 48 32"
                className="h-6 sm:h-7 w-auto"
                aria-label="Visa"
              >
                <rect width="48" height="32" rx="4" fill="#1A1F71" />
                <text
                  x="24"
                  y="20"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="1"
                >
                  VISA
                </text>
              </svg>
            </div>

            {/* Mastercard */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[80px] sm:min-w-[90px]">
              <svg
                viewBox="0 0 48 32"
                className="h-6 sm:h-7 w-auto"
                aria-label="Mastercard"
              >
                <rect width="48" height="32" rx="4" fill="#F7F7F7" />
                <circle cx="19" cy="16" r="9" fill="#EB001B" />
                <circle cx="29" cy="16" r="9" fill="#F79E1B" />
                <path d="M24 9.5a9 9 0 0 1 0 13" fill="#FF5F00" />
                <path d="M24 22.5a9 9 0 0 1 0-13" fill="#FF5F00" />
              </svg>
            </div>

            {/* American Express */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[80px] sm:min-w-[90px]">
              <svg
                viewBox="0 0 48 32"
                className="h-6 sm:h-7 w-auto"
                aria-label="American Express"
              >
                <rect width="48" height="32" rx="4" fill="#006FCF" />
                <text
                  x="24"
                  y="15"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="7"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="0.5"
                >
                  AMERICAN
                </text>
                <text
                  x="24"
                  y="23"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="7"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="0.5"
                >
                  EXPRESS
                </text>
              </svg>
            </div>

            {/* Discover */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[80px] sm:min-w-[90px]">
              <svg
                viewBox="0 0 48 32"
                className="h-6 sm:h-7 w-auto"
                aria-label="Discover"
              >
                <rect
                  width="48"
                  height="32"
                  rx="4"
                  fill="#FFFFFF"
                  stroke="#E0E0E0"
                  strokeWidth="0.5"
                />
                <text
                  x="24"
                  y="15"
                  textAnchor="middle"
                  fill="#231F20"
                  fontSize="7.5"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  DISCOVER
                </text>
                <circle cx="36" cy="20" r="5" fill="#F76F1B" />
              </svg>
            </div>

            {/* PayPal */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[80px] sm:min-w-[90px]">
              <svg
                viewBox="0 0 48 32"
                className="h-6 sm:h-7 w-auto"
                aria-label="PayPal"
              >
                <rect
                  width="48"
                  height="32"
                  rx="4"
                  fill="#FFFFFF"
                  stroke="#E0E0E0"
                  strokeWidth="0.5"
                />
                <text
                  x="14"
                  y="20"
                  fill="#003087"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  Pay
                </text>
                <text
                  x="30"
                  y="20"
                  fill="#009CDE"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  Pal
                </text>
              </svg>
            </div>

            {/* Zelle */}
            <div className="flex items-center justify-center bg-white rounded-lg px-4 py-2.5 sm:px-5 sm:py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow min-w-[80px] sm:min-w-[90px]">
              <svg
                viewBox="0 0 48 32"
                className="h-6 sm:h-7 w-auto"
                aria-label="Zelle"
              >
                <rect width="48" height="32" rx="4" fill="#6D1ED4" />
                <text
                  x="24"
                  y="20"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                >
                  Zelle
                </text>
              </svg>
            </div>
          </div>

          {/* Additional payment info */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-[#1B2A4A]/50">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>{t("payment.secure")}</span>
            </div>
            <div className="w-px h-3 bg-[#1B2A4A]/20 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span>{t("payment.cards")}</span>
            </div>
            <div className="w-px h-3 bg-[#1B2A4A]/20 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{t("payment.usd")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B2A4A] text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
            {/* Brand */}
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md shadow-[#D4AF37]/20 flex-shrink-0">
                  <img
                    src="/logo.jpeg"
                    alt="Acharya Bhavin Pandya"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full ring-1 ring-white/10" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[#D4AF37] font-serif text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                    Acharya
                  </span>
                  <span className="text-white font-serif text-base sm:text-lg tracking-wide -mt-0.5">
                    Bhavin Pandya
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-[#D4AF37] mb-3 sm:mb-4 text-sm sm:text-base">
                {t("footer.quickLinks")}
              </h4>
              <div className="space-y-2">
                <a
                  href="#problems"
                  className="block text-white/60 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm"
                >
                  {t("footer.commonProblems")}
                </a>
                <a
                  href="#solutions"
                  className="block text-white/60 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm"
                >
                  {t("footer.ourSolutions")}
                </a>
                <a
                  href="#about"
                  className="block text-white/60 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm"
                >
                  {t("footer.aboutGuru")}
                </a>
                <a
                  href="#contact"
                  className="block text-white/60 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm"
                >
                  {t("footer.contactUs")}
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-[#D4AF37] mb-3 sm:mb-4 text-sm sm:text-base">
                {t("footer.contact")}
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-white/60">
                <p>{t("contact.phone")}: +1 (555) 123-4567, +91 9879861848</p>
                <p>{t("contact.email")}: hello@acharyabhavin.com</p>
                <p>
                  {t("contact.serviceArea")}: {t("contact.serviceAreaValue")}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-6 sm:pt-8">
            {/* Disclaimer */}
            <p className="text-white/40 text-[10px] sm:text-xs leading-relaxed mb-4 sm:mb-6 max-w-4xl mx-auto text-center">
              <strong className="text-white/50">
                {t("footer.disclaimer")}
              </strong>{" "}
              {t("footer.disclaimerText")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-white/40 text-[10px] sm:text-xs">
                © {new Date().getFullYear()} {t("footer.copyright")}
              </p>
              {/* <div className="flex items-center gap-4 sm:gap-6">
                <a
                  href="#"
                  className="text-white/40 hover:text-[#D4AF37] text-[10px] sm:text-xs transition-colors"
                >
                  {t("footer.privacy")}
                </a>
                <a
                  href="#"
                  className="text-white/40 hover:text-[#D4AF37] text-[10px] sm:text-xs transition-colors"
                >
                  {t("footer.terms")}
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
