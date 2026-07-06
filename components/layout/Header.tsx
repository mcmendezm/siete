"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-ink/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src="/images/brand/siete-logo.svg"
            alt={site.name}
            width={96}
            height={36}
            className="h-9 w-auto"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="primary" href={navigation.cta.primary.href}>
            {navigation.cta.primary.label}
          </Button>
        </div>

        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-ink transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-ink transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-ink transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navigation.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="primary" href={navigation.cta.primary.href}>
                {navigation.cta.primary.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
