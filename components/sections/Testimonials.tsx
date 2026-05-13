"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const TESTIMONIALS = [
  {
    quote:
      "SESA redujo nuestras glosas en un 38% en los primeros tres meses. El equipo de cartera ahora puede enfocarse en recuperación, no en papelería.",
    name: "Dr. Andrés Morales",
    role: "Director Financiero",
    org: "Clínica San Rafael, Bogotá",
    avatar: "AM",
    accentColor: "var(--sesa-accent)",
  },
  {
    quote:
      "La radicación electrónica con SESA pasó de tomar 3 días a menos de 4 horas. El cumplimiento normativo de RIPS es automático y sin errores.",
    name: "Lic. Carolina Ospina",
    role: "Jefe de Facturación",
    org: "Hospital Regional del Caribe",
    avatar: "CO",
    accentColor: "var(--sesa-accent-2)",
  },
  {
    quote:
      "Multi-sede, multi-EPS y con reportes en tiempo real. Por fin una solución que entiende la complejidad del sector salud colombiano.",
    name: "Ing. Juliana Pérez",
    role: "Gerente de TI",
    org: "Red Hospitalaria del Eje Cafetero",
    avatar: "JP",
    accentColor: "var(--sesa-success)",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 24px",
        backgroundColor: "var(--sesa-surface)",
        borderTop: "1px solid var(--sesa-border)",
        borderBottom: "1px solid var(--sesa-border)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <Badge variant="accent2" size="sm">
            Testimonios
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
            Lo que dicen nuestros{" "}
            <span className="gradient-text">clientes</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--sesa-text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Instituciones de salud en toda Colombia confían en SESA para operar
            con mayor precisión y velocidad.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              style={{
                backgroundColor: "var(--sesa-bg)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-xl)",
                padding: "28px",
                position: "relative",
              }}
            >
              {/* Accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "3px",
                  backgroundColor: t.accentColor,
                  borderRadius: "var(--sesa-radius-xl) 0 0 var(--sesa-radius-xl)",
                }}
              />

              <Quote
                size={24}
                style={{
                  color: t.accentColor,
                  opacity: 0.4,
                  marginBottom: "16px",
                }}
              />

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--sesa-text-primary)",
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${t.accentColor}, var(--sesa-accent-2))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--sesa-text-primary)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "var(--sesa-text-secondary)" }}>
                    {t.role} · {t.org}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
