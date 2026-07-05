"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { motion, type Variants, type Easing } from "framer-motion";

const InfoIcon = ({ type }: { type: "website" | "phone" | "address" }) => {
  const icons = {
    website: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    address: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  };
  return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

interface HeroSectionProps {
  className?: string;
  logo?: { url: string; alt: string; text?: string };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: { text: string; href: string };
  secondaryAction?: { text: string; href: string };
  backgroundImage: string;
  contactInfo?: { website: string; phone: string; address: string };
  metrics?: { value: string; label: string }[];
  floatingCards?: React.ReactNode;
}

const EASE_OUT: Easing = "easeOut";
const EASE_CIRC_OUT: Easing = "circOut";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 } as never,
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT } as never,
  },
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      logo,
      slogan,
      title,
      subtitle,
      callToAction,
      secondaryAction,
      backgroundImage,
      contactInfo,
      metrics,
      floatingCards,
    },
    ref,
  ) => {
    return (
      <motion.section
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          "relative flex w-full flex-col overflow-hidden md:flex-row",
          className,
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left — contenido */}
        <div className="flex w-full flex-col justify-between p-8 md:w-[42%] md:p-12 lg:w-[42%] lg:p-16">
          <div>
            {/* Logo / Slogan */}
            {(logo || slogan) && (
              <motion.header className="mb-10" variants={itemVariants}>
                {logo ? (
                  <div className="flex items-center">
                    <img
                      src={logo.url}
                      alt={logo.alt}
                      className="mr-3 h-10 w-auto"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    {(logo.text || slogan) && (
                      <div>
                        {logo.text && (
                          <p className="text-lg font-bold text-ink">{logo.text}</p>
                        )}
                        {slogan && <p className="eyebrow text-accent">{slogan}</p>}
                      </div>
                    )}
                  </div>
                ) : (
                  slogan && <p className="eyebrow text-accent">{slogan}</p>
                )}
              </motion.header>
            )}

            {/* Título y copy */}
            <motion.div variants={containerVariants}>
              <motion.h1
                className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl"
                variants={itemVariants}
              >
                {title}
              </motion.h1>

              <motion.div
                className="my-6 h-1 w-20 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                variants={itemVariants}
              />

              <motion.p
                className="mb-8 max-w-md text-base text-ink-soft leading-relaxed"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <a
                  href={callToAction.href}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 bg-primary text-cream hover:bg-primary-deep shadow-[0_4px_24px_-4px_rgba(106,0,206,0.4)]"
                >
                  {callToAction.text}
                </a>
                {secondaryAction && (
                  <a
                    href={secondaryAction.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 bg-cream text-primary border border-primary/20 hover:border-primary hover:bg-primary/5"
                  >
                    <Image
                      src="/images/brand/happly-icon.png"
                      alt="Happly"
                      width={22}
                      height={22}
                      className="rounded-sm"
                    />
                    {secondaryAction.text}
                  </a>
                )}
              </motion.div>
            </motion.div>

            {/* Métricas */}
            {metrics && metrics.length > 0 && (
              <motion.dl
                className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-ink/10"
                variants={itemVariants}
              >
                {metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <dt className="font-display text-3xl md:text-4xl text-primary">
                      {m.value}
                    </dt>
                    <dd className="text-xs md:text-sm text-ink-mute leading-snug">
                      {m.label}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            )}
          </div>

          {/* Footer de contacto — solo si se pasan los datos */}
          {contactInfo && (
            <motion.footer className="mt-12 w-full" variants={itemVariants}>
              <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-3">
                <div className="flex items-center" style={{ color: "var(--color-primary)" }}>
                  <InfoIcon type="website" />
                  <span>{contactInfo.website}</span>
                </div>
                <div className="flex items-center" style={{ color: "var(--color-primary)" }}>
                  <InfoIcon type="phone" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center" style={{ color: "var(--color-primary)" }}>
                  <InfoIcon type="address" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.footer>
          )}
        </div>

        {/* Right — imagen con clip-path animado */}
        <div className="relative w-full min-h-[340px] md:w-[58%] md:min-h-full lg:w-[58%]">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.2, ease: EASE_CIRC_OUT }}
          />

          {floatingCards && (
            <motion.div className="absolute inset-0 pointer-events-none" variants={itemVariants}>
              {floatingCards}
            </motion.div>
          )}
        </div>
      </motion.section>
    );
  },
);

HeroSection.displayName = "HeroSection";
export { HeroSection };
