"use client";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns";
import { testimonials } from "@/data/testimonials";

const items: TestimonialItem[] = testimonials.map((t) => ({
  text: t.quote,
  name: t.author,
  role: t.role,
  company: t.company,
}));

const firstColumn = items.slice(0, 3);
const secondColumn = items.slice(3, 6);
const thirdColumn = items.slice(6, 9);

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Así se vive la experiencia Siete"
            title="Lo que dicen quienes han trabajado con nosotros."
            subtitle="Más de 200 organizaciones en Colombia y México han confiado en nuestro método. Estos son algunos de sus relatos."
          />
        </motion.div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </Container>
    </section>
  );
}
