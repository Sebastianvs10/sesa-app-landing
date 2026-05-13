import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { ChangelogContent } from "./ChangelogContent";

export const metadata: Metadata = {
  title: "Changelog — SESA",
  description: "Historial de versiones, nuevas funcionalidades, mejoras y correcciones de SESA.",
};

export default function ChangelogPage() {
  return (
    <PageLayout
      badge="Changelog"
      badgeColor="var(--sesa-accent-2)"
      title="Historial de versiones"
      subtitle="Novedades, mejoras y correcciones de cada versión de SESA. Publicamos actualizaciones cada dos semanas."
      maxWidth="860px"
    >
      <ChangelogContent />
    </PageLayout>
  );
}
