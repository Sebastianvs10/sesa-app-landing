"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Clock, Star, CheckCircle2, ArrowRight } from "lucide-react";

const CASOS = [
  {
    institution: "Clínica San Rafael",
    city: "Bogotá, D.C.",
    type: "Clínica de II nivel",
    beds: "280 camas",
    color: "var(--sesa-accent)",
    logo: "CSR",
    challenge: "La clínica radicaba manualmente en promedio 3 días después del servicio, con una tasa de glosas del 18% y sin visibilidad de cartera en tiempo real. El equipo de facturación dedicaba el 60% del tiempo a corrección de errores.",
    solution: "Implementación completa de SESA: módulo de facturación electrónica con validación previa, gestión de glosas con alertas y tablero de cartera por EPS.",
    timeline: "6 semanas de implementación · 48h primer sprint",
    results: [
      { metric: "−38%", label: "Reducción de glosas", icon: TrendingDown, color: "var(--sesa-success)", good: true },
      { metric: "3 días → 4h", label: "Tiempo de radicación", icon: Clock, color: "var(--sesa-accent)", good: true },
      { metric: "+22%", label: "Recaudo mensual", icon: TrendingUp, color: "var(--sesa-success)", good: true },
      { metric: "87%", label: "Tasa recuperación glosas", icon: Star, color: "var(--sesa-warning)", good: true },
    ],
    quote: "SESA nos cambió la forma de operar. Antes el equipo de cartera era reactivo; ahora es completamente proactivo con priorización inteligente.",
    author: "Dr. Andrés Morales — Director Financiero",
    modules: ["Facturación electrónica", "Gestión de glosas", "Cartera inteligente", "Tableros ejecutivos"],
  },
  {
    institution: "Hospital Regional del Caribe",
    city: "Barranquilla, Atlántico",
    type: "Hospital público de III nivel",
    beds: "520 camas",
    color: "var(--sesa-accent-2)",
    logo: "HRC",
    challenge: "Hospital con alta complejidad y múltiples EPS. El proceso de RIPS se hacía manualmente, con frecuentes rechazos por inconsistencias de códigos CUPS y problemas de radicación en término.",
    solution: "SESA reemplazó el proceso manual de RIPS con generación automática desde el HIS, integración con los portales EPS y un dashboard de seguimiento de radicaciones por contrato.",
    timeline: "8 semanas · Integración HIS en paralelo",
    results: [
      { metric: "99.1%", label: "Facturas aprobadas en primer intento", icon: CheckCircle2, color: "var(--sesa-success)", good: true },
      { metric: "−65%", label: "Rechazos por errores RIPS", icon: TrendingDown, color: "var(--sesa-success)", good: true },
      { metric: "+$2.1B", label: "COP recuperados en 6 meses", icon: TrendingUp, color: "var(--sesa-accent-2)", good: true },
      { metric: "4h", label: "Ciclo de radicación completo", icon: Clock, color: "var(--sesa-accent)", good: true },
    ],
    quote: "El RIPS automático desde el HIS fue un cambio transformador. Eliminamos el 100% del reproceso manual y los errores de codificación CUPS cayeron a cero.",
    author: "Lic. Carolina Ospina — Jefe de Facturación",
    modules: ["Facturación + RIPS automático", "Integración HL7 FHIR", "Portales EPS", "Reportes regulatorios"],
  },
  {
    institution: "Red Hospitalaria del Eje Cafetero",
    city: "Manizales, Caldas",
    type: "Red de 5 sedes de I, II y III nivel",
    beds: "860 camas (5 sedes)",
    color: "var(--sesa-info)",
    logo: "RHE",
    challenge: "Red con 5 sedes que operaban con sistemas distintos, imposibilitando la visión consolidada de cartera y facturación. El cierre financiero mensual tomaba 12 días.",
    solution: "Despliegue multi-sede de SESA con panel centralizado. Migración de datos de los 5 sistemas legacy. Unificación de procesos de facturación y una vista única de cartera por EPS y sede.",
    timeline: "12 semanas · Migración de datos incluida",
    results: [
      { metric: "5 → 1", label: "Sistemas unificados", icon: CheckCircle2, color: "var(--sesa-success)", good: true },
      { metric: "12 → 2 días", label: "Cierre financiero mensual", icon: Clock, color: "var(--sesa-accent)", good: true },
      { metric: "+31%", label: "Visibilidad de cartera consolidada", icon: TrendingUp, color: "var(--sesa-info)", good: true },
      { metric: "−42%", label: "Tiempo operativo del equipo de facturación", icon: TrendingDown, color: "var(--sesa-success)", good: true },
    ],
    quote: "Pasar de 5 sistemas diferentes a uno solo fue un desafío enorme. SESA lo hizo posible con una migración sin interrupciones y un onboarding impecable.",
    author: "Ing. Juliana Pérez — Gerente de TI",
    modules: ["Multi-sede unificado", "Migración de datos", "Cierre financiero", "Tableros por sede"],
  },
  {
    institution: "Clínica del Country Norte",
    city: "Medellín, Antioquia",
    type: "Clínica privada de alta complejidad",
    beds: "190 camas",
    color: "var(--sesa-warning)",
    logo: "CCN",
    challenge: "Alta proporción de pacientes de medicina prepagada y EPS. Cartera envejecida con $8B COP en facturas con más de 90 días sin pago. Sin herramienta para priorizar cobro.",
    solution: "Módulo de cartera inteligente de SESA con score por EPS, automatización de comunicaciones de cobro y tablero de cartera por antigüedad para la junta directiva.",
    timeline: "4 semanas · Go-live exprés",
    results: [
      { metric: "+22%", label: "Recaudo en primer semestre", icon: TrendingUp, color: "var(--sesa-success)", good: true },
      { metric: "−34 días", label: "Días promedio de cartera", icon: Clock, color: "var(--sesa-accent)", good: true },
      { metric: "$3.2B", label: "COP recuperados de cartera >90 días", icon: TrendingUp, color: "var(--sesa-warning)", good: true },
      { metric: "8→4h", label: "Tiempo de reunión de cartera", icon: TrendingDown, color: "var(--sesa-success)", good: true },
    ],
    quote: "La priorización inteligente de cartera nos dijo exactamente a quién cobrarle primero. El efecto en el flujo de caja fue inmediato.",
    author: "Lic. Fernando Ríos — Gerente Financiero",
    modules: ["Cartera inteligente", "Score EPS", "Automatización de cobro", "Reportes financieros"],
  },
];

export function CasosContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>

      {/* Summary bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
        className="casos-4col"
      >
        {[
          { val: "120+", label: "Instituciones activas", color: "var(--sesa-accent)" },
          { val: "40%", label: "Reducción promedio de glosas", color: "var(--sesa-success)" },
          { val: "$48B+", label: "Facturado en COP", color: "var(--sesa-accent-2)" },
          { val: "48h", label: "Promedio de onboarding", color: "var(--sesa-warning)" },
        ].map(({ val, label, color }) => (
          <div key={label} style={{
            backgroundColor: "var(--sesa-surface)",
            border: "1px solid var(--sesa-border)",
            borderRadius: "var(--sesa-radius-xl)",
            padding: "20px",
            textAlign: "center",
            borderLeft: `3px solid ${color}`,
          }}>
            <div style={{ fontSize: "1.9rem", fontWeight: 900, color, letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}>{val}</div>
            <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)", marginTop: "4px" }}>{label}</div>
          </div>
        ))}
      </motion.div>

      {/* Case studies */}
      {CASOS.map((caso, i) => (
        <motion.article
          key={caso.institution}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          style={{
            backgroundColor: "var(--sesa-surface)",
            border: "1px solid var(--sesa-border)",
            borderRadius: "var(--sesa-radius-2xl)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div style={{
            padding: "28px 32px",
            borderBottom: "1px solid var(--sesa-border)",
            background: `linear-gradient(135deg, ${caso.color}08 0%, transparent 60%)`,
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            flexWrap: "wrap", gap: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "var(--sesa-radius-lg)",
                background: `linear-gradient(135deg, ${caso.color}, var(--sesa-accent-2))`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white", fontSize: "14px", fontWeight: 800, flexShrink: 0,
              }}>
                {caso.logo}
              </div>
              <div>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--sesa-text-primary)", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{caso.institution}</h2>
                <p style={{ fontSize: "13px", color: "var(--sesa-text-muted)", margin: 0 }}>{caso.city} · {caso.type} · {caso.beds}</p>
              </div>
            </div>
            <div style={{
              fontSize: "11px", fontWeight: 600, padding: "4px 12px",
              borderRadius: "var(--sesa-radius-full)",
              backgroundColor: `${caso.color}15`, color: caso.color,
              border: `1px solid ${caso.color}30`,
            }}>
              ⏱ {caso.timeline}
            </div>
          </div>

          <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }} className="caso-2col">
            {/* Left: challenge + solution */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h3 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sesa-danger)", marginBottom: "10px" }}>
                  Reto
                </h3>
                <p style={{ fontSize: "14px", color: "var(--sesa-text-secondary)", lineHeight: 1.75, margin: 0 }}>{caso.challenge}</p>
              </div>
              <div>
                <h3 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sesa-accent)", marginBottom: "10px" }}>
                  Solución SESA
                </h3>
                <p style={{ fontSize: "14px", color: "var(--sesa-text-secondary)", lineHeight: 1.75, margin: 0 }}>{caso.solution}</p>
              </div>
              {/* Modules */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {caso.modules.map((m) => (
                  <span key={m} style={{
                    fontSize: "11px", fontWeight: 600, padding: "3px 10px",
                    borderRadius: "var(--sesa-radius-full)",
                    backgroundColor: "var(--sesa-accent-muted)",
                    color: "var(--sesa-accent)",
                    border: "1px solid var(--sesa-border-accent)",
                  }}>{m}</span>
                ))}
              </div>
              {/* Quote */}
              <blockquote style={{
                borderLeft: `3px solid ${caso.color}`,
                paddingLeft: "16px", margin: 0,
              }}>
                <p style={{ fontSize: "14px", fontStyle: "italic", color: "var(--sesa-text-primary)", lineHeight: 1.7, marginBottom: "8px" }}>"{caso.quote}"</p>
                <cite style={{ fontSize: "12px", color: "var(--sesa-text-muted)", fontStyle: "normal" }}>{caso.author}</cite>
              </blockquote>
            </div>

            {/* Right: results */}
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sesa-success)", marginBottom: "16px" }}>
                Resultados
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {caso.results.map(({ metric, label, icon: Icon, color }) => (
                  <div key={label} style={{
                    backgroundColor: "var(--sesa-bg)",
                    border: "1px solid var(--sesa-border)",
                    borderRadius: "var(--sesa-radius-lg)",
                    padding: "16px",
                    borderLeft: `3px solid ${color}`,
                  }}>
                    <div style={{ fontSize: "1.3rem", fontWeight: 900, color, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums", marginBottom: "4px" }}>{metric}</div>
                    <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)", lineHeight: 1.4 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          padding: "48px 32px",
          backgroundColor: "var(--sesa-surface)",
          border: "1px solid var(--sesa-border)",
          borderRadius: "var(--sesa-radius-2xl)",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--sesa-text-primary)", marginBottom: "12px" }}>
          Tu institución puede ser el próximo caso de éxito
        </h2>
        <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
          Agenda una demo de 30 minutos y te mostramos cómo SESA funciona con el flujo real de tu institución.
        </p>
        <a href="/#pricing" style={{ textDecoration: "none" }}>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "var(--sesa-accent)",
            color: "white", border: "none", cursor: "pointer",
            fontSize: "14px", fontWeight: 700,
            padding: "12px 28px", borderRadius: "var(--sesa-radius-md)",
            boxShadow: "var(--sesa-shadow-md)",
          }}>
            Solicitar demo gratuito <ArrowRight size={15} />
          </button>
        </a>
      </motion.div>

      <style>{`
        .casos-4col { grid-template-columns: repeat(4,1fr) !important; }
        .caso-2col { grid-template-columns: 1fr 1fr !important; }
        @media(max-width:900px){
          .casos-4col { grid-template-columns: repeat(2,1fr) !important; }
          .caso-2col { grid-template-columns: 1fr !important; }
        }
        @media(max-width:480px){
          .casos-4col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
