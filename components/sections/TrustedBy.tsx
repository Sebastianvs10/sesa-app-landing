"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Hospital Universitario", abbr: "HUV", color: "#0066CC" },
  { name: "Clínica del Country", abbr: "CDC", color: "#1E3A5F" },
  { name: "Red IPS del Valle", abbr: "RIV", color: "#0A7A70" },
  { name: "Grupo Hospitalario", abbr: "GHS", color: "#7C3AED" },
  { name: "Clínica San Rafael", abbr: "CSR", color: "#E31837" },
  { name: "IPS Comunitaria", abbr: "IPC", color: "#059669" },
  { name: "Centro Médico", abbr: "CMS", color: "#B45309" },
  { name: "Hospital Regional", abbr: "HRS", color: "#1843A0" },
];

export function TrustedBy() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--sesa-border)",
        borderBottom: "1px solid var(--sesa-border)",
        backgroundColor: "var(--sesa-surface)",
        padding: "48px 24px",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--sesa-text-muted)",
            marginBottom: "32px",
          }}
        >
          Instituciones hospitalarias que gestionan sus servicios con SESA
        </motion.p>

        {/* Logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.04, transition: { duration: 0.12 } }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                backgroundColor: "var(--sesa-bg)",
                border: "1px solid var(--sesa-border)",
                borderRadius: "var(--sesa-radius-lg)",
                cursor: "default",
                transition: "all var(--sesa-motion-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--sesa-border-strong)";
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--sesa-shadow-sm)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--sesa-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Logo mark */}
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "6px",
                  backgroundColor: `${logo.color}18`,
                  border: `1px solid ${logo.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{
                  fontSize: "9px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: logo.color,
                }}>
                  {logo.abbr}
                </span>
              </div>
              <span style={{
                fontSize: "12.5px",
                fontWeight: 600,
                color: "var(--sesa-text-secondary)",
                whiteSpace: "nowrap",
              }}>
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "120+", label: "Instituciones activas" },
            { value: "1.2M+", label: "Servicios gestionados/mes" },
            { value: "99.9%", label: "Uptime garantizado" },
            { value: "< 4h", label: "Tiempo de radicación" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "var(--sesa-text-primary)",
                letterSpacing: "-0.03em",
                fontVariantNumeric: "tabular-nums",
              }}>
                {value}
              </div>
              <div style={{ fontSize: "11px", color: "var(--sesa-text-muted)", marginTop: "2px" }}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
