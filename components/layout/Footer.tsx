import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-cream pt-20 pb-10 mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="inline-flex items-center bg-cream rounded-full px-5 py-3 w-fit">
              <Image
                src="/images/brand/siete-logo.svg"
                alt={site.name}
                width={88}
                height={32}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-cream/80 text-sm leading-relaxed max-w-xs">
              Gestión humana y organizacional. Mejores personas, mejores empresas — desde {site.founded}.
            </p>
            <div className="flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-10 rounded-full border border-cream/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-8H5.67v8h2.67Zm-1.34-9.2a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.2v-4.38c0-2.35-1.26-3.45-2.94-3.45-1.36 0-1.97.75-2.31 1.27v-1.09h-2.67c.04.76 0 8 0 8h2.67v-4.47c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.29h2.46Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <FooterColumn title="Corporativo" items={navigation.footer.corporativo} />
            <FooterColumn title="Producto" items={navigation.footer.producto} />
            <FooterColumn title="Recursos" items={navigation.footer.recursos} />
          </div>
        </div>

        <hr className="my-12 border-cream/15" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-cream/80">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con propósito en Medellín, Colombia.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="eyebrow text-[14px]" style={{ color: "#ffffff" }}>{title}</h4>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-cream/80 hover:text-cream transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
