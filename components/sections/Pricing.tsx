"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Building2, Stethoscope, Network } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const PLANS = [
  {
    icon: Stethoscope,
    name: "Starter",
    target: "Clínicas y consultorios",
    description: "La base para digitalizar la facturación y reducir glosas desde el primer día.",
    priceMonthly: 890000,
    priceAnnual: 712000,
    color: "var(--sesa-accent)",
    popular: false,
    cta: "Comenzar gratis",
    features: [
      { text: "Hasta 500 facturas/mes", included: true },
      { text: "1 sede", included: true },
      { text: "Facturación electrónica DIAN", included: true },
      { text: "Gestión básica de glosas", included: true },
      { text: "Reportes estándar", included: true },
      { text: "Soporte por email (SLA 48h)", included: true },
      { text: "Multi-sede", included: false },
      { text: "API REST / Integraciones HIS", included: false },
    ],
  },
  {
    icon: Building2,
    name: "Professional",
    target: "Hospitales y clínicas consolidadas",
    description: "Operación completa con cartera inteligente, glosas avanzadas y tableros ejecutivos.",
    priceMonthly: 2490000,
    priceAnnual: 1992000,
    color: "var(--sesa-accent-2)",
    popular: true,
    cta: "Solicitar demo",
    features: [
      { text: "Facturas ilimitadas", included: true },
      { text: "Hasta 5 sedes", included: true },
      { text: "Facturación + RIPS automático", included: true },
      { text: "Gestión avanzada de glosas", included: true },
      { text: "Cartera y recaudo inteligente", included: true },
      { text: "Tableros ejecutivos en tiempo real", included: true },
      { text: "API REST + Webhooks", included: true },
      { text: "Soporte prioritario 24/7 (SLA 4h)", included: true },
    ],
  },
  {
    icon: Network,
    name: "Enterprise",
    target: "Redes hospitalarias y grupos de salud",
    description: "Escalabilidad sin límites con SLA personalizado, integraciones profundas y gerente dedicado.",
    priceMonthly: 0,
    priceAnnual: 0,
    color: "var(--sesa-text-primary)",
    popular: false,
    cta: "Hablar con ventas",
    features: [
      { text: "Sedes ilimitadas", included: true },
      { text: "Multi-EPS y multi-contrato", included: true },
      { text: "Integraciones HIS/RIS a medida", included: true },
      { text: "SSO / SAML / Active Directory", included: true },
      { text: "SLA personalizado (99.99% uptime)", included: true },
      { text: "Auditoría y compliance avanzado", included: true },
      { text: "Onboarding dedicado in situ", included: true },
      { text: "Gerente de cuenta asignado", included: true },
    ],
  },
];

function formatCOP(value: number) {
  if (value === 0) return "A convenir";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <Badge variant="accent" size="sm">Precios transparentes</Badge>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "var(--sesa-text-primary)", margin: "16px 0",
            lineHeight: 1.12,
          }}>
            El plan correcto para{" "}
            <span className="gradient-text">tu institución</span>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", maxWidth: "480px", margin: "0 auto 32px" }}>
            Sin costos de implementación ocultos. Cancela cuando quieras.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: "inline-flex",
            backgroundColor: "var(--sesa-surface)",
            border: "1px solid var(--sesa-border)",
            borderRadius: "var(--sesa-radius-full)",
            padding: "4px",
          }}>
            {[
              { label: "Mensual", value: false },
              { label: "Anual  ·  −20%", value: true },
            ].map(({ label, value }) => (
              <button
                key={label}
                onClick={() => setAnnual(value)}
                style={{
                  padding: "7px 20px",
                  borderRadius: "var(--sesa-radius-full)",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px", fontWeight: 600,
                  transition: "all var(--sesa-motion-fast)",
                  backgroundColor: annual === value ? "var(--sesa-accent)" : "transparent",
                  color: annual === value ? "white" : "var(--sesa-text-secondary)",
                  boxShadow: annual === value ? "var(--sesa-shadow-sm)" : "none",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", alignItems: "start" }} className="pricing-grid">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  backgroundColor: "var(--sesa-surface)",
                  border: plan.popular ? `1px solid var(--sesa-accent-2)` : "1px solid var(--sesa-border)",
                  borderRadius: "var(--sesa-radius-2xl)",
                  padding: "28px",
                  position: "relative",
                  boxShadow: plan.popular ? "var(--sesa-shadow-lg), var(--sesa-shadow-glow-2)" : "var(--sesa-shadow-sm)",
                }}
              >
                {plan.popular && (
                  <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)" }}>
                    <div style={{
                      background: "linear-gradient(135deg, var(--sesa-accent), var(--sesa-accent-2))",
                      color: "white",
                      fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "4px 14px",
                      borderRadius: "0 0 var(--sesa-radius-lg) var(--sesa-radius-lg)",
                    }}>
                      Más popular
                    </div>
                  </div>
                )}

                {/* Plan icon + name */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "20px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "var(--sesa-radius-md)",
                    backgroundColor: `${plan.color === "var(--sesa-text-primary)" ? "var(--sesa-surface-hover)" : plan.color + "18"}`,
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    border: "1px solid var(--sesa-border)",
                  }}>
                    <Icon size={18} style={{ color: plan.color === "var(--sesa-text-primary)" ? "var(--sesa-text-secondary)" : plan.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "var(--sesa-text-primary)" }}>{plan.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)" }}>{plan.target}</div>
                  </div>
                </div>

                <p style={{ fontSize: "13px", color: "var(--sesa-text-secondary)", lineHeight: 1.65, marginBottom: "22px" }}>
                  {plan.description}
                </p>

                {/* Price */}
                <div style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid var(--sesa-border)" }}>
                  {plan.priceMonthly === 0 ? (
                    <div style={{ fontSize: "24px", fontWeight: 800, color: "var(--sesa-text-primary)", letterSpacing: "-0.03em" }}>
                      A convenir
                    </div>
                  ) : (
                    <>
                      <motion.div
                        key={`${plan.name}-${annual}`}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                          fontWeight: 800,
                          color: "var(--sesa-text-primary)",
                          letterSpacing: "-0.04em",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {formatCOP(annual ? plan.priceAnnual : plan.priceMonthly)}
                      </motion.div>
                      <div style={{ fontSize: "12px", color: "var(--sesa-text-muted)", marginTop: "3px" }}>
                        / mes · IVA no incluido
                        {annual && <span style={{ color: "var(--sesa-success)", fontWeight: 600, marginLeft: "6px" }}>−20% ahorro</span>}
                      </div>
                    </>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  style={{ width: "100%", marginBottom: "24px", justifyContent: "center" }}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </Button>

                {/* Features */}
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
                  {plan.features.map((f) => (
                    <li key={f.text} style={{
                      display: "flex", alignItems: "flex-start", gap: "8px",
                      fontSize: "12.5px",
                      color: f.included ? "var(--sesa-text-secondary)" : "var(--sesa-text-muted)",
                      opacity: f.included ? 1 : 0.5,
                    }}>
                      <Check
                        size={13}
                        style={{
                          color: f.included ? "var(--sesa-success)" : "var(--sesa-text-muted)",
                          flexShrink: 0, marginTop: "2px",
                        }}
                      />
                      {f.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: "24px",
            padding: "24px 32px",
            backgroundColor: "var(--sesa-surface)",
            border: "1px solid var(--sesa-border)",
            borderRadius: "var(--sesa-radius-xl)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "16px",
          }}
        >
          <div>
            <div style={{ fontSize: "14px", fontWeight: 650, color: "var(--sesa-text-primary)", marginBottom: "4px" }}>
              ¿Tienes necesidades especiales o múltiples sedes?
            </div>
            <div style={{ fontSize: "13px", color: "var(--sesa-text-secondary)" }}>
              Nuestro equipo de ventas enterprise diseña un plan a la medida de tu red hospitalaria.
            </div>
          </div>
          <Button variant="secondary" size="sm">
            Hablar con un especialista
            <ArrowRight size={13} />
          </Button>
        </motion.div>
      </div>
      <style>{`
        .pricing-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media(max-width:900px){.pricing-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
