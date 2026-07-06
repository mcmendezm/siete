import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { experts } from "@/data/experts";

const teamAsTestimonials = experts.map((e) => ({
  name: e.name,
  designation: `${e.role} · ${e.focus}`,
  quote: e.quote,
  src: e.photo,
}));

export function Team() {
  return (
    <section id="expertos" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Nuestros expertos"
          title="Las personas detrás de cada transformación."
          subtitle="Un equipo multidisciplinario de psicólogos, científicos del comportamiento y consultores con más de una década de experiencia."
        />

        <div className="mt-14 flex justify-center">
          <CircularTestimonials
            testimonials={teamAsTestimonials}
            autoplay
            colors={{
              name: "#1F1626",
              designation: "#FF0083",
              testimony: "#5B4E62",
              arrowBackground: "#1F1626",
              arrowForeground: "#FDF8F3",
              arrowHoverBackground: "#6A00CE",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "0.85rem",
              quote: "1rem",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
