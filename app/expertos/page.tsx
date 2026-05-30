import type { Metadata } from "next";
import { ExpertsGrid } from "@/components/sections/ExpertsGrid";

export const metadata: Metadata = {
  title: "Nuestros Expertos — Siete Gestión Humana",
  description:
    "Un equipo multidisciplinario de psicólogos, científicos del comportamiento y consultores con más de una década de experiencia.",
};

export default function ExpertosPage() {
  return <ExpertsGrid />;
}
