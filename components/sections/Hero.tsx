"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const TRUST_PILLS = [
  { icon: ShieldCheck, text: "Cumplimiento normativo MINSALUD" },
  { icon: TrendingUp, text: "Autorización de servicios en línea" },
  { icon: Clock, text: "Onboarding en 48h" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "96px 24px 80px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background layers */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 120% 60% at 50% -10%, rgba(13,148,136,0.13) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 50% at 80% 80%, rgba(99,102,241,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      {/* Grid */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(var(--sesa-border) 1px, transparent 1px), linear-gradient(90deg, var(--sesa-border) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 20%, transparent 100%)",
        opacity: 0.5,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "860px" }}>
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: "28px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "var(--sesa-surface)",
            border: "1px solid var(--sesa-border)",
            borderRadius: "var(--sesa-radius-full)",
            padding: "5px 14px 5px 8px",
            boxShadow: "var(--sesa-shadow-sm)",
          }}>
            <span style={{
              backgroundColor: "var(--sesa-accent-muted)",
              color: "var(--sesa-accent)",
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em",
              textTransform: "uppercase", padding: "3px 8px",
              borderRadius: "var(--sesa-radius-full)",
              border: "1px solid var(--sesa-border-accent)",
            }}>Nuevo</span>
            <span style={{ fontSize: "12.5px", color: "var(--sesa-text-secondary)", fontWeight: 500 }}>
              SESA v3 · Autorización, facturación y cartera hospitalaria
            </span>
            <ArrowRight size={12} style={{ color: "var(--sesa-text-muted)" }} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.08)} style={{
          fontSize: "clamp(2.6rem, 6.5vw, 4.5rem)",
          fontWeight: 800,
          lineHeight: 1.07,
          letterSpacing: "-0.04em",
          color: "var(--sesa-text-primary)",
          marginBottom: "28px",
        }}>
          Gestión integral de
          <br />
          <span className="gradient-text">servicios hospitalarios</span>
          <br />
          en Colombia
        </motion.h1>

        {/* Subheadline */}
        <motion.p {...fadeUp(0.16)} style={{
          fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
          color: "var(--sesa-text-secondary)",
          lineHeight: 1.75,
          maxWidth: "580px",
          margin: "0 auto 44px",
          fontWeight: 400,
        }}>
          SESA cubre el flujo completo del servicio hospitalario: autorización
          ante EPS, registro de servicios, facturación electrónica DIAN,
          gestión de glosas y cartera — todo integrado, con cumplimiento
          normativo MINSALUD garantizado.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.24)} style={{
          display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px",
        }}>
          <a href="#pricing" style={{ textDecoration: "none" }}>
            <Button variant="primary" size="lg" style={{
              background: "linear-gradient(135deg, var(--sesa-accent) 0%, var(--sesa-accent-2) 100%)",
              boxShadow: "var(--sesa-shadow-glow-accent), var(--sesa-shadow-md)",
            }}>
              Solicitar demo gratuito
              <ArrowRight size={16} />
            </Button>
          </a>
          <a href="#features" style={{ textDecoration: "none" }}>
            <Button variant="secondary" size="lg">
              Ver características
            </Button>
          </a>
        </motion.div>

        {/* Trust pills */}
        <motion.div {...fadeUp(0.32)} style={{
          display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap",
        }}>
          {TRUST_PILLS.map(({ icon: Icon, text }) => (
            <div key={text} style={{
              display: "flex", alignItems: "center", gap: "7px",
              backgroundColor: "var(--sesa-surface)",
              border: "1px solid var(--sesa-border)",
              borderRadius: "var(--sesa-radius-full)",
              padding: "6px 14px",
              fontSize: "12.5px", fontWeight: 500,
              color: "var(--sesa-text-secondary)",
              boxShadow: "var(--sesa-shadow-xs)",
            }}>
              <Icon size={13} style={{ color: "var(--sesa-accent)" }} />
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dashboard preview */}
      <motion.div
        initial={{ opacity: 0, y: 56, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
        style={{ position: "relative", zIndex: 1, marginTop: "80px", width: "100%", maxWidth: "1100px" }}
      >
        {/* Glow behind the card */}
        <div aria-hidden style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%", height: "60%",
          background: "radial-gradient(ellipse, rgba(13,148,136,0.15) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)",
          filter: "blur(40px)", pointerEvents: "none", zIndex: 0,
        }} />

        <div style={{
          position: "relative", zIndex: 1,
          borderRadius: "var(--sesa-radius-2xl)",
          border: "1px solid var(--sesa-border-strong)",
          background: "var(--sesa-surface)",
          boxShadow: "var(--sesa-shadow-xl), 0 0 0 1px rgba(255,255,255,0.03)",
          overflow: "hidden",
        }}>
          {/* Browser chrome */}
          <div style={{
            height: "42px",
            borderBottom: "1px solid var(--sesa-border)",
            backgroundColor: "var(--sesa-surface-elevated)",
            display: "flex", alignItems: "center", padding: "0 16px", gap: "8px",
          }}>
            <div style={{ display: "flex", gap: "6px" }}>
              {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                <div key={c} style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: c }} />
              ))}
            </div>
            <div style={{
              flex: 1, height: "24px", backgroundColor: "var(--sesa-surface-hover)",
              borderRadius: "var(--sesa-radius-sm)", margin: "0 40px",
              display: "flex", alignItems: "center", paddingLeft: "10px",
            }}>
              <span style={{ fontSize: "11px", color: "var(--sesa-text-muted)" }}>app.sesa.com.co/dashboard</span>
            </div>
          </div>

          <DashboardMockup />
        </div>
      </motion.div>
    </section>
  );
}

function DashboardMockup() {
  const kpis = [
    { label: "Servicios autorizados", value: "1,248", trend: "+9.2%", up: true, color: "var(--sesa-accent)" },
    { label: "Radicado del mes", value: "$2.84M", trend: "+12.4%", up: true, color: "var(--sesa-accent-2)" },
    { label: "Glosas resueltas", value: "$847K", trend: "+8.1%", up: true, color: "var(--sesa-success)" },
    { label: "Tasa de rechazo", value: "2.3%", trend: "-0.8pp", up: true, color: "var(--sesa-warning)" },
  ];

  const rows = [
    { id: "SVC-20240512", eps: "Sura EPS", monto: "$142,000", estado: "Autorizado", estadoColor: "var(--sesa-success)" },
    { id: "SVC-20240511", eps: "Nueva EPS", monto: "$89,500", estado: "En trámite", estadoColor: "var(--sesa-warning)" },
    { id: "FAC-20240510", eps: "Sanitas", monto: "$204,000", estado: "Radicada", estadoColor: "var(--sesa-accent)" },
    { id: "FAC-20240509", eps: "Compensar", monto: "$67,800", estado: "Glosada", estadoColor: "var(--sesa-danger)" },
  ];

  return (
    <div style={{ padding: "20px 24px 24px", backgroundColor: "var(--sesa-bg)", display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Topbar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "11px", color: "var(--sesa-text-muted)", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Gestión de Servicios · Mayo 2026
          </p>
          <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--sesa-text-primary)" }}>
            Hospital Universitario Regional
          </p>
        </div>
        <Badge variant="success">Sistema activo</Badge>
      </div>

      {/* KPI grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }} className="mock-kpi-grid">
        {kpis.map((k) => (
          <div key={k.label} style={{
            backgroundColor: "var(--sesa-surface)",
            border: "1px solid var(--sesa-border)",
            borderRadius: "var(--sesa-radius-lg)",
            padding: "12px 14px",
            borderLeft: `2px solid ${k.color}`,
          }}>
            <p style={{ fontSize: "9px", color: "var(--sesa-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "5px" }}>{k.label}</p>
            <p style={{ fontSize: "17px", fontWeight: 700, color: "var(--sesa-text-primary)", fontVariantNumeric: "tabular-nums", marginBottom: "2px" }}>{k.value}</p>
            <p style={{ fontSize: "11px", color: k.color, fontWeight: 600 }}>{k.trend}</p>
          </div>
        ))}
      </div>

      {/* Mini table */}
      <div style={{
        backgroundColor: "var(--sesa-surface)",
        border: "1px solid var(--sesa-border)",
        borderRadius: "var(--sesa-radius-lg)",
        overflow: "hidden",
      }}>
        <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--sesa-border)", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>Servicios y facturas recientes</span>
          <span style={{ fontSize: "11px", color: "var(--sesa-accent)", fontWeight: 500, cursor: "pointer" }}>Ver todas →</span>
        </div>
        {rows.map((r, i) => (
          <div key={r.id} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto",
            padding: "8px 14px", gap: "12px", alignItems: "center",
            borderBottom: i < rows.length - 1 ? "1px solid var(--sesa-border)" : "none",
          }}>
            <span style={{ fontSize: "11px", color: "var(--sesa-text-muted)", fontFamily: "monospace" }}>{r.id}</span>
            <span style={{ fontSize: "11px", color: "var(--sesa-text-secondary)" }}>{r.eps}</span>
            <span style={{ fontSize: "11px", color: "var(--sesa-text-primary)", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{r.monto}</span>
            <span style={{
              fontSize: "10px", fontWeight: 600, padding: "2px 8px",
              borderRadius: "var(--sesa-radius-full)",
              backgroundColor: `${r.estadoColor}18`,
              color: r.estadoColor,
            }}>{r.estado}</span>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:640px){.mock-kpi-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </div>
  );
}
