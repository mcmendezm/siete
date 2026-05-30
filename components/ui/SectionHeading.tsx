import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow",
            invert ? "text-gold" : "text-accent",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]",
          invert ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed max-w-2xl",
            invert ? "text-cream/80" : "text-ink-soft",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
