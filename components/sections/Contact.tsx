"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

const TOPICS = [
  "Clima Organizacional",
  "Cultura Organizacional",
  "Liderazgo",
  "Desempeño",
  "Riesgo Psicosocial",
  "Felicidad y Bienestar",
  "Happly",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const msg = [
      `Hola, me llamo *${data.name}*.`,
      data.topic ? `Me interesa el servicio de *${data.topic}*.` : "",
      data.message ? `\n${data.message}` : "",
      data.phone ? `\nTeléfono: ${data.phone}` : "",
      data.email ? `Correo: ${data.email}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const wa = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    setSent(true);
    setTimeout(() => window.open(wa, "_blank"), 800);
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-cream-warm">
      <Container>
        <div className="rounded-[36px] bg-primary text-cream p-8 md:p-14 lg:p-16 relative overflow-hidden">
          {/* Blobs decorativos */}
          <span aria-hidden className="absolute -top-24 -right-24 size-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <span aria-hidden className="absolute -bottom-24 -left-24 size-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="eyebrow text-gold">Conversemos</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                ¿Listo para construir un entorno{" "}
                <em className="not-italic italic text-gold">más saludable?</em>
              </h2>
              <p className="text-cream/85 leading-relaxed max-w-sm">
                Es hora de trabajar juntos. Escríbenos contándonos sobre tu organización y un asesor te contactará en menos de 24 horas hábiles.
              </p>

              <dl className="flex flex-col gap-4 pt-4 border-t border-cream/20">
                <ContactRow icon="📍" value={site.contact.address} />
                <ContactRow icon="📞" value={site.contact.phones.join(" / ")} />
                <ContactRow icon="✉️" value={site.contact.email} />
              </dl>
            </div>

            {/* Formulario */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-cream/8 backdrop-blur-sm border border-cream/15 rounded-[28px] p-6 md:p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Nombre y apellido" name="name" placeholder="Tu nombre" required />
                <Field label="Número de contacto" name="phone" type="tel" placeholder="300 000 0000" required />
                <Field label="Correo" name="email" type="email" placeholder="nombre@empresa.com" />
                <SelectField label="Tema de interés" name="topic" options={TOPICS} required />
              </div>

              <TextareaField
                label="¿Qué necesitas?"
                name="message"
                placeholder="Cuéntanos brevemente sobre tu organización y tu reto"
              />

              <div className="flex items-center justify-between gap-4 pt-1 flex-wrap">
                {sent ? (
                  <p className="text-gold font-semibold text-sm">
                    ¡Te estamos redirigiendo a WhatsApp! ✓
                  </p>
                ) : (
                  <p className="text-cream/50 text-xs">
                    Al enviar aceptás nuestra Política de Privacidad.
                  </p>
                )}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all bg-gold text-ink hover:brightness-95 shadow-md"
                >
                  <WhatsAppIcon />
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({ icon, value }: { icon: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-base mt-0.5">{icon}</span>
      <span className="text-cream/80 text-sm leading-relaxed">{value}</span>
    </div>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-cream/80">{label}</span>
      <input
        name={name} type={type} placeholder={placeholder} required={required}
        className="bg-cream/10 border border-cream/20 rounded-xl px-4 py-3 text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold transition-colors text-sm"
      />
    </label>
  );
}

function TextareaField({
  label, name, placeholder,
}: {
  label: string; name: string; placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-cream/80">{label}</span>
      <textarea
        name={name} placeholder={placeholder} rows={4}
        className="bg-cream/10 border border-cream/20 rounded-xl px-4 py-3 text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold transition-colors resize-none text-sm"
      />
    </label>
  );
}

function SelectField({
  label, name, options, required,
}: {
  label: string; name: string; options: string[]; required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-cream/80">{label}</span>
      <select
        name={name} required={required} defaultValue=""
        className="bg-cream/10 border border-cream/20 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors text-sm"
      >
        <option value="" disabled className="text-ink bg-cream">Selecciona una opción</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink bg-cream">{o}</option>
        ))}
      </select>
    </label>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
