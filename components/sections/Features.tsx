"use client";

import { motion } from "framer-motion";
import { FileText, AlertTriangle, Wallet, BarChart3, ArrowRight, CheckCircle2, Stethoscope, Pill } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const FEATURES_MAIN = [
  {
    badge: "Historia clínica digital",
    badgeVariant: "accent" as const,
    title: "Atención clínica integral en un solo sistema",
    description:
      "Historia clínica electrónica con cumplimiento Res. 1995/1999, atención SOAP por especialidad, órdenes clínicas, evoluciones de enfermería y consentimientos informados. Desde consulta externa hasta urgencias y hospitalización.",
    points: [
      "HC electrónica auditada con trazabilidad completa",
      "Consulta, urgencias, hospitalización y cirugía",
      "Diagnóstico CIE-10 + sugerencias de guías GPC",
      "Órdenes de laboratorio, imágenes y procedimientos",
    ],
    icon: Stethoscope,
    color: "var(--sesa-accent)",
    mockup: <HistoriaClinicaMockup />,
    reverse: false,
  },
  {
    badge: "Facturación y cumplimiento DIAN",
    badgeVariant: "accent" as const,
    title: "Facturación electrónica sin errores",
    description:
      "Genera, valida y radica facturas electrónicas de venta con CUPS y RIPS cumpliendo la normativa DIAN y las resoluciones del MSPS. El motor de validación detecta inconsistencias antes de radicar para garantizar el pago.",
    points: [
      "RIPS automático desde la historia clínica",
      "Validación previa a radicación (99.1% aprobadas)",
      "FEV con CUFE + QR — Res. 000042 DIAN",
      "Seguimiento de estado por EPS en tiempo real",
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
      "Centraliza, prioriza y responde glosas dentro de los términos legales con alertas automáticas y workflows guiados por normativa — Res. 5258/2015. Dashboard de conciliación con EPS integrado.",
    points: [
      "Alertas de vencimiento por término legal (30 días hábiles)",
      "Plantillas de respuesta pre-validadas por tipo de glosa",
      "Conciliación directa con portales EPS",
      "Tasa de recuperación promedio: 85%",
    ],
    icon: AlertTriangle,
    color: "var(--sesa-warning)",
    mockup: <GlosaMockup />,
    reverse: false,
  },
  {
    badge: "Farmacia y medicamentos",
    badgeVariant: "accent2" as const,
    title: "Farmacia hospitalaria integrada",
    description:
      "Control de inventario de medicamentos, dispensación con receta electrónica, farmacovigilancia RAM y prescripción MIPRES para medicamentos no PBS — todo integrado con la historia clínica.",
    points: [
      "Dispensación ligada a fórmula médica del HIS",
      "Control de stocks, lotes y fechas de vencimiento",
      "MIPRES — prescripción no PBS (plataforma MinSalud)",
      "Farmacovigilancia RAM — INVIMA Res. 2004/1999",
    ],
    icon: Pill,
    color: "var(--sesa-accent-2)",
    mockup: <FarmaciaMockup />,
    reverse: true,
  },
];

function HistoriaClinicaMockup() {
  const atenciones = [
    { codigo: "A10.00", desc: "DM tipo 2 sin complicaciones", tipo: "Consulta ext.", medico: "Dr. Morales", estado: "Cerrada", ok: true },
    { codigo: "J06.9", desc: "IRAS — Vías respiratorias sup.", tipo: "Urgencias", medico: "Dr. Castro", estado: "Activa", ok: null },
    { codigo: "Z34.0", desc: "Control prenatal 1er trim.", tipo: "PYP", medico: "Dra. Ríos", estado: "Citada", ok: true },
  ];
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
        <div>
          <p style={{ fontSize: "10px", color: "var(--sesa-text-muted)", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Historia clínica
          </p>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--sesa-text-primary)" }}>Rodríguez Gómez, Ana M.</p>
        </div>
        <span style={{
          fontSize: "10px", fontWeight: 700, padding: "3px 8px",
          backgroundColor: "var(--sesa-accent-muted)", color: "var(--sesa-accent)",
          borderRadius: "var(--sesa-radius-full)",
          border: "1px solid var(--sesa-border-accent)",
        }}>Activa · Sura EPS</span>
      </div>
      {atenciones.map((a) => (
        <div key={a.codigo} style={{
          padding: "10px 12px",
          backgroundColor: "var(--sesa-surface)",
          borderRadius: "var(--sesa-radius-md)",
          border: "1px solid var(--sesa-border)",
          borderLeft: `3px solid ${a.ok === null ? "var(--sesa-warning)" : "var(--sesa-accent)"}`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
            <span style={{ fontSize: "10px", fontFamily: "monospace", color: "var(--sesa-accent)", fontWeight: 700 }}>{a.codigo}</span>
            <span style={{
              fontSize: "10px", fontWeight: 600,
              color: a.ok === null ? "var(--sesa-warning)" : "var(--sesa-success)",
            }}>{a.estado}</span>
          </div>
          <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)", marginBottom: "2px" }}>{a.desc}</p>
          <p style={{ fontSize: "10px", color: "var(--sesa-text-muted)" }}>{a.tipo} · {a.medico}</p>
        </div>
      ))}
      <div style={{
        padding: "8px 12px", marginTop: "2px",
        backgroundColor: "var(--sesa-accent-muted)",
        borderRadius: "var(--sesa-radius-md)",
        border: "1px solid var(--sesa-border-accent)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: "11px", color: "var(--sesa-text-secondary)" }}>Órdenes pendientes de resultado</span>
        <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--sesa-accent)" }}>3</span>
      </div>
    </div>
  );
}

function FacturacionMockup() {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
      {[
        { id: "RIPS-001", tipo: "Consulta externa — Medicina general", valor: "$42,000", estado: "✓ Validada", ok: true },
        { id: "RIPS-002", tipo: "Urgencias — Observación 6h", valor: "$187,000", estado: "✓ Validada", ok: true },
        { id: "RIPS-003", tipo: "Hospitalización — 3 días", valor: "$1,240,000", estado: "⚠ Revisar CUPS", ok: false },
        { id: "RIPS-004", tipo: "Medicamentos dispensados", valor: "$94,500", estado: "✓ Validada", ok: true },
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

function FarmaciaMockup() {
  const items = [
    { nombre: "Metformina 850mg", stock: 240, minimo: 50, estado: "OK", tipo: "PBS" },
    { nombre: "Atorvastatina 20mg", stock: 18, minimo: 30, estado: "Bajo stock", tipo: "PBS" },
    { nombre: "Adalimumab 40mg", stock: 4, minimo: 2, estado: "MIPRES", tipo: "No PBS" },
    { nombre: "Omeprazol 20mg", stock: 312, minimo: 60, estado: "OK", tipo: "PBS" },
  ];
  const colorEstado: Record<string, string> = {
    "OK": "var(--sesa-success)",
    "Bajo stock": "var(--sesa-danger)",
    "MIPRES": "var(--sesa-accent-2)",
  };
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)" }}>Inventario farmacia</span>
        <span style={{
          fontSize: "10px", fontWeight: 700, padding: "3px 8px",
          backgroundColor: "var(--sesa-danger-muted)", color: "var(--sesa-danger)",
          borderRadius: "var(--sesa-radius-full)",
        }}>1 en alerta</span>
      </div>
      {items.map((m) => (
        <div key={m.nombre} style={{
          padding: "10px 12px",
          backgroundColor: "var(--sesa-surface)",
          border: `1px solid ${m.estado === "Bajo stock" ? "rgba(239,68,68,0.2)" : "var(--sesa-border)"}`,
          borderRadius: "var(--sesa-radius-md)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px",
        }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--sesa-text-primary)", marginBottom: "2px" }}>{m.nombre}</p>
            <p style={{ fontSize: "10px", color: "var(--sesa-text-muted)" }}>Stock: {m.stock} unds · Mín: {m.minimo}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
            <span style={{
              fontSize: "9px", fontWeight: 700, padding: "2px 6px",
              backgroundColor: `${colorEstado[m.estado]}18`,
              color: colorEstado[m.estado],
              borderRadius: "var(--sesa-radius-full)",
            }}>{m.estado}</span>
            <span style={{ fontSize: "9px", color: "var(--sesa-text-muted)" }}>{m.tipo}</span>
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
          <Badge variant="accent2" size="sm">Módulos del sistema</Badge>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "var(--sesa-text-primary)",
            margin: "16px 0",
            lineHeight: 1.12,
          }}>
            Clínico, financiero y normativo{" "}
            <span className="gradient-text">en un solo HIS</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--sesa-text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Desde la historia clínica hasta la factura electrónica — SESA gestiona todo el ciclo de la IPS con cumplimiento normativo colombiano en cada módulo.
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
    { icon: BarChart3, title: "PYP y salud pública", desc: "Programas de promoción y prevención (RIAS Res. 3280/2018), vacunación PAI, SIVIGILA y EBS territorial.", color: "var(--sesa-success)", badge: "Salud pública" },
    { icon: FileText, title: "Multi-sede y especialidades", desc: "Gestiona múltiples sedes, especialidades y EPS desde un único panel. De consulta externa a hospitalización de alta complejidad.", color: "var(--sesa-info)", badge: "Multi-tenant" },
    { icon: AlertTriangle, title: "Calidad y SOGCS", desc: "Registro de eventos adversos, indicadores de calidad SOGCS, PQRS y reportes regulatorios para habilitación y acreditación.", color: "var(--sesa-accent-2)", badge: "Compliance" },
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
