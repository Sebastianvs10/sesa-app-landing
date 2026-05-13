import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SESA — Sistema de Gestión en Salud",
  description:
    "Plataforma SaaS para la gestión integral de facturación, glosas y cartera en el sector salud colombiano. Automatiza, radica y recupera con precisión.",
  keywords: [
    "SESA",
    "facturación médica",
    "glosas salud",
    "software hospitalario",
    "RIPS",
    "EPS",
    "SaaS salud Colombia",
  ],
  authors: [{ name: "SESA" }],
  openGraph: {
    title: "SESA — Sistema de Gestión en Salud",
    description: "Automatiza la facturación, glosas y cartera del sector salud colombiano.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "SESA — Sistema de Gestión en Salud",
    description: "Automatiza la facturación, glosas y cartera del sector salud colombiano.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
