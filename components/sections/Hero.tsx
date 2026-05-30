import { HeroSection } from "@/components/ui/hero-section-2";
import { heroMetrics, site } from "@/data/site";

export function Hero() {
  return (
    <HeroSection
      className="min-h-[calc(100vh-72px)] bg-cream"
      slogan={`Aliada estratégica · ${site.yearsActive} años en Latinoamérica`}
      title={
        <>
          Mejores{" "}
          <span className="relative inline-block">
            <span className="relative z-10">personas</span>
            <span
              aria-hidden
              className="absolute left-0 right-0 bottom-1 h-3 -z-0"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-accent) 30%, transparent)",
              }}
            />
          </span>
          ,{" "}
          <em
            className="not-italic italic font-display"
            style={{ color: "var(--color-accent)" }}
          >
            mejores
          </em>{" "}
          empresas.
        </>
      }
      subtitle={site.description}
      callToAction={{ text: "Agenda una asesoría", href: "#contacto" }}
      secondaryAction={{ text: "Conoce Happly", href: "#happly" }}
      backgroundImage="/images/equipo.png"
      metrics={heroMetrics.map((m) => ({ value: m.value, label: m.label }))}
    />
  );
}
