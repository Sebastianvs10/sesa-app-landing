import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { CasosContent } from "./CasosContent";

export const metadata: Metadata = {
  title: "Casos de éxito — SESA",
  description: "Descubre cómo hospitales, clínicas y redes de salud colombianas han transformado su ciclo de ingresos con SESA.",
};

export default function CasosPage() {
  return (
    <PageLayout
      badge="Clientes"
      badgeColor="var(--sesa-success)"
      title="Casos de éxito reales"
      subtitle="Resultados verificables de instituciones de salud que transformaron su operación financiera con SESA."
      maxWidth="1100px"
    >
      <CasosContent />
    </PageLayout>
  );
}
