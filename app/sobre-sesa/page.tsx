import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SobreSesaContent } from "./SobreSesaContent";

export const metadata: Metadata = {
  title: "Sobre SESA — Nuestra historia e identidad",
  description: "Conoce la misión, visión, equipo y valores de SESA, la plataforma SaaS para la gestión integral del ciclo de ingresos en el sector salud colombiano.",
};

export default function SobreSesaPage() {
  return (
    <PageLayout
      badge="Empresa"
      badgeColor="var(--sesa-accent)"
      title="Construimos el futuro del sector salud colombiano"
      subtitle="Somos Sphaira Tech, una empresa de tecnología especializada en soluciones SaaS para el ecosistema de salud de Colombia."
      maxWidth="1100px"
    >
      <SobreSesaContent />
    </PageLayout>
  );
}
