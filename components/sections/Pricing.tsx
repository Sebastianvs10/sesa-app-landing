"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const PLANS = [
  {
    name: "Starter",
    description: "Ideal para clínicas y consultorios en crecimiento",
    priceMonthly: 890000,
    priceAnnual: 712000,
    color: "var(--sesa-accent)",
    popular: false,
    features: [
      "Hasta 500 facturas/mes",
      "1 sede",
      "Facturación electrónica DIAN",
      "Gestión básica de glosas",
      "Reportes estándar",
      "Soporte por email",
    ],
    cta: "Comenzar gratis",
  },
  {
    name: "Professional",
    description: "Para hospitales y clínicas con operación consolidada",
    priceMonthly: 2490000,
    priceAnnual: 1992000,
    color: "var(--sesa-accent-2)",
    popular: true,
    features: [
      "Facturas ilimitadas",
      "Hasta 5 sedes",
      "Facturación + RIPS automático",
      "Gestión avanzada de glosas",
      "Cartera y recaudo inteligente",
      "Tableros ejecutivos",
      "Integraciones API REST",
      "Soporte prioritario 24/7",
    ],
    cta: "Solicitar demo",
  },
  {
    name: "Enterprise",
    description: "Redes hospitalarias y grupos de salud a escala",
    priceMonthly: 0,
    priceAnnual: 0,
    color: "var(--sesa-text-primary)",
    popular: false,
    features: [
      "Todo lo de Professional",
      "Sedes ilimitadas",
      "Multi-EPS y multi-contrato",
      "SLA personalizado",
      "Onboarding dedicado",
      "Integraciones HIS/RIS",
      "Auditoría y compliance",
      "Gerente de cuenta asignado",
    ],
    cta: "Contactar ventas",
  },
];

function formatCOP(value: number) {
  if (value === 0) return "A convenir";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
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
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <Badge variant="accent" size="sm">
          Precios transparentes
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
          El plan correcto para{" "}
          <span className="gradient-text">tu institución</span>
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--sesa-text-secondary)",
            maxWidth: "480px",
            margin: "0 auto 32px",
          }}
        >
          Sin sorpresas. Sin costos ocultos. Cancela cuando quieras.
        </p>

        {/* Toggle */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "var(--sesa-surface)",
            border: "1px solid var(--sesa-border)",
            borderRadius: "var(--sesa-radius-full)",
            padding: "4px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: !annual ? "var(--sesa-text-primary)" : "var(--sesa-text-secondary)",
              padding: "6px 14px",
              borderRadius: "var(--sesa-radius-full)",
              backgroundColor: !annual ? "var(--sesa-bg)" : "transparent",
              cursor: "pointer",
              transition: "all var(--sesa-motion-fast)",
            }}
            onClick={() => setAnnual(false)}
          >
            Mensual
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: annual ? "var(--sesa-text-primary)" : "var(--sesa-text-secondary)",
              padding: "6px 14px",
              borderRadius: "var(--sesa-radius-full)",
              backgroundColor: annual ? "var(--sesa-bg)" : "transparent",
              cursor: "pointer",
              transition: "all var(--sesa-motion-fast)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onClick={() => setAnnual(true)}
          >
            Anual
            <Badge variant="success" size="sm">−20%</Badge>
          </span>
        </div>
      </motion.div>

      {/* Plans grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            style={{
              backgroundColor: "var(--sesa-surface)",
              border: plan.popular
                ? `2px solid var(--sesa-accent-2)`
                : "1px solid var(--sesa-border)",
              borderRadius: "var(--sesa-radius-xl)",
              padding: "28px",
              position: "relative",
              boxShadow: plan.popular
                ? "var(--sesa-shadow-lg)"
                : "var(--sesa-shadow-sm)",
            }}
          >
            {plan.popular && (
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Badge variant="accent2">
                  <Zap size={11} />
                  Más popular
                </Badge>
              </div>
            )}

            {/* Plan header */}
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--sesa-text-primary)",
                  margin: "0 0 4px",
                }}
              >
                {plan.name}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--sesa-text-secondary)",
                  margin: 0,
                }}
              >
                {plan.description}
              </p>
            </div>

            {/* Price */}
            <div style={{ marginBottom: "24px" }}>
              {plan.priceMonthly === 0 ? (
                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: "var(--sesa-text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  A convenir
                </div>
              ) : (
                <div>
                  <motion.div
                    key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 800,
                      color: "var(--sesa-text-primary)",
                      letterSpacing: "-0.03em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {formatCOP(annual ? plan.priceAnnual : plan.priceMonthly)}
                  </motion.div>
                  <span
                    style={{ fontSize: "13px", color: "var(--sesa-text-muted)" }}
                  >
                    / mes · IVA no incluido
                  </span>
                </div>
              )}
            </div>

            {/* CTA */}
            <Button
              variant={plan.popular ? "primary" : "secondary"}
              style={{ width: "100%", marginBottom: "24px" }}
            >
              {plan.cta}
            </Button>

            {/* Features */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {plan.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    fontSize: "13px",
                    color: "var(--sesa-text-secondary)",
                  }}
                >
                  <Check
                    size={14}
                    style={{ color: "var(--sesa-success)", flexShrink: 0, marginTop: "2px" }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
