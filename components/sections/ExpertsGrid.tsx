import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { experts } from "@/data/experts";

export function ExpertsGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-10">
          <Button variant="ghost" href="/">
            ← Volver al inicio
          </Button>
        </div>
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <span className="eyebrow text-accent">Nuestro equipo</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Las personas detrás de cada{" "}
            <em className="not-italic italic text-primary">transformación.</em>
          </h1>
          <p className="text-ink-soft text-lg leading-relaxed max-w-2xl">
            Un equipo multidisciplinario de psicólogos, científicos del
            comportamiento y consultores con más de una década de experiencia
            transformando organizaciones en Colombia y Latinoamérica.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <article
              key={expert.id}
              className="group rounded-[28px] bg-cream border border-ink/10 overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={expert.photo}
                  alt={expert.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="inline-block w-fit eyebrow text-accent bg-accent-soft px-3 py-1 rounded-full">
                  {expert.role}
                </span>
                <h3 className="font-display text-2xl leading-tight">
                  {expert.name}
                </h3>
                <p className="text-sm text-ink-mute font-semibold">
                  {expert.focus}
                </p>
                <blockquote className="border-l-2 border-accent pl-4 italic text-sm text-ink-soft leading-relaxed mt-2">
                  «{expert.quote}»
                </blockquote>
                <div className="flex gap-2 mt-3">
                  <a
                    href={`mailto:${expert.email}`}
                    className="text-xs bg-cream-warm hover:bg-primary hover:text-cream rounded-full px-3 py-1.5 transition-colors"
                  >
                    {expert.email}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[28px] bg-ink text-cream p-10 md:p-14 text-center max-w-3xl mx-auto">
          <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4 text-white">
            ¿Quieres conversar con nosotros?
          </h3>
          <p className="text-cream/85 mb-8 max-w-xl mx-auto">
            Estamos a una conversación de empezar a construir el ambiente de
            trabajo que tu organización necesita.
          </p>
          <Button variant="accent" href="/#contacto">
            Agenda una conversación
          </Button>
        </div>
      </Container>
    </section>
  );
}
