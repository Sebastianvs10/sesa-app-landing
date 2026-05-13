"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const TESTIMONIALS = [
  {
    quote: "SESA nos permitió unificar la historia clínica de todas nuestras sedes. Los médicos tienen la información del paciente disponible en tiempo real, sin importar dónde fue atendido la última vez.",
    name: "Dr. Andrés Morales",
    role: "Director Médico",
    org: "Clínica San Rafael",
    city: "Bogotá",
    avatar: "AM",
    result: "HC unificada multi-sede",
    resultColor: "var(--sesa-success)",
    accentColor: "var(--sesa-accent)",
  },
  {
    quote: "El módulo de RIPS automático y la facturación electrónica DIAN eliminaron por completo los reprocesos. La radicación pasó de tomar 3 días a menos de 4 horas.",
    name: "Lic. Carolina Ospina",
    role: "Jefe de Facturación",
    org: "Hospital Regional del Caribe",
    city: "Barranquilla",
    avatar: "CO",
    result: "3 días → 4 horas radicación",
    resultColor: "var(--sesa-accent-2)",
    accentColor: "var(--sesa-accent-2)",
  },
  {
    quote: "Con SESA tenemos trazabilidad completa desde la consulta hasta el pago. La auditoría médica accede a indicadores de calidad en tiempo real sin depender del área administrativa.",
    name: "Dra. Juliana Pérez",
    role: "Coordinadora de Auditoría Médica",
    org: "Red Hospitalaria del Eje Cafetero",
    city: "Manizales",
    avatar: "JP",
    result: "Auditoría en tiempo real",
    resultColor: "var(--sesa-info)",
    accentColor: "var(--sesa-info)",
  },
  {
    quote: "La farmacia quedó totalmente integrada con la historia clínica. La dispensación ya no necesita reingreso de datos: el sistema lee la fórmula médica y actualiza el inventario automáticamente.",
    name: "Q.F. Fernando Ríos",
    role: "Regente de Farmacia",
    org: "Hospital San Vicente",
    city: "Medellín",
    avatar: "FR",
    result: "Dispensación sin reproceso",
    resultColor: "var(--sesa-success)",
    accentColor: "var(--sesa-accent)",
  },
  {
    quote: "En 48 horas teníamos urgencias, hospitalización y consulta externa operando en SESA. La transición no interrumpió la atención de un solo paciente. El soporte fue excepcional.",
    name: "Dra. María Fernanda Castro",
    role: "Directora Médica",
    org: "IPS Salud Total",
    city: "Cali",
    avatar: "MC",
    result: "48h onboarding completo",
    resultColor: "var(--sesa-warning)",
    accentColor: "var(--sesa-warning)",
  },
  {
    quote: "La integración con nuestros sistemas vía FHIR R4 fue sin traumatismos. Ahora el flujo clínico completo — consulta, orden, laboratorio, resultado, factura — se gestiona en un solo sistema.",
    name: "Ing. Luis Alberto García",
    role: "Líder de Tecnología",
    org: "Hospital Universitario del Valle",
    city: "Cali",
    avatar: "LG",
    result: "Integración FHIR en 5 días",
    resultColor: "var(--sesa-accent-2)",
    accentColor: "var(--sesa-accent-2)",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={12} style={{ fill: "#F59E0B", color: "#F59E0B" }} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--sesa-surface)",
        borderTop: "1px solid var(--sesa-border)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <Badge variant="accent2" size="sm">Testimonios reales</Badge>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "var(--sesa-text-primary)", margin: "16px 0",
            lineHeight: 1.12,
          }}>
            Instituciones que ya{" "}
            <span className="gradient-text">confían en SESA</span>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--sesa-text-secondary)", maxWidth: "520px", margin: "0 auto" }}>
            Resultados verificables de médicos, farmacéuticos, directivos y líderes de TI de IPS colombianas que operan con SESA.
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              style={{
                backgroundColor: "var(--sesa-bg)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                padding: "24px",
                display: "flex", flexDirection: "column", gap: "16px",
                boxShadow: "var(--sesa-shadow-sm)",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: `linear-gradient(90deg, ${t.accentColor}, transparent)`,
              }} />

              {/* Stars + result pill */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Stars />
                <span style={{
                  fontSize: "10px", fontWeight: 700,
                  padding: "3px 8px", borderRadius: "var(--sesa-radius-full)",
                  backgroundColor: `${t.resultColor}15`,
                  color: t.resultColor,
                  border: `1px solid ${t.resultColor}25`,
                }}>
                  {t.result}
                </span>
              </div>

              {/* Quote */}
              <p style={{
                fontSize: "13.5px", color: "var(--sesa-text-primary)",
                lineHeight: 1.7, fontStyle: "italic", flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "12px", borderTop: "1px solid var(--sesa-border)" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.accentColor}, var(--sesa-accent-2))`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontSize: "12px", fontWeight: 700, flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 650, color: "var(--sesa-text-primary)" }}>{t.name}</div>
                  <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)" }}>{t.role} · {t.org}, {t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .testimonials-grid { grid-template-columns: repeat(3,1fr) !important; }
        @media(max-width:900px){.testimonials-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:580px){.testimonials-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
}
