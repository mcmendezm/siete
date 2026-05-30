import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Blog"
            title="Investigamos, aprendemos y compartimos."
            subtitle="Artículos escritos por nuestro equipo de psicólogos organizacionales y científicos del comportamiento."
            className="max-w-2xl"
          />
          <Button variant="secondary" href="/blog" className="shrink-0">
            Ver todos los artículos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-[24px] border border-ink/10 bg-cream hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-primary-tint/30 via-cream-warm to-accent-soft flex items-center justify-center">
                <span className="font-display text-7xl text-primary/30">
                  {post.tag[0]}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="eyebrow text-accent">{post.tag}</span>
                <h3 className="font-display text-xl leading-snug text-ink group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-ink-mute mt-2">
                  <span>{post.author}</span>
                  <span>{post.readTime} lectura</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
