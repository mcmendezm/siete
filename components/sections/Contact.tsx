"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

const SERVICES = [
  "Clima Organizacional",
  "Cultura Organizacional",
  "Liderazgo",
  "Desempeño",
  "Factores de Riesgo Psicosocial",
  "Felicidad y Bienestar Laboral",
  "Happly",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const lines = [
      `Hola, soy *${data.name}*${data.company ? ` de *${data.company}*` : ""}.`,
      data.service ? `\n🎯 Servicio de interés: *${data.service}*` : "",
      data.phone ? `📞 Teléfono: ${data.phone}` : "",
      data.email ? `✉️ Correo: ${data.email}` : "",
      data.message ? `\n💬 Mensaje:\n${data.message}` : "",
    ].filter(Boolean).join("\n");

    const wa = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(lines)}`;
    setSent(true);
    setTimeout(() => {
      window.open(wa, "_blank");
      setSent(false);
    }, 900);
  }

  return (
    <section id="contacto" className="py-24 md:py-32">
      <Container>
        {/* Eyebrow centrado */}
        <div className="text-center mb-12">
          <span className="eyebrow text-accent">Conversemos</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            ¿Listo para construir un entorno{" "}
            <em className="not-italic italic text-primary">más saludable?</em>
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto leading-relaxed">
            Completa el formulario y un asesor te contactará en menos de 24 horas hábiles.
          </p>
        </div>

        {/* Card bicolor */}
        <div className="rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-[380px_1fr] shadow-[0_8px_60px_-12px_rgba(106,0,206,0.18)]">

          {/* Columna izquierda — oscura */}
          <div className="bg-ink text-cream p-10 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <p className="font-display text-2xl leading-snug">
                Un equipo experto, a un mensaje de distancia.
              </p>
              <p className="text-cream/65 text-sm leading-relaxed">
                Trabajamos con organizaciones de todos los tamaños en LATAM. Sin importar el punto de partida, tenemos un camino para tu organización.
              </p>
            </div>

            <dl className="flex flex-col gap-5">
              <ContactItem icon={<MapPin size={16} />} value={site.contact.address} />
              <ContactItem icon={<Phone size={16} />} value={site.contact.phones.join(" · ")} />
              <ContactItem icon={<Mail size={16} />} value={site.contact.email} />
            </dl>

            {/* Decoración */}
            <div className="flex gap-3 pt-2">
              <div className="size-2 rounded-full bg-primary" />
              <div className="size-2 rounded-full bg-accent" />
              <div className="size-2 rounded-full bg-primary-tint" />
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <form
            onSubmit={handleSubmit}
            className="bg-cream p-8 md:p-10 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Nombre y apellido"
                name="name"
                placeholder="Tu nombre completo"
                required
              />
              <Field
                label="Empresa / Organización"
                name="company"
                placeholder="Nombre de la empresa"
              />
              <Field
                label="Correo electrónico"
                name="email"
                type="email"
                placeholder="nombre@empresa.com"
                required
              />
              <Field
                label="Número de contacto"
                name="phone"
                type="tel"
                placeholder="300 000 0000"
                required
              />
            </div>

            <SelectField
              label="Servicio de interés"
              name="service"
              options={SERVICES}
              required
            />

            <TextareaField
              label="¿Qué necesitas?"
              name="message"
              placeholder="Cuéntanos brevemente sobre tu organización y el reto que quieres resolver…"
              required
            />

            <div className="flex items-center justify-between gap-4 pt-1 flex-wrap">
              <p className="text-ink-mute text-xs">
                Al enviar aceptas nuestra{" "}
                <a href="/privacidad" className="underline underline-offset-2 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>.
              </p>

              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 bg-primary text-cream hover:bg-primary-deep shadow-[0_4px_24px_-4px_rgba(106,0,206,0.45)] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                <WhatsAppIcon />
                {sent ? "Abriendo WhatsApp…" : "Enviar por WhatsApp"}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

function ContactItem({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-primary-tint mt-0.5 shrink-0">{icon}</span>
      <span className="text-cream/70 text-sm leading-relaxed">{value}</span>
    </div>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold tracking-wide uppercase text-ink-soft">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-white border border-ink/12 rounded-xl px-4 py-3 text-ink placeholder:text-ink-mute/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all text-sm"
      />
    </div>
  );
}

function TextareaField({
  label, name, placeholder, required,
}: {
  label: string; name: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold tracking-wide uppercase text-ink-soft">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="bg-white border border-ink/12 rounded-xl px-4 py-3 text-ink placeholder:text-ink-mute/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-none text-sm"
      />
    </div>
  );
}

function SelectField({
  label, name, options, required,
}: {
  label: string; name: string; options: string[]; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold tracking-wide uppercase text-ink-soft">
        {label}{required && <span className="text-accent ml-1">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="bg-white border border-ink/12 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all text-sm appearance-none cursor-pointer"
      >
        <option value="" disabled className="text-ink-mute">
          Selecciona el servicio que necesitas
        </option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
