"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const TRUST_ITEMS = [
  "Sin contrato de permanencia",
  "Onboarding en 48h",
  "Soporte técnico incluido",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.2, 0, 0, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse at center, rgba(13,148,136,0.12) 0%, rgba(99,102,241,0.08) 50%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Grid pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(var(--sesa-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--sesa-border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.4,
          zIndex: 0,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
        {/* Eyebrow badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "24px", display: "inline-flex", alignItems: "center", gap: "8px" }}
        >
          <Badge variant="accent">
            <Sparkles size={12} />
            Plataforma SaaS Salud Colombia
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "var(--sesa-text-primary)",
            marginBottom: "24px",
          }}
        >
          Gestión de salud{" "}
          <span className="gradient-text">sin fricciones</span>
          <br />
          Facturación que{" "}
          <span className="gradient-text">recupera</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--sesa-text-secondary)",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          Automatiza la radicación, reduce glosas hasta un{" "}
          <strong style={{ color: "var(--sesa-text-primary)" }}>40%</strong> y
          acelera el recaudo de tu institución con SESA — la plataforma líder
          para el sector salud colombiano.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <Button variant="primary" size="lg">
            Solicitar demo gratuito
            <ArrowRight size={16} />
          </Button>
          <Button variant="secondary" size="lg">
            Ver características
          </Button>
        </motion.div>

        {/* Trust items */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--sesa-text-secondary)",
                fontSize: "13px",
              }}
            >
              <CheckCircle2 size={14} style={{ color: "var(--sesa-accent)", flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dashboard preview */}
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "72px",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        <div
          style={{
            borderRadius: "var(--sesa-radius-2xl)",
            border: "1px solid var(--sesa-border)",
            background: "var(--sesa-surface)",
            boxShadow: "var(--sesa-shadow-xl)",
            overflow: "hidden",
          }}
        >
          {/* Fake browser chrome */}
          <div
            style={{
              height: "44px",
              borderBottom: "1px solid var(--sesa-border)",
              backgroundColor: "var(--sesa-surface-elevated)",
              display: "flex",
              alignItems: "center",
              padding: "0 16px",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
              {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
                <div key={c} style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: c }} />
              ))}
            </div>
            <div
              style={{
                flex: 1,
                height: "26px",
                backgroundColor: "var(--sesa-surface-hover)",
                borderRadius: "var(--sesa-radius-sm)",
                margin: "0 48px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "12px",
              }}
            >
              <span style={{ fontSize: "12px", color: "var(--sesa-text-muted)" }}>
                app.sesa.com.co/dashboard
              </span>
            </div>
          </div>

          {/* Dashboard mockup content */}
          <DashboardMockup />
        </div>
      </motion.div>
    </section>
  );
}

function DashboardMockup() {
  const kpis = [
    { label: "Radicado del mes", value: "$2.84M", trend: "+12.4%", color: "var(--sesa-accent)" },
    { label: "Glosas recuperadas", value: "$847K", trend: "+8.1%", color: "var(--sesa-accent-2)" },
    { label: "Facturas pendientes", value: "143", trend: "-3", color: "var(--sesa-warning)" },
    { label: "Tasa de rechazo", value: "2.3%", trend: "-0.8%", color: "var(--sesa-success)" },
  ];

  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "var(--sesa-bg)",
        minHeight: "320px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "13px", color: "var(--sesa-text-muted)", margin: 0 }}>Buenos días,</p>
          <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--sesa-text-primary)", margin: 0 }}>
            Clínica San Rafael
          </p>
        </div>
        <Badge variant="success">Sistema activo</Badge>
      </div>

      {/* KPI grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
        }}
        className="kpi-grid"
      >
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            style={{
              backgroundColor: "var(--sesa-surface)",
              border: "1px solid var(--sesa-border)",
              borderRadius: "var(--sesa-radius-lg)",
              padding: "16px",
              borderLeft: `3px solid ${kpi.color}`,
            }}
          >
            <p style={{ fontSize: "11px", color: "var(--sesa-text-muted)", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {kpi.label}
            </p>
            <p style={{ fontSize: "20px", fontWeight: 700, color: "var(--sesa-text-primary)", margin: "0 0 4px", fontVariantNumeric: "tabular-nums" }}>
              {kpi.value}
            </p>
            <p style={{ fontSize: "12px", color: kpi.color, margin: 0, fontWeight: 500 }}>
              {kpi.trend}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
