"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "Sura EPS", abbr: "SURA", color: "#0066CC" },
  { name: "Sanitas EPS", abbr: "SAN", color: "#E31837" },
  { name: "Nueva EPS", abbr: "NEPS", color: "#009B4E" },
  { name: "Compensar EPS", abbr: "COMP", color: "#FF6B00" },
  { name: "Coomeva EPS", abbr: "COOM", color: "#8B0000" },
  { name: "Famisanar", abbr: "FAMI", color: "#1E3A5F" },
  { name: "Colmédica", abbr: "COL", color: "#00A859" },
  { name: "Cruz Blanca", abbr: "CB", color: "#003580" },
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
          Utilizado por líderes del sector salud colombiano
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
            { value: "$48B+", label: "Procesado en COP" },
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
