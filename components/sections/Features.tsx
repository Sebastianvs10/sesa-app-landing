"use client";

import { motion } from "framer-motion";
import {
  FileText,
  AlertTriangle,
  Wallet,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const FEATURES = [
  {
    icon: FileText,
    title: "Facturación Electrónica",
    description:
      "Genera, valida y radica facturas electrónicas de venta en salud cumpliendo normativa DIAN y resoluciones vigentes. Trazabilidad completa del ciclo.",
    badge: "RIPS · FEV · DIAN",
    badgeVariant: "accent" as const,
    highlight: true,
  },
  {
    icon: AlertTriangle,
    title: "Gestión de Glosas",
    description:
      "Responde glosas dentro de términos legales con alertas automáticas. Tasa de recuperación superior al 85% con workflows de conciliación guiados.",
    badge: "Alertas automáticas",
    badgeVariant: "warning" as const,
    highlight: false,
  },
  {
    icon: Wallet,
    title: "Cartera y Recaudo",
    description:
      "Visualiza cartera por EPS, edad, estado y riesgo. Prioriza cobro inteligente y reduce días de cartera con seguimiento automatizado.",
    badge: "Priorización IA",
    badgeVariant: "accent2" as const,
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Reportes e Indicadores",
    description:
      "Tableros ejecutivos y operativos en tiempo real. Exporta RIPS, estados de cuenta y reportes regulatorios con un clic.",
    badge: "Tiempo real",
    badgeVariant: "success" as const,
    highlight: false,
  },
  {
    icon: Shield,
    title: "Multi-sede y Multi-EPS",
    description:
      "Arquitectura multi-tenant que soporta múltiples sedes, EPS y contratos desde una sola plataforma con control de roles granular.",
    badge: "Multi-tenant",
    badgeVariant: "info" as const,
    highlight: false,
  },
  {
    icon: Zap,
    title: "Integraciones nativas",
    description:
      "Conecta con sistemas HIS/RIS existentes, portales EPS y facturación electrónica DIAN mediante adaptadores estandarizados.",
    badge: "API REST · HL7",
    badgeVariant: "accent" as const,
    highlight: false,
  },
];

export function Features() {
  return (
    <section
      id="features"
      style={{
        padding: "100px 24px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <Badge variant="accent2" size="sm" >
          Módulos del producto
        </Badge>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--sesa-text-primary)",
            margin: "16px 0 16px",
            lineHeight: 1.15,
          }}
        >
          Todo lo que tu institución necesita,{" "}
          <span className="gradient-text">en un solo lugar</span>
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--sesa-text-secondary)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Desde la generación de la factura hasta el recaudo final, SESA cubre
          cada etapa del ciclo de ingresos hospitalarios.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "20px",
        }}
      >
        {FEATURES.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      style={{
        backgroundColor: "var(--sesa-surface)",
        border: "1px solid var(--sesa-border)",
        borderRadius: "var(--sesa-radius-xl)",
        padding: "28px",
        cursor: "default",
        boxShadow: feature.highlight ? "var(--sesa-shadow-md)" : "var(--sesa-shadow-sm)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {feature.highlight && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, var(--sesa-accent), var(--sesa-accent-2))",
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "var(--sesa-radius-md)",
          backgroundColor: "var(--sesa-accent-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Icon size={20} style={{ color: "var(--sesa-accent)" }} />
      </div>

      {/* Badge */}
      <div style={{ marginBottom: "10px" }}>
        <Badge variant={feature.badgeVariant} size="sm">
          {feature.badge}
        </Badge>
      </div>

      {/* Content */}
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 650,
          color: "var(--sesa-text-primary)",
          margin: "0 0 10px",
          letterSpacing: "-0.01em",
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "var(--sesa-text-secondary)",
          lineHeight: 1.65,
          margin: "0 0 20px",
        }}
      >
        {feature.description}
      </p>

      {/* CTA link */}
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          color: "var(--sesa-accent)",
          fontSize: "13px",
          fontWeight: 500,
          transition: "gap var(--sesa-motion-fast)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.gap = "8px";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.gap = "4px";
        }}
      >
        Saber más <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}
