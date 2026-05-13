"use client";

import { motion } from "framer-motion";
import { FileText, AlertTriangle, Wallet, BarChart3, ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const FEATURES_MAIN = [
  {
    badge: "Punto de entrada del servicio",
    badgeVariant: "accent" as const,
    title: "Autorización de servicios ante EPS",
    description:
      "Gestiona las solicitudes de autorización de procedimientos, medicamentos y hospitalizaciones ante cada EPS. Seguimiento en tiempo real del estado, alertas de respuesta y trazabilidad completa del proceso.",
    points: [
      "Solicitud y seguimiento de autorizaciones en línea",
      "Alertas de vencimiento y respuestas pendientes",
      "Gestión de negaciones con argumentario normativo",
      "Integración directa con portales EPS autorizadores",
    ],
    icon: ClipboardList,
    color: "var(--sesa-accent)",
    mockup: <AutorizacionMockup />,
    reverse: false,
  },
  {
    badge: "Núcleo de facturación",
    badgeVariant: "accent" as const,
    title: "Facturación electrónica sin errores",
    description:
      "Genera, valida y radica facturas electrónicas de venta cumpliendo normativa DIAN, RIPS y resoluciones vigentes. El motor de validación detecta inconsistencias antes de radicar para garantizar el pago.",
    points: [
      "Generación automática de RIPS desde el HIS",
      "Validación previa a radicación (99.1% aprobadas)",
      "FEV con firma electrónica integrada",
      "Seguimiento de estados por servicio y por EPS",
    ],
    icon: FileText,
    color: "var(--sesa-accent)",
    mockup: <FacturacionMockup />,
    reverse: true,
  },
  {
    badge: "Recuperación de cartera",
    badgeVariant: "warning" as const,
    title: "Gestión de glosas que recupera",
    description:
      "Centraliza, prioriza y responde glosas dentro de los términos legales con alertas automáticas y workflows guiados por normativa. Dashboard de conciliación con EPS integrado.",
    points: [
      "Alertas de vencimiento por término legal",
      "Plantillas de respuesta pre-validadas",
      "Conciliación directa con portales EPS",
      "Tasa de recuperación promedio: 85%",
    ],
    icon: AlertTriangle,
    color: "var(--sesa-warning)",
    mockup: <GlosaMockup />,
    reverse: false,
  },
  {
    badge: "Inteligencia financiera",
    badgeVariant: "accent2" as const,
    title: "Cartera con priorización inteligente",
    description:
      "Visualiza la cartera hospitalaria por EPS, edad, estado y riesgo. El motor de priorización identifica qué gestionar primero para maximizar el recaudo sin deteriorar la relación con el asegurador.",
    points: [
      "Segmentación por riesgo, antigüedad y EPS",
      "Score de cobro por contrato y tipo de servicio",
      "Flujo de gestión de cobro automatizado",
      "Reportes ejecutivos para junta directiva",
    ],
    icon: Wallet,
    color: "var(--sesa-accent-2)",
    mockup: <CarteraMockup />,
    reverse: true,
  },
];

function AutorizacionMockup() {
  const items = [
    { id: "AUT-8821", servicio: "Cirugía ambulatoria", eps: "Sura EPS", estado: "Autorizado", ok: true, dias: "Hoy" },
    { id: "AUT-8820", servicio: "Resonancia magnética", eps: "Sanitas", estado: "Pendiente", ok: null, dias: "2 días" },
    { id: "AUT-8819", servicio: "Hospitalización UCI", eps: "Nueva EPS", estado: "Negado", ok: false, dias: "Vencido" },
    { id: "AUT-8818", servicio: "Quimioterapia ciclo 3", eps: "Compensar", estado: "Autorizado", ok: true, dias: "Ayer" },
  ];
  const colorMap: Record<string, string> = {
    Autorizado: "var(--sesa-success)",
    Pendiente: "var(--sesa-warning)",
    Negado: "var(--sesa-danger)",
  };
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>Autorizaciones activas</span>
        <span style={{
          fontSize: "10px", fontWeight: 700, padding: "3px 8px",
          backgroundColor: "var(--sesa-accent-muted)", color: "var(--sesa-accent)",
          borderRadius: "var(--sesa-radius-full)",
          border: "1px solid var(--sesa-border-accent)",
        }}>24 pendientes hoy</span>
      </div>
      {items.map((r) => (
        <div key={r.id} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 12px",
          backgroundColor: "var(--sesa-surface)",
          borderRadius: "var(--sesa-radius-md)",
          border: `1px solid ${r.ok === false ? "var(--sesa-danger-muted)" : "var(--sesa-border)"}`,
          borderLeft: `3px solid ${colorMap[r.estado]}`,
          gap: "8px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1 }}>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>{r.servicio}</span>
            <span style={{ fontSize: "10px", color: "var(--sesa-text-muted)", fontFamily: "monospace" }}>{r.id} · {r.eps}</span>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: colorMap[r.estado], marginBottom: "2px" }}>{r.estado}</div>
            <div style={{ fontSize: "9px", color: "var(--sesa-text-muted)" }}>{r.dias}</div>
          </div>
        </div>
      ))}
      <div style={{
        marginTop: "4px", padding: "8px 12px",
        backgroundColor: "var(--sesa-accent-muted)",
        borderRadius: "var(--sesa-radius-md)",
        border: "1px solid var(--sesa-border-accent)",
        display: "flex", justifyContent: "space-between",
      }}>
        <span style={{ fontSize: "11px", color: "var(--sesa-text-secondary)" }}>Tiempo promedio de respuesta EPS</span>
        <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--sesa-accent)" }}>4.2 horas</span>
      </div>
    </div>
  );
}

function FacturacionMockup() {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
      {[
        { id: "RIPS-001", tipo: "Consulta externa", valor: "$42,000", estado: "✓ Validada", ok: true },
        { id: "RIPS-002", tipo: "Urgencias", valor: "$187,000", estado: "✓ Validada", ok: true },
        { id: "RIPS-003", tipo: "Hospitalización", valor: "$1,240,000", estado: "⚠ Revisar CUPS", ok: false },
        { id: "RIPS-004", tipo: "Medicamentos", valor: "$94,500", estado: "✓ Validada", ok: true },
      ].map((r) => (
        <div key={r.id} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "10px 12px",
          backgroundColor: "var(--sesa-surface)",
          borderRadius: "var(--sesa-radius-md)",
          border: `1px solid ${r.ok ? "var(--sesa-border)" : "var(--sesa-warning-muted)"}`,
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--sesa-text-muted)" }}>{r.id}</span>
            <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--sesa-text-primary)" }}>{r.tipo}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--sesa-text-primary)", fontVariantNumeric: "tabular-nums" }}>{r.valor}</div>
            <div style={{ fontSize: "10px", fontWeight: 600, color: r.ok ? "var(--sesa-success)" : "var(--sesa-warning)" }}>{r.estado}</div>
          </div>
        </div>
      ))}
      <div style={{
        marginTop: "4px", padding: "10px 14px",
        background: "linear-gradient(135deg, var(--sesa-accent-muted), var(--sesa-accent-2-muted))",
        borderRadius: "var(--sesa-radius-md)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        border: "1px solid var(--sesa-border-accent)",
      }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>Total factura</span>
        <span style={{ fontSize: "16px", fontWeight: 800, color: "var(--sesa-accent)", fontVariantNumeric: "tabular-nums" }}>$1,563,500</span>
      </div>
    </div>
  );
}

function GlosaMockup() {
  const glosas = [
    { id: "G-2048", eps: "Sura EPS", monto: "$184,000", dias: "8 días", urgente: true },
    { id: "G-2047", eps: "Sanitas", monto: "$67,000", dias: "22 días", urgente: false },
    { id: "G-2046", eps: "Compensar", monto: "$312,000", dias: "5 días", urgente: true },
  ];
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>Glosas pendientes</span>
        <span style={{
          fontSize: "10px", fontWeight: 700, padding: "3px 8px",
          backgroundColor: "var(--sesa-danger-muted)", color: "var(--sesa-danger)",
          borderRadius: "var(--sesa-radius-full)",
        }}>3 urgentes</span>
      </div>
      {glosas.map((g) => (
        <div key={g.id} style={{
          padding: "12px", backgroundColor: "var(--sesa-surface)",
          border: `1px solid ${g.urgente ? "rgba(239,68,68,0.2)" : "var(--sesa-border)"}`,
          borderRadius: "var(--sesa-radius-md)",
          borderLeft: `3px solid ${g.urgente ? "var(--sesa-danger)" : "var(--sesa-warning)"}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "var(--sesa-text-muted)" }}>{g.id} · {g.eps}</span>
            <span style={{ fontSize: "11px", color: g.urgente ? "var(--sesa-danger)" : "var(--sesa-warning)", fontWeight: 600 }}>Vence en {g.dias}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--sesa-text-primary)", fontVariantNumeric: "tabular-nums" }}>{g.monto}</span>
            <button style={{
              fontSize: "11px", fontWeight: 600, padding: "4px 10px",
              backgroundColor: "var(--sesa-accent-muted)", color: "var(--sesa-accent)",
              border: "1px solid var(--sesa-border-accent)", borderRadius: "var(--sesa-radius-sm)", cursor: "pointer",
            }}>Responder →</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function CarteraMockup() {
  const eps = [
    { name: "Sura EPS", monto: "$8.4M", dias: 28, score: 92, color: "#0066CC" },
    { name: "Sanitas", monto: "$5.1M", dias: 45, score: 74, color: "#E31837" },
    { name: "Nueva EPS", monto: "$3.8M", dias: 67, score: 51, color: "#009B4E" },
    { name: "Compensar", monto: "$2.2M", dias: 38, score: 81, color: "#FF6B00" },
  ];
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>Cartera por EPS</span>
        <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--sesa-text-primary)", fontVariantNumeric: "tabular-nums" }}>$19.5M total</span>
      </div>
      {eps.map((e) => (
        <div key={e.name} style={{
          padding: "10px 12px",
          backgroundColor: "var(--sesa-surface)",
          border: "1px solid var(--sesa-border)",
          borderRadius: "var(--sesa-radius-md)",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "8px",
            backgroundColor: `${e.color}18`, border: `1px solid ${e.color}30`,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <span style={{ fontSize: "8px", fontWeight: 800, color: e.color }}>{e.name.slice(0,3).toUpperCase()}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>{e.name}</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--sesa-text-primary)", fontVariantNumeric: "tabular-nums" }}>{e.monto}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "10px", color: "var(--sesa-text-muted)" }}>{e.dias} días prom.</span>
              <div style={{
                display: "flex", alignItems: "center", gap: "4px",
                fontSize: "10px", fontWeight: 700,
                color: e.score > 80 ? "var(--sesa-success)" : e.score > 60 ? "var(--sesa-warning)" : "var(--sesa-danger)",
              }}>
                Score {e.score}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <Badge variant="accent2" size="sm">Módulos de gestión hospitalaria</Badge>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "var(--sesa-text-primary)",
            margin: "16px 0",
            lineHeight: 1.12,
          }}>
            Cada etapa del servicio hospitalario,{" "}
            <span className="gradient-text">gestionada</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--sesa-text-secondary)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Desde la autorización ante la EPS hasta el recaudo final — SESA cubre el flujo completo con trazabilidad y cumplimiento normativo en cada paso.
          </p>
        </motion.div>

        {/* Alternating feature rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          {FEATURES_MAIN.map((feature, i) => (
            <FeatureRow key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Supporting features grid */}
        <SupportingFeatures />
      </div>
    </section>
  );
}

function FeatureRow({ feature, index }: { feature: typeof FEATURES_MAIN[0]; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "center",
        direction: feature.reverse ? "rtl" : "ltr",
      }}
      className="feature-row"
    >
      {/* Text */}
      <div style={{ direction: "ltr" }}>
        <Badge variant={feature.badgeVariant} size="sm">{feature.badge}</Badge>
        <h3 style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 750,
          letterSpacing: "-0.025em",
          color: "var(--sesa-text-primary)",
          margin: "14px 0 16px",
          lineHeight: 1.2,
        }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", lineHeight: 1.75, marginBottom: "24px" }}>
          {feature.description}
        </p>
        <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
          {feature.points.map((p) => (
            <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "var(--sesa-text-secondary)" }}>
              <CheckCircle2 size={15} style={{ color: feature.color, flexShrink: 0, marginTop: "2px" }} />
              {p}
            </li>
          ))}
        </ul>
        <button style={{
          display: "inline-flex", alignItems: "center", gap: "5px",
          background: "none", border: "none", padding: 0, cursor: "pointer",
          color: feature.color, fontSize: "13.5px", fontWeight: 600,
          transition: "gap var(--sesa-motion-fast)",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
          onMouseLeave={(e) => (e.currentTarget.style.gap = "5px")}
        >
          Ver más detalles <ArrowRight size={14} />
        </button>
      </div>

      {/* Mockup card */}
      <div style={{ direction: "ltr" }}>
        <div style={{
          backgroundColor: "var(--sesa-surface)",
          border: "1px solid var(--sesa-border-strong)",
          borderRadius: "var(--sesa-radius-2xl)",
          overflow: "hidden",
          boxShadow: "var(--sesa-shadow-xl)",
          position: "relative",
        }}>
          {/* Accent header */}
          <div style={{
            height: "4px",
            background: `linear-gradient(90deg, ${feature.color}, var(--sesa-accent-2))`,
          }} />
          <div style={{
            padding: "12px 16px",
            borderBottom: "1px solid var(--sesa-border)",
            display: "flex", alignItems: "center", gap: "8px",
            backgroundColor: "var(--sesa-surface-elevated)",
          }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "var(--sesa-radius-sm)",
              backgroundColor: `${feature.color}18`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon size={14} style={{ color: feature.color }} />
            </div>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>SESA · {feature.badge}</span>
          </div>
          {feature.mockup}
        </div>
      </div>

      <style>{`
        .feature-row { display: grid !important; }
        @media (max-width: 900px) {
          .feature-row { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px !important; }
        }
      `}</style>
    </motion.div>
  );
}

function SupportingFeatures() {
  const items = [
    { icon: BarChart3, title: "Indicadores hospitalarios", desc: "Tableros KPI operativos y financieros en tiempo real: ocupación, autorización, radicación, glosas y recaudo en un solo panel.", color: "var(--sesa-success)", badge: "Tiempo real" },
    { icon: FileText, title: "Multi-sede y multi-EPS", desc: "Centraliza la gestión de servicios de múltiples sedes, especialidades y contratos con EPS desde un único panel operativo.", color: "var(--sesa-info)", badge: "Multi-tenant" },
    { icon: AlertTriangle, title: "Auditoría médica y trazabilidad", desc: "Registro completo de cada servicio: usuario, fecha, estado, autorización y facturación — para auditorías internas y externas.", color: "var(--sesa-accent-2)", badge: "Compliance" },
  ];

  return (
    <div style={{ marginTop: "80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="support-grid">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              style={{
                backgroundColor: "var(--sesa-surface)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                padding: "24px",
                boxShadow: "var(--sesa-shadow-sm)",
              }}
            >
              <div style={{
                width: "40px", height: "40px", borderRadius: "var(--sesa-radius-md)",
                backgroundColor: `${item.color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "14px", border: `1px solid ${item.color}25`,
              }}>
                <Icon size={18} style={{ color: item.color }} />
              </div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: item.color, marginBottom: "8px" }}>{item.badge}</div>
              <h4 style={{ fontSize: "15px", fontWeight: 650, color: "var(--sesa-text-primary)", marginBottom: "8px", letterSpacing: "-0.01em" }}>{item.title}</h4>
              <p style={{ fontSize: "13px", color: "var(--sesa-text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
      <style>{`@media(max-width:768px){.support-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
