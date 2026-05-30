"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clientLogos } from "@/data/testimonials";
import { services } from "@/data/services";
import { cn } from "@/lib/cn";

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="servicios" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Nuestros servicios"
          title={
            <>
              Seis frentes,{" "}
              <em className="not-italic italic text-primary">
                un mismo propósito.
              </em>
            </>
          }
          subtitle="Cada servicio es una intervención medible: diagnóstico con evidencia, plan accionable y verificación de impacto. Pasa el cursor para explorar."
        />

        <div className="mt-14 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
          {services.map((service, idx) => {
            const isOpen = open === idx;
            return (
              <article key={service.id}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-6 py-6 text-left group"
                >
                  <span
                    className={cn(
                      "font-display text-sm font-bold tracking-wider shrink-0 w-8 transition-colors",
                      isOpen ? "text-accent" : "text-ink-mute",
                    )}
                  >
                    {service.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "text-xs font-semibold tracking-wider uppercase mb-1 transition-colors",
                        isOpen ? "text-accent" : "text-ink-mute",
                      )}
                    >
                      {service.slogan}
                    </p>
                    <h3
                      className={cn(
                        "font-display text-2xl md:text-3xl transition-colors",
                        isOpen ? "text-primary" : "text-ink group-hover:text-primary",
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <span
                    className={cn(
                      "shrink-0 size-10 rounded-full border flex items-center justify-center transition-all duration-300",
                      isOpen
                        ? "bg-primary border-primary text-cream rotate-45"
                        : "border-ink/20 text-ink group-hover:border-primary group-hover:text-primary",
                    )}
                    aria-hidden
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen ? "grid-rows-[1fr] pb-10" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pl-14">
                      <div className="flex flex-col gap-5">
                        <p className="text-ink-soft leading-relaxed">
                          {service.lead}
                        </p>
                        <p className="font-display text-xl italic text-ink">
                          {service.question}
                        </p>
                        <div>
                          <p className="font-semibold text-ink mb-3">
                            {service.belief.intro}
                          </p>
                          <ul className="flex flex-col gap-2">
                            {service.belief.bullets.map((b) => (
                              <li key={b} className="flex gap-3 text-sm text-ink-soft">
                                <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href="#contacto"
                          className="inline-flex items-center justify-center w-fit gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 bg-primary text-cream hover:bg-primary-deep shadow-[0_4px_24px_-4px_rgba(106,0,206,0.4)] mt-2"
                        >
                          Explorar servicio
                        </a>
                      </div>

                      <div className="flex flex-col gap-8">
                        <div>
                          <h4 className="font-display text-2xl text-ink mb-4">
                            {service.process.title}
                          </h4>
                          <ol className="flex flex-col gap-4">
                            {service.process.items.map((item, i) => (
                              <li key={i} className="flex gap-4">
                                <span className="font-display text-2xl text-accent leading-none w-8 shrink-0">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm text-ink-soft leading-relaxed pt-1">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <h4 className="eyebrow text-primary mb-3">
                            Conferencias
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {service.conferences.map((c) => (
                              <li key={c} className="text-sm text-ink-soft flex gap-2">
                                <span className="text-gold">›</span>
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>

      {/* Marquee de logos — justo después de servicios */}
      <div className="mt-20 border-t border-ink/10 pt-16">
        <p className="text-center eyebrow text-ink-mute mb-10">
          Algunas de las empresas que confían en nosotros
        </p>
        <LogoMarquee logos={clientLogos} />
      </div>
    </section>
  );
}

function LogoMarquee({ logos }: { logos: readonly string[] }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"
      />
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 px-6 py-3 font-display text-2xl md:text-3xl text-ink-mute/50 italic"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
