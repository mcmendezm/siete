"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Service } from "@/data/services";

type ServiceWithImage = Service & { imageUrl: string };

export type AccordionItem = {
  id: string;
  number: string;
  title: string;
  slogan: string;
  imageUrl: string;
  service: Service;
};

type ServicesAccordionProps = {
  items: AccordionItem[];
  activeIndex?: number;
};

// ─── Drawer lateral ────────────────────────────────────────────────────────────

function ServiceDrawer({
  service,
  open,
  onClose,
}: {
  service: ServiceWithImage | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-ink/50 z-40 transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-[520px] bg-cream z-50",
          "shadow-[-8px_0_40px_-4px_rgba(31,22,38,0.15)]",
          "transition-transform duration-500 ease-in-out",
          "overflow-y-auto",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Detalle del servicio"
      >
        {service && (
          <div className="flex flex-col h-full">
            {/* Header con imagen */}
            <div className="relative h-52 shrink-0">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute top-4 right-4 size-9 rounded-full bg-cream/20 hover:bg-cream/40 text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-5 left-6">
                <p className="text-xs font-bold tracking-widest uppercase text-primary-tint mb-1">
                  {service.slogan}
                </p>
                <h2 className="font-display text-2xl" style={{ color: "white" }}>
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-8 p-6 md:p-8 flex-1">
              <p className="text-ink-soft leading-relaxed">{service.lead}</p>

              <p className="font-display text-xl italic text-ink">
                {service.question}
              </p>

              {/* Creencias */}
              <div>
                <p className="font-semibold text-ink mb-3">
                  {service.belief.intro}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.belief.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-ink-soft">
                      <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proceso */}
              <div>
                <h4 className="font-display text-xl text-ink mb-4">
                  {service.process.title}
                </h4>
                <ol className="flex flex-col gap-4">
                  {service.process.items.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-display text-2xl text-accent leading-none w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-ink-soft leading-relaxed pt-1">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Conferencias */}
              <div>
                <h4 className="eyebrow text-primary mb-3">Conferencias</h4>
                <ul className="flex flex-col gap-2">
                  {service.conferences.map((c) => (
                    <li key={c} className="text-sm text-ink-soft flex gap-2">
                      <span className="text-gold">›</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 bg-primary text-cream hover:bg-primary-deep shadow-[0_4px_24px_-4px_rgba(106,0,206,0.4)] mt-auto"
              >
                Explorar servicio
              </a>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

// ─── Panel individual del acordeón ─────────────────────────────────────────────

function AccordionPanel({
  item,
  isActive,
  onMouseEnter,
  onVerMas,
}: {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onVerMas: () => void;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden cursor-pointer",
        "transition-all duration-700 ease-in-out",
        "h-[500px] rounded-xl",
        isActive ? "flex-[4]" : "flex-[0.5]",
      )}
      onMouseEnter={onMouseEnter}
    >
      {/* Imagen */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-700",
          isActive
            ? "bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10"
            : "bg-ink/65",
        )}
      />

      {/* Número */}
      <span
        className={cn(
          "absolute top-5 font-display text-sm font-bold tracking-wider text-white/70 transition-all duration-500",
          isActive ? "left-6 text-gold" : "left-1/2 -translate-x-1/2",
        )}
      >
        {item.number}
      </span>

      {/* Label inactivo — rotado */}
      <span
        className={cn(
          "absolute text-white text-base font-semibold whitespace-nowrap transition-all duration-500",
          isActive
            ? "opacity-0 pointer-events-none"
            : "bottom-28 left-1/2 -translate-x-1/2 rotate-90 origin-center opacity-100",
        )}
      >
        {item.title}
      </span>

      {/* Contenido activo — bottom */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-6 transition-all duration-500",
          isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <p className="text-xs font-bold tracking-widest uppercase text-primary-tint mb-1">
          {item.slogan}
        </p>
        <h3 className="font-display text-2xl leading-tight mb-4" style={{ color: "white" }}>
          {item.title}
        </h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onVerMas();
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2 transition-all duration-200 backdrop-blur-sm"
        >
          Ver más
          <span className="text-primary-tint">→</span>
        </button>
      </div>

      {/* Línea inferior activa */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-[3px] bg-primary transition-all duration-500",
          isActive ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}

// ─── Componente principal ───────────────────────────────────────────────────────

export function ServicesAccordion({ items, activeIndex = 0 }: ServicesAccordionProps) {
  const [active, setActive] = useState(activeIndex);
  const [drawerService, setDrawerService] = useState<ServiceWithImage | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function openDrawer(item: AccordionItem) {
    setDrawerService({ ...item.service, imageUrl: item.imageUrl });
    setDrawerOpen(true);
  }

  function closeDrawer() {
    setDrawerOpen(false);
    setTimeout(() => setDrawerService(null), 500);
  }

  return (
    <>
      <div className="flex flex-row items-stretch gap-2 w-full">
        {items.map((item, index) => (
          <AccordionPanel
            key={item.id}
            item={item}
            isActive={index === active}
            onMouseEnter={() => setActive(index)}
            onVerMas={() => openDrawer(item)}
          />
        ))}
      </div>

      <ServiceDrawer
        service={drawerService}
        open={drawerOpen}
        onClose={closeDrawer}
      />
    </>
  );
}
