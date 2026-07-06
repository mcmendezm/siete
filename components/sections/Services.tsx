"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesAccordion } from "@/components/ui/ServicesAccordion";
import { clientLogos } from "@/data/testimonials";
import { services } from "@/data/services";
import type { AccordionItem } from "@/components/ui/ServicesAccordion";

const serviceImages: Record<string, string> = {
  clima:     "/images/services/clima.png",
  cultura:   "/images/services/cultura.png",
  liderazgo: "/images/services/liderazgo.png",
  desempeno: "/images/services/desempeno.png",
  riesgo:    "/images/services/riesgo.png",
  felicidad: "/images/services/felicidad.png",
};

const accordionItems: AccordionItem[] = services.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title,
  slogan: s.slogan,
  imageUrl: serviceImages[s.id],
  service: s,
}));

export function Services() {
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
          subtitle="Cada servicio es una intervención medible: diagnóstico con evidencia, plan accionable y verificación de impacto. Pasá el cursor para explorar."
        />

      </Container>

      {/* Acordeón — full width fuera del container */}
      <div className="mt-14 px-6 md:px-10">
        <ServicesAccordion items={accordionItems} activeIndex={0} />
      </div>

      {/* Marquee de logos */}
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
  // Repartir los logos en 3 filas casi iguales
  const rows: string[][] = [[], [], []];
  logos.forEach((logo, i) => rows[i % 3].push(logo));

  return (
    <div className="relative overflow-hidden flex flex-col gap-8">
      {/* Degradados laterales para fundir los bordes */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"
      />

      {rows.map((row, rowIndex) => (
        <MarqueeRow key={rowIndex} logos={row} animation={ROW_ANIMATIONS[rowIndex]} />
      ))}
    </div>
  );
}

// Cada fila: dirección + velocidad distinta para que las 3 se sientan vivas.
// Fila 0 → izq→der (reverse, 30s) · Fila 1 → der→izq (normal, 30s) · Fila 2 → izq→der (reverse, 24s rápida)
const ROW_ANIMATIONS = [
  "animate-marquee-reverse",
  "animate-marquee",
  "animate-marquee-fast-reverse",
];

function MarqueeRow({ logos, animation }: { logos: string[]; animation: string }) {
  const doubled = [...logos, ...logos];
  return (
    <div
      className={`marquee-row flex items-center gap-16 w-max ${animation}`}
    >
      {doubled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="shrink-0 flex items-center justify-center h-14 w-32"
        >
          <Image
            src={src}
            alt="Cliente de Siete"
            width={128}
            height={56}
            className="max-h-14 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
}
