import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "gold";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-cream hover:bg-primary-deep shadow-[0_4px_24px_-4px_rgba(106,0,206,0.4)]",
  secondary:
    "bg-cream text-primary border border-primary/20 hover:border-primary hover:bg-primary/5",
  ghost: "text-ink hover:text-primary",
  accent:
    "bg-accent text-cream hover:bg-accent-deep shadow-[0_4px_24px_-4px_rgba(255,0,131,0.4)]",
  gold: "bg-gold text-ink hover:brightness-95",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out",
    variantStyles[variant],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={base}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
