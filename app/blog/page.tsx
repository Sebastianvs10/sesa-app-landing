import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog SESA — Insights del sector salud y facturación",
  description: "Artículos, guías y novedades sobre facturación electrónica, gestión de glosas, normativa DIAN y transformación digital del sector salud colombiano.",
};

export default function BlogPage() {
  return (
    <PageLayout
      badge="Blog"
      badgeColor="var(--sesa-accent-2)"
      title="Insights para el sector salud"
      subtitle="Artículos técnicos, guías de normativa y tendencias de la transformación digital en salud colombiana."
      maxWidth="1100px"
    >
      <BlogContent />
    </PageLayout>
  );
}
