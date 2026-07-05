import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Activity,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Retos diarios",
    description:
      "Acciones pequeñas e intencionadas que construyen hábitos saludables y sostenibles.",
  },
  {
    icon: Users,
    title: "Conexión entre pares",
    description:
      "Reconocimiento y feedback entre compañeros para fortalecer la cultura del equipo.",
  },
  {
    icon: BarChart3,
    title: "Métricas para RR.HH.",
    description:
      "Dashboards en tiempo real con indicadores de felicidad y engagement accionables.",
  },
  {
    icon: TrendingUp,
    title: "Cultura medible",
    description:
      "De la encuesta anual a la métrica viva: datos accionables todo el año.",
  },
];

export function Happly() {
  return (
    <section
      id="happly"
      className="relative my-24 md:my-32 overflow-hidden rounded-[32px] mx-6 lg:mx-10"
      style={{ backgroundColor: "var(--color-happly-lavender)" }}
    >
      {/* Orbes decorativos */}
      <span
        aria-hidden
        className="absolute -top-24 -left-24 size-[420px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: "var(--color-happly-sage)" }}
      />
      <span
        aria-hidden
        className="absolute -bottom-32 -right-20 size-[480px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ backgroundColor: "var(--color-happly-yellow)" }}
      />

      <Container className="relative z-10 py-20 md:py-28">
        {/* Cabecera */}
        <div className="mb-14 md:mb-18">
          {/* Fila superior: logo + pill */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            {/* Logo blanco sin fondo */}
            <div className="flex items-start gap-1">
              <Image
                src="/images/brand/happly-logo.png"
                alt="Happly"
                width={200}
                height={56}
              />
            </div>

            {/* Pill live */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/25 bg-white/15 backdrop-blur-sm w-fit">
              <span
                className="size-2 rounded-full animate-pulse-happly"
                style={{ backgroundColor: "var(--color-happly-sage)" }}
              />
              <span className="eyebrow text-white/90 text-[11px]">
                Disponible ahora · happly.app
              </span>
            </div>
          </div>

          {/* Título + descripción + stats en grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-white">
              Entrenamiento{" "}
              <em
                className="not-italic italic"
                style={{ color: "var(--color-happly-yellow)" }}
              >
                basado en ciencia.
              </em>
            </h2>

            <div className="flex flex-col gap-6">
              <p className="text-white/80 text-base leading-relaxed">
                Construimos hábitos a través de acciones pequeñas e intencionadas
                que incrementan la felicidad en las personas y fortalecen la
                integración entre compañeros.
              </p>

              <div className="flex items-center gap-6">
                <div>
                  <p className="font-display text-3xl leading-none text-white">4.8</p>
                  <p className="text-sm mt-1">
                    <span className="text-[#f2c744]">★★★★★</span>
                    <span className="text-white/70"> rating</span>
                  </p>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <p className="font-display text-3xl leading-none text-white">47</p>
                  <p className="text-white/70 text-sm mt-1">empresas activas</p>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <p className="font-display text-3xl leading-none text-white">+200</p>
                  <p className="text-white/70 text-sm mt-1">organizaciones</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase — features + phones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Features list */}
          <div className="flex flex-col divide-y divide-white/18">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-5 py-6 items-start">
                <div
                  className="size-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-happly-sage)" }}
                >
                  <Icon size={20} color="#2b1f4a" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-[17px] mb-1 tracking-tight">
                    {title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                href="https://happly.app"
                className="bg-white! text-[#5a3fa0]! hover:brightness-95! font-semibold gap-2!"
              >
                <Image
                  src="/images/brand/happly-icon.png"
                  alt="Happly"
                  width={22}
                  height={22}
                  className="rounded-sm"
                />
                Visita happly.app
              </Button>
              <Button
                href="#contacto"
                className="bg-white/12! border border-white/30! text-white! hover:bg-white/20! backdrop-blur-sm"
              >
                Solicita un demo
              </Button>
            </div>
          </div>

          {/* Phone mockups */}
          <div className="relative flex justify-center items-center min-h-[580px]">
            {/* Back phone */}
            <div
              className="absolute w-[240px] h-[500px] rounded-[40px] overflow-hidden border-[8px] z-0 opacity-90"
              style={{
                backgroundColor: "#1a0d28",
                borderColor: "#2a1a3e",
                transform: "rotate(-9deg) translateX(-160px) translateY(-10px)",
                boxShadow: "0 50px 100px -20px rgba(0,0,0,0.45)",
              }}
            >
              <div
                className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-xl z-10"
                style={{ backgroundColor: "#000" }}
              />
              <BackPhoneContent />
            </div>

            {/* Front phone */}
            <div
              className="relative w-[270px] h-[560px] rounded-[44px] overflow-hidden border-[8px] z-10"
              style={{
                backgroundColor: "#1a0d28",
                borderColor: "#2a1a3e",
                boxShadow:
                  "0 50px 100px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-2xl z-10"
                style={{ backgroundColor: "#000" }}
              />
              <FrontPhoneContent />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FrontPhoneContent() {
  return (
    <div
      className="h-full flex flex-col pt-12 px-4 pb-4"
      style={{ backgroundColor: "var(--color-cream-warm)" }}
    >
      <div className="flex justify-between items-center text-[10px] text-ink-mute mb-4">
        <span className="font-medium">9:41</span>
        <span>●●●</span>
      </div>

      <div className="mb-5">
        <p className="text-[10px] text-ink-mute">Buenos días,</p>
        <h3 className="font-display text-2xl text-ink">Hello, María</h3>
      </div>

      {/* Streak row */}
      <div className="flex gap-1 mb-5">
        {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
          <div
            key={i}
            className="flex-1 aspect-square rounded-lg flex flex-col items-center justify-center text-[9px]"
            style={
              i === 3
                ? { backgroundColor: "var(--color-happly-lavender)", color: "#fff" }
                : { backgroundColor: "var(--color-cream)", color: "var(--color-ink-soft)" }
            }
          >
            <span className="font-bold">{d}</span>
            <span className="text-[8px]">{15 + i}</span>
          </div>
        ))}
      </div>

      {/* Mood card */}
      <div
        className="rounded-2xl p-4 mb-4 text-white"
        style={{ backgroundColor: "var(--color-happly-lavender)" }}
      >
        <p className="text-[10px] opacity-80 mb-1">Hoy te sientes</p>
        <p className="font-display text-3xl">Genial</p>
        <p className="text-[10px] mt-2 opacity-80">Sigue así 🌿</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "pasos", value: "3.680" },
          { label: "bpm", value: "98" },
          { label: "ml agua", value: "460" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-2 text-center"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            <p className="font-display text-sm text-ink">{stat.value}</p>
            <p className="text-[8px] text-ink-mute uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div
        className="mt-auto flex justify-around items-center py-2 border-t"
        style={{ borderColor: "rgba(31,22,38,0.1)" }}
      >
        {["⌂", "♡", "✓", "☰"].map((icon, i) => (
          <span
            key={i}
            className="text-sm"
            style={
              i === 0
                ? { color: "var(--color-happly-lavender)" }
                : { color: "var(--color-ink-mute)" }
            }
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}

function BackPhoneContent() {
  return (
    <div
      className="h-full pt-12 px-4 pb-4 flex flex-col gap-2"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <p className="text-[10px] text-ink-mute mb-2 mt-4">Equipo Siete 🌿</p>
      {[
        { name: "Ana", action: "completó su reto 🌿" },
        { name: "Luis", action: "alcanzó 7 días seguidos 🔥" },
        { name: "Sofi", action: "compartió cómo se siente" },
        { name: "Marco", action: "sumó a la meta del equipo" },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-xl p-2.5 flex items-center gap-2"
          style={{ backgroundColor: "var(--color-cream-warm)" }}
        >
          <span
            className="size-7 rounded-full flex items-center justify-center text-[10px] font-bold"
            style={{
              backgroundColor: "var(--color-happly-sage)",
              color: "#2b1f4a",
            }}
          >
            {item.name[0]}
          </span>
          <div className="text-[10px] leading-tight">
            <p className="font-semibold text-ink">{item.name}</p>
            <p className="text-ink-mute">{item.action}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
