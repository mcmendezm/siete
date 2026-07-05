import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { sieteValues } from "@/data/values";

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Nuestro propósito"
          title={
            <>
              El bienestar de las personas,{" "}
              <em className="not-italic italic text-primary">antes que todo.</em>
            </>
          }
          subtitle="Existimos para que las organizaciones, las personas y la sociedad encuentren un punto de equilibrio. Cuando ese equilibrio existe, todo lo demás —productividad, retención, innovación— viene como consecuencia natural."
        />

        <div className="mt-14 relative aspect-[16/8] rounded-[36px] overflow-hidden">
          <Image
            src="/images/equipoTrabajando.jpg"
            alt="Equipo de Siete trabajando con un cliente"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/70 via-primary-deep/30 to-transparent" />
          <div className="absolute left-8 bottom-8 md:left-12 md:bottom-12 max-w-md">
            <p className="font-display text-2xl md:text-3xl text-cream leading-tight">
              {sieteValues.length > 0 && (
                <>12 años acompañando a empresas en LATAM.</>
              )}
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-[28px] bg-cream-warm p-8 md:p-10 border border-ink/5">
            <span className="eyebrow text-accent">Propuesta de valor</span>
            <h3 className="font-display text-3xl md:text-4xl mt-4 mb-4 leading-tight">
              Ambientes saludables, hechos con método.
            </h3>
            <p className="text-ink-soft leading-relaxed">
              Creamos entornos de trabajo saludables de manera ágil, aplicando
              analítica de datos y ciencias del comportamiento. No hacemos
              talleres motivacionales: hacemos intervenciones medibles.
            </p>
          </article>

          <article className="rounded-[28px] bg-cream-warm p-8 md:p-10 border border-ink/5">
            <span className="eyebrow text-accent">Visión 2030</span>
            <h3 className="font-display text-3xl md:text-4xl mt-4 mb-4 leading-tight">
              Acompañar 500 organizaciones.
            </h3>
            <p className="text-ink-soft leading-relaxed">
              Para 2030, Siete habrá acompañado a más de 500 organizaciones en
              la construcción de ambientes de trabajo saludables a través de la
              región.
            </p>
          </article>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-3xl md:text-4xl text-center mb-2">
            Lo que nos sostiene: nuestros valores{" "}
            <em className="not-italic italic text-primary">SIETE</em>.
          </h3>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sieteValues.map((value, i) => (
              <div
                key={`${value.letter}-${i}`}
                className="rounded-2xl border border-ink/10 p-6 bg-cream hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-5xl text-accent leading-none">
                    {value.letter}
                  </span>
                  <span className="font-semibold text-ink">{value.name}</span>
                </div>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
