"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const INTEGRATIONS = [
  {
    category: "Regulatorio",
    color: "#E31837",
    items: [
      { name: "DIAN", desc: "Factura electrónica de venta FEV, notas crédito/débito y validación en tiempo real.", status: "Nativo" },
      { name: "SIVIGILA", desc: "Reporte de eventos de salud pública con trazabilidad automática.", status: "Nativo" },
      { name: "SISPRO", desc: "Carga de indicadores del sector salud al Ministerio.", status: "En roadmap" },
    ],
  },
  {
    category: "EPS y Aseguradoras",
    color: "#0066CC",
    items: [
      { name: "Portales EPS", desc: "Integración con portales de radicación de Sura, Sanitas, Nueva EPS, Compensar y más.", status: "Nativo" },
      { name: "Glosas electrónicas", desc: "Recepción y respuesta de glosas por intercambio de archivos EDI/XML estándar.", status: "Nativo" },
      { name: "ADRES", desc: "Consulta de afiliados y estado de aseguramiento en tiempo real.", status: "Beta" },
    ],
  },
  {
    category: "Sistemas clínicos (HIS/RIS)",
    color: "#7C3AED",
    items: [
      { name: "HL7 FHIR R4", desc: "Interoperabilidad con sistemas clínicos mediante el estándar internacional HL7 FHIR.", status: "Nativo" },
      { name: "API REST", desc: "API REST documentada (OpenAPI 3.0) para integración con cualquier sistema HIS/RIS.", status: "Nativo" },
      { name: "Webhooks", desc: "Notificaciones en tiempo real de cambios de estado de facturas y glosas.", status: "Nativo" },
    ],
  },
  {
    category: "Productividad",
    color: "#059669",
    items: [
      { name: "Microsoft 365", desc: "Exportación de reportes directamente a Excel y SharePoint.", status: "Nativo" },
      { name: "Slack / Teams", desc: "Alertas de glosas, vencimientos y estados críticos en tus canales.", status: "Beta" },
      { name: "Power BI", desc: "Conector nativo para visualizar datos SESA en dashboards Power BI.", status: "En roadmap" },
    ],
  },
];

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Nativo: { bg: "var(--sesa-success-muted)", color: "var(--sesa-success)" },
  Beta: { bg: "var(--sesa-accent-2-muted)", color: "var(--sesa-accent-2)" },
  "En roadmap": { bg: "var(--sesa-surface-hover)", color: "var(--sesa-text-muted)" },
};

export function Integrations() {
  return (
    <section
      id="integrations"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--sesa-surface)",
        borderTop: "1px solid var(--sesa-border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", marginBottom: "72px" }} className="integ-header">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <Badge variant="accent" size="sm">Ecosistema conectado</Badge>
            <h2 style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800, letterSpacing: "-0.03em",
              color: "var(--sesa-text-primary)",
              margin: "16px 0",
              lineHeight: 1.12,
            }}>
              Conectado con todo
              <br />
              <span className="gradient-text">el ecosistema salud</span>
            </h2>
            <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", lineHeight: 1.75, marginBottom: "28px" }}>
              SESA se integra nativamente con DIAN, portales EPS, sistemas HIS/RIS y herramientas de productividad.
              Sin desarrollos costosos: listo en días.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {[
                { icon: Zap, text: "Integración nativa lista en días, no meses" },
                { icon: Shield, text: "Comunicaciones cifradas (TLS 1.3 / mTLS)" },
                { icon: RefreshCw, text: "Sincronización bidireccional en tiempo real" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--sesa-text-secondary)" }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "var(--sesa-radius-sm)",
                    backgroundColor: "var(--sesa-accent-muted)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={13} style={{ color: "var(--sesa-accent)" }} />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <Button variant="secondary" size="md">
              Ver documentación API
              <ArrowRight size={14} />
            </Button>
          </motion.div>

          {/* Integration hub visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <IntegrationHub />
          </motion.div>
        </div>

        {/* Integration categories grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }} className="integ-grid">
          {INTEGRATIONS.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: ci * 0.08 }}
              style={{
                backgroundColor: "var(--sesa-bg)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                overflow: "hidden",
              }}
            >
              {/* Category header */}
              <div style={{
                padding: "14px 20px",
                borderBottom: "1px solid var(--sesa-border)",
                display: "flex", alignItems: "center", gap: "10px",
                backgroundColor: "var(--sesa-surface)",
              }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%", backgroundColor: cat.color, flexShrink: 0,
                }} />
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--sesa-text-primary)", letterSpacing: "-0.01em" }}>{cat.category}</span>
              </div>

              {/* Items */}
              {cat.items.map((item, ii) => {
                const s = STATUS_STYLE[item.status] ?? STATUS_STYLE["En roadmap"];
                return (
                  <div key={item.name} style={{
                    padding: "14px 20px",
                    borderBottom: ii < cat.items.length - 1 ? "1px solid var(--sesa-border)" : "none",
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px",
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--sesa-text-primary)", marginBottom: "3px" }}>{item.name}</div>
                      <div style={{ fontSize: "12px", color: "var(--sesa-text-muted)", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                    <span style={{
                      fontSize: "10px", fontWeight: 700, whiteSpace: "nowrap",
                      padding: "3px 8px", borderRadius: "var(--sesa-radius-full)",
                      backgroundColor: s.bg, color: s.color,
                      letterSpacing: "0.02em", flexShrink: 0,
                    }}>
                      {item.status}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .integ-header { display: grid !important; }
        .integ-grid { display: grid !important; }
        @media(max-width:900px){
          .integ-header { grid-template-columns: 1fr !important; }
          .integ-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function IntegrationHub() {
  const nodes = [
    { label: "DIAN", color: "#E31837", angle: 0 },
    { label: "EPS", color: "#0066CC", angle: 60 },
    { label: "HIS/RIS", color: "#7C3AED", angle: 120 },
    { label: "FHIR", color: "#7C3AED", angle: 180 },
    { label: "Power BI", color: "#F2C811", angle: 240 },
    { label: "ADRES", color: "#059669", angle: 300 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1", maxWidth: "360px", margin: "0 auto" }}>
      {/* Center SESA logo */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80px", height: "80px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, var(--sesa-accent), var(--sesa-accent-2))",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 2,
        boxShadow: "var(--sesa-shadow-glow-accent), var(--sesa-shadow-lg)",
      }}>
        <span style={{ color: "white", fontWeight: 800, fontSize: "22px", letterSpacing: "-0.04em" }}>S</span>
      </div>

      {/* Connection ring */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "240px", height: "240px",
        borderRadius: "50%",
        border: "1px dashed var(--sesa-border-strong)",
        zIndex: 0,
      }} />

      {/* Nodes */}
      {nodes.map((node, i) => {
        const rad = (node.angle - 90) * (Math.PI / 180);
        const r = 120;
        const x = 50 + (r / 3.6) * Math.cos(rad);
        const y = 50 + (r / 3.6) * Math.sin(rad);

        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <div style={{
              width: "52px", height: "52px",
              borderRadius: "14px",
              backgroundColor: "var(--sesa-surface)",
              border: `2px solid ${node.color}35`,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              boxShadow: "var(--sesa-shadow-md)",
              gap: "2px",
            }}>
              <div style={{
                width: "20px", height: "20px", borderRadius: "6px",
                backgroundColor: `${node.color}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: node.color }} />
              </div>
              <span style={{ fontSize: "8px", fontWeight: 700, color: "var(--sesa-text-secondary)", letterSpacing: "0.02em" }}>{node.label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
