import type { Metadata } from "next";
import { Poppins, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siete Gestión Humana — Mejores personas, mejores empresas",
  description:
    "Construimos entornos de trabajo saludables aplicando analítica de datos y ciencias del comportamiento. Reducimos la rotación y elevamos la felicidad de tu equipo.",
  metadataBase: new URL("https://sietegho.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${bodoni.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
